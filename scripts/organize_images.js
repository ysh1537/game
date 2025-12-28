
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mocking imports since we are running as a standalone script
// In a real scenario we might import these, but for safety in this agent environment
// we will read the data files as text or assume we can import them if they depend on nothing else.
// However, the data files depend on '../RankData.js' etc, which might use relative paths.
// We will try dynamic imports.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../js/data/creatures');
const IMAGES_DIR = path.join(__dirname, '../images');

// Manual Map if imports fail
const WORLD_MAP = {
    'Asgard': 'asgard',
    'Olympus': 'olympus',
    'ShangriLa': 'shangrila',
    'Abyss': 'abyss',
    'Wild': 'wild'
};

/* 
   Goal: Move files from images/ root to images/creatures/{world}/{id_variation}.png
   1. Load all creature IDs and their Worlds.
   2. Scan images/ dir.
   3. Match filenames to IDs.
   4. Move files.
*/

async function organizeImages() {
    console.log("Starting Image Organization...");

    // 1. Gather Creature Data
    const creatureMap = new Map(); // id -> { world, name }

    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('Data.js'));

    for (const file of files) {
        try {
            const modulePath = `file://${path.join(DATA_DIR, file)}`;
            // We expect the file to export a named array like ASGARD_CREATURES
            const module = await import(modulePath);
            const key = Object.keys(module)[0];
            const creatures = module[key];

            if (Array.isArray(creatures)) {
                creatures.forEach(c => {
                    creatureMap.set(c.id, {
                        world: c.world || 'Unknown',
                        id: c.id
                    });
                });
            }
        } catch (e) {
            console.error(`Failed to load ${file}:`, e.message);
        }
    }

    console.log(`Loaded ${creatureMap.size} creatures definition.`);

    // 2. Prepare Target Directories
    const targetBase = path.join(IMAGES_DIR, 'creatures');
    if (!fs.existsSync(targetBase)) fs.mkdirSync(targetBase, { recursive: true });

    const categories = ['asgard', 'olympus', 'shangrila', 'abyss', 'wild', 'unknown'];
    categories.forEach(c => {
        const p = path.join(targetBase, c);
        if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
    });

    // Also bg and ui
    if (!fs.existsSync(path.join(IMAGES_DIR, 'backgrounds'))) fs.mkdirSync(path.join(IMAGES_DIR, 'backgrounds'));
    if (!fs.existsSync(path.join(IMAGES_DIR, 'ui'))) fs.mkdirSync(path.join(IMAGES_DIR, 'ui'));

    // 3. Scan and Move
    const imageFiles = fs.readdirSync(IMAGES_DIR).filter(f => {
        return fs.statSync(path.join(IMAGES_DIR, f)).isFile() && !f.startsWith('.');
    });

    let movedCount = 0;

    for (const file of imageFiles) {
        const lowerName = file.toLowerCase();

        // Handling Backgrounds
        if (lowerName.startsWith('bg_')) {
            fs.renameSync(path.join(IMAGES_DIR, file), path.join(IMAGES_DIR, 'backgrounds', file));
            console.log(`Moved BG: ${file}`);
            continue;
        }

        // Handling UI / Icons
        if (lowerName.startsWith('icon_') || lowerName.startsWith('ui_')) {
            fs.renameSync(path.join(IMAGES_DIR, file), path.join(IMAGES_DIR, 'ui', file));
            console.log(`Moved UI: ${file}`);
            continue;
        }

        // Handling Creatures
        let matched = false;
        // Check if file starts with a creature ID
        // We iterate keys to find the longest matching ID to avoid partial matches (e.g. 'dragon' vs 'dragon_king')
        // Sort IDs by length descending
        const sortedIds = [...creatureMap.keys()].sort((a, b) => b.length - a.length);

        for (const id of sortedIds) {
            if (file.includes(id)) {
                const data = creatureMap.get(id);
                // Clean world name
                let worldFolder = data.world.toLowerCase();
                if (!categories.includes(worldFolder)) worldFolder = 'unknown';

                const destPath = path.join(targetBase, worldFolder, file);
                fs.renameSync(path.join(IMAGES_DIR, file), destPath);
                console.log(`Moved Creature: ${file} -> ${worldFolder}`);
                matched = true;
                movedCount++;
                break;
            }
        }

        if (!matched) {
            console.warn(`Unmatched file: ${file}`);
            // Optional: Move to 'misc' or leave it
        }
    }

    console.log(`Organization Complete. Moved ${movedCount} creature images.`);
}

organizeImages();
