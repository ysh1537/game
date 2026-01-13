const fs = require('fs');
const content = fs.readFileSync('MISSING_ASSETS_REPORT.md', 'utf8');
const lines = content.split('\n');
const missingMain = lines.filter(line => line.includes('[main]'));
console.log('Missing Main Images:');
missingMain.forEach(line => console.log(line));
