import BaseView from './BaseView.js';

export default class MissionView extends BaseView {
    init() {
        this.game.questManager.on('quests:updated', () => {
            const contentMission = document.getElementById('content-mission');
            if (contentMission && contentMission.classList.contains('active')) {
                this.render();
            }
        });

        this.game.questManager.on('quest:completed', (data) => {
            // ... 생략 ...
            this.addLog(`[${data.type === 'daily' ? '미션' : '업적'}] ${data.def.title} 완료!`, "mission");
        });

        this.game.questManager.on('quests:claimed', () => {
            this.addLog(`보상을 수령했습니다.`, "mission");
            this.render(); // UI 갱신 (버튼 비활성화 등)
        });

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'mission') {
                this.render();
            }
        });
    }

    render() {
        const data = this.game.questManager.getViewModel();
        const dailyListEl = document.getElementById('daily-quest-list');
        const achieveListEl = document.getElementById('achievement-list');

        if (!dailyListEl || !achieveListEl) return;

        dailyListEl.innerHTML = '';
        data.dailies.forEach(q => {
            dailyListEl.appendChild(this._createQuestCard(q, true));
        });

        achieveListEl.innerHTML = '';
        data.achievements.forEach(q => {
            achieveListEl.appendChild(this._createQuestCard(q, false));
        });
    }

    _createQuestCard(quest, isDaily) {
        const div = document.createElement('div');
        div.className = 'expedition-card feature-card'; // 스타일 유지
        div.style.marginBottom = "10px";

        let btnHtml = '';
        if (quest.claimed) {
            btnHtml = `<button class="cyber-btn small" disabled style="opacity: 0.5;">수령 완료</button>`;
        } else if (quest.completed) {
            btnHtml = `<button class="cyber-btn small action btn-claim">보상 받기</button>`;
            div.style.borderColor = "var(--accent-gold)";
        } else {
            btnHtml = `<button class="cyber-btn small" disabled>진행 중 (${quest.progress} / ${quest.targetCount})</button>`;
        }

        const rewards = [];
        if (quest.reward.gold) rewards.push(`💰 ${quest.reward.gold}`);
        if (quest.reward.gem) rewards.push(`💎 ${quest.reward.gem}`);

        div.innerHTML = `
            <div class="quest-info">
                <h4 style="margin:0;">${quest.title}</h4>
                <p style="font-size:0.85rem; color:var(--text-secondary); margin:4px 0;">${quest.description}</p>
                <p style="font-size:0.9rem; color:var(--accent-tertiary); margin:4px 0;">보상: ${rewards.join(' ')}</p>
            </div>
            <div class="quest-action" style="text-align:right; margin-top:8px;">
                ${btnHtml}
            </div>
        `;

        const btnClaim = div.querySelector('.btn-claim');
        if (btnClaim) {
            btnClaim.addEventListener('click', () => {
                this.game.questManager.claimReward(quest.id, isDaily);
            });
        }

        return div;
    }
}
