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
        lore: {
            title: "?쇨렇?섎줈?ъ쓽 ?쒖옉",
            story: "遺곸쑀???좏솕??嫄곕????묐?. ?좊뱾議곗감 ?먮젮?뚰븯??留덈쾿???ъ뒳 湲?덉씠?꾨땲瑜대줈 臾띠뼱?먯뿀?? ?쇨렇?섎줈?ъ쓽 ?? ?ъ뒳???由щ㈃ ?ㅻ뵖???쇳궎怨??멸퀎瑜?硫몃쭩?쒗궗 ?대챸. ?쇱닔??蹂몃뒫怨??몄슦硫?二쇱씤??吏?ㅻ젮 ?좎벖??",
            origin: "遺곸쑀???좏솕 / ?꾩뒪媛瑜대뱶",
            relationships: [
                { id: "god_odin", type: "rival", desc: "?대챸???? ?쒕━瑜닿? ?ㅻ뵖???쇳궗 ?대챸" },
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
                { id: "valkyrie", type: "ally", desc: "異⑹떎???꾩궗. ?④퍡?섎㈃ 移섎챸???利앷?" },
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
        image: "images/creature_giant_hill.png?v=3",
        lore: {
            title: "?곗쓣 ?덉? 嫄곗씤",
            story: "?쒕━ 嫄곗씤議깆쓽 ?꾩삁. 嫄곕???泥닿뎄???댁슱由ъ? ?딄쾶 ?⑥닚?섍퀬 媛議깆쓣 ?щ옉?쒕떎. ?묒? ?앸챸泥대뱾??吏?ㅻ뒗 寃껋씠 痍⑤??대ŉ, ?꾪닾?먯꽌???덈즺瑜??꾪빐 嫄곕???紐몄쑝濡?諛⑺뙣媛 ?쒕떎.",
            origin: "遺곸쑀???좏솕 / ?뷀댆?섏엫",
            relationships: [
                { id: "titan_atlas", type: "ally", desc: "嫄곗씤議??좊같. ?대룞 ?ㅼ듅" },
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
                { id: "god_odin", type: "ally", desc: "?ㅻ뵖??臾닿린 怨듦툒?? ?좊ː 愿怨? },
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
        image: "images/creature_eagle_iron.png?v=3",
        lore: {
            title: "?섎뒛???뺤같??,
            story: "媛뺤쿋濡????좉컻瑜?媛吏??좊퉬濡쒖슫 ?낆닔由? ?몄긽 ?앹뿉???앷퉴吏 ?좎븘?ㅻ땲硫??ㅻ뵖?먭쾶 ?뺣낫瑜?蹂닿퀬?쒕떎. ?좉컻 源껎꽭 ?섎굹濡쒕룄 寃??留뚮뱾 ???덉쓣 留뚰겮 媛뺥븯怨??좎뭅濡?떎. ?믪? 怨녹뿉???대젮?ㅻ낫??嫄?醫뗭븘?쒕떎.",
            origin: "?꾩뒪媛瑜대뱶 ?섎뒛",
            relationships: [
                { id: "valkyrie", type: "ally", desc: "諛쒗궎由ъ? ?④퍡 ?꾩옣???뺤같" },
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
        image: "images/creature_bear_ice.png?v=3",
        lore: {
            title: "?쇱뼱遺숈? ?ы슚",
            story: "遺곴레??留뚮뀈???띿뿉???쒖뼱???꾩꽕??怨? ?섑뭹 ??踰덉뿉 ?덈낫?쇨? ?쇨퀬, ?ы슚 ??踰덉뿉 鍮숉븯媛 臾대꼫吏꾨떎. 寃됱? 臾댁꽠吏留??덈겮 臾쇨컻???몃뒗 嫄?醫뗭븘?섎뒗 痢ㅻ뜲?? ?곗뼱瑜?留ㅼ슦 醫뗭븘?쒕떎.",
            origin: "?꾩뒪媛瑜대뱶 ?덊뵆?섏엫",
            relationships: [
                { id: "giant_hill", type: "ally", desc: "嫄곗씤怨?怨곗쓽 ?좊뱺??議고빀" },
                { id: "mage_flame", type: "rival", desc: "遺덇낵 ?쇱쓬? ?곴레!" }
            ],
            synergy: { ally: ["giant_hill", "snow_spirit"], rival: ["mage_flame", "phoenix_eternal"] }
        },
        lines: { normal: "異붿쐞???듭닕?? ?곗뼱 以?嫄곗빞? ??.. 萸? ??以섎룄 ??.." }
    }
];
