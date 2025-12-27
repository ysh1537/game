
/**
 * GameConfig.js - Centralized Game Configuration Constants
 * Defines core balance numbers and settings to avoid magic numbers in logic.
 */

export const GameConfig = {
    // Battle System Constants
    BATTLE: {
        ELEMENTAL_BONUS: 1.3,      // 30% Damage Bonus for Advantage
        ELEMENTAL_PENALTY: 0.7,    // 30% Damage Reduction for Disadvantage
        CRIT_MULTIPLIER: 1.5,      // Critical Hit Damage Multiplier
        BASE_CRIT_RATE: 0.05,      // Base Critical Hit Chance (5%)
        SKILL_BOOST_PER_LV: 0.15,  // 15% Skill Power per Skill Level
        BOSS_HP_SCALE: 1000000     // Global Boss HP Base
    },

    // Growth & Economy
    GROWTH: {
        COST_BASE: 100,            // Base training cost
        COST_EXPONENT: 1.1,        // Cost scaling factor (1.1^Level)
        MAX_LEVEL: 100,            // Soft Level Cap
        EVOLUTION_LEVEL: [10, 30, 50] // Evolution Thresholds
    },

    // Resources
    RESOURCES: {
        STARTING_GOLD: 1000000,
        STARTING_GEMS: 10000,
        OFFLINE_GOLD_PER_SEC: 1, // Passive Income Base
        OFFLINE_CAP_HOURS: 8     // Max offline time accumulation
    },

    // Gacha Rates (Percentage)
    GACHA: {
        NORMAL: { N: 80, U: 15, R: 5 },
        PREMIUM: { N: 50, SR: 30, SSR: 15, UR: 5 } // Example
    }
};
