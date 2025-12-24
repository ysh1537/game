import { RANKS } from './RankData.js';

/**
 * 월드 정의 (세계관 기반)
 * 
 * 각 월드는 고유한 특성과 시너지를 가짐:
 * - OLYMPUS: 치명타/압도 (그리스 신화)
 * - ASGARD: 불굴/생존 (북유럽 신화)  
 * - SHANGRILA: 조화/회복 (동양 신화)
 * - ABYSS: 공포/디버프 (크툴루/악마)
 * - WILD: 야생의 법칙 (자연/드래곤)
 */
export const WORLDS = {
    OLYMPUS: "OLYMPUS",     // 치명타 특화, 신성의 연합 (질서)
    ASGARD: "ASGARD",       // 불굴/생존, 신성의 연합 (질서)
    SHANGRILA: "SHANGRILA", // 조화/회복, 환수의 맹약 (중립)
    ABYSS: "ABYSS",         // 공포/디버프, 심연의 군세 (혼돈)
    WILD: "WILD"            // 야생의 법칙, 환수의 맹약 (중립)
};

/**
 * 세력 정의 (Factions)
 */
export const FACTIONS = {
    DIVINE_ALLIANCE: "DIVINE_ALLIANCE",   // 신성의 연합 (질서) - OLYMPUS, ASGARD
    LEGION_OF_ABYSS: "LEGION_OF_ABYSS",   // 심연의 군세 (혼돈) - ABYSS
    COVENANT_OF_BEASTS: "COVENANT_OF_BEASTS" // 환수의 맹약 (중립) - SHANGRILA, WILD
};

// 월드-세력 매핑
export const WORLD_TO_FACTION = {
    [WORLDS.OLYMPUS]: FACTIONS.DIVINE_ALLIANCE,
    [WORLDS.ASGARD]: FACTIONS.DIVINE_ALLIANCE,
    [WORLDS.SHANGRILA]: FACTIONS.COVENANT_OF_BEASTS,
    [WORLDS.ABYSS]: FACTIONS.LEGION_OF_ABYSS,
    [WORLDS.WILD]: FACTIONS.COVENANT_OF_BEASTS
};

export const CREATURE_DEFS = [
    // ==========================================
    // 🏛️ OLYMPUS (올림푸스) - 신성의 연합
    // 컨셉: 고대 그리스, 백색 대리석, 황금, 번개
    // 특성: [압도] 치명타 확률/피해 증가
    // ==========================================

    // --- UR (터치 상호작용 O) ---
    {
        id: "god_zeus",
        name: "천둥의 신 제우스",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Lightning", "Wind", "Light"],
        ego: "Warlord",
        baseStr: 55, baseInt: 65,
        image: "images/creature_god_zeus.jpg",
        lore: {
            title: "올림포스의 지배자",
            story: "하늘과 번개를 다스리는 그리스 최고신. 티탄족과의 전쟁에서 승리한 후 신들의 왕좌에 올랐다. 인간 세계에 내려와 새로운 주인을 찾고 있으며, 강력한 번개의 힘으로 모든 적을 압도한다. 오만하지만 인정받은 자에게는 한없이 관대한 존재.",
            origin: "그리스 신화 / 올림포스",
            relationships: [
                { id: "time_lord_chronos", type: "family", desc: "아버지를 쓰러뜨리고 왕좌에 오른 부자 관계" },
                { id: "angel_arch", type: "ally", desc: "신성한 빛의 동맹. 함께하면 신성 공격력 증가" },
                { id: "demon_king", type: "rival", desc: "천상과 지옥의 영원한 숙적" }
            ],
            synergy: { ally: ["angel_arch", "valkyrie"], rival: ["demon_king", "void_emperor"] }
        },
        lines: {
            normal: "내 번개를 감당할 수 있겠느냐, 작은 인간아.",
            touch_head: "호오? 감히 신의 머리를... 배짱이 좋구나?",
            touch_chest: "무례하구나! ...하지만 싫지 않으니 허락하마.",
            touch_chest_reject: "무례하구나! 감히 신의 옥체에 손을 대다니!",
            touch_chest_love: "후후... 네 손길, 나쁘지 않구나. 계속해 보거라.",
            touch_legs: "내 발밑에 엎드려라. 그게 너에게 어울리는 위치다.",
            touch_special: "무릎 꿇어라! 이것이 신의 분노다!"
        }
    },
    {
        id: "time_lord_chronos",
        name: "시간의 지배자 크로노스",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Time", "Void", "Ice"],
        ego: "Seeker",
        baseStr: 40, baseInt: 80,
        image: "images/creature_time_lord_chronos.png?v=5",
        lore: {
            title: "시간을 삼키는 자",
            story: "태초의 티탄족 왕. 자신의 자식들에게 왕좌를 빼앗길 것을 두려워해 그들을 삼켰으나, 제우스에게 패배하고 타르타로스에 갇혔다. 시간의 흐름을 자유자재로 조종하며, 그녀의 눈동자를 바라보는 자는 자신의 과거와 미래를 모두 보게 된다.",
            origin: "그리스 신화 / 타르타로스",
            relationships: [
                { id: "god_zeus", type: "family", desc: "반역한 아들. 왕좌를 빼앗긴 원한의 관계" },
                { id: "creator_gaia", type: "family", desc: "대지의 어머니. 복잡한 모자 관계" },
                { id: "void_emperor", type: "ally", desc: "심연의 동맹. 함께하면 시공간 왜곡 발동" }
            ],
            synergy: { ally: ["void_emperor", "creator_gaia"], rival: ["god_zeus", "angel_arch"] }
        },
        lines: {
            normal: "너의 시간은 이제 내 것이야. 1초도 다른 곳을 보지 마.",
            touch_head: "움직이지 마... 지금 이 순간을 멈출 테니까.",
            touch_chest: "내 가슴의 시계소리가 들려? 영원히 너를 위해 뛸 거야.",
            touch_legs: "시간을 거스르는 각선미... 라고 해줄래?",
            touch_special: "시간의 끝을 보여주지. 종말이다."
        }
    },

    // --- SSR (터치 상호작용 O) ---
    {
        id: "angel_arch",
        name: "대천사 미카엘",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light", "Fire", "Wind"],
        ego: "Star",
        baseStr: 45, baseInt: 55,
        image: "images/creature_angel_arch.png?v=5",
        lore: {
            title: "천상의 검",
            story: "천계군의 최고 사령관이자 신의 칼날. 루시퍼의 반란을 진압한 전설의 전사. 순수하고 정의로운 마음을 가졌으나, 인간 세계에 내려와 다양한 감정을 경험하며 혼란스러워하고 있다. 신성한 불꽃으로 사악함을 정화한다.",
            origin: "천상계 / 신의 군대",
            relationships: [
                { id: "god_zeus", type: "ally", desc: "신들의 동맹. 빛과 번개의 합공" },
                { id: "demon_king", type: "rival", desc: "영원한 숙적. 천사와 악마의 전쟁" },
                { id: "valkyrie", type: "ally", desc: "전장의 동료. 함께하면 광역 버프" }
            ],
            synergy: { ally: ["god_zeus", "valkyrie", "unicorn_young"], rival: ["demon_king", "vampire_lord"] }
        },
        lines: {
            normal: "신성한 빛이 당신을 인도할 겁니다. 저를 믿으세요.",
            touch_head: "어머, 날개는 성감... 아니, 예민한 부분입니다!",
            touch_chest: "아앗! ...신성모독... 인가요? 가슴이 두근거려요...",
            touch_chest_reject: "아앗! 신성모독입니다! 물러가세요!",
            touch_chest_love: "주님... 이 떨림은 무엇일까요? 당신 때문인가요...",
            touch_legs: "스타킹이 찢어지면 곤란해요... 살살 부탁드려요.",
            touch_special: "사악한 무리들이여, 성화에 정화되어라!"
        }
    },

    // --- SR (터치 상호작용 X) ---
    {
        id: "titan_atlas",
        name: "거신 아틀라스",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Earth", "Metal", "Nature"],
        ego: "Warlord",
        baseStr: 50, baseInt: 20,
        image: "images/creature_titan_atlas.png?v=5",
        lore: {
            title: "하늘을 떠받치는 자",
            story: "티탄족의 전사. 제우스와의 전쟁에서 패하여 영원히 하늘을 떠받치는 형벌을 받았다. 믿을 수 없는 괴력을 자랑하며, 그녀의 근육은 어떤 무게도 버텨낼 수 있다. 운동광이자 무뚝뚝하지만 정이 많다.",
            origin: "그리스 신화 / 세계의 끝",
            relationships: [
                { id: "time_lord_chronos", type: "ally", desc: "티탄족 동료. 함께하면 방어력 증가" },
                { id: "giant_hill", type: "ally", desc: "거인족 후배. 운동 메이트" }
            ],
            synergy: { ally: ["time_lord_chronos", "giant_hill", "golem_mud"], rival: ["god_zeus"] }
        },
        lines: { normal: "이 정도 바위는 깃털처럼 가볍지! 운동 좀 할래?" }
    },

    // --- SSR (신화급) ---
    {
        id: "wolf_fenrir",
        name: "종말의 늑대 펜리르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Ice", "Beast"],
        ego: "Berserker",
        baseStr: 55, baseInt: 30,
        image: "images/creature_wolf_fenrir.png",
        lore: {
            title: "라그나로크의 시작",
            story: "북유럽 신화의 거대한 늑대. 신들조차 두려워하여 마법의 사슬 글레이프니르로 묶어두었다. 라그나로크의 날, 사슬이 풀리면 오딘을 삼키고 세계를 멸망시킬 운명. 야수적 본능과 싸우며 주인을 지키려 애쓴다.",
            origin: "북유럽 신화 / 아스가르드",
            relationships: [
                { id: "god_odin", type: "rival", desc: "운명의 적. 펜리르가 오딘을 삼킬 운명" },
                { id: "wolf_dire", type: "family", desc: "늑대 후배. 함께하면 공격력 버프" }
            ],
            synergy: { ally: ["wolf_dire", "demon_king"], rival: ["god_odin", "valkyrie"] }
        },
        lines: {
            normal: "이 사슬... 끊어버리겠어!",
            touch_head: "크르릉... 쓰다듬는 건... 딱 한 번만 허락하지.",
            touch_chest: "심장 소리가 거세지는 건... 굶주림 때문이야!",
            touch_chest_reject: "크르르! 함부로 만지지 마!",
            touch_chest_love: "흥... 너한테만 예외를 두는 거야.",
            touch_legs: "발목 사슬은 이미 끊었어. 다음은 네 마음이야.",
            touch_special: "라그나로크의 시작이다!"
        }
    },

    // --- Special ---
    {
        id: "mage_flame",
        name: "화염 마법사",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Fire", "Wind"],
        baseStr: 8, baseInt: 22,
        image: "images/creature_mage_flame.png?v=3",
        lore: {
            title: "불꽃의 현자",
            story: "마법 아카데미 최연소 졸업생. 천재라 불리지만 본인은 '그냥 불이 좋을 뿐'이라고 말한다. 언제나 새로운 화염 마법을 연구하며, 가끔 실험이 폭발해서 연구실을 날려먹는다. 털털한 성격에 의외로 요리를 잘 한다(불 조절이 완벽하니까).",
            origin: "올림푸스 마법 아카데미",
            relationships: [
                { id: "phoenix_eternal", type: "ally", desc: "불사조의 깃털로 만든 지팡이를 사용. 불꽃 시너지" },
                { id: "elemental_water", type: "rival", desc: "물의 정령과는 견원지간. 만나면 증기 폭발" }
            ],
            synergy: { ally: ["phoenix_eternal", "demon_king"], rival: ["elemental_water", "bear_ice"] }
        },
        lines: { normal: "타오르는 지식이여! 오늘도 뭔가 태워볼까?" }
    },
    {
        id: "unicorn_young",
        name: "어린 유니콘",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light", "Nature"],
        baseStr: 15, baseInt: 15,
        image: "images/creature_unicorn.png?v=2",
        lore: {
            title: "순백의 희망",
            story: "순수한 마음을 가진 자에게만 모습을 드러내는 신성한 존재. 아직 어리지만 치유의 힘이 강력하다. 딸기 맛 사탕을 좋아하고, 무지개를 보면 신나서 뛰어다닌다. 뿔에서 나오는 빛은 어둠의 저주를 정화한다.",
            origin: "올림푸스 성스러운 숲",
            relationships: [
                { id: "flower_fairy", type: "ally", desc: "꽃의 요정과 단짝친구. 함께하면 힐량 증가" },
                { id: "demon_king", type: "rival", desc: "어둠의 마왕을 두려워하지만 맞서려 노력" }
            ],
            synergy: { ally: ["flower_fairy", "angel_arch"], rival: ["demon_king", "vampire_lord"] }
        },
        lines: { normal: "순수한 자만이 내 빛을 볼 수 있어! 히힝~" }
    },

    // --- Rare ---
    {
        id: "centaur_scout",
        name: "켄타우로스 정찰병",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Nature", "Wind"],
        baseStr: 12, baseInt: 5,
        image: "images/creature_centaur.png?v=2",
        lore: {
            title: "초원의 질주자",
            story: "올림푸스 평원을 누비는 반인반마. 활 솜씨가 뛰어나고 지형을 읽는 눈이 탁월하다. 동료들을 지키기 위해 항상 선두에서 정찰한다. 당근을 좋아하지만 '말이라서 좋아하는 게 아니야!'라고 부정한다.",
            origin: "올림푸스 대초원",
            relationships: [
                { id: "unicorn_young", type: "ally", desc: "같은 마족(馬族). 어린 유니콘을 보호" },
                { id: "wolf_dire", type: "rival", desc: "초원의 포식자 다이어울프와 영역 다툼" }
            ],
            synergy: { ally: ["unicorn_young", "eagle_iron"], rival: ["wolf_dire"] }
        },
        lines: { normal: "다그닥! 바람보다 빠르게! ...당근 있어?" }
    },

    // --- Unique ---
    {
        id: "wisp_faint",
        name: "희미한 위스프",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 1, baseInt: 8,
        image: "images/creature_wisp_faint.png?v=3",
        lore: {
            title: "길잃은 빛",
            story: "어둠 속에서 길을 잃은 영혼들을 인도하는 작은 빛. 말수가 적고 수줍음이 많지만, 위기의 순간에는 밝게 빛나 동료를 지킨다. 밤하늘의 별을 보며 혼자 반짝거리는 게 취미.",
            origin: "올림푸스 황혼의 숲",
            relationships: [
                { id: "angel_arch", type: "ally", desc: "빛의 동료. 함께하면 시야 확보" }
            ],
            synergy: { ally: ["angel_arch"], rival: [] }
        },
        lines: { normal: "반짝... 저기요... 반짝..." }
    },

    // --- Normal ---
    {
        id: "cloud_puff",
        name: "구름 솜사탕",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Wind", "Water"],
        baseStr: 2, baseInt: 4,
        image: "images/creature_cloud_puff.png",
        lore: {
            title: "하늘의 조각",
            story: "올림푸스 산 정상에서 태어난 구름 정령. 푹신푹신하고 포근해서 베개로 쓰면 꿀잠. 비가 오면 몸이 커지고, 햇볕을 받으면 몽글몽글해진다. 새들의 쉼터가 되어주는 게 보람.",
            origin: "올림푸스 산 정상",
            relationships: [
                { id: "eagle_iron", type: "ally", desc: "강철 독수리의 휴식처. 함께하면 회피율 증가" }
            ],
            synergy: { ally: ["eagle_iron", "wisp_faint"], rival: [] }
        },
        lines: { normal: "둥실둥실... 오늘도 평화로워~" }
    },

    // ==========================================
    // 🏔️ ASGARD (아스가르드) - 신성의 연합
    // 컨셉: 북유럽, 눈보라, 강철, 룬 문자
    // 특성: [불굴] 체력 낮을수록 공방 증가
    // ==========================================

    // --- UR (터치 상호작용 O) ---
    {
        id: "god_odin",
        name: "최고신 오딘",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Wind", "Magic"],
        ego: "Seeker",
        baseStr: 45, baseInt: 75,
        image: "images/creature_god_odin.png",
        lore: {
            title: "지혜의 대가를 치른 자",
            story: "아홉 세계를 다스리는 북유럽의 최고신. 지혜를 위해 한쪽 눈을 희생하고, 우주의 비밀을 알기 위해 위그드라실에 9일간 목을 매달았다. 냉철하고 계산적이지만, 인정받은 전사에게는 발할라의 문을 연다. 라그나로크에서 펜리르에게 삼켜질 운명.",
            origin: "북유럽 신화 / 아스가르드",
            relationships: [
                { id: "wolf_fenrir", type: "rival", desc: "운명의 적. 라그나로크에서 오딘을 삼킬 자" },
                { id: "valkyrie", type: "ally", desc: "충실한 전사. 함께하면 치명타율 증가" },
                { id: "god_zeus", type: "rival", desc: "신들의 왕 간의 자존심 대결" }
            ],
            synergy: { ally: ["valkyrie", "eagle_iron", "bear_ice"], rival: ["wolf_fenrir", "demon_king"] }
        },
        lines: {
            normal: "지혜를 원하느냐. 대가가 따를 것이다.",
            touch_head: "눈 한쪽의 대가로 얻은 지혜... 알고 싶은가?",
            touch_chest: "차가운 대지처럼 굳어있던 내 심장이... 뛰는군.",
            touch_legs: "서두르지 마라. 지혜는 천천히 얻는 법이다.",
            touch_special: "궁니르여, 적을 꿰뚫어라!"
        }
    },

    // --- SR (터치 상호작용 X) ---
    {
        id: "valkyrie",
        name: "전장의 깃발 브륀힐트",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Metal", "Wind"],
        ego: "Warlord",
        baseStr: 40, baseInt: 35,
        image: "images/creature_valkyrie.png?v=3",
        lore: {
            title: "영광의 선별자",
            story: "오딘의 명을 받아 전장에서 가장 용맹한 전사를 발할라로 인도하는 전쟁 처녀. 냉철하고 무자비하게 보이지만, 선택받지 못한 자들을 위해 몰래 눈물 흘리는 섬세한 마음의 소유자.",
            origin: "북유럽 신화 / 발할라",
            relationships: [
                { id: "god_odin", type: "ally", desc: "충성하는 주군. 함께하면 치명타 증가" },
                { id: "angel_arch", type: "ally", desc: "천상의 동료 전사" }
            ],
            synergy: { ally: ["god_odin", "angel_arch", "eagle_iron"], rival: ["wolf_fenrir"] }
        },
        lines: { normal: "전선 이상 무! 발할라를 위하여!" }
    },
    {
        id: "giant_hill",
        name: "대지의 방패 그로트",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth", "Nature"],
        ego: "Devotion",
        baseStr: 45, baseInt: 15,
        image: "images/creature_giant_hill.png?v=3",
        lore: {
            title: "산을 품은 거인",
            story: "서리 거인족의 후예. 거대한 체구에 어울리지 않게 온순하고 가족을 사랑한다. 작은 생명체들을 지키는 것이 취미이며, 전투에서는 동료를 위해 거대한 몸으로 방패가 된다.",
            origin: "북유럽 신화 / 요툰하임",
            relationships: [
                { id: "titan_atlas", type: "ally", desc: "거인족 선배. 운동 스승" },
                { id: "golem_mud", type: "ally", desc: "둔한 것들끼리의 우정" }
            ],
            synergy: { ally: ["titan_atlas", "golem_mud", "bear_ice"], rival: [] }
        },
        lines: { normal: "작은 친구~ 쉬었다 가." }
    },

    // --- Special ---
    {
        id: "dwarf_smith",
        name: "드워프 대장장이",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Metal", "Fire"],
        baseStr: 18, baseInt: 15,
        image: "images/creature_dwarf.png?v=4",
        lore: {
            title: "묠니르의 제작자",
            story: "아스가르드 최고의 무기장인. 토르의 망치 묠니르를 만든 장인 가문의 후손. 술을 마시면 제작 속도가 빨라지지만 완성품이 이상해진다. '맥주 한 잔 없으면 손이 안 움직여!'가 입버릇.",
            origin: "아스가르드 니다벨리르",
            relationships: [
                { id: "god_odin", type: "ally", desc: "오딘의 무기 공급자. 신뢰 관계" },
                { id: "golem_mud", type: "ally", desc: "광물 제공 파트너" }
            ],
            synergy: { ally: ["god_odin", "golem_mud", "eagle_iron"], rival: [] }
        },
        lines: { normal: "망치질 시작이다! 캉! 캉! 맥주 가져와!" }
    },

    // --- Rare ---
    {
        id: "eagle_iron",
        name: "강철 독수리",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Metal", "Wind"],
        baseStr: 10, baseInt: 8,
        image: "images/creature_eagle_iron.png?v=3",
        lore: {
            title: "하늘의 정찰자",
            story: "강철로 된 날개를 가진 신비로운 독수리. 세상 끝에서 끝까지 날아다니며 오딘에게 정보를 보고한다. 날개 깃털 하나로도 검을 만들 수 있을 만큼 강하고 날카롭다. 높은 곳에서 내려다보는 걸 좋아한다.",
            origin: "아스가르드 하늘",
            relationships: [
                { id: "valkyrie", type: "ally", desc: "발키리와 함께 전장을 정찰" },
                { id: "cloud_puff", type: "ally", desc: "구름 솜사탕 위에서 휴식" }
            ],
            synergy: { ally: ["valkyrie", "cloud_puff", "centaur_scout"], rival: [] }
        },
        lines: { normal: "날개는 강철이지. 하늘에서 모든 걸 본다!" }
    },
    {
        id: "bear_ice",
        name: "만년설 곰",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Ice", "Water"],
        baseStr: 15, baseInt: 3,
        image: "images/creature_bear_ice.png?v=3",
        lore: {
            title: "얼어붙은 포효",
            story: "북극의 만년설 속에서 태어난 전설의 곰. 하품 한 번에 눈보라가 일고, 포효 한 번에 빙하가 무너진다. 겉은 무섭지만 새끼 물개랑 노는 걸 좋아하는 츤데레. 연어를 매우 좋아한다.",
            origin: "아스가르드 니플하임",
            relationships: [
                { id: "giant_hill", type: "ally", desc: "거인과 곰의 든든한 조합" },
                { id: "mage_flame", type: "rival", desc: "불과 얼음은 상극!" }
            ],
            synergy: { ally: ["giant_hill", "snow_spirit"], rival: ["mage_flame", "phoenix_eternal"] }
        },
        lines: { normal: "추위는 익숙해. 연어 줄 거야? 아... 뭐, 안 줘도 돼..." }
    },

    // --- Normal ---
    {
        id: "snow_spirit",
        name: "눈송이 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Ice"],
        baseStr: 2, baseInt: 3,
        image: "images/creature_wisp_faint.png", // [Temp] Reuse wisp better than placeholder
        lines: { normal: "사르르... 녹지 않아요." }
    },

    // ==========================================
    // 🌸 SHANGRILA (무릉도원) - 환수의 맹약
    // 컨셉: 동양 판타지, 신비로움, 구름, 요술
    // 특성: [조화] 쿨타임 감소, 회복
    // ==========================================

    // --- UR (터치 상호작용 O) ---
    {
        id: "dragon_ancient",
        name: "태초의 용 바하무트",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Wind", "Chaos"],
        ego: "Seeker",
        baseStr: 50, baseInt: 70,
        image: "images/creature_dragon_ancient.png?v=5",
        lines: {
            normal: "지식의 탐구는 끝이 없구나. 너도 배우러 왔느냐?",
            touch_head: "무례하구나... 하지만 나쁘지는 않군.",
            touch_chest: "거긴... 용의 역린과 가까운 곳이다. 조심하거라.",
            touch_legs: "용의 비늘을 만지고 싶다면, 자격을 증명해 보거라.",
            touch_special: "이것이 태초의 지혜다. 똑바로 보거라."
        }
    },

    // --- UR Hidden (진화 체인 최종 단계) ---
    {
        id: "fox_nine_hidden",
        name: "천년 구미호 미호",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Dark", "Charm", "Time"],
        ego: "Star",
        baseStr: 55, baseInt: 75,
        isHidden: true, // 히든 플래그
        image: "images/creature_fox_nine_ur.png",
        lines: {
            normal: "천 년을 기다렸어... 드디어 너를 만났구나.",
            touch_head: "이 꼬리들... 전부 너만을 위해 기른 거야.",
            touch_chest: "심장이 뛰어? 천 년 동안 멈춰있던 내 심장도 그래.",
            touch_chest_love: "이리 와... 영원히 내 곁에 있어줘.",
            touch_legs: "도망가지 마... 내 꼬리가 널 놓아주지 않을 거야.",
            touch_special: "요호... 이젠 너도 내 것이야. 영원히."
        }
    },

    // --- SSR (터치 상호작용 O) ---
    {
        id: "phoenix_eternal",
        name: "불멸의 화조 페이",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Light", "Time"],
        ego: "Star",
        baseStr: 45, baseInt: 55,
        image: "images/creature_phoenix_eternal.png?v=3",
        lines: {
            normal: "안녕? 내 불꽃은 꺼지지 않아. 우리의 인연처럼 말이야!",
            touch_head: "앗, 조심해! 너무 뜨겁게 안아버릴지도 모른다구?",
            touch_chest: "심장이 너무 빨리 뛰어서... 불타버릴 것 같아.",
            touch_legs: "날아갈 준비 됐어? 꽉 잡아!",
            touch_special: "다시 피어나는 불꽃처럼! 영원히 빛나라!!"
        }
    },

    // --- SR (터치 상호작용 X) ---
    {
        id: "fox_nine",
        name: "여우요괴 미호",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Dark", "Charm"],
        ego: "Star",
        baseStr: 25, baseInt: 50,
        image: "images/creature_fox_yokai_sr.png",
        // [진화 시스템] 5성 + Lv.50 + 서약 시 히든 UR로 진화
        evolvesTo: "fox_nine_hidden",
        evolveConditions: { star: 5, level: 50, affectionLevel: 3 },
        lines: { normal: "어머, 간 좀 내어줄래? 농담이야~" }
    },

    // --- Special ---
    {
        id: "ninja_shadow",
        name: "그림자 닌자",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Dark", "Wind"],
        baseStr: 18, baseInt: 12,
        image: "images/creature_ninja_shadow.png?v=3",
        lore: {
            title: "어둠의 첩자",
            story: "달빛도 피해가는 그림자의 닌자. 존재 자체가 소문일 뿐, 실제로 본 사람은 살아돌아오지 못했다. 사실 수줍음이 많아서 사람 앞에 나서기가 힘든 것. 야식으로 라멘을 먹는 게 비밀.",
            origin: "상그릴라 암영촌",
            relationships: [
                { id: "vampire_lord", type: "ally", desc: "어둠 속의 동맹. 암살 시너지" },
                { id: "angel_arch", type: "rival", desc: "빛의 천사와는 상극" }
            ],
            synergy: { ally: ["vampire_lord", "demon_king"], rival: ["angel_arch", "unicorn_young"] }
        },
        lines: { normal: "기척을 숨겨라... 라멘 냄새도 숨겨야 하는데..." }
    },

    // --- Rare ---
    {
        id: "flower_fairy",
        name: "꽃의 요정",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Nature", "Light"],
        baseStr: 4, baseInt: 14,
        image: "images/creature_flower_fairy.png?v=3",
        lore: {
            title: "정원의 수호자",
            story: "아침 이슬처럼 맑고 순수한 꽃의 요정. 시든 꽃을 되살리고 병든 나무를 치유하는 힘을 가졌다. 수다 떠는 걸 좋아하고, 벌들과 친구. 꽃가루 알레르기가 있어서 가끔 재채기를 한다(아이러니).",
            origin: "상그릴라 영원의 정원",
            relationships: [
                { id: "unicorn_young", type: "ally", desc: "순수한 존재들의 우정. 힐량 버프" },
                { id: "ent_ancient", type: "ally", desc: "고대 나무의 보호를 받음" }
            ],
            synergy: { ally: ["unicorn_young", "ent_ancient"], rival: [] }
        },
        lines: { normal: "향기롭죠? 에취! 아, 미안..." }
    },
    {
        id: "panda_monk",
        name: "판다 수도승",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Earth", "Nature"],
        baseStr: 14, baseInt: 8,
        image: "images/creature_panda.png?v=2",
        lore: {
            title: "대나무 현자",
            story: "천년 수련 끝에 깨달음을 얻은 판다. 느긋해 보이지만 주먹 한 방에 바위가 부서진다. '급할 것 없다'가 인생 모토지만, 대나무 간식 시간만큼은 절대 지킨다. 명상하다 자주 졸음.",
            origin: "상그릴라 운무산 사원",
            relationships: [
                { id: "giant_hill", type: "ally", desc: "거인과 판다의 느긋한 콤비" },
                { id: "golem_mud", type: "ally", desc: "대지의 친구들" }
            ],
            synergy: { ally: ["giant_hill", "golem_mud", "ent_ancient"], rival: [] }
        },
        lines: { normal: "허허, 대나무 차 한잔 하게. 쿨쿨... 앗, 잠깐 졸았네." }
    },

    // --- Normal (진화 체인 시작점) ---
    {
        id: "fox_baby",
        name: "아기여우 미호",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Charm"],
        ego: "Star",
        baseStr: 5, baseInt: 10,
        image: "images/creature_fox_baby_n.png",
        lore: {
            title: "여우구슬의 씨앗",
            story: "귀엽고 천진난만한 아기 여우. 아직 꼬리는 하나뿐이지만, 언젠가 강력한 구미호가 될 잠재력을 품고 있다. 뭐든 물어뜯는 습관이 있고, 특히 주인의 신발을 좋아한다.",
            origin: "상그릴라 요호산",
            relationships: [
                { id: "fox_nine", type: "family", desc: "미래의 자신. 진화하면 여우요괴로" }
            ],
            synergy: { ally: [], rival: [] }
        },
        // [진화 시스템] 5성 달성 시 SR로 진화
        evolvesTo: "fox_nine",
        evolveConditions: { star: 5 },
        lines: { normal: "콩콩! 같이 놀아줘요~" }
    },
    {
        id: "ink_spirit",
        name: "먹물 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Water", "Dark"],
        baseStr: 1, baseInt: 5,
        image: "images/creature_ink_spirit.png",
        lines: { normal: "찰랑... 그림을 그려요." }
    },

    // ==========================================
    // 🌑 ABYSS (심연) - 심연의 군세
    // 컨셉: 크툴루, 촉수, 보라색 안개, 광기
    // 특성: [공포] 적 방어력 감소, 지속 피해
    // ==========================================

    // --- UR (터치 상호작용 O) ---
    {
        id: "void_emperor",
        name: "공허의 여제 에레보스",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Void", "Dark", "Chaos"],
        ego: "Devotion",
        baseStr: 35, baseInt: 85,
        image: "images/creature_void_emperor.png?v=5",
        lines: {
            normal: "아무도 없는 곳으로 가자... 영원히 나랑만 있게... 응?",
            touch_head: "나만 봐... 나만 느껴... 다른 건 필요 없어.",
            touch_chest: "여길 채워줘... 공허한 내 마음을 너로 가득 채워줘.",
            touch_legs: "깊은 심연으로 끌려오라구... 영원히 못 빠져나가게.",
            touch_special: "영원한 어둠 속으로... 우리 함께 떨어지자."
        }
    },
    {
        id: "dragon_chaos",
        name: "혼돈의 용희 티아마트",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Chaos", "Dark", "Fire"],
        ego: "Devotion",
        baseStr: 60, baseInt: 60,
        image: "images/creature_dragon_chaos.png?v=5",
        lines: {
            normal: "이 세상을 전부 부수고, 너랑 나 단둘이 남는 건 어때?",
            touch_head: "후후... 나를 길들이고 싶어? 더 거칠게 다뤄봐.",
            touch_chest: "심장이 뛰어? 나도 그래... 널 삼키고 싶을 만큼.",
            touch_chest_reject: "감히... 내 심장에 손을 대? 죽고 싶어?",
            touch_chest_love: "심장이 뛰는 게 느껴져? ...널 삼키고 싶을 만큼.",
            touch_legs: "어딜 가려고? 내 꼬리가 널 놔줄 것 같아?",
            touch_special: "모든 것을 태초의 혼돈으로... 사라져라."
        }
    },

    // --- SSR (터치 상호작용 O) ---
    {
        id: "demon_king",
        name: "마왕 바알",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Dark", "Chaos", "Fire"],
        ego: "Seeker",
        baseStr: 50, baseInt: 50,
        image: "images/creature_demon_king.png?v=5",
        lines: {
            normal: "헤~ 디렉터님, 또 일해? 재미없어~ 나랑 놀자니까?",
            touch_head: "우냐냐?! 머리 만지지 마! ...이, 이건 명령이라구!",
            touch_chest: "변태! 디렉터님 변태! ...뭐, 기분은 나쁘지 않네.",
            touch_legs: "발 핥고 싶어? 앙? ...농담이야! 진짜 핥으려고 하지 마!",
            touch_special: "전부 망가뜨려 줄게! 꺄하하핫!"
        }
    },

    // --- SR (터치 상호작용 X) ---
    {
        id: "vampire_lord",
        name: "진홍의 여왕 카밀라",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Dark", "Wind"],
        ego: "Devotion",
        baseStr: 35, baseInt: 40,
        image: "images/creature_vampire_lord.png?v=3",
        lore: {
            title: "월야의 군주",
            story: "천년을 산 고대 뱀파이어. 우아하고 고결하지만 피를 볼 때만은 광기어린 미소를 짓는다. 와인처럼 숙성된 피를 선호하며, 미남 미녀를 수집하는 취미가 있다. 햇볕만 없다면 의외로 상냥.",
            origin: "심연 발라키아 성",
            relationships: [
                { id: "ninja_shadow", type: "ally", desc: "어둠 속의 사냥 파트너" },
                { id: "angel_arch", type: "rival", desc: "성스러운 빛은 천적" }
            ],
            synergy: { ally: ["ninja_shadow", "demon_king"], rival: ["angel_arch", "phoenix_eternal"] }
        },
        lines: { normal: "맛있어 보이는... 멋진 분이시네요. 저녁 식사에 초대해도 될까요?" }
    },
    {
        id: "kraken_worldstar",
        name: "월드스타 루루",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Water", "Light", "Charm", "Voice"],
        ego: "Star",
        baseStr: 45, baseInt: 85,
        isHidden: true, // 히든 진화체
        image: "images/creature_kraken_worldstar.png",
        lore: {
            title: "심해의 디바",
            story: "심연에서 올라온 전설의 아이돌. 그녀의 노래는 파도를 일으키고, 춤은 해류를 바꾼다. 세계 투어로 모든 대륙을 매료시켰으며, 팬클럽 '촉촉이'의 회원은 수백만 명. 연습생 시절부터 꿈꿔온 무대의 정점에 서 있다.",
            origin: "심연 → 전세계 투어",
            relationships: [
                { id: "kraken_idol", type: "family", desc: "과거의 자신. 성장한 모습" }
            ],
            synergy: { ally: [], rival: [] }
        },
        lines: {
            normal: "제 노래가... 전 우주에 닿기를!",
            touch_head: "머리 스타일 망가져요~ 헤헷, 농담이에요.",
            touch_chest: "두근거리는 게 느껴지시나요? 이게 바로 사랑이에요!",
            touch_legs: "제 다리... 아니 꼬리, 매력적이죠?",
            touch_special: "앵콜? 좋아요! 마지막까지 소리 질러!!"
        }
    },

    // --- SR (아이돌) ---
    {
        id: "kraken_idol",
        name: "아이돌 루루",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Water", "Light", "Charm"],
        ego: "Star",
        baseStr: 30, baseInt: 60,
        image: "images/creature_kraken_idol.png",
        lore: {
            title: "떠오르는 별",
            story: "데뷔 1년 만에 차트 1위를 찍은 신예 아이돌. 촉수로 동시에 여러 악기를 연주할 수 있다는 특기로 유명. 팬 서비스가 좋아서 악수회에선 모든 팬과 동시에 악수한다. 월드스타를 향해 쉬지 않고 달려간다.",
            origin: "심연 해저 연예기획사",
            relationships: [
                { id: "kraken_baby", type: "family", desc: "연습생 시절의 자신" },
                { id: "kraken_worldstar", type: "family", desc: "미래의 모습. 진화하면 월드스타" }
            ],
            synergy: { ally: [], rival: [] }
        },
        // [진화 시스템] 월드스타로 진화
        evolvesTo: "kraken_worldstar",
        evolveConditions: { star: 5, level: 50, affectionLevel: 3 },
        lines: { normal: "안녕하세요! 신인 아이돌 루루입니다! 잘 부탁드려요!" }
    },

    // --- Normal (연습생) ---
    {
        id: "kraken_baby",
        name: "연습생 루루",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Dark"],
        ego: "Star",
        baseStr: 5, baseInt: 15,
        image: "images/creature_kraken_trainee.png",
        lore: {
            title: "꿈을 꾸는 문어",
            story: "심해에서 올라온 소녀 크라켄. 무대에 서는 것이 꿈이지만 아직 노래도 춤도 서투르다. 하지만 열정만큼은 누구에게도 지지 않는다! 촉수가 자꾸 엉켜서 안무 연습이 어렵다.",
            origin: "심연 해저",
            relationships: [
                { id: "kraken_idol", type: "family", desc: "미래의 자신. 진화하면 아이돌로" }
            ],
            synergy: { ally: [], rival: [] }
        },
        // [진화 시스템] 아이돌로 진화
        evolvesTo: "kraken_idol",
        evolveConditions: { star: 5 },
        lines: { normal: "언젠간 꼭... 무대에 설 거야! 기다려!" }
    },

    // --- Special ---
    {
        id: "knight_skeleton",
        name: "스켈레톤 나이트",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Dark", "Metal"],
        baseStr: 20, baseInt: 10,
        image: "images/creature_knight_skeleton.png?v=3",
        lore: {
            title: "잊혀진 맹세",
            story: "죽어서도 맹세를 지키는 불멸의 기사. 생전에 섬기던 왕국은 멸망했지만, 여전히 의무를 다하고 있다. 말수가 적고 표정이 없지만(뼈니까), 가끔 해골 유머를 던진다. 뼈가 삐걱거려서 은밀 작전은 불가.",
            origin: "심연 망각의 묘지",
            relationships: [
                { id: "vampire_lord", type: "ally", desc: "언데드 동맹. 함께하면 어둠 버프" }
            ],
            synergy: { ally: ["vampire_lord", "demon_king"], rival: ["angel_arch"] }
        },
        lines: { normal: "명령을... 기다린다. (삐걱)" }
    },

    // --- Rare ---
    {
        id: "gargoyle_stone",
        name: "석상 가고일",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Earth", "Dark"],
        baseStr: 15, baseInt: 5,
        image: "images/creature_gargoyle.png?v=2",
        lore: {
            title: "성벽의 수호자",
            story: "낮에는 돌, 밤에는 악마. 고대 성당의 수호자로 만들어졌지만, 주인이 모두 죽고 혼자 남았다. 무뚝뚝해 보이지만 내심 외롭다. 비둘기가 자꾸 위에 앉아서 짜증나지만, 참는다.",
            origin: "심연 잊혀진 성당",
            relationships: [
                { id: "golem_mud", type: "ally", desc: "같은 석상 계열. 둘이 있으면 방어력 버프" }
            ],
            synergy: { ally: ["golem_mud", "knight_skeleton"], rival: [] }
        },
        lines: { normal: "침입자 발견. 굳어버려라." }
    },

    // --- Unique ---
    {
        id: "goblin_scout",
        name: "고블린 정찰병",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Earth"],
        baseStr: 7, baseInt: 3,
        image: "images/creature_goblin_scout_new.png",
        lore: {
            title: "그림자 속의 눈",
            story: "빈틈을 찾아내는 것이 특기인 고블린. 교활하고 약삭빠르지만, 의외로 정이 많다. 보물을 모으는 게 취미이고, 반짝이는 것이면 뭐든 좋아한다. '이거 내꺼!'가 입버릇.",
            origin: "심연 어둠의 동굴",
            relationships: [
                { id: "rat_brown", type: "ally", desc: "같이 다니는 정찰 콤비" }
            ],
            synergy: { ally: ["rat_brown", "bat_small"], rival: [] }
        },
        lines: { normal: "빈틈 발견! 이건 내꺼다!" }
    },

    // --- Normal ---
    {
        id: "rat_brown",
        name: "시궁쥐",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Earth"],
        baseStr: 4, baseInt: 1,
        image: "images/creature_rat_brown_new.png",
        lore: {
            title: "어둠의 방랑자",
            story: "어디에나 있고, 무엇이든 먹는다. 생존력 하나는 최강. 치즈보다 땅콩버터를 더 좋아하는 의외의 취향. 작지만 무리지으면 무섭다.",
            origin: "심연 하수도",
            relationships: [
                { id: "goblin_scout", type: "ally", desc: "고블린과 정찰 콤비" }
            ],
            synergy: { ally: ["goblin_scout", "bat_small"], rival: [] }
        },
        lines: { normal: "찍! 치즈 아니면 땅콩버터!" }
    },
    {
        id: "bat_small",
        name: "작은 박쥐",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Wind"],
        baseStr: 3, baseInt: 2,
        image: "images/creature_bat_small_new.png",
        lore: {
            title: "밤하늘의 나그네",
            story: "어둠 속을 자유롭게 날아다니는 작은 박쥐. 초음파로 대화하고, 거꾸로 매달려 자는 게 편하다. 뱀파이어에게 동경심을 품고 있지만, 피는 무서워서 과일만 먹는다.",
            origin: "심연 동굴 천장",
            relationships: [
                { id: "vampire_lord", type: "ally", desc: "뱀파이어를 동경함" }
            ],
            synergy: { ally: ["vampire_lord", "goblin_scout"], rival: [] }
        },
        lines: { normal: "키이익... 피는 무서워..." }
    },

    // ==========================================
    // 🌿 WILD (야생) - 환수의 맹약
    // 컨셉: 자연, 드래곤, 정령, 원시의 힘
    // 특성: 야생의 법칙 - 기본 스탯 효율
    // ==========================================

    // --- UR (터치 상호작용 O) ---
    {
        id: "creator_gaia",
        name: "창조주 가이아",
        rarity: RANKS.UR,
        world: WORLDS.WILD,
        elements: ["Nature", "Earth", "Life"],
        ego: "Devotion",
        baseStr: 50, baseInt: 70,
        image: "images/creature_creator_gaia.png?v=5",
        lines: {
            normal: "어머, 힘들었니? 이리 와, 엄마가 다 안아줄게.",
            touch_head: "착한 아이네... 무럭무럭 자라렴.",
            touch_chest: "그래... 엄마 품이 그립니? 마음껏 어리광 부려도 된단다.",
            touch_chest_reject: "어머, 아가야? 아직은 이러면 안 된단다.",
            touch_chest_love: "그래... 엄마 품이 그립니? 마음껏 안기렴.",
            touch_legs: "무릎베개 해줄까? 푹 자렴, 아가야.",
            touch_special: "자연의 섭리를... 거스르지 말렴."
        }
    },

    // --- SSR (터치 상호작용 O) ---
    {
        id: "dragon_drake",
        name: "폭염의 패왕 이그니스",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Fire", "Wind", "Earth"],
        ego: "Warlord",
        baseStr: 55, baseInt: 30,
        image: "images/creature_dragon_drake.png?v=3",
        lines: {
            normal: "내 불꽃은 장난이 아니야. 화상 입고 싶어?",
            touch_head: "머, 머리 만지지 마! ...딱히 싫은 건 아니지만!",
            touch_chest: "심장 소리가 들려? 내 불꽃이 뜨거워지고 있어.",
            touch_legs: "꼬리 밟으면 죽여버릴 줄 알아!",
            touch_special: "이그니스 블레이드! 전부 태워주지!"
        }
    },

    // --- SR (터치 상호작용 X) ---
    {
        id: "chimera_beast",
        name: "키메라",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Fire", "Nature", "Beast"],
        ego: "Warlord",
        baseStr: 50, baseInt: 18,
        image: "images/creature_chimera.png",
        lines: { normal: "크아앙! 셋이서 덤비는 셈이지." }
    },

    // --- Special ---
    {
        id: "ent_ancient",
        name: "고대 엔트",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Nature", "Earth"],
        baseStr: 25, baseInt: 10,
        image: "images/creature_ent_ancient.png",
        lines: { normal: "숲을... 지킨다..." }
    },
    {
        id: "elemental_water",
        name: "물의 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Water", "Ice"],
        baseStr: 12, baseInt: 18,
        image: "images/creature_elemental_water.png?v=3",
        lines: { normal: "흐르는 대로..." }
    },
    {
        id: "snow_spirit",
        name: "눈송이 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Ice", "Light"],
        baseStr: 15, baseInt: 20,
        image: "images/creature_snow_spirit_new.png",
        lore: {
            title: "설원의 춤꾼",
            story: "차가운 북풍이 불 때 태어나는 정령. 그녀가 춤을 추면 세상이 하얗게 물든다. 아름답지만 만지면 동상에 걸릴 수 있으니 주의. 따뜻한 코코아를 좋아하지만 마실 수는 없다.",
            origin: "야생 설원",
            relationships: [{ id: "elemental_water", type: "friend", desc: "얼면 만날 수 있는 친구" }],
            synergy: { ally: ["elemental_water", "bear_ice"], rival: ["mage_flame"] }
        },
        lines: { normal: "차가워... 하지만 예쁘지?" }
    },

    // --- Rare ---
    {
        id: "wolf_dire",
        name: "다이어 울프",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Dark", "Earth"],
        baseStr: 12, baseInt: 5,
        image: "images/creature_wolf_dire.png?v=3",
        lines: { normal: "크르릉..." }
    },
    {
        id: "golem_mud",
        name: "진흙 골렘",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Earth", "Water"],
        baseStr: 16, baseInt: 2,
        image: "images/creature_golem_mud.png?v=3",
        lines: { normal: "단단하다." }
    },
    {
        id: "wisp_faint",
        name: "희미한 위스프",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light", "Spirit"],
        baseStr: 8, baseInt: 12,
        image: "images/creature_wisp_faint_new.png",
        lore: {
            title: "길 잃은 영혼의 등불",
            story: "숲속을 떠도는 작은 빛. 길 잃은 여행자를 마을로 안내해주기도 하지만, 장난기가 발동하면 늪으로 유인하기도 한다. 본인은 그저 숨바꼭질이라고 생각한다.",
            origin: "야생 깊은 숲",
            relationships: [{ id: "ent_ancient", type: "guardian", desc: "숲의 주인님" }],
            synergy: { ally: ["ent_ancient", "flower_fairy"], rival: [] }
        },
        lines: { normal: "반짝반짝... 어디로 갈까?" }
    },

    // --- Unique ---
    {
        id: "slime_red",
        name: "마그마 슬라임",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Fire"],
        baseStr: 6, baseInt: 4,
        image: "images/creature_magma_slime.png",
        lines: { normal: "보글보글..." }
    },
    {
        id: "mushroom_angry",
        name: "화난 버섯",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Nature"],
        baseStr: 5, baseInt: 5,
        image: "images/creature_mushroom_angry_new.png",
        lines: { normal: "쉬익..." }
    },
    {
        id: "fish_flying",
        name: "날치",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Water"],
        baseStr: 4, baseInt: 4,
        image: "images/creature_fish_flying_new.png",
        lines: { normal: "파닥파닥!" }
    },

    // --- Normal ---
    {
        id: "slime_green",
        name: "초록 슬라임",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Nature"],
        baseStr: 3, baseInt: 2,
        image: "images/creature_slime_green_new.png",
        lines: { normal: "꿀렁..." }
    },
    {
        id: "slime_blue",
        name: "파랑 슬라임",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Water"],
        baseStr: 2, baseInt: 3,
        image: "images/creature_blue_slime.png",
        lines: { normal: "찰팍..." }
    },
    {
        id: "pebble",
        name: "조약돌",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Earth"],
        baseStr: 5, baseInt: 0,
        image: "images/creature_pebble_new.png",
        lines: { normal: "..." }
    }
];

// 크리처 ID -> 정의 맵
export const CREATURE_DEF_MAP = {};
CREATURE_DEFS.forEach(def => {
    CREATURE_DEF_MAP[def.id] = def;
});

// 월드별 크리처 필터 헬퍼
export function getCreaturesByWorld(world) {
    return CREATURE_DEFS.filter(c => c.world === world);
}

// 세력별 크리처 필터 헬퍼
export function getCreaturesByFaction(faction) {
    return CREATURE_DEFS.filter(c => WORLD_TO_FACTION[c.world] === faction);
}

// 등급별 크리처 필터 헬퍼
export function getCreaturesByRarity(rarity) {
    return CREATURE_DEFS.filter(c => c.rarity === rarity);
}

// 터치 상호작용 가능 여부 체크 (SSR 이상만)
export function canInteract(creature) {
    return creature.rarity === RANKS.UR || creature.rarity === RANKS.SSR;
}
