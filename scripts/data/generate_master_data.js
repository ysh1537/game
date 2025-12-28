
import fs from 'fs';
import path from 'path';

const RANKS_IMPORT = "import { RANKS } from '../RankData.js';\nimport { WORLDS } from '../WorldData.js';\n\n";
const MD_PATH = './docs/creature_asset_inventory.md';

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

function generatePrompt(world, name, elements, rarity) {
    const worldTags = PROMPT_STYLES[world] || "fantasy";
    const elementTags = elements ? elements.join(", ") : "";
    const nameKeywords = name.replace(/_/g, " ");

    // Gallery & Battle prompt logic (UR/SSR/SR get full set)
    const isHighRank = (rarity === 'UR' || rarity === 'SSR' || rarity === 'SR');
    const isUR = (rarity === 'UR');

    let extraPrompts = {};

    if (isHighRank) {
        extraPrompts = {
            victory: `winning pose, cheering, victory sign, energetic, confident smile, battlefield background`,
            defeat: `defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression`,
            gallery_lv1: `dating sim event, ${nameKeywords}, shy look, cafe or park background, soft lighting, slight blush, holding hands context`,
            gallery_lv2: `dating sim event, ${nameKeywords}, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes`,
            gallery_lv3: `dating sim event, ${nameKeywords}, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes`
        };
    } else {
        // Normal ranks
        extraPrompts = {
            gallery_lv1: `cute pose, ${nameKeywords}, energetic, detailed, looking at viewer`
        };
    }

    return {
        base: `anime style, cell shaded, 2d game art, full body, ${worldTags}, ${elementTags}, ${nameKeywords}`,
        idle: `standing pose, confident, neutral expression`,
        joy: `smiling, blushing, happy eyes, hand waving, flowers in background`,
        sad: `sad expression, looking down, tears, injured, dark atmosphere`,
        angry: `angry, shouting, glowing eyes, battle stance, attacking effect`,
        skill: `extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece`,
        ...extraPrompts
    };
}

function parseMarkdown() {
    const content = fs.readFileSync(MD_PATH, 'utf8');
    const lines = content.split('\n');
    const worldData = { ASGARD: [], OLYMPUS: [], SHANGRILA: [], ABYSS: [], WILD: [] };

    const addCreature = (worldKey, c) => {
        if (!worldData[worldKey]) worldData[worldKey] = [];
        if (worldData[worldKey].find(x => x.id === c.id)) return;
        worldData[worldKey].push(c);
    };

    let currentSectionWorld = null;

    lines.forEach(line => {
        line = line.trim();
        if (!line.includes('|')) {
            if (line.includes('### 🌍 ASGARD')) currentSectionWorld = 'ASGARD';
            else if (line.includes('### 🌍 WILD')) currentSectionWorld = 'WILD';
            else if (line.includes('### 🌍 ABYSS')) currentSectionWorld = 'ABYSS';
            else if (line.includes('### 🌍 SHANGRILA')) currentSectionWorld = 'SHANGRILA';
            else if (line.includes('### 🌍 OLYMPUS')) currentSectionWorld = 'OLYMPUS';
            else if (line.includes('### 🌍 Unknown')) currentSectionWorld = 'WILD';
            else if (line.includes('## ✅ Generated Assets')) currentSectionWorld = 'GENERATED';
            return;
        }
        if (line.includes('---') || (line.includes('Rarity') && line.includes('Name'))) return;

        const parts = line.split('|').map(s => s.trim()).filter(s => s);
        const clean = (s) => s ? s.replace(/\*\*/g, '') : '';

        let id, name, rarity, image, worldDest;

        if (currentSectionWorld === 'GENERATED') {
            if (parts.length < 4) return;
            const w = parts[0].toUpperCase();
            rarity = clean(parts[1]);
            name = parts[2];
            image = parts[3];
            id = path.basename(image, path.extname(image)).replace(/^creature_/, '');
            worldDest = w;
        } else if (currentSectionWorld && worldData[currentSectionWorld]) {
            if (parts.length < 3) return;
            rarity = clean(parts[0]);
            name = parts[1];
            id = parts[2];
            image = `images/${id}.png`;
            worldDest = currentSectionWorld;
        }

        if (worldDest && worldData[worldDest]) {
            addCreature(worldDest, {
                id, name,
                rarityRaw: rarity,
                rarity: `RANKS.${rarity.toUpperCase()}`,
                image,
                world: worldDest // String for logic
            });
        }
    });
    return worldData;
}

function generateMasterFiles() {
    const data = parseMarkdown();

    for (const [worldKey, items] of Object.entries(data)) {
        if (items.length === 0) continue;

        // Proper Case
        let fileKey = worldKey.charAt(0) + worldKey.slice(1).toLowerCase();
        if (worldKey === 'SHANGRILA') fileKey = 'ShangriLa';
        if (worldKey === 'ASGARD') fileKey = 'Asgard'; // Already correct case usually
        if (worldKey === 'OLYMPUS') fileKey = 'Olympus';
        if (worldKey === 'ABYSS') fileKey = 'Abyss';
        if (worldKey === 'WILD') fileKey = 'Wild';

        const objects = items.map(item => {
            const worldProper = fileKey;
            const prompts = generatePrompt(worldProper, item.name, ["Light"], item.rarityRaw); // Default element Light

            // Base Image handling
            const baseImg = item.image;
            const isHighRank = (item.rarityRaw.toUpperCase() === 'UR' || item.rarityRaw.toUpperCase() === 'SSR' || item.rarityRaw.toUpperCase() === 'SR');

            let galleryObj = {};
            // 7. Victory/Defeat (part of standard sprites but new files)
            const victoryImg = baseImg.replace('.png', '_victory.png');
            const defeatImg = baseImg.replace('.png', '_defeat.png');

            if (isHighRank) {
                galleryObj = {
                    lv1: baseImg.replace('.png', '_gallery_lv1.png'),
                    lv2: baseImg.replace('.png', '_gallery_lv2.png'),
                    lv3: baseImg.replace('.png', '_gallery_lv3.png')
                };
            } else {
                galleryObj = {
                    lv1: baseImg.replace('.png', '_gallery.png')
                };
            }

            // Construct fields
            const entry = {
                id: item.id,
                name: item.name,
                rarity: item.rarity, // Literal
                world: `WORLDS.${worldKey}`,
                elements: [`"Light"`], // Default strings
                baseStr: 10, baseInt: 10,
                image: `"${baseImg}"`,
                sprites: {
                    idle: baseImg,
                    joy: baseImg.replace('.png', '_joy.png'),
                    sad: baseImg.replace('.png', '_sad.png'),
                    angry: baseImg.replace('.png', '_angry.png'),
                    skill: baseImg.replace('.png', '_skill.png'),
                    victory: victoryImg,
                    defeat: defeatImg,
                    gallery: galleryObj
                },
                prompts: prompts,
                lore: {
                    title: "미지의 존재",
                    story: `${DEFAULT_LORE[worldProper] || '신비로운 존재입니다.'} ${item.name}은(는) 특별한 능력을 지녔습니다.`,
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["고맙다."],
                    special: ["!!!"]
                },
                lines: { normal: "..." }
            };

            // Convert to Obj String manually to control formatting and literals (RANKS.SSR)
            const objStr = `    {
        id: "${entry.id}",
        name: "${entry.name}",
        rarity: ${entry.rarity},
        world: ${entry.world},
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: ${entry.image},
        sprites: ${JSON.stringify(entry.sprites, null, 12).replace(/"/g, '"').replace(/\n\s+/g, '\n            ').trim()},
        prompts: ${JSON.stringify(entry.prompts, null, 12).replace(/\n\s+/g, '\n            ').trim()},
        lore: ${JSON.stringify(entry.lore, null, 12).replace(/\n\s+/g, '\n            ').trim()},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    }`;
            return objStr;
        });

        const content = `${RANKS_IMPORT}export const ${worldKey}_CREATURES = [\n${objects.join(',\n')}\n];`;

        fs.writeFileSync(`./js/data/creatures/${fileKey}Data.js`, content, 'utf8');
        console.log(`Generated ${fileKey}Data.js (${items.length})`);
    }
}

generateMasterFiles();
