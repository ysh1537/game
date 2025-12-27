
export default class PassManager {
    constructor(game) {
        this.game = game;
        this.seasonId = 1;
        this.level = 1;
        this.exp = 0;
        this.isPremium = false; // User has bought the pass?
        this.claimed = { free: [], premium: [] };

        this.maxLevel = 50;
        this.expPerLevel = 100;

        // Mock Rewards Data
        this.rewards = this.generateRewards();
    }

    generateRewards() {
        const rewards = [];
        for (let i = 1; i <= this.maxLevel; i++) {
            // Free: Gold every level, Gems every 5 levels
            const freeReward = (i % 5 === 0)
                ? { type: 'gem', amount: 50 }
                : { type: 'gold', amount: 100 * i };

            // Premium: Better rewards
            const premiumReward = (i % 10 === 0)
                ? { type: 'summon_ticket', amount: 1 } // SSR Ticket at 50?
                : { type: 'gem', amount: 100 };

            rewards.push({ level: i, free: freeReward, premium: premiumReward });
        }
        return rewards;
    }

    addExp(amount) {
        if (this.level >= this.maxLevel) return;

        this.exp += amount;
        let leveledUp = false;

        while (this.exp >= this.expPerLevel && this.level < this.maxLevel) {
            this.exp -= this.expPerLevel;
            this.level++;
            leveledUp = true;
        }

        if (leveledUp) {
            this.game.events.emit('pass:levelup', this.level);
            // Save state?
            this.save();
        }
    }

    claimReward(level, type) { // type: 'free' or 'premium'
        if (level > this.level) return false;
        if (type === 'premium' && !this.isPremium) return false;
        if (this.claimed[type].includes(level)) return false;

        const rewardData = this.rewards.find(r => r.level === level);
        if (!rewardData) return false;

        const reward = rewardData[type];
        this.claimed[type].push(level);

        // Grant Reward
        if (reward.type === 'gold') this.game.resourceManager.addGold(reward.amount);
        if (reward.type === 'gem') this.game.resourceManager.addGem(reward.amount);
        // ... Handle tickets etc.

        this.game.events.emit('pass:claimed', { level, type, reward });
        this.save();
        return true;
    }

    upgradeToPremium() {
        if (this.isPremium) return;
        // Check cost (e.g. real money or gems) logic usually here
        this.isPremium = true;
        this.save();
        this.game.events.emit('pass:upgraded');
    }

    getSerializableState() {
        return {
            seasonId: this.seasonId,
            level: this.level,
            exp: this.exp,
            isPremium: this.isPremium,
            claimed: this.claimed
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.seasonId = state.seasonId || 1;
        this.level = state.level || 1;
        this.exp = state.exp || 0;
        this.isPremium = state.isPremium || false;
        this.claimed = state.claimed || { free: [], premium: [] };
    }

    save() {
        // Trigger generic game save
        if (this.game.save) this.game.save();
    }
}
