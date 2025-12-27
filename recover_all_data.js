
import fs from 'fs';
import path from 'path';

const RANKS_IMPORT = "import { RANKS } from '../RankData.js';\nimport { WORLDS } from '../WorldData.js';\n\n";

// Load the markdown file content manually (I'll embed the huge string or read it)
// Since I can't easily read user files via import in this environment without setup,
// I will assume I can read 'docs/creature_asset_inventory.md' using fs.

const MD_PATH = './docs/creature_asset_inventory.md';

function parseMarkdown() {
    const content = fs.readFileSync(MD_PATH, 'utf8');
    const lines = content.split('\n');

    // Storage
    const worldData = {
        ASGARD: [],
        OLYMPUS: [],
        SHANGRILA: [],
        ABYSS: [],
        WILD: []
    };

    // Helper to add if unique
    const addCreature = (worldKey, c) => {
        if (!worldData[worldKey]) worldData[worldKey] = [];
        // Check dupe
        if (worldData[worldKey].find(x => x.id === c.id)) return;
        worldData[worldKey].push(c);
    };

    let currentSectionWorld = null;

    lines.forEach(line => {
        line = line.trim();
        if (!line.includes('|')) {
            // Check headers for World Context in Priority Section
            if (line.includes('### 🌍 ASGARD')) currentSectionWorld = 'ASGARD';
            else if (line.includes('### 🌍 WILD')) currentSectionWorld = 'WILD';
            else if (line.includes('### 🌍 ABYSS')) currentSectionWorld = 'ABYSS';
            else if (line.includes('### 🌍 SHANGRILA')) currentSectionWorld = 'SHANGRILA';
            else if (line.includes('### 🌍 OLYMPUS')) currentSectionWorld = 'OLYMPUS';
            else if (line.includes('### 🌍 Unknown')) currentSectionWorld = 'WILD'; // Fallback
            else if (line.includes('## ✅ Generated Assets')) currentSectionWorld = 'GENERATED';
            return;
        }

        // Table Row
        // Skip Header Separator
        if (line.includes('---')) return;
        // Skip Table Headers
        if (line.includes('Rarity') && line.includes('Name')) return;

        const parts = line.split('|').map(s => s.trim()).filter(s => s);
        // Clean markdown bold
        const clean = (s) => s ? s.replace(/\*\*/g, '') : '';

        if (currentSectionWorld === 'GENERATED') {
            // Format: | World | Rarity | Name | Image |
            // [0] World, [1] Rarity, [2] Name, [3] Image
            if (parts.length < 4) return;
            const w = parts[0].toUpperCase();
            const rarity = clean(parts[1]);
            const name = parts[2];
            const image = parts[3];

            // Extract ID
            let id = path.basename(image, path.extname(image));
            id = id.replace(/^creature_/, ''); // Common prefix removal
            // Manual overrides for specific files if needed?
            // e.g. "god_hel" -> "god_hel"
            // "creature_god_zeus" -> "god_zeus"

            if (worldData[w]) {
                addCreature(w, {
                    id, name, rarity: `RANKS.${rarity.toUpperCase()}`, image, world: `WORLDS.${w}`
                });
            }
        } else if (currentSectionWorld && worldData[currentSectionWorld]) {
            // Priority Section Format: | Rarity | Name | ID | Status |
            // [0] Rarity, [1] Name, [2] ID, [3] Status
            if (parts.length < 3) return;
            const rarity = clean(parts[0]);
            const name = parts[1];
            const id = parts[2];
            const image = `images/${id}.png`; // Placeholder path

            addCreature(currentSectionWorld, {
                id, name, rarity: `RANKS.${rarity.toUpperCase()}`, image, world: `WORLDS.${currentSectionWorld}`
            });
        }
    });

    // Add known missing ones if not parsed?
    // The Priority Lists had explicit IDs. The Generated list used filenames efficiently.
    // Seems robust.

    return worldData;
}

function generateAll() {
    const data = parseMarkdown();

    // Write files
    for (const [world, items] of Object.entries(data)) {
        if (items.length === 0) continue;

        let fileKey = world;
        if (world === 'SHANGRILA') fileKey = 'ShangriLa'; // CamelCase fix
        if (world === 'ASGARD') fileKey = 'Asgard';
        if (world === 'OLYMPUS') fileKey = 'Olympus';
        if (world === 'ABYSS') fileKey = 'Abyss';
        if (world === 'WILD') fileKey = 'Wild';

        const content = `${RANKS_IMPORT}export const ${world}_CREATURES = [\n` +
            items.map(item => `    {
        id: "${item.id}",
        name: "${item.name}",
        rarity: ${item.rarity},
        world: ${item.world},
        elements: ["Light"], // Placeholder
        baseStr: 10, baseInt: 10,
        image: "${item.image}",
        sprites: { idle: "${item.image}" },
        lore: { title: "미지의 존재", story: "복구된 데이터입니다." },
        lines: { normal: "..." }
    }`).join(',\n') +
            "\n];";

        fs.writeFileSync(`./js/data/creatures/${fileKey}Data.js`, content, 'utf8');
        console.log(`Recovered ${fileKey}Data.js (${items.length})`);
    }
}

generateAll();
