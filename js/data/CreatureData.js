import { RANKS } from './RankData.js';

export const WORLDS = {
    OLYMPUS: "OLYMPUS",     // 치명타
    ASGARD: "ASGARD",       // 불굴 (체력 비례 공방)
    SHANGRILA: "SHANGRILA", // 조화 (쿨감/회복)
    ABYSS: "ABYSS",         // 공포 (방깎/디버프)
    WILD: "WILD"            // 야생 (기본 스탯 효율)
};

export const CREATURE_DEFS = [
    // === 1. Normal (1 Element) ===
    {
        id: "slime_green", name: "초록 슬라임", rarity: RANKS.NORMAL, world: WORLDS.WILD, elements: ["Nature"],
        baseStr: 3, baseInt: 2, image: "images/creature_slime_green.png?v=3",
        lines: { normal: "꿀렁...", touch_head: "?", touch_special: "!" }
    },
    {
        id: "slime_blue", name: "파랑 슬라임", rarity: RANKS.NORMAL, world: WORLDS.WILD, elements: ["Water"],
        baseStr: 2, baseInt: 3, image: "images/creature_slime_blue.png?v=3",
        lines: { normal: "찰팍...", touch_head: "...", touch_special: "!" }
    },
    {
        id: "rat_brown", name: "시궁쥐", rarity: RANKS.NORMAL, world: WORLDS.ABYSS, elements: ["Earth"],
        baseStr: 4, baseInt: 1, image: "images/creature_rat_brown.png?v=3",
        lines: { normal: "찍!", touch_head: "찍찍!", touch_special: "크아악!" }
    },
    {
        id: "bat_small", name: "작은 박쥐", rarity: RANKS.NORMAL, world: WORLDS.ABYSS, elements: ["Wind"],
        baseStr: 3, baseInt: 2, image: "images/creature_bat_small.png?v=3",
        lines: { normal: "키이익...", touch_head: "퍼덕퍼덕", touch_special: "깨물거야!" }
    },
    {
        id: "pebble", name: "조약돌", rarity: RANKS.NORMAL, world: WORLDS.WILD, elements: ["Earth"],
        baseStr: 5, baseInt: 0, image: "images/creature_pebble.png?v=3",
        lines: { normal: "...", touch_head: "...", touch_special: "..." }
    },

    // === 2. Unique (1 Element) ===
    {
        id: "slime_red", name: "마그마 슬라임", rarity: RANKS.UNIQUE, world: WORLDS.WILD, elements: ["Fire"],
        baseStr: 6, baseInt: 4, image: "images/creature_slime_red.png?v=3",
        lines: { normal: "보글보글...", touch_head: "뜨거워!", touch_special: "폭발한다!" }
    },
    {
        id: "mushroom_angry", name: "화난 버섯", rarity: RANKS.UNIQUE, world: WORLDS.WILD, elements: ["Nature"],
        baseStr: 5, baseInt: 5, image: "images/creature_mushroom_angry.png?v=3",
        lines: { normal: "쉬익...", touch_head: "건드리지 마!", touch_special: "포자 발사!" }
    },
    {
        id: "goblin_scout", name: "고블린 정찰병", rarity: RANKS.UNIQUE, world: WORLDS.ABYSS, elements: ["Earth"],
        baseStr: 7, baseInt: 3, image: "images/creature_goblin_scout.png?v=3",
        lines: { normal: "빈틈 발견.", touch_head: "뭐야?", touch_special: "약탈이다!" }
    },
    {
        id: "wisp_faint", name: "희미한 위스프", rarity: RANKS.UNIQUE, world: WORLDS.OLYMPUS, elements: ["Light"],
        baseStr: 1, baseInt: 8, image: "images/creature_wisp_faint.png?v=3",
        lines: { normal: "반짝...", touch_head: "눈부셔요?", touch_special: "빛으로..." }
    },
    {
        id: "fish_flying", name: "날치", rarity: RANKS.UNIQUE, world: WORLDS.WILD, elements: ["Water"],
        baseStr: 4, baseInt: 4, image: "images/creature_fish_flying.png?v=3",
        lines: { normal: "파닥파닥!", touch_head: "날 수 있어!", touch_special: "첨벙!" }
    },

    // === 3. Rare (1~2 Elements) ===
    {
        id: "wolf_dire", name: "다이어 울프", rarity: RANKS.RARE, world: WORLDS.WILD, elements: ["Dark", "Earth"],
        baseStr: 12, baseInt: 5, image: "images/creature_wolf_dire.png?v=3",
        lines: { normal: "크르릉...", touch_head: "나쁘지 않군.", touch_special: "사냥 시작이다." }
    },
    {
        id: "eagle_iron", name: "강철 독수리", rarity: RANKS.RARE, world: WORLDS.ASGARD, elements: ["Metal", "Wind"],
        baseStr: 10, baseInt: 8, image: "images/creature_eagle_iron.png?v=3",
        lines: { normal: "바람을 타고...", touch_head: "날개는 강철이지.", touch_special: "하늘에서 죽음을!" }
    },
    {
        id: "bear_ice", name: "만년설 곰", rarity: RANKS.RARE, world: WORLDS.ASGARD, elements: ["Ice", "Water"],
        baseStr: 15, baseInt: 3, image: "images/creature_bear_ice.png?v=3",
        lines: { normal: "추위는 익숙해.", touch_head: "졸리군...", touch_special: "으어어엉!" }
    },
    {
        id: "flower_fairy", name: "꽃의 요정", rarity: RANKS.RARE, world: WORLDS.SHANGRILA, elements: ["Nature", "Light"],
        baseStr: 4, baseInt: 14, image: "images/creature_flower_fairy.png?v=3",
        lines: { normal: "향기롭죠?", touch_head: "간지러워요~", touch_special: "피어나라!" }
    },
    {
        id: "golem_mud", name: "진흙 골렘", rarity: RANKS.RARE, world: WORLDS.WILD, elements: ["Earth", "Water"],
        baseStr: 16, baseInt: 2, image: "images/creature_golem_mud.png?v=3",
        lines: { normal: "...", touch_head: "단단하다.", touch_special: "부순다." }
    },

    // === 4. Special (2 Elements) ===
    {
        id: "knight_skeleton", name: "스켈레톤 나이트", rarity: RANKS.SPECIAL, world: WORLDS.ABYSS, elements: ["Dark", "Metal"],
        baseStr: 20, baseInt: 10, image: "images/creature_knight_skeleton.png?v=3",
        lines: { normal: "명령을...", touch_head: "과거의 영광이여.", touch_special: "뼈만 남겨주마." }
    },
    {
        id: "mage_flame", name: "화염 마법사", rarity: RANKS.SPECIAL, world: WORLDS.OLYMPUS, elements: ["Fire", "Wind"],
        baseStr: 8, baseInt: 22, image: "images/creature_mage_flame.png?v=3",
        lines: { normal: "타오르는 지식이여.", touch_head: "앗, 뜨거울걸?", touch_special: "재로 돌아가라!" }
    },
    {
        id: "ninja_shadow", name: "그림자 닌자", rarity: RANKS.SPECIAL, world: WORLDS.SHANGRILA, elements: ["Dark", "Wind"],
        baseStr: 18, baseInt: 12, image: "images/creature_ninja_shadow.png?v=3",
        lines: { normal: "...", touch_head: "기척을 숨겨라.", touch_special: "임무 완료." }
    },
    {
        id: "unicorn_young", name: "어린 유니콘", rarity: RANKS.SPECIAL, world: WORLDS.OLYMPUS, elements: ["Light", "Nature"],
        baseStr: 15, baseInt: 15, image: "images/creature_unicorn_young.png?v=3",
        lines: { normal: "순수한 자만이...", touch_head: "쓰다듬어 주세요.", touch_special: "정화의 빛!" }
    },
    {
        id: "elemental_water", name: "물의 정령", rarity: RANKS.SPECIAL, world: WORLDS.WILD, elements: ["Water", "Ice"],
        baseStr: 12, baseInt: 18, image: "images/creature_elemental_water.png?v=3",
        lines: { normal: "흐르는 대로...", touch_head: "시원하죠?", touch_special: "해일처럼!" }
    },

    // === 5. SR (2~3 Elements) ===
    {
        id: "dragon_drake", name: "화염의 용기사 이그니스", rarity: RANKS.SR, world: WORLDS.WILD, elements: ["Fire", "Wind", "Earth"],
        baseStr: 35, baseInt: 20, image: "images/creature_dragon_drake.png?v=3",
        lines: {
            normal: "내 안의 불꽃이 느껴지나?",
            touch_head: "용의 비늘은 뜨겁다네.",
            touch_special: "전장을 잿더미로 만들어주지!"
        }
    },
    {
        id: "giant_hill", name: "대지의 방패 그로트", rarity: RANKS.SR, world: WORLDS.ASGARD, elements: ["Earth", "Nature"],
        baseStr: 40, baseInt: 10, image: "images/creature_giant_hill.png?v=3",
        lines: {
            normal: "산처럼 굳건하게.",
            touch_head: "나를 흔들 순 없다.",
            touch_special: "대지진을 느껴봐라!"
        }
    },
    {
        id: "vampire_lord", name: "진홍의 여왕 카밀라", rarity: RANKS.SR, world: WORLDS.ABYSS, elements: ["Dark", "Wind"],
        baseStr: 30, baseInt: 35, image: "images/creature_vampire_lord.png?v=3",
        lines: {
            normal: "목이 마르군요, 디렉터...",
            touch_head: "어딜 만지시는 거죠? 흐음...",
            touch_special: "당신의 피... 아주 달콤해 보여요."
        }
    },
    {
        id: "valkyrie", name: "전장의 깃발 브륀힐트", rarity: RANKS.SR, world: WORLDS.ASGARD, elements: ["Light", "Metal", "Wind"],
        baseStr: 32, baseInt: 32, image: "images/creature_valkyrie.png?v=3",
        lines: {
            normal: "전사의 혼은 죽지 않습니다.",
            touch_head: "제 투구에 손대지 마십시오.",
            touch_special: "발할라를 위하여! 돌격!"
        }
    },
    {
        id: "kraken_baby", name: "심해의 아이돌 루루", rarity: RANKS.SR, world: WORLDS.ABYSS, elements: ["Water", "Dark"],
        baseStr: 38, baseInt: 25, image: "images/creature_kraken_baby.png?v=3",
        lines: {
            normal: "루루의 노래를 들어봐~ 🎵",
            touch_head: "촉수는 안 돼! 꺄악!",
            touch_special: "모두를 심해로 초대할게~♡"
        }
    },

    // === 6. SSR (3 Elements) ===
    {
        id: "dragon_ancient", name: "고대룡 현자 바하무트", rarity: RANKS.SSR, world: WORLDS.SHANGRILA, elements: ["Fire", "Wind", "Chaos"],
        baseStr: 60, baseInt: 50, image: "images/creature_dragon_ancient.png?v=3",
        lines: {
            normal: "수천 년의 지혜를 원하느냐.",
            touch_head: "무례하구나, 인간.",
            touch_special: "천지를 개벽할 시간이군."
        }
    },
    {
        id: "angel_arch", name: "대천사 미카엘", rarity: RANKS.SSR, world: WORLDS.OLYMPUS, elements: ["Light", "Fire", "Wind"],
        baseStr: 55, baseInt: 55, image: "images/creature_angel_arch.png?v=3",
        lines: {
            normal: "신성한 빛이 당신과 함께하길.",
            touch_head: "믿음이 부족해 보입니다만?",
            touch_special: "심판의 날이 도래했다!"
        }
    },
    {
        id: "demon_king", name: "마왕 바알", rarity: RANKS.SSR, world: WORLDS.ABYSS, elements: ["Dark", "Chaos", "Fire"],
        baseStr: 58, baseInt: 52, image: "images/creature_demon_king.png?v=3",
        lines: {
            normal: "원하는 게 있다면, 대가를 치러라.",
            touch_head: "내 뿔을 건드리다니, 배짱이 좋군.",
            touch_special: "절망하라! 그리고 숭배하라!"
        }
    },
    {
        id: "titan_atlas", name: "거신 아틀라스", rarity: RANKS.SSR, world: WORLDS.OLYMPUS, elements: ["Earth", "Metal", "Nature"],
        baseStr: 70, baseInt: 20, image: "images/creature_titan_atlas.png?v=3",
        lines: {
            normal: "세상의 무게... 아직 견딜만하다.",
            touch_head: "쉬고 싶군...",
            touch_special: "하늘을 무너뜨려 주마!"
        }
    },
    {
        id: "phoenix_eternal", name: "불멸의 화조 페이", rarity: RANKS.SSR, world: WORLDS.SHANGRILA, elements: ["Fire", "Light", "Time"],
        baseStr: 45, baseInt: 65, image: "images/creature_phoenix_eternal.png?v=3",
        lines: {
            normal: "죽음은 또 다른 시작일 뿐.",
            touch_head: "내 깃털은 아주 뜨거워요.",
            touch_special: "영원히 타오르는 불꽃이 되어라!"
        }
    },

    // === 7. UR (3 Elements - Mythical) ===
    {
        id: "god_zeus", name: "천둥의 신 제우스", rarity: RANKS.UR, world: WORLDS.OLYMPUS, elements: ["Lightning", "Wind", "Light"],
        baseStr: 100, baseInt: 90, image: "images/creature_god_zeus.png?v=3",
        lines: {
            normal: "내가 곧 하늘이다.",
            touch_head: "감히 신의 몸에 손을 대느냐!",
            touch_special: "모두 무릎 꿇어라! 천벌이다!"
        }
    },
    {
        id: "dragon_chaos", name: "혼돈의 용희 티아마트", rarity: RANKS.UR, world: WORLDS.ABYSS, elements: ["Chaos", "Dark", "Fire"],
        baseStr: 120, baseInt: 100, image: "images/creature_dragon_chaos.png?v=3",
        lines: {
            normal: "질서는 지루해... 혼돈만이 진리야.",
            touch_head: "후훗, 나를 길들이고 싶어?",
            touch_special: "모든 것을 태초의 덩어리로 돌려주지."
        }
    },
    {
        id: "creator_gaia", name: "창조주 가이아", rarity: RANKS.UR, world: WORLDS.WILD, elements: ["Nature", "Earth", "Life"],
        baseStr: 80, baseInt: 120, image: "images/creature_creator_gaia.png?v=3",
        lines: {
            normal: "모든 생명은 나의 아이들이란다.",
            touch_head: "착한 아이로구나...",
            touch_special: "대지의 분노를 감당할 수 있겠느냐."
        }
    },
    {
        id: "time_lord_chronos", name: "시간의 지배자 크로노스", rarity: RANKS.UR, world: WORLDS.OLYMPUS, elements: ["Time", "Void", "Ice"],
        baseStr: 95, baseInt: 95, image: "images/creature_time_lord_chronos.png?v=3",
        lines: {
            normal: "시간은 누구에게나 공평하게 흐르지 않네.",
            touch_head: "나의 모래시계를 건드리지 말게.",
            touch_special: "너의 시간은 여기까지다."
        }
    },
    {
        id: "void_emperor", name: "공허의 여제 에레보스", rarity: RANKS.UR, world: WORLDS.ABYSS, elements: ["Void", "Dark", "Chaos"],
        baseStr: 110, baseInt: 110, image: "images/creature_void_emperor.png?v=3",
        lines: {
            normal: "이곳에는... 아무것도 없어...",
            touch_head: "내게 닿으면... 소멸할 텐데?",
            touch_special: "영원한 어둠 속으로... 떨어져라."
        }
    }
];

export const CREATURE_DEF_MAP = {};
CREATURE_DEFS.forEach(def => {
    CREATURE_DEF_MAP[def.id] = def;
});
