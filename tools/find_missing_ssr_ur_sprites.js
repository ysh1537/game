const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../js/data/json');
const OUTPUT_FILE = path.join(__dirname, '../MISSING_SSR_UR_SPRITES.json');

const PRIORITY_RANKS = ['SSR', 'UR'];
const TARGET_SPRITES = ['joy', 'skill'];

function findMissingSprites() {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
    const missingAssets = [];

    files.forEach(file => {
        const filePath = path.join(DATA_DIR, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        // Handle both structure types if necessary (array or object with creatures)
        // Assuming array based on previous view of Data files
        const creatures = Array.isArray(data) ? data : Object.values(data).flat();

        creatures.forEach(creature => {
            if (PRIORITY_RANKS.includes(creature.rarity)) {
                const missing = [];

                TARGET_SPRITES.forEach(type => {
                    const spritePath = creature.sprites[type];
                    if (!spritePath) {
                        missing.push(type);
                    } else {
                        // Check if file exists
                        const absolutePath = path.resolve(__dirname, '..', spritePath);
                        if (!fs.existsSync(absolutePath)) {
                            missing.push(type);
                        }
                    }
                });

                if (missing.length > 0) {
                    missingAssets.push({
                        id: creature.id,
                        name: creature.name,
                        rarity: creature.rarity,
                        world: creature.world,
                        missing: missing,
                        baseImage: creature.image,
                        prompts: creature.prompts
                    });
                }
            }
        });
    });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(missingAssets, null, 2));
    console.log(`Found ${missingAssets.length} SSR/UR creatures with missing sprites.`);
    console.log(`Report saved to ${OUTPUT_FILE}`);
}

findMissingSprites();
