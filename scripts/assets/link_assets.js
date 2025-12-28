
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
            let data = null;
            for (const key in module) {
                if (Array.isArray(module[key])) {
                    data = module[key];
                    break;
                }
            }
            if (data) {
                // Attach source file info for updating later
                data.forEach(c => c._sourceFile = filePath);
                allCreatures.push(...data);
            }
        } catch (e) {
            console.error(`Failed to load ${filePath}:`, e.message);
        }
    }
    return allCreatures;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, 'images');

async function runSmartLink() {
    const creatures = await loadData();
    const imageFiles = fs.readdirSync(IMAGES_DIR);

    console.log(`Loaded ${creatures.length} creatures and ${imageFiles.length} image files.`);

    const report = {
        linked: 0,
        foundOrphan: 0,
        stillMissing: 0,
        orphanedMatches: []
    };

    for (const c of creatures) {
        // Current state
        let currentImage = c.image || "";
        let isPlaceholder = currentImage.includes("placeholder") || !currentImage;

        if (!isPlaceholder) {
            // Check if file actually exists
            const base = path.basename(currentImage);
            if (fs.existsSync(path.join(IMAGES_DIR, base))) {
                report.linked++;
                continue;
            } else {
                // File missing despite being set
                isPlaceholder = true; // Treat as needing finding
            }
        }

        // Try to find a match in imageFiles
        // Naming convention seems to be: creature_{id}.png or just {id}.png or similar
        // sanitize ID
        const cleanId = c.id.replace(/-/g, '_').toLowerCase();

        // Exact ID match candidates
        const candidates = [
            `creature_${cleanId}.png`,
            `creature_${cleanId}.jpg`,
            `${cleanId}.png`,
            `${cleanId}.jpg`,
            // Try cleaning names like "wolf_fenrir" -> "fenrir"? No, risky. 
            // Try "god_zeus" -> "creature_god_zeus.jpg"
        ];

        let foundMatch = null;
        for (const cand of candidates) {
            if (imageFiles.includes(cand)) {
                foundMatch = cand;
                break;
            }
        }

        // Fuzzy match if strict failed: starts with "creature_" + id
        if (!foundMatch) {
            foundMatch = imageFiles.find(f => f.toLowerCase() === `creature_${cleanId}.png` || f.toLowerCase() === `creature_${cleanId}.jpg`);
        }

        if (foundMatch) {
            report.foundOrphan++;
            report.orphanedMatches.push({
                id: c.id,
                name: c.name,
                current: currentImage,
                found: `images/${foundMatch}`,
                sourceFile: c._sourceFile
            });
        } else {
            report.stillMissing++;
        }
    }

    console.log("SMART LINK REPORT:");
    console.log(JSON.stringify(report, null, 2));

    // Save mapping to file for bulk update
    fs.writeFileSync('orphaned_assets_map.json', JSON.stringify(report.orphanedMatches, null, 2));
}

runSmartLink();
