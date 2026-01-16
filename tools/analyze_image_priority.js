const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CONFIG = {
    ROOT: path.resolve(__dirname, '..'),
    DATA_DIR: path.resolve(__dirname, '../js/data/creatures'),
    AUDIT_REPORT: path.resolve(__dirname, '../docs/reports/resource_audit_final.md'), // Optional reading
    OUTPUT_FILE: path.resolve(__dirname, '../docs/reports/image_priority_list.md')
};

// Mock Context for loading Data files
const RANKS = { NORMAL: "Normal", UNIQUE: "Unique", RARE: "Rare", SPECIAL: "Special", SR: "SR", SSR: "SSR", UR: "UR" };
const WORLDS = { OLYMPUS: "OLYMPUS", ASGARD: "ASGARD", SHANGRILA: "SHANGRILA", ABYSS: "ABYSS", WILD: "WILD" };

// Priorities
const P1_CRITICAL = []; // UR, SSR (Joy, Sad, Angry, Skill)
const P2_HIGH = [];     // SR, Special (Joy, Sad, Angry, Skill)
const P3_MEDIUM = [];   // Others (Joy, Sad, Angry, Skill)
const P4_LOW = [];      // Victory, Defeat, Gallery (All Ranks)

function getPriority(rarity, assetType) {
    const isHighRank = ['UR', 'SSR'].includes(rarity);
    const isMidRank = ['SR', 'Special'].includes(rarity);
    const isCoreEmotion = ['joy', 'sad', 'angry', 'skill'].some(k => assetType.includes(k));
    const isGalleryOrResult = ['gallery', 'victory', 'defeat'].some(k => assetType.includes(k));

    if (isGalleryOrResult) return 4;
    if (isHighRank && isCoreEmotion) return 1;
    if (isMidRank && isCoreEmotion) return 2;
    return 3;
}

function scanAndPrioritize() {
    console.log('[Priority] Scanning Data files...');

    if (!fs.existsSync(CONFIG.DATA_DIR)) {
        console.error('Data dir missing!');
        return;
    }

    const files = fs.readdirSync(CONFIG.DATA_DIR).filter(f => f.endsWith('Data.js'));
    let totalMissing = 0;

    files.forEach(file => {
        const filePath = path.join(CONFIG.DATA_DIR, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Remove imports/exports for VM
        content = content.replace(/import .* from .*;/g, '').replace(/export const/g, 'var');

        const sandbox = { RANKS, WORLDS, console };
        vm.createContext(sandbox);

        try {
            vm.runInContext(content, sandbox);
            // Guess var name (e.g. AsgardData.js -> ASGARD_CREATURES)
            const worldName = file.replace('Data.js', '').toUpperCase();
            const varName = `${worldName}_CREATURES`;
            const data = sandbox[varName];

            if (!data) {
                console.warn(`Could not find variable ${varName} in ${file}`);
                return;
            }

            data.forEach(c => {
                if (!c.sprites) return;

                // Recursive function to check sprites
                function checkSprites(obj, contextKey) {
                    Object.entries(obj).forEach(([key, val]) => {
                        if (!val) return;

                        // Handle nested objects (like gallery)
                        if (typeof val === 'object') {
                            checkSprites(val, key);
                            return;
                        }

                        if (typeof val !== 'string') return;
                        if (val.includes('placeholder')) return;

                        const fullPath = path.join(CONFIG.ROOT, val);
                        if (!fs.existsSync(fullPath)) {
                            totalMissing++;
                            // Use contextKey if available (e.g., 'gallery') for priority logic
                            const assetKey = contextKey ? `${contextKey}_${key}` : key;

                            const priority = getPriority(c.rarity || 'Normal', assetKey);
                            const item = {
                                priority,
                                rank: c.rarity || 'Normal',
                                world: worldName,
                                name: c.name,
                                id: c.id,
                                key: assetKey,
                                path: val
                            };

                            if (priority === 1) P1_CRITICAL.push(item);
                            else if (priority === 2) P2_HIGH.push(item);
                            else if (priority === 3) P3_MEDIUM.push(item);
                            else P4_LOW.push(item);
                        }
                    });
                }

                checkSprites(c.sprites, '');
            });

        } catch (e) {
            console.error(`Error parsing ${file}: ${e.message}`);
        }
    });

    console.log(`[Priority] Analysis Complete. Total Missing: ${totalMissing}`);
    generateReport(totalMissing);
}

function generateReport(total) {
    let md = `# Image Generation Priority Report\n`;
    md += `**Date**: ${new Date().toLocaleString()}\n`;
    md += `**Total Missing**: ${total}\n\n`;

    md += `## 🚨 Priority 1: Critical (UR/SSR Core Emotions) - ${P1_CRITICAL.length} EA\n`;
    md += `> Must be generated immediately to ensure quality for high-value creatures.\n\n`;
    md += `| World | Rank | Name | Emotion | Path |\n|---|---|---|---|---|\n`;
    P1_CRITICAL.forEach(i => md += `| ${i.world} | **${i.rank}** | ${i.name} | ${i.key} | \`${i.path}\` |\n`);

    md += `\n## 🔥 Priority 2: High (SR/Special Core Emotions) - ${P2_HIGH.length} EA\n`;
    md += `> Second wave generation for mid-core content.\n\n`;
    md += `| World | Rank | Name | Emotion | Path |\n|---|---|---|---|---|\n`;
    P2_HIGH.forEach(i => md += `| ${i.world} | ${i.rank} | ${i.name} | ${i.key} | \`${i.path}\` |\n`);

    md += `\n## ☁️ Priority 3: Medium (General Core Emotions) - ${P3_MEDIUM.length} EA\n`;
    md += `<details><summary>Click to view list</summary>\n\n`;
    md += `| World | Rank | Name | Emotion | Path |\n|---|---|---|---|---|\n`;
    P3_MEDIUM.forEach(i => md += `| ${i.world} | ${i.rank} | ${i.name} | ${i.key} | \`${i.path}\` |\n`);
    md += `\n</details>\n`;

    md += `\n## 💤 Priority 4: Low (Gallery/Victory/Defeat) - ${P4_LOW.length} EA\n`;
    md += `<details><summary>Click to view list</summary>\n\n`;
    md += `| World | Rank | Name | Emotion | Path |\n|---|---|---|---|---|\n`;
    P4_LOW.forEach(i => md += `| ${i.world} | ${i.rank} | ${i.name} | ${i.key} | \`${i.path}\` |\n`);
    md += `\n</details>\n`;

    fs.mkdirSync(path.dirname(CONFIG.OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(CONFIG.OUTPUT_FILE, md, 'utf8');
    console.log(`Report saved to: ${CONFIG.OUTPUT_FILE}`);
}

scanAndPrioritize();
