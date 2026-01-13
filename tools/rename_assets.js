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

function renameAssets() {
    console.log("Starting Asset Rename Process...");

    TARGET_DIRS.forEach(dir => {
        const fullDir = path.join(ROOT_DIR, dir);
        if (!fs.existsSync(fullDir)) {
            console.log(`Directory not found: ${fullDir}`);
            return;
        }

        const files = fs.readdirSync(fullDir);
        let renameCount = 0;

        files.forEach(file => {
            if (file.includes('god_')) {
                const oldPath = path.join(fullDir, file);

                // Remove 'god_' - handle both "god_zeus" and "creature_god_zeus"
                // Replace 'god_' with nothing, but be careful of double underscores if any
                let newName = file.replace('god_', '');

                // Cleanup double underscores if they appeared (e.g. creature__zeus)
                newName = newName.replace('__', '_');

                // Ensure 'creature_' prefix
                if (!newName.startsWith('creature_')) {
                    newName = 'creature_' + newName;
                }

                const newPath = path.join(fullDir, newName);

                // Check collision
                if (fs.existsSync(newPath)) {
                    console.log(`[SKIP] Target exists: ${newName} (from ${file})`);
                    // If content is same, we might delete old? Best to manually review if collision.
                } else {
                    fs.renameSync(oldPath, newPath);
                    console.log(`[RENAME] ${dir}/${file} -> ${newName}`);
                    renameCount++;
                }
            }
        });

        console.log(`Processed ${dir}: ${renameCount} files renamed.`);
    });

    console.log("Rename Process Complete.");
}

renameAssets();
