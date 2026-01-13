const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '../');
const sourceDirs = ['js', 'css', 'index.html'];

console.log("=== CODEBASE GAP ANALYSIS ===");

// 1. Find TODOs and FIXMEs
console.log("\n[TODOs & FIXMEs]");
try {
    const todos = execSync('grep -r "TODO" js css index.html || true', { cwd: rootDir }).toString();
    const fixmes = execSync('grep -r "FIXME" js css index.html || true', { cwd: rootDir }).toString();

    if (todos) console.log(todos);
    else console.log("No TODOs found.");

    if (fixmes) console.log(fixmes);
    else console.log("No FIXMEs found.");
} catch (e) {
    console.log("Grep failed or unavailable (Windows?). Using generic scan.");
    // Fallback? Node.js recursive scan.
}

// 2. Check for empty files or suspiciously small files
console.log("\n[Suspiciously Small Files (<50 bytes)]");
function scanDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(f => {
        const fp = path.join(dir, f);
        const stat = fs.statSync(fp);
        if (stat.isDirectory() && f !== 'node_modules' && f !== '.git') {
            scanDir(fp);
        } else if (stat.isFile()) {
            if (stat.size < 50 && !f.endsWith('.meta')) {
                console.log(`${path.relative(rootDir, fp)} (${stat.size} bytes)`);
            }
        }
    });
}
scanDir(path.join(rootDir, 'js'));

// 3. Check for specific Core Managers
const REQUIRED_MANAGERS = [
    'SaveManager.js', 'SoundManager.js', 'SettingsManager.js',
    'BattleManager.js', 'SummonManager.js', 'EncyclopediaManager.js' // "Dictionary"
];

console.log("\n[Core Manager Check]");
REQUIRED_MANAGERS.forEach(mgr => {
    // Try to find it in js/managers or js/core
    const inManagers = fs.existsSync(path.join(rootDir, 'js/managers', mgr));
    const inCore = fs.existsSync(path.join(rootDir, 'js/core', mgr));

    if (!inManagers && !inCore) {
        console.log(`MISSING: ${mgr}`);
    } else {
        // Check if file is non-empty
        const p = inManagers ? path.join(rootDir, 'js/managers', mgr) : path.join(rootDir, 'js/core', mgr);
        const content = fs.readFileSync(p, 'utf8');
        if (content.length < 200) console.log(`WARNING: ${mgr} seems very short.`);
    }
});

console.log("=== ANALYSIS COMPLETE ===");
