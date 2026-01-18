const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'js', 'data', 'creatures');
const files = ['OlympusData.js', 'AsgardData.js', 'ShangriLaData.js', 'AbyssData.js', 'WildData.js'];

const allIds = new Map();
let duplicateCount = 0;
let totalCreatures = 0;

let output = 'Starting Creature Data Verification...\n';

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    if (!fs.existsSync(filePath)) {
        output += `Warning: File not found: ${file}\n`;
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Regex to capture creature objects definitions only.
    // Assumes formatting: 
    // {
    //     id: "value",
    // }
    // Ignores { id: "value" } inline objects.
    const idRegex = /(?:^|\n)\s+id:\s*["']([^"']+)["']/g;

    let match;
    let fileCreatureCount = 0;
    while ((match = idRegex.exec(content)) !== null) {
        const id = match[1];
        fileCreatureCount++;

        if (allIds.has(id)) {
            // Check if it's the same file (could be duplicate definition in same file)
            if (allIds.get(id) === file) {
                output += `[ERROR] Duplicate ID in same file: '${id}' in ${file}\n`;
            } else {
                output += `[ERROR] Duplicate ID found: '${id}'\n`;
                output += `  - Defined in: ${allIds.get(id)}\n`;
                output += `  - Redefined in: ${file}\n`;
            }
            duplicateCount++;
        } else {
            allIds.set(id, file);
        }
    }
    output += `checked ${file}: ${fileCreatureCount} creatures\n`;
});

output += '------------------------------------------------\n';
output += `Total unique creatures identified: ${allIds.size}\n`;
output += `Total duplicates found: ${duplicateCount}\n`;

if (duplicateCount === 0) {
    output += '✅ Data integrity check passed (No duplicates).\n';
} else {
    output += '❌ Data integrity check failed.\n';
}

fs.writeFileSync('verification_result.txt', output);
console.log('Verification complete. Check verification_result.txt');
