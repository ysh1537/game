import { UPGRADE_DATA } from '../data/UpgradeData.js';
import { RANKS } from '../data/RankData.js';

/**
 * LabManager.js
 * Handles Creature Upgrades and Evolution
 * [Strict Mode] Uses js/data/UpgradeData.js
 */
class LabManager {
    constructor() {
        this.data = UPGRADE_DATA;
    }

    /**
     * Calculate cost to upgrade creature to next level
     * @param {string} rarity - Creature Rarity (e.g., "SSR")
     * @param {number} currentLevel 
     */
    getUpgradeCost(rarity, currentLevel) {
        const baseCost = this.data.BASE_COSTS[rarity] || this.data.BASE_COSTS[RANKS.NORMAL];
        // Formula: Base * (Scale ^ (Lv-1))
        return Math.floor(baseCost * Math.pow(this.data.COST_SCALE, currentLevel - 1));
    }

    /**
     * Try to upgrade a creature
     * @param {string} creatureId 
     */
    upgradeCreature(creatureId) {
        if (!window.SaveManager) return { success: false, reason: "System Error: SaveManager missing" };

        const inventory = window.SaveManager.data.inventory;
        const entry = inventory[creatureId];

        if (!entry || entry.count < 1) {
            return { success: false, reason: "보유하지 않은 크리처입니다." };
        }

        if (entry.level >= this.data.MAX_LEVEL) {
            return { success: false, reason: "이미 최대 레벨입니다." };
        }

        // Get Metadata (Rarity) for cost calc
        // We assume global creature defs or we need to find it.
        // Try all World Data if not optimized. 
        // For now, let's rely on Game or global lookups if possible, 
        // OR pass rarity in. But method sig is just ID.
        // Let's assume window.DATA_MANAGER or similar exists, OR search known globals.
        // Fallback: If SaveManager stores rarity (it usually doesn't), we verify.

        const def = this.findCreatureDef(creatureId);
        if (!def) return { success: false, reason: "데이터 손상: 크리처 정보를 찾을 수 없습니다." };

        const cost = this.getUpgradeCost(def.rarity, entry.level);

        // Check Gold
        if (!window.EconomyManager.spend('gold', cost)) {
            return { success: false, reason: "골드가 부족합니다." };
        }

        // Apply Upgrade
        entry.level++;
        window.SaveManager.save();

        console.log(`[Lab] Upgraded ${creatureId} to Lv.${entry.level} (-${cost} G)`);
        return { success: true, newLevel: entry.level };
    }

    /**
     * Helper to find definition across all worlds
     * (Inefficient but safe for now)
     */
    findCreatureDef(id) {
        // Try Global vars created by *Data.js files
        const sources = [
            window.ASGARD_CREATURES,
            window.OLYMPUS_CREATURES,
            window.SHANGRILA_CREATURES,
            window.ABYSS_CREATURES,
            window.WILD_CREATURES
        ];

        for (const list of sources) {
            if (!list) continue;
            const found = list.find(c => c.id === id);
            if (found) return found;
        }
        return null;
    }
}

// Global Instance
window.LabManager = new LabManager();
