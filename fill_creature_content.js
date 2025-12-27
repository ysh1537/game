
import fs from 'fs';
import path from 'path';

const WORLDS = ['Asgard', 'Olympus', 'ShangriLa', 'Abyss', 'Wild'];
const PROMPT_STYLES = {
    Asgard: "nordic fantasy, vikings, rune magic, cold atmosphere, mythic",
    Olympus: "greek mythology, marble, gold ornaments, bright sunlight, divine",
    ShangriLa: "oriental fantasy, ink painting style, mystical mist, jade details",
    Abyss: "dark fantasy, eldritch horror, purple and black energy, tentacles, void",
    Wild: "nature, wild untamed, organic, forests, elemental"
};

const DEFAULT_LORE = {
    Asgard: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다.",
    Olympus: "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다.",
    ShangriLa: "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다.",
    Abyss: "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다.",
    Wild: "대자연의 정령들과 함께 숲과 대지를 지킵니다."
};

function generatePrompt(creature) {
    const worldTags = PROMPT_STYLES[creature.world] || "fantasy";
    const elementTags = creature.elements ? creature.elements.join(", ") : "";
    const nameKeywords = creature.name.replace(/_/g, " "); // simple breakdown

    // Construct Base Prompt
    return {
        base: `anime style, cell shaded, 2d game art, full body, ${worldTags}, ${elementTags}, ${nameKeywords}`,
        idle: `standing pose, confident, neutral expression`,
        joy: `smiling, blushing, happy eyes, hand waving, flowers in background`,
        sad: `sad expression, looking down, tears, injured, dark atmosphere`,
        angry: `angry, shouting, glowing eyes, battle stance, attacking effect`,
        skill: `extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece`
    };
}

function processFile(world) {
    const filePath = `./js/data/creatures/${world}Data.js`;
    const absPath = path.resolve(filePath);

    if (!fs.existsSync(absPath)) {
        console.error(`Missing file: ${absPath}`);
        return;
    }

    let content = fs.readFileSync(absPath, 'utf8');

    // Naive Regex Parsing is dangerous for nested objects. 
    // Instead, we will iterate line by line to inject properties inside objects.
    // Or, we find "id: ..." and check subsequent lines.

    // Detailed Regex Strategy:
    // 1. Find all object blocks: `{ id: "...", ... }`
    // 2. Parse the ID.
    // 3. Generating missing data objects strings.
    // 4. Inject them before the closing brace `}` of that object.

    // Regex to match individual creature blocks roughly
    // We assume standard formatting: { ... },

    // Let's rely on valid JS structure. We'll import the data, modify it in memory, then serialize it back?
    // Serializing JS objects with functions/variables (like RANKS.SSR) back to code is hard.
    // -> We will stick to String Manipulation using ID anchors.

    // Read all IDs first to create a map of "ID -> Data to Inject"
    // We can't easily read the JS file properties without evaluating.
    // We will do a hybrid approach: Import to read, Replace string to write.
}

// Rewriting strategy to be robust:
// 1. Load the module dynamically to get the list of creatures.
// 2. For each creature, generate the text block for new fields.
// 3. Use search/replace in the original string.

async function applyContent() {
    for (const world of WORLDS) {
        const filePath = `./js/data/creatures/${world}Data.js`;
        console.log(`Processing ${world}...`);

        try {
            // Dynamic Import
            // Cache busting with timestamp
            const module = await import(`${filePath}?t=${Date.now()}`);
            let creatures = null;
            for (const key in module) {
                if (Array.isArray(module[key])) {
                    creatures = module[key];
                    break;
                }
            }

            if (!creatures) continue;

            let fileContent = fs.readFileSync(path.resolve(filePath), 'utf8');
            let replaceCount = 0;

            for (const c of creatures) {
                // Check if need update (e.g. missing 'prompts' or 'sprites')
                if (c.prompts && c.sprites) continue; // Skip if already looks full

                const newFields = [];
                const indent = "        ";

                // 1. Sprites (If missing)
                if (!c.sprites) {
                    const id = c.id;
                    const baseImg = c.image || `images/${id}.png`;
                    // Assume naming convention
                    const spriteStr = `sprites: {
            idle: "${baseImg}",
            joy: "${baseImg.replace('.png', '_joy.png')}",
            sad: "${baseImg.replace('.png', '_sad.png')}",
            angry: "${baseImg.replace('.png', '_angry.png')}",
            skill: "${baseImg.replace('.png', '_skill.png')}"
        },`;
                    newFields.push(spriteStr);
                }

                // 2. Prompts (New Request)
                if (!c.prompts) {
                    const p = generatePrompt(c);
                    const promptStr = `prompts: {
            base: "${p.base}",
            idle: "${p.idle}",
            joy: "${p.joy}",
            sad: "${p.sad}",
            angry: "${p.angry}",
            skill: "${p.skill}"
        },`;
                    newFields.push(promptStr);
                }

                // 3. Lore (If missing or default)
                if (!c.lore || c.lore.title === "미지의 존재") {
                    const loreStr = `lore: {
            title: "${c.name}",
            story: "${DEFAULT_LORE[c.world] || '신비로운 존재입니다.'} ${c.name}은(는) ${c.elements ? c.elements[0] : ''} 속성의 힘을 다룹니다.",
            personality: "Unknown"
        },`;
                    newFields.push(loreStr);
                }

                // 4. Relationship (If missing)
                if (!c.relationships) {
                    const relStr = `relationships: {
            likes: [],
            dislikes: [],
            rival: null
        },`;
                    newFields.push(relStr);
                }

                // 5. Touch Lines (If missing)
                if (!c.touchLines) {
                    const linesStr = `touchLines: {
            idle: ["..."],
            interaction: ["..."],
            gift: ["고맙다."],
            special: ["!!!"]
        },`;
                    newFields.push(linesStr);
                }

                if (newFields.length > 0) {
                    // Inject before the closing brace of this object
                    // We locate this specific object by its ID
                    const idPattern = new RegExp(`id:\\s*["']${c.id}["'][\\s\\S]*?}`);
                    const match = idPattern.exec(fileContent);

                    if (match) {
                        const objStr = match[0];
                        const lastBraceIdx = objStr.lastIndexOf('}');

                        // Insert fields before last brace
                        const newContent = objStr.slice(0, lastBraceIdx) + ",\n" +
                            newFields.map(f => indent + f).join("\n") +
                            "\n    }";

                        // Global replace in file content (safe because ID is unique enough in context)
                        fileContent = fileContent.replace(objStr, newContent);
                        replaceCount++;
                    }
                }
            }

            if (replaceCount > 0) {
                // Cleanup double commas if any
                fileContent = fileContent.replace(/,(\s*),/g, ',');
                fs.writeFileSync(path.resolve(filePath), fileContent, 'utf8');
                console.log(`Updated ${replaceCount} creatures in ${world}`);
            }

        } catch (e) {
            console.error(`Error processing ${world}:`, e);
        }
    }
}

applyContent();
