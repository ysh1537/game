import { ASGARD_CREATURES } from '../js/data/creatures/AsgardData.js';

console.log('Total Asgard Creatures:', ASGARD_CREATURES.length);
ASGARD_CREATURES.forEach((c, i) => {
    console.log(`${i}: ${c.id}`);
});
if (ASGARD_CREATURES.find(c => c.id === 'fenrir_kin')) {
    console.log('✅ Found fenrir_kin');
} else {
    console.log('❌ fenrir_kin NOT found');
}
