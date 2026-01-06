const fs = require('fs');
const path = require('path');

// Get all actual image files
const imagesDir = path.join(__dirname, '../images/creatures/asgard');
const actualFiles = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png'));

console.log(`📁 Found ${actualFiles.length} actual files in asgard folder:\n`);
actualFiles.sort().forEach(f => console.log(`  ✓ ${f}`));

// Load Asgard data
const asgardDataPath = path.join(__dirname, '../js/data/creatures/AsgardData.js');
const content = fs.readFileSync(asgardDataPath, 'utf8');

// Extract expected main images
const imageRegex = /image:\s*"images\/creatures\/asgard\/([^"]+)"/g;
let expectedImages = new Set();
let match;

while ((match = imageRegex.exec(content)) !== null) {
    expectedImages.add(match[1]);
}

console.log(`\n📋 Expected ${expectedImages.size} main images from AsgardData.js:\n`);
Array.from(expectedImages).sort().forEach(img => {
    const exists = actualFiles.includes(img);
    console.log(`  ${exists ? '✅' : '❌'} ${img}`);
});

// Find truly missing
const missing = Array.from(expectedImages).filter(img => !actualFiles.includes(img));
const extra = actualFiles.filter(f => !expectedImages.has(f));

console.log(`\n🚨 MISSING (${missing.length}):`);
missing.forEach(m => console.log(`  ❌ ${m}`));

console.log(`\n📦 EXTRA FILES (${extra.length}):`);
extra.forEach(e => console.log(`  ➕ ${e}`));
