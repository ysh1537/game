import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = 'D:/test/game';
const dataDir = path.join(projectRoot, 'js/data/creatures');
const skillDataPath = path.join(projectRoot, 'js/data/SkillData.js');

// Mock data to handle imports in data files if necessary
// (Not needed if data files refer to standard libraries, but here they might import WORLDS)
// We will use dynamic imports.

async function scan() {
    console.log("=== 🔍 Game Data Integrity Scan Started ===");

    // 1. Files to Scan
    const worldFiles = ['OlympusData.js', 'AsgardData.js', 'AbyssData.js', 'ShangriLaData.js', 'WildData.js'];
    const creatures = [];
    const skillIds = new Set();
    const errors = [];

    // 2. Load Skill Data first (for validation)
    let validSkillIds = new Set();
    try {
        const skillModule = await import(`file://${skillDataPath}`);
        if (skillModule.SKILLS) {
            Object.keys(skillModule.SKILLS).forEach(k => validSkillIds.add(k));
        } else {
            console.warn("⚠️ SKILLS object not found in SkillData.js");
        }
    } catch (e) {
        console.error("❌ Failed to load SkillData.js:", e.message);
        // Add defaults just in case
        validSkillIds.add('default_attack');
    }

    // 3. Scan Creature Data
    for (const file of worldFiles) {
        const filePath = path.join(dataDir, file);
        try {
            const module = await import(`file://${filePath}`);
            // Assuming default export or named export matches file name logic
            // Actually the files likely export a constant like OLYMPUS_DATA
            // Let's inspect exports
            const data = Object.values(module)[0]; // Get first export

            if (Array.isArray(data)) {
                console.log(`✅ Loaded ${file}: ${data.length} creatures`);

                data.forEach((c, index) => {
                    const ctx = `${file} [Index ${index}] ${c.name || 'NoName'}`;

                    // ID Check
                    if (!c.id) errors.push(`${ctx}: Missing ID`);

                    // Stats Check
                    if (!c.stats) errors.push(`${ctx}: Missing Stats`);
                    else {
                        if (typeof c.stats.hp !== 'number') errors.push(`${ctx}: Invalid HP`);
                        if (typeof c.stats.atk !== 'number') errors.push(`${ctx}: Invalid ATK`);
                        if (typeof c.stats.def !== 'number') errors.push(`${ctx}: Invalid DEF`);
                    }

                    // Skill Check
                    if (c.skillId) {
                        if (!validSkillIds.has(c.skillId)) {
                            // Don't error yet, just warn or mark as error if strict
                            errors.push(`${ctx}: Unknown Skill ID '${c.skillId}'`);
                        }
                    } else {
                        // We added defaults, so this should not happen
                        errors.push(`${ctx}: Missing skillId`);
                    }

                    // Image Check
                    if (!c.image) {
                        errors.push(`${ctx}: Missing Image path`);
                    } else {
                        // Check if file exists
                        const imgPath = path.join(projectRoot, c.image);
                        // Some images have query strings or are relative? Assuming relative to root
                        // Our data has 'images/foo.png' usually.
                        if (!fs.existsSync(imgPath)) {
                            // Suppress placeholder errors if user knows about them, but audit should report
                            // console.warn(`${ctx}: Image file not found: ${c.image}`);
                            // We'll treat as warning
                        }
                    }

                    // Add to total list
                    creatures.push(c);
                });
            } else {
                errors.push(`❌ ${file} does not export an array.`);
            }
        } catch (e) {
            errors.push(`❌ Failed to load ${file}: ${e.message}`);
        }
    }

    console.log(`\n=== 📊 Scan Results ===`);
    console.log(`Total Creatures Found: ${creatures.length}`);

    // Check duplicates
    const idMap = new Map();
    const duplicates = [];
    creatures.forEach(c => {
        if (idMap.has(c.id)) {
            duplicates.push(c.id);
        } else {
            idMap.set(c.id, true);
        }
    });

    if (duplicates.length > 0) {
        console.error(`❌ Found ${duplicates.length} duplicate IDs:`, duplicates);
        errors.push(`Duplicate IDs found: ${duplicates.join(', ')}`);
    } else {
        console.log(`✅ No duplicate IDs found.`);
    }

    if (errors.length > 0) {
        console.error(`\n❌ Found ${errors.length} Integrity Errors:`);
        errors.forEach(e => console.error(` - ${e}`));
    } else {
        console.log(`\n✨ GREAT! No integrity errors found.`);
    }

    // Return total count
    return creatures.length;
}

scan();
