import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const WILD_CREATURES = [
    {
        id: "beast_leviathan",
        name: "?¬í•´???¬ì•™ ?ˆë¹„?„íƒ„",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/wild/creature_beast_leviathan.png",
        sprites: {
            "idle": "images/creatures/wild/creature_beast_leviathan.png",
            "joy": "images/creatures/wild/creature_beast_leviathan_joy.png",
            "sad": "images/creatures/wild/creature_beast_leviathan_sad.png",
            "angry": "images/creatures/wild/creature_beast_leviathan_angry.png",
            "skill": "images/creatures/wild/creature_beast_leviathan_skill.png",
            "victory": "images/creatures/wild/creature_beast_leviathan_victory.png",
            "defeat": "images/creatures/wild/creature_beast_leviathan_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_beast_leviathan_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_beast_leviathan_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_beast_leviathan_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?¬í•´???¬ì•™ ?ˆë¹„?„íƒ„",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?¬í•´???¬ì•™ ?ˆë¹„?„íƒ„, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?¬í•´???¬ì•™ ?ˆë¹„?„íƒ„, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?¬í•´???¬ì•™ ?ˆë¹„?„íƒ„, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?¬í•´???¬ì•™ ?ˆë¹„?„íƒ„?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "beast_ziz",
        name: "ì²œê³µ??? ê°œ ì§€ì¦?,
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/wild/creature_beast_ziz.png",
        sprites: {
            "idle": "images/creatures/wild/creature_beast_ziz.png",
            "joy": "images/creatures/wild/creature_beast_ziz_joy.png",
            "sad": "images/creatures/wild/creature_beast_ziz_sad.png",
            "angry": "images/creatures/wild/creature_beast_ziz_angry.png",
            "skill": "images/creatures/wild/creature_beast_ziz_skill.png",
            "victory": "images/creatures/wild/creature_beast_ziz_victory.png",
            "defeat": "images/creatures/wild/creature_beast_ziz_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_beast_ziz_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_beast_ziz_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_beast_ziz_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ì²œê³µ??? ê°œ ì§€ì¦?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ì²œê³µ??? ê°œ ì§€ì¦? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ì²œê³µ??? ê°œ ì§€ì¦? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ì²œê³µ??? ê°œ ì§€ì¦? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ì²œê³µ??? ê°œ ì§€ì¦ˆì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fairy_queen_titania",
        name: "?”ì • ?¬ì™• ?°í??ˆì•„",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/wild/creature_fairy_queen_titania.png",
        sprites: {
            "idle": "images/creatures/wild/creature_fairy_queen_titania.png",
            "joy": "images/creatures/wild/creature_fairy_queen_titania_joy.png",
            "sad": "images/creatures/wild/creature_fairy_queen_titania_sad.png",
            "angry": "images/creatures/wild/creature_fairy_queen_titania_angry.png",
            "skill": "images/creatures/wild/creature_fairy_queen_titania_skill.png",
            "victory": "images/creatures/wild/creature_fairy_queen_titania_victory.png",
            "defeat": "images/creatures/wild/creature_fairy_queen_titania_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_fairy_queen_titania_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_fairy_queen_titania_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_fairy_queen_titania_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?”ì • ?¬ì™• ?°í??ˆì•„",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?”ì • ?¬ì™• ?°í??ˆì•„, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?”ì • ?¬ì™• ?°í??ˆì•„, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?”ì • ?¬ì™• ?°í??ˆì•„, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?”ì • ?¬ì™• ?°í??ˆì•„?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "griffin_gold",
        name: "?©ê¸ˆ ê·¸ë¦¬??,
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/wild/creature_griffin_gold.png",
        sprites: {
            "idle": "images/creatures/wild/creature_griffin_gold.png",
            "joy": "images/creatures/wild/creature_griffin_gold_joy.png",
            "sad": "images/creatures/wild/creature_griffin_gold_sad.png",
            "angry": "images/creatures/wild/creature_griffin_gold_angry.png",
            "skill": "images/creatures/wild/creature_griffin_gold_skill.png",
            "victory": "images/creatures/wild/creature_griffin_gold_victory.png",
            "defeat": "images/creatures/wild/creature_griffin_gold_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_griffin_gold_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_griffin_gold_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_griffin_gold_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?©ê¸ˆ ê·¸ë¦¬??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?©ê¸ˆ ê·¸ë¦¬?? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?©ê¸ˆ ê·¸ë¦¬?? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?©ê¸ˆ ê·¸ë¦¬?? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?©ê¸ˆ ê·¸ë¦¬?°ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "turtle_ancient_wild",
        name: "ë§Œë…„ ê³ ë? ê±°ë¶",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/wild/creature_turtle_ancient_wild.png",
        sprites: {
            "idle": "images/creatures/wild/creature_turtle_ancient_wild.png",
            "joy": "images/creatures/wild/creature_turtle_ancient_wild_joy.png",
            "sad": "images/creatures/wild/creature_turtle_ancient_wild_sad.png",
            "angry": "images/creatures/wild/creature_turtle_ancient_wild_angry.png",
            "skill": "images/creatures/wild/creature_turtle_ancient_wild_skill.png",
            "victory": "images/creatures/wild/creature_turtle_ancient_wild_victory.png",
            "defeat": "images/creatures/wild/creature_turtle_ancient_wild_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_turtle_ancient_wild_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_turtle_ancient_wild_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_turtle_ancient_wild_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ë§Œë…„ ê³ ë? ê±°ë¶",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ë§Œë…„ ê³ ë? ê±°ë¶, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ë§Œë…„ ê³ ë? ê±°ë¶, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ë§Œë…„ ê³ ë? ê±°ë¶, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ë§Œë…„ ê³ ë? ê±°ë¶?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dryad_queen",
        name: "?œë¼?´ì–´???¬ì™•",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/wild/creature_dryad_queen.png",
        sprites: {
            "idle": "images/creatures/wild/creature_dryad_queen.png",
            "joy": "images/creatures/wild/creature_dryad_queen_joy.png",
            "sad": "images/creatures/wild/creature_dryad_queen_sad.png",
            "angry": "images/creatures/wild/creature_dryad_queen_angry.png",
            "skill": "images/creatures/wild/creature_dryad_queen_skill.png",
            "victory": "images/creatures/wild/creature_dryad_queen_victory.png",
            "defeat": "images/creatures/wild/creature_dryad_queen_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_dryad_queen_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_dryad_queen_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_dryad_queen_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?œë¼?´ì–´???¬ì™•",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?œë¼?´ì–´???¬ì™•, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?œë¼?´ì–´???¬ì™•, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?œë¼?´ì–´???¬ì™•, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?œë¼?´ì–´???¬ì™•?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mantis_warrior",
        name: "?¬ë§ˆê·€ ë¬´ì‚¬",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/wild/creature_mantis_warrior.png",
        sprites: {
            "idle": "images/creatures/wild/creature_mantis_warrior.png",
            "joy": "images/creatures/wild/creature_mantis_warrior_joy.png",
            "sad": "images/creatures/wild/creature_mantis_warrior_sad.png",
            "angry": "images/creatures/wild/creature_mantis_warrior_angry.png",
            "skill": "images/creatures/wild/creature_mantis_warrior_skill.png",
            "victory": "images/creatures/wild/creature_mantis_warrior_victory.png",
            "defeat": "images/creatures/wild/creature_mantis_warrior_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_mantis_warrior_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?¬ë§ˆê·€ ë¬´ì‚¬",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¬ë§ˆê·€ ë¬´ì‚¬, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?¬ë§ˆê·€ ë¬´ì‚¬?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "orchid_mantis",
        name: "?œì´ˆ ?¬ë§ˆê·€",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/wild/creature_orchid_mantis.png",
        sprites: {
            "idle": "images/creatures/wild/creature_orchid_mantis.png",
            "joy": "images/creatures/wild/creature_orchid_mantis_joy.png",
            "sad": "images/creatures/wild/creature_orchid_mantis_sad.png",
            "angry": "images/creatures/wild/creature_orchid_mantis_angry.png",
            "skill": "images/creatures/wild/creature_orchid_mantis_skill.png",
            "victory": "images/creatures/wild/creature_orchid_mantis_victory.png",
            "defeat": "images/creatures/wild/creature_orchid_mantis_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_orchid_mantis_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?œì´ˆ ?¬ë§ˆê·€",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?œì´ˆ ?¬ë§ˆê·€, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?œì´ˆ ?¬ë§ˆê·€?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "crystal_crab",
        name: "?˜ì • ê²?,
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/wild/creature_crystal_crab.png",
        sprites: {
            "idle": "images/creatures/wild/creature_crystal_crab.png",
            "joy": "images/creatures/wild/creature_crystal_crab_joy.png",
            "sad": "images/creatures/wild/creature_crystal_crab_sad.png",
            "angry": "images/creatures/wild/creature_crystal_crab_angry.png",
            "skill": "images/creatures/wild/creature_crystal_crab_skill.png",
            "victory": "images/creatures/wild/creature_crystal_crab_victory.png",
            "defeat": "images/creatures/wild/creature_crystal_crab_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_crystal_crab_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?˜ì • ê²?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?˜ì • ê²? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?˜ì • ê²Œì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "electric_eel_king",
        name: "ë²ˆê°œ ?¥ì–´ ??,
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/wild/creature_electric_eel_king.png",
        sprites: {
            "idle": "images/creatures/wild/creature_electric_eel_king.png",
            "joy": "images/creatures/wild/creature_electric_eel_king_joy.png",
            "sad": "images/creatures/wild/creature_electric_eel_king_sad.png",
            "angry": "images/creatures/wild/creature_electric_eel_king_angry.png",
            "skill": "images/creatures/wild/creature_electric_eel_king_skill.png",
            "victory": "images/creatures/wild/creature_electric_eel_king_victory.png",
            "defeat": "images/creatures/wild/creature_electric_eel_king_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_electric_eel_king_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ë²ˆê°œ ?¥ì–´ ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë²ˆê°œ ?¥ì–´ ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ë²ˆê°œ ?¥ì–´ ?•ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "magma_slime_giant",
        name: "?€??ë§ˆê·¸ë§??¬ë¼??,
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/wild/creature_magma_slime_giant.png",
        sprites: {
            "idle": "images/creatures/wild/creature_magma_slime_giant.png",
            "joy": "images/creatures/wild/creature_magma_slime_giant_joy.png",
            "sad": "images/creatures/wild/creature_magma_slime_giant_sad.png",
            "angry": "images/creatures/wild/creature_magma_slime_giant_angry.png",
            "skill": "images/creatures/wild/creature_magma_slime_giant_skill.png",
            "victory": "images/creatures/wild/creature_magma_slime_giant_victory.png",
            "defeat": "images/creatures/wild/creature_magma_slime_giant_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_magma_slime_giant_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?€??ë§ˆê·¸ë§??¬ë¼??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?€??ë§ˆê·¸ë§??¬ë¼?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?€??ë§ˆê·¸ë§??¬ë¼?„ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fossil_stone",
        name: "?€ì§ì´???”ì„",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/wild/creature_fossil_stone.png",
        sprites: {
            "idle": "images/creatures/wild/creature_fossil_stone.png",
            "joy": "images/creatures/wild/creature_fossil_stone_joy.png",
            "sad": "images/creatures/wild/creature_fossil_stone_sad.png",
            "angry": "images/creatures/wild/creature_fossil_stone_angry.png",
            "skill": "images/creatures/wild/creature_fossil_stone_skill.png",
            "victory": "images/creatures/wild/creature_fossil_stone_victory.png",
            "defeat": "images/creatures/wild/creature_fossil_stone_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_fossil_stone_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?€ì§ì´???”ì„",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?€ì§ì´???”ì„, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?€ì§ì´???”ì„?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mist_crawler",
        name: "?ˆê°œ ?ì˜ ë°°íšŒ??,
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/wild/creature_mist_crawler.png",
        sprites: {
            "idle": "images/creatures/wild/creature_mist_crawler.png",
            "joy": "images/creatures/wild/creature_mist_crawler_joy.png",
            "sad": "images/creatures/wild/creature_mist_crawler_sad.png",
            "angry": "images/creatures/wild/creature_mist_crawler_angry.png",
            "skill": "images/creatures/wild/creature_mist_crawler_skill.png",
            "victory": "images/creatures/wild/creature_mist_crawler_victory.png",
            "defeat": "images/creatures/wild/creature_mist_crawler_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_mist_crawler_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?ˆê°œ ?ì˜ ë°°íšŒ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?ˆê°œ ?ì˜ ë°°íšŒ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?ˆê°œ ?ì˜ ë°°íšŒ?ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "forest_guardian",
        name: "?²ì˜ ?˜í˜¸??,
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/wild/creature_forest_guardian.png",
        sprites: {
            "idle": "images/creatures/wild/creature_forest_guardian.png",
            "joy": "images/creatures/wild/creature_forest_guardian_joy.png",
            "sad": "images/creatures/wild/creature_forest_guardian_sad.png",
            "angry": "images/creatures/wild/creature_forest_guardian_angry.png",
            "skill": "images/creatures/wild/creature_forest_guardian_skill.png",
            "victory": "images/creatures/wild/creature_forest_guardian_victory.png",
            "defeat": "images/creatures/wild/creature_forest_guardian_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_forest_guardian_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?²ì˜ ?˜í˜¸??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?²ì˜ ?˜í˜¸?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?²ì˜ ?˜í˜¸?ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sand_prowler",
        name: "ëª¨ë˜ ? ë³µê¾?,
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_sand_prowler.png",
        sprites: {
            "idle": "images/creatures/wild/creature_sand_prowler.png",
            "joy": "images/creatures/wild/creature_sand_prowler_joy.png",
            "sad": "images/creatures/wild/creature_sand_prowler_sad.png",
            "angry": "images/creatures/wild/creature_sand_prowler_angry.png",
            "skill": "images/creatures/wild/creature_sand_prowler_skill.png",
            "victory": "images/creatures/wild/creature_sand_prowler_victory.png",
            "defeat": "images/creatures/wild/creature_sand_prowler_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_sand_prowler_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ëª¨ë˜ ? ë³µê¾?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ëª¨ë˜ ? ë³µê¾? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ëª¨ë˜ ? ë³µê¾¼ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "spark_mouse",
        name: "ë²ˆê°œ ?ì¥",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_spark_mouse.png",
        sprites: {
            "idle": "images/creatures/wild/creature_spark_mouse.png",
            "joy": "images/creatures/wild/creature_spark_mouse_joy.png",
            "sad": "images/creatures/wild/creature_spark_mouse_sad.png",
            "angry": "images/creatures/wild/creature_spark_mouse_angry.png",
            "skill": "images/creatures/wild/creature_spark_mouse_skill.png",
            "victory": "images/creatures/wild/creature_spark_mouse_victory.png",
            "defeat": "images/creatures/wild/creature_spark_mouse_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_spark_mouse_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ë²ˆê°œ ?ì¥",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë²ˆê°œ ?ì¥, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ë²ˆê°œ ?ì¥?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "boulder_beetle",
        name: "ë°”ìœ„ ?±ì •ë²Œë ˆ",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_boulder_beetle.png",
        sprites: {
            "idle": "images/creatures/wild/creature_boulder_beetle.png",
            "joy": "images/creatures/wild/creature_boulder_beetle_joy.png",
            "sad": "images/creatures/wild/creature_boulder_beetle_sad.png",
            "angry": "images/creatures/wild/creature_boulder_beetle_angry.png",
            "skill": "images/creatures/wild/creature_boulder_beetle_skill.png",
            "victory": "images/creatures/wild/creature_boulder_beetle_victory.png",
            "defeat": "images/creatures/wild/creature_boulder_beetle_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_boulder_beetle_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ë°”ìœ„ ?±ì •ë²Œë ˆ",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë°”ìœ„ ?±ì •ë²Œë ˆ, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ë°”ìœ„ ?±ì •ë²Œë ˆ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "thorny_vine",
        name: "ê°€???©êµ´",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_thorny_vine.png",
        sprites: {
            "idle": "images/creatures/wild/creature_thorny_vine.png",
            "joy": "images/creatures/wild/creature_thorny_vine_joy.png",
            "sad": "images/creatures/wild/creature_thorny_vine_sad.png",
            "angry": "images/creatures/wild/creature_thorny_vine_angry.png",
            "skill": "images/creatures/wild/creature_thorny_vine_skill.png",
            "victory": "images/creatures/wild/creature_thorny_vine_victory.png",
            "defeat": "images/creatures/wild/creature_thorny_vine_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_thorny_vine_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ê°€???©êµ´",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê°€???©êµ´, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ê°€???©êµ´?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
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
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_unicorn_young.png",
        sprites: {
            "idle": "images/creatures/wild/creature_unicorn_young.png",
            "joy": "images/creatures/wild/creature_unicorn_young_joy.png",
            "sad": "images/creatures/wild/creature_unicorn_young_sad.png",
            "angry": "images/creatures/wild/creature_unicorn_young_angry.png",
            "skill": "images/creatures/wild/creature_unicorn_young_skill.png",
            "victory": "images/creatures/wild/creature_unicorn_young_victory.png",
            "defeat": "images/creatures/wild/creature_unicorn_young_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_unicorn_young_gallery_lv1.png"
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
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? Unknown?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "seedling_spirit",
        name: "?ˆì‹¹ ?•ë ¹",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_seedling_spirit.png",
        sprites: {
            "idle": "images/creatures/wild/creature_seedling_spirit.png",
            "joy": "images/creatures/wild/creature_seedling_spirit_joy.png",
            "sad": "images/creatures/wild/creature_seedling_spirit_sad.png",
            "angry": "images/creatures/wild/creature_seedling_spirit_angry.png",
            "skill": "images/creatures/wild/creature_seedling_spirit_skill.png",
            "victory": "images/creatures/wild/creature_seedling_spirit_victory.png",
            "defeat": "images/creatures/wild/creature_seedling_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_seedling_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?ˆì‹¹ ?•ë ¹",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?ˆì‹¹ ?•ë ¹, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?ˆì‹¹ ?•ë ¹?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "caterpillar_fat",
        name: "?µí†µ??? ë²Œ??,
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_caterpillar_fat.png",
        sprites: {
            "idle": "images/creatures/wild/creature_caterpillar_fat.png",
            "joy": "images/creatures/wild/creature_caterpillar_fat_joy.png",
            "sad": "images/creatures/wild/creature_caterpillar_fat_sad.png",
            "angry": "images/creatures/wild/creature_caterpillar_fat_angry.png",
            "skill": "images/creatures/wild/creature_caterpillar_fat_skill.png",
            "victory": "images/creatures/wild/creature_caterpillar_fat_victory.png",
            "defeat": "images/creatures/wild/creature_caterpillar_fat_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_caterpillar_fat_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?µí†µ??? ë²Œ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?µí†µ??? ë²Œ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?µí†µ??? ë²Œ?ˆì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "tadpole_wiggle",
        name: "ê¼¬ë¬¼ê±°ë¦¬???¬ì±™??,
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_tadpole_wiggle.png",
        sprites: {
            "idle": "images/creatures/wild/creature_tadpole_wiggle.png",
            "joy": "images/creatures/wild/creature_tadpole_wiggle_joy.png",
            "sad": "images/creatures/wild/creature_tadpole_wiggle_sad.png",
            "angry": "images/creatures/wild/creature_tadpole_wiggle_angry.png",
            "skill": "images/creatures/wild/creature_tadpole_wiggle_skill.png",
            "victory": "images/creatures/wild/creature_tadpole_wiggle_victory.png",
            "defeat": "images/creatures/wild/creature_tadpole_wiggle_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_tadpole_wiggle_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ê¼¬ë¬¼ê±°ë¦¬???¬ì±™??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê¼¬ë¬¼ê±°ë¦¬???¬ì±™?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ê¼¬ë¬¼ê±°ë¦¬???¬ì±™?´ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "leaf_insect",
        name: "?˜ë­‡??ë²Œë ˆ",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_leaf_insect.png",
        sprites: {
            "idle": "images/creatures/wild/creature_leaf_insect.png",
            "joy": "images/creatures/wild/creature_leaf_insect_joy.png",
            "sad": "images/creatures/wild/creature_leaf_insect_sad.png",
            "angry": "images/creatures/wild/creature_leaf_insect_angry.png",
            "skill": "images/creatures/wild/creature_leaf_insect_skill.png",
            "victory": "images/creatures/wild/creature_leaf_insect_victory.png",
            "defeat": "images/creatures/wild/creature_leaf_insect_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_leaf_insect_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?˜ë­‡??ë²Œë ˆ",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?˜ë­‡??ë²Œë ˆ, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?˜ë­‡??ë²Œë ˆ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "willOWisp_green",
        name: "ì´ˆë¡ ?„ê¹¨ë¹„ë¶ˆ",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_willOWisp_green.png",
        sprites: {
            "idle": "images/creatures/wild/creature_willOWisp_green.png",
            "joy": "images/creatures/wild/creature_willOWisp_green_joy.png",
            "sad": "images/creatures/wild/creature_willOWisp_green_sad.png",
            "angry": "images/creatures/wild/creature_willOWisp_green_angry.png",
            "skill": "images/creatures/wild/creature_willOWisp_green_skill.png",
            "victory": "images/creatures/wild/creature_willOWisp_green_victory.png",
            "defeat": "images/creatures/wild/creature_willOWisp_green_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_willOWisp_green_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ì´ˆë¡ ?„ê¹¨ë¹„ë¶ˆ",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ì´ˆë¡ ?„ê¹¨ë¹„ë¶ˆ, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ì´ˆë¡ ?„ê¹¨ë¹„ë¶ˆ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sun_flower_spirit",
        name: "?´ë°”?¼ê¸° ?•ë ¹",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_sun_flower_spirit.png",
        sprites: {
            "idle": "images/creatures/wild/creature_sun_flower_spirit.png",
            "joy": "images/creatures/wild/creature_sun_flower_spirit_joy.png",
            "sad": "images/creatures/wild/creature_sun_flower_spirit_sad.png",
            "angry": "images/creatures/wild/creature_sun_flower_spirit_angry.png",
            "skill": "images/creatures/wild/creature_sun_flower_spirit_skill.png",
            "victory": "images/creatures/wild/creature_sun_flower_spirit_victory.png",
            "defeat": "images/creatures/wild/creature_sun_flower_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_sun_flower_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?´ë°”?¼ê¸° ?•ë ¹",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?´ë°”?¼ê¸° ?•ë ¹, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?´ë°”?¼ê¸° ?•ë ¹?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "moon_flower_spirit",
        name: "?¬ë§?´ê½ƒ ?•ë ¹",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_moon_flower_spirit.png",
        sprites: {
            "idle": "images/creatures/wild/creature_moon_flower_spirit.png",
            "joy": "images/creatures/wild/creature_moon_flower_spirit_joy.png",
            "sad": "images/creatures/wild/creature_moon_flower_spirit_sad.png",
            "angry": "images/creatures/wild/creature_moon_flower_spirit_angry.png",
            "skill": "images/creatures/wild/creature_moon_flower_spirit_skill.png",
            "victory": "images/creatures/wild/creature_moon_flower_spirit_victory.png",
            "defeat": "images/creatures/wild/creature_moon_flower_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_moon_flower_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?¬ë§?´ê½ƒ ?•ë ¹",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¬ë§?´ê½ƒ ?•ë ¹, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?¬ë§?´ê½ƒ ?•ë ¹?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "desert_scorpion",
        name: "?¬ë§‰ ?„ê°ˆ",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_desert_scorpion.png",
        sprites: {
            "idle": "images/creatures/wild/creature_desert_scorpion.png",
            "joy": "images/creatures/wild/creature_desert_scorpion_joy.png",
            "sad": "images/creatures/wild/creature_desert_scorpion_sad.png",
            "angry": "images/creatures/wild/creature_desert_scorpion_angry.png",
            "skill": "images/creatures/wild/creature_desert_scorpion_skill.png",
            "victory": "images/creatures/wild/creature_desert_scorpion_victory.png",
            "defeat": "images/creatures/wild/creature_desert_scorpion_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_desert_scorpion_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?¬ë§‰ ?„ê°ˆ",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¬ë§‰ ?„ê°ˆ, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?¬ë§‰ ?„ê°ˆ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "panda_warrior",
        name: "?ë‹¤ ?„ì‚¬",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_panda_warrior.png",
        sprites: {
            "idle": "images/creatures/wild/creature_panda_warrior.png",
            "joy": "images/creatures/wild/creature_panda_warrior_joy.png",
            "sad": "images/creatures/wild/creature_panda_warrior_sad.png",
            "angry": "images/creatures/wild/creature_panda_warrior_angry.png",
            "skill": "images/creatures/wild/creature_panda_warrior_skill.png",
            "victory": "images/creatures/wild/creature_panda_warrior_victory.png",
            "defeat": "images/creatures/wild/creature_panda_warrior_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_panda_warrior_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?ë‹¤ ?„ì‚¬",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?ë‹¤ ?„ì‚¬, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?ë‹¤ ?„ì‚¬?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "creator_gaia",
        name: "ì°½ì¡°ì£?ê°€?´ì•„",
        rarity: RANKS.UR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 30, baseInt: 30,
        image: "images/creatures/wild/creature_creator_gaia.png",
        sprites: {
            "idle": "images/creatures/wild/creature_creator_gaia.png",
            "joy": "images/creatures/wild/creature_creator_gaia_joy.png",
            "sad": "images/creatures/wild/creature_creator_gaia_sad.png",
            "angry": "images/creatures/wild/creature_creator_gaia_angry.png",
            "skill": "images/creatures/wild/creature_creator_gaia_skill.png",
            "victory": "images/creatures/wild/creature_creator_gaia_victory.png",
            "defeat": "images/creatures/wild/creature_creator_gaia_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_creator_gaia_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_creator_gaia_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_creator_gaia_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ì°½ì¡°ì£?ê°€?´ì•„",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ì°½ì¡°ì£?ê°€?´ì•„, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ì°½ì¡°ì£?ê°€?´ì•„, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ì°½ì¡°ì£?ê°€?´ì•„, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ì°½ì¡°ì£?ê°€?´ì•„?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dragon_drake",
        name: "??—¼???¨ì™• ?´ê·¸?ˆìŠ¤",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/wild/creature_dragon_drake.png",
        sprites: {
            "idle": "images/creatures/wild/creature_dragon_drake.png",
            "joy": "images/creatures/wild/creature_dragon_drake_joy.png",
            "sad": "images/creatures/wild/creature_dragon_drake_sad.png",
            "angry": "images/creatures/wild/creature_dragon_drake_angry.png",
            "skill": "images/creatures/wild/creature_dragon_drake_skill.png",
            "victory": "images/creatures/wild/creature_dragon_drake_victory.png",
            "defeat": "images/creatures/wild/creature_dragon_drake_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_dragon_drake_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_dragon_drake_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_dragon_drake_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ??—¼???¨ì™• ?´ê·¸?ˆìŠ¤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ??—¼???¨ì™• ?´ê·¸?ˆìŠ¤, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ??—¼???¨ì™• ?´ê·¸?ˆìŠ¤, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ??—¼???¨ì™• ?´ê·¸?ˆìŠ¤, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ??—¼???¨ì™• ?´ê·¸?ˆìŠ¤?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "beast_behemoth",
        name: "?€ì§€??ì§ìŠ¹ ë² íˆëª¨ìŠ¤",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/wild/creature_beast_behemoth.png",
        sprites: {
            "idle": "images/creatures/wild/creature_beast_behemoth.png",
            "joy": "images/creatures/wild/creature_beast_behemoth_joy.png",
            "sad": "images/creatures/wild/creature_beast_behemoth_sad.png",
            "angry": "images/creatures/wild/creature_beast_behemoth_angry.png",
            "skill": "images/creatures/wild/creature_beast_behemoth_skill.png",
            "victory": "images/creatures/wild/creature_beast_behemoth_victory.png",
            "defeat": "images/creatures/wild/creature_beast_behemoth_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_beast_behemoth_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_beast_behemoth_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_beast_behemoth_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?€ì§€??ì§ìŠ¹ ë² íˆëª¨ìŠ¤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?€ì§€??ì§ìŠ¹ ë² íˆëª¨ìŠ¤, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?€ì§€??ì§ìŠ¹ ë² íˆëª¨ìŠ¤, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?€ì§€??ì§ìŠ¹ ë² íˆëª¨ìŠ¤, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?€ì§€??ì§ìŠ¹ ë² íˆëª¨ìŠ¤?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "chimera",
        name: "?¤ë©”??,
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/wild/creature_chimera_joy.png",
        sprites: {
            "idle": "images/creatures/wild/creature_chimera_joy.png",
            "joy": "images/creatures/wild/creature_chimera_joy.png",
            "sad": "images/creatures/wild/creature_chimera_sad.png",
            "angry": "images/creatures/wild/creature_chimera_angry.png",
            "skill": "images/creatures/wild/creature_chimera_skill.png",
            "victory": "images/creatures/wild/creature_chimera_victory.png",
            "defeat": "images/creatures/wild/creature_chimera_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_chimera_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_chimera_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_chimera_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?¤ë©”??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?¤ë©”?? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?¤ë©”?? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?¤ë©”?? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?¤ë©”?¼ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ent_ancient",
        name: "ê³ ë? ?”íŠ¸",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/wild/creature_ent_ancient.png",
        sprites: {
            "idle": "images/creatures/wild/creature_ent_ancient.png",
            "joy": "images/creatures/wild/creature_ent_ancient_joy.png",
            "sad": "images/creatures/wild/creature_ent_ancient_sad.png",
            "angry": "images/creatures/wild/creature_ent_ancient_angry.png",
            "skill": "images/creatures/wild/creature_ent_ancient_skill.png",
            "victory": "images/creatures/wild/creature_ent_ancient_victory.png",
            "defeat": "images/creatures/wild/creature_ent_ancient_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_ent_ancient_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ê³ ë? ?”íŠ¸",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê³ ë? ?”íŠ¸, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ê³ ë? ?”íŠ¸?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "elemental_water",
        name: "ë¬¼ì˜ ?•ë ¹",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/wild/creature_elemental_water.png",
        sprites: {
            "idle": "images/creatures/wild/creature_elemental_water.png",
            "joy": "images/creatures/wild/creature_elemental_water_joy.png",
            "sad": "images/creatures/wild/creature_elemental_water_sad.png",
            "angry": "images/creatures/wild/creature_elemental_water_angry.png",
            "skill": "images/creatures/wild/creature_elemental_water_skill.png",
            "victory": "images/creatures/wild/creature_elemental_water_victory.png",
            "defeat": "images/creatures/wild/creature_elemental_water_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_elemental_water_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ë¬¼ì˜ ?•ë ¹",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë¬¼ì˜ ?•ë ¹, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ë¬¼ì˜ ?•ë ¹?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "wolf_dire",
        name: "?¤ì´???¸í”„",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/wild/creature_wolf_dire.png",
        sprites: {
            "idle": "images/creatures/wild/creature_wolf_dire.png",
            "joy": "images/creatures/wild/creature_wolf_dire_joy.png",
            "sad": "images/creatures/wild/creature_wolf_dire_sad.png",
            "angry": "images/creatures/wild/creature_wolf_dire_angry.png",
            "skill": "images/creatures/wild/creature_wolf_dire_skill.png",
            "victory": "images/creatures/wild/creature_wolf_dire_victory.png",
            "defeat": "images/creatures/wild/creature_wolf_dire_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_wolf_dire_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?¤ì´???¸í”„",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¤ì´???¸í”„, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?¤ì´???¸í”„?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "golem_mud",
        name: "ì§„í™ ê³¨ë ˜",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/wild/creature_golem_mud.png",
        sprites: {
            "idle": "images/creatures/wild/creature_golem_mud.png",
            "joy": "images/creatures/wild/creature_golem_mud_joy.png",
            "sad": "images/creatures/wild/creature_golem_mud_sad.png",
            "angry": "images/creatures/wild/creature_golem_mud_angry.png",
            "skill": "images/creatures/wild/creature_golem_mud_skill.png",
            "victory": "images/creatures/wild/creature_golem_mud_victory.png",
            "defeat": "images/creatures/wild/creature_golem_mud_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_golem_mud_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ì§„í™ ê³¨ë ˜",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ì§„í™ ê³¨ë ˜, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ì§„í™ ê³¨ë ˜?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "magma_slime",
        name: "ë§ˆê·¸ë§??¬ë¼??,
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_magma_slime.png",
        sprites: {
            "idle": "images/creatures/wild/creature_magma_slime.png",
            "joy": "images/creatures/wild/creature_magma_slime_joy.png",
            "sad": "images/creatures/wild/creature_magma_slime_sad.png",
            "angry": "images/creatures/wild/creature_magma_slime_angry.png",
            "skill": "images/creatures/wild/creature_magma_slime_skill.png",
            "victory": "images/creatures/wild/creature_magma_slime_victory.png",
            "defeat": "images/creatures/wild/creature_magma_slime_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_magma_slime_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ë§ˆê·¸ë§??¬ë¼??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë§ˆê·¸ë§??¬ë¼?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ë§ˆê·¸ë§??¬ë¼?„ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mushroom_angry_new",
        name: "?”ë‚œ ë²„ì„¯",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_mushroom_angry_new.png",
        sprites: {
            "idle": "images/creatures/wild/creature_mushroom_angry_new.png",
            "joy": "images/creatures/wild/creature_mushroom_angry_new_joy.png",
            "sad": "images/creatures/wild/creature_mushroom_angry_new_sad.png",
            "angry": "images/creatures/wild/creature_mushroom_angry_new_angry.png",
            "skill": "images/creatures/wild/creature_mushroom_angry_new_skill.png",
            "victory": "images/creatures/wild/creature_mushroom_angry_new_victory.png",
            "defeat": "images/creatures/wild/creature_mushroom_angry_new_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_mushroom_angry_new_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?”ë‚œ ë²„ì„¯",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?”ë‚œ ë²„ì„¯, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?”ë‚œ ë²„ì„¯?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fish_flying_new",
        name: "? ì¹˜",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_fish_flying_new.png",
        sprites: {
            "idle": "images/creatures/wild/creature_fish_flying_new.png",
            "joy": "images/creatures/wild/creature_fish_flying_new_joy.png",
            "sad": "images/creatures/wild/creature_fish_flying_new_sad.png",
            "angry": "images/creatures/wild/creature_fish_flying_new_angry.png",
            "skill": "images/creatures/wild/creature_fish_flying_new_skill.png",
            "victory": "images/creatures/wild/creature_fish_flying_new_victory.png",
            "defeat": "images/creatures/wild/creature_fish_flying_new_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_fish_flying_new_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ? ì¹˜",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ? ì¹˜, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ? ì¹˜?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
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
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_angel_arch.png",
        sprites: {
            "idle": "images/creatures/wild/creature_angel_arch.png",
            "joy": "images/creatures/wild/creature_angel_arch_joy.png",
            "sad": "images/creatures/wild/creature_angel_arch_sad.png",
            "angry": "images/creatures/wild/creature_angel_arch_angry.png",
            "skill": "images/creatures/wild/creature_angel_arch_skill.png",
            "victory": "images/creatures/wild/creature_angel_arch_victory.png",
            "defeat": "images/creatures/wild/creature_angel_arch_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_angel_arch_gallery_lv1.png"
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
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? Unknown?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
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
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_time_lord_chronos.png",
        sprites: {
            "idle": "images/creatures/wild/creature_time_lord_chronos.png",
            "joy": "images/creatures/wild/creature_time_lord_chronos_joy.png",
            "sad": "images/creatures/wild/creature_time_lord_chronos_sad.png",
            "angry": "images/creatures/wild/creature_time_lord_chronos_angry.png",
            "skill": "images/creatures/wild/creature_time_lord_chronos_skill.png",
            "victory": "images/creatures/wild/creature_time_lord_chronos_victory.png",
            "defeat": "images/creatures/wild/creature_time_lord_chronos_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_time_lord_chronos_gallery_lv1.png"
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
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? Unknown?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
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
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_god_zeus_shy.jpg",
        sprites: {
            "idle": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "joy": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "sad": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "angry": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "skill": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "victory": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "defeat": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "gallery": {
                "lv1": "images/creatures/wild/creature_god_zeus_shy.jpg"
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
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? Unknown?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
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
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_god_zeus_angry.jpg",
        sprites: {
            "idle": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "joy": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "sad": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "angry": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "skill": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "victory": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "defeat": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "gallery": {
                "lv1": "images/creatures/wild/creature_god_zeus_angry.jpg"
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
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? Unknown?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
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
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_god_zeus_love.jpg",
        sprites: {
            "idle": "images/creatures/wild/creature_god_zeus_love.jpg",
            "joy": "images/creatures/wild/creature_god_zeus_love.jpg",
            "sad": "images/creatures/wild/creature_god_zeus_love.jpg",
            "angry": "images/creatures/wild/creature_god_zeus_love.jpg",
            "skill": "images/creatures/wild/creature_god_zeus_love.jpg",
            "victory": "images/creatures/wild/creature_god_zeus_love.jpg",
            "defeat": "images/creatures/wild/creature_god_zeus_love.jpg",
            "gallery": {
                "lv1": "images/creatures/wild/creature_god_zeus_love.jpg"
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
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? Unknown?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
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
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_kraken_idol.png",
        sprites: {
            "idle": "images/creatures/wild/creature_kraken_idol.png",
            "joy": "images/creatures/wild/creature_kraken_idol_joy.png",
            "sad": "images/creatures/wild/creature_kraken_idol_sad.png",
            "angry": "images/creatures/wild/creature_kraken_idol_angry.png",
            "skill": "images/creatures/wild/creature_kraken_idol_skill.png",
            "victory": "images/creatures/wild/creature_kraken_idol_victory.png",
            "defeat": "images/creatures/wild/creature_kraken_idol_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_kraken_idol_gallery_lv1.png"
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
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? Unknown?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
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
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_kraken_baby.png",
        sprites: {
            "idle": "images/creatures/wild/creature_kraken_baby.png",
            "joy": "images/creatures/wild/creature_kraken_baby_joy.png",
            "sad": "images/creatures/wild/creature_kraken_baby_sad.png",
            "angry": "images/creatures/wild/creature_kraken_baby_angry.png",
            "skill": "images/creatures/wild/creature_kraken_baby_skill.png",
            "victory": "images/creatures/wild/creature_kraken_baby_victory.png",
            "defeat": "images/creatures/wild/creature_kraken_baby_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_kraken_baby_gallery_lv1.png"
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
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? Unknown?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
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
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_rat_brown.png",
        sprites: {
            "idle": "images/creatures/wild/creature_rat_brown.png",
            "joy": "images/creatures/wild/creature_rat_brown_joy.png",
            "sad": "images/creatures/wild/creature_rat_brown_sad.png",
            "angry": "images/creatures/wild/creature_rat_brown_angry.png",
            "skill": "images/creatures/wild/creature_rat_brown_skill.png",
            "victory": "images/creatures/wild/creature_rat_brown_victory.png",
            "defeat": "images/creatures/wild/creature_rat_brown_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_rat_brown_gallery_lv1.png"
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
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? Unknown?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "slime_green_new",
        name: "ì´ˆë¡ ?¬ë¼??,
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_slime_green_new.png",
        sprites: {
            "idle": "images/creatures/wild/creature_slime_green_new.png",
            "joy": "images/creatures/wild/creature_slime_green_new_joy.png",
            "sad": "images/creatures/wild/creature_slime_green_new_sad.png",
            "angry": "images/creatures/wild/creature_slime_green_new_angry.png",
            "skill": "images/creatures/wild/creature_slime_green_new_skill.png",
            "victory": "images/creatures/wild/creature_slime_green_new_victory.png",
            "defeat": "images/creatures/wild/creature_slime_green_new_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_slime_green_new_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ì´ˆë¡ ?¬ë¼??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ì´ˆë¡ ?¬ë¼?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ì´ˆë¡ ?¬ë¼?„ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "blue_slime",
        name: "?Œë‘ ?¬ë¼??,
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_blue_slime.png",
        sprites: {
            "idle": "images/creatures/wild/creature_blue_slime.png",
            "joy": "images/creatures/wild/creature_blue_slime_joy.png",
            "sad": "images/creatures/wild/creature_blue_slime_sad.png",
            "angry": "images/creatures/wild/creature_blue_slime_angry.png",
            "skill": "images/creatures/wild/creature_blue_slime_skill.png",
            "victory": "images/creatures/wild/creature_blue_slime_victory.png",
            "defeat": "images/creatures/wild/creature_blue_slime_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_blue_slime_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ?Œë‘ ?¬ë¼??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?Œë‘ ?¬ë¼?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ?Œë‘ ?¬ë¼?„ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "pebble_new",
        name: "ì¡°ì•½??,
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_pebble_new.png",
        sprites: {
            "idle": "images/creatures/wild/creature_pebble_new.png",
            "joy": "images/creatures/wild/creature_pebble_new_joy.png",
            "sad": "images/creatures/wild/creature_pebble_new_sad.png",
            "angry": "images/creatures/wild/creature_pebble_new_angry.png",
            "skill": "images/creatures/wild/creature_pebble_new_skill.png",
            "victory": "images/creatures/wild/creature_pebble_new_victory.png",
            "defeat": "images/creatures/wild/creature_pebble_new_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_pebble_new_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, ì¡°ì•½??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ì¡°ì•½?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?€?ì—°???•ë ¹?¤ê³¼ ?¨ê»˜ ?²ê³¼ ?€ì§€ë¥?ì§€?µë‹ˆ?? ì¡°ì•½?Œì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "chimera",
        name: "?¤ë©”??,
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Fire", "Dark", "Beast"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/wild/creature_chimera_joy.png",
        sprites: {
            "idle": "images/creatures/wild/creature_chimera_joy.png",
            "joy": "images/creatures/wild/creature_chimera_joy.png",
            "sad": "images/creatures/wild/creature_chimera_joy.png",
            "angry": "images/creatures/wild/creature_chimera_joy.png",
            "skill": "images/creatures/wild/creature_chimera_joy.png",
            "victory": "images/creatures/wild/creature_chimera_joy.png",
            "defeat": "images/creatures/wild/creature_chimera_joy.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_chimera_joy.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, monster, lion goat snake hybrid, fierce, fire breathing, Light, ?¤ë©”??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¤ë©”?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "?©ì„±??,
            "story": "?¬ì, ?¼ì†Œ, ë±€???©ì³ì§?ê´´ìˆ˜. ê°•ë ¥???”ì—¼???´ë¿œ?¼ë©° ?„ì¥???©ì”?ˆë‹¤.",
            "personality": "Ferocious"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    }
    ,
    {
        id: "creature_unicorn",
        name: "? ë‹ˆì½?,
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Earth"], // Default element
        baseStr: 18, baseInt: 18,
        image: "images/creatures/wild/creature_creature_unicorn.png",
        sprites: {
            "idle": "images/creatures/wild/creature_creature_unicorn.png",
            "joy": "images/creatures/wild/creature_creature_unicorn.png", // Fallback
            "sad": "images/creatures/wild/creature_creature_unicorn.png", // Fallback
            "angry": "images/creatures/wild/creature_creature_unicorn.png", // Fallback
            "skill": "images/creatures/wild/creature_creature_unicorn.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, ? ë‹ˆì½?,
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in wild.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
    ,
    {
        id: "creature_giant_hill",
        name: "?¸ë• ê±°ì¸",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Earth"], // Default element
        baseStr: 12, baseInt: 12,
        image: "images/creatures/wild/creature_creature_giant_hill.png",
        sprites: {
            "idle": "images/creatures/wild/creature_creature_giant_hill.png",
            "joy": "images/creatures/wild/creature_creature_giant_hill.png", // Fallback
            "sad": "images/creatures/wild/creature_creature_giant_hill.png", // Fallback
            "angry": "images/creatures/wild/creature_creature_giant_hill.png", // Fallback
            "skill": "images/creatures/wild/creature_creature_giant_hill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, ?¸ë• ê±°ì¸",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in wild.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
    ,
    {
        id: "creature_bat_small",
        name: "?™êµ´ ë°•ì¥",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Earth"], // Default element
        baseStr: 8, baseInt: 8,
        image: "images/creatures/wild/creature_creature_bat_small.png",
        sprites: {
            "idle": "images/creatures/wild/creature_creature_bat_small.png",
            "joy": "images/creatures/wild/creature_creature_bat_small.png", // Fallback
            "sad": "images/creatures/wild/creature_creature_bat_small.png", // Fallback
            "angry": "images/creatures/wild/creature_creature_bat_small.png", // Fallback
            "skill": "images/creatures/wild/creature_creature_bat_small.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, ?™êµ´ ë°•ì¥",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in wild.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
    ,
    {
        id: "snow_spirit",
        name: "?¤ì› ?•ë ¹",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Earth"], // Default element
        baseStr: 12, baseInt: 12,
        image: "images/creatures/wild/creature_snow_spirit.png",
        sprites: {
            "idle": "images/creatures/wild/creature_snow_spirit.png",
            "joy": "images/creatures/wild/creature_snow_spirit.png", // Fallback
            "sad": "images/creatures/wild/creature_snow_spirit.png", // Fallback
            "angry": "images/creatures/wild/creature_snow_spirit.png", // Fallback
            "skill": "images/creatures/wild/creature_snow_spirit.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, ?¤ì› ?•ë ¹",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in wild.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "time_lord_chronos",
        name: "?œê°„?????¬ë¡œ?¸ìŠ¤",
        rarity: RANKS.UR,
        world: WORLDS.WILD,
        elements: ["Light", "Dark"],
        baseStr: 30, baseInt: 30,
        image: "images/creatures/wild/creature_time_lord_chronos.png",
        sprites: {
            "idle": "images/creatures/wild/creature_time_lord_chronos.png",
            "joy": "images/creatures/wild/creature_time_lord_chronos.png",
            "sad": "images/creatures/wild/creature_time_lord_chronos.png",
            "angry": "images/creatures/wild/creature_time_lord_chronos.png",
            "skill": "images/creatures/wild/creature_time_lord_chronos.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, ?œê°„?????¬ë¡œ?¸ìŠ¤, time lord, chronos, clock gears, purple energy",
            "idle": "standing pose with clock staff"
        },
        lore: {
            "title": "?œê°„??ì§€ë°°ì",
            "story": "?œê°„???¤ìŠ¤ë¦¬ëŠ” ê³ ë????? ëª¨ë“  ?œê°„???ë¦„???ì•ˆ???ê³  ?ˆìŠµ?ˆë‹¤.",
            "personality": "? ë¹„ë¡?³  ì´ˆì›”?ì¸"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["?œê°„?€ ?ë¥¸??.."], interaction: ["ê³¼ê±°?€ ë¯¸ë˜ë¥?ë³¸ë‹¤."], gift: ["?œê°„??? ë¬¼?˜ëŠ”ê°€."], special: ["?ì›?€ ?œê°„?´ë‹¤."] },
        lines: { normal: "?œê°„???ë¦„ ?ì—??.." }
    }
];
