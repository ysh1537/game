import BaseView from './BaseView.js';

export default class BattleView extends BaseView {
    init() {
        // 스테이지 네비게이션
        if (this.ui.btnPrevStage) {
            this.ui.btnPrevStage.onclick = () => {
                this.game.stageManager.prevStage();
                this.renderStageUI();
            };
        }
        if (this.ui.btnNextStage) {
            this.ui.btnNextStage.onclick = () => {
                this.game.stageManager.nextStage();
                this.renderStageUI();
            };
        }
        if (this.ui.btnStartStage) {
            this.ui.btnStartStage.onclick = () => {
                // 현재 보고 있는 스테이지로 시작
                this.game.battleManager.startStageBattle(this.game.stageManager.currentViewingStage);
            };
        }

        // 자동 전투 토글 연결
        const checkAutoBattle = document.getElementById('check-auto-battle');
        if (checkAutoBattle) {
            checkAutoBattle.checked = this.game.battleManager.isAutoBattle;
            checkAutoBattle.onchange = (e) => {
                this.game.battleManager.setAutoBattle(e.target.checked);
            };
        }

        // [NEW] 배속 버튼 연결
        const btnSpeed1 = document.getElementById('btn-speed-1');
        const btnSpeed2 = document.getElementById('btn-speed-2');
        if (btnSpeed1 && btnSpeed2) {
            const updateSpeedUI = (speed) => {
                // Reset styles
                btnSpeed1.classList.remove('active');
                btnSpeed2.classList.remove('active');
                btnSpeed1.style.background = 'transparent';
                btnSpeed2.style.background = 'transparent';

                if (speed > 1) {
                    btnSpeed2.classList.add('active');
                    btnSpeed2.style.background = 'var(--accent-orange)';
                } else {
                    btnSpeed1.classList.add('active');
                    btnSpeed1.style.background = 'var(--accent-cyan)';
                }
            };

            btnSpeed1.onclick = () => {
                this.game.battleManager.setBattleSpeed(1);
                updateSpeedUI(1);
            };
            btnSpeed2.onclick = () => {
                this.game.battleManager.setBattleSpeed(3); // 3배속으로 상향 (사용자 만족도 UP)
                updateSpeedUI(3);
            };

            // 초기 상태 설정
            updateSpeedUI(this.game.battleManager.battleSpeed || 1);
        }

        // PvP 검색
        const btnPvpSearch = document.getElementById('btn-pvp-search');
        if (btnPvpSearch) {
            btnPvpSearch.onclick = () => {
                const query = document.getElementById('pvp-search-input')?.value || '';
                this.renderPvPLobby(query);
            };
        }

        this.game.events.on('battle:completed', (data) => {
            if (data.isWin && data.stageId) {
                const max = this.game.stageManager.getMaxStage();
                // StageManager already auto-unlocks next stage on win via BattleManager -> unlockNextStage
                // Just sync viewing stage if user was watching the latest stage
                if (this.game.stageManager.currentViewingStage < max) {
                    // If we just unlocked a new stage and were at the previous max, move to new one could be optional
                    // But StageManager logic handles unlocks. 
                    // Let's just create a visual log.
                    this.addLog(`[스테이지] 작전 구역 ${max} 개방!`);
                }
                this.renderStageUI(); // Refresh UI to show unlock status/next button
            }
        });

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'battle') {
                this.render();
            }
        });

        // 초기 렌더링
        this.render();
    }

    render() {
        this.renderStageUI();
        this.renderPvPLobby();
    }

    renderStageUI() {
        const stageMgr = this.game.stageManager;
        if (!stageMgr) return;

        // Use logic from StageManager
        const stageId = stageMgr.currentViewingStage || 1;
        const maxStage = stageMgr.getMaxStage();
        const stageData = stageMgr.getStageInfo(stageId);

        if (!stageData) return;

        if (this.ui.stageTitle) this.ui.stageTitle.innerText = stageData.name;
        if (this.ui.stageInfo) {
            this.ui.stageInfo.innerHTML = `
                <div style="font-size:0.9em; opacity:0.8;">Enemy Lv.${stageData.enemies[0].level}</div>
                <div style="color:var(--accent-secondary); font-weight:bold; margin-top:5px;">권장 전투력: ${stageData.recommendedPower.toLocaleString()}</div>
            `;
        }
        if (this.ui.stageRewards) this.ui.stageRewards.innerText = `💰 지급: ${stageData.rewardGold}G, ⭐ ${stageData.rewardExp}EXP`;

        if (this.ui.btnPrevStage) {
            this.ui.btnPrevStage.disabled = (stageId <= 1);
            this.ui.btnPrevStage.style.opacity = this.ui.btnPrevStage.disabled ? 0.3 : 1;
        }

        if (this.ui.btnNextStage) {
            this.ui.btnNextStage.disabled = (stageId >= maxStage);
            this.ui.btnNextStage.style.opacity = this.ui.btnNextStage.disabled ? 0.3 : 1;
        }

        if (this.ui.btnStartStage) {
            this.ui.btnStartStage.innerText = `⚔️ ${stageData.name} 진입`;
        }
    }

    renderPvPLobby(query = '') {
        const listContainer = document.getElementById('pvp-user-list');
        if (!listContainer) return;

        // PvP 데이터 로드 및 렌더링
        import(`../data/PvPData.js?v=${Date.now()}`).then(module => {
            const players = module.searchMockPlayers(query);
            listContainer.innerHTML = '';

            if (players.length === 0) {
                listContainer.innerHTML = '<div style="text-align:center; padding:20px; color:var(--text-secondary);">검색 결과가 없습니다.</div>';
                return;
            }

            players.forEach(p => {
                const item = document.createElement('div');
                item.className = 'pvp-list-item';
                item.style.cssText = "display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.05); margin-bottom:8px; padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);";

                item.innerHTML = `
                    <div style="display:flex; align-items:center;">
                        <img src="${p.avatar}" style="width:44px; height:44px; border-radius:50%; margin-right:12px; border:2px solid var(--border-accent);">
                        <div>
                            <div style="font-weight:bold; color:var(--accent-gold);">${p.name} <span style="font-size:0.8em; color:var(--text-secondary);">Lv.${p.level}</span></div>
                            <div style="font-size:0.8em; opacity:0.7;">전투력: <span style="color:var(--accent-tertiary);">${p.power}</span> | 랭크: ${p.rank}</div>
                        </div>
                    </div>
                    <button class="cyber-btn small btn-battle-rival" data-id="${p.id}">⚔️ 대전</button>
                `;

                item.querySelector('.btn-battle-rival').onclick = () => {
                    this.game.battleManager.startPvP(p.id);
                };

                listContainer.appendChild(item);
            });
        }).catch(err => {
            console.error("PvP 데이터 로드 실패", err);
            listContainer.innerHTML = '<div style="color:red; text-align:center;">데이터 로드 실패</div>';
        });
    }
}
