const fs = require('fs');
const path = require('path');

const DATA_DIR = path.resolve('d:/test/multiverse-creature-lab/js/data/creatures');
const PROJECT_ROOT = path.resolve('d:/test/multiverse-creature-lab');
const PLACEHOLDER_SIZE = 241475; // Bytes

const dataFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('Data.js'));
const allIssues = [];

dataFiles.forEach(file => {
    const filePath = path.join(DATA_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Regex to capture image: "path"
    const regex = /image:\s*["']([^"']+)["']/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
        let relPath = match[1];
        if (relPath.includes('?')) relPath = relPath.split('?')[0];

        const absPath = path.join(PROJECT_ROOT, relPath);

        let status = 'OK';
        try {
            if (!fs.existsSync(absPath)) {
                status = 'MISSING';
            } else {
                const stats = fs.statSync(absPath);
                if (stats.size === PLACEHOLDER_SIZE) {
                    status = 'PLACEHOLDER';
                }
            }
        } catch (e) { status = 'ERROR'; }

        if (status !== 'OK') {
            allIssues.push({ file: file, image: relPath, status: status });
        }
    }
});

// Calculate unique missing images count
const uniqueImages = [...new Set(allIssues.map(i => i.image))];
console.log(`TOTAL_ISSUES:${allIssues.length}`);
console.log(`UNIQUE_MISSING:${uniqueImages.length}`);
console.log(`TOTAL_ISSUES:${allIssues.length}`);
console.log(`UNIQUE_MISSING:${uniqueImages.length}`);
fs.writeFileSync(path.resolve(PROJECT_ROOT, 'missing_assets_final.json'), JSON.stringify(allIssues, null, 2));
console.log("Written to missing_assets_final.json");
