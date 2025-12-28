import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '../../');
const DATA_DIR = path.join(PROJECT_ROOT, 'js/data/creatures');
const IMAGES_DIR = path.join(PROJECT_ROOT, 'images');

// 1. Index Images
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    arrayOfFiles = arrayOfFiles || [];
    files.forEach((file) => {
        if (fs.statSync(dirPath + "/" + file.name).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file.name, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file.name));
        }
    });
    return arrayOfFiles;
}

const allImageFiles = getAllFiles(IMAGES_DIR);
const imageMap = new Map();

allImageFiles.forEach(fullPath => {
    const ext = path.extname(fullPath).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const relativePath = path.relative(PROJECT_ROOT, fullPath).replace(/\\/g, '/');
        const fileName = path.basename(fullPath);
        if (!imageMap.has(fileName)) imageMap.set(fileName, []);
        imageMap.get(fileName).push(relativePath);
    }
});

// 2. Fix Data Files
const dataFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('Data.js'));
let totalFixed = 0;

dataFiles.forEach(dataFile => {
    const filePath = path.join(DATA_DIR, dataFile);
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;
    let fileFixedCount = 0;

    // We process the file line by line to ensure we match the right context if needed,
    // but simple replace is risky if names are duplicates.
    // However, the `image: "path"` string is unique enough for this batch fix.

    // Better approach: regex replace with callback
    // Match `image: "OLD_PATH"`

    content = content.replace(/image:\s*["'](.+?)["']/g, (match, oldPath) => {
        const cleanOldPath = oldPath.split('?')[0];
        const oldFileName = path.basename(cleanOldPath);

        // 1. Check if file exists at old path
        if (fs.existsSync(path.join(PROJECT_ROOT, cleanOldPath))) {
            return match; // It's correct, don't change
        }

        // 2. Check exact filename match elsewhere
        if (imageMap.has(oldFileName)) {
            const newPath = imageMap.get(oldFileName)[0];
            fileFixedCount++;
            return `image: "${newPath}"`; // Preserve query params? usually not needed for local files unless cache busting
        }

        // 3. Fuzzy ID match (e.g. creature_god_loki.png vs god_loki.png)
        // We need the ID from context... regex replace doesn't give context easily.
        // But we can check if `oldFileName` contains `creature_` and try removing it?

        // Try removing 'creature_' prefix
        const noPrefixName = oldFileName.replace('creature_', '');
        if (imageMap.has(noPrefixName)) {
            const newPath = imageMap.get(noPrefixName)[0];
            fileFixedCount++;
            return `image: "${newPath}"`;
        }

        // Try adding 'creature_' prefix
        const prefixName = 'creature_' + oldFileName;
        if (imageMap.has(prefixName)) {
            const newPath = imageMap.get(prefixName)[0];
            fileFixedCount++;
            return `image: "${newPath}"`;
        }

        return match; // No fix found
    });

    if (fileFixedCount > 0) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ Fixed ${fileFixedCount} paths in ${dataFile}`);
        totalFixed += fileFixedCount;
    }
});

console.log(`\n🎉 Total Linked Assets Repaired: ${totalFixed}`);
