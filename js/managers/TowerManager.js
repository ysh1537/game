
import EventEmitter from '../utils/EventEmitter.js';

export default class TowerManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;
        this.currentFloor = 1;
        this.bestFloor = 1;
    }

    init() {
        // Init listeners if needed
        this.game.events.on('battle:completed', (result) => this.onBattleEnd(result));
    }

    startTowerBattle() {
        // [Quests] Daily Mission Trigger
        this.game.events.emit('tower:enter');

        // Generate Enemies
        // Logic: 5 enemies. Level = Floor + small variation.
        const floor = this.currentFloor;
        const enemyLevel = Math.max(1, floor + Math.floor(floor * 0.2));

        // Use Mock Names for now or generator
        const enemies = [];
        for (let i = 0; i < 5; i++) {
            // Simple mock generation. In real game, use CreatureManager to spawn specific mobs.
            enemies.push(this._generateTowerEnemy(floor, i));
        }

        this.game.battleManager.startBattle({
            isPvP: false,
            mode: 'tower',
            stageId: `Tower ${floor}F`,
            enemies: enemies,
            background: 'bg_tower_01.png' // Placeholder
        });
    }

    _generateTowerEnemy(floor, index) {
        // Scaled Stats
        const scale = 1.0 + (floor * 0.1);
        const hp = Math.floor(500 * scale * (1 + index * 0.1));
        const atk = Math.floor(50 * scale);

        return {
            id: `tower_mob_${floor}_${index}`,
            name: `Tower Guardian ${index + 1}`,
            level: floor,
            maxHp: hp,
            hp: hp,
            atk: atk,
            def: Math.floor(10 * scale),
            sp: 0,
            maxSp: 100,
            skillId: 'default_attack',
            image: 'images/creature_golem_mud_girl.png',
            elements: [],
            statusEffects: [],
            sprites: { idle: 'images/creature_golem_mud_girl.png' }
        };
    }

    onBattleEnd({ isWin, mode }) {
        if (mode !== 'tower') return;

        if (isWin) {
            this.currentFloor++;
            if (this.currentFloor > this.bestFloor) {
                this.bestFloor = this.currentFloor;
            }
            // Reward?
            const rewardGold = this.currentFloor * 100;
            this.game.resourceManager.addGold(rewardGold);
            this.emit('tower:updated', this.getViewModel());
        }
    }

    getViewModel() {
        return {
            currentFloor: this.currentFloor,
            bestFloor: this.bestFloor
        };
    }

    getSerializableState() {
        return {
            currentFloor: this.currentFloor,
            bestFloor: this.bestFloor
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.currentFloor = state.currentFloor || 1;
        this.bestFloor = state.bestFloor || 1;
    }
}
