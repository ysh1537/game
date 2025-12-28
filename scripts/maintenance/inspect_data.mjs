import { OLYMPUS_CREATURES } from './js/data/creatures/OlympusData.js';
import { WILD_CREATURES } from './js/data/creatures/WildData.js';

console.log("=== DEBUG INSPECTION ===");
console.log("Olympus [0] (Zeus):", JSON.stringify(OLYMPUS_CREATURES[0], null, 2));

// Find the failing ones in Wild
const targetIds = ["tadpole_wiggle", "crystal_crab", "sun_flower_spirit"];
targetIds.forEach(id => {
    const c = WILD_CREATURES.find(x => x.id === id);
    if (c) {
        console.log(`Wild [${id}]:`, JSON.stringify(c, null, 2));
    } else {
        console.log(`Wild [${id}]: NOT FOUND`);
    }
});
