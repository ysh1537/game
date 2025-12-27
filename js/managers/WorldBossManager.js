
import EventEmitter from '../utils/EventEmitter.js';
import { getRandomBoss, getBossDef } from '../data/WorldBossData.js';

export default class WorldBossManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;
        this.boss = null;
        this.myDamage = 0;
        this.isDefeated = false;

        // Simulation Interval
        setInterval(() => this.simulateGlobalDamage(), 5000); // Every 5s
    }

    init() {
        // Load or Spawn
        if (!this.boss) {
            this.spawnNewBoss();
        }
    }

    spawnNewBoss() {
        const def = getRandomBoss();
        this.boss = {
            ...def,
            currentHp: def.maxHp,
            spawnTime: Date.now()
        };
        this.myDamage = 0;
        this.isDefeated = false;
        this.emit('boss:spawned', this.boss);
    }

    attackBoss(damage) {
        if (!this.boss || this.isDefeated) return false;

        this.boss.currentHp = Math.max(0, this.boss.currentHp - damage);
        this.myDamage += damage;

        this.emit('boss:updated', {
            currentHp: this.boss.currentHp,
            maxHp: this.boss.maxHp,
            myDamage: this.myDamage
        });

        if (this.boss.currentHp <= 0) {
            this.onBossDefeated();
        }
        return true;
    }

    simulateGlobalDamage() {
        if (!this.boss || this.isDefeated) return;

        // Simulate arbitrary global DPS (0.1% to 0.5% of max HP per 5s)
        const globalDmg = Math.floor(this.boss.maxHp * (0.001 + Math.random() * 0.004));
        this.boss.currentHp = Math.max(0, this.boss.currentHp - globalDmg);

        this.emit('boss:updated', {
            currentHp: this.boss.currentHp,
            maxHp: this.boss.maxHp,
            myDamage: this.myDamage
        });

        if (this.boss.currentHp <= 0) {
            this.onBossDefeated();
        }
    }

    onBossDefeated() {
        this.isDefeated = true;
        this.emit('boss:defeated', this.boss);

        // Distribute Rewards
        // Logic: Base Reward + Rank Bonus (Simplified: Fixed for now)
        if (this.myDamage > 0) {
            const reward = this.boss.rewards;
            this.game.resourceManager.addGold(reward.gold);
            this.game.resourceManager.addGem(reward.gem);

            // Notification is handled by UI listener
        }

        // Respawn timer (e.g., 1 min for demo)
        setTimeout(() => this.spawnNewBoss(), 60000);
    }

    getSerializableState() {
        return {
            boss: this.boss,
            myDamage: this.myDamage,
            isDefeated: this.isDefeated
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.boss = state.boss;
        this.myDamage = state.myDamage || 0;
        this.isDefeated = state.isDefeated || false;
    }
}
