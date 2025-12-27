import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mock exports for data files
const CreatureIds = {};
const CreatureRarity = {
    Normal: 'Normal', Unique: 'Unique', Rare: 'Rare',
    Special: 'Special', SR: 'SR', SSR: 'SSR', UR: 'UR'
};
const CreatureType = {
    Offense: 'Offense', Defense: 'Defense', Support: 'Support', Balanced: 'Balanced'
};
const CreatureElement = {
    Fire: 'fire', Water: 'water', Earth: 'earth', Light: 'light', Dark: 'dark'
};

// Global mocks
global.CreatureIds = CreatureIds;
global.CreatureRarity = CreatureRarity;
global.CreatureType = CreatureType;
global.CreatureElement = CreatureElement;

// Helper to lazy load data
async function loadData() {
    const worlds = ['Asgard', 'Olympus', 'ShangriLa', 'Abyss', 'Wild'];
    let allCreatures = [];

    for (const world of worlds) {
        const filePath = `./js/data/creatures/${world}Data.js`;
        try {
            const module = await import(filePath);
            // Search for any exported array
            let data = null;
            for (const key in module) {
                if (Array.isArray(module[key])) {
                    data = module[key];
                    break;
                }
            }

            if (data) {
                console.log(`Loaded ${world}: ${data.length} items`);
                allCreatures.push(...data);
            } else {
                console.warn(`No array export found in ${filePath}. Keys: ${Object.keys(module)}`);
            }
        } catch (e) {
            console.error(`Failed to load ${filePath}:`, e.message);
        }
    }
    return allCreatures;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, 'images');
const AUDIO_DIR = path.join(__dirname, 'audio');

async function runAudit() {
    const creatures = await loadData();
    console.log(`Total loaded creature definitions: ${creatures.length}`);

    const report = {
        total: creatures.length,
        generated: [],
        missing: [],
        placeholder: [],
        audio: { missing: [], found: [] },
        summary: {}
    };

    const knownPlaceholders = [
        'placeholder.png',
        'creature_placeholder_unknown.png',
        'locked_placeholder.png',
        'placeholder_wild.png',
        'placeholder_asgard.png',
        'placeholder_olympus.png',
        'placeholder_shangrila.png',
        'placeholder_abyss.png'
    ];

    for (const c of creatures) {
        let imagePath = c.image;
        if (!imagePath) {
            report.missing.push({ id: c.id, name: c.name, reason: 'No image property' });
            continue;
        }

        // Remove 'images/' prefix checking 
        let relativePath = imagePath;
        if (imagePath.startsWith('images/')) {
            relativePath = imagePath.replace('images/', '');
        }

        const fullPath = path.join(IMAGES_DIR, relativePath);
        const fileName = path.basename(fullPath);

        if (!fs.existsSync(fullPath)) {
            report.missing.push({ id: c.id, name: c.name, path: imagePath, rarity: c.rarity, world: c.world });
        } else if (knownPlaceholders.includes(fileName) || fileName.includes('placeholder')) {
            report.placeholder.push({ id: c.id, name: c.name, path: imagePath, rarity: c.rarity, world: c.world });
        } else {
            // Check file size to guess if it's a real generated image or a tiny placeholder
            try {
                const stats = fs.statSync(fullPath);
                if (stats.size < 5000) { // e.g. < 5KB
                    report.placeholder.push({ id: c.id, name: c.name, path: imagePath, reason: 'Too small', rarity: c.rarity, world: c.world });
                } else {
                    report.generated.push({ id: c.id, name: c.name, path: imagePath, rarity: c.rarity, world: c.world });
                }
            } catch (e) {
                report.missing.push({ id: c.id, name: c.name, path: imagePath, rarity: c.rarity, world: c.world });
            }
        }
    }

    // Audio Audit
    const expectedAudio = [
        'bgm_lobby.mp3', 'bgm_battle.mp3', 'bgm_boss.mp3', 'bgm_victory.mp3', 'bgm_defeat.mp3',
        'sfx_click.mp3', 'sfx_summon.mp3'
    ];
    if (fs.existsSync(AUDIO_DIR)) {
        for (const file of expectedAudio) {
            if (fs.existsSync(path.join(AUDIO_DIR, file))) {
                report.audio.found.push(file);
            } else {
                report.audio.missing.push(file);
            }
        }
    } else {
        report.audio.missing = [...expectedAudio];
    }


    // Sort summary
    report.summary = {
        generatedCount: report.generated.length,
        missingCount: report.missing.length,
        placeholderCount: report.placeholder.length,
        audioMissing: report.audio.missing.length
    };

    console.log(JSON.stringify(report.summary, null, 2));

    // Generate Markdown Content
    let md = `# Creature Asset Inventory (Live Audit)\n\n`;
    md += `**Date**: ${new Date().toLocaleString()}\n`;
    md += `**Total Creatures**: ${report.total}\n`;
    md += `**Generated**: ${report.summary.generatedCount} | **Missing/Placeholder**: ${report.summary.missingCount + report.summary.placeholderCount}\n\n`;

    md += `## 🚨 Priority 1: Missing or Placeholder (Need Generation)\n`;
    const toGenerate = [...report.missing, ...report.placeholder];

    // Sort by Rarity (High to Low)
    const rarityRank = { 'UR': 7, 'SSR': 6, 'SR': 5, 'Special': 4, 'Rare': 3, 'Unique': 2, 'Normal': 1 };
    toGenerate.sort((a, b) => (rarityRank[b.rarity] || 0) - (rarityRank[a.rarity] || 0));

    // Group by World
    const grouped = {};
    toGenerate.forEach(c => {
        const w = c.world || 'Unknown';
        if (!grouped[w]) grouped[w] = [];
        grouped[w].push(c);
    });

    for (const [world, list] of Object.entries(grouped)) {
        md += `### 🌍 ${world} (${list.length})\n`;
        md += `| Rarity | Name | ID | Status |\n`;
        md += `| :--- | :--- | :--- | :--- |\n`;
        list.forEach(c => {
            const status = c.reason || (c.path ? (c.path.includes('placeholder') ? 'Placeholder' : 'Missing') : 'No Path');
            md += `| **${c.rarity}** | ${c.name} | ${c.id} | ${status} |\n`;
        });
        md += `\n`;
    }

    // Additional Resources Priority
    md += `## 🛠️ Additional Resources Priority\n`;
    if (report.audio.missing.length > 0) {
        md += `### 🎵 BGM & SFX (Missing: ${report.audio.missing.length})\n`;
        report.audio.missing.forEach(f => md += `- [ ] ${f}\n`);
    } else {
        md += `### 🎵 BGM & SFX (All Found)\n- All core audio files present.\n`;
    }

    md += `\n### 🖼️ Backgrounds & Other\n`;
    md += `- [ ] Check backgrounds consistency (Manual)\n`;


    md += `\n## ✅ Generated Assets\n`;
    md += `<details><summary>Click to view ${report.generated.length} generated creatures</summary>\n\n`;
    md += `| World | Rarity | Name | Image |\n`;
    md += `| :--- | :--- | :--- | :--- |\n`;

    // Sort generated by World then Rarity
    report.generated.sort((a, b) => {
        if (a.world !== b.world) return (a.world || '').localeCompare(b.world || '');
        return (rarityRank[b.rarity] || 0) - (rarityRank[a.rarity] || 0);
    });

    report.generated.forEach(c => {
        md += `| ${c.world} | ${c.rarity} | ${c.name} | ${c.path} |\n`;
    });
    md += `\n</details>\n`;

    fs.writeFileSync('docs/creature_asset_inventory.md', md, 'utf8');
    console.log("Updated docs/creature_asset_inventory.md");
}

runAudit();
