import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const WILD_CREATURES = [
    {
        id: "beast_leviathan",
        name: "심해의 재앙 레비아탄",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/beast_leviathan.png",
        sprites: {
            "idle": "images/beast_leviathan.png",
            "joy": "images/beast_leviathan_joy.png",
            "sad": "images/beast_leviathan_sad.png",
            "angry": "images/beast_leviathan_angry.png",
            "skill": "images/beast_leviathan_skill.png",
            "victory": "images/beast_leviathan_victory.png",
            "defeat": "images/beast_leviathan_defeat.png",
            "gallery": {
            "lv1": "images/beast_leviathan_gallery_lv1.png",
            "lv2": "images/beast_leviathan_gallery_lv2.png",
            "lv3": "images/beast_leviathan_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 심해의 재앙 레비아탄",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 심해의 재앙 레비아탄, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 심해의 재앙 레비아탄, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 심해의 재앙 레비아탄, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 심해의 재앙 레비아탄은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "beast_ziz",
        name: "천공의 날개 지즈",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/beast_ziz.png",
        sprites: {
            "idle": "images/beast_ziz.png",
            "joy": "images/beast_ziz_joy.png",
            "sad": "images/beast_ziz_sad.png",
            "angry": "images/beast_ziz_angry.png",
            "skill": "images/beast_ziz_skill.png",
            "victory": "images/beast_ziz_victory.png",
            "defeat": "images/beast_ziz_defeat.png",
            "gallery": {
            "lv1": "images/beast_ziz_gallery_lv1.png",
            "lv2": "images/beast_ziz_gallery_lv2.png",
            "lv3": "images/beast_ziz_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 천공의 날개 지즈",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 천공의 날개 지즈, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 천공의 날개 지즈, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 천공의 날개 지즈, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 천공의 날개 지즈은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fairy_queen_titania",
        name: "요정 여왕 티타니아",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/fairy_queen_titania.png",
        sprites: {
            "idle": "images/fairy_queen_titania.png",
            "joy": "images/fairy_queen_titania_joy.png",
            "sad": "images/fairy_queen_titania_sad.png",
            "angry": "images/fairy_queen_titania_angry.png",
            "skill": "images/fairy_queen_titania_skill.png",
            "victory": "images/fairy_queen_titania_victory.png",
            "defeat": "images/fairy_queen_titania_defeat.png",
            "gallery": {
            "lv1": "images/fairy_queen_titania_gallery_lv1.png",
            "lv2": "images/fairy_queen_titania_gallery_lv2.png",
            "lv3": "images/fairy_queen_titania_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 요정 여왕 티타니아",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 요정 여왕 티타니아, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 요정 여왕 티타니아, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 요정 여왕 티타니아, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 요정 여왕 티타니아은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "griffin_gold",
        name: "황금 그리폰",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/griffin_gold.png",
        sprites: {
            "idle": "images/griffin_gold.png",
            "joy": "images/griffin_gold_joy.png",
            "sad": "images/griffin_gold_sad.png",
            "angry": "images/griffin_gold_angry.png",
            "skill": "images/griffin_gold_skill.png",
            "victory": "images/griffin_gold_victory.png",
            "defeat": "images/griffin_gold_defeat.png",
            "gallery": {
            "lv1": "images/griffin_gold_gallery_lv1.png",
            "lv2": "images/griffin_gold_gallery_lv2.png",
            "lv3": "images/griffin_gold_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 황금 그리폰",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 황금 그리폰, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 황금 그리폰, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 황금 그리폰, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 황금 그리폰은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "turtle_ancient_wild",
        name: "만년 고대 거북",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/turtle_ancient_wild.png",
        sprites: {
            "idle": "images/turtle_ancient_wild.png",
            "joy": "images/turtle_ancient_wild_joy.png",
            "sad": "images/turtle_ancient_wild_sad.png",
            "angry": "images/turtle_ancient_wild_angry.png",
            "skill": "images/turtle_ancient_wild_skill.png",
            "victory": "images/turtle_ancient_wild_victory.png",
            "defeat": "images/turtle_ancient_wild_defeat.png",
            "gallery": {
            "lv1": "images/turtle_ancient_wild_gallery_lv1.png",
            "lv2": "images/turtle_ancient_wild_gallery_lv2.png",
            "lv3": "images/turtle_ancient_wild_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 만년 고대 거북",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 만년 고대 거북, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 만년 고대 거북, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 만년 고대 거북, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 만년 고대 거북은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dryad_queen",
        name: "드라이어드 여왕",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/dryad_queen.png",
        sprites: {
            "idle": "images/dryad_queen.png",
            "joy": "images/dryad_queen_joy.png",
            "sad": "images/dryad_queen_sad.png",
            "angry": "images/dryad_queen_angry.png",
            "skill": "images/dryad_queen_skill.png",
            "victory": "images/dryad_queen_victory.png",
            "defeat": "images/dryad_queen_defeat.png",
            "gallery": {
            "lv1": "images/dryad_queen_gallery_lv1.png",
            "lv2": "images/dryad_queen_gallery_lv2.png",
            "lv3": "images/dryad_queen_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 드라이어드 여왕",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 드라이어드 여왕, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 드라이어드 여왕, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 드라이어드 여왕, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 드라이어드 여왕은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mantis_warrior",
        name: "사마귀 무사",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/mantis_warrior.png",
        sprites: {
            "idle": "images/mantis_warrior.png",
            "joy": "images/mantis_warrior_joy.png",
            "sad": "images/mantis_warrior_sad.png",
            "angry": "images/mantis_warrior_angry.png",
            "skill": "images/mantis_warrior_skill.png",
            "victory": "images/mantis_warrior_victory.png",
            "defeat": "images/mantis_warrior_defeat.png",
            "gallery": {
            "lv1": "images/mantis_warrior_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 사마귀 무사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 사마귀 무사, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 사마귀 무사은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "orchid_mantis",
        name: "난초 사마귀",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/orchid_mantis.png",
        sprites: {
            "idle": "images/orchid_mantis.png",
            "joy": "images/orchid_mantis_joy.png",
            "sad": "images/orchid_mantis_sad.png",
            "angry": "images/orchid_mantis_angry.png",
            "skill": "images/orchid_mantis_skill.png",
            "victory": "images/orchid_mantis_victory.png",
            "defeat": "images/orchid_mantis_defeat.png",
            "gallery": {
            "lv1": "images/orchid_mantis_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 난초 사마귀",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 난초 사마귀, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 난초 사마귀은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "crystal_crab",
        name: "수정 게",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/crystal_crab.png",
        sprites: {
            "idle": "images/crystal_crab.png",
            "joy": "images/crystal_crab_joy.png",
            "sad": "images/crystal_crab_sad.png",
            "angry": "images/crystal_crab_angry.png",
            "skill": "images/crystal_crab_skill.png",
            "victory": "images/crystal_crab_victory.png",
            "defeat": "images/crystal_crab_defeat.png",
            "gallery": {
            "lv1": "images/crystal_crab_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 수정 게",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 수정 게, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 수정 게은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "electric_eel_king",
        name: "번개 장어 왕",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/electric_eel_king.png",
        sprites: {
            "idle": "images/electric_eel_king.png",
            "joy": "images/electric_eel_king_joy.png",
            "sad": "images/electric_eel_king_sad.png",
            "angry": "images/electric_eel_king_angry.png",
            "skill": "images/electric_eel_king_skill.png",
            "victory": "images/electric_eel_king_victory.png",
            "defeat": "images/electric_eel_king_defeat.png",
            "gallery": {
            "lv1": "images/electric_eel_king_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 번개 장어 왕",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 번개 장어 왕, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 번개 장어 왕은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "magma_slime_giant",
        name: "대형 마그마 슬라임",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/magma_slime_giant.png",
        sprites: {
            "idle": "images/magma_slime_giant.png",
            "joy": "images/magma_slime_giant_joy.png",
            "sad": "images/magma_slime_giant_sad.png",
            "angry": "images/magma_slime_giant_angry.png",
            "skill": "images/magma_slime_giant_skill.png",
            "victory": "images/magma_slime_giant_victory.png",
            "defeat": "images/magma_slime_giant_defeat.png",
            "gallery": {
            "lv1": "images/magma_slime_giant_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 대형 마그마 슬라임",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 대형 마그마 슬라임, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 대형 마그마 슬라임은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fossil_stone",
        name: "움직이는 화석",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/fossil_stone.png",
        sprites: {
            "idle": "images/fossil_stone.png",
            "joy": "images/fossil_stone_joy.png",
            "sad": "images/fossil_stone_sad.png",
            "angry": "images/fossil_stone_angry.png",
            "skill": "images/fossil_stone_skill.png",
            "victory": "images/fossil_stone_victory.png",
            "defeat": "images/fossil_stone_defeat.png",
            "gallery": {
            "lv1": "images/fossil_stone_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 움직이는 화석",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 움직이는 화석, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 움직이는 화석은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mist_crawler",
        name: "안개 속의 배회자",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_mist_crawler.png",
        sprites: {
            "idle": "images/mist_crawler.png",
            "joy": "images/mist_crawler_joy.png",
            "sad": "images/mist_crawler_sad.png",
            "angry": "images/mist_crawler_angry.png",
            "skill": "images/mist_crawler_skill.png",
            "victory": "images/mist_crawler_victory.png",
            "defeat": "images/mist_crawler_defeat.png",
            "gallery": {
            "lv1": "images/mist_crawler_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 안개 속의 배회자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 안개 속의 배회자, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 안개 속의 배회자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "forest_guardian",
        name: "숲의 수호자",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/forest_guardian.png",
        sprites: {
            "idle": "images/forest_guardian.png",
            "joy": "images/forest_guardian_joy.png",
            "sad": "images/forest_guardian_sad.png",
            "angry": "images/forest_guardian_angry.png",
            "skill": "images/forest_guardian_skill.png",
            "victory": "images/forest_guardian_victory.png",
            "defeat": "images/forest_guardian_defeat.png",
            "gallery": {
            "lv1": "images/forest_guardian_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 숲의 수호자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 숲의 수호자, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 숲의 수호자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sand_prowler",
        name: "모래 잠복꾼",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/sand_prowler.png",
        sprites: {
            "idle": "images/sand_prowler.png",
            "joy": "images/sand_prowler_joy.png",
            "sad": "images/sand_prowler_sad.png",
            "angry": "images/sand_prowler_angry.png",
            "skill": "images/sand_prowler_skill.png",
            "victory": "images/sand_prowler_victory.png",
            "defeat": "images/sand_prowler_defeat.png",
            "gallery": {
            "lv1": "images/sand_prowler_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 모래 잠복꾼",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 모래 잠복꾼, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 모래 잠복꾼은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "spark_mouse",
        name: "번개 생쥐",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_spark_mouse.png",
        sprites: {
            "idle": "images/spark_mouse.png",
            "joy": "images/spark_mouse_joy.png",
            "sad": "images/spark_mouse_sad.png",
            "angry": "images/spark_mouse_angry.png",
            "skill": "images/spark_mouse_skill.png",
            "victory": "images/spark_mouse_victory.png",
            "defeat": "images/spark_mouse_defeat.png",
            "gallery": {
            "lv1": "images/spark_mouse_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 번개 생쥐",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 번개 생쥐, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 번개 생쥐은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "boulder_beetle",
        name: "바위 딱정벌레",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/boulder_beetle.png",
        sprites: {
            "idle": "images/boulder_beetle.png",
            "joy": "images/boulder_beetle_joy.png",
            "sad": "images/boulder_beetle_sad.png",
            "angry": "images/boulder_beetle_angry.png",
            "skill": "images/boulder_beetle_skill.png",
            "victory": "images/boulder_beetle_victory.png",
            "defeat": "images/boulder_beetle_defeat.png",
            "gallery": {
            "lv1": "images/boulder_beetle_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 바위 딱정벌레",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 바위 딱정벌레, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 바위 딱정벌레은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "thorny_vine",
        name: "가시 덩굴",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_thorny_vine.png",
        sprites: {
            "idle": "images/thorny_vine.png",
            "joy": "images/thorny_vine_joy.png",
            "sad": "images/thorny_vine_sad.png",
            "angry": "images/thorny_vine_angry.png",
            "skill": "images/thorny_vine_skill.png",
            "victory": "images/thorny_vine_victory.png",
            "defeat": "images/thorny_vine_defeat.png",
            "gallery": {
            "lv1": "images/thorny_vine_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 가시 덩굴",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 가시 덩굴, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 가시 덩굴은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "unicorn_young",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/temp/creature_unicorn_young.png",
        sprites: {
            "idle": "images/unicorn_young.png",
            "joy": "images/unicorn_young_joy.png",
            "sad": "images/unicorn_young_sad.png",
            "angry": "images/unicorn_young_angry.png",
            "skill": "images/unicorn_young_skill.png",
            "victory": "images/unicorn_young_victory.png",
            "defeat": "images/unicorn_young_defeat.png",
            "gallery": {
            "lv1": "images/unicorn_young_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "seedling_spirit",
        name: "새싹 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/seedling_spirit.png",
        sprites: {
            "idle": "images/seedling_spirit.png",
            "joy": "images/seedling_spirit_joy.png",
            "sad": "images/seedling_spirit_sad.png",
            "angry": "images/seedling_spirit_angry.png",
            "skill": "images/seedling_spirit_skill.png",
            "victory": "images/seedling_spirit_victory.png",
            "defeat": "images/seedling_spirit_defeat.png",
            "gallery": {
            "lv1": "images/seedling_spirit_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 새싹 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 새싹 정령, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 새싹 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "caterpillar_fat",
        name: "통통한 애벌레",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/caterpillar_fat.png",
        sprites: {
            "idle": "images/caterpillar_fat.png",
            "joy": "images/caterpillar_fat_joy.png",
            "sad": "images/caterpillar_fat_sad.png",
            "angry": "images/caterpillar_fat_angry.png",
            "skill": "images/caterpillar_fat_skill.png",
            "victory": "images/caterpillar_fat_victory.png",
            "defeat": "images/caterpillar_fat_defeat.png",
            "gallery": {
            "lv1": "images/caterpillar_fat_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 통통한 애벌레",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 통통한 애벌레, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 통통한 애벌레은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "tadpole_wiggle",
        name: "꼬물거리는 올챙이",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/tadpole_wiggle.png",
        sprites: {
            "idle": "images/tadpole_wiggle.png",
            "joy": "images/tadpole_wiggle_joy.png",
            "sad": "images/tadpole_wiggle_sad.png",
            "angry": "images/tadpole_wiggle_angry.png",
            "skill": "images/tadpole_wiggle_skill.png",
            "victory": "images/tadpole_wiggle_victory.png",
            "defeat": "images/tadpole_wiggle_defeat.png",
            "gallery": {
            "lv1": "images/tadpole_wiggle_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 꼬물거리는 올챙이",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 꼬물거리는 올챙이, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 꼬물거리는 올챙이은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "leaf_insect",
        name: "나뭇잎 벌레",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/leaf_insect.png",
        sprites: {
            "idle": "images/leaf_insect.png",
            "joy": "images/leaf_insect_joy.png",
            "sad": "images/leaf_insect_sad.png",
            "angry": "images/leaf_insect_angry.png",
            "skill": "images/leaf_insect_skill.png",
            "victory": "images/leaf_insect_victory.png",
            "defeat": "images/leaf_insect_defeat.png",
            "gallery": {
            "lv1": "images/leaf_insect_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 나뭇잎 벌레",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 나뭇잎 벌레, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 나뭇잎 벌레은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "willOWisp_green",
        name: "초록 도깨비불",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/willOWisp_green.png",
        sprites: {
            "idle": "images/willOWisp_green.png",
            "joy": "images/willOWisp_green_joy.png",
            "sad": "images/willOWisp_green_sad.png",
            "angry": "images/willOWisp_green_angry.png",
            "skill": "images/willOWisp_green_skill.png",
            "victory": "images/willOWisp_green_victory.png",
            "defeat": "images/willOWisp_green_defeat.png",
            "gallery": {
            "lv1": "images/willOWisp_green_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 초록 도깨비불",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 초록 도깨비불, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 초록 도깨비불은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sun_flower_spirit",
        name: "해바라기 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/sun_flower_spirit.png",
        sprites: {
            "idle": "images/sun_flower_spirit.png",
            "joy": "images/sun_flower_spirit_joy.png",
            "sad": "images/sun_flower_spirit_sad.png",
            "angry": "images/sun_flower_spirit_angry.png",
            "skill": "images/sun_flower_spirit_skill.png",
            "victory": "images/sun_flower_spirit_victory.png",
            "defeat": "images/sun_flower_spirit_defeat.png",
            "gallery": {
            "lv1": "images/sun_flower_spirit_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 해바라기 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 해바라기 정령, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 해바라기 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "moon_flower_spirit",
        name: "달맞이꽃 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/moon_flower_spirit.png",
        sprites: {
            "idle": "images/moon_flower_spirit.png",
            "joy": "images/moon_flower_spirit_joy.png",
            "sad": "images/moon_flower_spirit_sad.png",
            "angry": "images/moon_flower_spirit_angry.png",
            "skill": "images/moon_flower_spirit_skill.png",
            "victory": "images/moon_flower_spirit_victory.png",
            "defeat": "images/moon_flower_spirit_defeat.png",
            "gallery": {
            "lv1": "images/moon_flower_spirit_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 달맞이꽃 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 달맞이꽃 정령, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 달맞이꽃 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "desert_scorpion",
        name: "사막 전갈",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/desert_scorpion.png",
        sprites: {
            "idle": "images/desert_scorpion.png",
            "joy": "images/desert_scorpion_joy.png",
            "sad": "images/desert_scorpion_sad.png",
            "angry": "images/desert_scorpion_angry.png",
            "skill": "images/desert_scorpion_skill.png",
            "victory": "images/desert_scorpion_victory.png",
            "defeat": "images/desert_scorpion_defeat.png",
            "gallery": {
            "lv1": "images/desert_scorpion_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 사막 전갈",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 사막 전갈, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 사막 전갈은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "panda_warrior",
        name: "판다 전사",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/panda_warrior.png",
        sprites: {
            "idle": "images/panda_warrior.png",
            "joy": "images/panda_warrior_joy.png",
            "sad": "images/panda_warrior_sad.png",
            "angry": "images/panda_warrior_angry.png",
            "skill": "images/panda_warrior_skill.png",
            "victory": "images/panda_warrior_victory.png",
            "defeat": "images/panda_warrior_defeat.png",
            "gallery": {
            "lv1": "images/panda_warrior_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 판다 전사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 판다 전사, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 판다 전사은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "creator_gaia",
        name: "창조주 가이아",
        rarity: RANKS.UR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_creator_gaia.png",
        sprites: {
            "idle": "images/creature_creator_gaia.png",
            "joy": "images/creature_creator_gaia_joy.png",
            "sad": "images/creature_creator_gaia_sad.png",
            "angry": "images/creature_creator_gaia_angry.png",
            "skill": "images/creature_creator_gaia_skill.png",
            "victory": "images/creature_creator_gaia_victory.png",
            "defeat": "images/creature_creator_gaia_defeat.png",
            "gallery": {
            "lv1": "images/creature_creator_gaia_gallery_lv1.png",
            "lv2": "images/creature_creator_gaia_gallery_lv2.png",
            "lv3": "images/creature_creator_gaia_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 창조주 가이아",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 창조주 가이아, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 창조주 가이아, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 창조주 가이아, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 창조주 가이아은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dragon_drake",
        name: "폭염의 패왕 이그니스",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_dragon_drake.png",
        sprites: {
            "idle": "images/creature_dragon_drake.png",
            "joy": "images/creature_dragon_drake_joy.png",
            "sad": "images/creature_dragon_drake_sad.png",
            "angry": "images/creature_dragon_drake_angry.png",
            "skill": "images/creature_dragon_drake_skill.png",
            "victory": "images/creature_dragon_drake_victory.png",
            "defeat": "images/creature_dragon_drake_defeat.png",
            "gallery": {
            "lv1": "images/creature_dragon_drake_gallery_lv1.png",
            "lv2": "images/creature_dragon_drake_gallery_lv2.png",
            "lv3": "images/creature_dragon_drake_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 폭염의 패왕 이그니스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 폭염의 패왕 이그니스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 폭염의 패왕 이그니스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 폭염의 패왕 이그니스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 폭염의 패왕 이그니스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "beast_behemoth",
        name: "대지의 짐승 베히모스",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_beast_behemoth.png",
        sprites: {
            "idle": "images/creature_beast_behemoth.png",
            "joy": "images/creature_beast_behemoth_joy.png",
            "sad": "images/creature_beast_behemoth_sad.png",
            "angry": "images/creature_beast_behemoth_angry.png",
            "skill": "images/creature_beast_behemoth_skill.png",
            "victory": "images/creature_beast_behemoth_victory.png",
            "defeat": "images/creature_beast_behemoth_defeat.png",
            "gallery": {
            "lv1": "images/creature_beast_behemoth_gallery_lv1.png",
            "lv2": "images/creature_beast_behemoth_gallery_lv2.png",
            "lv3": "images/creature_beast_behemoth_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 대지의 짐승 베히모스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 대지의 짐승 베히모스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 대지의 짐승 베히모스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 대지의 짐승 베히모스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 대지의 짐승 베히모스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "chimera",
        name: "키메라",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_chimera.png",
        sprites: {
            "idle": "images/creature_chimera.png",
            "joy": "images/creature_chimera_joy.png",
            "sad": "images/creature_chimera_sad.png",
            "angry": "images/creature_chimera_angry.png",
            "skill": "images/creature_chimera_skill.png",
            "victory": "images/creature_chimera_victory.png",
            "defeat": "images/creature_chimera_defeat.png",
            "gallery": {
            "lv1": "images/creature_chimera_gallery_lv1.png",
            "lv2": "images/creature_chimera_gallery_lv2.png",
            "lv3": "images/creature_chimera_gallery_lv3.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 키메라",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 키메라, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 키메라, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 키메라, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 키메라은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ent_ancient",
        name: "고대 엔트",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_ent_ancient.png",
        sprites: {
            "idle": "images/creature_ent_ancient.png",
            "joy": "images/creature_ent_ancient_joy.png",
            "sad": "images/creature_ent_ancient_sad.png",
            "angry": "images/creature_ent_ancient_angry.png",
            "skill": "images/creature_ent_ancient_skill.png",
            "victory": "images/creature_ent_ancient_victory.png",
            "defeat": "images/creature_ent_ancient_defeat.png",
            "gallery": {
            "lv1": "images/creature_ent_ancient_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 고대 엔트",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 고대 엔트, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 고대 엔트은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "elemental_water",
        name: "물의 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_elemental_water.png",
        sprites: {
            "idle": "images/creature_elemental_water.png",
            "joy": "images/creature_elemental_water_joy.png",
            "sad": "images/creature_elemental_water_sad.png",
            "angry": "images/creature_elemental_water_angry.png",
            "skill": "images/creature_elemental_water_skill.png",
            "victory": "images/creature_elemental_water_victory.png",
            "defeat": "images/creature_elemental_water_defeat.png",
            "gallery": {
            "lv1": "images/creature_elemental_water_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 물의 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 물의 정령, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 물의 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "wolf_dire",
        name: "다이어 울프",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_wolf_dire.png",
        sprites: {
            "idle": "images/creature_wolf_dire.png",
            "joy": "images/creature_wolf_dire_joy.png",
            "sad": "images/creature_wolf_dire_sad.png",
            "angry": "images/creature_wolf_dire_angry.png",
            "skill": "images/creature_wolf_dire_skill.png",
            "victory": "images/creature_wolf_dire_victory.png",
            "defeat": "images/creature_wolf_dire_defeat.png",
            "gallery": {
            "lv1": "images/creature_wolf_dire_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 다이어 울프",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 다이어 울프, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 다이어 울프은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "golem_mud",
        name: "진흙 골렘",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_golem_mud.png",
        sprites: {
            "idle": "images/creature_golem_mud.png",
            "joy": "images/creature_golem_mud_joy.png",
            "sad": "images/creature_golem_mud_sad.png",
            "angry": "images/creature_golem_mud_angry.png",
            "skill": "images/creature_golem_mud_skill.png",
            "victory": "images/creature_golem_mud_victory.png",
            "defeat": "images/creature_golem_mud_defeat.png",
            "gallery": {
            "lv1": "images/creature_golem_mud_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 진흙 골렘",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 진흙 골렘, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 진흙 골렘은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "magma_slime",
        name: "마그마 슬라임",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_magma_slime.png",
        sprites: {
            "idle": "images/creature_magma_slime.png",
            "joy": "images/creature_magma_slime_joy.png",
            "sad": "images/creature_magma_slime_sad.png",
            "angry": "images/creature_magma_slime_angry.png",
            "skill": "images/creature_magma_slime_skill.png",
            "victory": "images/creature_magma_slime_victory.png",
            "defeat": "images/creature_magma_slime_defeat.png",
            "gallery": {
            "lv1": "images/creature_magma_slime_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 마그마 슬라임",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 마그마 슬라임, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 마그마 슬라임은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mushroom_angry_new",
        name: "화난 버섯",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_mushroom_angry_new.png",
        sprites: {
            "idle": "images/creature_mushroom_angry_new.png",
            "joy": "images/creature_mushroom_angry_new_joy.png",
            "sad": "images/creature_mushroom_angry_new_sad.png",
            "angry": "images/creature_mushroom_angry_new_angry.png",
            "skill": "images/creature_mushroom_angry_new_skill.png",
            "victory": "images/creature_mushroom_angry_new_victory.png",
            "defeat": "images/creature_mushroom_angry_new_defeat.png",
            "gallery": {
            "lv1": "images/creature_mushroom_angry_new_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 화난 버섯",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 화난 버섯, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 화난 버섯은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fish_flying_new",
        name: "날치",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_fish_flying_new.png",
        sprites: {
            "idle": "images/creature_fish_flying_new.png",
            "joy": "images/creature_fish_flying_new_joy.png",
            "sad": "images/creature_fish_flying_new_sad.png",
            "angry": "images/creature_fish_flying_new_angry.png",
            "skill": "images/creature_fish_flying_new_skill.png",
            "victory": "images/creature_fish_flying_new_victory.png",
            "defeat": "images/creature_fish_flying_new_defeat.png",
            "gallery": {
            "lv1": "images/creature_fish_flying_new_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 날치",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 날치, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 날치은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "angel_arch",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_angel_arch.png",
        sprites: {
            "idle": "images/creature_angel_arch.png",
            "joy": "images/creature_angel_arch_joy.png",
            "sad": "images/creature_angel_arch_sad.png",
            "angry": "images/creature_angel_arch_angry.png",
            "skill": "images/creature_angel_arch_skill.png",
            "victory": "images/creature_angel_arch_victory.png",
            "defeat": "images/creature_angel_arch_defeat.png",
            "gallery": {
            "lv1": "images/creature_angel_arch_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "time_lord_chronos",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_time_lord_chronos.png",
        sprites: {
            "idle": "images/creature_time_lord_chronos.png",
            "joy": "images/creature_time_lord_chronos_joy.png",
            "sad": "images/creature_time_lord_chronos_sad.png",
            "angry": "images/creature_time_lord_chronos_angry.png",
            "skill": "images/creature_time_lord_chronos_skill.png",
            "victory": "images/creature_time_lord_chronos_victory.png",
            "defeat": "images/creature_time_lord_chronos_defeat.png",
            "gallery": {
            "lv1": "images/creature_time_lord_chronos_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_zeus_shy",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_god_zeus_shy.jpg",
        sprites: {
            "idle": "images/creature_god_zeus_shy.jpg",
            "joy": "images/creature_god_zeus_shy.jpg",
            "sad": "images/creature_god_zeus_shy.jpg",
            "angry": "images/creature_god_zeus_shy.jpg",
            "skill": "images/creature_god_zeus_shy.jpg",
            "victory": "images/creature_god_zeus_shy.jpg",
            "defeat": "images/creature_god_zeus_shy.jpg",
            "gallery": {
            "lv1": "images/creature_god_zeus_shy.jpg"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_zeus_angry",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_god_zeus_angry.jpg",
        sprites: {
            "idle": "images/creature_god_zeus_angry.jpg",
            "joy": "images/creature_god_zeus_angry.jpg",
            "sad": "images/creature_god_zeus_angry.jpg",
            "angry": "images/creature_god_zeus_angry.jpg",
            "skill": "images/creature_god_zeus_angry.jpg",
            "victory": "images/creature_god_zeus_angry.jpg",
            "defeat": "images/creature_god_zeus_angry.jpg",
            "gallery": {
            "lv1": "images/creature_god_zeus_angry.jpg"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_zeus_love",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_god_zeus_love.jpg",
        sprites: {
            "idle": "images/creature_god_zeus_love.jpg",
            "joy": "images/creature_god_zeus_love.jpg",
            "sad": "images/creature_god_zeus_love.jpg",
            "angry": "images/creature_god_zeus_love.jpg",
            "skill": "images/creature_god_zeus_love.jpg",
            "victory": "images/creature_god_zeus_love.jpg",
            "defeat": "images/creature_god_zeus_love.jpg",
            "gallery": {
            "lv1": "images/creature_god_zeus_love.jpg"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "kraken_idol",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_kraken_idol.png",
        sprites: {
            "idle": "images/creature_kraken_idol.png",
            "joy": "images/creature_kraken_idol_joy.png",
            "sad": "images/creature_kraken_idol_sad.png",
            "angry": "images/creature_kraken_idol_angry.png",
            "skill": "images/creature_kraken_idol_skill.png",
            "victory": "images/creature_kraken_idol_victory.png",
            "defeat": "images/creature_kraken_idol_defeat.png",
            "gallery": {
            "lv1": "images/creature_kraken_idol_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "kraken_baby",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_kraken_baby.png",
        sprites: {
            "idle": "images/creature_kraken_baby.png",
            "joy": "images/creature_kraken_baby_joy.png",
            "sad": "images/creature_kraken_baby_sad.png",
            "angry": "images/creature_kraken_baby_angry.png",
            "skill": "images/creature_kraken_baby_skill.png",
            "victory": "images/creature_kraken_baby_victory.png",
            "defeat": "images/creature_kraken_baby_defeat.png",
            "gallery": {
            "lv1": "images/creature_kraken_baby_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "rat_brown",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_rat_brown.png",
        sprites: {
            "idle": "images/creature_rat_brown.png",
            "joy": "images/creature_rat_brown_joy.png",
            "sad": "images/creature_rat_brown_sad.png",
            "angry": "images/creature_rat_brown_angry.png",
            "skill": "images/creature_rat_brown_skill.png",
            "victory": "images/creature_rat_brown_victory.png",
            "defeat": "images/creature_rat_brown_defeat.png",
            "gallery": {
            "lv1": "images/creature_rat_brown_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "slime_green_new",
        name: "초록 슬라임",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_slime_green_new.png",
        sprites: {
            "idle": "images/creature_slime_green_new.png",
            "joy": "images/creature_slime_green_new_joy.png",
            "sad": "images/creature_slime_green_new_sad.png",
            "angry": "images/creature_slime_green_new_angry.png",
            "skill": "images/creature_slime_green_new_skill.png",
            "victory": "images/creature_slime_green_new_victory.png",
            "defeat": "images/creature_slime_green_new_defeat.png",
            "gallery": {
            "lv1": "images/creature_slime_green_new_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 초록 슬라임",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 초록 슬라임, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 초록 슬라임은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "blue_slime",
        name: "파랑 슬라임",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_blue_slime.png",
        sprites: {
            "idle": "images/creature_blue_slime.png",
            "joy": "images/creature_blue_slime_joy.png",
            "sad": "images/creature_blue_slime_sad.png",
            "angry": "images/creature_blue_slime_angry.png",
            "skill": "images/creature_blue_slime_skill.png",
            "victory": "images/creature_blue_slime_victory.png",
            "defeat": "images/creature_blue_slime_defeat.png",
            "gallery": {
            "lv1": "images/creature_blue_slime_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 파랑 슬라임",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 파랑 슬라임, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 파랑 슬라임은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "pebble_new",
        name: "조약돌",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_pebble_new.png",
        sprites: {
            "idle": "images/creature_pebble_new.png",
            "joy": "images/creature_pebble_new_joy.png",
            "sad": "images/creature_pebble_new_sad.png",
            "angry": "images/creature_pebble_new_angry.png",
            "skill": "images/creature_pebble_new_skill.png",
            "victory": "images/creature_pebble_new_victory.png",
            "defeat": "images/creature_pebble_new_defeat.png",
            "gallery": {
            "lv1": "images/creature_pebble_new_gallery.png"
            }
},
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 조약돌",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 조약돌, energetic, detailed, looking at viewer"
},
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 조약돌은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
},
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    }
];