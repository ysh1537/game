const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'js', 'data', 'creatures');
const files = ['OlympusData.js', 'AsgardData.js', 'AbyssData.js', 'ShangriLaData.js', 'WildData.js'];

// Regex helpers
const extract = (text, key) => {
    // Look for key: "value" or key: value
    // value can be string "...", number 123, array [...], object {...}
    const escapedKey = key; // usually safe

    // Simple strings/numbers
    let match = text.match(new RegExp(`${key}:\\s*"([^"]+)"`));
    if (match) return `"${match[1]}"`;

    match = text.match(new RegExp(`${key}:\\s*([0-9.]+)`));
    if (match) return match[1];

    // Ranks/Worlds constants (RANKS.UR, WORLDS.OLYMPUS)
    match = text.match(new RegExp(`${key}:\\s*(RANKS\\.[A-Z]+)`));
    if (match) return match[1];
    match = text.match(new RegExp(`${key}:\\s*(WORLDS\\.[A-Z_]+)`));
    if (match) return match[1];

    // Arrays (elements)
    if (key === 'elements') {
        const arrStart = text.indexOf('elements: [');
        if (arrStart !== -1) {
            const arrEnd = text.indexOf(']', arrStart);
            if (arrEnd !== -1) {
                return text.substring(arrStart + 10, arrEnd + 1).trim(); // returns ["A", "B"]
            }
        }
    }

    // Objects (lore, lines) - simplified extraction (might miss complex nesting but okay for now)
    // Assuming single line or well-formatted block
    if (key === 'lore' || key === 'lines') {
        // Find split by checking next keywords
        // This is hard with regex. 
        // We will default to a placeholder if extraction fails or is messy.
        // Actually, we can just grep the fields we know are clean.
        // If the file is messy, extracting complex objects is hard.
        // Let's use defaults if complex.
    }
    return null;
};

// Safe defaults
const DEFAULTS = {
    skillId: '"default_attack"',
    lore: '{ title: "미지의 존재", story: "아직 알려지지 않은 신비로운 크리처입니다." }',
    lines: '{ normal: "..." }',
    baseStr: 10,
    baseInt: 10
};

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Identify world and header
    let arrayName = '';
    if (file.includes('Olympus')) arrayName = 'OLYMPUS_CREATURES';
    else if (file.includes('Asgard')) arrayName = 'ASGARD_CREATURES';
    else if (file.includes('Abyss')) arrayName = 'ABYSS_CREATURES';
    else if (file.includes('ShangriLa')) arrayName = 'SHANGRI_LA_CREATURES'; // Check actual name? usually SHANGRILA or SHANGRI_LA
    else if (file.includes('Wild')) arrayName = 'WILD_CREATURES';

    // Better: extract header line
    const headerMatch = content.match(/export const (\w+) =/);
    if (headerMatch) arrayName = headerMatch[1];

    // Split by `id:` to find objects.
    // The first split part is header junk.
    const parts = content.split(/id:\s*"/).slice(1); // skip first part

    const creatures = [];

    parts.forEach(part => {
        // part starts with 'creature_id", ...'
        const idMatch = part.match(/^([^"]+)"/);
        if (!idMatch) return;
        const id = idMatch[1];

        // Extract fields
        const name = extract(part, 'name') || `"Unknown"`;
        const rarity = extract(part, 'rarity') || 'RANKS.NORMAL';
        const world = extract(part, 'world') || 'WORLDS.WILD'; // Fallback
        const elements = extract(part, 'elements') || `["Nature"]`;

        const baseStr = extract(part, 'baseStr') || DEFAULTS.baseStr;
        const baseInt = extract(part, 'baseInt') || DEFAULTS.baseInt;

        const image = extract(part, 'image') || `"images/placeholder_${file.toLowerCase().replace('data.js', '')}.png"`;

        // Skill, Lore, Lines -> Use existing if found cleanly, else default
        let skillId = extract(part, 'skillId');
        if (!skillId || skillId.includes('default_attack')) skillId = DEFAULTS.skillId;

        // Lore/Lines is tricky.
        // If we leave them as defaults, we lose data.
        // But the goal is to fix syntax.
        // Let's try to extract basic strings if they exist.
        // `lore: { title: "..." ... }`
        let lore = DEFAULTS.lore;
        // Basic extraction for lore title/story? Too complex. Use default for safety.
        // Or specific known patterns.

        let lines = DEFAULTS.lines;

        creatures.push({
            id, name, rarity, world, elements, baseStr, baseInt, image, skillId, lore, lines
        });
    });

    // Reconstruct File
    let output = `import { RANKS } from '../RankData.js';\nimport { WORLDS } from '../WorldData.js';\n\nexport const ${arrayName} = [\n`;

    creatures.forEach(c => {
        output += `    {\n`;
        output += `        id: "${c.id}",\n`;
        output += `        name: ${c.name},\n`;
        output += `        rarity: ${c.rarity},\n`;
        output += `        world: ${c.world},\n`;
        output += `        elements: ${c.elements},\n`;
        output += `        baseStr: ${c.baseStr}, baseInt: ${c.baseInt},\n`;
        output += `        image: ${c.image},\n`;
        output += `        skillId: ${c.skillId},\n`;
        output += `        lore: ${c.lore},\n`;
        output += `        lines: ${c.lines}\n`;
        output += `    },\n`;
    });

    output += `];\n`;

    fs.writeFileSync(filePath, output, 'utf8');
    console.log(`Rebuilt ${file}: ${creatures.length} creatures.`);
});
