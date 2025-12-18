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

            card.querySelector('.btn-start-exp').addEventListener('click', () => {
                const selectedId = this.game.creatureManager.selectedId;
                if (!selectedId) {
                    alert("파견할 크리처를 선택해주세요.");
                    this.uiManager.switchTab('home'); // 홈으로 이동하여 선택 유도
                    return;
                }
                const res = this.game.expeditionManager.startExpedition(selectedId, exp.id);
                if (!res) {
                    // 에러 처리는 매니저에서 alert/log로 하기도 함
                }
            });

            this.ui.expeditionList.appendChild(card);
        });
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
