const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'js', 'data', 'creatures');

const TO_ADD = {
    'AsgardData.js': [
        {
            id: "valkyrie_commander", name: "발키리 지휘관", rarity: "SSR", world: "ASGARD",
            elements: ["Light", "Wind"], baseStr: 40, baseInt: 30, image: "images/placeholder_asgard.png",
            skillId: "meteor_strike", lore: { title: "전장의 지배자", story: "발키리들을 이끄는 고귀한 지휘관." }, lines: { normal: "돌격하라!" }
        }
    ],
    'AbyssData.js': [
        {
            id: "abyss_stalker", name: "심연의 추적자", rarity: "Rare", world: "ABYSS",
            elements: ["Dark", "Wind"], baseStr: 20, baseInt: 15, image: "images/placeholder_abyss.png",
            skillId: "double_strike", lore: { title: "그림자 추적", story: "한 번 문 사냥감은 절대 놓치지 않는다." }, lines: { normal: "찾았다..." }
        },
        {
            id: "void_beast", name: "공허의 야수", rarity: "SR", world: "ABYSS",
            elements: ["Void", "Beast"], baseStr: 35, baseInt: 10, image: "images/placeholder_abyss.png",
            skillId: "power_slash", lore: { title: "공허의 포식자", story: "존재하는 모든 것을 먹어치우는 괴물." }, lines: { normal: "크아앙!" }
        }
    ],
    'ShangriLaData.js': [
        {
            id: "panda_warrior", name: "판다 전사", rarity: "Unique", world: "SHANGRI_LA",
            elements: ["Earth", "Nature"], baseStr: 25, baseInt: 10, image: "images/placeholder_shangrila.png",
            skillId: "hard_hit", lore: { title: "대나무 숲의 수호자", story: "평소엔 느긋하지만 싸울 땐 누구보다 용감하다." }, lines: { normal: "대나무... 맛있다..." }
        }
    ],
    'WildData.js': [
        {
            id: "forest_guardian", name: "숲의 수호자", rarity: "Rare", world: "WILD",
            elements: ["Nature", "Earth"], baseStr: 22, baseInt: 18, image: "images/placeholder_wild.png",
            skillId: "double_strike", lore: { title: "숲의 분노", story: "숲을 해치는 자를 용서하지 않는다." }, lines: { normal: "나가라..." }
        },
        {
            id: "desert_scorpion", name: "사막 전갈", rarity: "Normal", world: "WILD",
            elements: ["Earth", "Poison"], baseStr: 10, baseInt: 5, image: "images/placeholder_wild.png",
            skillId: "default_attack", lore: { title: "모래 숨기", story: "모래 속에 숨어 먹이를 기다린다." }, lines: { normal: "..." }
        }
    ]
};

const RANKS = {
    'Normal': 'RANKS.NORMAL', 'Unique': 'RANKS.UNIQUE', 'Rare': 'RANKS.RARE',
    'Special': 'RANKS.SPECIAL', 'SR': 'RANKS.SR', 'SSR': 'RANKS.SSR', 'UR': 'RANKS.UR'
};
const WORLDS = {
    'ASGARD': 'WORLDS.ASGARD', 'ABYSS': 'WORLDS.ABYSS', 'SHANGRI_LA': 'WORLDS.SHANGRI_LA', 'WILD': 'WORLDS.WILD'
};

Object.keys(TO_ADD).forEach(file => {
    const list = TO_ADD[file];
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Trim end to remove closing array bracket
    let trimmed = content.trim();
    if (trimmed.endsWith('];')) {
        trimmed = trimmed.substring(0, trimmed.length - 2).trim(); // Remove ];
    } else if (trimmed.endsWith(']')) {
        trimmed = trimmed.substring(0, trimmed.length - 1).trim(); // Remove ]
    }

    // Ensure comma on last item
    if (!trimmed.endsWith(',') && !trimmed.endsWith('{') && !trimmed.endsWith('[')) {
        trimmed += ',';
    }

    let toAppend = '';
    list.forEach(c => {
        toAppend += `\n    {\n`;
        toAppend += `        id: "${c.id}",\n`;
        toAppend += `        name: "${c.name}",\n`;
        toAppend += `        rarity: ${RANKS[c.rarity]},\n`;
        toAppend += `        world: ${WORLDS[c.world]},\n`;
        toAppend += `        elements: ${JSON.stringify(c.elements)},\n`;
        toAppend += `        baseStr: ${c.baseStr}, baseInt: ${c.baseInt},\n`;
        toAppend += `        image: "${c.image}",\n`;
        toAppend += `        skillId: "${c.skillId}",\n`;
        toAppend += `        lore: ${JSON.stringify(c.lore)},\n`;
        toAppend += `        lines: ${JSON.stringify(c.lines)}\n`;
        toAppend += `    },`;
    });

    // Remove last comma from append block to be clean? No, trailing comma is fine.

    const newContent = `${trimmed}${toAppend}\n];`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Added ${list.length} creatures to ${file}`);
});
