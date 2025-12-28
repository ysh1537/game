import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Project Root (assuming script is in scripts/maintenance/)
const PROJECT_ROOT = path.resolve(__dirname, '../../');
const DATA_DIR = path.join(PROJECT_ROOT, 'js/data/creatures');
const IMAGES_DIR = path.join(PROJECT_ROOT, 'images');
const REPORT_FILE = path.join(PROJECT_ROOT, 'Asset_Audit_Report.md');

// Helper to recursively find files
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

// 1. Index all actual images
console.log("Scanning images directory...");
const allImageFiles = getAllFiles(IMAGES_DIR);
const imageMap = new Map(); // filename -> full relative path from root

allImageFiles.forEach(fullPath => {
    const ext = path.extname(fullPath).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const relativePath = path.relative(PROJECT_ROOT, fullPath).replace(/\\/g, '/');
        const fileName = path.basename(fullPath);

        // Store multiple paths if same filename exists (though unlikely/bad practice)
        if (!imageMap.has(fileName)) {
            imageMap.set(fileName, []);
        }
        imageMap.get(fileName).push(relativePath);
    }
});

// 2. Parse Data Files
console.log("Scanning data files...");
const dataFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('Data.js'));

const report = {
    found_correct: [],
    found_wrong_path: [],
    missing: [],
    unused_images: []
};

// Regex to extract objects. Note: This is a simple heuristic parser.
// It assumes standard formatting: id: "..." and image: "..."
// We'll read the file line by line to track context (which creature).

dataFiles.forEach(dataFile => {
    const content = fs.readFileSync(path.join(DATA_DIR, dataFile), 'utf-8');

    // Simple state machine to grab ID and Image
    const lines = content.split('\n');
    let currentId = null;
    let currentName = "Unknown";

    lines.forEach(line => {
        // Capture ID
        const idMatch = line.match(/id:\s*["'](.+?)["']/);
        if (idMatch) currentId = idMatch[1];

        // Capture Name (optional, for report)
        const nameMatch = line.match(/name:\s*["'](.+?)["']/);
        if (nameMatch) currentName = nameMatch[1];

        // Capture Image
        const imgMatch = line.match(/image:\s*["'](.+?)["']/);
        if (imgMatch && currentId) {
            const definedPath = imgMatch[1];
            // Remove query params for file check (e.g. ?v=3)
            const cleanPath = definedPath.split('?')[0];
            const fileName = path.basename(cleanPath);

            // Check existence
            const fullCheckPath = path.join(PROJECT_ROOT, cleanPath);

            if (fs.existsSync(fullCheckPath)) {
                report.found_correct.push({
                    file: dataFile,
                    id: currentId,
                    name: currentName,
                    path: definedPath
                });
            } else {
                // Check if it exists elsewhere
                if (imageMap.has(fileName)) {
                    report.found_wrong_path.push({
                        file: dataFile,
                        id: currentId,
                        name: currentName,
                        current_path: definedPath,
                        suggested_path: imageMap.get(fileName)[0] // Take first match
                    });
                } else {
                    // Try to fuzzy match: maybe filename is different?
                    // e.g. defined: creature_god_loki.png, actual: god_loki.png
                    // Strategy: check if any image contains the ID
                    let fuzzyMatch = null;
                    for (const [key, paths] of imageMap.entries()) {
                        if (key.includes(currentId)) {
                            fuzzyMatch = paths[0];
                            break;
                        }
                    }

                    if (fuzzyMatch) {
                        report.found_wrong_path.push({
                            file: dataFile,
                            id: currentId,
                            name: currentName,
                            current_path: definedPath,
                            suggested_path: fuzzyMatch,
                            note: "Fuzzy Match by ID"
                        });
                    } else {
                        report.missing.push({
                            file: dataFile,
                            id: currentId,
                            name: currentName,
                            path: definedPath
                        });
                    }
                }
            }
            // Reset ID after finding image to prevent associating next image with same ID (if structure is weird)
            // But usually id comes before image in these files.
        }
    });
});

// Generate Markdown Report
let md = `# 📊 Asset Inventory & Audit Report\n\n`;

md += `## 🟢 Linked & Verified (${report.found_correct.length})\n`;
md += `Assets that are correctly linked and exist.\n\n`;
if (report.found_correct.length > 0) {
    md += `| Data File | ID | Name | Path |\n|---|---|---|---|\n`;
    report.found_correct.slice(0, 10).forEach(item => {
        md += `| ${item.file} | ${item.id} | ${item.name} | \`${item.path}\` |\n`;
    });
    if (report.found_correct.length > 10) md += `| ... | ... | ... | ... (${report.found_correct.length - 10} more) |\n`;
} else {
    md += `_None description._\n`;
}
md += `\n---\n\n`;

md += `## ⚠️ Path Mismatches / Renames (${report.found_wrong_path.length})\n`;
md += `> **Action Required**: The file exists but the code points to the wrong location or name.\n\n`;
md += `| Data File | ID | Name | Current Path | FOUND at (Suggested) |\n|---|---|---|---|---|\n`;
report.found_wrong_path.forEach(item => {
    md += `| ${item.file} | **${item.id}** | ${item.name} | \`${item.current_path}\` | \`${item.suggested_path}\` ${item.note ? '(' + item.note + ')' : ''} |\n`;
});
md += `\n---\n\n`;

md += `## ❌ Truly Missing Assets (${report.missing.length})\n`;
md += `> **Action Required**: These images do not exist in the images folder.\n\n`;
md += `| Data File | ID | Name | Target Path |\n|---|---|---|---|\n`;
report.missing.forEach(item => {
    md += `| ${item.file} | **${item.id}** | ${item.name} | \`${item.path}\` |\n`;
});

fs.writeFileSync(REPORT_FILE, md);
console.log(`Report generated at: ${REPORT_FILE}`);
