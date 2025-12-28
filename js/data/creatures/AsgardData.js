import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const ASGARD_CREATURES = [
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
                { id: "god_odin", type: "rival", desc: "운명의 적. 펜리르가 오딘을 삼킬 운명" ,
        sprites: {
            idle: "images/creature_wolf_fenrir.png",
            joy: "images/creature_wolf_fenrir_joy.png",
            sad: "images/creature_wolf_fenrir_sad.png",
            angry: "images/creature_wolf_fenrir_angry.png",
            skill: "images/creature_wolf_fenrir_skill.png",
            gallery: "images/creature_wolf_fenrir_gallery.png"
        ,
        sprites: {
            idle: "images/creature_god_odin.png",
            joy: "images/creature_god_odin_joy.png",
            sad: "images/creature_god_odin_sad.png",
            angry: "images/creature_god_odin_angry.png",
            skill: "images/creature_god_odin_skill.png",
            gallery: "images/creature_god_odin_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Wind, Magic, 최고신 오딘",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 최고신 오딘 special illustration, intimate atmosphere"
        },
        lore: {
            title: "지혜의 대가를 치른 자",
            story: "아홉 세계를 다스리는 북유럽의 최고신. 지혜를 위해 한쪽 눈을 희생하고, 우주의 비밀을 알기 위해 위그드라실에 9일간 목을 매달았다. 냉철하고 계산적이지만, 인정받은 전사에게는 발할라의 문을 연다. 라그나로크에서 펜리르에게 삼켜질 운명.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Beast, 종말의 늑대 펜리르",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 종말의 늑대 펜리르 special illustration, intimate atmosphere"
        },
        lore: {
            title: "라그나로크의 시작",
            story: "북유럽 신화의 거대한 늑대. 신들조차 두려워하여 마법의 사슬 글레이프니르로 묶어두었다. 라그나로크의 날, 사슬이 풀리면 오딘을 삼키고 세계를 멸망시킬 운명. 야수적 본능과 싸우며 주인을 지키려 애쓴다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
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
    {
        id: "god_odin",
        name: "최고신 오딘",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Wind", "Magic"],
        ego: "Seeker",
        baseStr: 45, baseInt: 75,
        skillId: "odin_skill",
        image: "images/creature_god_odin.png",
        lore: {
            title: "지혜의 대가를 치른 자",
            story: "아홉 세계를 다스리는 북유럽의 최고신. 지혜를 위해 한쪽 눈을 희생하고, 우주의 비밀을 알기 위해 위그드라실에 9일간 목을 매달았다. 냉철하고 계산적이지만, 인정받은 전사에게는 발할라의 문을 연다. 라그나로크에서 펜리르에게 삼켜질 운명.",
            origin: "북유럽 신화 / 아스가르드",
            relationships: [
                { id: "wolf_fenrir", type: "rival", desc: "운명의 적. 라그나로크에서 오딘을 삼킬 자" },
                { id: "valkyrie", type: "ally", desc: "충실한 전사. 함께하면 치명타율 증가" ,
        sprites: {
            idle: "images/creature_valkyrie.png?v=3",
            joy: "images/creature_valkyrie_joy.png?v=3",
            sad: "images/creature_valkyrie_sad.png?v=3",
            angry: "images/creature_valkyrie_angry.png?v=3",
            skill: "images/creature_valkyrie_skill.png?v=3",
            gallery: "images/creature_valkyrie_gallery.png?v=3"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Metal, Wind, 전장의 깃발 브륀힐트",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 전장의 깃발 브륀힐트 special illustration, intimate atmosphere"
        },
        lore: {
            title: "영광의 선별자",
            story: "오딘의 명을 받아 전장에서 가장 용맹한 전사를 발할라로 인도하는 전쟁 처녀. 냉철하고 무자비하게 보이지만, 선택받지 못한 자들을 위해 몰래 눈물 흘리는 섬세한 마음의 소유자.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
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
        image: "images/creatures/wild/creature_giant_hill.png",
        lore: {
            title: "산을 품은 거인",
            story: "서리 거인족의 후예. 거대한 체구에 어울리지 않게 온순하고 가족을 사랑한다. 작은 생명체들을 지키는 것이 취미이며, 전투에서는 돈료를 위해 거대한 몸으로 방패가 된다.",
            origin: "북유럽 신화 / 요툰하임",
            relationships: [
                { id: "titan_atlas", type: "ally", desc: "거인족 선배. 운동 스승" ,
        sprites: {
            idle: "images/creature_giant_hill.png?v=3",
            joy: "images/creature_giant_hill_joy.png?v=3",
            sad: "images/creature_giant_hill_sad.png?v=3",
            angry: "images/creature_giant_hill_angry.png?v=3",
            skill: "images/creature_giant_hill_skill.png?v=3",
            gallery: "images/creature_giant_hill_gallery.png?v=3"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Earth, Nature, 대지의 방패 그로트",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 대지의 방패 그로트 special illustration, intimate atmosphere"
        },
        lore: {
            title: "산을 품은 거인",
            story: "서리 거인족의 후예. 거대한 체구에 어울리지 않게 온순하고 가족을 사랑한다. 작은 생명체들을 지키는 것이 취미이며, 전투에서는 돈료를 위해 거대한 몸으로 방패가 된다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
                { id: "golem_mud", type: "ally", desc: "둔한 것들끼리의 우정" }
            ],
            synergy: { ally: ["titan_atlas", "golem_mud", "bear_ice"], rival: [] }
        },
        lines: { normal: "작은 친구~ 쉬었다 가." }
    },
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
                { id: "god_odin", type: "ally", desc: "오딘의 무기 공급자. 신뢰 관계" ,
        sprites: {
            idle: "images/creature_dwarf.png?v=4",
            joy: "images/creature_dwarf_joy.png?v=4",
            sad: "images/creature_dwarf_sad.png?v=4",
            angry: "images/creature_dwarf_angry.png?v=4",
            skill: "images/creature_dwarf_skill.png?v=4",
            gallery: "images/creature_dwarf_gallery.png?v=4"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, Fire, 드워프 대장장이",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 드워프 대장장이 special illustration, intimate atmosphere"
        },
        lore: {
            title: "묠니르의 제작자",
            story: "아스가르드 최고의 무기장인. 토르의 망치 묠니르를 만든 장인 가문의 후손. 술을 마시면 제작 속도가 빨라지지만 완성품이 이상해진다. '맥주 한 잔 없으면 손이 안 움직여!'가 입버릇.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
                { id: "golem_mud", type: "ally", desc: "광물 제공 파트너" }
            ],
            synergy: { ally: ["god_odin", "golem_mud", "eagle_iron"], rival: [] }
        },
        lines: { normal: "망치질 시작이다! 캉! 캉! 맥주 가져와!" }
    },
    {
        id: "eagle_iron",
        name: "강철 독수리",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Metal", "Wind"],
        baseStr: 10, baseInt: 8,
        image: "images/creatures/wild/creature_eagle_iron.png",
        lore: {
            title: "하늘의 정찰자",
            story: "강철로 된 날개를 가진 신비로운 독수리. 세상 끝에서 끝까지 날아다니며 오딘에게 정보를 보고한다. 날개 깃털 하나로도 검을 만들 수 있을 만큼 강하고 날카롭다. 높은 곳에서 내려다보는 걸 좋아한다.",
            origin: "아스가르드 하늘",
            relationships: [
                { id: "valkyrie", type: "ally", desc: "발키리와 함께 전장을 정찰" ,
        sprites: {
            idle: "images/creature_eagle_iron.png?v=3",
            joy: "images/creature_eagle_iron_joy.png?v=3",
            sad: "images/creature_eagle_iron_sad.png?v=3",
            angry: "images/creature_eagle_iron_angry.png?v=3",
            skill: "images/creature_eagle_iron_skill.png?v=3",
            gallery: "images/creature_eagle_iron_gallery.png?v=3"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, Wind, 강철 독수리",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 강철 독수리 special illustration, intimate atmosphere"
        },
        lore: {
            title: "하늘의 정찰자",
            story: "강철로 된 날개를 가진 신비로운 독수리. 세상 끝에서 끝까지 날아다니며 오딘에게 정보를 보고한다. 날개 깃털 하나로도 검을 만들 수 있을 만큼 강하고 날카롭다. 높은 곳에서 내려다보는 걸 좋아한다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
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
        image: "images/creatures/asgard/creature_bear_ice.png",
        lore: {
            title: "얼어붙은 포효",
            story: "북극의 만년설 속에서 태어난 전설의 곰. 하품 한 번에 눈보라가 일고, 포효 한 번에 빙하가 무너진다. 겉은 무섭지만 새끼 물개랑 노는 걸 좋아하는 츤데레. 연어를 매우 좋아한다.",
            origin: "아스가르드 니플하임",
            relationships: [
                { id: "giant_hill", type: "ally", desc: "거인과 곰의 든든한 조합" ,
        sprites: {
            idle: "images/creature_bear_ice.png?v=3",
            joy: "images/creature_bear_ice_joy.png?v=3",
            sad: "images/creature_bear_ice_sad.png?v=3",
            angry: "images/creature_bear_ice_angry.png?v=3",
            skill: "images/creature_bear_ice_skill.png?v=3",
            gallery: "images/creature_bear_ice_gallery.png?v=3"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Ice, Water, 만년설 곰",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 만년설 곰 special illustration, intimate atmosphere"
        },
        lore: {
            title: "얼어붙은 포효",
            story: "북극의 만년설 속에서 태어난 전설의 곰. 하품 한 번에 눈보라가 일고, 포효 한 번에 빙하가 무너진다. 겉은 무섭지만 새끼 물개랑 노는 걸 좋아하는 츤데레. 연어를 매우 좋아한다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
                { id: "mage_flame", type: "rival", desc: "불과 얼음은 상극!" }
            ],
            synergy: { ally: ["giant_hill", "snow_spirit"], rival: ["mage_flame", "phoenix_eternal"] }
        },
        lines: { normal: "추위는 익숙해. 연어 줄 거야? 아... 뭐, 안 줘도 돼..." }
    },
    {
        id: "god_loki",
        name: "장난의 신 로키",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Magic", "Chaos"],
        baseStr: 25, baseInt: 65,
        image: "images/creatures/asgard/god_loki.png", // Restored image
        lore: {
            title: "변신의 귀재",
            story: "오딘의 의형제이자 아스가르드 최고의 트릭스터. 지루함을 참지 못해 각종 사고를 치지만, 때로는 기발한 꾀로 신들을 구하기도 한다. 펜리르와 요르문간드의 아버지.",
            origin: "북유럽 신화 / 아스가르드",
            relationships: [
                { id: "god_odin", type: "ally", desc: "애증의 관계. 의형제" ,
        sprites: {
            idle: "images/creature_god_loki.png",
            joy: "images/creature_god_loki_joy.png",
            sad: "images/creature_god_loki_sad.png",
            angry: "images/creature_god_loki_angry.png",
            skill: "images/creature_god_loki_skill.png",
            gallery: "images/creature_god_loki_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Magic, Chaos, 장난의 신 로키",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 장난의 신 로키 special illustration, intimate atmosphere"
        },
        lore: {
            title: "변신의 귀재",
            story: "오딘의 의형제이자 아스가르드 최고의 트릭스터. 지루함을 참지 못해 각종 사고를 치지만, 때로는 기발한 꾀로 신들을 구하기도 한다. 펜리르와 요르문간드의 아버지.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
                { id: "wolf_fenrir", type: "family", desc: "나의 사랑하는 아들" }
            ],
            synergy: { ally: ["wolf_fenrir", "snake_world_jormungandr"], rival: ["god_thor"] }
        },
        lines: { normal: "심심한데, 뭐 재미있는 일 없나?" }
    },
    {
        id: "god_freya",
        name: "미의 여신 프레이야",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Magic"],
        baseStr: 30, baseInt: 60,
        image: "images/creatures/asgard/god_freya.png", // Restored image
        lore: {
            title: "전장의 지배자",
            story: "사랑과 전쟁을 동시에 관장하는 여신. 발키리들의 진정한 대장이며, 전사한 영웅들의 절반은 그녀의 몫이다. 황금과 보석, 그리고 아름다운 고양이를 좋아한다.",
            origin: "북유럽 신화 / 폴크방",
            relationships: [
                { id: "god_odin", type: "rival", desc: "영혼 쟁탈전 경쟁자" ,
        sprites: {
            idle: "images/creature_god_freya.png",
            joy: "images/creature_god_freya_joy.png",
            sad: "images/creature_god_freya_sad.png",
            angry: "images/creature_god_freya_angry.png",
            skill: "images/creature_god_freya_skill.png",
            gallery: "images/creature_god_freya_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Magic, 미의 여신 프레이야",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 미의 여신 프레이야 special illustration, intimate atmosphere"
        },
        lore: {
            title: "전장의 지배자",
            story: "사랑과 전쟁을 동시에 관장하는 여신. 발키리들의 진정한 대장이며, 전사한 영웅들의 절반은 그녀의 몫이다. 황금과 보석, 그리고 아름다운 고양이를 좋아한다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
                { id: "nordic_cat_freya", type: "pet", desc: "사랑하는 애완묘" }
            ],
            synergy: { ally: ["valkyrie", "nordic_cat_freya"], rival: [] }
        },
        lines: { normal: "아름다움은 그 자체로 무기인 법." }
    },
    {
        id: "snake_world_jormungandr",
        name: "미드가르드 뱀 요르문간드",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Water", "Dark", "Poison"],
        baseStr: 70, baseInt: 40,
        image: "images/creatures/asgard/creature_snake_world_jormungandr.png", // Restored image
        lore: {
            title: "세계를 감는 뱀",
            story: "로키의 자식 중 하나. 태어나자마자 바다에 버려졌으나, 너무 거대해져서 인간 세계(미드가르드)를 한 바퀴 감고 자신의 꼬리를 물고 있다. 토르와는 숙적 관계.",
            origin: "북유럽 신화 / 미드가르드 바다",
            relationships: [
                { id: "god_loki", type: "family", desc: "아버지" ,
        sprites: {
            idle: "images/creature_snake_world_jormungandr.png",
            joy: "images/creature_snake_world_jormungandr_joy.png",
            sad: "images/creature_snake_world_jormungandr_sad.png",
            angry: "images/creature_snake_world_jormungandr_angry.png",
            skill: "images/creature_snake_world_jormungandr_skill.png",
            gallery: "images/creature_snake_world_jormungandr_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Water, Dark, Poison, 미드가르드 뱀 요르문간드",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 미드가르드 뱀 요르문간드 special illustration, intimate atmosphere"
        },
        lore: {
            title: "세계를 감는 뱀",
            story: "로키의 자식 중 하나. 태어나자마자 바다에 버려졌으나, 너무 거대해져서 인간 세계(미드가르드)를 한 바퀴 감고 자신의 꼬리를 물고 있다. 토르와는 숙적 관계.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
                { id: "god_thor", type: "rival", desc: "라그나로크의 숙적" }
            ],
            synergy: { ally: ["god_loki", "wolf_fenrir"], rival: ["god_thor"] }
        },
        lines: { normal: "바다가 끓어오른다..." }
    },
    {
        id: "ratatoskr_squirrel",
        name: "메신저 라타토스크",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Wind", "Beast"],
        baseStr: 10, baseInt: 15,
        image: "images/creatures/asgard/ratatoskr_squirrel.png", // Restored image
        lore: {
            title: "세계수의 수다쟁이",
            story: "위그드라실을 오르내리며 독수리와 니드호그 사이를 이간질하는 다람쥐. 온갖 소문의 근원지이며, 정보 수집 능력이 탁월하다.",
            origin: "북유럽 신화 / 위그드라실",
            relationships: [
                { id: "eagle_iron", type: "rival", desc: "골탕먹이기 좋은 상대" ,
        sprites: {
            idle: "images/ratatoskr_squirrel.png",
            joy: "images/ratatoskr_squirrel_joy.png",
            sad: "images/ratatoskr_squirrel_sad.png",
            angry: "images/ratatoskr_squirrel_angry.png",
            skill: "images/ratatoskr_squirrel_skill.png",
            gallery: "images/ratatoskr_squirrel_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Wind, Beast, 메신저 라타토스크",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 메신저 라타토스크 special illustration, intimate atmosphere"
        },
        lore: {
            title: "세계수의 수다쟁이",
            story: "위그드라실을 오르내리며 독수리와 니드호그 사이를 이간질하는 다람쥐. 온갖 소문의 근원지이며, 정보 수집 능력이 탁월하다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
                { id: "yggdrasil_guardian", type: "home", desc: "나의 놀이터" }
            ],
            synergy: { ally: ["eagle_iron", "muninn_crow"], rival: [] }
        },
        lines: { normal: "그거 들었어? 오딘 님이 글쎄..." }
    },
    {
        id: "god_hel",
        name: "지옥의 여왕 헬",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Ice", "Death"],
        baseStr: 30, baseInt: 70,
        image: "images/creatures/asgard/god_hel.png", // Restored image (originally god_hel.png)
        lore: {
            title: "니플헤임의 지배자",
            story: "로키의 딸이자 죽은 자들의 여왕. 반은 아름다운 여인, 반은 썩어가는 시체의 모습을 하고 있다. 라그나로크 때 손톱으로 만든 배 나글파르를 타고 아스가르드를 침공한다.",
            origin: "북유럽 신화 / 니플헤임",
            relationships: [
                { id: "god_loki", type: "family", desc: "아버지" ,
        sprites: {
            idle: "images/creature_god_hel.png",
            joy: "images/creature_god_hel_joy.png",
            sad: "images/creature_god_hel_sad.png",
            angry: "images/creature_god_hel_angry.png",
            skill: "images/creature_god_hel_skill.png",
            gallery: "images/creature_god_hel_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Death, 지옥의 여왕 헬",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 지옥의 여왕 헬 special illustration, intimate atmosphere"
        },
        lore: {
            title: "니플헤임의 지배자",
            story: "로키의 딸이자 죽은 자들의 여왕. 반은 아름다운 여인, 반은 썩어가는 시체의 모습을 하고 있다. 라그나로크 때 손톱으로 만든 배 나글파르를 타고 아스가르드를 침공한다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
                { id: "wolf_fenrir", type: "family", desc: "오빠" },
                { id: "god_odin", type: "rival", desc: "적대 관계" }
            ],
            synergy: { ally: ["god_loki", "wolf_fenrir"], rival: ["god_odin", "valkyrie"] }
        },
        lines: { normal: "산 자는 이곳에 올 수 없다..." }
    },
    {
        id: "muninn_crow",
        name: "기억의 까마귀 무닌",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Wind", "Dark"],
        baseStr: 15, baseInt: 25,
        image: "images/creatures/asgard/muninn_crow.png",
        lore: {
            title: "오딘의 기억",
            story: "오딘의 어깨에 앉아 세상의 기억을 속삭이는 까마귀. 후긴(생각)과는 달리 과거의 모든 것을 기억하고 있다. 반짝이는 것을 좋아해서 자주 훔쳐온다.",
            origin: "북유럽 신화",
            relationships: [
                { id: "god_odin", type: "master", desc: "주군" ,
        sprites: {
            idle: "images/muninn_crow.png",
            joy: "images/muninn_crow_joy.png",
            sad: "images/muninn_crow_sad.png",
            angry: "images/muninn_crow_angry.png",
            skill: "images/muninn_crow_skill.png",
            gallery: "images/muninn_crow_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Wind, Dark, 기억의 까마귀 무닌",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 기억의 까마귀 무닌 special illustration, intimate atmosphere"
        },
        lore: {
            title: "오딘의 기억",
            story: "오딘의 어깨에 앉아 세상의 기억을 속삭이는 까마귀. 후긴(생각)과는 달리 과거의 모든 것을 기억하고 있다. 반짝이는 것을 좋아해서 자주 훔쳐온다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
                { id: "eagle_iron", type: "rival", desc: "하늘의 라이벌" }
            ],
            synergy: { ally: ["god_odin", "eagle_iron"], rival: [] }
        },
        lines: { normal: "까악! 나는 모든 것을 기억한다!" }
    },
    {
        id: "elk_golden",
        name: "황금 뿔 아이크쉬르니르",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Nature", "Light"],
        baseStr: 35, baseInt: 20,
        image: "images/creatures/asgard/elk_golden.png",
        lore: {
            title: "발할라의 수호수",
            story: "발할라 지붕 위에서 라에라드 나무의 잎을 뜯어먹는 거대한 사슴. 뿔에서 맑은 물이 흘러나와 모든 강의 근원이 된다고 한다. 신성한 존재로 여겨진다.",
            origin: "북유럽 신화 / 발할라",
            relationships: [
                { id: "god_odin", type: "master", desc: "발할라의 주인" ,
        sprites: {
            idle: "images/elk_golden.png",
            joy: "images/elk_golden_joy.png",
            sad: "images/elk_golden_sad.png",
            angry: "images/elk_golden_angry.png",
            skill: "images/elk_golden_skill.png",
            gallery: "images/elk_golden_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Nature, Light, 황금 뿔 아이크쉬르니르",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 황금 뿔 아이크쉬르니르 special illustration, intimate atmosphere"
        },
        lore: {
            title: "발할라의 수호수",
            story: "발할라 지붕 위에서 라에라드 나무의 잎을 뜯어먹는 거대한 사슴. 뿔에서 맑은 물이 흘러나와 모든 강의 근원이 된다고 한다. 신성한 존재로 여겨진다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    },
                { id: "ratatoskr_squirrel", type: "friend", desc: "나무 친구" }
            ],
            synergy: { ally: ["god_odin", "ratatoskr_squirrel"], rival: [] }
        },
        lines: { normal: "내 뿔에서 흐르는 생명의 물을 보아라." }
    },
    {
        id: "bifrost_wisp",
        name: "비프로스트의 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Light", "Rainbow"],
        baseStr: 5, baseInt: 15,
        image: "images/creatures/asgard/bifrost_wisp.png",
        lore: {
            title: "무지개 다리의 조각",
            story: "신들의 세계와 인간 세계를 잇는 무지개 다리 비프로스트에서 떨어져 나온 작은 빛의 조각.",
            origin: "아스가르드",
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
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Rainbow, 비프로스트의 정령",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 비프로스트의 정령 special illustration, intimate atmosphere"
        },
        lore: {
            title: "무지개 다리의 조각",
            story: "신들의 세계와 인간 세계를 잇는 무지개 다리 비프로스트에서 떨어져 나온 작은 빛의 조각.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    }
        },
        lines: { normal: "반짝반짝~" }
    },
    {
        id: "einherjar_ghost",
        name: "에인헤랴르의 혼",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Light", "Ghost"],
        baseStr: 20, baseInt: 10,
        image: "images/creatures/asgard/einherjar_ghost.png",
        lore: {
            title: "발할라의 영령",
            story: "라그나로크를 대비해 발할라에서 훈련하는 고대 전사의 영혼. 낮에는 싸우고 밤에는 되살아나 술을 마신다.",
            origin: "발할라",
            relationships: [{ id: "god_odin", type: "master", desc: "주군" ,
        sprites: {
            idle: "images/einherjar_ghost.png",
            joy: "images/einherjar_ghost_joy.png",
            sad: "images/einherjar_ghost_sad.png",
            angry: "images/einherjar_ghost_angry.png",
            skill: "images/einherjar_ghost_skill.png",
            gallery: "images/einherjar_ghost_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Ghost, 에인헤랴르의 혼",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 에인헤랴르의 혼 special illustration, intimate atmosphere"
        },
        lore: {
            title: "발할라의 영령",
            story: "라그나로크를 대비해 발할라에서 훈련하는 고대 전사의 영혼. 낮에는 싸우고 밤에는 되살아나 술을 마신다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    }],
            synergy: { ally: ["god_odin", "valkyrie"], rival: [] }
        },
        lines: { normal: "싸움은 아직 끝나지 않았다!" }
    },
    {
        id: "heimdall_horn",
        name: "걀라르호른의 정령",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Sound", "Light"],
        baseStr: 10, baseInt: 20,
        image: "images/creatures/asgard/heimdall_horn_spirit.png",
        lore: {
            title: "경계의 소리",
            story: "헤임달이 지니고 다니는 뿔피리 걀라르호른에 깃든 정령. 라그나로크가 오면 가장 먼저 소리칠 준비를 하고 있다.",
            origin: "비프로스트",
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
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Sound, Light, 걀라르호른의 정령",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 걀라르호른의 정령 special illustration, intimate atmosphere"
        },
        lore: {
            title: "경계의 소리",
            story: "헤임달이 지니고 다니는 뿔피리 걀라르호른에 깃든 정령. 라그나로크가 오면 가장 먼저 소리칠 준비를 하고 있다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    }
        },
        lines: { normal: "적들이 오면 내가 제일 먼저 알릴 거야!" }
    },
    {
        id: "mimir_head",
        name: "미미르의 머리",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Water", "Wisdom"],
        baseStr: 5, baseInt: 50,
        image: "images/creatures/asgard/mimir_spirit.png",
        lore: {
            title: "지혜의 샘 수호자",
            story: "오딘에게 지혜를 준 미미르의 머리. 몸은 잃었지만 여전히 우주 최고의 지혜를 가지고 있다. 말이 매우 많다.",
            origin: "지혜의 샘",
            relationships: [{ id: "god_odin", type: "friend", desc: "말벗" ,
        sprites: {
            idle: "images/mimir_spirit.png",
            joy: "images/mimir_spirit_joy.png",
            sad: "images/mimir_spirit_sad.png",
            angry: "images/mimir_spirit_angry.png",
            skill: "images/mimir_spirit_skill.png",
            gallery: "images/mimir_spirit_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Water, Wisdom, 미미르의 머리",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 미미르의 머리 special illustration, intimate atmosphere"
        },
        lore: {
            title: "지혜의 샘 수호자",
            story: "오딘에게 지혜를 준 미미르의 머리. 몸은 잃었지만 여전히 우주 최고의 지혜를 가지고 있다. 말이 매우 많다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    }],
            synergy: { ally: ["god_odin"], rival: [] }
        },
        lines: { normal: "내 말을 좀 들어보게, 오딘." }
    },
    {
        id: "shieldmaiden",
        name: "강철의 방패처녀",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Metal"],
        baseStr: 25, baseInt: 10,
        image: "images/creatures/asgard/shieldmaiden_iron.png",
        lore: {
            title: "발키리 후보생",
            story: "발키리가 되기를 꿈꾸며 전장을 누비는 인간 여전사. 강철 같은 의지를 지녔다.",
            origin: "미드가르드",
            relationships: [{ id: "valkyrie", type: "idol", desc: "동경의 대상" ,
        sprites: {
            idle: "images/shieldmaiden_iron.png",
            joy: "images/shieldmaiden_iron_joy.png",
            sad: "images/shieldmaiden_iron_sad.png",
            angry: "images/shieldmaiden_iron_angry.png",
            skill: "images/shieldmaiden_iron_skill.png",
            gallery: "images/shieldmaiden_iron_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, 강철의 방패처녀",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 강철의 방패처녀 special illustration, intimate atmosphere"
        },
        lore: {
            title: "발키리 후보생",
            story: "발키리가 되기를 꿈꾸며 전장을 누비는 인간 여전사. 강철 같은 의지를 지녔다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    }],
            synergy: { ally: ["valkyrie"], rival: [] }
        },
        lines: { normal: "나의 방패는 뚫리지 않아!" }
    },
    {
        id: "ulfhednar",
        name: "울프헤드나르",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Beast", "Dark"],
        baseStr: 30, baseInt: 5,
        image: "images/creatures/asgard/ulfhednar_wolf.png",
        lore: {
            title: "늑대 가죽 전사",
            story: "늑대 가죽을 뒤집어쓰고 광전사처럼 싸우는 오딘의 정예 병사. 고통을 느끼지 않는다.",
            origin: "아스가르드",
            relationships: [{ id: "wolf_fenrir", type: "idol", desc: "숭배" ,
        sprites: {
            idle: "images/ulfhednar_wolf.png",
            joy: "images/ulfhednar_wolf_joy.png",
            sad: "images/ulfhednar_wolf_sad.png",
            angry: "images/ulfhednar_wolf_angry.png",
            skill: "images/ulfhednar_wolf_skill.png",
            gallery: "images/ulfhednar_wolf_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Beast, Dark, 울프헤드나르",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "cute pose, energetic, detailed, looking at viewer, 울프헤드나르 special illustration, intimate atmosphere"
        },
        lore: {
            title: "늑대 가죽 전사",
            story: "늑대 가죽을 뒤집어쓰고 광전사처럼 싸우는 오딘의 정예 병사. 고통을 느끼지 않는다.",
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
            gift: ["고맙다."],
            special: ["!!!"]
        }
    }],
            synergy: { ally: ["wolf_fenrir", "god_odin"], rival: [] }
        },
        lines: { normal: "크르르... 오딘을 위하여!" }
    },
    {
        id: "wolf_pup",
        name: "아스가르드 늑대 새끼",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Beast"],
        baseStr: 10, baseInt: 5,
        image: "images/creatures/asgard/wolf_pup_asgard.png",
        lore: {
            title: "귀여운 맹수",
            story: "아직은 작고 귀여운 늑대 새끼. 자라면 펜리르처럼 될지도 모른다.",
            origin: "철의 숲",
            relationships: [{ id: "wolf_fenrir", type: "family", desc: "먼 조상?" }],
            synergy: { ally: ["wolf_fenrir"], rival: [] }
        },
        lines: { normal: "앙! (무서운 척)" }
    },
    {
        id: "yggdrasil_guardian",
        name: "위그드라실 수호목",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Nature"],
        baseStr: 40, baseInt: 20,
        image: "images/creatures/asgard/yggdrasil_guardian.png",
        lore: {
            title: "세계수의 파수꾼",
            story: "위그드라실의 뿌리를 갉아먹는 니드호그를 감시하는 살아있는 나무.",
            origin: "위그드라실",
            relationships: [{ id: "ratatoskr_squirrel", type: "friend", desc: "나뭇가지에 사는 친구" }],
            synergy: { ally: ["ratatoskr_squirrel"], rival: [] }
        },
        lines: { normal: "세계수는 내가 지킨다." }
    },
    {
        id: "god_thor",
        name: "천둥의 신 토르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Electric", "Metal"],
        baseStr: 80, baseInt: 20,
        image: "images/god_thor.png",
        lore: {
            title: "아스가르드의 수호자",
            story: "오딘의 아들이자 가장 강력한 전사. 묠니르를 휘두르며 거인들을 물리친다. 단순하고 호쾌한 성격으로, 로키의 장난에 자주 당하지만 결국 힘으로 해결한다.",
            origin: "북유럽 신화 / 아스가르드",
            relationships: [
                { id: "god_loki", type: "rival", desc: "골치 아픈 의형제" },
                { id: "snake_world_jormungandr", type: "rival", desc: "숙적" }
            ],
            synergy: { ally: ["god_odin", "sif"], rival: ["snake_world_jormungandr"] }
        },
        lines: { normal: "천둥의 힘을 보여주마!" }
    },
    {
        id: "nordic_cat_freya",
        name: "프레이야의 고양이",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Beast", "Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/unknown/nordic_cat_freya.png",
        lore: {
            title: "여신의 애완묘",
            story: "프레이야의 전차를 끄는 거대한 고양이들. 덩치는 크지만 애교가 많다.",
            origin: "북유럽 신화",
            relationships: [{ id: "god_freya", type: "master", desc: "주인님" }],
            synergy: { ally: ["god_freya"], rival: [] }
        },
        lines: { normal: "야옹~ (가르릉거린다)" }
    },
    {
        id: "snow_spirit",
        name: "눈의 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Ice"],
        baseStr: 5, baseInt: 15,
        image: "images/creatures/unknown/creature_snow_spirit.png",
        lore: {
            title: "차가운 숨결",
            story: "니플헤임의 눈보라 속에서 태어난 정령. 작지만 차가운 기운을 내뿜는다.",
            origin: "니플헤임",
            relationships: [{ id: "bear_ice", type: "friend", desc: "함께 노는 친구" }],
            synergy: { ally: ["bear_ice"], rival: ["mage_flame"] }
        },
        lines: { normal: "차가워..." }
    },
    {
        id: "sif",
        name: "황금의 여신 시프",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth", "Light"],
        baseStr: 30, baseInt: 40,
        image: "images/sif.png",
        lore: {
            title: "대지의 결실",
            story: "토르의 아내이자 수확의 여신. 로키가 장난으로 자른 머리카락 대신 드워프가 만들어준 황금 머릿결을 가지고 있다.",
            origin: "북유럽 신화",
            relationships: [
                { id: "god_thor", type: "family", desc: "남편" },
                { id: "god_loki", type: "rival", desc: "내 머리카락을 훔친 자" }
            ],
            synergy: { ally: ["god_thor"], rival: ["god_loki"] }
        },
        lines: { normal: "가을의 풍요로움을 당신에게." }
    }
];
