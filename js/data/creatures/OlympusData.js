import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const OLYMPUS_CREATURES = [
    {
        id: "centaur_scout",
        name: "ì¼„í??°ë¡œ???•ì°°ë³?,
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/olympus/creature_centaur_scout.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_centaur_scout.png",
            "joy": "images/creatures/olympus/creature_centaur_scout_joy.png",
            "sad": "images/creatures/olympus/creature_centaur_scout_sad.png",
            "angry": "images/creatures/olympus/creature_centaur_scout_angry.png",
            "skill": "images/creatures/olympus/creature_centaur_scout_skill.png",
            "victory": "images/creatures/olympus/creature_centaur_scout_victory.png",
            "defeat": "images/creatures/olympus/creature_centaur_scout_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_centaur_scout_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ì¼„í??°ë¡œ???•ì°°ë³?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ì¼„í??°ë¡œ???•ì°°ë³? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ì¼„í??°ë¡œ???•ì°°ë³‘ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_zeus",
        name: "ì²œë‘¥?????œìš°??,
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 30, baseInt: 30,
        image: "images/creatures/olympus/creature_god_zeus.jpg",
        sprites: {
            "idle": "images/creatures/olympus/creature_god_zeus.jpg",
            "joy": "images/creatures/olympus/creature_god_zeus.jpg",
            "sad": "images/creatures/olympus/creature_god_zeus.jpg",
            "angry": "images/creatures/olympus/creature_god_zeus.jpg",
            "skill": "images/creatures/olympus/creature_god_zeus.jpg",
            "victory": "images/creatures/olympus/creature_god_zeus.jpg",
            "defeat": "images/creatures/olympus/creature_god_zeus.jpg",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_god_zeus.jpg",
                "lv2": "images/creatures/olympus/creature_god_zeus.jpg",
                "lv3": "images/creatures/olympus/creature_god_zeus.jpg"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ì²œë‘¥?????œìš°??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ì²œë‘¥?????œìš°?? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ì²œë‘¥?????œìš°?? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ì²œë‘¥?????œìš°?? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ì²œë‘¥?????œìš°?¤ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "titan_kronos_shade",
        name: "?¬ë¡œ?¸ìŠ¤??ê·¸ë¦¼??,
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 30, baseInt: 30,
        image: "images/creatures/olympus/creature_titan_kronos_shade.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_titan_kronos_shade.png",
            "joy": "images/creatures/olympus/creature_titan_kronos_shade_joy.png",
            "sad": "images/creatures/olympus/creature_titan_kronos_shade_sad.png",
            "angry": "images/creatures/olympus/creature_titan_kronos_shade_angry.png",
            "skill": "images/creatures/olympus/creature_titan_kronos_shade_skill.png",
            "victory": "images/creatures/olympus/creature_titan_kronos_shade_victory.png",
            "defeat": "images/creatures/olympus/creature_titan_kronos_shade_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_titan_kronos_shade_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_titan_kronos_shade_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_titan_kronos_shade_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?¬ë¡œ?¸ìŠ¤??ê·¸ë¦¼??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?¬ë¡œ?¸ìŠ¤??ê·¸ë¦¼?? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?¬ë¡œ?¸ìŠ¤??ê·¸ë¦¼?? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?¬ë¡œ?¸ìŠ¤??ê·¸ë¦¼?? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?¬ë¡œ?¸ìŠ¤??ê·¸ë¦¼?ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_poseidon",
        name: "?¬í•´??êµ°ì£¼ ?¬ì„¸?´ëˆ",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/olympus/creature_god_poseidon.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_god_poseidon.png",
            "joy": "images/creatures/olympus/creature_god_poseidon_joy.png",
            "sad": "images/creatures/olympus/creature_god_poseidon_sad.png",
            "angry": "images/creatures/olympus/creature_god_poseidon_angry.png",
            "skill": "images/creatures/olympus/creature_god_poseidon_skill.png",
            "victory": "images/creatures/olympus/creature_god_poseidon_victory.png",
            "defeat": "images/creatures/olympus/creature_god_poseidon_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_god_poseidon_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_god_poseidon_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_god_poseidon_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?¬í•´??êµ°ì£¼ ?¬ì„¸?´ëˆ",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?¬í•´??êµ°ì£¼ ?¬ì„¸?´ëˆ, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?¬í•´??êµ°ì£¼ ?¬ì„¸?´ëˆ, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?¬í•´??êµ°ì£¼ ?¬ì„¸?´ëˆ, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?¬í•´??êµ°ì£¼ ?¬ì„¸?´ëˆ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_hades",
        name: "ì§€?¥ì˜ ì§€ë°°ì ?˜ë°??,
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/olympus/creature_god_hades.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_god_hades.png",
            "joy": "images/creatures/olympus/creature_god_hades_joy.png",
            "sad": "images/creatures/olympus/creature_god_hades_sad.png",
            "angry": "images/creatures/olympus/creature_god_hades_angry.png",
            "skill": "images/creatures/olympus/creature_god_hades_skill.png",
            "victory": "images/creatures/olympus/creature_god_hades_victory.png",
            "defeat": "images/creatures/olympus/creature_god_hades_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_god_hades_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_god_hades_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_god_hades_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ì§€?¥ì˜ ì§€ë°°ì ?˜ë°??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ì§€?¥ì˜ ì§€ë°°ì ?˜ë°?? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ì§€?¥ì˜ ì§€ë°°ì ?˜ë°?? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ì§€?¥ì˜ ì§€ë°°ì ?˜ë°?? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ì§€?¥ì˜ ì§€ë°°ì ?˜ë°?¤ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "hero_hercules",
        name: "ë¶ˆë©¸???ì›… ?¤ë¼?´ë ˆ??,
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/olympus/creature_hero_hercules.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_hero_hercules.png",
            "joy": "images/creatures/olympus/creature_hero_hercules_joy.png",
            "sad": "images/creatures/olympus/creature_hero_hercules_sad.png",
            "angry": "images/creatures/olympus/creature_hero_hercules_angry.png",
            "skill": "images/creatures/olympus/creature_hero_hercules_skill.png",
            "victory": "images/creatures/olympus/creature_hero_hercules_victory.png",
            "defeat": "images/creatures/olympus/creature_hero_hercules_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_hero_hercules_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_hero_hercules_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_hero_hercules_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ë¶ˆë©¸???ì›… ?¤ë¼?´ë ˆ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ë¶ˆë©¸???ì›… ?¤ë¼?´ë ˆ?? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ë¶ˆë©¸???ì›… ?¤ë¼?´ë ˆ?? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ë¶ˆë©¸???ì›… ?¤ë¼?´ë ˆ?? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ë¶ˆë©¸???ì›… ?¤ë¼?´ë ˆ?¤ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "titan_atlas",
        name: "ê±°ì‹  ?„í??¼ìŠ¤",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/olympus/creature_titan_atlas.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_titan_atlas.png",
            "joy": "images/creatures/olympus/creature_titan_atlas_joy.png",
            "sad": "images/creatures/olympus/creature_titan_atlas_sad.png",
            "angry": "images/creatures/olympus/creature_titan_atlas_angry.png",
            "skill": "images/creatures/olympus/creature_titan_atlas_skill.png",
            "victory": "images/creatures/olympus/creature_titan_atlas_victory.png",
            "defeat": "images/creatures/olympus/creature_titan_atlas_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_titan_atlas_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_titan_atlas_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_titan_atlas_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ê±°ì‹  ?„í??¼ìŠ¤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ê±°ì‹  ?„í??¼ìŠ¤, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ê±°ì‹  ?„í??¼ìŠ¤, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ê±°ì‹  ?„í??¼ìŠ¤, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ê±°ì‹  ?„í??¼ìŠ¤?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "minotaur_king",
        name: "ë¯¸ë…¸?€?°ë¡œ????,
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/olympus/creature_minotaur_king.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_minotaur_king.png",
            "joy": "images/creatures/olympus/creature_minotaur_king_joy.png",
            "sad": "images/creatures/olympus/creature_minotaur_king_sad.png",
            "angry": "images/creatures/olympus/creature_minotaur_king_angry.png",
            "skill": "images/creatures/olympus/creature_minotaur_king_skill.png",
            "victory": "images/creatures/olympus/creature_minotaur_king_victory.png",
            "defeat": "images/creatures/olympus/creature_minotaur_king_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_minotaur_king_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_minotaur_king_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_minotaur_king_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ë¯¸ë…¸?€?°ë¡œ????,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ë¯¸ë…¸?€?°ë¡œ???? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ë¯¸ë…¸?€?°ë¡œ???? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ë¯¸ë…¸?€?°ë¡œ???? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ë¯¸ë…¸?€?°ë¡œ???•ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cerberus_guardian",
        name: "ì§€?¥íŒŒ?˜ê¾¼ ì¼€ë¥´ë² ë¡œìŠ¤",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/olympus/creature_cerberus_guardian.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_cerberus_guardian.png",
            "joy": "images/creatures/olympus/creature_cerberus_guardian_joy.png",
            "sad": "images/creatures/olympus/creature_cerberus_guardian_sad.png",
            "angry": "images/creatures/olympus/creature_cerberus_guardian_angry.png",
            "skill": "images/creatures/olympus/creature_cerberus_guardian_skill.png",
            "victory": "images/creatures/olympus/creature_cerberus_guardian_victory.png",
            "defeat": "images/creatures/olympus/creature_cerberus_guardian_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_cerberus_guardian_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_cerberus_guardian_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_cerberus_guardian_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ì§€?¥íŒŒ?˜ê¾¼ ì¼€ë¥´ë² ë¡œìŠ¤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ì§€?¥íŒŒ?˜ê¾¼ ì¼€ë¥´ë² ë¡œìŠ¤, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ì§€?¥íŒŒ?˜ê¾¼ ì¼€ë¥´ë² ë¡œìŠ¤, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ì§€?¥íŒŒ?˜ê¾¼ ì¼€ë¥´ë² ë¡œìŠ¤, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ì§€?¥íŒŒ?˜ê¾¼ ì¼€ë¥´ë² ë¡œìŠ¤?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "hydra_lernaean",
        name: "?ˆë¥´?˜ì˜ ?ˆë“œ??,
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/olympus/creature_hydra_lernaean.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_hydra_lernaean.png",
            "joy": "images/creatures/olympus/creature_hydra_lernaean_joy.png",
            "sad": "images/creatures/olympus/creature_hydra_lernaean_sad.png",
            "angry": "images/creatures/olympus/creature_hydra_lernaean_angry.png",
            "skill": "images/creatures/olympus/creature_hydra_lernaean_skill.png",
            "victory": "images/creatures/olympus/creature_hydra_lernaean_victory.png",
            "defeat": "images/creatures/olympus/creature_hydra_lernaean_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_hydra_lernaean_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_hydra_lernaean_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_hydra_lernaean_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?ˆë¥´?˜ì˜ ?ˆë“œ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?ˆë¥´?˜ì˜ ?ˆë“œ?? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?ˆë¥´?˜ì˜ ?ˆë“œ?? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?ˆë¥´?˜ì˜ ?ˆë“œ?? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?ˆë¥´?˜ì˜ ?ˆë“œ?¼ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "lion_nemean",
        name: "?¤ë©”?„ì˜ ?¬ì",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/olympus/creature_lion_nemean.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_lion_nemean.png",
            "joy": "images/creatures/olympus/creature_lion_nemean_joy.png",
            "sad": "images/creatures/olympus/creature_lion_nemean_sad.png",
            "angry": "images/creatures/olympus/creature_lion_nemean_angry.png",
            "skill": "images/creatures/olympus/creature_lion_nemean_skill.png",
            "victory": "images/creatures/olympus/creature_lion_nemean_victory.png",
            "defeat": "images/creatures/olympus/creature_lion_nemean_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_lion_nemean_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_lion_nemean_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_lion_nemean_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?¤ë©”?„ì˜ ?¬ì",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?¤ë©”?„ì˜ ?¬ì, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?¤ë©”?„ì˜ ?¬ì, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?¤ë©”?„ì˜ ?¬ì, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?¤ë©”?„ì˜ ?¬ì?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "medusa_cursed",
        name: "?€ì£¼ë°›?€ ë¯¸ëª¨ ë©”ë‘??,
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/olympus/creature_medusa_cursed.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_medusa_cursed.png",
            "joy": "images/creatures/olympus/creature_medusa_cursed_joy.png",
            "sad": "images/creatures/olympus/creature_medusa_cursed_sad.png",
            "angry": "images/creatures/olympus/creature_medusa_cursed_angry.png",
            "skill": "images/creatures/olympus/creature_medusa_cursed_skill.png",
            "victory": "images/creatures/olympus/creature_medusa_cursed_victory.png",
            "defeat": "images/creatures/olympus/creature_medusa_cursed_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_medusa_cursed_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_medusa_cursed_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_medusa_cursed_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?€ì£¼ë°›?€ ë¯¸ëª¨ ë©”ë‘??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?€ì£¼ë°›?€ ë¯¸ëª¨ ë©”ë‘?? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?€ì£¼ë°›?€ ë¯¸ëª¨ ë©”ë‘?? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?€ì£¼ë°›?€ ë¯¸ëª¨ ë©”ë‘?? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?€ì£¼ë°›?€ ë¯¸ëª¨ ë©”ë‘?¬ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mage_flame",
        name: "?”ì—¼ ë§ˆë²•??,
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/olympus/creature_mage_flame.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_mage_flame.png",
            "joy": "images/creatures/olympus/creature_mage_flame_joy.png",
            "sad": "images/creatures/olympus/creature_mage_flame_sad.png",
            "angry": "images/creatures/olympus/creature_mage_flame_angry.png",
            "skill": "images/creatures/olympus/creature_mage_flame_skill.png",
            "victory": "images/creatures/olympus/creature_mage_flame_victory.png",
            "defeat": "images/creatures/olympus/creature_mage_flame_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_mage_flame_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?”ì—¼ ë§ˆë²•??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?”ì—¼ ë§ˆë²•?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?”ì—¼ ë§ˆë²•?¬ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_dionysus",
        name: "ì¶•ì œ?????”ì˜¤?ˆì†Œ??,
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/olympus/creature_god_dionysus.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_god_dionysus.png",
            "joy": "images/creatures/olympus/creature_god_dionysus_joy.png",
            "sad": "images/creatures/olympus/creature_god_dionysus_sad.png",
            "angry": "images/creatures/olympus/creature_god_dionysus_angry.png",
            "skill": "images/creatures/olympus/creature_god_dionysus_skill.png",
            "victory": "images/creatures/olympus/creature_god_dionysus_victory.png",
            "defeat": "images/creatures/olympus/creature_god_dionysus_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_god_dionysus_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ì¶•ì œ?????”ì˜¤?ˆì†Œ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ì¶•ì œ?????”ì˜¤?ˆì†Œ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ì¶•ì œ?????”ì˜¤?ˆì†Œ?¤ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "harpy_queen",
        name: "??’?°ì˜ ?˜í”¼ ??,
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/olympus/creature_harpy_queen.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_harpy_queen.png",
            "joy": "images/creatures/olympus/creature_harpy_queen_joy.png",
            "sad": "images/creatures/olympus/creature_harpy_queen_sad.png",
            "angry": "images/creatures/olympus/creature_harpy_queen_angry.png",
            "skill": "images/creatures/olympus/creature_harpy_queen_skill.png",
            "victory": "images/creatures/olympus/creature_harpy_queen_victory.png",
            "defeat": "images/creatures/olympus/creature_harpy_queen_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_harpy_queen_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ??’?°ì˜ ?˜í”¼ ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ??’?°ì˜ ?˜í”¼ ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ??’?°ì˜ ?˜í”¼ ?¸ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "siren_singer",
        name: "? í˜¹???¬ì´??,
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/olympus/creature_siren_singer.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_siren_singer.png",
            "joy": "images/creatures/olympus/creature_siren_singer_joy.png",
            "sad": "images/creatures/olympus/creature_siren_singer_sad.png",
            "angry": "images/creatures/olympus/creature_siren_singer_angry.png",
            "skill": "images/creatures/olympus/creature_siren_singer_skill.png",
            "victory": "images/creatures/olympus/creature_siren_singer_victory.png",
            "defeat": "images/creatures/olympus/creature_siren_singer_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_siren_singer_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ? í˜¹???¬ì´??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ? í˜¹???¬ì´?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ? í˜¹???¬ì´?Œì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "gorgon_sister_e",
        name: "ê³ ë¥´ê³??ë§¤ ?ìš°ë¦¬ì•Œ??,
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/olympus/creature_gorgon_sister_e.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_gorgon_sister_e.png",
            "joy": "images/creatures/olympus/creature_gorgon_sister_e_joy.png",
            "sad": "images/creatures/olympus/creature_gorgon_sister_e_sad.png",
            "angry": "images/creatures/olympus/creature_gorgon_sister_e_angry.png",
            "skill": "images/creatures/olympus/creature_gorgon_sister_e_skill.png",
            "victory": "images/creatures/olympus/creature_gorgon_sister_e_victory.png",
            "defeat": "images/creatures/olympus/creature_gorgon_sister_e_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_gorgon_sister_e_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ê³ ë¥´ê³??ë§¤ ?ìš°ë¦¬ì•Œ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê³ ë¥´ê³??ë§¤ ?ìš°ë¦¬ì•Œ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ê³ ë¥´ê³??ë§¤ ?ìš°ë¦¬ì•Œ?ˆì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "gorgon_sister_s",
        name: "ê³ ë¥´ê³??ë§¤ ?¤í…Œ??,
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/olympus/creature_gorgon_sister_s.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_gorgon_sister_s.png",
            "joy": "images/creatures/olympus/creature_gorgon_sister_s_joy.png",
            "sad": "images/creatures/olympus/creature_gorgon_sister_s_sad.png",
            "angry": "images/creatures/olympus/creature_gorgon_sister_s_angry.png",
            "skill": "images/creatures/olympus/creature_gorgon_sister_s_skill.png",
            "victory": "images/creatures/olympus/creature_gorgon_sister_s_victory.png",
            "defeat": "images/creatures/olympus/creature_gorgon_sister_s_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_gorgon_sister_s_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ê³ ë¥´ê³??ë§¤ ?¤í…Œ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê³ ë¥´ê³??ë§¤ ?¤í…Œ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ê³ ë¥´ê³??ë§¤ ?¤í…Œ?¸ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "muse_lyra",
        name: "?…ë³´??ë®¤ì¦ˆ",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/olympus/creature_muse_lyra.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_muse_lyra.png",
            "joy": "images/creatures/olympus/creature_muse_lyra_joy.png",
            "sad": "images/creatures/olympus/creature_muse_lyra_sad.png",
            "angry": "images/creatures/olympus/creature_muse_lyra_angry.png",
            "skill": "images/creatures/olympus/creature_muse_lyra_skill.png",
            "victory": "images/creatures/olympus/creature_muse_lyra_victory.png",
            "defeat": "images/creatures/olympus/creature_muse_lyra_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_muse_lyra_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?…ë³´??ë®¤ì¦ˆ",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?…ë³´??ë®¤ì¦ˆ, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?…ë³´??ë®¤ì¦ˆ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "phoenix_chick_o",
        name: "ë² ì´ë¹??¼ë‹‰??,
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/olympus/creature_phoenix_chick_o.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_phoenix_chick_o.png",
            "joy": "images/creatures/olympus/creature_phoenix_chick_o_joy.png",
            "sad": "images/creatures/olympus/creature_phoenix_chick_o_sad.png",
            "angry": "images/creatures/olympus/creature_phoenix_chick_o_angry.png",
            "skill": "images/creatures/olympus/creature_phoenix_chick_o_skill.png",
            "victory": "images/creatures/olympus/creature_phoenix_chick_o_victory.png",
            "defeat": "images/creatures/olympus/creature_phoenix_chick_o_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_phoenix_chick_o_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ë² ì´ë¹??¼ë‹‰??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë² ì´ë¹??¼ë‹‰?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ë² ì´ë¹??¼ë‹‰?¤ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "hellhound_scout",
        name: "?¬í•˜?´ë“œ ?•ì°°ê°?,
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/olympus/creature_hellhound_scout.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_hellhound_scout.png",
            "joy": "images/creatures/olympus/creature_hellhound_scout_joy.png",
            "sad": "images/creatures/olympus/creature_hellhound_scout_sad.png",
            "angry": "images/creatures/olympus/creature_hellhound_scout_angry.png",
            "skill": "images/creatures/olympus/creature_hellhound_scout_skill.png",
            "victory": "images/creatures/olympus/creature_hellhound_scout_victory.png",
            "defeat": "images/creatures/olympus/creature_hellhound_scout_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_hellhound_scout_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?¬í•˜?´ë“œ ?•ì°°ê°?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¬í•˜?´ë“œ ?•ì°°ê°? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?¬í•˜?´ë“œ ?•ì°°ê°œì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "automaton_mini",
        name: "ë¯¸ë‹ˆ ?¤í† ë§ˆí†¤",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/olympus/creature_automaton_mini.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_automaton_mini.png",
            "joy": "images/creatures/olympus/creature_automaton_mini_joy.png",
            "sad": "images/creatures/olympus/creature_automaton_mini_sad.png",
            "angry": "images/creatures/olympus/creature_automaton_mini_angry.png",
            "skill": "images/creatures/olympus/creature_automaton_mini_skill.png",
            "victory": "images/creatures/olympus/creature_automaton_mini_victory.png",
            "defeat": "images/creatures/olympus/creature_automaton_mini_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_automaton_mini_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ë¯¸ë‹ˆ ?¤í† ë§ˆí†¤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë¯¸ë‹ˆ ?¤í† ë§ˆí†¤, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ë¯¸ë‹ˆ ?¤í† ë§ˆí†¤?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "talos_fragment",
        name: "?ˆë¡œ?¤ì˜ ?Œí¸",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/olympus/creature_talos_fragment.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_talos_fragment.png",
            "joy": "images/creatures/olympus/creature_talos_fragment_joy.png",
            "sad": "images/creatures/olympus/creature_talos_fragment_sad.png",
            "angry": "images/creatures/olympus/creature_talos_fragment_angry.png",
            "skill": "images/creatures/olympus/creature_talos_fragment_skill.png",
            "victory": "images/creatures/olympus/creature_talos_fragment_victory.png",
            "defeat": "images/creatures/olympus/creature_talos_fragment_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_talos_fragment_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?ˆë¡œ?¤ì˜ ?Œí¸",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?ˆë¡œ?¤ì˜ ?Œí¸, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?ˆë¡œ?¤ì˜ ?Œí¸?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fury_hiss",
        name: "ë¶„ë…¸???•ë ¹ ?¨ë¦¬",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/olympus/creature_fury_hiss.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_fury_hiss.png",
            "joy": "images/creatures/olympus/creature_fury_hiss_joy.png",
            "sad": "images/creatures/olympus/creature_fury_hiss_sad.png",
            "angry": "images/creatures/olympus/creature_fury_hiss_angry.png",
            "skill": "images/creatures/olympus/creature_fury_hiss_skill.png",
            "victory": "images/creatures/olympus/creature_fury_hiss_victory.png",
            "defeat": "images/creatures/olympus/creature_fury_hiss_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_fury_hiss_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ë¶„ë…¸???•ë ¹ ?¨ë¦¬",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë¶„ë…¸???•ë ¹ ?¨ë¦¬, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ë¶„ë…¸???•ë ¹ ?¨ë¦¬?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sphinx_kitten",
        name: "?„ê¸° ?¤í•‘?¬ìŠ¤",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/olympus/creature_sphinx_kitten.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_sphinx_kitten.png",
            "joy": "images/creatures/olympus/creature_sphinx_kitten_joy.png",
            "sad": "images/creatures/olympus/creature_sphinx_kitten_sad.png",
            "angry": "images/creatures/olympus/creature_sphinx_kitten_angry.png",
            "skill": "images/creatures/olympus/creature_sphinx_kitten_skill.png",
            "victory": "images/creatures/olympus/creature_sphinx_kitten_victory.png",
            "defeat": "images/creatures/olympus/creature_sphinx_kitten_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_sphinx_kitten_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?„ê¸° ?¤í•‘?¬ìŠ¤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?„ê¸° ?¤í•‘?¬ìŠ¤, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?„ê¸° ?¤í•‘?¬ìŠ¤?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cloud_puff",
        name: "êµ¬ë¦„ ?œì‚¬??,
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_cloud_puff.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_cloud_puff.png",
            "joy": "images/creatures/olympus/creature_cloud_puff_joy.png",
            "sad": "images/creatures/olympus/creature_cloud_puff_sad.png",
            "angry": "images/creatures/olympus/creature_cloud_puff_angry.png",
            "skill": "images/creatures/olympus/creature_cloud_puff_skill.png",
            "victory": "images/creatures/olympus/creature_cloud_puff_victory.png",
            "defeat": "images/creatures/olympus/creature_cloud_puff_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_cloud_puff_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, êµ¬ë¦„ ?œì‚¬??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, êµ¬ë¦„ ?œì‚¬?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? êµ¬ë¦„ ?œì‚¬?•ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "pegasus_colt",
        name: "?„ê¸° ?˜ê??˜ìŠ¤",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_pegasus_colt.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_pegasus_colt.png",
            "joy": "images/creatures/olympus/creature_pegasus_colt_joy.png",
            "sad": "images/creatures/olympus/creature_pegasus_colt_sad.png",
            "angry": "images/creatures/olympus/creature_pegasus_colt_angry.png",
            "skill": "images/creatures/olympus/creature_pegasus_colt_skill.png",
            "victory": "images/creatures/olympus/creature_pegasus_colt_victory.png",
            "defeat": "images/creatures/olympus/creature_pegasus_colt_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_pegasus_colt_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?„ê¸° ?˜ê??˜ìŠ¤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?„ê¸° ?˜ê??˜ìŠ¤, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?„ê¸° ?˜ê??˜ìŠ¤?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "satyr_young",
        name: "?¬í‹°ë¡œìŠ¤ ê²¬ìŠµ??,
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_satyr_young.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_satyr_young.png",
            "joy": "images/creatures/olympus/creature_satyr_young_joy.png",
            "sad": "images/creatures/olympus/creature_satyr_young_sad.png",
            "angry": "images/creatures/olympus/creature_satyr_young_angry.png",
            "skill": "images/creatures/olympus/creature_satyr_young_skill.png",
            "victory": "images/creatures/olympus/creature_satyr_young_victory.png",
            "defeat": "images/creatures/olympus/creature_satyr_young_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_satyr_young_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?¬í‹°ë¡œìŠ¤ ê²¬ìŠµ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¬í‹°ë¡œìŠ¤ ê²¬ìŠµ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?¬í‹°ë¡œìŠ¤ ê²¬ìŠµ?ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dryad_seed",
        name: "?œë¼?´ì–´???¨ì•—",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_dryad_seed.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_dryad_seed.png",
            "joy": "images/creatures/olympus/creature_dryad_seed_joy.png",
            "sad": "images/creatures/olympus/creature_dryad_seed_sad.png",
            "angry": "images/creatures/olympus/creature_dryad_seed_angry.png",
            "skill": "images/creatures/olympus/creature_dryad_seed_skill.png",
            "victory": "images/creatures/olympus/creature_dryad_seed_victory.png",
            "defeat": "images/creatures/olympus/creature_dryad_seed_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_dryad_seed_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?œë¼?´ì–´???¨ì•—",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?œë¼?´ì–´???¨ì•—, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?œë¼?´ì–´???¨ì•—?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cyclops_worker",
        name: "?¤í´ë¡?Š¤ ê²¬ìŠµê³?,
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_cyclops_worker.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_cyclops_worker.png",
            "joy": "images/creatures/olympus/creature_cyclops_worker_joy.png",
            "sad": "images/creatures/olympus/creature_cyclops_worker_sad.png",
            "angry": "images/creatures/olympus/creature_cyclops_worker_angry.png",
            "skill": "images/creatures/olympus/creature_cyclops_worker_skill.png",
            "victory": "images/creatures/olympus/creature_cyclops_worker_victory.png",
            "defeat": "images/creatures/olympus/creature_cyclops_worker_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_cyclops_worker_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?¤í´ë¡?Š¤ ê²¬ìŠµê³?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¤í´ë¡?Š¤ ê²¬ìŠµê³? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?¤í´ë¡?Š¤ ê²¬ìŠµê³µì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "nymph_water",
        name: "?˜ì˜ ?˜í”„",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_nymph_water.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_nymph_water.png",
            "joy": "images/creatures/olympus/creature_nymph_water_joy.png",
            "sad": "images/creatures/olympus/creature_nymph_water_sad.png",
            "angry": "images/creatures/olympus/creature_nymph_water_angry.png",
            "skill": "images/creatures/olympus/creature_nymph_water_skill.png",
            "victory": "images/creatures/olympus/creature_nymph_water_victory.png",
            "defeat": "images/creatures/olympus/creature_nymph_water_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_nymph_water_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?˜ì˜ ?˜í”„",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?˜ì˜ ?˜í”„, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?˜ì˜ ?˜í”„?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "griffin_chick",
        name: "?„ê¸° ê·¸ë¦¬??,
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_griffin_chick.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_griffin_chick.png",
            "joy": "images/creatures/olympus/creature_griffin_chick_joy.png",
            "sad": "images/creatures/olympus/creature_griffin_chick_sad.png",
            "angry": "images/creatures/olympus/creature_griffin_chick_angry.png",
            "skill": "images/creatures/olympus/creature_griffin_chick_skill.png",
            "victory": "images/creatures/olympus/creature_griffin_chick_victory.png",
            "defeat": "images/creatures/olympus/creature_griffin_chick_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_griffin_chick_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?„ê¸° ê·¸ë¦¬??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?„ê¸° ê·¸ë¦¬?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?„ê¸° ê·¸ë¦¬?°ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cerberus_pup",
        name: "?„ê¸° ì¼€ë¥´ë² ë¡œìŠ¤",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_cerberus_pup.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_cerberus_pup.png",
            "joy": "images/creatures/olympus/creature_cerberus_pup_joy.png",
            "sad": "images/creatures/olympus/creature_cerberus_pup_sad.png",
            "angry": "images/creatures/olympus/creature_cerberus_pup_angry.png",
            "skill": "images/creatures/olympus/creature_cerberus_pup_skill.png",
            "victory": "images/creatures/olympus/creature_cerberus_pup_victory.png",
            "defeat": "images/creatures/olympus/creature_cerberus_pup_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_cerberus_pup_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?„ê¸° ì¼€ë¥´ë² ë¡œìŠ¤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?„ê¸° ì¼€ë¥´ë² ë¡œìŠ¤, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?„ê¸° ì¼€ë¥´ë² ë¡œìŠ¤?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "minotaur_calf",
        name: "?„ê¸° ë¯¸ë…¸?€?°ë¡œ??,
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_minotaur_calf.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_minotaur_calf.png",
            "joy": "images/creatures/olympus/creature_minotaur_calf_joy.png",
            "sad": "images/creatures/olympus/creature_minotaur_calf_sad.png",
            "angry": "images/creatures/olympus/creature_minotaur_calf_angry.png",
            "skill": "images/creatures/olympus/creature_minotaur_calf_skill.png",
            "victory": "images/creatures/olympus/creature_minotaur_calf_victory.png",
            "defeat": "images/creatures/olympus/creature_minotaur_calf_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_minotaur_calf_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?„ê¸° ë¯¸ë…¸?€?°ë¡œ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?„ê¸° ë¯¸ë…¸?€?°ë¡œ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?„ê¸° ë¯¸ë…¸?€?°ë¡œ?¤ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "charybdis_baby",
        name: "?Œí˜• ì¹´ë¦¬ë¸Œë””??,
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_charybdis_baby.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_charybdis_baby.png",
            "joy": "images/creatures/olympus/creature_charybdis_baby_joy.png",
            "sad": "images/creatures/olympus/creature_charybdis_baby_sad.png",
            "angry": "images/creatures/olympus/creature_charybdis_baby_angry.png",
            "skill": "images/creatures/olympus/creature_charybdis_baby_skill.png",
            "victory": "images/creatures/olympus/creature_charybdis_baby_victory.png",
            "defeat": "images/creatures/olympus/creature_charybdis_baby_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_charybdis_baby_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?Œí˜• ì¹´ë¦¬ë¸Œë””??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?Œí˜• ì¹´ë¦¬ë¸Œë””?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?Œí˜• ì¹´ë¦¬ë¸Œë””?¤ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "scylla_pup",
        name: "?ˆë¼ ?¤í‚¬??,
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_scylla_pup.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_scylla_pup.png",
            "joy": "images/creatures/olympus/creature_scylla_pup_joy.png",
            "sad": "images/creatures/olympus/creature_scylla_pup_sad.png",
            "angry": "images/creatures/olympus/creature_scylla_pup_angry.png",
            "skill": "images/creatures/olympus/creature_scylla_pup_skill.png",
            "victory": "images/creatures/olympus/creature_scylla_pup_victory.png",
            "defeat": "images/creatures/olympus/creature_scylla_pup_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_scylla_pup_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?ˆë¼ ?¤í‚¬??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?ˆë¼ ?¤í‚¬?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?ˆë¼ ?¤í‚¬?¼ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "chimera_cub",
        name: "?„ê¸° ?¤ë©”??,
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/olympus/creature_chimera_cub.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_chimera_cub.png",
            "joy": "images/creatures/olympus/creature_chimera_cub_joy.png",
            "sad": "images/creatures/olympus/creature_chimera_cub_sad.png",
            "angry": "images/creatures/olympus/creature_chimera_cub_angry.png",
            "skill": "images/creatures/olympus/creature_chimera_cub_skill.png",
            "victory": "images/creatures/olympus/creature_chimera_cub_victory.png",
            "defeat": "images/creatures/olympus/creature_chimera_cub_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_chimera_cub_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, ?„ê¸° ?¤ë©”??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?„ê¸° ?¤ë©”?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ë¦¼?¬ìŠ¤ ? ë“¤??ì¶•ë³µ??ë°›ê±°???€ì£¼ë? ë°›ì? ì¡´ì¬?…ë‹ˆ?? ?„ê¸° ?¤ë©”?¼ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_gaia",
        name: "?€ì§€???¬ì‹  ê°€?´ì•„",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Earth", "Light"],
        baseStr: 30, baseInt: 30,
        image: "images/creatures/olympus/creature_god_gaia_joy.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_god_gaia_joy.png",
            "joy": "images/creatures/olympus/creature_god_gaia_joy.png",
            "sad": "images/creatures/olympus/creature_god_gaia_joy.png",
            "angry": "images/creatures/olympus/creature_god_gaia_joy.png",
            "skill": "images/creatures/olympus/creature_god_gaia_joy.png",
            "victory": "images/creatures/olympus/creature_god_gaia_joy.png",
            "defeat": "images/creatures/olympus/creature_god_gaia_joy.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_god_gaia_joy.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, earth goddess, vines, flowers, gentle, nature, Light, ?€ì§€???¬ì‹  ê°€?´ì•„",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?€ì§€???¬ì‹  ê°€?´ì•„, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "?€ì§€???´ë¨¸??,
            "story": "ëª¨ë“  ?ëª…???´ë¨¸?ˆì´???€ì§€ ê·??ì²´?…ë‹ˆ?? ê°€?´ì•„??ë¶„ë…¸??ì§€ì§„ì„ ?¼ìœ¼?¤ê³ , ?ì• ??ë§Œë¬¼???¼ì–´?˜ê²Œ ?©ë‹ˆ??",
            "personality": "Motherly"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "archangel_michael",
        name: "?€ì²œì‚¬ ë¯¸ì¹´??,
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/olympus/creature_archangel_michael.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_archangel_michael.png"
        },
        prompts: {
            "base": "anime style, ?€ì²œì‚¬ ë¯¸ì¹´??
        },
        lore: {
            "title": "ì²œìƒ???„ì‚¬",
            "story": "?•ì˜?€ ë¹›ì˜ ?˜ì„ ì§€???„ì‚¬?…ë‹ˆ??",
            "personality": "?•ì˜ë¡œìš´"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["?•ì˜???¹ë¦¬?œë‹¤."], interaction: ["?¨ê»˜ ?¸ìš°??"], gift: ["ê°ì‚¬."], special: ["!"] },
        lines: { normal: "?´ë‘ ??ë¬¼ë¦¬ì¹œë‹¤!" }
    },
    {
        id: "nymph_dark",
        name: "?´ë‘ ???˜í”„",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Earth"], // Default element
        baseStr: 12, baseInt: 12,
        image: "images/creatures/olympus/creature_nymph_dark.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_nymph_dark.png",
            "joy": "images/creatures/olympus/creature_nymph_dark.png", // Fallback
            "sad": "images/creatures/olympus/creature_nymph_dark.png", // Fallback
            "angry": "images/creatures/olympus/creature_nymph_dark.png", // Fallback
            "skill": "images/creatures/olympus/creature_nymph_dark.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, ?´ë‘ ???˜í”„",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in olympus.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
];
