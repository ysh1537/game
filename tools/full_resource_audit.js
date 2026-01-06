
const fs = require('fs');
const path = require('path');

// Configuration
const ROOT_DIR = path.resolve(__dirname, '..');
const JS_DIR = path.join(ROOT_DIR, 'js');
const IMAGES_DIR = path.join(ROOT_DIR, 'images');
const REPORT_FILE = path.join(ROOT_DIR, 'docs', 'missing_assets_report_full.md');

// Extensions to look for in code
const IMG_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif'];

// 1. Gather all actual image files
function getAllFiles(dirPath, arrayOfFiles = []) {
    try {
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
            const nextPath = path.join(dirPath, file);
            if (fs.statSync(nextPath).isDirectory()) {
                getAllFiles(nextPath, arrayOfFiles);
            } else {
                arrayOfFiles.push(nextPath);
            }
        });
    } catch (e) {
        // console.warn("Skipping dir", dirPath); // Quiet
    }
    return arrayOfFiles;
}

const allActualImages = getAllFiles(IMAGES_DIR);
const actualImageBasenames = new Map(); // basename -> full path (lowercase key for case-insensitive check)

allActualImages.forEach(p => {
    actualImageBasenames.set(path.basename(p).toLowerCase(), p);
});

console.log(`[FILESYSTEM] Found ${allActualImages.length} physical image files.`);

// 2. Scan Codebase for references
let missingAssets = new Set();
let foundAssets = new Set();
let scannedFiles = 0;

function scanCodeFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    // Strategy A: Regex for strings ending in extension
    // Matches "something.png", 'folder/file.jpg', `assets/img.svg`
    // Be careful with false positives, but for an audit better safe than sorry.
    const stringRegex = /['"`]([^'"`\n]+?\.(png|jpg|jpeg|svg|webp|gif))['"`]/gi;

    let match;
    while ((match = stringRegex.exec(content)) !== null) {
        let detectedPath = match[1];

        // Cleanup: sometimes we get query params or weird prefixes?
        detectedPath = detectedPath.split('?')[0];

        // We only care about the filename (basename) because folders change often
        // heuristic: if we have the file ANYWHERE in images/, count it as found.
        const basename = path.basename(detectedPath).toLowerCase();

        if (actualImageBasenames.has(basename)) {
            foundAssets.add(detectedPath);
        } else {
            // Ignore common web/external urls if any
            if (detectedPath.startsWith('http')) continue;

            missingAssets.add(detectedPath);
        }
    }
}

function scanDirRecursive(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of entries) {
        const fullPath = path.join(dir, ent.name);
        if (ent.isDirectory()) {
            scanDirRecursive(fullPath);
        } else if (ent.isFile() && ent.name.endsWith('.js')) {
            scanCodeFile(fullPath);
            scannedFiles++;
        }
    }
}

console.log(`[SCAN] Scanning JS files in ${JS_DIR}...`);
scanDirRecursive(JS_DIR);

console.log(`[SCAN] Scanned ${scannedFiles} JS files.`);
console.log(`[RESULT] Found ${foundAssets.size} valid references.`);
console.log(`[RESULT] Found ${missingAssets.size} potentially missing references.`);

// 3. Generate Report
const missingArray = Array.from(missingAssets).sort();

let reportContent = `# 🔍 Comprehensive Resource Audit Report

**Date**: ${new Date().toLocaleString()}
**Scanned Directory**: ${JS_DIR}
**Images Directory**: ${IMAGES_DIR}

## 📊 Summary
- **Total Physical Images**: ${allActualImages.length}
- **Code References Validated**: ${foundAssets.size}
- **Potentially Missing Assets**: ${missingAssets.size}

## ❌ Missing Assets (Referenced in Code but Not Found)

> Note: This is a raw scan. Some might be false positives (dynamic strings) or intended to be missing.

| Asset Reference | Possible Location |
| :--- | :--- |
`;

missingArray.forEach(ref => {
    reportContent += `| \`${ref}\` | ? |\n`;
});

// Also check specifically for Creature Data mismatches (Logic from V2)
// This is more precise because we know exactly what key to look for.
reportContent += `\n## 🧬 Creature Data Specific Audit\n\n`;

const creatureDataDir = path.join(JS_DIR, 'data/creatures');
let creatureMissingCount = 0;

if (fs.existsSync(creatureDataDir)) {
    const files = fs.readdirSync(creatureDataDir).filter(f => f.endsWith('.js'));
    reportContent += `| Creature ID | Referenced Image | Status |\n| :--- | :--- | :--- |\n`;

    files.forEach(file => {
        const content = fs.readFileSync(path.join(creatureDataDir, file), 'utf8');
        const regex = /id:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const id = match[1];
            const imgPath = match[2];
            const basename = path.basename(imgPath).toLowerCase();

            if (!actualImageBasenames.has(basename)) {
                reportContent += `| **${id}** | \`${imgPath}\` | ❌ MISSING |\n`;
                creatureMissingCount++;
            }
            // Else: Validated by the general scan
        }
    });
}

if (creatureMissingCount === 0) {
    reportContent += `\n**✅ All defined creatures have matching images!**\n`;
}

fs.writeFileSync(REPORT_FILE, reportContent);
console.log(`[OUTPUT] Report written to ${REPORT_FILE}`);
