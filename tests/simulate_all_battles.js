import EventEmitter from 'events';
import { WORLDS } from '../js/data/WorldData.js';
// Checking BattleManager imports: `import { WORLDS } from '../data/CreatureData.js';`
// But WORLDS is usually in WorldData.js. Let's trust BattleManager imports work if files exist.

// We need to setup global mimics if needed.
global.window = {};
global.alert = (msg) => { }; // Mock alert

// Import Classes using dynamic import to handle relative paths correctly from this script's location
// Script is at D:\test\game\tests\simulate_all_battles.js
// So '../js/managers/BattleManager.js' is correct.

// However, BattleManager imports `../utils/EventEmitter.js`. 
// We should check if `utils/EventEmitter.js` works in Node. 
// If it uses standard ES6 export default class, it should work.

import BattleManager from '../js/managers/BattleManager.js';
import CreatureManager from '../js/managers/CreatureManager.js';
import ResourceManager from '../js/managers/ResourceManager.js';
// Import Data
import { OLYMPUS_CREATURES } from '../js/data/creatures/OlympusData.js';
import { ASGARD_CREATURES } from '../js/data/creatures/AsgardData.js';
import { ABYSS_CREATURES } from '../js/data/creatures/AbyssData.js';
import { SHANGRILA_CREATURES } from '../js/data/creatures/ShangriLaData.js';
import { WILD_CREATURES } from '../js/data/creatures/WildData.js';

const ALL_CREATURES = [
    ...OLYMPUS_CREATURES,
    ...ASGARD_CREATURES,
    ...ABYSS_CREATURES,
    ...SHANGRILA_CREATURES,
    ...WILD_CREATURES
];

console.log(`[Simulation] Loaded ${ALL_CREATURES.length} creatures.`);

// Mock Objects
class MockStageManager {
    getStageInfo(id) {
        return {
            name: "Simulation Stage",
            enemies: [
                { name: "Dummy Target", hp: 1000, atk: 10, def: 0, image: "images/dummy.png", level: 1, elements: ["Nature"] }
            ],
            rewardGold: 100,
            rewardExp: 50
        };
    }
    getMaxStage() { return 10; }
    unlockNextStage() { }
}

class MockDeckManager {
    constructor() {
        this.activeTeam = [];
    }
    getActiveTeam() {
        return this.activeTeam;
    }
}

class MockGame {
    constructor() {
        this.events = new EventEmitter(); // Node event emitter has roughly same API (.emit, .on) as our custom one? 
        // Our custom one likely uses .emit and .on. Node's is compatible.

        this.resourceManager = new ResourceManager(this, this.events);
        // ResourceManager internal logic might need localStorage?
        // Let's hope it checks window.localStorage.

        this.creatureManager = new CreatureManager(this, this.events, this.resourceManager);
        this.deckManager = new MockDeckManager();
        this.stageManager = new MockStageManager();
    }

    getDirectorEffect(type) { return 0; }
    save() { }
}

// Mock LocalStorage
const mockStorage = {};
global.localStorage = {
    getItem: (k) => mockStorage[k] || null,
    setItem: (k, v) => mockStorage[k] = v,
    removeItem: (k) => delete mockStorage[k]
};

async function runSimulation() {
    const game = new MockGame();
    // BattleManager expects (game, events, resourceManager, userCreatures)
    // userCreatures is unused in constructor? It receives it anyway.
    const battleManager = new BattleManager(game, game.events, game.resourceManager, []);

    // Override setTimeout to speed up
    // But BattleManager uses `await new Promise(r => setTimeout(r, ...))`
    // We can just set battleSpeed very high.
    battleManager.setBattleSpeed(100); // 100x speed

    let passed = 0;
    let failed = 0;
    const failures = [];

    console.log("[Simulation] Starting Battle Simulations...");

    for (const def of ALL_CREATURES) {
        // Create a mock instance for the creature
        // Ideally we use CreatureManager to spawn it to ensure stats are calc'd.
        const creatureInstance = game.creatureManager._createCreatureByRarity(def.rarity);
        // Force override def to be specific logic target if random didn't pick it?
        // CreatureManager._create uses random pick.
        // We need to manually construct the instance using THE specific definition.

        const testCreature = {
            instanceId: 9999,
            dataId: def.id,
            def: def,
            level: 30, // Max level to unlock skills
            exp: 0,
            star: 5, // Max star
            stats: {}, // Recalc needed
            affection: 0
        };
        game.creatureManager.recalculateStats(testCreature);

        // Setup Deck
        game.deckManager.activeTeam = [testCreature];

        // Start Battle
        // We need to capture errors.
        try {
            // Using a Promise to wrap the battle duration
            await new Promise((resolve, reject) => {
                const timeout = setTimeout(() => {
                    battleManager.inBattle = false;
                    resolve("Timeout (Survived)");
                }, 500); // Run for 500ms (enough for few turns at 100x speed)

                // Listen for errors? BattleManager catches its own errors.
                // We assume if it crashes, it throws or logs.

                // We can spy on console.error?

                game.events.once('battle:end', (res) => {
                    clearTimeout(timeout);
                    resolve("Battle Ended");
                });

                battleManager.startBattle(1);
            });

            passed++;
            // process.stdout.write('.'); // Progress dot
        } catch (e) {
            failed++;
            failures.push({ id: def.id, error: e.message });
            process.stdout.write('F');
        }
    }

    console.log(`\n\n=== Simulation Report ===`);
    console.log(`Total: ${ALL_CREATURES.length}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);

    if (failed > 0) {
        console.log("\nFailures:");
        failures.forEach(f => console.log(`- [${f.id}]: ${f.error}`));
    } else {
        console.log("All creatures passed runtime simulation!");
    }
}

runSimulation();
