export default class OutpostManager {
    constructor(game) {
        this.game = game;
        this.lastClaimTime = Date.now();
        this.accumulatedRewards = {
            gold: 0,
            exp: 0
        };

        // Settings
        this.MAX_ACCUMULATION_TIME_MS = 24 * 60 * 60 * 1000; // 24 Hours
    }

    init() {
        this.load();
        // Start periodic calculation
        setInterval(() => this.calculateRewards(), 60000); // Check every minute
    }

    /**
     * @description Calculate rewards based on time elapsed since last claim
     * Rate Formula: Base + (Stage * Multiplier)
     */
    calculateRewards() {
        const now = Date.now();
        const elapsed = now - this.lastClaimTime;

        // Cap at Max Time
        const validElapsed = Math.min(elapsed, this.MAX_ACCUMULATION_TIME_MS);

        // Get Rates
        const rates = this.getProductionRates();

        // Calculate Total
        // Rate is per minute
        const minutes = validElapsed / 60000;

        return {
            gold: Math.floor(rates.gold * minutes),
            exp: Math.floor(rates.exp * minutes),
            timeMs: validElapsed
        };
    }

    getProductionRates() {
        // Based on highest stage cleared
        const maxStage = this.game.stageManager ? this.game.stageManager.highestStage : 1;

        // Example: Stage 1 = 100 Gold/min, 10 Exp/min
        // Stage 100 = 1000 Gold/min, 100 Exp/min
        return {
            gold: 10 + (maxStage * 5),
            exp: 5 + (maxStage * 2)
        };
    }

    claim() {
        const rewards = this.calculateRewards();

        if (rewards.gold > 0 || rewards.exp > 0) {
            this.game.resourceManager.addGold(rewards.gold);
            this.game.resourceManager.addExp(rewards.exp);

            this.lastClaimTime = Date.now();
            this.save();
            return { success: true, rewards: rewards };
        }
        return { success: false, reason: "No rewards to claim" };
    }

    save() {
        const data = {
            lastClaimTime: this.lastClaimTime
        };
        localStorage.setItem('outpostData', JSON.stringify(data));
    }

    load() {
        try {
            const saved = JSON.parse(localStorage.getItem('outpostData'));
            if (saved) {
                this.lastClaimTime = saved.lastClaimTime || Date.now();
            }
        } catch (e) {
            console.error("Failed to load Outpost data", e);
        }
    }
}
