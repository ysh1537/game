console.log('--- Script Start ---');

try {
    const fs = require('fs');
    const path = require('path');

    console.log('Modules loaded');
    console.log('__dirname:', __dirname);

    // Configuration
    const PROJECT_ROOT = path.resolve(__dirname, '../');
    console.log('PROJECT_ROOT:', PROJECT_ROOT);

    const DATA_DIR = path.join(PROJECT_ROOT, 'js/data/creatures');
    const IMAGE_DIR = path.join(PROJECT_ROOT, 'images/creatures');
    const WORLDS = ['Asgard', 'Olympus', 'Abyss', 'ShangriLa', 'Wild'];

    console.log('DATA_DIR:', DATA_DIR);
    console.log('IMAGE_DIR:', IMAGE_DIR);

    // Stats
    let stats = {
        codeReplacements: 0,
        filesRenamed: 0,
        errors: 0
    };

    console.log('--- Starting Asset Normalization (Removing "god_" prefix) ---');

    // --- Step 1: Update Data Files ---
    console.log('\n--- Step 1: Updating World Data Files ---');

    WORLDS.forEach(world => {
        try {
            const filePath = path.join(DATA_DIR, `${world}Data.js`);
            console.log(`Checking file: ${filePath}`);

            if (!fs.existsSync(filePath)) {
                console.warn(`Warning: Data file not found for ${world}: ${filePath}`);
                return;
            }

            let content = fs.readFileSync(filePath, 'utf8');
            let originalContent = content;

            // Regex 1: Fix IDs (id: "god_name" -> id: "name")
            content = content.replace(/(id:\s*["'])god_([^"']*)(["'])/g, (match, prefix, name, suffix) => {
                stats.codeReplacements++;
                return `${prefix}${name}${suffix}`;
            });

            // Regex 2: Fix Image Paths (src: ".../creature_god_name.png" -> src: ".../creature_name.png")
            content = content.replace(/(["'])images\/creatures\/([^/]+)\/creature_god_([^"']*)(["'])/g, (match, quote1, folder, filename, quote2) => {
                stats.codeReplacements++;
                return `${quote1}images/creatures/${folder}/creature_${filename}${quote2}`;
            });

            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated ${world}Data.js`);
            } else {
                console.log(`No legacy patterns found in ${world}Data.js`);
            }
        } catch (err) {
            console.error(`Error processing ${world}Data.js:`, err);
            stats.errors++;
        }
    });

    // --- Step 2: Rename Image Files ---
    console.log('\n--- Step 2: Renaming Image Files ---');

    function walkAndRename(dir) {
        if (!fs.existsSync(dir)) {
            console.log(`Directory does not exist: ${dir}`);
            return;
        }

        const files = fs.readdirSync(dir);

        files.forEach(file => {
            try {
                const fullPath = path.join(dir, file);
                const stat = fs.statSync(fullPath);

                if (stat.isDirectory()) {
                    walkAndRename(fullPath);
                } else {
                    if (file.includes('creature_god_')) {
                        const newName = file.replace('creature_god_', 'creature_');
                        const newPath = path.join(dir, newName);

                        if (fs.existsSync(newPath)) {
                            console.warn(`⚠️ Collision detected: Cannot rename ${file} to ${newName} because target exists.`);
                            stats.errors++;
                        } else {
                            fs.renameSync(fullPath, newPath);
                            console.log(`Renamed: ${file} -> ${newName}`);
                            stats.filesRenamed++;
                        }
                    }
                }
            } catch (err) {
                console.error(`Error processing file ${file}:`, err);
                stats.errors++;
            }
        });
    }

    if (fs.existsSync(IMAGE_DIR)) {
        walkAndRename(IMAGE_DIR);
    } else {
        console.error(`Image directory not found: ${IMAGE_DIR}`);
    }

    console.log('\n--- Normalization Complete ---');
    console.log(`Total Code Replacements: ${stats.codeReplacements}`);
    console.log(`Total Files Renamed: ${stats.filesRenamed}`);
    console.log(`Errors/Collisions: ${stats.errors}`);

} catch (globalErr) {
    console.error('FATAL ERROR:', globalErr);
}
