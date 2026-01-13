const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_DIR = path.join(__dirname, '../js/data/creatures');
const IMAGES_DIR = path.join(__dirname, '../'); // relative to images/..

// Mock Context
const RANKS = { NORMAL: "Normal", UNIQUE: "Unique", RARE: "Rare", SPECIAL: "Special", SR: "SR", SSR: "SSR", UR: "UR" };
const WORLDS = { OLYMPUS: "OLYMPUS", ASGARD: "ASGARD", SHANGRILA: "SHANGRILA", ABYSS: "ABYSS", WILD: "WILD" };

const FILES = [
    { name: 'AsgardData.js', varName: 'ASGARD_CREATURES' },
    { name: 'OlympusData.js', varName: 'OLYMPUS_CREATURES' },
    { name: 'ShangriLaData.js', varName: 'SHANGRILA_CREATURES' },
    { name: 'WildData.js', varName: 'WILD_CREATURES' },
    { name: 'AbyssData.js', varName: 'ABYSS_CREATURES' }
];

let globalErrors = [];
let allIds = new Set();
let rarityCounts = {};

function logError(file, id, msg) {
    globalErrors.push(`[${file}] [${id}] ${msg}`);
}

function checkFileExists(relPath) {
    if (!relPath) return false;
    // Data has relative paths like "images/..."
    const fullPath = path.join(IMAGES_DIR, relPath);
    return fs.existsSync(fullPath);
}

console.log("Starting Perfect Audit...");

FILES.forEach(f => {
    const filePath = path.join(DATA_DIR, f.name);
    if (!fs.existsSync(filePath)) {
        globalErrors.push(`CRITICAL: File missing ${f.name}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    // Remove imports/exports for VM
    content = content.replace(/import .* from .*;/g, '').replace(/export const/g, 'var');

    const sandbox = { RANKS, WORLDS, console };
    vm.createContext(sandbox);

    try {
        vm.runInContext(content, sandbox);
        const data = sandbox[f.varName];

        if (!data) {
            globalErrors.push(`CRITICAL: Variable ${f.varName} not found in ${f.name}`);
            return;
        }

        const worldCounts = { UR: 0, SSR: 0, SR: 0, Rare: 0, Unique: 0, Normal: 0, Special: 0 };

        data.forEach(c => {
            const ctx = c.id || "UNKNOWN_ID";

            // 1. ID Uniqueness
            if (allIds.has(c.id)) {
                logError(f.name, ctx, `Duplicate Global ID: ${c.id}`);
            }
            allIds.add(c.id);

            // 2. Rarity
            if (!c.rarity) logError(f.name, ctx, "Missing Rarity");
            else worldCounts[c.rarity] = (worldCounts[c.rarity] || 0) + 1;

            // 3. Schema Checks
            if (!c.name) logError(f.name, ctx, "Missing Name");
            if (!c.world) logError(f.name, ctx, "Missing World");
            if (!c.elements || c.elements.length === 0) logError(f.name, ctx, "Missing Elements");
            if (typeof c.baseStr !== 'number') logError(f.name, ctx, "Invalid baseStr");
            if (typeof c.baseInt !== 'number') logError(f.name, ctx, "Invalid baseInt");

            // 4. Asset Checks
            if (!c.image) logError(f.name, ctx, "Missing Main Image string");
            // else if (!checkFileExists(c.image)) logError(f.name, ctx, `Main Image file NOT FOUND: ${c.image}`);

            if (!c.sprites) logError(f.name, ctx, "Missing Sprites object");
            // else {
            //     // Optional: Check specific sprites if strictness needed
            //     // keys: idle, joy, etc.
            // }

            // 5. Lore & Content Checks
            if (!c.lore) logError(f.name, ctx, "Missing Lore object");
            else {
                if (!c.lore.title || c.lore.title === "New Discovery" || c.lore.title === "미확인 생명체")
                    logError(f.name, ctx, `Placeholder Title: ${c.lore.title}`);
                if (!c.lore.story || c.lore.story.includes("New Discovery") || c.lore.story.length < 10)
                    logError(f.name, ctx, "Invalid/Short Story");
                if (!c.lore.personality || c.lore.personality === "Unknown" || c.lore.personality === "알 수 없음")
                    logError(f.name, ctx, `Placeholder Personality: ${c.lore.personality}`);
            }

            // 6. Dialogue
            if (!c.touchLines) logError(f.name, ctx, "Missing touchLines");
            else {
                if (!c.touchLines.idle || c.touchLines.idle.length === 0) logError(f.name, ctx, "Missing touchLines.idle");
                // Check for placeholder text like "..." if strictly required to be text
            }
        });

        rarityCounts[f.name] = worldCounts;

    } catch (e) {
        globalErrors.push(`CRITICAL: Syntax Error in ${f.name}: ${e.message}`);
    }
});

// Final Report Generation
let report = "# Final Data Perfection Audit Report\n\n";

if (globalErrors.length === 0) {
    report += "## ✅ STATUS: PERFECT\n\nAll checks passed.\n\n";
} else {
    report += `## ❌ STATUS: FAILED (${globalErrors.length} Errors)\n\n`;
    report += globalErrors.map(e => `- ${e}`).join("\n") + "\n\n";
}

report += "## Rarity Distribution\n\n";
for (const [file, counts] of Object.entries(rarityCounts)) {
    report += `### ${file}\n`;
    report += `| Rank | Count | Target (SSR=4, UR=2) |\n|---|---|---|\n`;
    Object.keys(counts).forEach(r => {
        report += `| ${r} | ${counts[r]} | ${r === 'UR' ? '2' : (r === 'SSR' ? '4' : '-')} |\n`;
    });
    report += "\n";
}

fs.writeFileSync('AUDIT_REPORT_FINAL.md', report, 'utf8');
console.log("Audit Complete. See AUDIT_REPORT_FINAL.md");
