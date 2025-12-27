const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'js', 'data', 'creatures');
const files = ['OlympusData.js', 'AsgardData.js', 'AbyssData.js', 'ShangriLaData.js', 'WildData.js'];

const RANKS = {
    NORMAL: 'Normal', UNIQUE: 'Unique', RARE: 'Rare', SPECIAL: 'Special', SR: 'SR', SSR: 'SSR', UR: 'UR'
};

// Skill Mapping based on Rank
const RANK_SKILLS = {
    'UR': 'divine_wrath',
    'SSR': 'meteor_strike',
    'SR': 'power_slash',
    'Special': 'elemental_burst',
    'Rare': 'double_strike',
    'Unique': 'hard_hit',
    'Normal': 'default_attack'
};

let totalFixed = 0;

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Regex to match each creature object block roughly
    // This is tricky with Regex. Instead, we'll try to insert missing fields using replace on common patterns.
    // Assuming format: id: "...", ... image: "..."
    // We look for objects that DON'T have skillId, lore, or lines.

    // Better approach: Read file, find positions of "image: ...," and check if next lines have skillId etc.
    // If not, insert them.

    // Strategy:
    // 1. Find all `image: "...",` occurences.
    // 2. Check if the text immediately following (ignoring whitespace/newlines) contains `lore:` or `lines:` or `skillId:`.
    // 3. Since the property order isn't guaranteed but usually `image` is near the end or middle, we might need a safer way.
    //    Actually, `image` is usually followed by `lore` or `lines` or closing brace `}`.

    const lines = content.split('\n');
    const newLines = [];

    let currentCreatureStart = -1;
    let rank = 'Normal';
    let hasSkill = false;
    let hasLore = false;
    let hasLines = false;
    let imageLineIndex = -1;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Detect Start of Object
        if (line.trim().startsWith('{')) {
            currentCreatureStart = i;
            hasSkill = false;
            hasLore = false;
            hasLines = false;
            rank = 'Normal';
            imageLineIndex = -1;
        }

        // Detect Rank
        if (line.includes('rarity:')) {
            if (line.includes('RANKS.UR')) rank = 'UR';
            else if (line.includes('RANKS.SSR')) rank = 'SSR';
            else if (line.includes('RANKS.SR')) rank = 'SR';
            else if (line.includes('RANKS.SPECIAL')) rank = 'Special';
            else if (line.includes('RANKS.RARE')) rank = 'Rare';
            else if (line.includes('RANKS.UNIQUE')) rank = 'Unique';
            else rank = 'Normal';
        }

        // Detect Fields
        if (line.includes('skillId:')) hasSkill = true;
        if (line.includes('lore:')) hasLore = true;
        if (line.includes('lines:')) hasLines = true;
        if (line.includes('image:')) imageLineIndex = i;

        // Detect End of Object
        if (line.trim().startsWith('}') || line.trim().startsWith('},')) {
            // Check missing fields and insert before closing brace or after image

            // Note: We are iterating line by line pushing to newLines.
            // But we need to insert things into the lines we just processed.
            // So we need to modify the lines array or use a buffer.

            // Let's modify the buffer just before pushing this closing brace.

            let insertionBuffer = [];

            if (!hasSkill) {
                const defaultSkill = RANK_SKILLS[rank] || 'default_attack';
                insertionBuffer.push(`        skillId: "${defaultSkill}",`);
                totalFixed++;
            }

            if (!hasLore) {
                insertionBuffer.push(`        lore: { title: "미지의 존재", story: "아직 알려지지 않은 신비로운 크리처입니다." },`);
                totalFixed++;
            }

            if (!hasLines) {
                insertionBuffer.push(`        lines: { normal: "..." },`);
                totalFixed++;
            }

            if (insertionBuffer.length > 0) {
                // Insert before the closing brace
                // Also ensures the previous line has a comma if needed? 
                // JS objects don't strictly require comma on last item but next items do.
                // It's safer to ensure previous line has comma.

                // Check previous line in newLines
                let prevLineIdx = newLines.length - 1;
                while (prevLineIdx >= 0 && newLines[prevLineIdx].trim() === '') prevLineIdx--;

                if (prevLineIdx >= 0 && !newLines[prevLineIdx].trim().endsWith(',') && !newLines[prevLineIdx].trim().endsWith('{') && !newLines[prevLineIdx].trim().startsWith('/')) {
                    newLines[prevLineIdx] += ',';
                }

                newLines.push(...insertionBuffer);
                modified = true;
            }
        }

        newLines.push(line);
    }

    if (modified) {
        fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
        console.log(`Updated ${file}`);
    }
});

console.log(`Total fields fixed: ${totalFixed}`);
