import BaseView from './BaseView.js';
import { EXPEDITIONS } from '../data/ExpeditionData.js';

export default class ExpeditionView extends BaseView {
    init() {
        this.game.expeditionManager.on('expedition:started', (exp) => {
            this.addLog(`${exp.expeditionName} 시작`, "expedition");
            this.renderActiveExpeditions();
        });

        this.game.expeditionManager.on('expedition:completed', (exp) => {
            this.addLog(`${exp.expeditionName} 완료! 골드 +${exp.rewards.gold}`, "expedition");
            this.renderActiveExpeditions();
        });

        // 1초마다 타이머 갱신
        setInterval(() => {
            if (this.ui.contentExpedition && this.ui.contentExpedition.classList.contains('active')) {
                this.renderActiveExpeditions();
            }
        }, 1000);

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'expedition') {
                this.render();
            }
        });
    }

    render() {
        this.renderExpeditionList();
        this.renderActiveExpeditions();
    }

    renderExpeditionList() {
        if (!this.ui.expeditionList) return;
        this.ui.expeditionList.innerHTML = '';

        EXPEDITIONS.forEach(exp => {
            const card = document.createElement('div');
            card.className = 'expedition-card feature-card';
            card.innerHTML = `
                <div class="exp-icon">🚀</div>
                <div class="exp-info">
                    <h4>${exp.name}</h4>
                    <p>소요 시간: ${exp.durationSec}초 | 에너지: ${exp.energyCost}</p>
                </div>
                <div class="exp-rewards">
                    <span>💰 ${exp.baseGoldReward}G</span>
                    <span>⭐ EXP</span>
                </div>
                <button class="cyber-btn small btn-start-exp" data-id="${exp.id}">탐사 보내기</button>
            `;

            card.querySelector('.cyber-btn').addEventListener('click', () => {
                this._openExpeditionModal(exp);
            });

            this.ui.expeditionList.appendChild(card);
        });
    }

    /**
     * @private
     * @description 탐사 보낼 크리처를 선택하는 모달을 엽니다.
     */
    _openExpeditionModal(exp) {
        const modal = document.getElementById('expedition-select-modal');
        const list = document.getElementById('exp-creature-list');
        const btnClose = document.getElementById('btn-close-exp-modal');
        if (!modal || !list) return;

        list.innerHTML = '';

        // 현재 탐사 중이 아닌 크리처만 필터링
        const activeExpeditionCreatureIds = this.game.expeditionManager.getActiveExpeditions().map(ae => ae.creatureId);
        const availableCreatures = this.game.creatureManager.owned.filter(c => !activeExpeditionCreatureIds.includes(c.instanceId));

        if (availableCreatures.length === 0) {
            list.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#888; padding:20px;">파견 가능한 크리처가 없습니다.</p>';
        } else {
            availableCreatures.forEach(c => {
                const div = document.createElement('div');
                div.className = `creature-card-mini rarity-${c.def.rarity}`;
                div.style.cursor = 'pointer';
                div.innerHTML = `
                    <img src="${c.def.image}" alt="${c.def.name}">
                    <div class="card-overlay">
                        <div class="card-name" style="font-size:0.6rem;">${c.def.name}</div>
                    </div>
                `;
                div.onclick = () => {
                    const success = this.game.expeditionManager.startExpedition(c.instanceId, exp.id);
                    if (success) {
                        modal.style.display = 'none';
                    }
                };
                list.appendChild(div);
            });
        }

        modal.style.display = 'flex';
        btnClose.onclick = () => modal.style.display = 'none';
        modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
    }

    renderActiveExpeditions() {
        if (!this.ui.activeExpeditionList) return;

        const list = this.game.expeditionManager.getActiveExpeditions();
        this.ui.activeExpeditionList.innerHTML = '';

        if (list.length === 0) {
            this.ui.activeExpeditionList.innerHTML = '<p class="placeholder-text" style="padding:10px;">현재 진행 중인 탐사가 없습니다.</p>';
            return;
        }

        list.forEach(exp => {
            const now = Date.now();
            const remainSec = Math.max(0, Math.ceil((exp.endTime - now) / 1000));
            const div = document.createElement('div');
            div.className = 'active-expedition-item';
            div.style.cssText = "display:flex; justify-content:space-between; padding:10px; background:rgba(0,0,0,0.2); margin-bottom:5px; border-radius:4px;";

            div.innerHTML = `
                <span>${exp.creatureName} - ${exp.expeditionName}</span>
                <span class="timer" style="color:var(--accent-primary);">남은 시간: ${Math.floor(remainSec / 60)}:${String(remainSec % 60).padStart(2, '0')}</span>
            `;
            this.ui.activeExpeditionList.appendChild(div);
        });
    }
}
