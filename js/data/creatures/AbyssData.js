import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const ABYSS_CREATURES = [
    {
        id: "void_beast",
        name: "공허의 야수",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/void_beast.png",
        sprites: {
            "idle": "images/void_beast.png",
            "joy": "images/void_beast_joy.png",
            "sad": "images/void_beast_sad.png",
            "angry": "images/void_beast_angry.png",
            "skill": "images/void_beast_skill.png",
            "victory": "images/void_beast_victory.png",
            "defeat": "images/void_beast_defeat.png",
            "gallery": {
            "lv1": "images/void_beast_gallery_lv1.png",
            "lv2": "images/void_beast_gallery_lv2.png",
            "lv3": "images/void_beast_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 공허의 야수",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 공허의 야수, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 공허의 야수, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 공허의 야수, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 공허의 야수은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "shadow_assassin",
        name: "그림자 암살자",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/shadow_assassin.png",
        sprites: {
            "idle": "images/shadow_assassin.png",
            "joy": "images/shadow_assassin_joy.png",
            "sad": "images/shadow_assassin_sad.png",
            "angry": "images/shadow_assassin_angry.png",
            "skill": "images/shadow_assassin_skill.png",
            "victory": "images/shadow_assassin_victory.png",
            "defeat": "images/shadow_assassin_defeat.png",
            "gallery": {
            "lv1": "images/shadow_assassin_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 그림자 암살자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 그림자 암살자, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 그림자 암살자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "gargoyle_stone",
        name: "석상 가고일",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/gargoyle_stone.png",
        sprites: {
            "idle": "images/gargoyle_stone.png",
            "joy": "images/gargoyle_stone_joy.png",
            "sad": "images/gargoyle_stone_sad.png",
            "angry": "images/gargoyle_stone_angry.png",
            "skill": "images/gargoyle_stone_skill.png",
            "victory": "images/gargoyle_stone_victory.png",
            "defeat": "images/gargoyle_stone_defeat.png",
            "gallery": {
            "lv1": "images/gargoyle_stone_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 석상 가고일",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 석상 가고일, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 석상 가고일은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "eye_of_chaos",
        name: "혼돈의 눈",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/eye_of_chaos.png",
        sprites: {
            "idle": "images/eye_of_chaos.png",
            "joy": "images/eye_of_chaos_joy.png",
            "sad": "images/eye_of_chaos_sad.png",
            "angry": "images/eye_of_chaos_angry.png",
            "skill": "images/eye_of_chaos_skill.png",
            "victory": "images/eye_of_chaos_victory.png",
            "defeat": "images/eye_of_chaos_defeat.png",
            "gallery": {
            "lv1": "images/eye_of_chaos_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 혼돈의 눈",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 혼돈의 눈, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 혼돈의 눈은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "abyss_stalker",
        name: "심연의 추적자",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/abyss_stalker.png",
        sprites: {
            "idle": "images/abyss_stalker.png",
            "joy": "images/abyss_stalker_joy.png",
            "sad": "images/abyss_stalker_sad.png",
            "angry": "images/abyss_stalker_angry.png",
            "skill": "images/abyss_stalker_skill.png",
            "victory": "images/abyss_stalker_victory.png",
            "defeat": "images/abyss_stalker_defeat.png",
            "gallery": {
            "lv1": "images/abyss_stalker_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 심연의 추적자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 심연의 추적자, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 심연의 추적자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dark_matter_slime",
        name: "암흑 물질 슬라임",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/dark_matter_slime.png",
        sprites: {
            "idle": "images/dark_matter_slime.png",
            "joy": "images/dark_matter_slime_joy.png",
            "sad": "images/dark_matter_slime_sad.png",
            "angry": "images/dark_matter_slime_angry.png",
            "skill": "images/dark_matter_slime_skill.png",
            "victory": "images/dark_matter_slime_victory.png",
            "defeat": "images/dark_matter_slime_defeat.png",
            "gallery": {
            "lv1": "images/dark_matter_slime_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 암흑 물질 슬라임",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 암흑 물질 슬라임, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 암흑 물질 슬라임은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_walker",
        name: "공허의 보행자",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/void_walker.png",
        sprites: {
            "idle": "images/void_walker.png",
            "joy": "images/void_walker_joy.png",
            "sad": "images/void_walker_sad.png",
            "angry": "images/void_walker_angry.png",
            "skill": "images/void_walker_skill.png",
            "victory": "images/void_walker_victory.png",
            "defeat": "images/void_walker_defeat.png",
            "gallery": {
            "lv1": "images/void_walker_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 공허의 보행자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 공허의 보행자, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 공허의 보행자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "abyss_leech",
        name: "심연의 거머리",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/abyss_leech.png",
        sprites: {
            "idle": "images/abyss_leech.png",
            "joy": "images/abyss_leech_joy.png",
            "sad": "images/abyss_leech_sad.png",
            "angry": "images/abyss_leech_angry.png",
            "skill": "images/abyss_leech_skill.png",
            "victory": "images/abyss_leech_victory.png",
            "defeat": "images/abyss_leech_defeat.png",
            "gallery": {
            "lv1": "images/abyss_leech_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 심연의 거머리",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 심연의 거머리, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 심연의 거머리은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_emperor",
        name: "공허의 여제 에레보스",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/temp/creature_void_emperor.png",
        sprites: {
            "idle": "images/creature_void_emperor.png",
            "joy": "images/creature_void_emperor_joy.png",
            "sad": "images/creature_void_emperor_sad.png",
            "angry": "images/creature_void_emperor_angry.png",
            "skill": "images/creature_void_emperor_skill.png",
            "victory": "images/creature_void_emperor_victory.png",
            "defeat": "images/creature_void_emperor_defeat.png",
            "gallery": {
            "lv1": "images/creature_void_emperor_gallery_lv1.png",
            "lv2": "images/creature_void_emperor_gallery_lv2.png",
            "lv3": "images/creature_void_emperor_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 공허의 여제 에레보스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 공허의 여제 에레보스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 공허의 여제 에레보스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 공허의 여제 에레보스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 공허의 여제 에레보스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dragon_chaos",
        name: "혼돈의 용희 티아마트",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_dragon_chaos.png",
        sprites: {
            "idle": "images/creature_dragon_chaos.png",
            "joy": "images/creature_dragon_chaos_joy.png",
            "sad": "images/creature_dragon_chaos_sad.png",
            "angry": "images/creature_dragon_chaos_angry.png",
            "skill": "images/creature_dragon_chaos_skill.png",
            "victory": "images/creature_dragon_chaos_victory.png",
            "defeat": "images/creature_dragon_chaos_defeat.png",
            "gallery": {
            "lv1": "images/creature_dragon_chaos_gallery_lv1.png",
            "lv2": "images/creature_dragon_chaos_gallery_lv2.png",
            "lv3": "images/creature_dragon_chaos_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 혼돈의 용희 티아마트",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 혼돈의 용희 티아마트, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 혼돈의 용희 티아마트, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 혼돈의 용희 티아마트, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 혼돈의 용희 티아마트은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "kraken_worldstar",
        name: "월드스타 루루",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_kraken_worldstar.png",
        sprites: {
            "idle": "images/creature_kraken_worldstar.png",
            "joy": "images/creature_kraken_worldstar_joy.png",
            "sad": "images/creature_kraken_worldstar_sad.png",
            "angry": "images/creature_kraken_worldstar_angry.png",
            "skill": "images/creature_kraken_worldstar_skill.png",
            "victory": "images/creature_kraken_worldstar_victory.png",
            "defeat": "images/creature_kraken_worldstar_defeat.png",
            "gallery": {
            "lv1": "images/creature_kraken_worldstar_gallery_lv1.png",
            "lv2": "images/creature_kraken_worldstar_gallery_lv2.png",
            "lv3": "images/creature_kraken_worldstar_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 월드스타 루루",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 월드스타 루루, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 월드스타 루루, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 월드스타 루루, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 월드스타 루루은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_cthulhu",
        name: "별의 지배자 크툴루",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_god_cthulhu.png",
        sprites: {
            "idle": "images/creature_god_cthulhu.png",
            "joy": "images/creature_god_cthulhu_joy.png",
            "sad": "images/creature_god_cthulhu_sad.png",
            "angry": "images/creature_god_cthulhu_angry.png",
            "skill": "images/creature_god_cthulhu_skill.png",
            "victory": "images/creature_god_cthulhu_victory.png",
            "defeat": "images/creature_god_cthulhu_defeat.png",
            "gallery": {
            "lv1": "images/creature_god_cthulhu_gallery_lv1.png",
            "lv2": "images/creature_god_cthulhu_gallery_lv2.png",
            "lv3": "images/creature_god_cthulhu_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 별의 지배자 크툴루",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 별의 지배자 크툴루, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 별의 지배자 크툴루, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 별의 지배자 크툴루, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 별의 지배자 크툴루은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_nyarlathotep",
        name: "기어다니는 혼돈 니알라토텝",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_god_nyarlathotep.png",
        sprites: {
            "idle": "images/creature_god_nyarlathotep.png",
            "joy": "images/creature_god_nyarlathotep_joy.png",
            "sad": "images/creature_god_nyarlathotep_sad.png",
            "angry": "images/creature_god_nyarlathotep_angry.png",
            "skill": "images/creature_god_nyarlathotep_skill.png",
            "victory": "images/creature_god_nyarlathotep_victory.png",
            "defeat": "images/creature_god_nyarlathotep_defeat.png",
            "gallery": {
            "lv1": "images/creature_god_nyarlathotep_gallery_lv1.png",
            "lv2": "images/creature_god_nyarlathotep_gallery_lv2.png",
            "lv3": "images/creature_god_nyarlathotep_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 기어다니는 혼돈 니알라토텝",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 기어다니는 혼돈 니알라토텝, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 기어다니는 혼돈 니알라토텝, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 기어다니는 혼돈 니알라토텝, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 기어다니는 혼돈 니알라토텝은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "demon_king",
        name: "마왕 바알",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_demon_king.png",
        sprites: {
            "idle": "images/creature_demon_king.png",
            "joy": "images/creature_demon_king_joy.png",
            "sad": "images/creature_demon_king_sad.png",
            "angry": "images/creature_demon_king_angry.png",
            "skill": "images/creature_demon_king_skill.png",
            "victory": "images/creature_demon_king_victory.png",
            "defeat": "images/creature_demon_king_defeat.png",
            "gallery": {
            "lv1": "images/creature_demon_king_gallery_lv1.png",
            "lv2": "images/creature_demon_king_gallery_lv2.png",
            "lv3": "images/creature_demon_king_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 마왕 바알",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 마왕 바알, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 마왕 바알, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 마왕 바알, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 마왕 바알은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_shub",
        name: "만 마리 새끼를 품은 숲의 염소",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_god_shub.png",
        sprites: {
            "idle": "images/creature_god_shub.png",
            "joy": "images/creature_god_shub_joy.png",
            "sad": "images/creature_god_shub_sad.png",
            "angry": "images/creature_god_shub_angry.png",
            "skill": "images/creature_god_shub_skill.png",
            "victory": "images/creature_god_shub_victory.png",
            "defeat": "images/creature_god_shub_defeat.png",
            "gallery": {
            "lv1": "images/creature_god_shub_gallery_lv1.png",
            "lv2": "images/creature_god_shub_gallery_lv2.png",
            "lv3": "images/creature_god_shub_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 만 마리 새끼를 품은 숲의 염소",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 만 마리 새끼를 품은 숲의 염소, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 만 마리 새끼를 품은 숲의 염소, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 만 마리 새끼를 품은 숲의 염소, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 만 마리 새끼를 품은 숲의 염소은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_hastur",
        name: "황색 옷의 왕 하스터",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/god_hastur.png",
        sprites: {
            "idle": "images/god_hastur.png",
            "joy": "images/god_hastur_joy.png",
            "sad": "images/god_hastur_sad.png",
            "angry": "images/god_hastur_angry.png",
            "skill": "images/god_hastur_skill.png",
            "victory": "images/god_hastur_victory.png",
            "defeat": "images/god_hastur_defeat.png",
            "gallery": {
            "lv1": "images/god_hastur_gallery_lv1.png",
            "lv2": "images/god_hastur_gallery_lv2.png",
            "lv3": "images/god_hastur_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 황색 옷의 왕 하스터",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 황색 옷의 왕 하스터, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 황색 옷의 왕 하스터, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 황색 옷의 왕 하스터, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 황색 옷의 왕 하스터은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "vampire_lord",
        name: "진홍의 여왕 카밀라",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_vampire_lord.png",
        sprites: {
            "idle": "images/creature_vampire_lord.png",
            "joy": "images/creature_vampire_lord_joy.png",
            "sad": "images/creature_vampire_lord_sad.png",
            "angry": "images/creature_vampire_lord_angry.png",
            "skill": "images/creature_vampire_lord_skill.png",
            "victory": "images/creature_vampire_lord_victory.png",
            "defeat": "images/creature_vampire_lord_defeat.png",
            "gallery": {
            "lv1": "images/creature_vampire_lord_gallery_lv1.png",
            "lv2": "images/creature_vampire_lord_gallery_lv2.png",
            "lv3": "images/creature_vampire_lord_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 진홍의 여왕 카밀라",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 진홍의 여왕 카밀라, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 진홍의 여왕 카밀라, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 진홍의 여왕 카밀라, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 진홍의 여왕 카밀라은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_dagon",
        name: "심해의 거신 다곤",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/god_dagon.png",
        sprites: {
            "idle": "images/god_dagon.png",
            "joy": "images/god_dagon_joy.png",
            "sad": "images/god_dagon_sad.png",
            "angry": "images/god_dagon_angry.png",
            "skill": "images/god_dagon_skill.png",
            "victory": "images/god_dagon_victory.png",
            "defeat": "images/god_dagon_defeat.png",
            "gallery": {
            "lv1": "images/god_dagon_gallery_lv1.png",
            "lv2": "images/god_dagon_gallery_lv2.png",
            "lv3": "images/god_dagon_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 심해의 거신 다곤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 심해의 거신 다곤, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 심해의 거신 다곤, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 심해의 거신 다곤, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 심해의 거신 다곤은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "knight_dullahan",
        name: "머리 없는 기사 듀라한",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/knight_dullahan.png",
        sprites: {
            "idle": "images/knight_dullahan.png",
            "joy": "images/knight_dullahan_joy.png",
            "sad": "images/knight_dullahan_sad.png",
            "angry": "images/knight_dullahan_angry.png",
            "skill": "images/knight_dullahan_skill.png",
            "victory": "images/knight_dullahan_victory.png",
            "defeat": "images/knight_dullahan_defeat.png",
            "gallery": {
            "lv1": "images/knight_dullahan_gallery_lv1.png",
            "lv2": "images/knight_dullahan_gallery_lv2.png",
            "lv3": "images/knight_dullahan_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 머리 없는 기사 듀라한",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 머리 없는 기사 듀라한, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 머리 없는 기사 듀라한, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 머리 없는 기사 듀라한, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 머리 없는 기사 듀라한은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "knight_skeleton",
        name: "스켈레톤 나이트",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_knight_skeleton.png",
        sprites: {
            "idle": "images/creature_knight_skeleton.png",
            "joy": "images/creature_knight_skeleton_joy.png",
            "sad": "images/creature_knight_skeleton_sad.png",
            "angry": "images/creature_knight_skeleton_angry.png",
            "skill": "images/creature_knight_skeleton_skill.png",
            "victory": "images/creature_knight_skeleton_victory.png",
            "defeat": "images/creature_knight_skeleton_defeat.png",
            "gallery": {
            "lv1": "images/creature_knight_skeleton_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 스켈레톤 나이트",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 스켈레톤 나이트, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 스켈레톤 나이트은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mimic_box",
        name: "탐욕의 상자 미믹",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/mimic_box.png",
        sprites: {
            "idle": "images/mimic_box.png",
            "joy": "images/mimic_box_joy.png",
            "sad": "images/mimic_box_sad.png",
            "angry": "images/mimic_box_angry.png",
            "skill": "images/mimic_box_skill.png",
            "victory": "images/mimic_box_victory.png",
            "defeat": "images/mimic_box_defeat.png",
            "gallery": {
            "lv1": "images/mimic_box_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 탐욕의 상자 미믹",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 탐욕의 상자 미믹, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 탐욕의 상자 미믹은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cursed_doll",
        name: "저주받은 인형",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/cursed_doll.png",
        sprites: {
            "idle": "images/cursed_doll.png",
            "joy": "images/cursed_doll_joy.png",
            "sad": "images/cursed_doll_sad.png",
            "angry": "images/cursed_doll_angry.png",
            "skill": "images/cursed_doll_skill.png",
            "victory": "images/cursed_doll_victory.png",
            "defeat": "images/cursed_doll_defeat.png",
            "gallery": {
            "lv1": "images/cursed_doll_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 저주받은 인형",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 저주받은 인형, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 저주받은 인형은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "eye_bat",
        name: "외눈박이 박쥐",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/eye_bat.png",
        sprites: {
            "idle": "images/eye_bat.png",
            "joy": "images/eye_bat_joy.png",
            "sad": "images/eye_bat_sad.png",
            "angry": "images/eye_bat_angry.png",
            "skill": "images/eye_bat_skill.png",
            "victory": "images/eye_bat_victory.png",
            "defeat": "images/eye_bat_defeat.png",
            "gallery": {
            "lv1": "images/eye_bat_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 외눈박이 박쥐",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 외눈박이 박쥐, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 외눈박이 박쥐은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ghost_lamp",
        name: "영혼의 등불",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/ghost_lamp.png",
        sprites: {
            "idle": "images/ghost_lamp.png",
            "joy": "images/ghost_lamp_joy.png",
            "sad": "images/ghost_lamp_sad.png",
            "angry": "images/ghost_lamp_angry.png",
            "skill": "images/ghost_lamp_skill.png",
            "victory": "images/ghost_lamp_victory.png",
            "defeat": "images/ghost_lamp_defeat.png",
            "gallery": {
            "lv1": "images/ghost_lamp_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 영혼의 등불",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 영혼의 등불, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 영혼의 등불은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "deep_one_soldier",
        name: "딥 원 전사",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/deep_one_soldier.png",
        sprites: {
            "idle": "images/deep_one_soldier.png",
            "joy": "images/deep_one_soldier_joy.png",
            "sad": "images/deep_one_soldier_sad.png",
            "angry": "images/deep_one_soldier_angry.png",
            "skill": "images/deep_one_soldier_skill.png",
            "victory": "images/deep_one_soldier_victory.png",
            "defeat": "images/deep_one_soldier_defeat.png",
            "gallery": {
            "lv1": "images/deep_one_soldier_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 딥 원 전사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 딥 원 전사, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 딥 원 전사은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "goblin_scout_new",
        name: "고블린 정찰병",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_goblin_scout_new.png",
        sprites: {
            "idle": "images/creature_goblin_scout_new.png",
            "joy": "images/creature_goblin_scout_new_joy.png",
            "sad": "images/creature_goblin_scout_new_sad.png",
            "angry": "images/creature_goblin_scout_new_angry.png",
            "skill": "images/creature_goblin_scout_new_skill.png",
            "victory": "images/creature_goblin_scout_new_victory.png",
            "defeat": "images/creature_goblin_scout_new_defeat.png",
            "gallery": {
            "lv1": "images/creature_goblin_scout_new_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 고블린 정찰병",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 고블린 정찰병, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 고블린 정찰병은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "shadow_lurker",
        name: "그림자 잠복자",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/shadow_lurker.png",
        sprites: {
            "idle": "images/shadow_lurker.png",
            "joy": "images/shadow_lurker_joy.png",
            "sad": "images/shadow_lurker_sad.png",
            "angry": "images/shadow_lurker_angry.png",
            "skill": "images/shadow_lurker_skill.png",
            "victory": "images/shadow_lurker_victory.png",
            "defeat": "images/shadow_lurker_defeat.png",
            "gallery": {
            "lv1": "images/shadow_lurker_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 그림자 잠복자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 그림자 잠복자, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 그림자 잠복자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "abyss_watcher_small",
        name: "작은 심연의 감시자",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/abyss_watcher_small.png",
        sprites: {
            "idle": "images/abyss_watcher_small.png",
            "joy": "images/abyss_watcher_small_joy.png",
            "sad": "images/abyss_watcher_small_sad.png",
            "angry": "images/abyss_watcher_small_angry.png",
            "skill": "images/abyss_watcher_small_skill.png",
            "victory": "images/abyss_watcher_small_victory.png",
            "defeat": "images/abyss_watcher_small_defeat.png",
            "gallery": {
            "lv1": "images/abyss_watcher_small_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 작은 심연의 감시자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 작은 심연의 감시자, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 작은 심연의 감시자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "screaming_root",
        name: "비명 지르는 뿌리",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/screaming_root.png",
        sprites: {
            "idle": "images/screaming_root.png",
            "joy": "images/screaming_root_joy.png",
            "sad": "images/screaming_root_sad.png",
            "angry": "images/screaming_root_angry.png",
            "skill": "images/screaming_root_skill.png",
            "victory": "images/screaming_root_victory.png",
            "defeat": "images/screaming_root_defeat.png",
            "gallery": {
            "lv1": "images/screaming_root_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 비명 지르는 뿌리",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 비명 지르는 뿌리, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 비명 지르는 뿌리은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ghoul_scavenger",
        name: "시체 먹는 구울",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/ghoul_scavenger.png",
        sprites: {
            "idle": "images/ghoul_scavenger.png",
            "joy": "images/ghoul_scavenger_joy.png",
            "sad": "images/ghoul_scavenger_sad.png",
            "angry": "images/ghoul_scavenger_angry.png",
            "skill": "images/ghoul_scavenger_skill.png",
            "victory": "images/ghoul_scavenger_victory.png",
            "defeat": "images/ghoul_scavenger_defeat.png",
            "gallery": {
            "lv1": "images/ghoul_scavenger_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 시체 먹는 구울",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 시체 먹는 구울, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 시체 먹는 구울은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_tentacle",
        name: "공허의 촉수",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/void_tentacle.png",
        sprites: {
            "idle": "images/void_tentacle.png",
            "joy": "images/void_tentacle_joy.png",
            "sad": "images/void_tentacle_sad.png",
            "angry": "images/void_tentacle_angry.png",
            "skill": "images/void_tentacle_skill.png",
            "victory": "images/void_tentacle_victory.png",
            "defeat": "images/void_tentacle_defeat.png",
            "gallery": {
            "lv1": "images/void_tentacle_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 공허의 촉수",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 공허의 촉수, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 공허의 촉수은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sludge_blob",
        name: "오염된 슬러지",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/sludge_blob.png",
        sprites: {
            "idle": "images/sludge_blob.png",
            "joy": "images/sludge_blob_joy.png",
            "sad": "images/sludge_blob_sad.png",
            "angry": "images/sludge_blob_angry.png",
            "skill": "images/sludge_blob_skill.png",
            "victory": "images/sludge_blob_victory.png",
            "defeat": "images/sludge_blob_defeat.png",
            "gallery": {
            "lv1": "images/sludge_blob_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 오염된 슬러지",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 오염된 슬러지, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 오염된 슬러지은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "bone_fragment_spirit",
        name: "뼈 조각 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/bone_fragment_spirit.png",
        sprites: {
            "idle": "images/bone_fragment_spirit.png",
            "joy": "images/bone_fragment_spirit_joy.png",
            "sad": "images/bone_fragment_spirit_sad.png",
            "angry": "images/bone_fragment_spirit_angry.png",
            "skill": "images/bone_fragment_spirit_skill.png",
            "victory": "images/bone_fragment_spirit_victory.png",
            "defeat": "images/bone_fragment_spirit_defeat.png",
            "gallery": {
            "lv1": "images/bone_fragment_spirit_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 뼈 조각 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 뼈 조각 정령, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 뼈 조각 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "whispering_skull",
        name: "속삭이는 해골",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/whispering_skull.png",
        sprites: {
            "idle": "images/whispering_skull.png",
            "joy": "images/whispering_skull_joy.png",
            "sad": "images/whispering_skull_sad.png",
            "angry": "images/whispering_skull_angry.png",
            "skill": "images/whispering_skull_skill.png",
            "victory": "images/whispering_skull_victory.png",
            "defeat": "images/whispering_skull_defeat.png",
            "gallery": {
            "lv1": "images/whispering_skull_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 속삭이는 해골",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 속삭이는 해골, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 속삭이는 해골은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_larva",
        name: "공허의 유충",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/void_larva.png",
        sprites: {
            "idle": "images/void_larva.png",
            "joy": "images/void_larva_joy.png",
            "sad": "images/void_larva_sad.png",
            "angry": "images/void_larva_angry.png",
            "skill": "images/void_larva_skill.png",
            "victory": "images/void_larva_victory.png",
            "defeat": "images/void_larva_defeat.png",
            "gallery": {
            "lv1": "images/void_larva_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 공허의 유충",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 공허의 유충, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 공허의 유충은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dark_puddles",
        name: "검은 물웅덩이",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/dark_puddles.png",
        sprites: {
            "idle": "images/dark_puddles.png",
            "joy": "images/dark_puddles_joy.png",
            "sad": "images/dark_puddles_sad.png",
            "angry": "images/dark_puddles_angry.png",
            "skill": "images/dark_puddles_skill.png",
            "victory": "images/dark_puddles_victory.png",
            "defeat": "images/dark_puddles_defeat.png",
            "gallery": {
            "lv1": "images/dark_puddles_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 검은 물웅덩이",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 검은 물웅덩이, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 검은 물웅덩이은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_moth_small",
        name: "작은 공허 나방",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/void_moth_small.png",
        sprites: {
            "idle": "images/void_moth_small.png",
            "joy": "images/void_moth_small_joy.png",
            "sad": "images/void_moth_small_sad.png",
            "angry": "images/void_moth_small_angry.png",
            "skill": "images/void_moth_small_skill.png",
            "victory": "images/void_moth_small_victory.png",
            "defeat": "images/void_moth_small_defeat.png",
            "gallery": {
            "lv1": "images/void_moth_small_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 작은 공허 나방",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 작은 공허 나방, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 작은 공허 나방은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ink_squid_abyss",
        name: "심연 먹물 오징어",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/ink_squid_abyss.png",
        sprites: {
            "idle": "images/ink_squid_abyss.png",
            "joy": "images/ink_squid_abyss_joy.png",
            "sad": "images/ink_squid_abyss_sad.png",
            "angry": "images/ink_squid_abyss_angry.png",
            "skill": "images/ink_squid_abyss_skill.png",
            "victory": "images/ink_squid_abyss_victory.png",
            "defeat": "images/ink_squid_abyss_defeat.png",
            "gallery": {
            "lv1": "images/ink_squid_abyss_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 심연 먹물 오징어",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 심연 먹물 오징어, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 심연 먹물 오징어은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    }
];