
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dataDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../js/data/creatures');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('Data.js'));

console.log(`🔍 Scanning ${files.length} data files...`);

const allCreatures = new Map(); // id -> { source, relationships: [], synergy: [] }
const errors = [];

// Step 1: Broad Pass to collect all IDs and their raw content blocks
files.forEach(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
    const lines = content.split('\n');
    let currentId = null;

    lines.forEach((line, index) => {
        // Only capture top-level IDs. 
        // Heuristic: attributes in main object are usually just indented (e.g., "        id: '...'"), 
        // whereas relationships are often inside { id: ... } or indented further in similar blocks.
        // We exclude lines that have '{' before 'id:' or inside relationship arrays.

        // Regex to capture "id: '...'"
        const idMatch = line.match(/^\s+id:\s*["']([^"']+)["']/);

        // Check if this line looks like a relationship object definition e.g. "{ id: 'foo', type: 'bar' }"
        const isRelationship = line.trim().startsWith('{') || line.includes('type:') || line.includes('desc:');

        if (idMatch && !isRelationship) {
            currentId = idMatch[1];
            if (allCreatures.has(currentId)) {
                // If it's the exact same file, it might just be me mis-parsing loops? No, we scan linearly.
                // It means duplicate key in the array.
                errors.push(`❌ DUPLICATE ID FOUND: '${currentId}' in ${file} (Already found in ${allCreatures.get(currentId).source})`);
            } else {
                allCreatures.set(currentId, {
                    source: file,
                    relationships: [],
                    synergy: [],
                    line: index + 1
                });
            }
        }

        if (currentId) {
            // Check for relationships
            // relationships: [{ id: "foo", ... }]
            // Regex to capture id inside curly braces
            const relMatch = line.match(/{.*id:\s*["']([^"']+)["'].*}/);

            // We want to capture reference IDs, but NOT if it's the definition line itself (though my logic separates them)
            // But we must be careful not to capture definition "id:" if regex fails discrimination

            if (relMatch) {
                // This is a reference inside an object
                allCreatures.get(currentId).relationships.push(relMatch[1]);
            }

            // Check for synergy
            // synergy: { ally: ["foo", "bar"], ... }
            // Matches "something": ["a", "b"]
            if (line.includes('ally:') || line.includes('rival:') || line.includes('master:') || line.includes('family:')) {
                const refMatches = line.matchAll(/["']([^"']+)["']/g);
                for (const m of refMatches) {
                    // Filter out keys
                    if (!['ally', 'rival', 'master', 'family', 'pet', 'friend', 'idol', 'home', 'desc', 'type', 'id'].includes(m[1])) {
                        // Filter out the current ID itself if referenced? No, self-ref is possible?
                        // Filter out "normal", "touch_head" etc if line is misinterpreted?
                        // Assuming synergy lines are relatively clean arrays
                        allCreatures.get(currentId).synergy.push(m[1]);
                    }
                }
            }
        }
    });
});

console.log(`✅ Loaded ${allCreatures.size} creatures.`);

// Step 2: Verify Links
console.log(`🔍 Verifying links...`);

allCreatures.forEach((data, id) => {
    // Verify Relationships
    data.relationships.forEach(targetId => {
        if (!allCreatures.has(targetId)) {
            // Optional: Filter out known non-creature IDs if any?
            errors.push(`⚠️  BROKEN RELATIONSHIP: '${id}' (${data.source}) references missing ID '${targetId}'`);
        }
    });

    // Verify Synergy
    data.synergy.forEach(targetId => {
        if (!allCreatures.has(targetId)) {
            errors.push(`⚠️  BROKEN SYNERGY: '${id}' (${data.source}) references missing ID '${targetId}'`);
        }
    });
});

// Step 3: Report
let report = "";
if (errors.length > 0) {
    report += `\n🚨 FOUND ${errors.length} ISSUES:\n`;
    const uniqueErrors = [...new Set(errors)]; // Dedupe
    uniqueErrors.forEach(e => report += e + "\n");
    report += `\nPLEASE FIX THESE ISSUES TO PREVENT RUNTIME ERRORS.\n`;
} else {
    report += `\n✨ All data integrity checks passed! All links are valid.\n`;
}

console.log(report);
fs.writeFileSync('verify_report.txt', report);
