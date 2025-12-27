import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const OLYMPUS_CREATURES = [
    {
        id: "centaur_scout",
        name: "켄타우로스 정찰병",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/centaur_scout.png",
        sprites: {
            "idle": "images/centaur_scout.png",
            "joy": "images/centaur_scout_joy.png",
            "sad": "images/centaur_scout_sad.png",
            "angry": "images/centaur_scout_angry.png",
            "skill": "images/centaur_scout_skill.png",
            "victory": "images/centaur_scout_victory.png",
            "defeat": "images/centaur_scout_defeat.png",
            "gallery": {
            "lv1": "images/centaur_scout_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 켄타우로스 정찰병",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 켄타우로스 정찰병, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 켄타우로스 정찰병은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_zeus",
        name: "천둥의 신 제우스",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_god_zeus.jpg",
        sprites: {
            "idle": "images/creature_god_zeus.jpg",
            "joy": "images/creature_god_zeus.jpg",
            "sad": "images/creature_god_zeus.jpg",
            "angry": "images/creature_god_zeus.jpg",
            "skill": "images/creature_god_zeus.jpg",
            "victory": "images/creature_god_zeus.jpg",
            "defeat": "images/creature_god_zeus.jpg",
            "gallery": {
            "lv1": "images/creature_god_zeus.jpg",
            "lv2": "images/creature_god_zeus.jpg",
            "lv3": "images/creature_god_zeus.jpg"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 천둥의 신 제우스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 천둥의 신 제우스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 천둥의 신 제우스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 천둥의 신 제우스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 천둥의 신 제우스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "titan_kronos_shade",
        name: "크로노스의 그림자",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/titan_kronos_shade.png",
        sprites: {
            "idle": "images/titan_kronos_shade.png",
            "joy": "images/titan_kronos_shade_joy.png",
            "sad": "images/titan_kronos_shade_sad.png",
            "angry": "images/titan_kronos_shade_angry.png",
            "skill": "images/titan_kronos_shade_skill.png",
            "victory": "images/titan_kronos_shade_victory.png",
            "defeat": "images/titan_kronos_shade_defeat.png",
            "gallery": {
            "lv1": "images/titan_kronos_shade_gallery_lv1.png",
            "lv2": "images/titan_kronos_shade_gallery_lv2.png",
            "lv3": "images/titan_kronos_shade_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 크로노스의 그림자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 크로노스의 그림자, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 크로노스의 그림자, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 크로노스의 그림자, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 크로노스의 그림자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_poseidon",
        name: "심해의 군주 포세이돈",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_god_poseidon.png",
        sprites: {
            "idle": "images/creature_god_poseidon.png",
            "joy": "images/creature_god_poseidon_joy.png",
            "sad": "images/creature_god_poseidon_sad.png",
            "angry": "images/creature_god_poseidon_angry.png",
            "skill": "images/creature_god_poseidon_skill.png",
            "victory": "images/creature_god_poseidon_victory.png",
            "defeat": "images/creature_god_poseidon_defeat.png",
            "gallery": {
            "lv1": "images/creature_god_poseidon_gallery_lv1.png",
            "lv2": "images/creature_god_poseidon_gallery_lv2.png",
            "lv3": "images/creature_god_poseidon_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 심해의 군주 포세이돈",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 심해의 군주 포세이돈, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 심해의 군주 포세이돈, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 심해의 군주 포세이돈, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 심해의 군주 포세이돈은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_hades",
        name: "지옥의 지배자 하데스",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/god_hades.png",
        sprites: {
            "idle": "images/god_hades.png",
            "joy": "images/god_hades_joy.png",
            "sad": "images/god_hades_sad.png",
            "angry": "images/god_hades_angry.png",
            "skill": "images/god_hades_skill.png",
            "victory": "images/god_hades_victory.png",
            "defeat": "images/god_hades_defeat.png",
            "gallery": {
            "lv1": "images/god_hades_gallery_lv1.png",
            "lv2": "images/god_hades_gallery_lv2.png",
            "lv3": "images/god_hades_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 지옥의 지배자 하데스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 지옥의 지배자 하데스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 지옥의 지배자 하데스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 지옥의 지배자 하데스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 지옥의 지배자 하데스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "hero_hercules",
        name: "불멸의 영웅 헤라클레스",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/hero_hercules.png",
        sprites: {
            "idle": "images/hero_hercules.png",
            "joy": "images/hero_hercules_joy.png",
            "sad": "images/hero_hercules_sad.png",
            "angry": "images/hero_hercules_angry.png",
            "skill": "images/hero_hercules_skill.png",
            "victory": "images/hero_hercules_victory.png",
            "defeat": "images/hero_hercules_defeat.png",
            "gallery": {
            "lv1": "images/hero_hercules_gallery_lv1.png",
            "lv2": "images/hero_hercules_gallery_lv2.png",
            "lv3": "images/hero_hercules_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 불멸의 영웅 헤라클레스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 불멸의 영웅 헤라클레스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 불멸의 영웅 헤라클레스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 불멸의 영웅 헤라클레스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 불멸의 영웅 헤라클레스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "titan_atlas",
        name: "거신 아틀라스",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_titan_atlas.png",
        sprites: {
            "idle": "images/creature_titan_atlas.png",
            "joy": "images/creature_titan_atlas_joy.png",
            "sad": "images/creature_titan_atlas_sad.png",
            "angry": "images/creature_titan_atlas_angry.png",
            "skill": "images/creature_titan_atlas_skill.png",
            "victory": "images/creature_titan_atlas_victory.png",
            "defeat": "images/creature_titan_atlas_defeat.png",
            "gallery": {
            "lv1": "images/creature_titan_atlas_gallery_lv1.png",
            "lv2": "images/creature_titan_atlas_gallery_lv2.png",
            "lv3": "images/creature_titan_atlas_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 거신 아틀라스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 거신 아틀라스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 거신 아틀라스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 거신 아틀라스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 거신 아틀라스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "minotaur_king",
        name: "미노타우로스 왕",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/minotaur_king.png",
        sprites: {
            "idle": "images/minotaur_king.png",
            "joy": "images/minotaur_king_joy.png",
            "sad": "images/minotaur_king_sad.png",
            "angry": "images/minotaur_king_angry.png",
            "skill": "images/minotaur_king_skill.png",
            "victory": "images/minotaur_king_victory.png",
            "defeat": "images/minotaur_king_defeat.png",
            "gallery": {
            "lv1": "images/minotaur_king_gallery_lv1.png",
            "lv2": "images/minotaur_king_gallery_lv2.png",
            "lv3": "images/minotaur_king_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 미노타우로스 왕",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 미노타우로스 왕, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 미노타우로스 왕, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 미노타우로스 왕, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 미노타우로스 왕은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cerberus_guardian",
        name: "지옥파수꾼 케르베로스",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/cerberus_guardian.png",
        sprites: {
            "idle": "images/cerberus_guardian.png",
            "joy": "images/cerberus_guardian_joy.png",
            "sad": "images/cerberus_guardian_sad.png",
            "angry": "images/cerberus_guardian_angry.png",
            "skill": "images/cerberus_guardian_skill.png",
            "victory": "images/cerberus_guardian_victory.png",
            "defeat": "images/cerberus_guardian_defeat.png",
            "gallery": {
            "lv1": "images/cerberus_guardian_gallery_lv1.png",
            "lv2": "images/cerberus_guardian_gallery_lv2.png",
            "lv3": "images/cerberus_guardian_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 지옥파수꾼 케르베로스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 지옥파수꾼 케르베로스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 지옥파수꾼 케르베로스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 지옥파수꾼 케르베로스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 지옥파수꾼 케르베로스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "hydra_lernaean",
        name: "레르나의 히드라",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/hydra_lernaean.png",
        sprites: {
            "idle": "images/hydra_lernaean.png",
            "joy": "images/hydra_lernaean_joy.png",
            "sad": "images/hydra_lernaean_sad.png",
            "angry": "images/hydra_lernaean_angry.png",
            "skill": "images/hydra_lernaean_skill.png",
            "victory": "images/hydra_lernaean_victory.png",
            "defeat": "images/hydra_lernaean_defeat.png",
            "gallery": {
            "lv1": "images/hydra_lernaean_gallery_lv1.png",
            "lv2": "images/hydra_lernaean_gallery_lv2.png",
            "lv3": "images/hydra_lernaean_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 레르나의 히드라",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 레르나의 히드라, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 레르나의 히드라, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 레르나의 히드라, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 레르나의 히드라은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "lion_nemean",
        name: "네메아의 사자",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/lion_nemean.png",
        sprites: {
            "idle": "images/lion_nemean.png",
            "joy": "images/lion_nemean_joy.png",
            "sad": "images/lion_nemean_sad.png",
            "angry": "images/lion_nemean_angry.png",
            "skill": "images/lion_nemean_skill.png",
            "victory": "images/lion_nemean_victory.png",
            "defeat": "images/lion_nemean_defeat.png",
            "gallery": {
            "lv1": "images/lion_nemean_gallery_lv1.png",
            "lv2": "images/lion_nemean_gallery_lv2.png",
            "lv3": "images/lion_nemean_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 네메아의 사자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 네메아의 사자, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 네메아의 사자, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 네메아의 사자, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 네메아의 사자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "medusa_cursed",
        name: "저주받은 미모 메두사",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/medusa_cursed.png",
        sprites: {
            "idle": "images/medusa_cursed.png",
            "joy": "images/medusa_cursed_joy.png",
            "sad": "images/medusa_cursed_sad.png",
            "angry": "images/medusa_cursed_angry.png",
            "skill": "images/medusa_cursed_skill.png",
            "victory": "images/medusa_cursed_victory.png",
            "defeat": "images/medusa_cursed_defeat.png",
            "gallery": {
            "lv1": "images/medusa_cursed_gallery_lv1.png",
            "lv2": "images/medusa_cursed_gallery_lv2.png",
            "lv3": "images/medusa_cursed_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 저주받은 미모 메두사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 저주받은 미모 메두사, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 저주받은 미모 메두사, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 저주받은 미모 메두사, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 저주받은 미모 메두사은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mage_flame",
        name: "화염 마법사",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_mage_flame.png",
        sprites: {
            "idle": "images/creature_mage_flame.png",
            "joy": "images/creature_mage_flame_joy.png",
            "sad": "images/creature_mage_flame_sad.png",
            "angry": "images/creature_mage_flame_angry.png",
            "skill": "images/creature_mage_flame_skill.png",
            "victory": "images/creature_mage_flame_victory.png",
            "defeat": "images/creature_mage_flame_defeat.png",
            "gallery": {
            "lv1": "images/creature_mage_flame_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 화염 마법사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 화염 마법사, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 화염 마법사은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_dionysus",
        name: "축제의 신 디오니소스",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/god_dionysus.png",
        sprites: {
            "idle": "images/god_dionysus.png",
            "joy": "images/god_dionysus_joy.png",
            "sad": "images/god_dionysus_sad.png",
            "angry": "images/god_dionysus_angry.png",
            "skill": "images/god_dionysus_skill.png",
            "victory": "images/god_dionysus_victory.png",
            "defeat": "images/god_dionysus_defeat.png",
            "gallery": {
            "lv1": "images/god_dionysus_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 축제의 신 디오니소스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 축제의 신 디오니소스, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 축제의 신 디오니소스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "harpy_queen",
        name: "폭풍우의 하피 퀸",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/harpy_queen.png",
        sprites: {
            "idle": "images/harpy_queen.png",
            "joy": "images/harpy_queen_joy.png",
            "sad": "images/harpy_queen_sad.png",
            "angry": "images/harpy_queen_angry.png",
            "skill": "images/harpy_queen_skill.png",
            "victory": "images/harpy_queen_victory.png",
            "defeat": "images/harpy_queen_defeat.png",
            "gallery": {
            "lv1": "images/harpy_queen_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 폭풍우의 하피 퀸",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 폭풍우의 하피 퀸, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 폭풍우의 하피 퀸은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "siren_singer",
        name: "유혹의 사이렌",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/siren_singer.png",
        sprites: {
            "idle": "images/siren_singer.png",
            "joy": "images/siren_singer_joy.png",
            "sad": "images/siren_singer_sad.png",
            "angry": "images/siren_singer_angry.png",
            "skill": "images/siren_singer_skill.png",
            "victory": "images/siren_singer_victory.png",
            "defeat": "images/siren_singer_defeat.png",
            "gallery": {
            "lv1": "images/siren_singer_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 유혹의 사이렌",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 유혹의 사이렌, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 유혹의 사이렌은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "gorgon_sister_e",
        name: "고르곤 자매 에우리알레",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/gorgon_sister_e.png",
        sprites: {
            "idle": "images/gorgon_sister_e.png",
            "joy": "images/gorgon_sister_e_joy.png",
            "sad": "images/gorgon_sister_e_sad.png",
            "angry": "images/gorgon_sister_e_angry.png",
            "skill": "images/gorgon_sister_e_skill.png",
            "victory": "images/gorgon_sister_e_victory.png",
            "defeat": "images/gorgon_sister_e_defeat.png",
            "gallery": {
            "lv1": "images/gorgon_sister_e_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 고르곤 자매 에우리알레",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 고르곤 자매 에우리알레, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 고르곤 자매 에우리알레은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "gorgon_sister_s",
        name: "고르곤 자매 스테노",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/gorgon_sister_s.png",
        sprites: {
            "idle": "images/gorgon_sister_s.png",
            "joy": "images/gorgon_sister_s_joy.png",
            "sad": "images/gorgon_sister_s_sad.png",
            "angry": "images/gorgon_sister_s_angry.png",
            "skill": "images/gorgon_sister_s_skill.png",
            "victory": "images/gorgon_sister_s_victory.png",
            "defeat": "images/gorgon_sister_s_defeat.png",
            "gallery": {
            "lv1": "images/gorgon_sister_s_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 고르곤 자매 스테노",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 고르곤 자매 스테노, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 고르곤 자매 스테노은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "muse_lyra",
        name: "악보의 뮤즈",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/muse_lyra.png",
        sprites: {
            "idle": "images/muse_lyra.png",
            "joy": "images/muse_lyra_joy.png",
            "sad": "images/muse_lyra_sad.png",
            "angry": "images/muse_lyra_angry.png",
            "skill": "images/muse_lyra_skill.png",
            "victory": "images/muse_lyra_victory.png",
            "defeat": "images/muse_lyra_defeat.png",
            "gallery": {
            "lv1": "images/muse_lyra_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 악보의 뮤즈",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 악보의 뮤즈, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 악보의 뮤즈은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "phoenix_chick_o",
        name: "베이비 피닉스",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/phoenix_chick_o.png",
        sprites: {
            "idle": "images/phoenix_chick_o.png",
            "joy": "images/phoenix_chick_o_joy.png",
            "sad": "images/phoenix_chick_o_sad.png",
            "angry": "images/phoenix_chick_o_angry.png",
            "skill": "images/phoenix_chick_o_skill.png",
            "victory": "images/phoenix_chick_o_victory.png",
            "defeat": "images/phoenix_chick_o_defeat.png",
            "gallery": {
            "lv1": "images/phoenix_chick_o_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 베이비 피닉스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 베이비 피닉스, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 베이비 피닉스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "hellhound_scout",
        name: "헬하운드 정찰개",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/hellhound_scout.png",
        sprites: {
            "idle": "images/hellhound_scout.png",
            "joy": "images/hellhound_scout_joy.png",
            "sad": "images/hellhound_scout_sad.png",
            "angry": "images/hellhound_scout_angry.png",
            "skill": "images/hellhound_scout_skill.png",
            "victory": "images/hellhound_scout_victory.png",
            "defeat": "images/hellhound_scout_defeat.png",
            "gallery": {
            "lv1": "images/hellhound_scout_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 헬하운드 정찰개",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 헬하운드 정찰개, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 헬하운드 정찰개은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "automaton_mini",
        name: "미니 오토마톤",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/automaton_mini.png",
        sprites: {
            "idle": "images/automaton_mini.png",
            "joy": "images/automaton_mini_joy.png",
            "sad": "images/automaton_mini_sad.png",
            "angry": "images/automaton_mini_angry.png",
            "skill": "images/automaton_mini_skill.png",
            "victory": "images/automaton_mini_victory.png",
            "defeat": "images/automaton_mini_defeat.png",
            "gallery": {
            "lv1": "images/automaton_mini_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 미니 오토마톤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 미니 오토마톤, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 미니 오토마톤은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "talos_fragment",
        name: "탈로스의 파편",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/talos_fragment.png",
        sprites: {
            "idle": "images/talos_fragment.png",
            "joy": "images/talos_fragment_joy.png",
            "sad": "images/talos_fragment_sad.png",
            "angry": "images/talos_fragment_angry.png",
            "skill": "images/talos_fragment_skill.png",
            "victory": "images/talos_fragment_victory.png",
            "defeat": "images/talos_fragment_defeat.png",
            "gallery": {
            "lv1": "images/talos_fragment_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 탈로스의 파편",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 탈로스의 파편, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 탈로스의 파편은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fury_hiss",
        name: "분노의 정령 퓨리",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/fury_hiss.png",
        sprites: {
            "idle": "images/fury_hiss.png",
            "joy": "images/fury_hiss_joy.png",
            "sad": "images/fury_hiss_sad.png",
            "angry": "images/fury_hiss_angry.png",
            "skill": "images/fury_hiss_skill.png",
            "victory": "images/fury_hiss_victory.png",
            "defeat": "images/fury_hiss_defeat.png",
            "gallery": {
            "lv1": "images/fury_hiss_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 분노의 정령 퓨리",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 분노의 정령 퓨리, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 분노의 정령 퓨리은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sphinx_kitten",
        name: "아기 스핑크스",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/sphinx_kitten.png",
        sprites: {
            "idle": "images/sphinx_kitten.png",
            "joy": "images/sphinx_kitten_joy.png",
            "sad": "images/sphinx_kitten_sad.png",
            "angry": "images/sphinx_kitten_angry.png",
            "skill": "images/sphinx_kitten_skill.png",
            "victory": "images/sphinx_kitten_victory.png",
            "defeat": "images/sphinx_kitten_defeat.png",
            "gallery": {
            "lv1": "images/sphinx_kitten_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 스핑크스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 스핑크스, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 아기 스핑크스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cloud_puff",
        name: "구름 솜사탕",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_cloud_puff.png",
        sprites: {
            "idle": "images/creature_cloud_puff.png",
            "joy": "images/creature_cloud_puff_joy.png",
            "sad": "images/creature_cloud_puff_sad.png",
            "angry": "images/creature_cloud_puff_angry.png",
            "skill": "images/creature_cloud_puff_skill.png",
            "victory": "images/creature_cloud_puff_victory.png",
            "defeat": "images/creature_cloud_puff_defeat.png",
            "gallery": {
            "lv1": "images/creature_cloud_puff_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 구름 솜사탕",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 구름 솜사탕, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 구름 솜사탕은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "pegasus_colt",
        name: "아기 페가수스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/pegasus_colt.png",
        sprites: {
            "idle": "images/pegasus_colt.png",
            "joy": "images/pegasus_colt_joy.png",
            "sad": "images/pegasus_colt_sad.png",
            "angry": "images/pegasus_colt_angry.png",
            "skill": "images/pegasus_colt_skill.png",
            "victory": "images/pegasus_colt_victory.png",
            "defeat": "images/pegasus_colt_defeat.png",
            "gallery": {
            "lv1": "images/pegasus_colt_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 페가수스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 페가수스, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 아기 페가수스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "satyr_young",
        name: "사티로스 견습생",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/satyr_young.png",
        sprites: {
            "idle": "images/satyr_young.png",
            "joy": "images/satyr_young_joy.png",
            "sad": "images/satyr_young_sad.png",
            "angry": "images/satyr_young_angry.png",
            "skill": "images/satyr_young_skill.png",
            "victory": "images/satyr_young_victory.png",
            "defeat": "images/satyr_young_defeat.png",
            "gallery": {
            "lv1": "images/satyr_young_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 사티로스 견습생",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 사티로스 견습생, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 사티로스 견습생은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dryad_seed",
        name: "드라이어드 씨앗",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/dryad_seed.png",
        sprites: {
            "idle": "images/dryad_seed.png",
            "joy": "images/dryad_seed_joy.png",
            "sad": "images/dryad_seed_sad.png",
            "angry": "images/dryad_seed_angry.png",
            "skill": "images/dryad_seed_skill.png",
            "victory": "images/dryad_seed_victory.png",
            "defeat": "images/dryad_seed_defeat.png",
            "gallery": {
            "lv1": "images/dryad_seed_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 드라이어드 씨앗",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 드라이어드 씨앗, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 드라이어드 씨앗은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cyclops_worker",
        name: "키클롭스 견습공",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/cyclops_worker.png",
        sprites: {
            "idle": "images/cyclops_worker.png",
            "joy": "images/cyclops_worker_joy.png",
            "sad": "images/cyclops_worker_sad.png",
            "angry": "images/cyclops_worker_angry.png",
            "skill": "images/cyclops_worker_skill.png",
            "victory": "images/cyclops_worker_victory.png",
            "defeat": "images/cyclops_worker_defeat.png",
            "gallery": {
            "lv1": "images/cyclops_worker_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 키클롭스 견습공",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 키클롭스 견습공, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 키클롭스 견습공은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "nymph_water",
        name: "샘의 님프",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/nymph_water.png",
        sprites: {
            "idle": "images/nymph_water.png",
            "joy": "images/nymph_water_joy.png",
            "sad": "images/nymph_water_sad.png",
            "angry": "images/nymph_water_angry.png",
            "skill": "images/nymph_water_skill.png",
            "victory": "images/nymph_water_victory.png",
            "defeat": "images/nymph_water_defeat.png",
            "gallery": {
            "lv1": "images/nymph_water_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 샘의 님프",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 샘의 님프, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 샘의 님프은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "griffin_chick",
        name: "아기 그리폰",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/griffin_chick.png",
        sprites: {
            "idle": "images/griffin_chick.png",
            "joy": "images/griffin_chick_joy.png",
            "sad": "images/griffin_chick_sad.png",
            "angry": "images/griffin_chick_angry.png",
            "skill": "images/griffin_chick_skill.png",
            "victory": "images/griffin_chick_victory.png",
            "defeat": "images/griffin_chick_defeat.png",
            "gallery": {
            "lv1": "images/griffin_chick_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 그리폰",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 그리폰, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 아기 그리폰은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cerberus_pup",
        name: "아기 케르베로스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/cerberus_pup.png",
        sprites: {
            "idle": "images/cerberus_pup.png",
            "joy": "images/cerberus_pup_joy.png",
            "sad": "images/cerberus_pup_sad.png",
            "angry": "images/cerberus_pup_angry.png",
            "skill": "images/cerberus_pup_skill.png",
            "victory": "images/cerberus_pup_victory.png",
            "defeat": "images/cerberus_pup_defeat.png",
            "gallery": {
            "lv1": "images/cerberus_pup_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 케르베로스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 케르베로스, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 아기 케르베로스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "minotaur_calf",
        name: "아기 미노타우로스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/minotaur_calf.png",
        sprites: {
            "idle": "images/minotaur_calf.png",
            "joy": "images/minotaur_calf_joy.png",
            "sad": "images/minotaur_calf_sad.png",
            "angry": "images/minotaur_calf_angry.png",
            "skill": "images/minotaur_calf_skill.png",
            "victory": "images/minotaur_calf_victory.png",
            "defeat": "images/minotaur_calf_defeat.png",
            "gallery": {
            "lv1": "images/minotaur_calf_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 미노타우로스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 미노타우로스, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 아기 미노타우로스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "charybdis_baby",
        name: "소형 카리브디스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/charybdis_baby.png",
        sprites: {
            "idle": "images/charybdis_baby.png",
            "joy": "images/charybdis_baby_joy.png",
            "sad": "images/charybdis_baby_sad.png",
            "angry": "images/charybdis_baby_angry.png",
            "skill": "images/charybdis_baby_skill.png",
            "victory": "images/charybdis_baby_victory.png",
            "defeat": "images/charybdis_baby_defeat.png",
            "gallery": {
            "lv1": "images/charybdis_baby_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 소형 카리브디스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 소형 카리브디스, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 소형 카리브디스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "scylla_pup",
        name: "새끼 스킬라",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/scylla_pup.png",
        sprites: {
            "idle": "images/scylla_pup.png",
            "joy": "images/scylla_pup_joy.png",
            "sad": "images/scylla_pup_sad.png",
            "angry": "images/scylla_pup_angry.png",
            "skill": "images/scylla_pup_skill.png",
            "victory": "images/scylla_pup_victory.png",
            "defeat": "images/scylla_pup_defeat.png",
            "gallery": {
            "lv1": "images/scylla_pup_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 새끼 스킬라",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 새끼 스킬라, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 새끼 스킬라은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "chimera_cub",
        name: "아기 키메라",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/chimera_cub.png",
        sprites: {
            "idle": "images/chimera_cub.png",
            "joy": "images/chimera_cub_joy.png",
            "sad": "images/chimera_cub_sad.png",
            "angry": "images/chimera_cub_angry.png",
            "skill": "images/chimera_cub_skill.png",
            "victory": "images/chimera_cub_victory.png",
            "defeat": "images/chimera_cub_defeat.png",
            "gallery": {
            "lv1": "images/chimera_cub_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 키메라",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 키메라, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "올림포스 신들의 축복을 받거나 저주를 받은 존재입니다. 아기 키메라은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    }
];