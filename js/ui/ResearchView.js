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
            const canUpgrade = !isMax && this.game.resourceManager.gold >= cost;
            const progressPercent = (level / def.maxLevel) * 100;

            card.className = `facility-card glass-panel ${canUpgrade ? 'can-upgrade' : ''}`;
            card.style.padding = '15px';
            card.style.marginBottom = '10px';
            card.style.position = 'relative';
            card.style.borderLeft = isMax ? '4px solid var(--accent-secondary)' : '4px solid var(--accent-primary)';

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div style="display:flex; gap:15px; align-items:center;">
                        <div class="facility-icon" style="font-size:2rem; width:50px; height:50px; background:rgba(0,0,0,0.3); border-radius:8px; display:flex; justify-content:center; align-items:center;">🧪</div>
                        <div>
                            <h4 style="margin:0; font-size:1.1rem; color:var(--text-highlight);">${def.name}</h4>
                            <div style="font-size:0.8rem; color:#888; margin:2px 0;">${def.description}</div>
                        </div>
                    </div>
                    <div style="text-align:right;">
                         <div style="font-size:1.2rem; font-weight:bold; color:var(--accent-secondary);">${isMax ? 'MAX' : 'Lv.' + level}</div>
                         <div style="font-size:0.75em; color:#666;">Max: Lv.${def.maxLevel}</div>
                    </div>
                </div>

                <div style="margin:15px 0; background:rgba(0,0,0,0.5); height:6px; border-radius:3px; overflow:hidden;">
                     <div style="width:${progressPercent}%; height:100%; background:linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));"></div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); padding:10px; border-radius:6px;">
                    <div style="font-size:0.9rem;">
                        <span style="color:#aaa;">효과:</span> 
                        <span style="color:var(--accent-tertiary); font-weight:bold;">+${currentEffect}${def.effectType.includes('percent') ? '%' : ''}</span>
                        ${!isMax ? `<span style="color:#666; font-size:0.8em;"> → +${nextEffect}</span>` : ''}
                    </div>
                    <button class="cyber-btn small btn-upgrade" data-id="${def.id}" ${isMax ? 'disabled' : ''} style="min-width:100px;">
                        ${isMax ? '완료' : `강화 ${cost} G`}
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
