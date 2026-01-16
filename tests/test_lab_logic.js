import { UPGRADE_DATA } from './js/data/UpgradeData.js';
import { RANKS } from './js/data/RankData.js';

// Mock Manager Logic
class TestLabManager {
    constructor() {
        this.data = UPGRADE_DATA;
    }
    getUpgradeCost(rarity, currentLevel) {
        const baseCost = this.data.BASE_COSTS[rarity] || this.data.BASE_COSTS[RANKS.NORMAL];
        return Math.floor(baseCost * Math.pow(this.data.COST_SCALE, currentLevel - 1));
    }
}

const lab = new TestLabManager();

console.log("--- Lab Logic Test ---");

// Test 1: Normal Lv.1 -> 50
const normalCost = lab.getUpgradeCost("Normal", 1);
if (normalCost === 100) console.log(`[PASS] Normal Lv.1 Cost: ${normalCost}`);
else console.error(`[FAIL] Normal Lv.1 Cost: ${normalCost} (Expected 100)`);

// Test 2: UR Lv.1 -> 5000
const urCost = lab.getUpgradeCost("UR", 1);
if (urCost === 10000) console.log(`[PASS] UR Lv.1 Cost: ${urCost}`);
else console.error(`[FAIL] UR Lv.1 Cost: ${urCost} (Expected 10000)`);

// Test 3: Normal Lv.2 -> 50 * 1.5 = 75
const normalLv2 = lab.getUpgradeCost("Normal", 2);
if (normalLv2 === 150) console.log(`[PASS] Normal Lv.2 Cost: ${normalLv2}`);
else console.error(`[FAIL] Normal Lv.2 Cost: ${normalLv2} (Expected 150)`);

console.log("--- Test Complete ---");
