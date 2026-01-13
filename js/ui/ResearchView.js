import BaseView from './BaseView.js';
import { FACILITIES } from '../data/FacilityData.js';

export default class ResearchView extends BaseView {
    init() {
        // Redraw when inventory changes (e.g. summon or upgrade)
        // Since we don't have a direct 'inventory:updated' event from SaveManager yet, 
        // we can hook into game loop or manually refresh on button click.
        // Ideally, LabManager should emit event.
        // For now, simple re-render on Tab Switch.

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'research') {
                this.render();
            }
        });
    }

    render() {
        this.renderCreatureList();
    }

    renderCreatureList() {
        if (!this.ui.facilityList) return;
        this.ui.facilityList.innerHTML = '';

        // 1. Get Inventory
        if (!window.SaveManager || !window.SaveManager.data.inventory) {
            this.ui.facilityList.innerHTML = '<div style="padding:20px;">데이터를 불러오는 중...</div>';
            return;
        }

        const inventory = window.SaveManager.data.inventory;
        // Convert to array
        const creatures = Object.values(inventory).sort((a, b) => b.level - a.level); // High level first

        if (creatures.length === 0) {
            this.ui.facilityList.innerHTML = '<div style="padding:20px; text-align:center;">보유한 크리처가 없습니다.<br>소환을 통해 크리처를 획득하세요.</div>';
            return;
        }

        // Header
        const header = document.createElement('div');
        header.style.padding = '10px';
        header.style.marginBottom = '20px';
        header.style.textAlign = 'center';
        header.innerHTML = '<h3 style="margin:0; color:var(--accent-primary);">크리처 연구소 (Creature Lab)</h3><p style="margin:5px 0; font-size:0.9em; color:#888;">골드를 사용하여 크리처의 레벨을 올리세요.</p>';
        this.ui.facilityList.appendChild(header);

        creatures.forEach(entry => {
            // entry = { id, count, level, aquiredAt }
            // We need metadata (name, rarity) from CreatureManager or Definitions
            // Temporary: Use ID as name if def missing.
            // Ideally: this.game.creatureManager.getCreatureDef(entry.id)

            // Assume this.game.creatureManager is still valid for data lookup
            // Or use window.ASGARD_CREATURES etc if globally available.

            // Let's try to get def from game instance (legacy way still works for data)
            let def = null;
            if (this.game.creatureManager && this.game.creatureManager.getCreatureDef) {
                def = this.game.creatureManager.getCreatureDef(entry.id);
            }

            const name = def ? def.name : entry.id;
            const rarity = def ? def.rarity : 'Unknown';
            const img = def ? def.image : 'images/creature_slime.png';

            const level = entry.level || 1;
            // [Fixed] Pass rarity to LabManager
            const cost = window.LabManager ? window.LabManager.getUpgradeCost(rarity, level) : 999999;
            const canUpgrade = window.EconomyManager.has('gold', cost);

            const card = document.createElement('div');
            card.className = `facility-card glass-panel rarity-${rarity}`; // Reuse facility-card style
            card.style.padding = '15px';
            card.style.marginBottom = '10px';
            card.style.display = 'flex';
            card.style.alignItems = 'center';
            card.style.gap = '15px';
            card.style.borderLeft = `4px solid var(--col-${rarity})`;

            card.innerHTML = `
                <div class="creature-icon" style="width:60px; height:60px; border-radius:8px; overflow:hidden; background:#000;">
                    <img src="${img}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='images/creature_slime.png'">
                </div>
                <div style="flex:1;">
                    <div style="font-size:1.1rem; font-weight:bold; color:var(--text-highlight);">[${rarity}] ${name}</div>
                    <div style="font-size:0.9rem; color:#aaa;">Lv.${level} <span style="font-size:0.8em; color:#666;">(보유: ${entry.count})</span></div>
                </div>
                <button class="cyber-btn small btn-upgrade ${canUpgrade ? '' : 'disabled'}" style="min-width:100px;">
                    강화 ${cost} G
                </button>
            `;

            const btn = card.querySelector('.btn-upgrade');
            btn.onclick = () => {
                if (!window.LabManager) return;
                const result = window.LabManager.upgradeCreature(entry.id);
                if (result.success) {
                    this.addLog(`${name} 강화 성공! (Lv.${result.newLevel})`, "success");
                    // SFX
                    if (window.SoundManager) window.SoundManager.playSFX('sounds/ui/upgrade_success.mp3'); // Mock path
                    this.renderCreatureList(); // Re-render
                } else {
                    alert(result.reason);
                }
            };

            this.ui.facilityList.appendChild(card);
        });
    }
}
