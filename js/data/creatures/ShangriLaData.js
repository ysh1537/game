import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const SHANGRILA_CREATURES = [
    {
        id: "bonsai_spirit",
        name: "ì²œë…„ ë¶„ì¬ ?•ë ¹",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/shangrila/creature_bonsai_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_bonsai_spirit.png",
            "joy": "images/creatures/shangrila/creature_bonsai_spirit_joy.png",
            "sad": "images/creatures/shangrila/creature_bonsai_spirit_sad.png",
            "angry": "images/creatures/shangrila/creature_bonsai_spirit_angry.png",
            "skill": "images/creatures/shangrila/creature_bonsai_spirit_skill.png",
            "victory": "images/creatures/shangrila/creature_bonsai_spirit_victory.png",
            "defeat": "images/creatures/shangrila/creature_bonsai_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_bonsai_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ì²œë…„ ë¶„ì¬ ?•ë ¹",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ì²œë…„ ë¶„ì¬ ?•ë ¹, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ì²œë…„ ë¶„ì¬ ?•ë ¹?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "panda_monk",
        name: "?ë‹¤ ?˜ë„??,
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/shangrila/creature_panda_monk.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_panda_monk.png",
            "joy": "images/creatures/shangrila/creature_panda_monk_joy.png",
            "sad": "images/creatures/shangrila/creature_panda_monk_sad.png",
            "angry": "images/creatures/shangrila/creature_panda_monk_angry.png",
            "skill": "images/creatures/shangrila/creature_panda_monk_skill.png",
            "victory": "images/creatures/shangrila/creature_panda_monk_victory.png",
            "defeat": "images/creatures/shangrila/creature_panda_monk_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_panda_monk_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?ë‹¤ ?˜ë„??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?ë‹¤ ?˜ë„?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?ë‹¤ ?˜ë„?¹ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "lucky_cat_kuro",
        name: "ë³?ê³ ì–‘??ì¿ ë¡œ",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/shangrila/creature_lucky_cat_kuro.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_lucky_cat_kuro.png",
            "joy": "images/creatures/shangrila/creature_lucky_cat_kuro_joy.png",
            "sad": "images/creatures/shangrila/creature_lucky_cat_kuro_sad.png",
            "angry": "images/creatures/shangrila/creature_lucky_cat_kuro_angry.png",
            "skill": "images/creatures/shangrila/creature_lucky_cat_kuro_skill.png",
            "victory": "images/creatures/shangrila/creature_lucky_cat_kuro_victory.png",
            "defeat": "images/creatures/shangrila/creature_lucky_cat_kuro_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_lucky_cat_kuro_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ë³?ê³ ì–‘??ì¿ ë¡œ",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë³?ê³ ì–‘??ì¿ ë¡œ, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ë³?ê³ ì–‘??ì¿ ë¡œ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "heavenly_maiden_small",
        name: "ê¼¬ë§ˆ ? ë?",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/shangrila/creature_heavenly_maiden_small.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_heavenly_maiden_small.png",
            "joy": "images/creatures/shangrila/creature_heavenly_maiden_small_joy.png",
            "sad": "images/creatures/shangrila/creature_heavenly_maiden_small_sad.png",
            "angry": "images/creatures/shangrila/creature_heavenly_maiden_small_angry.png",
            "skill": "images/creatures/shangrila/creature_heavenly_maiden_small_skill.png",
            "victory": "images/creatures/shangrila/creature_heavenly_maiden_small_victory.png",
            "defeat": "images/creatures/shangrila/creature_heavenly_maiden_small_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_heavenly_maiden_small_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ê¼¬ë§ˆ ? ë?",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê¼¬ë§ˆ ? ë?, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ê¼¬ë§ˆ ? ë??€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cloud_serpent",
        name: "êµ¬ë¦„ ?´ë¬´ê¸?,
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/shangrila/creature_cloud_serpent.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_cloud_serpent.png",
            "joy": "images/creatures/shangrila/creature_cloud_serpent_joy.png",
            "sad": "images/creatures/shangrila/creature_cloud_serpent_sad.png",
            "angry": "images/creatures/shangrila/creature_cloud_serpent_angry.png",
            "skill": "images/creatures/shangrila/creature_cloud_serpent_skill.png",
            "victory": "images/creatures/shangrila/creature_cloud_serpent_victory.png",
            "defeat": "images/creatures/shangrila/creature_cloud_serpent_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_cloud_serpent_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, êµ¬ë¦„ ?´ë¬´ê¸?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, êµ¬ë¦„ ?´ë¬´ê¸? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? êµ¬ë¦„ ?´ë¬´ê¸°ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "statue_lion_dog",
        name: "?´ì¹˜ ?ìƒ",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/shangrila/creature_statue_lion_dog.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_statue_lion_dog.png",
            "joy": "images/creatures/shangrila/creature_statue_lion_dog_joy.png",
            "sad": "images/creatures/shangrila/creature_statue_lion_dog_sad.png",
            "angry": "images/creatures/shangrila/creature_statue_lion_dog_angry.png",
            "skill": "images/creatures/shangrila/creature_statue_lion_dog_skill.png",
            "victory": "images/creatures/shangrila/creature_statue_lion_dog_victory.png",
            "defeat": "images/creatures/shangrila/creature_statue_lion_dog_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_statue_lion_dog_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?´ì¹˜ ?ìƒ",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?´ì¹˜ ?ìƒ, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?´ì¹˜ ?ìƒ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "bamboo_chopper",
        name: "?€?˜ë¬´ ?„ì‚¬",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_bamboo_chopper.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_bamboo_chopper.png",
            "joy": "images/creatures/shangrila/creature_bamboo_chopper_joy.png",
            "sad": "images/creatures/shangrila/creature_bamboo_chopper_sad.png",
            "angry": "images/creatures/shangrila/creature_bamboo_chopper_angry.png",
            "skill": "images/creatures/shangrila/creature_bamboo_chopper_skill.png",
            "victory": "images/creatures/shangrila/creature_bamboo_chopper_victory.png",
            "defeat": "images/creatures/shangrila/creature_bamboo_chopper_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_bamboo_chopper_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?€?˜ë¬´ ?„ì‚¬",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?€?˜ë¬´ ?„ì‚¬, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?€?˜ë¬´ ?„ì‚¬?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "lantern_ghost",
        name: "ì´ˆë¡±ë¶?ê·€??,
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_lantern_ghost.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_lantern_ghost.png",
            "joy": "images/creatures/shangrila/creature_lantern_ghost_joy.png",
            "sad": "images/creatures/shangrila/creature_lantern_ghost_sad.png",
            "angry": "images/creatures/shangrila/creature_lantern_ghost_angry.png",
            "skill": "images/creatures/shangrila/creature_lantern_ghost_skill.png",
            "victory": "images/creatures/shangrila/creature_lantern_ghost_victory.png",
            "defeat": "images/creatures/shangrila/creature_lantern_ghost_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_lantern_ghost_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ì´ˆë¡±ë¶?ê·€??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ì´ˆë¡±ë¶?ê·€?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ì´ˆë¡±ë¶?ê·€? ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "kumiho_servant",
        name: "ë¯¸í˜¸???œì¢…",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_kumiho_servant.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_kumiho_servant.png",
            "joy": "images/creatures/shangrila/creature_kumiho_servant_joy.png",
            "sad": "images/creatures/shangrila/creature_kumiho_servant_sad.png",
            "angry": "images/creatures/shangrila/creature_kumiho_servant_angry.png",
            "skill": "images/creatures/shangrila/creature_kumiho_servant_skill.png",
            "victory": "images/creatures/shangrila/creature_kumiho_servant_victory.png",
            "defeat": "images/creatures/shangrila/creature_kumiho_servant_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_kumiho_servant_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ë¯¸í˜¸???œì¢…",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë¯¸í˜¸???œì¢…, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ë¯¸í˜¸???œì¢…?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "scroll_dragon",
        name: "ê·¸ë¦¼ ?ì˜ ??,
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_scroll_dragon.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_scroll_dragon.png",
            "joy": "images/creatures/shangrila/creature_scroll_dragon_joy.png",
            "sad": "images/creatures/shangrila/creature_scroll_dragon_sad.png",
            "angry": "images/creatures/shangrila/creature_scroll_dragon_angry.png",
            "skill": "images/creatures/shangrila/creature_scroll_dragon_skill.png",
            "victory": "images/creatures/shangrila/creature_scroll_dragon_victory.png",
            "defeat": "images/creatures/shangrila/creature_scroll_dragon_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_scroll_dragon_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ê·¸ë¦¼ ?ì˜ ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê·¸ë¦¼ ?ì˜ ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ê·¸ë¦¼ ?ì˜ ?©ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "koi_ascending",
        name: "?©ì´ ?˜ê³  ?¶ì? ?‰ì–´",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_koi_ascending.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_koi_ascending.png",
            "joy": "images/creatures/shangrila/creature_koi_ascending_joy.png",
            "sad": "images/creatures/shangrila/creature_koi_ascending_sad.png",
            "angry": "images/creatures/shangrila/creature_koi_ascending_angry.png",
            "skill": "images/creatures/shangrila/creature_koi_ascending_skill.png",
            "victory": "images/creatures/shangrila/creature_koi_ascending_victory.png",
            "defeat": "images/creatures/shangrila/creature_koi_ascending_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_koi_ascending_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?©ì´ ?˜ê³  ?¶ì? ?‰ì–´",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?©ì´ ?˜ê³  ?¶ì? ?‰ì–´, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?©ì´ ?˜ê³  ?¶ì? ?‰ì–´?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "tea_leaf_fairy",
        name: "ì°»ì ?”ì •",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/shangrila/creature_tea_leaf_fairy.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_tea_leaf_fairy.png",
            "joy": "images/creatures/shangrila/creature_tea_leaf_fairy_joy.png",
            "sad": "images/creatures/shangrila/creature_tea_leaf_fairy_sad.png",
            "angry": "images/creatures/shangrila/creature_tea_leaf_fairy_angry.png",
            "skill": "images/creatures/shangrila/creature_tea_leaf_fairy_skill.png",
            "victory": "images/creatures/shangrila/creature_tea_leaf_fairy_victory.png",
            "defeat": "images/creatures/shangrila/creature_tea_leaf_fairy_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_tea_leaf_fairy_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ì°»ì ?”ì •",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ì°»ì ?”ì •, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ì°»ì ?”ì •?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "rice_grain_spirit",
        name: "?€???•ë ¹",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/shangrila/creature_rice_grain_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_rice_grain_spirit.png",
            "joy": "images/creatures/shangrila/creature_rice_grain_spirit_joy.png",
            "sad": "images/creatures/shangrila/creature_rice_grain_spirit_sad.png",
            "angry": "images/creatures/shangrila/creature_rice_grain_spirit_angry.png",
            "skill": "images/creatures/shangrila/creature_rice_grain_spirit_skill.png",
            "victory": "images/creatures/shangrila/creature_rice_grain_spirit_victory.png",
            "defeat": "images/creatures/shangrila/creature_rice_grain_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_rice_grain_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?€???•ë ¹",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?€???•ë ¹, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?€???•ë ¹?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "paper_charm_seal",
        name: "ë´‰ì¸ ë¶€??,
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/shangrila/creature_paper_charm_seal.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_paper_charm_seal.png",
            "joy": "images/creatures/shangrila/creature_paper_charm_seal_joy.png",
            "sad": "images/creatures/shangrila/creature_paper_charm_seal_sad.png",
            "angry": "images/creatures/shangrila/creature_paper_charm_seal_angry.png",
            "skill": "images/creatures/shangrila/creature_paper_charm_seal_skill.png",
            "victory": "images/creatures/shangrila/creature_paper_charm_seal_victory.png",
            "defeat": "images/creatures/shangrila/creature_paper_charm_seal_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_paper_charm_seal_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ë´‰ì¸ ë¶€??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë´‰ì¸ ë¶€?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ë´‰ì¸ ë¶€?ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "yin_yang_orb",
        name: "?Œì–‘êµ?,
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/shangrila/creature_yin_yang_orb.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_yin_yang_orb.png",
            "joy": "images/creatures/shangrila/creature_yin_yang_orb_joy.png",
            "sad": "images/creatures/shangrila/creature_yin_yang_orb_sad.png",
            "angry": "images/creatures/shangrila/creature_yin_yang_orb_angry.png",
            "skill": "images/creatures/shangrila/creature_yin_yang_orb_skill.png",
            "victory": "images/creatures/shangrila/creature_yin_yang_orb_victory.png",
            "defeat": "images/creatures/shangrila/creature_yin_yang_orb_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_yin_yang_orb_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?Œì–‘êµ?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?Œì–‘êµ? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?Œì–‘êµ¬ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cherry_blossom_petal",
        name: "ë²šê½ƒ???”ì •",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/shangrila/creature_cherry_blossom_petal.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_cherry_blossom_petal.png",
            "joy": "images/creatures/shangrila/creature_cherry_blossom_petal_joy.png",
            "sad": "images/creatures/shangrila/creature_cherry_blossom_petal_sad.png",
            "angry": "images/creatures/shangrila/creature_cherry_blossom_petal_angry.png",
            "skill": "images/creatures/shangrila/creature_cherry_blossom_petal_skill.png",
            "victory": "images/creatures/shangrila/creature_cherry_blossom_petal_victory.png",
            "defeat": "images/creatures/shangrila/creature_cherry_blossom_petal_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_cherry_blossom_petal_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ë²šê½ƒ???”ì •",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë²šê½ƒ???”ì •, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ë²šê½ƒ???”ì •?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "magpie_messenger",
        name: "ë°˜ê???ê¹Œì¹˜ ?„ë ¹",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/shangrila/creature_magpie_messenger.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_magpie_messenger.png",
            "joy": "images/creatures/shangrila/creature_magpie_messenger_joy.png",
            "sad": "images/creatures/shangrila/creature_magpie_messenger_sad.png",
            "angry": "images/creatures/shangrila/creature_magpie_messenger_angry.png",
            "skill": "images/creatures/shangrila/creature_magpie_messenger_skill.png",
            "victory": "images/creatures/shangrila/creature_magpie_messenger_victory.png",
            "defeat": "images/creatures/shangrila/creature_magpie_messenger_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_magpie_messenger_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ë°˜ê???ê¹Œì¹˜ ?„ë ¹",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë°˜ê???ê¹Œì¹˜ ?„ë ¹, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ë°˜ê???ê¹Œì¹˜ ?„ë ¹?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "wind_chime_spirit",
        name: "?ê²½ ?Œë¦¬ ?”ì •",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/shangrila/creature_wind_chime_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_wind_chime_spirit.png",
            "joy": "images/creatures/shangrila/creature_wind_chime_spirit_joy.png",
            "sad": "images/creatures/shangrila/creature_wind_chime_spirit_sad.png",
            "angry": "images/creatures/shangrila/creature_wind_chime_spirit_angry.png",
            "skill": "images/creatures/shangrila/creature_wind_chime_spirit_skill.png",
            "victory": "images/creatures/shangrila/creature_wind_chime_spirit_victory.png",
            "defeat": "images/creatures/shangrila/creature_wind_chime_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_wind_chime_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?ê²½ ?Œë¦¬ ?”ì •",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?ê²½ ?Œë¦¬ ?”ì •, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?ê²½ ?Œë¦¬ ?”ì •?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "firefly_night",
        name: "?¬ë°¤??ë°˜ë”§ë¶ˆì´",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/shangrila/creature_firefly_night.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_firefly_night.png",
            "joy": "images/creatures/shangrila/creature_firefly_night_joy.png",
            "sad": "images/creatures/shangrila/creature_firefly_night_sad.png",
            "angry": "images/creatures/shangrila/creature_firefly_night_angry.png",
            "skill": "images/creatures/shangrila/creature_firefly_night_skill.png",
            "victory": "images/creatures/shangrila/creature_firefly_night_victory.png",
            "defeat": "images/creatures/shangrila/creature_firefly_night_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_firefly_night_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?¬ë°¤??ë°˜ë”§ë¶ˆì´",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¬ë°¤??ë°˜ë”§ë¶ˆì´, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?¬ë°¤??ë°˜ë”§ë¶ˆì´?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dragon_ancient",
        name: "?œì´ˆ????ë°”í•˜ë¬´íŠ¸",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 30, baseInt: 30,
        image: "images/creatures/shangrila/creature_dragon_ancient.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_dragon_ancient.png",
            "joy": "images/creatures/shangrila/creature_dragon_ancient_joy.png",
            "sad": "images/creatures/shangrila/creature_dragon_ancient_sad.png",
            "angry": "images/creatures/shangrila/creature_dragon_ancient_angry.png",
            "skill": "images/creatures/shangrila/creature_dragon_ancient_skill.png",
            "victory": "images/creatures/shangrila/creature_dragon_ancient_victory.png",
            "defeat": "images/creatures/shangrila/creature_dragon_ancient_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_dragon_ancient_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_dragon_ancient_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_dragon_ancient_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?œì´ˆ????ë°”í•˜ë¬´íŠ¸",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?œì´ˆ????ë°”í•˜ë¬´íŠ¸, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?œì´ˆ????ë°”í•˜ë¬´íŠ¸, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?œì´ˆ????ë°”í•˜ë¬´íŠ¸, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?œì´ˆ????ë°”í•˜ë¬´íŠ¸?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fox_nine_ur",
        name: "ì²œë…„ êµ¬ë???ë¯¸í˜¸",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 30, baseInt: 30,
        image: "images/creatures/shangrila/creature_fox_nine_ur.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_fox_nine_ur.png",
            "joy": "images/creatures/shangrila/creature_fox_nine_ur_joy.png",
            "sad": "images/creatures/shangrila/creature_fox_nine_ur_sad.png",
            "angry": "images/creatures/shangrila/creature_fox_nine_ur_angry.png",
            "skill": "images/creatures/shangrila/creature_fox_nine_ur_skill.png",
            "victory": "images/creatures/shangrila/creature_fox_nine_ur_victory.png",
            "defeat": "images/creatures/shangrila/creature_fox_nine_ur_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_fox_nine_ur_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_fox_nine_ur_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_fox_nine_ur_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ì²œë…„ êµ¬ë???ë¯¸í˜¸",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ì²œë…„ êµ¬ë???ë¯¸í˜¸, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ì²œë…„ êµ¬ë???ë¯¸í˜¸, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ì²œë…„ êµ¬ë???ë¯¸í˜¸, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ì²œë…„ êµ¬ë???ë¯¸í˜¸?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_dragon_king",
        name: "?˜ì •ê¶ì˜ ?©ì™•",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 30, baseInt: 30,
        image: "images/creatures/shangrila/creature_god_dragon_king.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_god_dragon_king.png",
            "joy": "images/creatures/shangrila/creature_god_dragon_king_joy.png",
            "sad": "images/creatures/shangrila/creature_god_dragon_king_sad.png",
            "angry": "images/creatures/shangrila/creature_god_dragon_king_angry.png",
            "skill": "images/creatures/shangrila/creature_god_dragon_king_skill.png",
            "victory": "images/creatures/shangrila/creature_god_dragon_king_victory.png",
            "defeat": "images/creatures/shangrila/creature_god_dragon_king_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_god_dragon_king_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_god_dragon_king_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_god_dragon_king_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?˜ì •ê¶ì˜ ?©ì™•",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?˜ì •ê¶ì˜ ?©ì™•, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?˜ì •ê¶ì˜ ?©ì™•, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?˜ì •ê¶ì˜ ?©ì™•, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?˜ì •ê¶ì˜ ?©ì™•?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "phoenix_eternal",
        name: "ë¶ˆë©¸???”ì¡° ?˜ì´",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/shangrila/creature_phoenix_eternal.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_phoenix_eternal.png",
            "joy": "images/creatures/shangrila/creature_phoenix_eternal_joy.png",
            "sad": "images/creatures/shangrila/creature_phoenix_eternal_sad.png",
            "angry": "images/creatures/shangrila/creature_phoenix_eternal_angry.png",
            "skill": "images/creatures/shangrila/creature_phoenix_eternal_skill.png",
            "victory": "images/creatures/shangrila/creature_phoenix_eternal_victory.png",
            "defeat": "images/creatures/shangrila/creature_phoenix_eternal_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_phoenix_eternal_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_phoenix_eternal_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_phoenix_eternal_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ë¶ˆë©¸???”ì¡° ?˜ì´",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ë¶ˆë©¸???”ì¡° ?˜ì´, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ë¶ˆë©¸???”ì¡° ?˜ì´, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ë¶ˆë©¸???”ì¡° ?˜ì´, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ë¶ˆë©¸???”ì¡° ?˜ì´?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "hero_wukong",
        name: "?œì²œ?€???ì˜¤ê³?,
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/shangrila/creature_hero_wukong.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_hero_wukong.png",
            "joy": "images/creatures/shangrila/creature_hero_wukong_joy.png",
            "sad": "images/creatures/shangrila/creature_hero_wukong_sad.png",
            "angry": "images/creatures/shangrila/creature_hero_wukong_angry.png",
            "skill": "images/creatures/shangrila/creature_hero_wukong_skill.png",
            "victory": "images/creatures/shangrila/creature_hero_wukong_victory.png",
            "defeat": "images/creatures/shangrila/creature_hero_wukong_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_hero_wukong_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_hero_wukong_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_hero_wukong_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?œì²œ?€???ì˜¤ê³?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?œì²œ?€???ì˜¤ê³? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?œì²œ?€???ì˜¤ê³? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?œì²œ?€???ì˜¤ê³? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?œì²œ?€???ì˜¤ê³µì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "rabbit_moon",
        name: "?¬í† ??ë£¨ë‚˜",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/shangrila/creature_rabbit_moon.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_rabbit_moon.png",
            "joy": "images/creatures/shangrila/creature_rabbit_moon_joy.png",
            "sad": "images/creatures/shangrila/creature_rabbit_moon_sad.png",
            "angry": "images/creatures/shangrila/creature_rabbit_moon_angry.png",
            "skill": "images/creatures/shangrila/creature_rabbit_moon_skill.png",
            "victory": "images/creatures/shangrila/creature_rabbit_moon_victory.png",
            "defeat": "images/creatures/shangrila/creature_rabbit_moon_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_rabbit_moon_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_rabbit_moon_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_rabbit_moon_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?¬í† ??ë£¨ë‚˜",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?¬í† ??ë£¨ë‚˜, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?¬í† ??ë£¨ë‚˜, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?¬í† ??ë£¨ë‚˜, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?¬í† ??ë£¨ë‚˜?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "peacock_princess",
        name: "ê³µì‘ ê³µì£¼",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 22, baseInt: 22,
        image: "images/creatures/shangrila/creature_peacock_princess.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_peacock_princess.png",
            "joy": "images/creatures/shangrila/creature_peacock_princess_joy.png",
            "sad": "images/creatures/shangrila/creature_peacock_princess_sad.png",
            "angry": "images/creatures/shangrila/creature_peacock_princess_angry.png",
            "skill": "images/creatures/shangrila/creature_peacock_princess_skill.png",
            "victory": "images/creatures/shangrila/creature_peacock_princess_victory.png",
            "defeat": "images/creatures/shangrila/creature_peacock_princess_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_peacock_princess_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_peacock_princess_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_peacock_princess_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ê³µì‘ ê³µì£¼",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ê³µì‘ ê³µì£¼, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ê³µì‘ ê³µì£¼, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ê³µì‘ ê³µì£¼, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ê³µì‘ ê³µì£¼?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fox_yokai_sr",
        name: "?¬ìš°?”ê´´ ë¯¸í˜¸",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/shangrila/creature_fox_yokai_sr.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_fox_yokai_sr.png",
            "joy": "images/creatures/shangrila/creature_fox_yokai_sr_joy.png",
            "sad": "images/creatures/shangrila/creature_fox_yokai_sr_sad.png",
            "angry": "images/creatures/shangrila/creature_fox_yokai_sr_angry.png",
            "skill": "images/creatures/shangrila/creature_fox_yokai_sr_skill.png",
            "victory": "images/creatures/shangrila/creature_fox_yokai_sr_victory.png",
            "defeat": "images/creatures/shangrila/creature_fox_yokai_sr_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_fox_yokai_sr_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_fox_yokai_sr_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_fox_yokai_sr_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?¬ìš°?”ê´´ ë¯¸í˜¸",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?¬ìš°?”ê´´ ë¯¸í˜¸, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?¬ìš°?”ê´´ ë¯¸í˜¸, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?¬ìš°?”ê´´ ë¯¸í˜¸, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?¬ìš°?”ê´´ ë¯¸í˜¸?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dragon_azure",
        name: "ì²?£¡",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/shangrila/creature_dragon_azure.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_dragon_azure.png",
            "joy": "images/creatures/shangrila/creature_dragon_azure_joy.png",
            "sad": "images/creatures/shangrila/creature_dragon_azure_sad.png",
            "angry": "images/creatures/shangrila/creature_dragon_azure_angry.png",
            "skill": "images/creatures/shangrila/creature_dragon_azure_skill.png",
            "victory": "images/creatures/shangrila/creature_dragon_azure_victory.png",
            "defeat": "images/creatures/shangrila/creature_dragon_azure_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_dragon_azure_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_dragon_azure_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_dragon_azure_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ì²?£¡",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ì²?£¡, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ì²?£¡, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ì²?£¡, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ì²?£¡?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "tiger_white",
        name: "ë°±í˜¸",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/shangrila/creature_tiger_white.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_tiger_white.png",
            "joy": "images/creatures/shangrila/creature_tiger_white_joy.png",
            "sad": "images/creatures/shangrila/creature_tiger_white_sad.png",
            "angry": "images/creatures/shangrila/creature_tiger_white_angry.png",
            "skill": "images/creatures/shangrila/creature_tiger_white_skill.png",
            "victory": "images/creatures/shangrila/creature_tiger_white_victory.png",
            "defeat": "images/creatures/shangrila/creature_tiger_white_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_tiger_white_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_tiger_white_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_tiger_white_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ë°±í˜¸",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ë°±í˜¸, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ë°±í˜¸, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ë°±í˜¸, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ë°±í˜¸?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "bird_vermilion",
        name: "ì£¼ì‘",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/shangrila/creature_bird_vermilion.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_bird_vermilion.png",
            "joy": "images/creatures/shangrila/creature_bird_vermilion_joy.png",
            "sad": "images/creatures/shangrila/creature_bird_vermilion_sad.png",
            "angry": "images/creatures/shangrila/creature_bird_vermilion_angry.png",
            "skill": "images/creatures/shangrila/creature_bird_vermilion_skill.png",
            "victory": "images/creatures/shangrila/creature_bird_vermilion_victory.png",
            "defeat": "images/creatures/shangrila/creature_bird_vermilion_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_bird_vermilion_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_bird_vermilion_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_bird_vermilion_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ì£¼ì‘",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ì£¼ì‘, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ì£¼ì‘, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ì£¼ì‘, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ì£¼ì‘?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "turtle_black",
        name: "?„ë¬´",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/shangrila/creature_turtle_black.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_turtle_black.png",
            "joy": "images/creatures/shangrila/creature_turtle_black_joy.png",
            "sad": "images/creatures/shangrila/creature_turtle_black_sad.png",
            "angry": "images/creatures/shangrila/creature_turtle_black_angry.png",
            "skill": "images/creatures/shangrila/creature_turtle_black_skill.png",
            "victory": "images/creatures/shangrila/creature_turtle_black_victory.png",
            "defeat": "images/creatures/shangrila/creature_turtle_black_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_turtle_black_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_turtle_black_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_turtle_black_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?„ë¬´",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?„ë¬´, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?„ë¬´, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?„ë¬´, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?„ë¬´?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dokkeabi_king",
        name: "?©ê¸ˆ ë°©ë§???„ê¹¨ë¹?,
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/shangrila/creature_dokkeabi_king.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_dokkeabi_king.png",
            "joy": "images/creatures/shangrila/creature_dokkeabi_king_joy.png",
            "sad": "images/creatures/shangrila/creature_dokkeabi_king_sad.png",
            "angry": "images/creatures/shangrila/creature_dokkeabi_king_angry.png",
            "skill": "images/creatures/shangrila/creature_dokkeabi_king_skill.png",
            "victory": "images/creatures/shangrila/creature_dokkeabi_king_victory.png",
            "defeat": "images/creatures/shangrila/creature_dokkeabi_king_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_dokkeabi_king_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_dokkeabi_king_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_dokkeabi_king_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?©ê¸ˆ ë°©ë§???„ê¹¨ë¹?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?©ê¸ˆ ë°©ë§???„ê¹¨ë¹? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?©ê¸ˆ ë°©ë§???„ê¹¨ë¹? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?©ê¸ˆ ë°©ë§???„ê¹¨ë¹? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?©ê¸ˆ ë°©ë§???„ê¹¨ë¹„ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mountain_god_tiger",
        name: "?°ì‹  ?¸ë‘??,
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 18, baseInt: 18,
        image: "images/creatures/shangrila/creature_mountain_god_tiger.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_mountain_god_tiger.png",
            "joy": "images/creatures/shangrila/creature_mountain_god_tiger_joy.png",
            "sad": "images/creatures/shangrila/creature_mountain_god_tiger_sad.png",
            "angry": "images/creatures/shangrila/creature_mountain_god_tiger_angry.png",
            "skill": "images/creatures/shangrila/creature_mountain_god_tiger_skill.png",
            "victory": "images/creatures/shangrila/creature_mountain_god_tiger_victory.png",
            "defeat": "images/creatures/shangrila/creature_mountain_god_tiger_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_mountain_god_tiger_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_mountain_god_tiger_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_mountain_god_tiger_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?°ì‹  ?¸ë‘??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?°ì‹  ?¸ë‘?? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?°ì‹  ?¸ë‘?? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?°ì‹  ?¸ë‘?? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?°ì‹  ?¸ë‘?´ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ninja_shadow",
        name: "ê·¸ë¦¼???Œì",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/shangrila/creature_ninja_shadow.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_ninja_shadow.png",
            "joy": "images/creatures/shangrila/creature_ninja_shadow_joy.png",
            "sad": "images/creatures/shangrila/creature_ninja_shadow_sad.png",
            "angry": "images/creatures/shangrila/creature_ninja_shadow_angry.png",
            "skill": "images/creatures/shangrila/creature_ninja_shadow_skill.png",
            "victory": "images/creatures/shangrila/creature_ninja_shadow_victory.png",
            "defeat": "images/creatures/shangrila/creature_ninja_shadow_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_ninja_shadow_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ê·¸ë¦¼???Œì",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê·¸ë¦¼???Œì, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ê·¸ë¦¼???Œì?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "crane_sage",
        name: "êµ¬ë¦„ ?„ì˜ ??? ì„ ",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/shangrila/creature_crane_sage.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_crane_sage.png",
            "joy": "images/creatures/shangrila/creature_crane_sage_joy.png",
            "sad": "images/creatures/shangrila/creature_crane_sage_sad.png",
            "angry": "images/creatures/shangrila/creature_crane_sage_angry.png",
            "skill": "images/creatures/shangrila/creature_crane_sage_skill.png",
            "victory": "images/creatures/shangrila/creature_crane_sage_victory.png",
            "defeat": "images/creatures/shangrila/creature_crane_sage_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_crane_sage_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, êµ¬ë¦„ ?„ì˜ ??? ì„ ",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, êµ¬ë¦„ ?„ì˜ ??? ì„ , energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? êµ¬ë¦„ ?„ì˜ ??? ì„ ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "pears_spirit",
        name: "?°ê½ƒ ?„ì”¨",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/shangrila/creature_pears_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_pears_spirit.png",
            "joy": "images/creatures/shangrila/creature_pears_spirit_joy.png",
            "sad": "images/creatures/shangrila/creature_pears_spirit_sad.png",
            "angry": "images/creatures/shangrila/creature_pears_spirit_angry.png",
            "skill": "images/creatures/shangrila/creature_pears_spirit_skill.png",
            "victory": "images/creatures/shangrila/creature_pears_spirit_victory.png",
            "defeat": "images/creatures/shangrila/creature_pears_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_pears_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?°ê½ƒ ?„ì”¨",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?°ê½ƒ ?„ì”¨, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?°ê½ƒ ?„ì”¨?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "butterfly_dream",
        name: "?¥ì???˜ë¹„",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/shangrila/creature_butterfly_dream.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_butterfly_dream.png",
            "joy": "images/creatures/shangrila/creature_butterfly_dream_joy.png",
            "sad": "images/creatures/shangrila/creature_butterfly_dream_sad.png",
            "angry": "images/creatures/shangrila/creature_butterfly_dream_angry.png",
            "skill": "images/creatures/shangrila/creature_butterfly_dream_skill.png",
            "victory": "images/creatures/shangrila/creature_butterfly_dream_victory.png",
            "defeat": "images/creatures/shangrila/creature_butterfly_dream_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_butterfly_dream_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ?¥ì???˜ë¹„",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¥ì???˜ë¹„, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ?¥ì???˜ë¹„?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "flower_fairy",
        name: "ê½ƒì˜ ?”ì •",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/shangrila/creature_flower_fairy.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_flower_fairy.png",
            "joy": "images/creatures/shangrila/creature_flower_fairy_joy.png",
            "sad": "images/creatures/shangrila/creature_flower_fairy_sad.png",
            "angry": "images/creatures/shangrila/creature_flower_fairy_angry.png",
            "skill": "images/creatures/shangrila/creature_flower_fairy_skill.png",
            "victory": "images/creatures/shangrila/creature_flower_fairy_victory.png",
            "defeat": "images/creatures/shangrila/creature_flower_fairy_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_flower_fairy_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ê½ƒì˜ ?”ì •",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê½ƒì˜ ?”ì •, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ê½ƒì˜ ?”ì •?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ink_spirit",
        name: "ë¨¹ë¬¼ ?”ì •",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/shangrila/creature_ink_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_ink_spirit.png",
            "joy": "images/creatures/shangrila/creature_ink_spirit_joy.png",
            "sad": "images/creatures/shangrila/creature_ink_spirit_sad.png",
            "angry": "images/creatures/shangrila/creature_ink_spirit_angry.png",
            "skill": "images/creatures/shangrila/creature_ink_spirit_skill.png",
            "victory": "images/creatures/shangrila/creature_ink_spirit_victory.png",
            "defeat": "images/creatures/shangrila/creature_ink_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_ink_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, ë¨¹ë¬¼ ?”ì •",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë¨¹ë¬¼ ?”ì •, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "ë¬´ë¦‰?„ì›??? ë¹„ë¡œìš´ ê¸°ìš´??ë¨¸ê¸ˆê³??œì–´???ë¬¼?…ë‹ˆ?? ë¨¹ë¬¼ ?”ì •?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "fox_nine_new",
        name: "? ìƒ êµ¬ë???,
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"], // Default element
        baseStr: 22, baseInt: 22,
        image: "images/creatures/shangrila/creature_fox_nine_new.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_fox_nine_new.png",
            "joy": "images/creatures/shangrila/creature_fox_nine_new.png", // Fallback
            "sad": "images/creatures/shangrila/creature_fox_nine_new.png", // Fallback
            "angry": "images/creatures/shangrila/creature_fox_nine_new.png", // Fallback
            "skill": "images/creatures/shangrila/creature_fox_nine_new.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, ? ìƒ êµ¬ë???,
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in shangrila.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "jade_rabbit",
        name: "?¥í† ??,
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"], // Default element
        baseStr: 12, baseInt: 12,
        image: "images/creatures/shangrila/creature_jade_rabbit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_jade_rabbit.png",
            "joy": "images/creatures/shangrila/creature_jade_rabbit.png", // Fallback
            "sad": "images/creatures/shangrila/creature_jade_rabbit.png", // Fallback
            "angry": "images/creatures/shangrila/creature_jade_rabbit.png", // Fallback
            "skill": "images/creatures/shangrila/creature_jade_rabbit.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, ?¥í† ??,
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in shangrila.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "yin_yang_fish",
        name: "?Œì–‘??,
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"], // Default element
        baseStr: 12, baseInt: 12,
        image: "images/creatures/shangrila/creature_yin_yang_fish.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_yin_yang_fish.png",
            "joy": "images/creatures/shangrila/creature_yin_yang_fish.png", // Fallback
            "sad": "images/creatures/shangrila/creature_yin_yang_fish.png", // Fallback
            "angry": "images/creatures/shangrila/creature_yin_yang_fish.png", // Fallback
            "skill": "images/creatures/shangrila/creature_yin_yang_fish.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, ?Œì–‘??,
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in shangrila.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "cloud_spirit",
        name: "?´ë¬´ ?•ë ¹",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/shangrila/creature_cloud_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_cloud_spirit.png",
            "joy": "images/creatures/shangrila/creature_cloud_spirit.png",
            "sad": "images/creatures/shangrila/creature_cloud_spirit.png",
            "angry": "images/creatures/shangrila/creature_cloud_spirit.png",
            "skill": "images/creatures/shangrila/creature_cloud_spirit.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, ?´ë¬´ ?•ë ¹",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"], gift: ["Thanks"], special: ["?!"] },
        lines: { normal: "..." }
    }
];
