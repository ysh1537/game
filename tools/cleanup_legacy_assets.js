const fs = require('fs');
const path = require('path');

const TARGET_DIRS = [
    'images/creatures/asgard',
    'images/creatures/olympus',
    'images/creatures/abyss',
    'images/creatures/shangrila',
    'images/creatures/wild'
];

const ROOT_DIR = path.resolve(__dirname, '..');

function cleanupLegacyAssets() {
    console.log("Starting Legacy Asset Cleanup...");
    let totalDeleted = 0;

    TARGET_DIRS.forEach(dir => {
        const fullDir = path.join(ROOT_DIR, dir);
        if (!fs.existsSync(fullDir)) {
            console.log(`Directory not found: ${fullDir}`);
            return;
        }

        const files = fs.readdirSync(fullDir);
        let dirDeleted = 0;

        files.forEach(file => {
            if (file.includes('god_')) {
                const oldPath = path.join(fullDir, file);

                // Construct standardized name logic (same as rename_assets.js)
                let newName = file.replace('god_', '');
                newName = newName.replace('__', '_');
                if (!newName.startsWith('creature_')) {
                    newName = 'creature_' + newName;
                }

                const newPath = path.join(fullDir, newName);

                if (fs.existsSync(newPath)) {
                    // Standardized version exists, so it's safe to delete the old god_ file
                    try {
                        fs.unlinkSync(oldPath);
                        console.log(`[DELETE] Duplicate found. Deleted old file: ${dir}/${file}`);
                        dirDeleted++;
                        totalDeleted++;
                    } catch (err) {
                        console.error(`[ERROR] Failed to delete ${file}:`, err);
                    }
                } else {
                    console.log(`[WARNING] Found '${file}' but no standardized version '${newName}'. Run rename_assets.js first?`);
                }
            }
        });

        if (dirDeleted > 0) {
            console.log(`Cleaned ${dir}: ${dirDeleted} files deleted.`);
        }
    });

    console.log(`Cleanup Complete. Total files deleted: ${totalDeleted}`);
}

cleanupLegacyAssets();
