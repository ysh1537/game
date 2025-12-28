
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../js/data/creatures');
const IMAGES_DIR = path.join(__dirname, '../images/creatures');
const REPORT_FILE = path.join(__dirname, '../docs/missing_assets_report.md');

// Rarity Definitions (String to Value Map)
const RANK_ORDER = {
    "Normal": 1,
    "Unique": 2,
    "Rare": 3,
    "Special": 4,
    "SR": 5,
    "SSR": 6,
    "UR": 7
};

// Required Sprites by Rank
// SR+ (Rank >= 5) needs full set
const HIGH_RANK_SPRITES = ['idle', 'joy', 'sad', 'angry', 'skill', 'victory', 'defeat'];
// Note: Gallery images (lv1, lv2, lv3) also implied for SR+ but usually stored in separate property or structure.
// For counting purposes, we include basic emotions + skill/victory/defeat.
const LOW_RANK_SPRITES = ['idle'];

// Gallery for dating sim? User mentioned "Service illustrations". 
// Usually SR+ has gallery images. Let's assume 1 for now or check data.
// We will stick to sprites for the main count.

async function auditAssets() {
    console.log("Starting Asset Audit...");

    let report = "# 🚨 Missing Asset Report\n\n";
    let totalMissing = 0;

    // Load Data
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('Data.js'));

    for (const file of files) {
        try {
            const modulePath = `file://${path.join(DATA_DIR, file)}`;
            const module = await import(modulePath);
            const key = Object.keys(module)[0];
            const creatures = module[key];

            if (!Array.isArray(creatures)) continue;

            const worldName = file.replace('Data.js', '');
            report += `## 🌍 ${worldName}\n\n`;
            report += `| ID | Rarity | Missing Variants |\n`;
            report += `| :--- | :--- | :--- |\n`;

            for (const c of creatures) {
                // c.rarity is likely "UR", "SSR", etc.
                const rString = c.rarity.value || c.rarity;
                const rankValue = RANK_ORDER[rString] || 1;

                const neededSprites = (rankValue >= 5) ? HIGH_RANK_SPRITES : LOW_RANK_SPRITES;
                const worldFolder = c.world ? c.world.toLowerCase() : 'unknown';

                // Determine if gallery variants are needed (Rank >= 5)
                // If so, add them to needed check list?
                // User said "1000+". 7 sprites * 20 creatures = 140. 
                // We need more to reach 1000. Gallery (3) -> 10 per creature.
                // Let's add gallery checks for high rank.

                const checkList = [...neededSprites];
                if (rankValue >= 5) {
                    checkList.push('gallery_lv1');
                    checkList.push('gallery_lv2');
                    checkList.push('gallery_lv3');
                }

                // Check files
                const missing = [];
                for (const variant of checkList) {
                    // Try multiple naming conventions
                    // 1. {id}_{variant}.png/jpg
                    // 2. creature_{id}_{variant}.png/jpg
                    // 3. (If idle) {id}.png/jpg or creature_{id}.png/jpg

                    const baseNames = [];
                    if (variant === 'idle') {
                        baseNames.push(`${c.id}`);
                        baseNames.push(`creature_${c.id}`);
                    } else {
                        baseNames.push(`${c.id}_${variant}`);
                        baseNames.push(`creature_${c.id}_${variant}`);
                    }

                    const extensions = ['.png', '.jpg', '.jpeg'];
                    let found = false;

                    for (const base of baseNames) {
                        for (const ext of extensions) {
                            if (fs.existsSync(path.join(IMAGES_DIR, worldFolder, base + ext))) {
                                found = true;
                                break;
                            }
                        }
                        if (found) break;
                    }

                    if (!found) {
                        missing.push(variant);
                    }
                }

                if (missing.length > 0) {
                    report += `| ${c.id} | ${rankValue} | ${missing.join(', ')} |\n`;
                    totalMissing += missing.length;
                }
            }
            report += `\n`;

        } catch (e) {
            console.error(`Error processing ${file}: ${e.message}`);
        }
    }

    report += `\n**Total Missing Images: ${totalMissing}**\n`;

    fs.writeFileSync(REPORT_FILE, report);
    console.log(`Audit Complete. Report saved to ${REPORT_FILE}`);
    console.log(`Total Missing: ${totalMissing}`);
}

auditAssets();
