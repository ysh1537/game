const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../js/data/creatures/AbyssData.js');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

lines.forEach((line, index) => {
    if (line.includes('혼돈의 용희') || line.includes('dragon_chaos')) {
        console.log(`Found on line ${index + 1}: ${line.trim()}`);
    }
});
