
import fs from 'fs';
import path from 'path';

const WORLDS = ['Asgard', 'Olympus', 'ShangriLa', 'Abyss', 'Wild'];
const RANKS_IMPORT = "import { RANKS } from '../RankData.js';\nimport { WORLDS } from '../WorldData.js';\n\n";

async function runSerialization() {
    for (const world of WORLDS) {
        const filePath = `./js/data/creatures/${world}Data.js`;
        console.log(`Processing ${world}...`);

        try {
            // Import the module (cache busting)
            const module = await import(`${filePath}?t=${Date.now()}`);
            let creatures = null;
            // Find the array export
            for (const key in module) {
                if (Array.isArray(module[key])) {
                    creatures = module[key];
                    break;
                }
            }

            if (!creatures) {
                console.error(`No array found in ${world}`);
                continue;
            }

            // CLEANUP LOGIC
            const cleanedCreatures = creatures.map(c => {
                const newC = { ...c };

                // 1. Detect Nesting inside 'lore'
                if (newC.lore) {
                    // Check if 'sprites' is stuck inside lore
                    if (newC.lore.sprites) {
                        newC.sprites = newC.lore.sprites;
                        delete newC.lore.sprites;
                    }
                    if (newC.lore.prompts) {
                        newC.prompts = newC.lore.prompts;
                        delete newC.lore.prompts;
                    }
                    if (newC.lore.relationships) {
                        newC.relationships = newC.lore.relationships;
                        delete newC.lore.relationships;
                    }
                    if (newC.lore.touchLines) {
                        newC.touchLines = newC.lore.touchLines;
                        delete newC.lore.touchLines;
                    }
                    if (newC.lore.lore) {
                        // Nested Lore!
                        // Inner lore usually has the generated content.
                        // Outer lore usually has "미지의 존재" default.
                        // We prefer inner lore if it looks better.
                        const inner = newC.lore.lore;
                        const outer = newC.lore; // excluding 'lore' prop which we are reading

                        // Merge strategies? Just take inner if valid.
                        if (inner.title && inner.title !== "미지의 존재") {
                            newC.lore = inner;
                        } else {
                            // keep outer, delete inner
                            delete newC.lore.lore;
                        }
                    }
                }

                // 2. Detect Nesting inside 'sprites' (New Bug Fix)
                if (newC.sprites) {
                    if (newC.sprites.sprites) {
                        // The 'real' sprites are likely inside
                        const innerSprites = newC.sprites.sprites;
                        newC.sprites = innerSprites;
                        // The outer sprites might have had other keys (prompts etc) if they were falsely nested here
                    }
                    // Check if other fields are valid keys inside what is currently 'sprites' object
                    if (newC.sprites.prompts) { newC.prompts = newC.sprites.prompts; delete newC.sprites.prompts; }
                    if (newC.sprites.lore) { newC.lore = newC.sprites.lore; delete newC.sprites.lore; }
                    if (newC.sprites.relationships) { newC.relationships = newC.sprites.relationships; delete newC.sprites.relationships; }
                    if (newC.sprites.touchLines) { newC.touchLines = newC.sprites.touchLines; delete newC.sprites.touchLines; }

                    // Double check if after hoisting, 'sprites' still has 'sprites' (recursive case? Unlikely but safe)
                    if (newC.sprites.sprites) { newC.sprites = newC.sprites.sprites; }
                }

                // 2. Ensure Rarity is String (module import resolves constants to value)
                // c.rarity is likely "SSR" or "Normal".
                // We will output it as string literal "SSR", which is fine.
                // Later user can regex replace "SSR" -> RANKS.SSR if strictness needed.
                return newC;
            });

            // SERIALIZE
            // We want to format it nicely.
            let jsonStr = JSON.stringify(cleanedCreatures, null, 4);

            // Unquote keys (simple regex, handles most identifiers)
            // match "key": -> key:
            jsonStr = jsonStr.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');

            // Fix string quotes to single quotes? or keep double. Double is fine.

            // Re-construct file content
            const varName = `${world.toUpperCase()}_CREATURES`;
            const fileContent = `${RANKS_IMPORT}export const ${varName} = ${jsonStr};`;

            // Write back
            fs.writeFileSync(path.resolve(filePath), fileContent, 'utf8');
            console.log(`Cleaned and saved ${world}Data.js`);

        } catch (e) {
            console.error(`Error processing ${world}:`, e);
        }
    }
}

runSerialization();
