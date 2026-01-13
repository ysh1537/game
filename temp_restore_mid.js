import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const ASGARD_CREATURES = [
    {
        id: "wolf_fenrir",
```javascript
import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const ASGARD_CREATURES = [
    {
        id: "wolf_fenrir",
        name: "醫낅쭚???묐? ?쒕━瑜?,
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Ice", "Beast"],
        ego: "Berserker",
        baseStr: 55, baseInt: 30,
        image: "images/creature_wolf_fenrir.png",
        sprites: {
            idle: "images/creature_wolf_fenrir.png",
            joy: "images/creature_wolf_fenrir_joy.png",
            sad: "images/creature_wolf_fenrir_sad.png",
            angry: "images/creature_wolf_fenrir_angry.png",
            skill: "images/creature_wolf_fenrir_skill.png",
            gallery: "images/creature_wolf_fenrir_gallery.png"
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 理쒓퀬???ㅻ뵖 special illustration, intimate atmosphere"
        },
        lore: {
            title: "吏?쒖쓽 ?媛瑜?移섎Ⅸ ??,
            story: "?꾪솄 ?멸퀎瑜??ㅼ뒪由щ뒗 遺곸쑀?쎌쓽 理쒓퀬?? 吏?쒕? ?꾪빐 ?쒖そ ?덉쓣 ?ъ깮?섍퀬, ?곗＜??鍮꾨????뚭린 ?꾪빐 ?꾧렇?쒕씪?ㅼ뿉 9?쇨컙 紐⑹쓣 留ㅻ떖?섎떎. ?됱쿋?섍퀬 怨꾩궛?곸씠吏留? ?몄젙諛쏆? ?꾩궗?먭쾶??諛쒗븷?쇱쓽 臾몄쓣 ?곕떎. ?쇨렇?섎줈?ъ뿉???쒕━瑜댁뿉寃??쇱폒吏??대챸.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Beast, 醫낅쭚???묐? ?쒕━瑜?,
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 醫낅쭚???묐? ?쒕━瑜?special illustration, intimate atmosphere"
        },
        lore: {
            title: "?쇨렇?섎줈?ъ쓽 ?쒖옉",
            story: "遺곸쑀???좏솕??嫄곕????묐?. ?좊뱾議곗감 ?먮젮?뚰븯??留덈쾿???ъ뒳 湲?덉씠?꾨땲瑜대줈 臾띠뼱?먯뿀?? ?쇨렇?섎줈?ъ쓽 ?? ?ъ뒳???由щ㈃ ?ㅻ뵖???쇳궎怨??멸퀎瑜?硫몃쭩?쒗궗 ?대챸. ?쇱닔??蹂몃뒫怨??몄슦硫?二쇱씤??吏?ㅻ젮 ?좎벖??",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "wolf_dire", type: "family", desc: "?묐? ?꾨같. ?④퍡?섎㈃ 怨듦꺽??踰꾪봽" }
            ],
            synergy: { ally: ["wolf_dire", "demon_king"], rival: ["god_odin", "valkyrie"] }
        },
        lines: {
            normal: "???ъ뒳... ?딆뼱踰꾨━寃좎뼱!",
            touch_head: "?щⅤ由?.. ?곕떎?щ뒗 嫄?.. ????踰덈쭔 ?덈씫?섏?.",
            touch_chest: "?ъ옣 ?뚮━媛 嫄곗꽭吏??嫄?.. 援띠＜由??뚮Ц?댁빞!",
            touch_chest_reject: "?щⅤ瑜? ?⑤?濡?留뚯?吏 留?",
            touch_chest_love: "??.. ?덊븳?뚮쭔 ?덉쇅瑜??먮뒗 嫄곗빞.",
            touch_legs: "諛쒕ぉ ?ъ뒳? ?대? ?딆뿀?? ?ㅼ쓬? ??留덉쓬?댁빞.",
            touch_special: "?쇨렇?섎줈?ъ쓽 ?쒖옉?대떎!"
        }
    },
    {
        id: "god_odin",
        name: "理쒓퀬???ㅻ뵖",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Wind", "Magic"],
        ego: "Seeker",
        baseStr: 45, baseInt: 75,
        skillId: "odin_skill",
        image: "images/creature_god_odin.png",
        lore: {
            title: "吏?쒖쓽 ?媛瑜?移섎Ⅸ ??,
            story: "?꾪솄 ?멸퀎瑜??ㅼ뒪由щ뒗 遺곸쑀?쎌쓽 理쒓퀬?? 吏?쒕? ?꾪빐 ?쒖そ ?덉쓣 ?ъ깮?섍퀬, ?곗＜??鍮꾨????뚭린 ?꾪빐 ?꾧렇?쒕씪?ㅼ뿉 9?쇨컙 紐⑹쓣 留ㅻ떖?섎떎. ?됱쿋?섍퀬 怨꾩궛?곸씠吏留? ?몄젙諛쏆? ?꾩궗?먭쾶??諛쒗븷?쇱쓽 臾몄쓣 ?곕떎. ?쇨렇?섎줈?ъ뿉???쒕━瑜댁뿉寃??쇱폒吏??대챸.",
            origin: "遺곸쑀???좏솕 / ?꾩뒪媛瑜대뱶",
            relationships: [
                { id: "wolf_fenrir", type: "rival", desc: "?대챸???? ?쇨렇?섎줈?ъ뿉???ㅻ뵖???쇳궗 ?? },
                { id: "valkyrie", type: "ally", desc: "異⑹떎???꾩궗. ?④퍡?섎㈃ 移섎챸???利앷?" ,
        sprites: {
            idle: "images/creature_valkyrie.png?v=3",
            joy: "images/creature_valkyrie_joy.png?v=3",
            sad: "images/creature_valkyrie_sad.png?v=3",
            angry: "images/creature_valkyrie_angry.png?v=3",
            skill: "images/creature_valkyrie_skill.png?v=3",
            gallery: "images/creature_valkyrie_gallery.png?v=3"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Metal, Wind, ?꾩옣??源껊컻 釉뚮??먰듃",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ?꾩옣??源껊컻 釉뚮??먰듃 special illustration, intimate atmosphere"
        },
        lore: {
            title: "?곴킅???좊퀎??,
            story: "?ㅻ뵖??紐낆쓣 諛쏆븘 ?꾩옣?먯꽌 媛???⑸㏏???꾩궗瑜?諛쒗븷?쇰줈 ?몃룄?섎뒗 ?꾩웳 泥섎?. ?됱쿋?섍퀬 臾댁옄鍮꾪븯寃?蹂댁씠吏留? ?좏깮諛쏆? 紐삵븳 ?먮뱾???꾪빐 紐곕옒 ?덈Ъ ?섎━???ъ꽭??留덉쓬???뚯쑀??",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "god_zeus", type: "rival", desc: "?좊뱾????媛꾩쓽 ?먯〈???寃? }
            ],
            synergy: { ally: ["valkyrie", "eagle_iron", "bear_ice"], rival: ["wolf_fenrir", "demon_king"] }
        },
        lines: {
            normal: "吏?쒕? ?먰븯?먮깘. ?媛媛 ?곕? 寃껋씠??",
            touch_head: "???쒖そ???媛濡??살? 吏??.. ?뚭퀬 ?띠?媛?",
            touch_chest: "李④????吏泥섎읆 援녹뼱?덈뜕 ???ъ옣??.. ?곕뒗援?",
            touch_legs: "?쒕몢瑜댁? 留덈씪. 吏?쒕뒗 泥쒖쿇???삳뒗 踰뺤씠??",
            touch_special: "沅곷땲瑜댁뿬, ?곸쓣 轅곕슟?대씪!"
        }
    },
    {
        id: "valkyrie",
        name: "?꾩옣??源껊컻 釉뚮??먰듃",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Metal", "Wind"],
        ego: "Warlord",
        baseStr: 40, baseInt: 35,
        image: "images/creature_valkyrie.png?v=3",
        lore: {
            title: "?곴킅???좊퀎??,
            story: "?ㅻ뵖??紐낆쓣 諛쏆븘 ?꾩옣?먯꽌 媛???⑸㏏???꾩궗瑜?諛쒗븷?쇰줈 ?몃룄?섎뒗 ?꾩웳 泥섎?. ?됱쿋?섍퀬 臾댁옄鍮꾪븯寃?蹂댁씠吏留? ?좏깮諛쏆? 紐삵븳 ?먮뱾???꾪빐 紐곕옒 ?덈Ъ ?섎━???ъ꽭??留덉쓬???뚯쑀??",
            origin: "遺곸쑀???좏솕 / 諛쒗븷??,
            relationships: [
                { id: "god_odin", type: "ally", desc: "異⑹꽦?섎뒗 二쇨뎔. ?④퍡?섎㈃ 移섎챸? 利앷?" },
                { id: "angel_arch", type: "ally", desc: "泥쒖긽???숇즺 ?꾩궗" }
            ],
            synergy: { ally: ["god_odin", "angel_arch", "eagle_iron"], rival: ["wolf_fenrir"] }
        },
        lines: { normal: "?꾩꽑 ?댁긽 臾? 諛쒗븷?쇰? ?꾪븯??" }
    },
    {
        id: "giant_hill",
        name: "?吏??諛⑺뙣 洹몃줈??,
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth", "Nature"],
        ego: "Devotion",
        baseStr: 45, baseInt: 15,
        image: "images/creatures/wild/creature_giant_hill.png",
        lore: {
            title: "?곗쓣 ?덉? 嫄곗씤",
            story: "?쒕━ 嫄곗씤議깆쓽 ?꾩삁. 嫄곕???泥닿뎄???댁슱由ъ? ?딄쾶 ?⑥닚?섍퀬 媛議깆쓣 ?щ옉?쒕떎. ?묒? ?앸챸泥대뱾??吏?ㅻ뒗 寃껋씠 痍⑤??대ŉ, ?꾪닾?먯꽌???덈즺瑜??꾪빐 嫄곕???紐몄쑝濡?諛⑺뙣媛 ?쒕떎.",
            origin: "遺곸쑀???좏솕 / ?뷀댆?섏엫",
            relationships: [
                { id: "titan_atlas", type: "ally", desc: "嫄곗씤議??좊같. ?대룞 ?ㅼ듅" ,
        sprites: {
            idle: "images/creature_giant_hill.png?v=3",
            joy: "images/creature_giant_hill_joy.png?v=3",
            sad: "images/creature_giant_hill_sad.png?v=3",
            angry: "images/creature_giant_hill_angry.png?v=3",
            skill: "images/creature_giant_hill_skill.png?v=3",
            gallery: "images/creature_giant_hill_gallery.png?v=3"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Earth, Nature, ?吏??諛⑺뙣 洹몃줈??,
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ?吏??諛⑺뙣 洹몃줈??special illustration, intimate atmosphere"
        },
        lore: {
            title: "?곗쓣 ?덉? 嫄곗씤",
            story: "?쒕━ 嫄곗씤議깆쓽 ?꾩삁. 嫄곕???泥닿뎄???댁슱由ъ? ?딄쾶 ?⑥닚?섍퀬 媛議깆쓣 ?щ옉?쒕떎. ?묒? ?앸챸泥대뱾??吏?ㅻ뒗 寃껋씠 痍⑤??대ŉ, ?꾪닾?먯꽌???덈즺瑜??꾪빐 嫄곕???紐몄쑝濡?諛⑺뙣媛 ?쒕떎.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "golem_mud", type: "ally", desc: "?뷀븳 寃껊뱾?쇰━???곗젙" }
            ],
            synergy: { ally: ["titan_atlas", "golem_mud", "bear_ice"], rival: [] }
        },
        lines: { normal: "?묒? 移쒓뎄~ ?ъ뿀??媛." }
    },
    {
        id: "dwarf_smith",
        name: "?쒖썙????μ옣??,
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Metal", "Fire"],
        baseStr: 18, baseInt: 15,
        image: "images/creature_dwarf.png?v=4",
        lore: {
            title: "臾좊땲瑜댁쓽 ?쒖옉??,
            story: "?꾩뒪媛瑜대뱶 理쒓퀬??臾닿린?μ씤. ?좊Ⅴ??留앹튂 臾좊땲瑜대? 留뚮뱺 ?μ씤 媛臾몄쓽 ?꾩넀. ?좎쓣 留덉떆硫??쒖옉 ?띾룄媛 鍮⑤씪吏吏留??꾩꽦?덉씠 ?댁긽?댁쭊?? '留μ＜ ?????놁쑝硫??먯씠 ???吏곸뿬!'媛 ?낅쾭由?",
            origin: "?꾩뒪媛瑜대뱶 ?덈떎踰⑤━瑜?,
            relationships: [
                { id: "god_odin", type: "ally", desc: "?ㅻ뵖??臾닿린 怨듦툒?? ?좊ː 愿怨? ,
        sprites: {
            idle: "images/creature_dwarf.png?v=4",
            joy: "images/creature_dwarf_joy.png?v=4",
            sad: "images/creature_dwarf_sad.png?v=4",
            angry: "images/creature_dwarf_angry.png?v=4",
            skill: "images/creature_dwarf_skill.png?v=4",
            gallery: "images/creature_dwarf_gallery.png?v=4"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, Fire, ?쒖썙????μ옣??,
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, ?쒖썙????μ옣??special illustration, intimate atmosphere"
        },
        lore: {
            title: "臾좊땲瑜댁쓽 ?쒖옉??,
            story: "?꾩뒪媛瑜대뱶 理쒓퀬??臾닿린?μ씤. ?좊Ⅴ??留앹튂 臾좊땲瑜대? 留뚮뱺 ?μ씤 媛臾몄쓽 ?꾩넀. ?좎쓣 留덉떆硫??쒖옉 ?띾룄媛 鍮⑤씪吏吏留??꾩꽦?덉씠 ?댁긽?댁쭊?? '留μ＜ ?????놁쑝硫??먯씠 ???吏곸뿬!'媛 ?낅쾭由?",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "golem_mud", type: "ally", desc: "愿묐Ъ ?쒓났 ?뚰듃?? }
            ],
            synergy: { ally: ["god_odin", "golem_mud", "eagle_iron"], rival: [] }
        },
        lines: { normal: "留앹튂吏??쒖옉?대떎! 罹? 罹? 留μ＜ 媛?몄?!" }
    },
    {
        id: "eagle_iron",
        name: "媛뺤쿋 ?낆닔由?,
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Metal", "Wind"],
        baseStr: 10, baseInt: 8,
        image: "images/creatures/wild/creature_eagle_iron.png",
        lore: {
            title: "?섎뒛???뺤같??,
            story: "媛뺤쿋濡????좉컻瑜?媛吏??좊퉬濡쒖슫 ?낆닔由? ?몄긽 ?앹뿉???앷퉴吏 ?좎븘?ㅻ땲硫??ㅻ뵖?먭쾶 ?뺣낫瑜?蹂닿퀬?쒕떎. ?좉컻 源껎꽭 ?섎굹濡쒕룄 寃??留뚮뱾 ???덉쓣 留뚰겮 媛뺥븯怨??좎뭅濡?떎. ?믪? 怨녹뿉???대젮?ㅻ낫??嫄?醫뗭븘?쒕떎.",
            origin: "?꾩뒪媛瑜대뱶 ?섎뒛",
            relationships: [
                { id: "valkyrie", type: "ally", desc: "諛쒗궎由ъ? ?④퍡 ?꾩옣???뺤같" ,
        sprites: {
            idle: "images/creature_eagle_iron.png?v=3",
            joy: "images/creature_eagle_iron_joy.png?v=3",
            sad: "images/creature_eagle_iron_sad.png?v=3",
            angry: "images/creature_eagle_iron_angry.png?v=3",
            skill: "images/creature_eagle_iron_skill.png?v=3",
            gallery: "images/creature_eagle_iron_gallery.png?v=3"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, Wind, 媛뺤쿋 ?낆닔由?,
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 媛뺤쿋 ?낆닔由?special illustration, intimate atmosphere"
        },
        lore: {
            title: "?섎뒛???뺤같??,
            story: "媛뺤쿋濡????좉컻瑜?媛吏??좊퉬濡쒖슫 ?낆닔由? ?몄긽 ?앹뿉???앷퉴吏 ?좎븘?ㅻ땲硫??ㅻ뵖?먭쾶 ?뺣낫瑜?蹂닿퀬?쒕떎. ?좉컻 源껎꽭 ?섎굹濡쒕룄 寃??留뚮뱾 ???덉쓣 留뚰겮 媛뺥븯怨??좎뭅濡?떎. ?믪? 怨녹뿉???대젮?ㅻ낫??嫄?醫뗭븘?쒕떎.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "cloud_puff", type: "ally", desc: "援щ쫫 ?쒖궗???꾩뿉???댁떇" }
            ],
            synergy: { ally: ["valkyrie", "cloud_puff", "centaur_scout"], rival: [] }
        },
        lines: { normal: "?좉컻??媛뺤쿋?댁?. ?섎뒛?먯꽌 紐⑤뱺 嫄?蹂몃떎!" }
    },
    {
        id: "bear_ice",
        name: "留뚮뀈??怨?,
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Ice", "Water"],
        baseStr: 15, baseInt: 3,
        image: "images/creatures/asgard/creature_bear_ice.png",
        lore: {
            title: "?쇱뼱遺숈? ?ы슚",
            story: "遺곴레??留뚮뀈???띿뿉???쒖뼱???꾩꽕??怨? ?섑뭹 ??踰덉뿉 ?덈낫?쇨? ?쇨퀬, ?ы슚 ??踰덉뿉 鍮숉븯媛 臾대꼫吏꾨떎. 寃됱? 臾댁꽠吏留??덈겮 臾쇨컻???몃뒗 嫄?醫뗭븘?섎뒗 痢ㅻ뜲?? ?곗뼱瑜?留ㅼ슦 醫뗭븘?쒕떎.",
            origin: "?꾩뒪媛瑜대뱶 ?덊뵆?섏엫",
            relationships: [
                { id: "giant_hill", type: "ally", desc: "嫄곗씤怨?怨곗쓽 ?좊뱺??議고빀" ,
        sprites: {
            idle: "images/creature_bear_ice.png?v=3",
            joy: "images/creature_bear_ice_joy.png?v=3",
            sad: "images/creature_bear_ice_sad.png?v=3",
            angry: "images/creature_bear_ice_angry.png?v=3",
            skill: "images/creature_bear_ice_skill.png?v=3",
            gallery: "images/creature_bear_ice_gallery.png?v=3"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Ice, Water, 留뚮뀈??怨?,
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 留뚮뀈??怨?special illustration, intimate atmosphere"
        },
        lore: {
            title: "?쇱뼱遺숈? ?ы슚",
            story: "遺곴레??留뚮뀈???띿뿉???쒖뼱???꾩꽕??怨? ?섑뭹 ??踰덉뿉 ?덈낫?쇨? ?쇨퀬, ?ы슚 ??踰덉뿉 鍮숉븯媛 臾대꼫吏꾨떎. 寃됱? 臾댁꽠吏留??덈겮 臾쇨컻???몃뒗 嫄?醫뗭븘?섎뒗 痢ㅻ뜲?? ?곗뼱瑜?留ㅼ슦 醫뗭븘?쒕떎.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "mage_flame", type: "rival", desc: "遺덇낵 ?쇱쓬? ?곴레!" }
            ],
            synergy: { ally: ["giant_hill", "snow_spirit"], rival: ["mage_flame", "phoenix_eternal"] }
        },
        lines: { normal: "異붿쐞???듭닕?? ?곗뼱 以?嫄곗빞? ??.. 萸? ??以섎룄 ??.." }
    },
    {
        id: "god_loki",
        name: "?λ궃????濡쒗궎",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Magic", "Chaos"],
        baseStr: 25, baseInt: 65,
        image: "images/creatures/asgard/god_loki.png", // Restored image
        lore: {
            title: "蹂?좎쓽 洹??,
            story: "?ㅻ뵖???섑삎?쒖씠???꾩뒪媛瑜대뱶 理쒓퀬???몃┃?ㅽ꽣. 吏猷⑦븿??李몄? 紐삵빐 媛곸쥌 ?ш퀬瑜?移섏?留? ?뚮줈??湲곕컻??袁濡??좊뱾??援ы븯湲곕룄 ?쒕떎. ?쒕━瑜댁? ?붾Ⅴ臾멸컙?쒖쓽 ?꾨쾭吏.",
            origin: "遺곸쑀???좏솕 / ?꾩뒪媛瑜대뱶",
            relationships: [
                { id: "god_odin", type: "ally", desc: "?좎쬆??愿怨? ?섑삎?? ,
        sprites: {
            idle: "images/creature_god_loki.png",
            joy: "images/creature_god_loki_joy.png",
            sad: "images/creature_god_loki_sad.png",
            angry: "images/creature_god_loki_angry.png",
            skill: "images/creature_god_loki_skill.png",
            gallery: "images/creature_god_loki_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Magic, Chaos, ?λ궃????濡쒗궎",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ?λ궃????濡쒗궎 special illustration, intimate atmosphere"
        },
        lore: {
            title: "蹂?좎쓽 洹??,
            story: "?ㅻ뵖???섑삎?쒖씠???꾩뒪媛瑜대뱶 理쒓퀬???몃┃?ㅽ꽣. 吏猷⑦븿??李몄? 紐삵빐 媛곸쥌 ?ш퀬瑜?移섏?留? ?뚮줈??湲곕컻??袁濡??좊뱾??援ы븯湲곕룄 ?쒕떎. ?쒕━瑜댁? ?붾Ⅴ臾멸컙?쒖쓽 ?꾨쾭吏.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "wolf_fenrir", type: "family", desc: "?섏쓽 ?щ옉?섎뒗 ?꾨뱾" }
            ],
            synergy: { ally: ["wolf_fenrir", "snake_world_jormungandr"], rival: ["god_thor"] }
        },
        lines: { normal: "?ъ떖?쒕뜲, 萸??щ??덈뒗 ???녿굹?" }
    },
    {
        id: "god_freya",
        name: "誘몄쓽 ?ъ떊 ?꾨젅?댁빞",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Magic"],
        baseStr: 30, baseInt: 60,
        image: "images/creatures/asgard/god_freya.png", // Restored image
        lore: {
            title: "?꾩옣??吏諛곗옄",
            story: "?щ옉怨??꾩웳???숈떆??愿?ν븯???ъ떊. 諛쒗궎由щ뱾??吏꾩젙????μ씠硫? ?꾩궗???곸썒?ㅼ쓽 ?덈컲? 洹몃???紐レ씠?? ?⑷툑怨?蹂댁꽍, 洹몃━怨??꾨쫫?ㅼ슫 怨좎뼇?대? 醫뗭븘?쒕떎.",
            origin: "遺곸쑀???좏솕 / ?댄겕諛?,
            relationships: [
                { id: "god_odin", type: "rival", desc: "?곹샎 ?곹깉??寃쎌웳?? ,
        sprites: {
            idle: "images/creature_god_freya.png",
            joy: "images/creature_god_freya_joy.png",
            sad: "images/creature_god_freya_sad.png",
            angry: "images/creature_god_freya_angry.png",
            skill: "images/creature_god_freya_skill.png",
            gallery: "images/creature_god_freya_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Magic, 誘몄쓽 ?ъ떊 ?꾨젅?댁빞",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 誘몄쓽 ?ъ떊 ?꾨젅?댁빞 special illustration, intimate atmosphere"
        },
        lore: {
            title: "?꾩옣??吏諛곗옄",
            story: "?щ옉怨??꾩웳???숈떆??愿?ν븯???ъ떊. 諛쒗궎由щ뱾??吏꾩젙????μ씠硫? ?꾩궗???곸썒?ㅼ쓽 ?덈컲? 洹몃???紐レ씠?? ?⑷툑怨?蹂댁꽍, 洹몃━怨??꾨쫫?ㅼ슫 怨좎뼇?대? 醫뗭븘?쒕떎.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "nordic_cat_freya", type: "pet", desc: "?щ옉?섎뒗 ?좎셿臾? }
            ],
            synergy: { ally: ["valkyrie", "nordic_cat_freya"], rival: [] }
        },
        lines: { normal: "?꾨쫫?ㅼ?? 洹??먯껜濡?臾닿린??踰?" }
    },
    {
        id: "snake_world_jormungandr",
        name: "誘몃뱶媛瑜대뱶 諭 ?붾Ⅴ臾멸컙??,
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Water", "Dark", "Poison"],
        baseStr: 70, baseInt: 40,
        image: "images/creatures/asgard/creature_snake_world_jormungandr.png", // Restored image
        lore: {
            title: "?멸퀎瑜?媛먮뒗 諭",
            story: "濡쒗궎???먯떇 以??섎굹. ?쒖뼱?섏옄留덉옄 諛붾떎??踰꾨젮議뚯쑝?? ?덈Т 嫄곕??댁졇???멸컙 ?멸퀎(誘몃뱶媛瑜대뱶)瑜???諛뷀?媛먭퀬 ?먯떊??瑗щ━瑜?臾쇨퀬 ?덈떎. ?좊Ⅴ????숈쟻 愿怨?",
            origin: "遺곸쑀???좏솕 / 誘몃뱶媛瑜대뱶 諛붾떎",
            relationships: [
                { id: "god_loki", type: "family", desc: "?꾨쾭吏" ,
        sprites: {
            idle: "images/creature_snake_world_jormungandr.png",
            joy: "images/creature_snake_world_jormungandr_joy.png",
            sad: "images/creature_snake_world_jormungandr_sad.png",
            angry: "images/creature_snake_world_jormungandr_angry.png",
            skill: "images/creature_snake_world_jormungandr_skill.png",
            gallery: "images/creature_snake_world_jormungandr_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Water, Dark, Poison, 誘몃뱶媛瑜대뱶 諭 ?붾Ⅴ臾멸컙??,
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 誘몃뱶媛瑜대뱶 諭 ?붾Ⅴ臾멸컙??special illustration, intimate atmosphere"
        },
        lore: {
            title: "?멸퀎瑜?媛먮뒗 諭",
            story: "濡쒗궎???먯떇 以??섎굹. ?쒖뼱?섏옄留덉옄 諛붾떎??踰꾨젮議뚯쑝?? ?덈Т 嫄곕??댁졇???멸컙 ?멸퀎(誘몃뱶媛瑜대뱶)瑜???諛뷀?媛먭퀬 ?먯떊??瑗щ━瑜?臾쇨퀬 ?덈떎. ?좊Ⅴ????숈쟻 愿怨?",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "god_thor", type: "rival", desc: "?쇨렇?섎줈?ъ쓽 ?숈쟻" }
            ],
            synergy: { ally: ["god_loki", "wolf_fenrir"], rival: ["god_thor"] }
        },
        lines: { normal: "諛붾떎媛 ?볦뼱?ㅻⅨ??.." }
    },
    {
        id: "ratatoskr_squirrel",
        name: "硫붿떊? ?쇳??좎뒪??,
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Wind", "Beast"],
        baseStr: 10, baseInt: 15,
        image: "images/creatures/asgard/ratatoskr_squirrel.png", // Restored image
        lore: {
            title: "?멸퀎?섏쓽 ?섎떎?곸씠",
            story: "?꾧렇?쒕씪?ㅼ쓣 ?ㅻⅤ?대━硫??낆닔由ъ? ?덈뱶?멸렇 ?ъ씠瑜??닿컙吏덊븯???ㅻ엺伊? ?④컰 ?뚮Ц??洹쇱썝吏?대ŉ, ?뺣낫 ?섏쭛 ?λ젰???곸썡?섎떎.",
            origin: "遺곸쑀???좏솕 / ?꾧렇?쒕씪??,
            relationships: [
                { id: "eagle_iron", type: "rival", desc: "怨⑦깢癒뱀씠湲?醫뗭? ?곷?" ,
        sprites: {
            idle: "images/ratatoskr_squirrel.png",
            joy: "images/ratatoskr_squirrel_joy.png",
            sad: "images/ratatoskr_squirrel_sad.png",
            angry: "images/ratatoskr_squirrel_angry.png",
            skill: "images/ratatoskr_squirrel_skill.png",
            gallery: "images/ratatoskr_squirrel_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Wind, Beast, 硫붿떊? ?쇳??좎뒪??,
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 硫붿떊? ?쇳??좎뒪??special illustration, intimate atmosphere"
        },
        lore: {
            title: "?멸퀎?섏쓽 ?섎떎?곸씠",
            story: "?꾧렇?쒕씪?ㅼ쓣 ?ㅻⅤ?대━硫??낆닔由ъ? ?덈뱶?멸렇 ?ъ씠瑜??닿컙吏덊븯???ㅻ엺伊? ?④컰 ?뚮Ц??洹쇱썝吏?대ŉ, ?뺣낫 ?섏쭛 ?λ젰???곸썡?섎떎.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "yggdrasil_guardian", type: "home", desc: "?섏쓽 ??댄꽣" }
            ],
            synergy: { ally: ["eagle_iron", "muninn_crow"], rival: [] }
        },
        lines: { normal: "洹멸굅 ?ㅼ뿀?? ?ㅻ뵖 ?섏씠 湲??.." }
    },
    {
        id: "god_hel",
        name: "吏?μ쓽 ?ъ솗 ??,
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Ice", "Death"],
        baseStr: 30, baseInt: 70,
        image: "images/creatures/asgard/god_hel.png", // Restored image (originally god_hel.png)
        lore: {
            title: "?덊뵆?ㅼ엫??吏諛곗옄",
            story: "濡쒗궎???몄씠??二쎌? ?먮뱾???ъ솗. 諛섏? ?꾨쫫?ㅼ슫 ?ъ씤, 諛섏? ?⑹뼱媛???쒖껜??紐⑥뒿???섍퀬 ?덈떎. ?쇨렇?섎줈?????먰넲?쇰줈 留뚮뱺 諛??섍??뚮Ⅴ瑜??怨??꾩뒪媛瑜대뱶瑜?移④났?쒕떎.",
            origin: "遺곸쑀???좏솕 / ?덊뵆?ㅼ엫",
            relationships: [
                { id: "god_loki", type: "family", desc: "?꾨쾭吏" ,
        sprites: {
            idle: "images/creature_god_hel.png",
            joy: "images/creature_god_hel_joy.png",
            sad: "images/creature_god_hel_sad.png",
            angry: "images/creature_god_hel_angry.png",
            skill: "images/creature_god_hel_skill.png",
            gallery: "images/creature_god_hel_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Death, 吏?μ쓽 ?ъ솗 ??,
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 吏?μ쓽 ?ъ솗 ??special illustration, intimate atmosphere"
        },
        lore: {
            title: "?덊뵆?ㅼ엫??吏諛곗옄",
            story: "濡쒗궎???몄씠??二쎌? ?먮뱾???ъ솗. 諛섏? ?꾨쫫?ㅼ슫 ?ъ씤, 諛섏? ?⑹뼱媛???쒖껜??紐⑥뒿???섍퀬 ?덈떎. ?쇨렇?섎줈?????먰넲?쇰줈 留뚮뱺 諛??섍??뚮Ⅴ瑜??怨??꾩뒪媛瑜대뱶瑜?移④났?쒕떎.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "wolf_fenrir", type: "family", desc: "?ㅻ튌" },
                { id: "god_odin", type: "rival", desc: "?곷? 愿怨? }
            ],
            synergy: { ally: ["god_loki", "wolf_fenrir"], rival: ["god_odin", "valkyrie"] }
        },
        lines: { normal: "???먮뒗 ?닿납???????녿떎..." }
    },
    {
        id: "muninn_crow",
        name: "湲곗뼲??源뚮쭏洹 臾대땶",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Wind", "Dark"],
        baseStr: 15, baseInt: 25,
        image: "images/creatures/asgard/muninn_crow.png",
        lore: {
            title: "?ㅻ뵖??湲곗뼲",
            story: "?ㅻ뵖???닿묠???됱븘 ?몄긽??湲곗뼲???띿궘?대뒗 源뚮쭏洹. ?꾧릿(?앷컖)怨쇰뒗 ?щ━ 怨쇨굅??紐⑤뱺 寃껋쓣 湲곗뼲?섍퀬 ?덈떎. 諛섏쭩?대뒗 寃껋쓣 醫뗭븘?댁꽌 ?먯＜ ?붿퀜?⑤떎.",
            origin: "遺곸쑀???좏솕",
            relationships: [
                { id: "god_odin", type: "master", desc: "二쇨뎔" ,
        sprites: {
            idle: "images/muninn_crow.png",
            joy: "images/muninn_crow_joy.png",
            sad: "images/muninn_crow_sad.png",
            angry: "images/muninn_crow_angry.png",
            skill: "images/muninn_crow_skill.png",
            gallery: "images/muninn_crow_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Wind, Dark, 湲곗뼲??源뚮쭏洹 臾대땶",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 湲곗뼲??源뚮쭏洹 臾대땶 special illustration, intimate atmosphere"
        },
        lore: {
            title: "?ㅻ뵖??湲곗뼲",
            story: "?ㅻ뵖???닿묠???됱븘 ?몄긽??湲곗뼲???띿궘?대뒗 源뚮쭏洹. ?꾧릿(?앷컖)怨쇰뒗 ?щ━ 怨쇨굅??紐⑤뱺 寃껋쓣 湲곗뼲?섍퀬 ?덈떎. 諛섏쭩?대뒗 寃껋쓣 醫뗭븘?댁꽌 ?먯＜ ?붿퀜?⑤떎.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "eagle_iron", type: "rival", desc: "?섎뒛???쇱씠踰? }
            ],
            synergy: { ally: ["god_odin", "eagle_iron"], rival: [] }
        },
        lines: { normal: "源뚯븙! ?섎뒗 紐⑤뱺 寃껋쓣 湲곗뼲?쒕떎!" }
    },
    {
        id: "elk_golden",
        name: "?⑷툑 肉??꾩씠?ъ돩瑜대땲瑜?,
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Nature", "Light"],
        baseStr: 35, baseInt: 20,
        image: "images/creatures/asgard/elk_golden.png",
        lore: {
            title: "諛쒗븷?쇱쓽 ?섑샇??,
            story: "諛쒗븷??吏遺??꾩뿉???쇱뿉?쇰뱶 ?섎Т???롮쓣 ??뼱癒밸뒗 嫄곕????ъ뒾. 肉붿뿉??留묒? 臾쇱씠 ?섎윭?섏? 紐⑤뱺 媛뺤쓽 洹쇱썝???쒕떎怨??쒕떎. ?좎꽦??議댁옱濡??ш꺼吏꾨떎.",
            origin: "遺곸쑀???좏솕 / 諛쒗븷??,
            relationships: [
                { id: "god_odin", type: "master", desc: "諛쒗븷?쇱쓽 二쇱씤" ,
        sprites: {
            idle: "images/elk_golden.png",
            joy: "images/elk_golden_joy.png",
            sad: "images/elk_golden_sad.png",
            angry: "images/elk_golden_angry.png",
            skill: "images/elk_golden_skill.png",
            gallery: "images/elk_golden_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Nature, Light, ?⑷툑 肉??꾩씠?ъ돩瑜대땲瑜?,
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ?⑷툑 肉??꾩씠?ъ돩瑜대땲瑜?special illustration, intimate atmosphere"
        },
        lore: {
            title: "諛쒗븷?쇱쓽 ?섑샇??,
            story: "諛쒗븷??吏遺??꾩뿉???쇱뿉?쇰뱶 ?섎Т???롮쓣 ??뼱癒밸뒗 嫄곕????ъ뒾. 肉붿뿉??留묒? 臾쇱씠 ?섎윭?섏? 紐⑤뱺 媛뺤쓽 洹쇱썝???쒕떎怨??쒕떎. ?좎꽦??議댁옱濡??ш꺼吏꾨떎.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    },
                { id: "ratatoskr_squirrel", type: "friend", desc: "?섎Т 移쒓뎄" }
            ],
            synergy: { ally: ["god_odin", "ratatoskr_squirrel"], rival: [] }
        },
        lines: { normal: "??肉붿뿉???먮Ⅴ???앸챸??臾쇱쓣 蹂댁븘??" }
    },
    {
        id: "bifrost_wisp",
        name: "鍮꾪봽濡쒖뒪?몄쓽 ?뺣졊",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Light", "Rainbow"],
        baseStr: 5, baseInt: 15,
        image: "images/creatures/asgard/bifrost_wisp.png",
        lore: {
            title: "臾댁?媛??ㅻ━??議곌컖",
            story: "?좊뱾???멸퀎? ?멸컙 ?멸퀎瑜??뉖뒗 臾댁?媛??ㅻ━ 鍮꾪봽濡쒖뒪?몄뿉???⑥뼱???섏삩 ?묒? 鍮쏆쓽 議곌컖.",
            origin: "?꾩뒪媛瑜대뱶",
            relationships: [],
            synergy: { ally: ["heimdall_horn"], rival: [] ,
        sprites: {
            idle: "images/bifrost_wisp.png",
            joy: "images/bifrost_wisp_joy.png",
            sad: "images/bifrost_wisp_sad.png",
            angry: "images/bifrost_wisp_angry.png",
            skill: "images/bifrost_wisp_skill.png",
            gallery: "images/bifrost_wisp_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Rainbow, 鍮꾪봽濡쒖뒪?몄쓽 ?뺣졊",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 鍮꾪봽濡쒖뒪?몄쓽 ?뺣졊 special illustration, intimate atmosphere"
        },
        lore: {
            title: "臾댁?媛??ㅻ━??議곌컖",
            story: "?좊뱾???멸퀎? ?멸컙 ?멸퀎瑜??뉖뒗 臾댁?媛??ㅻ━ 鍮꾪봽濡쒖뒪?몄뿉???⑥뼱???섏삩 ?묒? 鍮쏆쓽 議곌컖.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    }
        },
        lines: { normal: "諛섏쭩諛섏쭩~" }
    },
    {
        id: "einherjar_ghost",
        name: "?먯씤?ㅻ옿瑜댁쓽 ??,
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Light", "Ghost"],
        baseStr: 20, baseInt: 10,
        image: "images/creatures/asgard/einherjar_ghost.png",
        lore: {
            title: "諛쒗븷?쇱쓽 ?곷졊",
            story: "?쇨렇?섎줈?щ? ?鍮꾪빐 諛쒗븷?쇱뿉???덈젴?섎뒗 怨좊? ?꾩궗???곹샎. ??뿉???몄슦怨?諛ㅼ뿉???섏궡?꾨굹 ?좎쓣 留덉떊??",
            origin: "諛쒗븷??,
            relationships: [{ id: "god_odin", type: "master", desc: "二쇨뎔" ,
        sprites: {
            idle: "images/einherjar_ghost.png",
            joy: "images/einherjar_ghost_joy.png",
            sad: "images/einherjar_ghost_sad.png",
            angry: "images/einherjar_ghost_angry.png",
            skill: "images/einherjar_ghost_skill.png",
            gallery: "images/einherjar_ghost_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Ghost, ?먯씤?ㅻ옿瑜댁쓽 ??,
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, ?먯씤?ㅻ옿瑜댁쓽 ??special illustration, intimate atmosphere"
        },
        lore: {
            title: "諛쒗븷?쇱쓽 ?곷졊",
            story: "?쇨렇?섎줈?щ? ?鍮꾪빐 諛쒗븷?쇱뿉???덈젴?섎뒗 怨좊? ?꾩궗???곹샎. ??뿉???몄슦怨?諛ㅼ뿉???섏궡?꾨굹 ?좎쓣 留덉떊??",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    }],
            synergy: { ally: ["god_odin", "valkyrie"], rival: [] }
        },
        lines: { normal: "?몄?? ?꾩쭅 ?앸굹吏 ?딆븯??" }
    },
    {
        id: "heimdall_horn",
        name: "嫄?쇰Ⅴ?몃Ⅸ???뺣졊",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Sound", "Light"],
        baseStr: 10, baseInt: 20,
        image: "images/creatures/asgard/heimdall_horn_spirit.png",
        lore: {
            title: "寃쎄퀎???뚮━",
            story: "?ㅼ엫?ъ씠 吏?덇퀬 ?ㅻ땲??肉뷀뵾由?嫄?쇰Ⅴ?몃Ⅸ??源껊뱺 ?뺣졊. ?쇨렇?섎줈?ш? ?ㅻ㈃ 媛??癒쇱? ?뚮━移?以鍮꾨? ?섍퀬 ?덈떎.",
            origin: "鍮꾪봽濡쒖뒪??,
            relationships: [],
            synergy: { ally: ["bifrost_wisp"], rival: [] ,
        sprites: {
            idle: "images/heimdall_horn_spirit.png",
            joy: "images/heimdall_horn_spirit_joy.png",
            sad: "images/heimdall_horn_spirit_sad.png",
            angry: "images/heimdall_horn_spirit_angry.png",
            skill: "images/heimdall_horn_spirit_skill.png",
            gallery: "images/heimdall_horn_spirit_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Sound, Light, 嫄?쇰Ⅴ?몃Ⅸ???뺣졊",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 嫄?쇰Ⅴ?몃Ⅸ???뺣졊 special illustration, intimate atmosphere"
        },
        lore: {
            title: "寃쎄퀎???뚮━",
            story: "?ㅼ엫?ъ씠 吏?덇퀬 ?ㅻ땲??肉뷀뵾由?嫄?쇰Ⅴ?몃Ⅸ??源껊뱺 ?뺣졊. ?쇨렇?섎줈?ш? ?ㅻ㈃ 媛??癒쇱? ?뚮━移?以鍮꾨? ?섍퀬 ?덈떎.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    }
        },
        lines: { normal: "?곷뱾???ㅻ㈃ ?닿? ?쒖씪 癒쇱? ?뚮┫ 嫄곗빞!" }
    },
    {
        id: "mimir_head",
        name: "誘몃?瑜댁쓽 癒몃━",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Water", "Wisdom"],
        baseStr: 5, baseInt: 50,
        image: "images/creatures/asgard/mimir_spirit.png",
        lore: {
            title: "吏?쒖쓽 ???섑샇??,
            story: "?ㅻ뵖?먭쾶 吏?쒕? 以 誘몃?瑜댁쓽 癒몃━. 紐몄? ?껋뿀吏留??ъ쟾???곗＜ 理쒓퀬??吏?쒕? 媛吏怨??덈떎. 留먯씠 留ㅼ슦 留롫떎.",
            origin: "吏?쒖쓽 ??,
            relationships: [{ id: "god_odin", type: "friend", desc: "留먮쿁" ,
        sprites: {
            idle: "images/mimir_spirit.png",
            joy: "images/mimir_spirit_joy.png",
            sad: "images/mimir_spirit_sad.png",
            angry: "images/mimir_spirit_angry.png",
            skill: "images/mimir_spirit_skill.png",
            gallery: "images/mimir_spirit_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Water, Wisdom, 誘몃?瑜댁쓽 癒몃━",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 誘몃?瑜댁쓽 癒몃━ special illustration, intimate atmosphere"
        },
        lore: {
            title: "吏?쒖쓽 ???섑샇??,
            story: "?ㅻ뵖?먭쾶 吏?쒕? 以 誘몃?瑜댁쓽 癒몃━. 紐몄? ?껋뿀吏留??ъ쟾???곗＜ 理쒓퀬??吏?쒕? 媛吏怨??덈떎. 留먯씠 留ㅼ슦 留롫떎.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    }],
            synergy: { ally: ["god_odin"], rival: [] }
        },
        lines: { normal: "??留먯쓣 醫 ?ㅼ뼱蹂닿쾶, ?ㅻ뵖." }
    },
    {
        id: "shieldmaiden",
        name: "媛뺤쿋??諛⑺뙣泥섎?",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Metal"],
        baseStr: 25, baseInt: 10,
        image: "images/creatures/asgard/shieldmaiden_iron.png",
        lore: {
            title: "諛쒗궎由??꾨낫??,
            story: "諛쒗궎由ш? ?섍린瑜?轅덇씀硫??꾩옣???꾨퉬???멸컙 ?ъ쟾?? 媛뺤쿋 媛숈? ?섏?瑜?吏?붾떎.",
            origin: "誘몃뱶媛瑜대뱶",
            relationships: [{ id: "valkyrie", type: "idol", desc: "?숆꼍????? ,
        sprites: {
            idle: "images/shieldmaiden_iron.png",
            joy: "images/shieldmaiden_iron_joy.png",
            sad: "images/shieldmaiden_iron_sad.png",
            angry: "images/shieldmaiden_iron_angry.png",
            skill: "images/shieldmaiden_iron_skill.png",
            gallery: "images/shieldmaiden_iron_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, 媛뺤쿋??諛⑺뙣泥섎?",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 媛뺤쿋??諛⑺뙣泥섎? special illustration, intimate atmosphere"
        },
        lore: {
            title: "諛쒗궎由??꾨낫??,
            story: "諛쒗궎由ш? ?섍린瑜?轅덇씀硫??꾩옣???꾨퉬???멸컙 ?ъ쟾?? 媛뺤쿋 媛숈? ?섏?瑜?吏?붾떎.",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    }],
            synergy: { ally: ["valkyrie"], rival: [] }
        },
        lines: { normal: "?섏쓽 諛⑺뙣???ル━吏 ?딆븘!" }
    },
    {
        id: "ulfhednar",
        name: "?명봽?ㅻ뱶?섎Ⅴ",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Beast", "Dark"],
        baseStr: 30, baseInt: 5,
        image: "images/creatures/asgard/ulfhednar_wolf.png",
        lore: {
            title: "?묐? 媛二??꾩궗",
            story: "?묐? 媛二쎌쓣 ?ㅼ쭛?댁벐怨?愿묒쟾?ъ쿂???몄슦???ㅻ뵖???뺤삁 蹂묒궗. 怨좏넻???먮겮吏 ?딅뒗??",
            origin: "?꾩뒪媛瑜대뱶",
            relationships: [{ id: "wolf_fenrir", type: "idol", desc: "??같" ,
        sprites: {
            idle: "images/ulfhednar_wolf.png",
            joy: "images/ulfhednar_wolf_joy.png",
            sad: "images/ulfhednar_wolf_sad.png",
            angry: "images/ulfhednar_wolf_angry.png",
            skill: "images/ulfhednar_wolf_skill.png",
            gallery: "images/ulfhednar_wolf_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Beast, Dark, ?명봽?ㅻ뱶?섎Ⅴ",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, ?명봽?ㅻ뱶?섎Ⅴ special illustration, intimate atmosphere"
        },
        lore: {
            title: "?묐? 媛二??꾩궗",
            story: "?묐? 媛二쎌쓣 ?ㅼ쭛?댁벐怨?愿묒쟾?ъ쿂???몄슦???ㅻ뵖???뺤삁 蹂묒궗. 怨좏넻???먮겮吏 ?딅뒗??",
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
            gift: ["怨좊쭥??"],
            special: ["!!!"]
        }
    }],
            synergy: { ally: ["wolf_fenrir", "god_odin"], rival: [] }
        },
        lines: { normal: "?щⅤ瑜?.. ?ㅻ뵖???꾪븯??" }
    },
    {
        id: "wolf_pup",
        name: "?꾩뒪媛瑜대뱶 ?묐? ?덈겮",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Beast"],
        baseStr: 10, baseInt: 5,
        image: "images/creatures/asgard/wolf_pup_asgard.png",
        lore: {
            title: "洹?ъ슫 留뱀닔",
            story: "?꾩쭅? ?묎퀬 洹?ъ슫 ?묐? ?덈겮. ?먮씪硫??쒕━瑜댁쿂???좎???紐⑤Ⅸ??",
            origin: "泥좎쓽 ??,
            relationships: [{ id: "wolf_fenrir", type: "family", desc: "癒?議곗긽?" }],
            synergy: { ally: ["wolf_fenrir"], rival: [] }
        },
        lines: { normal: "?? (臾댁꽌??泥?" }
    },
    {
        id: "yggdrasil_guardian",
        name: "?꾧렇?쒕씪???섑샇紐?,
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Nature"],
        baseStr: 40, baseInt: 20,
        image: "images/creatures/asgard/yggdrasil_guardian.png",
        lore: {
            title: "?멸퀎?섏쓽 ?뚯닔袁?,
            story: "?꾧렇?쒕씪?ㅼ쓽 肉뚮━瑜?媛됱븘癒밸뒗 ?덈뱶?멸렇瑜?媛먯떆?섎뒗 ?댁븘?덈뒗 ?섎Т.",
            origin: "?꾧렇?쒕씪??,
            relationships: [{ id: "ratatoskr_squirrel", type: "friend", desc: "?섎춪媛吏???щ뒗 移쒓뎄" }],
            synergy: { ally: ["ratatoskr_squirrel"], rival: [] }
        },
        lines: { normal: "?멸퀎?섎뒗 ?닿? 吏?⑤떎." }
    },
    {
        id: "god_thor",
        name: "泥쒕뫁?????좊Ⅴ",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Electric", "Metal"],
        baseStr: 80, baseInt: 20,
        image: "images/god_thor.png",
        lore: {
            title: "?꾩뒪媛瑜대뱶???섑샇??,
            story: "?ㅻ뵖???꾨뱾?댁옄 媛??媛뺣젰???꾩궗. 臾좊땲瑜대? ?섎몢瑜대ŉ 嫄곗씤?ㅼ쓣 臾쇰━移쒕떎. ?⑥닚?섍퀬 ?몄풄???깃꺽?쇰줈, 濡쒗궎???λ궃???먯＜ ?뱁븯吏留?寃곌뎅 ?섏쑝濡??닿껐?쒕떎.",
            origin: "遺곸쑀???좏솕 / ?꾩뒪媛瑜대뱶",
            relationships: [
                { id: "god_loki", type: "rival", desc: "怨⑥튂 ?꾪뵂 ?섑삎?? },
                { id: "snake_world_jormungandr", type: "rival", desc: "?숈쟻" }
            ],
            synergy: { ally: ["god_odin", "sif"], rival: ["snake_world_jormungandr"] }
        },
        lines: { normal: "泥쒕뫁???섏쓣 蹂댁뿬二쇰쭏!" }
    },
    {
        id: "nordic_cat_freya",
        name: "?꾨젅?댁빞??怨좎뼇??,
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Beast", "Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/unknown/nordic_cat_freya.png",
        lore: {
            title: "?ъ떊???좎셿臾?,
            story: "?꾨젅?댁빞???꾩감瑜??꾨뒗 嫄곕???怨좎뼇?대뱾. ?⑹튂???ъ?留??좉탳媛 留롫떎.",
            origin: "遺곸쑀???좏솕",
            relationships: [{ id: "god_freya", type: "master", desc: "二쇱씤?? }],
            synergy: { ally: ["god_freya"], rival: [] }
        },
        lines: { normal: "?쇱샊~ (媛瑜대쫱嫄곕┛??" }
    },
    {
        id: "snow_spirit",
        name: "?덉쓽 ?뺣졊",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Ice"],
        baseStr: 5, baseInt: 15,
        image: "images/creatures/unknown/creature_snow_spirit.png",
        lore: {
            title: "李④????④껐",
            story: "?덊뵆?ㅼ엫???덈낫???띿뿉???쒖뼱???뺣졊. ?묒?留?李④???湲곗슫???대퓶?붾떎.",
            origin: "?덊뵆?ㅼ엫",
            relationships: [{ id: "bear_ice", type: "friend", desc: "?④퍡 ?몃뒗 移쒓뎄" }],
            synergy: { ally: ["bear_ice"], rival: ["mage_flame"] }
        },
        lines: { normal: "李④???.." }
    },
    {
        id: "sif",
        name: "?⑷툑???ъ떊 ?쒗봽",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth", "Light"],
        baseStr: 30, baseInt: 40,
        image: "images/sif.png",
        lore: {
            title: "?吏??寃곗떎",
            story: "?좊Ⅴ???꾨궡?댁옄 ?섑솗???ъ떊. 濡쒗궎媛 ?λ궃?쇰줈 ?먮Ⅸ 癒몃━移대씫 ????쒖썙?꾧? 留뚮뱾?댁? ?⑷툑 癒몃┸寃곗쓣 媛吏怨??덈떎.",
            origin: "遺곸쑀???좏솕",
            relationships: [
                { id: "god_thor", type: "family", desc: "?⑦렪" },
                { id: "god_loki", type: "rival", desc: "??癒몃━移대씫???붿튇 ?? }
            ],
            synergy: { ally: ["god_thor"], rival: ["god_loki"] }
        },
        lines: { normal: "媛?꾩쓽 ?띿슂濡쒖????뱀떊?먭쾶." }
    }
];
