const fs = require('fs');
const path = require('path');

const CONFIG = {
    ROOT: path.resolve(__dirname, '..'), // Project Root relative to tools/
    DIRS: {
        IMAGES: 'images',
        AUDIO: 'assets/sounds',
        JS: 'js',
        DATA: 'js/data'
    },
    REPORT_FILE: 'docs/reports/resource_audit_final.md'
};

const STATS = {
    audio: { defined: 0, missing: [], orphaned: [] },
    images: { referenced: 0, missing: [], orphaned: [] },
    codeRefs: { found: 0, missing: [] }
};

// --- Helpers ---
function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(f => {
        const fullPath = path.join(dir, f);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) walkDir(fullPath, callback);
        else callback(fullPath);
    });
}

function getRelativePath(fullPath) {
    return path.relative(CONFIG.ROOT, fullPath).replace(/\\/g, '/');
}

// --- 1. Audio Audit ---
function auditAudio() {
    console.log('[Audit] Checking Audio System...');
    const soundDataPath = path.join(CONFIG.ROOT, 'js/data/SoundData.js');
    const audioManagerPath = path.join(CONFIG.ROOT, 'js/managers/AudioManager.js');

    const definedPaths = new Set();
    const pathRegex = /["'](assets\/sounds\/[^"']+)["']/g;

    // Scan SoundData.js
    if (fs.existsSync(soundDataPath)) {
        const content = fs.readFileSync(soundDataPath, 'utf8');
        let match;
        while ((match = pathRegex.exec(content)) !== null) {
            definedPaths.add(match[1]);
        }
    }

    // Scan AudioManager.js
    if (fs.existsSync(audioManagerPath)) {
        const content = fs.readFileSync(audioManagerPath, 'utf8');
        let match;
        while ((match = pathRegex.exec(content)) !== null) {
            definedPaths.add(match[1]);
        }
    }

    STATS.audio.defined = definedPaths.size;

    // 2. Check Exists
    definedPaths.forEach(p => {
        const fullPath = path.join(CONFIG.ROOT, p);
        if (!fs.existsSync(fullPath)) {
            STATS.audio.missing.push(p);
        }
    });

    // 3. Check Orphans
    const audioDir = path.join(CONFIG.ROOT, CONFIG.DIRS.AUDIO);
    const existingAudioFiles = new Set();
    walkDir(audioDir, (f) => {
        if (f.match(/\.(mp3|wav|ogg)$/i)) {
            existingAudioFiles.add(getRelativePath(f));
        }
    });

    existingAudioFiles.forEach(f => {
        if (!definedPaths.has(f)) {
            STATS.audio.orphaned.push(f);
        }
    });
}

// --- 2. Image Audit (Creatures + UI) ---
function auditImages() {
    console.log('[Audit] Checking Image Assets...');

    const references = new Set();

    // Scan all JS files for image strings
    const jsDir = path.join(CONFIG.ROOT, CONFIG.DIRS.JS);
    walkDir(jsDir, (f) => {
        const content = fs.readFileSync(f, 'utf8');
        // Match "images/..." or 'images/...'
        const regex = /["'](images\/[^"']+\.(png|jpg|jpeg|webp))["']/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            references.add(match[1]);
        }
    });

    STATS.images.referenced = references.size;

    // Check Exists
    references.forEach(p => {
        if (p.includes('placeholder')) return; // Ignore placeholders
        const fullPath = path.join(CONFIG.ROOT, p);
        if (!fs.existsSync(fullPath)) {
            STATS.images.missing.push(p);
        }
    });

    // Check Orphans in images/
    const imgDir = path.join(CONFIG.ROOT, CONFIG.DIRS.IMAGES);
    const existingFiles = new Set();
    walkDir(imgDir, (f) => {
        if (f.match(/\.(png|jpg|jpeg|webp)$/i) && !f.includes('_quarantine')) {
            existingFiles.add(getRelativePath(f));
        }
    });

    existingFiles.forEach(f => {
        if (!references.has(f)) {
            STATS.images.orphaned.push(f);
        }
    });
}


// --- Report Generation ---
function generateReport() {
    let md = `# System-wide Resource Audit Report\n`;
    md += `**Date**: ${new Date().toLocaleString()}\n\n`;

    // Audio Section
    md += `## 🎵 Audio Assets\n`;
    md += `- **Defined in Data**: ${STATS.audio.defined}\n`;
    md += `- **Missing**: ${STATS.audio.missing.length}\n`;
    md += `- **Orphaned (Unused)**: ${STATS.audio.orphaned.length}\n\n`;

    if (STATS.audio.missing.length > 0) {
        md += `### ❌ Missing Audio\n`;
        STATS.audio.missing.forEach(f => md += `- \`${f}\`\n`);
        md += `\n`;
    }

    if (STATS.audio.orphaned.length > 0) {
        md += `### 🗑️ Orphaned Audio (Candidates for cleanup)\n`;
        STATS.audio.orphaned.forEach(f => md += `- \`${f}\`\n`);
        md += `\n`;
    }

    // Image Section
    md += `## 🖼️ Image Assets\n`;
    md += `- **Referenced in Code**: ${STATS.images.referenced}\n`;
    md += `- **Missing**: ${STATS.images.missing.length}\n`;
    md += `- **Orphaned (Not directly referenced)**: ${STATS.images.orphaned.length}\n`;
    md += `> Note: Orphan checks might be false positives if paths are constructed dynamically (e.g. 'creature_' + id + '.png').\n\n`;

    if (STATS.images.missing.length > 0) {
        md += `### ❌ Missing Images (Broken Links)\n`;
        STATS.images.missing.slice(0, 50).forEach(f => md += `- \`${f}\`\n`);
        if (STATS.images.missing.length > 50) md += `- ... (${STATS.images.missing.length - 50} more)\n`;
        md += `\n`;
    }

    if (STATS.images.orphaned.length > 0) {
        md += `### ⚠️ Potentially Orphaned Images\n`;
        md += `<details><summary>Click to view ${STATS.images.orphaned.length} files</summary>\n\n`;
        STATS.images.orphaned.forEach(f => md += `- \`${f}\`\n`);
        md += `\n</details>\n`;
    }

    const reportPath = path.join(CONFIG.ROOT, CONFIG.REPORT_FILE);
    // Ensure dir exists
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, md, 'utf8');
    console.log(`Report generated at: ${reportPath}`);
}

// Run
auditAudio();
auditImages();
generateReport();
