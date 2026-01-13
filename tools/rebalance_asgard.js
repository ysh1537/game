const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.join(__dirname, '../js/data/creatures/AsgardData.js');
let content = fs.readFileSync(filePath, 'utf8');

// We need to parse the data. Since it's a "var ASGARD_CREATURES = [...]" we can strip the prefix/suffix and JSON.parse?
// No, it has unquoted keys and comments. standard eval/vm is best.
// But we need to mock RANKS and WORLDS.

const sandbox = {
    ASGARD_CREATURES: [],
    RANKS: { UR: "UR", SSR: "SSR", SR: "SR", SPECIAL: "Special", RARE: "Rare", UNIQUE: "Unique", NORMAL: "Normal" },
    WORLDS: { ASGARD: "ASGARD" },
    console: console
};

// Remove "var ASGARD_CREATURES =" to make it an expression or just run it.
// It is "var ASGARD_CREATURES = [...]". running it adds it to sandbox.
vm.createContext(sandbox);
vm.runInContext(content, sandbox);

const data = sandbox.ASGARD_CREATURES;
let modifiedCount = 0;

const REBALANCE_MAP = {
    // Normal -> Unique
    "valkyrie_recruit": "Unique",
    "creature_dwarf": "Unique",
    "bifrost_wisp": "Unique",

    // Rare -> Unique
    "ratatoskr_squirrel": "Unique", // Downgrade/Sidegrade for utility
    "sleipnir_foal": "Unique",

    // Rare -> Special
    "heimdall_horn_spirit": "Special",
    "muninn_crow": "Special",
    "ice_nymph": "Special",
    "ancient_fossil": "Special",

    // SR -> Special
    "shieldmaiden_iron": "Special" // Adjustment
};

data.forEach(c => {
    if (REBALANCE_MAP[c.id]) {
        const newRank = REBALANCE_MAP[c.id];
        // Use the sandbox constant value
        const rankValue = sandbox.RANKS[newRank.toUpperCase()];

        if (c.rarity !== rankValue) {
            console.log(`[Rebalance] ${c.id}: ${c.rarity} -> ${rankValue}`);

            // We need to update the file content.
            // Using regex to replace specifically for this ID is safer than stringifying the whole object (which loses formatting/comments).
            // Regex: match id: "..." then search forward for rarity: ...

            const idRegex = new RegExp(`id:\\s*["']${c.id}["'][\\s\\S]*?rarity:\\s*([^,\\n]+)`, 'g');
            // This is tricky because rarity might be RANKS.RARE or "Rare".

            // Heuristic replace on the source text:
            // Find the block for this ID.

            // Let's do a source-text replacement using a robust scanner.
            // Or simple string replacement if we are careful.

            // Strategy: Find exact string `id: "${c.id}"`
            // Then find the NEXT `rarity: ...` property.

            const startIdx = content.indexOf(`id: "${c.id}"`);
            if (startIdx !== -1) {
                const afterId = content.substring(startIdx);
                const rarityMatch = afterId.match(/rarity:\s*([^,\n\r}]+)/);
                if (rarityMatch) {
                    const oldRarityLine = rarityMatch[0]; // e.g., "rarity: RANKS.NORMAL" or "rarity: "Normal""

                    // We need to replace only this instance.
                    // Construct the new line.
                    let newRarityString;
                    if (newRank === "Unique") newRarityString = "RANKS.UNIQUE";
                    else if (newRank === "Special") newRarityString = "RANKS.SPECIAL";
                    else if (newRank === "Rare") newRarityString = "RANKS.RARE";
                    // etc.

                    // But wait, the file might use string literals "Rare" or constants RANKS.RARE.
                    // The audit showed mixed usage.
                    // Let's standardize to string literals for safety? 
                    // No, users prefer constants if present.
                    // The sandbox used RANKS.xxx.

                    // Let's just use the string value if it was a string, or RANKS.X if it was RANKS.X.
                    // Actually, let's just force "Unique" or "Special" as strings to be safe and consistent with fixed files?
                    // Original AsgardData uses RANKS.SSR, RANKS.SR etc.
                    // Let's use RANKS.UNIQUE and RANKS.SPECIAL.

                    const replacement = `rarity: RANKS.${newRank.toUpperCase()}`;

                    // We must be careful not to replace the WRONG rarity if the pattern is repeated (unlikely in this local scope).
                    // We replace only the first occurrence after the ID.

                    // Splice string
                    const absoluteRarityStart = startIdx + rarityMatch.index;
                    const absoluteRarityEnd = absoluteRarityStart + oldRarityLine.length;

                    content = content.substring(0, absoluteRarityStart) + replacement + content.substring(absoluteRarityEnd);
                    modifiedCount++;
                }
            }
        }
    }
});

if (modifiedCount > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${modifiedCount} creatures in AsgardData.js`);
} else {
    console.log("No changes needed.");
}
