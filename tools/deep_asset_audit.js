const fs = require('fs');
const path = require('path');

// Configuration
const PROJECT_ROOT = path.join(__dirname, '../');
const DATA_DIR = path.join(PROJECT_ROOT, 'js/data/creatures');
const IMAGE_DIR = path.join(PROJECT_ROOT, 'images/creatures');
const WORLDS = ['Asgard', 'Olympus', 'Abyss', 'ShangriLa', 'Wild'];
const REPORT_PATH = path.join(PROJECT_ROOT, 'Asset_Audit_Report.md');

// State
const dataReferences = new Set();
const actualFiles = new Set();
const details = {
    missing: [],
    orphaned: [],
    mismatches: []
};
const creatureMap = new Map(); // Store creature details for reporting

// --- Step 1: Scan Data Files ---
console.log('--- Step 1: Scanning Data Files ---');

WORLDS.forEach(world => {
    const filePath = path.join(DATA_DIR, `${world}Data.js`);
    if (!fs.existsSync(filePath)) {
        console.warn(`Warning: Data file not found for ${world}: ${filePath}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Regex to find image paths in string literals
    // Matches "images/creatures/..." or 'images/creatures/...'
    const regex = /["'](images\/creatures\/[^"']+)["']/g;
    let match;

    // Also try to extract creature IDs and Names for context
    // This is a rough extraction, proper parsing would be better but simple regex works for this audit
    const creatureBlockRegex = /{[\s\S]*?id:\s*["']([^"']+)["'][\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?prompts:/g;
    let blockMatch;
    while ((blockMatch = creatureBlockRegex.exec(content)) !== null) {
        creatureMap.set(blockMatch[1], { name: blockMatch[2], world: world });
    }

    while ((match = regex.exec(content)) !== null) {
        let relativePath = match[1];
        dataReferences.add(relativePath);

        // Check for specific naming convention issues (Heuristic)
        const fileName = path.basename(relativePath);
        if (fileName.includes('god_') || fileName.includes('creature_god_')) {
            details.mismatches.push({
                type: 'Legacy Prefix (god_)',
                path: relativePath,
                world: world
            });
        }
    }
    console.log(`Scanned ${world}Data.js`);
});

// --- Step 2: Scan File System ---
console.log('\n--- Step 2: Scanning File System ---');

function walkDir(dir, rootDir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            walkDir(fullPath, rootDir);
        } else {
            // Convert to relative path matching the data strings (forward slashes)
            let relPath = path.relative(rootDir, fullPath).replace(/\\/g, '/');
            actualFiles.add(relPath);
        }
    });
}

if (fs.existsSync(IMAGE_DIR)) {
    walkDir(IMAGE_DIR, PROJECT_ROOT);
    console.log(`Scanned images/creatures/`);
} else {
    console.error('CRITICAL: images/creatures folder not found!');
}

// --- Step 3: Compare ---
console.log('\n--- Step 3: Comparing references vs files ---');

// Check Missing
dataReferences.forEach(ref => {
    if (!actualFiles.has(ref)) {
        // Try to identify which creature this belongs to
        let context = 'Unknown';
        for (const [id, info] of creatureMap.entries()) {
            if (ref.includes(id)) {
                context = `${info.world} : ${info.name} (${id})`;
                break;
            }
        }

        details.missing.push({
            path: ref,
            context: context
        });
    }
});

// Check Orphans (Files extending known naming patterns but not in code, or trash)
actualFiles.forEach(file => {
    // Only care about png/jpg/webp
    if (!file.match(/\.(png|jpg|jpeg|webp)$/i)) return;

    if (!dataReferences.has(file)) {
        details.orphaned.push(file);
    }
});


// --- Step 4: Generate Report ---
console.log('\n--- Step 4: Generating Report ---');

const Stats = {
    totalRefs: dataReferences.size,
    totalFiles: actualFiles.size,
    missing: details.missing.length,
    orphaned: details.orphaned.length,
    legacyNaming: details.mismatches.length
};

let report = `# 🕵️‍♂️ Full Asset & Creature Audit Report\n\n`;
report += `**Date**: ${new Date().toISOString()}\n`;
report += `**Scope**: All *Data.js vs images/creatures/*\n\n`;

report += `## 📊 Executive Summary\n`;
report += `| Metric | Count | Status |\n`;
report += `| :--- | :---: | :--- |\n`;
report += `| Total Code References | **${Stats.totalRefs}** | -\n`;
report += `| Actual Files Found | **${Stats.totalFiles}** | -\n`;
report += `| ❌ **Missing Assets** | **${Stats.missing}** | Requires Generation\n`;
report += `| 🗑️ **Orphaned Files** | **${Stats.orphaned}** | Candidates for Deletion/Cleanup\n`;
report += `| ⚠️ **Naming Violations** | **${Stats.legacyNaming}** | "god_" prefix detected in code\n`;

report += `\n## 🚨 Critical: Missing Assets (Code references file, but file nonexistent)\n`;
if (Stats.missing === 0) report += `> ✅ No missing assets found.\n`;
else {
    // Group by World if possible
    report += `> These files are requested by the code but do NOT exist on disk.\n\n`;
    details.missing.slice(0, 50).forEach(m => {
        report += `- **[${m.context}]** \`${m.path}\`\n`;
    });
    if (details.missing.length > 50) report += `... and ${details.missing.length - 50} more.\n`;
}

report += `\n## ⚠️ Legacy Naming Violations (Code uses 'god_' prefix)\n`;
if (Stats.legacyNaming === 0) report += `> ✅ No legacy nomenclature found.\n`;
else {
    report += `> The following paths in *Data.js still use the prohibited 'god_' prefix.\n\n`;
    details.mismatches.slice(0, 50).forEach(m => {
        report += `- **${m.world}**: \`${m.path}\`\n`;
    });
    if (details.mismatches.length > 50) report += `... and ${details.mismatches.length - 50} more.\n`;
}

report += `\n## 🗑️ Orphaned Files (Files exist but NOT used in code)\n`;
// Filter orphans to see if they are just renamed versions
report += `> These files exist in the folder but are NOT referenced by any Data file. Potential garbage or renamed leftovers.\n\n`;

// Simple grouping
const orphansByDir = {};
details.orphaned.forEach(f => {
    const dir = path.dirname(f);
    if (!orphansByDir[dir]) orphansByDir[dir] = [];
    orphansByDir[dir].push(path.basename(f));
});

Object.entries(orphansByDir).forEach(([dir, files]) => {
    report += `### 📂 ${dir}\n`;
    files.slice(0, 20).forEach(f => report += `- \`${f}\`\n`);
    if (files.length > 20) report += `- ... (${files.length - 20} more)\n`;
    report += `\n`;
});

fs.writeFileSync(REPORT_PATH, report, 'utf8');
console.log(`Report saved to: ${REPORT_PATH}`);
