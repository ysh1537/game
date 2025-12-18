import BaseView from './BaseView.js';
import { FACILITIES } from '../data/FacilityData.js';

export default class ResearchView extends BaseView {
    init() {
        this.game.facilityManager.on('facility:upgraded', (data) => {
            const def = FACILITIES.find(f => f.id === data.id);
            this.addLog(`${def.name} 레벨업! (Lv.${data.level})`, "facility");
            this.renderFacilityList();
        });

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'research') {
                this.render();
            }
        });
    }

    render() {
        this.renderFacilityList();
    }

    renderFacilityList() {
        if (!this.ui.facilityList) return;
        this.ui.facilityList.innerHTML = '';

        FACILITIES.forEach(def => {
            const level = this.game.facilityManager.getLevel(def.id);
            const cost = this.game.facilityManager.getUpgradeCost(def.id);
            const isMax = level >= def.maxLevel;

            let currentEffect = def.baseEffect + (def.effectPerLevel * level);
            let nextEffect = def.baseEffect + (def.effectPerLevel * (level + 1));

            let effectStr = `현재: +${currentEffect}`;
            if (!isMax) effectStr += ` → 다음: +${nextEffect}`;
            if (def.effectType === "gold_bonus_percent") effectStr += "%";

            const card = document.createElement('div');
            card.className = 'facility-card feature-card';
            card.innerHTML = `
                <div class="facility-icon">🧪</div>
                <div class="facility-info">
                    <h4>${def.name}</h4>
                    <span class="facility-level">Lv.${level} / ${def.maxLevel}</span>
                    <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">${def.description}</p>
                </div>
                <div style="text-align:right;">
                    <p style="color: var(--accent-tertiary); font-weight:600; font-size:0.9rem;">${effectStr}</p>
                    <button class="cyber-btn small btn-upgrade" data-id="${def.id}" ${isMax ? 'disabled' : ''}>
                        ${isMax ? '최대 레벨' : `업그레이드 (${cost}G)`}
                    </button>
                </div>
            `;

            card.querySelector('.btn-upgrade').addEventListener('click', () => {
                const success = this.game.facilityManager.tryUpgrade(def.id);
                if (!success) {
                    this.addLog("골드가 부족합니다.", "facility");
                }
            });

            this.ui.facilityList.appendChild(card);
        });
    }
}
