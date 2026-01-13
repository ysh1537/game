const fs = require('fs');
const path = require('path');

const asgardPath = path.join(__dirname, '../js/data/creatures/AsgardData.js');
const wildPath = path.join(__dirname, '../js/data/creatures/WildData.js');
const asgardRestoredData = `
    {
        id: "snake_world_jormungandr",
        name: "요르문간드",
        rarity: "UR",
        world: "ASGARD",
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_snake_world_jormungandr.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_snake_world_jormungandr.png",
            "joy": "images/creatures/asgard/creature_snake_world_jormungandr_joy.png",
            "sad": "images/creatures/asgard/creature_snake_world_jormungandr_sad.png",
            "angry": "images/creatures/asgard/creature_snake_world_jormungandr_angry.png",
            "skill": "images/creatures/asgard/creature_snake_world_jormungandr_skill.png",
            "gallery": {
                "lv1": "images/creatures/asgard/creature_snake_world_jormungandr_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_snake_world_jormungandr_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_snake_world_jormungandr_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, blue archive style, nikke style, full body, jormungandr, snake girl, long green hair, snake eyes, split tongue, wearing revealing scale armor, Ouroboros symbol",
            "idle": "standing pose, confident, winding tail around legs, neutral expression",
            "gallery_lv1": "anime, blue archive style, nikke style, full body, jormungandr, snake girl, long green hair, closed eyes, sleeping pose, lying on coiled giant snake tail, comfortable, peaceful expression, wearing loose white sheer dress, see-through",
            "gallery_lv2": "anime, blue archive style, nikke style, full body, jormungandr, snake girl, long green hair, glowing vertical pupils, split tongue, coiling around stone pillar, teasing pose",
            "gallery_lv3": "anime, blue archive style, nikke style, full body, solo, jormungandr, snake girl, long green hair, snake eyes, heart shaped pupils, wearing white silk sheet loosely draped, tangled in green snake tail, lying on bed, heavy sweat, extremely deep blush"
        },
        lore: {
            "title": "세계의 뱀",
            "story": "세상을 휘감고 자신의 꼬리를 물고 있는 거대한 뱀 요르문간드. 미드가르드를 둘러싸고 있으며, 그녀가 움직이면 세상이 흔들린다고 한다. 평소에는 인간 소녀의 모습을 하고 있지만, 그 본성은 파괴적이고 유혹적이다.",
            "personality": "Seductive & Dangerous"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." },
        synergy: { ally: [], rival: ["god_thor"] }
    },
    {
        id: "goat_lightning",
        name: "천둥 염소",
        rarity: "Rare",
        world: "ASGARD",
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_goat_lightning.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_goat_lightning.png",
            "joy": "images/creatures/asgard/creature_goat_lightning.png",
            "sad": "images/creatures/asgard/creature_goat_lightning.png",
            "angry": "images/creatures/asgard/creature_goat_lightning.png",
            "skill": "images/creatures/asgard/creature_goat_lightning.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 천둥 염소",
            "idle": "standing"
        },
        lore: {
            title: "탕그리스니르의 후손",
            story: "토르의 전차를 끄는 염소들의 후손입니다. 발굽을 구르면 천둥소리가 나고, 죽어도 뼈만 남으면 다시 부활할 수 있다고 전해집니다.",
            personality: "Stubborn"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["메헤헤헤!", "풀 뜯어 먹을 거야.", "고집 부릴 거야!"],
            interaction: ["밀지 마! 메헤헤!", "뿔로 들이받는다?", "머리 박치기!"],
            gift: ["종이? 냠냠.", "맛있는 건 다 내 거야.", "메헤헤, 고마워."],
            special: ["천둥 발굽!", "우르릉 쾅쾅!", "메헤헤헤헤!!!"]
        },
        lines: { normal: "토르 님은 너무 무거워.", touch_head: "뿔 잡으면 혼나!", touch_chest: "털이 북슬북슬하지?", touch_legs: "발굽 소리 좀 들어봐.", touch_special: "난 죽어도 뼈만 있으면 다시 살아나!" }
    },
    {
        id: "ice_spirit_small",
        name: "작은 얼음 정령",
        rarity: "Normal",
        world: "ASGARD",
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_ice_spirit_small.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_ice_spirit_small.png",
            "joy": "images/creatures/asgard/creature_ice_spirit_small.png",
            "sad": "images/creatures/asgard/creature_ice_spirit_small.png",
            "angry": "images/creatures/asgard/creature_ice_spirit_small.png",
            "skill": "images/creatures/asgard/creature_ice_spirit_small.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 작은 얼음 정령",
            "idle": "standing"
        },
        lore: {
            title: "작은 서리 요정",
            story: "눈송이 속에 숨어 사는 작은 요정입니다. 장난치는 것을 좋아하여 사람들의 코끝을 얼리거나 길을 미끄럽게 만듭니다.",
            personality: "Playful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["아야! 차가워!", "눈싸움 할래?", "꽁꽁 얼어라~"],
            interaction: ["에취! 감기 걸릴걸?", "미끌미끌~ 조심해!", "손 시려!"],
            gift: ["아이스크림 좋아!", "차가운 거면 다 좋아.", "녹지 않게 해줘."],
            special: ["눈보라 슝슝!", "다 얼려버릴 거야!", "화이트 크리스마스!"]
        },
        lines: { normal: "난 녹으면 사라져버려.", touch_head: "머리에 눈이 쌓였네?", touch_chest: "심장은 얼음 조각이야.", touch_legs: "발자국도 안 남는다구.", touch_special: "나랑 같이 눈사람 만들자!" }
    },
    {
        id: "fenrir_kin",
        name: "펜리르의 권속",
        rarity: "Rare",
        world: "ASGARD",
        elements: ["Ice", "Beast"],
        baseStr: 35, baseInt: 15,
        image: "images/creatures/wild/creature_wolf_dire.png",
        sprites: {
            "idle": "images/creatures/wild/creature_wolf_dire.png",
            "joy": "images/creatures/wild/creature_wolf_dire_joy.png",
            "sad": "images/creatures/wild/creature_wolf_dire_sad.png",
            "angry": "images/creatures/wild/creature_wolf_dire_angry.png",
            "skill": "images/creatures/wild/creature_wolf_dire_skill.png",
            "victory": "images/creatures/wild/creature_wolf_dire_victory.png",
            "defeat": "images/creatures/wild/creature_wolf_dire_defeat.png",
            "gallery": { "lv1": "images/creatures/wild/creature_wolf_dire_gallery_lv1.png" }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, fenrir kin, huge wolf, snowy north, glowing eyes, fierce",
            "idle": "standing pose, confident, growling",
            "gallery_lv1": "resting in snow, loyal look"
        },
        lore: {
            "title": "종말의 전조",
            "story": "펜리르의 피를 이어받은 거대한 늑대. 라그나로크 때 신들을 사냥하기 위해 무리를 짓고 있다. 그 울음소리는 가장 용감한 전사조차 공포에 떨게 한다.",
            "personality": "Savage & Loyal"
        },
        relationships: { likes: ["wolf_fenrir"], dislikes: ["valkyrie"], rival: null },
        touchLines: {
            idle: ["크르릉... 먹이 냄새가 난다.", "대장 펜리르 님을 위하여!", "겨울이 오면 우리는 강해진다."],
            interaction: ["가까이 오지 마라.", "내 이빨은 강철도 씹는다.", "으르릉!"],
            gift: ["고기인가? 합격이다.", "피 냄새... 좋아.", "이걸 바치고 목숨을 구걸하는 거냐?"],
            special: ["물어뜯기!", "얼음 송곳니!", "무리의 습격!"]
        },
        lines: { normal: "우리는 끝내 신들을 삼킬 것이다.", touch_head: "머리를 숙이는 건 대장님 앞에서뿐이다.", touch_chest: "심장은 사냥의 열기로 뜨겁다.", touch_legs: "설원을 달리는 건 내게 놀이지.", touch_special: "나와 함께 신들의 황혼을 보겠나?" }
    }
`;

const wildMissingSSRs = `
    ,
    {
        id: "beast_behemoth",
        name: "대지의 패왕 베히모스",
        rarity: "SSR",
        world: "WILD",
        elements: ["Earth"],
        baseStr: 90, baseInt: 10,
        image: "images/creatures/wild/creature_beast_behemoth.png",
        sprites: {
            idle: "images/creatures/wild/creature_beast_behemoth.png",
            joy: "images/creatures/wild/creature_beast_behemoth_joy.png",
            sad: "images/creatures/wild/creature_beast_behemoth_sad.png",
            angry: "images/creatures/wild/creature_beast_behemoth_angry.png",
            skill: "images/creatures/wild/creature_beast_behemoth_skill.png",
            gallery: {}
        },
        prompts: {
            base: "anime style, 대지의 패왕 베히모스, gigantic beast",
            idle: "standing"
        },
        lore: {
            title: "대지의 기둥",
            story: "대지를 지탱하는 거대한 짐승. 그가 걸음을 옮길 때마다 지각 변동이 일어납니다.",
            personality: "Stoic"
        },
        relationships: { likes: [], dislikes: ["beast_leviathan"], rival: null },
        touchLines: { idle: ["쿵..."], interaction: ["!"], gift: ["..."], special: ["크아앙!"] },
        lines: { normal: "산보다 거대하다." }
    },
    {
        id: "creator_gaia_wild",
        name: "대지의 어머니 가이아 (Wild)",
        rarity: "SSR",
        world: "WILD",
        elements: ["Earth", "Nature"],
        baseStr: 30, baseInt: 80,
        image: "images/creatures/olympus/creature_god_gaia.png",
        sprites: {
            idle: "images/creatures/olympus/creature_god_gaia.png",
            joy: "images/creatures/olympus/creature_god_gaia_joy.png",
            sad: "images/creatures/olympus/creature_god_gaia_sad.png",
            angry: "images/creatures/olympus/creature_god_gaia_angry.png",
            skill: "images/creatures/olympus/creature_god_gaia_skill.png",
            gallery: {}
        },
        prompts: {
            base: "anime style, 대지의 어머니 가이아",
            idle: "standing"
        },
        lore: {
            title: "생명의 요람",
            story: "모든 생명체의 어머니. 야생의 땅에서도 그녀의 숨결은 숲을 이루고 강을 흐르게 합니다.",
            personality: "Motherly"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["모든 것은 흙으로..."], interaction: ["다정하구나."], gift: ["꽃이구나."], special: ["자라나라!"] },
        lines: { normal: "나는 모든 것의 시작이다." }
    }
];
`;

try {
    // 1. Repair Asgard
    console.log('Repairing AsgardData.js...');
    let asgard = fs.readFileSync(asgardPath, 'utf8');

    // Find the botched block:
    // It's after `id: "frost_giant_warrior"`
    const warriorIdx = asgard.indexOf('id: "frost_giant_warrior"');
    if (warriorIdx === -1) throw new Error("Could not find frost_giant_warrior");

    // Find closing brace of frost_giant_warrior
    const warriorClose = asgard.indexOf('}', warriorIdx + 200); // approximate
    // Search for next creature start: `id: "ice_nymph"`
    const nymphIdx = asgard.indexOf('id: "ice_nymph"');
    if (nymphIdx === -1) throw new Error("Could not find ice_nymph");

    // Find opening brace of ice_nymph (searching back from id)
    const nymphOpen = asgard.lastIndexOf('{', nymphIdx);

    // We want to replace everything between warriorClose+1 (comma) and nymphOpen (exclusive), OR
    // just ensure we connect them correctly with the new block.
    // warriorClose is '}'. The next char should be ',' or we need to add one.
    // nymphOpen is '{'.

    // Verification: print the segment we are replacing
    // console.log("Replacing segment:", asgard.substring(warriorClose + 1, nymphOpen));

    const prefix = asgard.substring(0, warriorClose + 1);
    const suffix = asgard.substring(nymphOpen);

    // Check if we need comma
    const newAsgard = prefix + ',' + asgardRestoredData + ',' + suffix;
    // Note: asgardRestoredData blocks end with '}', so we need ',' before next block.
    // But asgardRestoredData has comma at end of fenrir_kin? No.
    // I added comma in replace_file_content above ?? No, look at `lines: { ... } }`. No comma.
    // So `+ ',' + suffix` is correct.

    fs.writeFileSync(asgardPath, newAsgard, 'utf8');
    console.log('AsgardData.js repaired.');

    // 2. Append Wild SSRs
    console.log('Appending Wild SSRs...');
    let wild = fs.readFileSync(wildPath, 'utf8');
    const lastBracket = wild.lastIndexOf('];');
    if (lastBracket !== -1) {
        let cleanWild = wild.substring(0, lastBracket);
        cleanWild = cleanWild.trim();
        // Remove trailing comma if any (redundant check)

        const finalWild = cleanWild + wildMissingSSRs;
        fs.writeFileSync(wildPath, finalWild, 'utf8');
        console.log('WildData.js appended.');
    } else {
        console.log('WildData.js has no ]; ?');
    }

} catch (e) {
    console.error(e);
}

