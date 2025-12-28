
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
    const nameKeywords = creature.name.replace(/_/g, " ");

    // Construct Base Prompt
    // Gallery prompt: Focused on appeal, charm, and character detail
    const sexAppeal = creature.rarity === 'UR' || creature.rarity === 'SSR' || creature.rarity === 'SR'
        ? "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece"
        : "cute pose, energetic, detailed, looking at viewer";

    return {
        base: `anime style, cell shaded, 2d game art, full body, ${worldTags}, ${elementTags}, ${nameKeywords}`,
        idle: `standing pose, confident, neutral expression`,
        joy: `smiling, blushing, happy eyes, hand waving, flowers in background`,
        sad: `sad expression, looking down, tears, injured, dark atmosphere`,
        angry: `angry, shouting, glowing eyes, battle stance, attacking effect`,
        skill: `extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece`,
        gallery: `${sexAppeal}, ${nameKeywords} special illustration, intimate atmosphere`
    };
}

async function applyContentV2() {
    let globalUpdateCount = 0;
    const GLOBAL_LIMIT = 20; // User Request: Batch 20

    for (const world of WORLDS) {
        if (globalUpdateCount >= GLOBAL_LIMIT) break;

        // Import Path (Relative to this script file in scripts/assets/)
        const importPath = `../../js/data/creatures/${world}Data.js`;

        // FS Path (Relative to CWD: d:\test\game)
        const fsPath = `./js/data/creatures/${world}Data.js`;

        console.log(`Processing ${world}...`);

        try {
            const module = await import(`${importPath}?t=${Date.now()}`);
            let creatures = null;
            for (const key in module) {
                if (Array.isArray(module[key])) {
                    creatures = module[key];
                    break;
                }
            }

            if (!creatures) continue;

            let fileContent = fs.readFileSync(path.resolve(fsPath), 'utf8');
            let replaceCount = 0;

            for (const c of creatures) {
                if (globalUpdateCount >= GLOBAL_LIMIT) break;

                // Check if update needed (Missing gallery prompt or empty relationships)
                const needsGallery = !c.prompts || !c.prompts.gallery;
                const needsRelations = !c.relationships || c.relationships.likes.length === 0;

                if (!needsGallery && !needsRelations && c.sprites.gallery) continue;

                const baseImg = c.image || `images/${c.id}.png`;
                const p = generatePrompt(c);

                // Construct New Objects
                const spritesObj = `sprites: {
            idle: "${c.sprites?.idle || baseImg}",
            joy: "${c.sprites?.joy || baseImg.replace('.png', '_joy.png')}",
            sad: "${c.sprites?.sad || baseImg.replace('.png', '_sad.png')}",
            angry: "${c.sprites?.angry || baseImg.replace('.png', '_angry.png')}",
            skill: "${c.sprites?.skill || baseImg.replace('.png', '_skill.png')}",
            gallery: "${c.sprites?.gallery || baseImg.replace('.png', '_gallery.png')}"
        }`;

                const promptsObj = `prompts: {
            base: "${p.base}",
            idle: "${p.idle}",
            joy: "${p.joy}",
            sad: "${p.sad}",
            angry: "${p.angry}",
            skill: "${p.skill}",
            gallery: "${p.gallery}"
        }`;

                const loreObj = `lore: {
            title: "${c.lore?.title || c.name}",
            story: "${c.lore?.story || DEFAULT_LORE[c.world] || '신비로운 존재입니다.'}",
            personality: "${c.lore?.personality || 'Unknown'}"
        }`;

                const relObj = `relationships: {
            likes: ${JSON.stringify(c.relationships?.likes || [])},
            dislikes: ${JSON.stringify(c.relationships?.dislikes || [])},
            rival: ${JSON.stringify(c.relationships?.rival || null)}
        }`;

                const touchObj = `touchLines: {
            idle: ${JSON.stringify(c.touchLines?.idle || ["..."])},
            interaction: ${JSON.stringify(c.touchLines?.interaction || ["..."])},
            gift: ${JSON.stringify(c.touchLines?.gift || ["고맙다."])},
            special: ${JSON.stringify(c.touchLines?.special || ["!!!"])}
        }`;

                // Replacement Strategy:
                // Find the object block in fileContent using ID
                // Unlike V1, we will REPLACE the whole existing fields if found, OR append.
                // Using regex to match `key: { ... },` is hard across lines.
                // Safer: Reconstruct the *inner body* of the object? No, too risky.

                // We will delete old `prompts`, `sprites`, `lore` blocks if they exist near this ID, then append fresh ones.
                // Actually, since we essentially want to 'Patch' the object.

                const idRegex = new RegExp(`id:\\s*["']${c.id}["'][\\s\\S]*?}`);
                const match = idRegex.exec(fileContent);
                if (match) {
                    let objStr = match[0];

                    // Remove existing fields from the string
                    objStr = objStr.replace(/sprites:\s*{[\s\S]*?},/g, '');
                    objStr = objStr.replace(/prompts:\s*{[\s\S]*?},/g, '');
                    objStr = objStr.replace(/lore:\s*{[\s\S]*?},/g, '');
                    objStr = objStr.replace(/relationships:\s*{[\s\S]*?},/g, '');
                    objStr = objStr.replace(/touchLines:\s*{[\s\S]*?},/g, '');

                    // Clean up double commas or empty lines
                    objStr = objStr.replace(/,\s*,/g, ',');

                    // Insert new fields before last brace
                    const lastBraceIdx = objStr.lastIndexOf('}');
                    const newBlock = `${spritesObj},\n        ${promptsObj},\n        ${loreObj},\n        ${relObj},\n        ${touchObj}`;

                    const newObjStr = objStr.slice(0, lastBraceIdx) +
                        (objStr[lastBraceIdx - 1] === ',' ? '' : ',') +
                        "\n        " + newBlock + "\n    }";

                    fileContent = fileContent.replace(match[0], newObjStr);
                    replaceCount++;
                    globalUpdateCount++;
                    console.log(`[Update] ${c.id} (${c.name}) updated.`);
                }
            }

            if (replaceCount > 0) {
                fs.writeFileSync(path.resolve(fsPath), fileContent, 'utf8');
                console.log(`Updated ${replaceCount} creatures in ${world} (V2)`);
            }

        } catch (e) {
            console.error(`Error processing ${world}:`, e);
        }
    }
}

applyContentV2();
