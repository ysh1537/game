/**
 * SummonManager.js
 * Gacha System Implementation
 */
class SummonManager {
    constructor() {
        this.COST_PER_PULL = 100; // Legacy Gem Cost

        // [STRICT] User Defined Probabilities (Source: SummonTable.js)
        this.NORMAL_TABLE = [
            { rarity: 'Normal', weight: 80 },
            { rarity: 'Unique', weight: 15 },
            { rarity: 'Rare', weight: 4 },
            { rarity: 'Special', weight: 0.9 },
            { rarity: 'SR', weight: 0.1 }
        ];

        this.PREMIUM_TABLE = [
            { rarity: 'Normal', weight: 23.79 },
            { rarity: 'Unique', weight: 30 },
            { rarity: 'Rare', weight: 30 },
            { rarity: 'Special', weight: 15 },
            { rarity: 'SR', weight: 1.0 },  // 1.0%
            { rarity: 'SSR', weight: 0.2 }, // 0.2%
            { rarity: 'UR', weight: 0.01 }  // 0.01%
        ];
    }

    /**
     * Perform a single summon
     */
    summonOne(currency = 'gems', cost = 100) {
        // 1. Check Cost
        if (!window.EconomyManager.spend(currency, cost)) return null;

        // 2. Determine Rarity
        // TODO: Different rates for Gold?
        const rarity = this.rollRarity(currency);

        // 3. Pick Creature of that Rarity
        const creature = this.pickRandomCreature(rarity);

        // 4. Add to Inventory
        if (window.SaveManager) {
            window.SaveManager.addCreature(creature.id);
        }

        console.log(`[Summon] Result: [${rarity}] ${creature.name}`);
        return creature;
    }

    /**
     * Perform 10 summons
     */
    summonTen(currency = 'gems', cost = 1000) {
        if (!window.EconomyManager.spend(currency, cost)) return null;

        const results = [];
        for (let i = 0; i < 10; i++) {
            const rarity = this.rollRarity(currency);
            const creature = this.pickRandomCreature(rarity);
            window.SaveManager.addCreature(creature.id);
            results.push(creature);
        }
        return results;
    }

    /**
     * Random Number Generation for Rarity
     */
    rollRarity() {
        const rand = Math.random();
        let cumulative = 0;

        // Check UR
        cumulative += this.RATES.UR;
        if (rand < cumulative) return "UR";

        // Check SSR
        cumulative += this.RATES.SSR;
        if (rand < cumulative) return "SSR";

        // Check SR
        cumulative += this.RATES.SR;
        if (rand < cumulative) return "SR";

        // Check Rare
        cumulative += this.RATES.RARE;
        if (rand < cumulative) return "Rare"; // Note case sensitivity in data files!

        return "Normal";
    }

    /**
     * Pick actual creature object from loaded data
     */
    pickRandomCreature(targetRarity) {
        // Aggregate all creatures
        // Note: Assuming global variables exist from <script> tags
        const pool = [
            ...(window.ASGARD_CREATURES || []),
            ...(window.OLYMPUS_CREATURES || []),
            ...(window.SHANGRILA_CREATURES || []),
            ...(window.WILD_CREATURES || []),
            ...(window.ABYSS_CREATURES || [])
        ];

        // Filter by Rarity
        // Handle case sensitivity: "Unique" vs "UNIQUE" vs "Normal"
        // Data files use strict strings: "UR", "SSR", "Normal", "Rare", "Unique", "Special", "SR"
        // My rollRarity returns "Rare" etc.

        const candidates = pool.filter(c => {
            // Normalize for comparison if needed, but data seems Capitalized
            return c.rarity === targetRarity;
        });

        if (candidates.length === 0) {
            console.warn(`No creatures found for rarity ${targetRarity}, fallback to Normal`);
            return pool.find(c => c.rarity === "Normal") || pool[0];
        }

        // Pick random
        const index = Math.floor(Math.random() * candidates.length);
        return candidates[index];
    }
}

// Global Instance
window.SummonManager = new SummonManager();
