const fs = require('fs');
const path = require('path');

const projectRoot = 'D:\\test\\game';
const dataDir = path.join(projectRoot, 'js', 'data', 'creatures');
const inventoryFile = path.join(projectRoot, 'docs', 'creature_asset_inventory.md');

// 1. Read JS Data Files
const worldFiles = ['OlympusData.js', 'AsgardData.js', 'AbyssData.js', 'ShangriLaData.js', 'WildData.js'];
const jsIds = new Set();
const jsCreatures = [];

console.log('--- Reading JS Data Files ---');
worldFiles.forEach(file => {
    try {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
        // Simple regex to find "id: 'some_id'" or 'id: "some_id"'
        // This is a naive parse but sufficient for auditing static data files
        const regex = /id:\s*['"]([^'"]+)['"]/g;
        let match;
        let count = 0;
        while ((match = regex.exec(content)) !== null) {
            jsIds.add(match[1]);
            jsCreatures.push(match[1]);
            count++;
        }
        console.log(`${file}: ${count} creatures found.`);
    } catch (e) {
        console.error(`Error reading ${file}:`, e.message);
    }
});
console.log(`Total JS Creatures: ${jsIds.size} (Unique), ${jsCreatures.length} (Total)`);

// 2. Read Inventory Markdown
console.log('\n--- Reading Inventory Markdown ---');
const mdIds = new Set();
try {
    const content = fs.readFileSync(inventoryFile, 'utf8');
    // Regex to find `some_id` in backticks
    const regex = /`([^`\n]+)`/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        // Filter out obviously non-ID things if any (e.g., file paths, generic terms)
        // Usually IDs are snake_case or alphanumeric.
        const id = match[1];
        if (!id.includes('/') && !id.includes('.png') && !id.includes('.jpg') && !id.includes('.js')) {
            mdIds.add(id);
        }
    }
    console.log(`Total Inventory IDs found: ${mdIds.size}`);
} catch (e) {
    console.error(`Error reading inventory file:`, e.message);
}

// 3. Compare
const missingInJs = [...mdIds].filter(id => !jsIds.has(id));
const missingInMd = [...jsIds].filter(id => !mdIds.has(id));

let output = `=== Audit Result ===\n`;
output += `JS Creatures: ${jsIds.size}\n`;
output += `Docs Creatures: ${mdIds.size}\n\n`;

output += `MISSING IN JS (${missingInJs.length}):\n`;
missingInJs.forEach(id => output += ` - ${id}\n`);

output += `\nMISSING IN MD (${missingInMd.length}):\n`;
missingInMd.forEach(id => output += ` - ${id}\n`);

fs.writeFileSync(path.join(projectRoot, 'audit_result.txt'), output, 'utf8');
console.log('Audit saved to audit_result.txt');
