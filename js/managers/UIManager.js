// import UIManager from './UIManager.js'; // REMOVED SELF IMPORT
import { getCreaturePersonality } from '../data/PersonalityData.js';

/**
 * @class UIManager
 * @description 전역 UI 요소 캐싱, 탭 전환, 공통 UI 기능(로그, 모달)을 관리합니다.
 */
export default class UIManager {
    constructor(game) {
        this.game = game;
        this.ui = this._cacheElements();
        this.currentHighlight = null;
        this._initCommonEvents();
    }

    /**
     * @private
     * @description 주요 UI 요소들을 캐싱하고 누락 시 경고를 출력합니다.
     */
    _cacheElements() {
        const get = (id) => {
            const el = document.getElementById(id);
            if (!el) console.warn(`[UIManager] ⚠️ Missing UI Element: #${id}`);
            return el;
        };

        return {
            // 사이드바 및 탭
            tabHome: get('tab-home'),
            tabSummon: get('tab-summon'),
            tabExpedition: get('tab-expedition'),
            tabResearch: get('tab-research'),
            tabMission: get('tab-mission'),
            tabShop: get('tab-shop'),
            tabTeam: get('tab-team'),
            tabBattle: get('tab-battle'),

            // 메인 컨텐츠 영역
            contentHome: get('content-home'),
            contentSummon: get('content-summon'),
            contentExpedition: get('content-expedition'),
            contentResearch: get('content-research'),
            contentMission: get('content-mission'),
            contentShop: get('content-shop'),
            contentTeam: get('content-team'),
            contentBattle: get('content-battle'),

            // 공통 패널
            creatureList: get('creature-list'),
            detailPanel: get('detail-panel'),
            logContent: get('log-content'),

            // 필터 & 정렬
            sortOrder: get('sort-order'),
            filterRarity: get('filter-rarity'),
            filterElement: get('filter-element'),
            btnAutoCompose: get('btn-auto-compose'),
            autoBattleSelect: get('select-auto-battle'),

            // 로비 캐릭터
            lobbyCharacterImg: get('lobby-character-img'),

            // 상태바 리소스
            goldDisplay: get('gold-display'),
            gemDisplay: get('gem-display'),
            energyDisplay: get('energy-display'),

            // 스테이지/전투 UI
            stageTitle: get('stage-title'),
            stageInfo: get('stage-info'),
            stageRewards: get('stage-rewards'),
            btnPrevStage: get('btn-prev-stage'),
            btnNextStage: get('btn-next-stage'),
            btnStartStage: get('btn-start-stage'),

            // 오버레이 및 모달
            loginOverlay: get('login-overlay'),
            modalOverlay: get('custom-modal-overlay'),
            modalMsg: get('custom-modal-msg'),
            btnModalYes: get('btn-modal-yes'),
            btnModalNo: get('btn-modal-no'),

            // 개발자 치트
            devFill: document.getElementById('devFillResources') // Optional, so no warning
        };
    }

    /**
     * @private
     * @description 공통 UI 이벤트를 초기화합니다.
     */
    _initCommonEvents() {
        // 탭 이벤트 연결
        const tabPairs = [
            { btn: this.ui.tabHome, id: 'home' },
            { btn: this.ui.tabSummon, id: 'summon' },
            { btn: this.ui.tabExpedition, id: 'expedition' },
            { btn: this.ui.tabResearch, id: 'research' },
            { btn: this.ui.tabMission, id: 'mission' },
            { btn: this.ui.tabShop, id: 'shop' },
            { btn: this.ui.tabTeam, id: 'team' },
            { btn: this.ui.tabBattle, id: 'battle' }
        ];

        tabPairs.forEach(pair => {
            if (pair.btn) {
                pair.btn.addEventListener('click', () => {
                    console.log(`[UIManager] Tab clicked: ${pair.id}`);
                    this.switchTab(pair.id);
                });
            } else {
                console.warn(`[UIManager] Tab button missing for id: ${pair.id}`);
            }
        });

        // 개발자 치트 버튼
        if (this.ui.devFill) {
            this.ui.devFill.addEventListener('click', () => {
                this.game.resourceManager.addGold(10000);
                this.game.resourceManager.addGem(100);
                this.game.resourceManager.addEnergy(100);
                this.addLog("치트 사용: 자원 충전 완료");
            });
        }

        // [NEW] Lobby Touch Init
        this.initLobbyInteraction();

        // [NEW] Outpost Claim
        const btnOutpost = document.getElementById('btn-outpost-claim');
        if (btnOutpost) {
            btnOutpost.addEventListener('click', () => {
                const result = this.game.outpostManager.claim();
                if (result.success) {
                    this.addLog(`[정찰] ${result.rewards.gold} 골드, ${result.rewards.exp} 경험치 획득!`);
                    this.showToast(`정찰 보상: 💰+${result.rewards.gold}, ✨+${result.rewards.exp}`);
                    const badge = document.getElementById('outpost-badge');
                    if (badge) badge.style.display = 'none';
                } else {
                    this.showToast("아직 수령할 보상이 없습니다.");
                }
            });

            // Notification Check Loop (Simple)
            setInterval(() => {
                const check = this.game.outpostManager.calculateRewards();
                const badge = document.getElementById('outpost-badge');
                if (badge) {
                    badge.style.display = (check.gold > 0) ? 'block' : 'none';
                }
            }, 5000);
        }
    }

    /**
     * @description 탭을 전환하고 관련 뷰를 활성화합니다.
     * @param {string} tabId 
     */
    switchTab(tabId) {
        // 1. 모든 컨텐츠 숨김 (동적 조회)
        const contentIds = [
            'content-home', 'content-summon', 'content-expedition',
            'content-research', 'content-mission', 'content-shop',
            'content-team', 'content-battle', 'content-prestige'
        ];
        contentIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove('active');
                el.style.display = 'none';
            }
        });

        // 2. 모든 탭 버튼 비활성화 (동적 조회)
        const tabIds = [
            'tab-home', 'tab-summon', 'tab-expedition',
            'tab-research', 'tab-mission', 'tab-shop',
            'tab-team', 'tab-battle'
        ];
        tabIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('active');
        });

        // 3. 대상 활성화
        const targetBtn = document.getElementById(`tab-${tabId}`);
        // [Mod] Standardized content ID
        const targetContentId = `content-${tabId}`;
        const targetContent = document.getElementById(targetContentId);

        if (targetBtn) targetBtn.classList.add('active');
        if (targetContent) {
            targetContent.classList.add('active');
            targetContent.style.display = (tabId === 'home') ? 'grid' : 'block'; // Home uses Grid
            console.log(`[UIManager] Activated tab content: ${targetContentId}`);
        } else {
            console.error(`[UIManager] Failed to find target content for tab: ${tabId} (ID: ${targetContentId})`);
        }

        // [Fix] 로비 캐릭터는 홈 화면에서만 표시
        const lobbyVisual = document.getElementById('lobby-visual-container');
        if (lobbyVisual) {
            lobbyVisual.style.display = (tabId === 'home') ? 'block' : 'none';
        }

        // [Mode Cleanup] 덱 설정 모드 해제 로직 등
        if (tabId !== 'team') {
            this.ui.creatureList.classList.remove('mode-deck-select');
        }

        // 전역 이벤트 발생 (각 View에서 인지하여 렌더링하도록 함)
        this.game.events.emit('ui:tabSwitched', tabId);
    }

    /**
     * @description 로그 시스템에 메시지를 추가합니다.
     * @param {string} msg 
     * @param {string} type 
     */
    addLog(message, type = 'info') {
        if (!this.ui.logContent) return;

        const entry = document.createElement('div');
        entry.className = `log-entry log-${type}`;
        entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        this.ui.logContent.prepend(entry);

        // 로그 개수 제한 (최대 50개)
        while (this.ui.logContent.children.length > 50) {
            this.ui.logContent.removeChild(this.ui.logContent.lastChild);
        }
    }

    /**
     * @description 로비 캐릭터를 변경합니다.
     * @param {Object} creature - 표시할 크리처 인스턴스
     */
    setLobbyCharacter(creature) {
        if (!this.ui.lobbyCharacterImg) return;

        if (creature && creature.def) {
            this.ui.lobbyCharacterImg.src = creature.def.image;
            this.ui.lobbyCharacterImg.alt = creature.def.name;
            this.addLog(`로비 캐릭터를 ${creature.def.name}(으)로 변경했습니다.`, 'success');
        }
    }

    /**
     * @description 커스텀 확인 모달을 띄웁니다.
     * @param {string} message 
     * @param {Function} onYes 
     * @param {boolean} isHTML - HTML 태그 포함 여부
     */
    showConfirm(message, onYes, isHTML = false) {
        if (!this.ui.modalOverlay) {
            if (confirm(message)) onYes();
            return;
        }

        if (isHTML) {
            this.ui.modalMsg.innerHTML = message;
        } else {
            this.ui.modalMsg.innerText = message;
        }

        this.ui.modalOverlay.style.display = 'flex';

        this.ui.btnModalYes.onclick = () => {
            this.ui.modalOverlay.style.display = 'none';
            if (onYes) onYes();
        };
        this.ui.btnModalNo.onclick = () => {
            this.ui.modalOverlay.style.display = 'none';
        };
    }

    /**
     * @description 모달을 강제로 닫습니다.
     */
    hideModal() {
        if (this.ui.modalOverlay) {
            this.ui.modalOverlay.style.display = 'none';
        }
    }

    /**
     * @description 로비 캐릭터 터치 상호작용 초기화
     */
    /**
     * @description 로비 캐릭터 터치 상호작용 (Coordinate Based)
     */
    initLobbyInteraction() {
        const img = document.getElementById('lobby-character-img');
        if (!img) return;

        img.addEventListener('click', (e) => {
            e.stopPropagation();

            // 1. Get Interaction Zone
            const rect = img.getBoundingClientRect();
            const y = e.clientY - rect.top;
            const height = rect.height;
            const ratio = y / height;

            let zone = 'body';
            if (ratio < 0.25) zone = 'head';
            else if (ratio > 0.75) zone = 'legs';

            // 2. Determine Action & Speech
            this._handleLobbyTouch(zone, e.clientX, e.clientY);
        });
    }

    _handleLobbyTouch(zone, clientX, clientY) {
        // 1. Identify Current Lobby Creature
        let lobbyCreature = null;
        try {
            const saved = JSON.parse(localStorage.getItem('lobbyCharacter'));
            if (saved && saved.instanceId) {
                lobbyCreature = this.game.creatureManager.getCreatureById(saved.instanceId);
            }
        } catch (e) { }

        if (!lobbyCreature) {
            this.showLobbySpeech("...");
            return;
        }

        const def = lobbyCreature.def;
        const affinity = this.game.affinityManager.getAffinity(lobbyCreature.instanceId);
        const affinityLv = affinity.level || 0;
        const img = this.ui.lobbyCharacterImg;

        let line = "";

        // Tier 1: UR (Ultimate Customizing Feedback)
        if (def.rarity === 'UR') {
            this._handleURVisuals(lobbyCreature, zone, img);
        }

        // Tier 2: SSR+ (Unique Lines)
        let dataKey = `touch_${zone}`;
        if (zone === 'body') dataKey = 'touch_chest';

        if (['SSR', 'UR'].includes(def.rarity) && def.lines) {
            // Unique Lines Logic
            if (affinityLv >= 3 && def.lines[`${dataKey}_love`]) {
                line = def.lines[`${dataKey}_love`];
            } else if (affinityLv < 2 && def.lines[`${dataKey}_reject`]) {
                line = def.lines[`${dataKey}_reject`];
            } else if (def.lines[dataKey]) {
                line = def.lines[dataKey];
            }
        }

        // Tier 3: SR- (Personality Archetypes) or Fallback if SSR lines missing
        if (!line) {
            const personality = getCreaturePersonality(lobbyCreature);
            const pKey = zone === 'body' ? 'touch_chest' : `touch_${zone}`;
            const mood = affinityLv >= 3 ? 'high' : 'low';

            const lines = personality[pKey]?.[mood] || ["..."];
            line = lines[Math.floor(Math.random() * lines.length)];
        }

        // 3. Show Speech
        this.showLobbySpeech(line);

        // 4. Affinity Increase & Effect
        const result = this.game.affinityManager.interact(lobbyCreature.instanceId, 'TOUCH');
        if (result.success) {
            this.showHeartEffect(clientX, clientY, result.points);
        } else {
            this.showHeartEffect(clientX, clientY);
        }

        // 5. Animation (Basic Scaling for all)
        if (img) {
            img.style.transform = 'scale(1.02)';
            setTimeout(() => img.style.transform = 'scale(1)', 150);
        }
    }

    /**
     * @description UR 등급 전용 비주얼 효과 (표정/자세 변화)
     */
    _handleURVisuals(creature, zone, imgEl) {
        if (!creature.def.sprites) return;

        let targetSprite = null;

        // Zone based expression
        if (zone === 'head') {
            // Head pat -> Joy/Blush
            targetSprite = creature.def.sprites.joy || creature.def.sprites.gallery;
        } else if (zone === 'body') {
            // Body touch -> Shy/Angry/Surprised depends on creature
            // For now, use 'joy' or 'intro' if available, or 'angry' if low affinity?
            // Let's keep it positive for UR premium feel -> 'joy'
            targetSprite = creature.def.sprites.joy;
        } else if (zone === 'legs') {
            targetSprite = creature.def.sprites.sad; // Embarrassed?
        }

        // Temporary Sprite Swap
        if (targetSprite && imgEl.src !== targetSprite) {
            const originalSrc = creature.def.image; // Base image

            // Preload?
            const tempImg = new Image();
            tempImg.src = targetSprite;
            tempImg.onload = () => {
                imgEl.src = targetSprite;

                // Revert after 2 seconds
                if (this._urVisualTimer) clearTimeout(this._urVisualTimer);
                this._urVisualTimer = setTimeout(() => {
                    imgEl.src = originalSrc;
                }, 2000);
            };
        }
    }

    showHeartEffect(x, y, points = 0) {
        const heart = document.createElement('div');
        heart.innerHTML = points > 0 ? `❤️ +${points}` : '❤️';
        heart.style.cssText = `
            position: fixed; top: ${y}px; left: ${x}px;
            font-size: 1.5rem; color: #ff4081; font-weight: bold;
            pointer-events: none; z-index: 9999;
            animation: floatUp 1s ease-out forwards;
            text-shadow: 0 0 5px white;
        `;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }

    showLobbySpeech(text) {
        const bubble = document.getElementById('lobby-speech-bubble');
        const textSpan = document.getElementById('lobby-speech-text');

        if (bubble && textSpan) {
            textSpan.innerText = text;
            bubble.classList.add('active');

            // 기존 타이머 제거 후 재설정
            if (this._speechTimer) clearTimeout(this._speechTimer);
            this._speechTimer = setTimeout(() => {
                bubble.classList.remove('active');
            }, 3000);
        }
    }

    highlightElement(elementId) {
        if (this.currentHighlight) {
            this.currentHighlight.classList.remove('highlight');
        }

        const target = document.getElementById(elementId);
        if (target) {
            target.classList.add('highlight');
            this.currentHighlight = target;
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}
