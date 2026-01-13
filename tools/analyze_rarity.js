
import { ABYSS_CREATURES } from '../js/data/creatures/AbyssData.js';
import { ASGARD_CREATURES } from '../js/data/creatures/AsgardData.js';
import { OLYMPUS_CREATURES } from '../js/data/creatures/OlympusData.js';
import { SHANGRILA_CREATURES } from '../js/data/creatures/ShangriLaData.js';
import { WILD_CREATURES } from '../js/data/creatures/WildData.js';


import fs from 'fs';
import path from 'path';

let output = "| ID | Name | World | Rank |\n|---|---|---|---|\n";

const allCreatures = [
    ...ABYSS_CREATURES,
    ...ASGARD_CREATURES,
    ...OLYMPUS_CREATURES,
    ...SHANGRILA_CREATURES,
    ...WILD_CREATURES
];

allCreatures.forEach(c => {
    output += `| ${c.id} | ${c.name} | ${c.world} | ${c.rarity} |\n`;
});

fs.writeFileSync('tools/current_rarity_list.md', output);
console.log("Analysis saved to tools/current_rarity_list.md");

