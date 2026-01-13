import EventEmitter from '../utils/EventEmitter.js';
import { EXPEDITIONS } from '../data/ExpeditionData.js';

export default class ExpeditionManager extends EventEmitter {
    constructor(eventBus, resourceManager, creatureManager, facilityManager) {
        super();
        this.eventBus = eventBus;
        this.resourceManager = resourceManager;
        this.creatureManager = creatureManager;
        this.facilityManager = facilityManager; // [Fix] Missing dependency

        this.activeExpeditions = []; // 진행 중인 탐사 목록
        // 구조: { id, expeditionId, creatureInstanceId, startTime, durationSec, endTime }
    }

    startExpedition(creatureInstanceId, expeditionId) {
        const expeditionDef = EXPEDITIONS.find(e => e.id === expeditionId);
        if (!expeditionDef) {
            console.error("존재하지 않는 탐사 ID:", expeditionId);
            return false;
        }

        // 1. 크리처 상태 체크
        const creature = this.creatureManager.getCreatureById(creatureInstanceId);
        if (!creature) {
            return false; // 존재하지 않는 크리처
        }
        if (creature.isOnExpedition) {
            this.emit('expedition:error', { message: "이미 탐사 중인 크리처입니다." });
            return false;
        }

        // 2. 에너지 체크 및 차감
        if (!this.resourceManager.spendEnergy(expeditionDef.energyCost)) {
            this.emit('expedition:error', { message: "에너지가 부족합니다." });
            return false;
        }

        // 3. 탐사 시작 처리
        this.creatureManager.setCreatureState(creatureInstanceId, { isOnExpedition: true });

        const now = Date.now();
        const newExpedition = {
            id: `exp_${now}_${Math.floor(Math.random() * 1000)}`, // 고유 ID
            expeditionId: expeditionId,
            creatureInstanceId: creatureInstanceId,
            creatureName: creature.def.name,
            expeditionName: expeditionDef.name,
            startTime: now,
            durationSec: expeditionDef.durationSec,
            endTime: now + (expeditionDef.durationSec * 1000),
            rewards: {
                gold: expeditionDef.baseGoldReward,
                exp: expeditionDef.baseExpReward
            },
            // [Phased System]
            phase: 'TRAVEL', // TRAVEL(0-20%) -> EXPLORE(20-80%) -> RETURN(80-100%)
            logs: [],
            lastLogTime: 0,
            isReportReady: false // 복귀 단계 진입 시 true
        };

        this.activeExpeditions.push(newExpedition);

        // 탐사 시작 이벤트 알림
        this.emit('expedition:started', newExpedition);
        this.eventBus.emit('expedition:started', newExpedition);
        return true;
    }

    update(deltaTime) {
        const now = Date.now();

        // 탐사 진행 업데이트
        this.activeExpeditions.forEach(exp => {
            const elapsed = now - exp.startTime;
            const progress = elapsed / (exp.durationSec * 1000);

            // Phase Transition Logic
            if (progress < 0.2) {
                if (exp.phase !== 'TRAVEL') {
                    exp.phase = 'TRAVEL';
                    this.addLog(exp, "탐사지로 이동 중...");
                }
            } else if (progress >= 0.2 && progress < 0.8) {
                if (exp.phase !== 'EXPLORE') {
                    exp.phase = 'EXPLORE';
                    this.addLog(exp, "목표 지점 도착. 정찰 및 탐사 개시.");
                }
                // [Exploration Dynamic Events] - 일정 간격(예: 10% 단위)으로 이벤트 발생
                // 실제 구현은 update 틱이 빠르므로, 시간 간격 체크 필요
                if (now - exp.lastLogTime > 2000) { // 2초마다 체크
                    this.processExplorationEvent(exp);
                    exp.lastLogTime = now;
                }
            } else if (progress >= 0.8 && progress < 1.0) {
                if (exp.phase !== 'RETURN') {
                    exp.phase = 'RETURN';
                    this.addLog(exp, "탐사 종료. 기지로 복귀 시작.");

                    // [핵심] 복귀 단계 진입 시 결과 확정 및 보고서 생성
                    if (!exp.isReportReady) {
                        this.generateResult(exp); // 결과 미리 생성 (보상/히든이벤트 결정)
                        exp.isReportReady = true;
                        this.emit('expedition:reportReady', exp); // UI 알림용
                    }
                }
            }
        });

        // 완료 처리 (시간 종료 시)
        // 복귀 시간이 끝나면 자동으로 기지에 도착하고 마커가 사라짐
        const completed = this.activeExpeditions.filter(exp => now >= exp.endTime);

        if (completed.length > 0) {
            this.activeExpeditions = this.activeExpeditions.filter(exp => now < exp.endTime);
            completed.forEach(exp => {
                this.finalizeExpedition(exp);
            });
        }
    }

    // 중간 탐사 이벤트 (로그 생성) - 지역별 다양화
    processExplorationEvent(exp) {
        const locationThemes = {
            'yggdrasil_root': ["거대한 뿌리의 진동 감지", "세계수의 이슬 채집 시도", "라타토스크의 흔적 발견", "고대 룬 문자 해독 중"],
            'hephaestus_forge': ["용암의 열기 견디는 중", "버려진 골렘 잔해 발견", "신성한 망치 소리가 들림", "희귀 금속 반응 탐지"],
            'peach_garden_hidden': ["신선의 안개 속 이동", "천년 복숭아 향기 감지", "구름 위 존재 목격", "불로초 기운 분석 중"]
        };

        const commonEvents = [
            "주변 지형 데이터를 스캔했습니다.",
            "미확인 에너지 파장을 분석 중...",
            "소형 몬스터 무리를 우회했습니다.",
            "희귀 광석 반응을 감지했습니다.",
            "통신 상태 양호. 데이터 전송 중.",
            "이상 징후 없음. 계속 전진.",
            "주변 생명체 관찰 기록 중."
        ];

        let msg = "";
        const roll = Math.random();

        // 35% 확률로 지역 특화 로그
        if (roll < 0.35 && locationThemes[exp.expeditionId]) {
            const themes = locationThemes[exp.expeditionId];
            msg = themes[Math.floor(Math.random() * themes.length)];
        } else {
            msg = commonEvents[Math.floor(Math.random() * commonEvents.length)];
        }

        // 25% 확률로 로그 추가
        if (Math.random() < 0.25) {
            this.addLog(exp, msg);
        }
    }

    addLog(exp, message) {
        exp.logs.push({ time: Date.now(), message: message });
        // UI 쪽에서 이 로그를 폴링하거나 이벤트를 받을 수 있음
        // 지금은 내부 데이터에만 쌓음
    }

    // 결과 생성 (복귀 시점) - 다양한 이벤트 결과
    generateResult(exp) {
        const creature = this.creatureManager.getCreatureById(exp.creatureInstanceId);

        let goldReward = exp.rewards.gold;
        let expReward = exp.rewards.exp;
        let gemReward = 0;

        // 연구 효과 적용
        if (this.facilityManager) {
            const bonusPercent = this.facilityManager.getEffectValue('gold_bonus_percent');
            if (bonusPercent > 0) {
                goldReward += Math.floor(goldReward * (bonusPercent / 100));
            }
        }

        // 행운 판정 (크리처 레벨/등급이 높을수록 유리)
        let luckRoll = Math.random();
        if (creature) {
            luckRoll += (creature.level || 1) * 0.005; // 레벨당 +0.5%
        }

        let eventType = 'NORMAL';
        let eventMessage = "탐사를 성공적으로 완수했습니다.";

        // === 이벤트 테이블 ===
        if (luckRoll > 0.97) {
            // [LEGENDARY] ~3%
            eventType = 'LEGENDARY';
            gemReward = Math.floor(Math.random() * 5) + 3; // 3~7 Gems
            goldReward = Math.floor(goldReward * 3);
            expReward = Math.floor(expReward * 2);
            eventMessage = "🌟 [전설] 차원의 틈에서 '고대 젬 광맥'을 발견했습니다!!";
        } else if (luckRoll > 0.85) {
            // [GREAT_SUCCESS] ~12%
            eventType = 'GREAT_SUCCESS';
            goldReward = Math.floor(goldReward * 2.0);
            expReward = Math.floor(expReward * 1.5);
            eventMessage = "✨ [대성공] 숨겨진 보물 창고를 발견! 엄청난 성과입니다.";
        } else if (luckRoll > 0.70) {
            // [BATTLE_WIN] or [DISCOVERY] ~15%
            if (creature && creature.baseStr > creature.baseInt) {
                eventType = 'BATTLE_WIN';
                goldReward = Math.floor(goldReward * 1.5);
                eventMessage = "⚔️ [토벌] 강력한 문지기를 제압하고 현상금 획득!";
            } else {
                eventType = 'DISCOVERY';
                expReward = Math.floor(expReward * 1.8);
                eventMessage = "📜 [발견] 잊혀진 고대 유물을 해석하여 지식 습득!";
            }
        } else if (luckRoll < 0.08) {
            // [TRAP] ~8%
            eventType = 'TRAP';
            goldReward = Math.floor(goldReward * 0.6);
            eventMessage = "⚠️ [함정] 갑작스런 매복에 물자 일부 손실...";
        } else if (luckRoll < 0.03) {
            // [DISASTER] ~3%
            eventType = 'DISASTER';
            goldReward = Math.floor(goldReward * 0.3);
            eventMessage = "🌪️ [재난] 차원 폭풍에 휘말려 간신히 귀환...";
        } else {
            // [NORMAL] ~60%
            goldReward = Math.floor(goldReward * (0.9 + Math.random() * 0.2));
        }

        // 최종 보상 저장
        exp.rewards.gold = Math.floor(goldReward);
        exp.rewards.exp = Math.floor(expReward);
        exp.rewards.gem = gemReward;
        exp.eventResult = { type: eventType, message: eventMessage };
    }

    // 최종 종료 처리 (시간 만료)
    finalizeExpedition(exp) {
        // 이미 결과는 generateResult에서 생성됨

        // 1. 보상 지급
        if (exp.rewards.gold > 0) this.resourceManager.addGold(exp.rewards.gold);
        if (exp.rewards.gem && exp.rewards.gem > 0) this.resourceManager.addGem(exp.rewards.gem);

        // 2. 경험치 지급
        if (exp.rewards.exp > 0) {
            this.creatureManager.addExp(exp.creatureInstanceId, exp.rewards.exp);
            const creature = this.creatureManager.getCreatureById(exp.creatureInstanceId);
            if (creature) {
                creature.expeditionCount = (creature.expeditionCount || 0) + 1;
            }
        }

        // 3. 크리처 상태 복구
        this.creatureManager.setCreatureState(exp.creatureInstanceId, { isOnExpedition: false });

        // 4. 완료 이벤트
        // 복귀가 끝났으므로 "탐사 완료(최종)" 이벤트 발송
        // UI에서는 이때 마커를 지우고, 만약 사용자가 보고서를 아직 안 봤다면 팝업을 띄울 수도 있음 (선택 사항)
        this.emit('expedition:completed', exp);
        this.eventBus.emit('expedition:completed', exp);

        // [NEW] 자동 반복 로직
        if (this.isAutoRepeat) {
            setTimeout(() => {
                this.startExpedition(exp.creatureInstanceId, exp.expeditionId);
            }, 2000);
        }
    }

    setAutoRepeat(enabled) {
        this.isAutoRepeat = enabled;
        console.log(`[ExpeditionManager] Auto Repeat: ${enabled}`);
    }

    getActiveExpeditions() {
        return [...this.activeExpeditions];
    }

    // [저장/로드 시스템]
    getSerializableState() {
        return {
            activeExpeditions: this.activeExpeditions || [],
            isAutoRepeat: (this.isAutoRepeat === true) // Force boolean
        };
    }

    loadFromState(state) {
        if (!state) return;
        if (state.activeExpeditions) {
            const now = Date.now();
            const loadedExpeditions = state.activeExpeditions;

            loadedExpeditions.forEach(exp => {
                if (exp.endTime <= now) {
                    this.completeExpedition(exp);
                } else {
                    this.activeExpeditions.push(exp);
                    this.emit('expedition:started', exp);
                }
            });
        }
        if (state.isAutoRepeat !== undefined) {
            this.isAutoRepeat = state.isAutoRepeat;
        }
    }
}
