
import EventEmitter from '../utils/EventEmitter.js';

export default class GuildManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;
        this.guild = null;
    }

    createGuild(name) {
        if (this.guild) return { success: false, reason: "이미 길드에 가입되어 있습니다." };

        const cost = 10000;
        if (this.game.resourceManager.gold < cost) return { success: false, reason: "골드가 부족합니다." };

        this.game.resourceManager.spendGold(cost);

        this.guild = {
            name: name,
            level: 1,
            exp: 0,
            maxExp: 1000,
            members: [
                { name: this.game.authManager.user?.nickname || 'Master', role: 'Master', donation: 0 }
            ],
            buffs: {
                atk: 0,
                gold: 0
            }
        };

        this.emit('guild:updated', this.guild);
        return { success: true };
    }

    donate(amount) {
        if (!this.guild) return { success: false };

        if (this.game.resourceManager.gold < amount) return { success: false, reason: "골드가 부족합니다." };

        this.game.resourceManager.spendGold(amount);

        // Exp Gain
        this.guild.exp += Math.floor(amount / 10);

        // Personal Contribution
        const me = this.guild.members.find(m => m.role === 'Master'); // Simplification
        if (me) me.donation += amount;

        // Level Up Check
        if (this.guild.exp >= this.guild.maxExp) {
            this.guild.level++;
            this.guild.exp -= this.guild.maxExp;
            this.guild.maxExp = Math.floor(this.guild.maxExp * 1.5);

            // Buff Upgrade
            this.guild.buffs.atk += 0.01; // 1% per level
            this.guild.buffs.gold += 0.01;

            this.emit('guild:levelup', this.guild.level);
        }

        this.emit('guild:updated', this.guild);
        return { success: true };
    }

    leaveGuild() {
        if (!this.guild) return;
        this.guild = null;
        this.emit('guild:updated', null);
    }

    getBuffs() {
        if (!this.guild) return { atk: 0, gold: 0 };
        return this.guild.buffs;
    }

    getSerializableState() {
        return {
            guild: this.guild
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.guild = state.guild || null;
    }
}
