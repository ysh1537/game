import BaseView from './BaseView.js';

export default class BattleView extends BaseView {
    init() {
        // 스테이지 네비게이션
        if (this.ui.btnPrevStage) {
            this.ui.btnPrevStage.onclick = () => {
                if (this.game.viewingStageId > 1) {
                    this.game.viewingStageId--;
                    this.renderStageUI();
                }
            };
        }
        if (this.ui.btnNextStage) {
            this.ui.btnNextStage.onclick = () => {
                const max = this.game.stageManager.getMaxStage();
                if (this.game.viewingStageId < max) {
                    this.game.viewingStageId++;
                    this.renderStageUI();
                }
            };
        }
        if (this.ui.btnStartStage) {
            this.ui.btnStartStage.onclick = () => {
                this.game.battleManager.startStageBattle(this.game.viewingStageId);
            };
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
                if (data.stageId === this.game.viewingStageId && this.game.viewingStageId < max) {
                    this.game.viewingStageId++;
                    this.addLog(`[스테이지] 다음 단계(${this.game.viewingStageId}) 잠금 해제!`);
                }
                this.renderStageUI();
            }
        });

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'battle') {
                this.render();
            }
        });
    }

    render() {
        this.renderStageUI();
        this.renderPvPLobby();
    }

    renderStageUI() {
        const stageMgr = this.game.stageManager;
        if (!stageMgr) return;

        if (typeof this.game.viewingStageId === 'undefined') {
            this.game.viewingStageId = stageMgr.getMaxStage();
        }

        const stageId = this.game.viewingStageId;
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

        this.ui.btnPrevStage.disabled = (stageId <= 1);
        this.ui.btnNextStage.disabled = (stageId >= maxStage);
        this.ui.btnStartStage.innerText = `⚔️ ${stageData.name} 진입`;

        this.ui.btnPrevStage.style.opacity = this.ui.btnPrevStage.disabled ? 0.3 : 1;
        this.ui.btnNextStage.style.opacity = this.ui.btnNextStage.disabled ? 0.3 : 1;
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
