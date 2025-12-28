
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LEGACY_DIR = path.join(__dirname, '../images/_legacy');
const DEST_BASE = path.join(__dirname, '../images/creatures');

// World Mapping for Known IDs (Manual Mapping since Data might be missing them)
// We infer world from filename or known missing assets
const RESTORE_MAP = {
    'god_loki': 'asgard',
    'wolf_pup_asgard': 'asgard',
    'bifrost_wisp': 'asgard',
    'heimdall_horn_spirit': 'asgard',
    'einherjar_ghost': 'asgard',
    'creature_fox9': 'shangrila', // Assuming Nine-tailed fox
    'creature_snake_world_jormungandr': 'asgard',
    'creature_unicorn': 'wild',
    'elk_golden': 'asgard', // Or Wild? Usually Asgard/Nordic
    'ratatoskr_squirrel': 'asgard',
    'muninn_crow': 'asgard',
    'mimir_spirit': 'asgard',
    'shieldmaiden_iron': 'asgard',
    'ulfhednar_wolf': 'asgard',
    'yggdrasil_guardian': 'asgard',
    'creature_kraken_trainee': 'abyss',
    'creature_god_freya': 'asgard', // Exists as god_freya? check duplicates
    'god_freya': 'asgard',
    'god_hel': 'asgard',
};

async function restoreLegacy() {
    console.log("Restoring Legacy Assets...");

    if (!fs.existsSync(LEGACY_DIR)) {
        console.log("No legacy directory found.");
        return;
    }

    const files = fs.readdirSync(LEGACY_DIR);
    let restoredCount = 0;

    for (const file of files) {
        if (file.startsWith('.')) continue;

        let targetWorld = 'unknown';
        let newName = file;

        // 1. Check Map
        // Try exact match or partial match
        for (const [key, world] of Object.entries(RESTORE_MAP)) {
            if (file.includes(key)) {
                targetWorld = world;
                // Standardization: Ensure 'creature_' prefix? 
                // Style guide doesn't rigidly enforce prefix in folder, but good practice.
                // "Naming: {id}_{variation}.png" -> actually Guide says {id}_{variation}.png.
                // Existing files in organized folders often have 'creature_' prefix or not.
                // We will keep original name for now to avoid breaking potential code if we link it back.
                break;
            }
        }

        // Special Case: Asgard suffix
        if (targetWorld === 'unknown' && file.includes('_asgard')) {
            targetWorld = 'asgard';
        }

        const destDir = path.join(DEST_BASE, targetWorld);
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

        const srcPath = path.join(LEGACY_DIR, file);
        const destPath = path.join(destDir, file);

        fs.renameSync(srcPath, destPath);
        console.log(`Restored: ${file} -> ${targetWorld}/${file}`);
        restoredCount++;
    }

    console.log(`Restoration Complete. ${restoredCount} files moved.`);
}

restoreLegacy();
