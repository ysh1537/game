const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../js/data/creatures/AsgardData.js');
let content = fs.readFileSync(filePath, 'utf8');

// Find the start of goat_lightning
const targetString = 'id: "goat_lightning",';
const index = content.indexOf(targetString);

if (index === -1) {
    console.error('Could not find goat_lightning in file.');
    process.exit(1);
}

// Find the opening brace '{' for goat_lightning
// We search backwards from 'index' to find '{'
const sub = content.substring(0, index);
const lastBraceIndex = sub.lastIndexOf('{');

if (lastBraceIndex === -1) {
    console.error('Could not find opening brace for goat_lightning.');
    process.exit(1);
}

// Keep everything before the opening brace of goat_lightning
// This preserves everything up to the whitespace before '{'
const prefix = content.substring(0, lastBraceIndex);

// Define the clean tail starting with goat_lightning's opening brace
const tail = `{
        id: "goat_lightning",
        name: "천둥 염소",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_goat_lightning.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_goat_lightning.png",
            "joy": "images/creatures/asgard/creature_goat_lightning.png",
            "sad": "images/creatures/asgard/creature_goat_lightning.png",
            "angry": "images/creatures/asgard/creature_goat_lightning.png",
            "skill": "images/creatures/asgard/creature_goat_lightning.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 천둥 염소",
            "idle": "standing"
        },
        lore: {
            title: "탕그리스니르의 후손",
            story: "토르의 전차를 끄는 염소들의 후손입니다. 발굽을 구르면 천둥소리가 나고, 죽어도 뼈만 남으면 다시 부활할 수 있다고 전해집니다.",
            personality: "Stubborn"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "메헤헤헤!",
                "풀 뜯어 먹을 거야.",
                "고집 부릴 거야!"
            ],
            interaction: [
                "밀지 마! 메헤헤!",
                "뿔로 들이받는다?",
                "머리 박치기!"
            ],
            gift: [
                "종이? 냠냠.",
                "맛있는 건 다 내 거야.",
                "메헤헤, 고마워."
            ],
            special: [
                "천둥 발굽!",
                "우르릉 쾅쾅!",
                "메헤헤헤헤!!!"
            ]
        },
        lines: {
            normal: "토르 님은 너무 무거워.",
            touch_head: "뿔 잡으면 혼나!",
            touch_chest: "털이 북슬북슬하지?",
            touch_legs: "발굽 소리 좀 들어봐.",
            touch_special: "난 죽어도 뼈만 있으면 다시 살아나!"
        }
    },
    {
        id: "ice_spirit_small",
        name: "작은 얼음 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_ice_spirit_small.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_ice_spirit_small.png",
            "joy": "images/creatures/asgard/creature_ice_spirit_small.png",
            "sad": "images/creatures/asgard/creature_ice_spirit_small.png",
            "angry": "images/creatures/asgard/creature_ice_spirit_small.png",
            "skill": "images/creatures/asgard/creature_ice_spirit_small.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 작은 얼음 정령",
            "idle": "standing"
        },
        lore: {
            title: "작은 서리 요정",
            story: "눈송이 속에 숨어 사는 작은 요정입니다. 장난치는 것을 좋아하여 사람들의 코끝을 얼리거나 길을 미끄럽게 만듭니다.",
            personality: "Playful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "아야! 차가워!",
                "눈싸움 할래?",
                "꽁꽁 얼어라~"
            ],
            interaction: [
                "에취! 감기 걸릴걸?",
                "미끌미끌~ 조심해!",
                "손 시려!"
            ],
            gift: [
                "아이스크림 좋아!",
                "차가운 거면 다 좋아.",
                "녹지 않게 해줘."
            ],
            special: [
                "눈보라 슝슝!",
                "다 얼려버릴 거야!",
                "화이트 크리스마스!"
            ]
        },
        lines: {
            normal: "난 녹으면 사라져버려.",
            touch_head: "머리에 눈이 쌓였네?",
            touch_chest: "심장은 얼음 조각이야.",
            touch_legs: "발자국도 안 남는다구.",
            touch_special: "나랑 같이 눈사람 만들자!"
        }
    },
    {
        id: "fenrir_kin",
        name: "펜리르의 권속",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Ice", "Beast"],
        baseStr: 35, baseInt: 15,
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
            "base": "anime style, cell shaded, 2d game art, full body, fenrir kin, huge wolf, snowy north, glowing eyes, fierce",
            "idle": "standing pose, confident, growling",
            "joy": "happy bark, tail wagging",
            "sad": "whimpering, ears down",
            "angry": "roaring, teeth bared",
            "skill": "pouncing attack, ice fangs",
            "gallery_lv1": "resting in snow, loyal look"
        },
        lore: {
            "title": "종말의 전조",
            "story": "펜리르의 피를 이어받은 거대한 늑대. 라그나로크 때 신들을 사냥하기 위해 무리를 짓고 있다. 그 울음소리는 가장 용감한 전사조차 공포에 떨게 한다.",
            "personality": "Savage & Loyal"
        },
        relationships: { likes: ["wolf_fenrir"], dislikes: ["valkyrie"], rival: null },
        touchLines: {
            idle: [
                "크르릉... 먹이 냄새가 난다.",
                "대장 펜리르 님을 위하여!",
                "겨울이 오면 우리는 강해진다."
            ],
            interaction: [
                "내 털은 강철보다 단단해.",
                "함부로 손대면 물어뜯어주마.",
                "네게서 약자의 냄새가 나는군."
            ],
            gift: [
                "고기인가? 합격이다.",
                "피 냄새... 좋아.",
                "이걸 바치고 목숨을 구걸하는 거냐?"
            ],
            special: [
                "물어뜯기!",
                "얼음 송곳니!",
                "무리의 습격!"
            ]
        },
        lines: {
            normal: "우리는 끝내 신들을 삼킬 것이다.",
            touch_head: "머리를 숙이는 건 대장님 앞에서뿐이다.",
            touch_chest: "심장은 사냥의 열기로 뜨겁다.",
            touch_legs: "설원을 달리는 건 내게 놀이지.",
            touch_special: "나와 함께 신들의 황혼을 보겠나?"
        }
    },
    {
        id: "ice_nymph",
        name: "얼음 님프",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Ice"],
        baseStr: 20, baseInt: 35,
        image: "images/creatures/wild/creature_snow_spirit.png",
        sprites: {
            "idle": "images/creatures/wild/creature_snow_spirit.png",
            "joy": "images/creatures/wild/creature_snow_spirit.png",
            "sad": "images/creatures/wild/creature_snow_spirit.png",
            "angry": "images/creatures/wild/creature_snow_spirit.png",
            "skill": "images/creatures/wild/creature_snow_spirit.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, ice nymph, asgard spirit, cold beauty, frost magic",
            "idle": "floating, graceful"
        },
        lore: {
            "title": "니플헤임의 무희",
            "story": "니플헤임의 차가운 안개 속에서 태어난 정령. 그녀가 춤추면 대지가 얼어붙고 아름다운 서리꽃이 피어난다. 아름답지만 차가운 심장을 지녔다.",
            "personality": "Cold & Elegant"
        },
        relationships: { likes: ["frost_giant_warrior"], dislikes: ["fire_giant"], rival: null },
        touchLines: {
            idle: [
                "차가운 아름다움을 보셨나요?",
                "입김조차 얼어버릴 거예요.",
                "눈의 여왕을 섬깁니다."
            ],
            interaction: [
                "앗, 차가워요? 호호호.",
                "녹이지 마세요. 아파요.",
                "당신의 체온, 뺏어가도 되나요?"
            ],
            gift: [
                "투명한 얼음 보석이네요.",
                "차가운 것이라 마음에 들어요.",
                "영원히 보존해 드릴게요."
            ],
            special: [
                "프로스트 노바!",
                "얼음의 춤!",
                "절대영도!"
            ]
        },
        lines: {
            normal: "얼어붙은 세상은 고요하고 아름답죠.",
            touch_head: "머리카락도 서리로 되어 있어요.",
            touch_chest: "심장 소리가 들리지 않나요? 멈춰 있으니까요.",
            touch_legs: "눈 위를 걷는 건 춤추는 것과 같아요.",
            touch_special: "저와 영원한 겨울을 함께해요."
        }
    },
    {
        id: "mud_troll",
        name: "진흙 트롤",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"],
        baseStr: 40, baseInt: 10,
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
            "base": "anime style, mud troll, grotesque monster, swamp creature, strong",
            "idle": "standing, dumb look"
        },
        lore: {
            "title": "습지의 괴물",
            "story": "습지에서 태어난 트롤. 햇빛을 받으면 돌처럼 굳어버리기에 주로 밤이나 흐린 날에 활동한다. 지능은 낮지만 힘이 장사라 방심하면 위험하다.",
            "personality": "Dumb & Strong"
        },
        relationships: { likes: [], dislikes: ["thor"], rival: null },
        touchLines: {
            idle: [
                "으어어... 배고파...",
                "햇빛 시러... 돌이 돼...",
                "진흙탕... 조아..."
            ],
            interaction: [
                "때리지 마... 아파...",
                "나 냄새 안 나... 아마도...",
                "친구?",
            ],
            gift: [
                "돌멩이? 머글 거?",
                "고기 조아! 냠냠.",
                "이거 주면 안 때릴 거지?"
            ],
            special: [
                "진흙 던지기!",
                "으깨버린다!",
                "트롤의 힘!"
            ]
        },
        lines: {
            normal: "나는 강하다! 그리고... 배고프다!",
            touch_head: "머리 나쁘다고 놀리지 마.",
            touch_chest: "단단해... 안 아파.",
            touch_legs: "발이 푹푹 빠져.",
            touch_special: "너 맛있는 냄새 나."
        }
    },
    {
        id: "jotunn_hill",
        name: "언덕 요툰",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"],
        baseStr: 45, baseInt: 15,
        image: "images/creatures/wild/creature_creature_giant_hill.png",
        sprites: {
            "idle": "images/creatures/wild/creature_creature_giant_hill.png",
            "joy": "images/creatures/wild/creature_creature_giant_hill.png",
            "sad": "images/creatures/wild/creature_creature_giant_hill.png",
            "angry": "images/creatures/wild/creature_creature_giant_hill.png",
            "skill": "images/creatures/wild/creature_creature_giant_hill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, hill giant, jotunn, rocky skin, massive, sleeping mountain",
            "idle": "sleeping, camouflaged"
        },
        lore: {
            "title": "잠자는 대지",
            "story": "산처럼 거대한 몸집을 가진 요툰. 평소에는 언덕으로 위장하고 자고 있다가 적이 나타나면 일어나 대지를 뒤흔든다. 토르의 망치를 가장 두려워한다.",
            "personality": "Lazy & Colossal"
        },
        relationships: { likes: [], dislikes: ["thor"], rival: null },
        touchLines: {
            idle: [
                "누가 내 잠을 깨우느냐...",
                "토르가 온 건가? 아니군...",
                "드르렁... 쿠오오..."
            ],
            interaction: [
                "간지럽다. 파리인가?",
                "움직이기 귀찮군...",
                "내 등은 산보다 높지."
            ],
            gift: [
                "아주 작은 공물이군.",
                "더 큰 건 없나? 소 한 마리라든가.",
                "다시 자야겠어..."
            ],
            special: [
                "지진이다!",
                "깔아뭉개기!",
                "요툰의 분노!"
            ]
        },
        lines: {
            normal: "세상은 내 발아래 있다.",
            touch_head: "구름이 모자처럼 걸려있군.",
            touch_chest: "내 숨결은 태풍이 된다.",
            touch_legs: "다리 하나가 기둥과 같지.",
            touch_special: "내가 일어서면 세상이 어두워질 것이다."
        }
    },
    {
        id: "deep_cave_bat",
        name: "심연의 박쥐",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Dark"],
        baseStr: 15, baseInt: 15,
        image: "images/creatures/wild/creature_creature_bat_small.png",
        sprites: {
            "idle": "images/creatures/wild/creature_creature_bat_small.png",
            "joy": "images/creatures/wild/creature_creature_bat_small.png",
            "sad": "images/creatures/wild/creature_creature_bat_small.png",
            "angry": "images/creatures/wild/creature_creature_bat_small.png",
            "skill": "images/creatures/wild/creature_creature_bat_small.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, dark bat, hell cave, glowing red eyes, ominous",
            "idle": "hanging upside down"
        },
        lore: {
            "title": "헬하임의 감시자",
            "story": "헬하임의 깊은 동굴에 서식하는 박쥐. 죽은 자들의 영혼을 감시하는 역할을 한다. 그들의 눈은 어둠 속에서도 영혼의 빛을 찾아낸다.",
            "personality": "Ominous & Observant"
        },
        relationships: { likes: [], dislikes: ["light"], rival: null },
        touchLines: {
            idle: [
                "키아악! 빛이 싫어!",
                "죽은 자의 냄새가 나...",
                "헬 여왕님이 보고 계셔."
            ],
            interaction: [
                "내 날개를 건드리지 마.",
                "피 냄새가 나는데?",
                "어둠이 편안해."
            ],
            gift: [
                "썩은 과일? 별미지.",
                "벌레? 맛있겠군.",
                "어둠을 바치는가?"
            ],
            special: [
                "초음파 비명!",
                "어둠의 날개!",
                "흡혈!"
            ]
        },
        lines: {
            normal: "죽음은 언제나 곁에 있어.",
            touch_head: "거꾸로 보면 세상이 뒤집혀 보이지.",
            touch_chest: "심장은 차갑게 식어있다.",
            touch_legs: "천장에 매달려 자는 게 최고야.",
            touch_special: "헬하임으로 가는 길, 안내해 줄까?"
        }
    },
    {
        id: "bilskirnir_rat",
        name: "빌스킬니르 쥐",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"],
        baseStr: 12, baseInt: 25,
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
            "base": "anime style, fat rat, stealing food, asgard kitchen, sneaky, cute",
            "idle": "chewing cheese"
        },
        lore: {
            "title": "신들의 도둑",
            "story": "토르의 궁전 빌스킬니르의 부엌을 털다 쫓겨난 쥐. 신들의 음식을 훔쳐 먹어 덩치가 일반 쥐보다 훨씬 크고 재빠르다. 토르의 망치조차 피할 수 있다고 자랑한다.",
            "personality": "Greedy & Speedy"
        },
        relationships: { likes: ["cheese"], dislikes: ["cat"], rival: null },
        touchLines: {
            idle: [
                "찍찍! 토르 님 오신다!",
                "황금 사과 맛은 최고였지.",
                "숨을 곳이 필요해!"
            ],
            interaction: [
                "내 치즈 뺏지 마!",
                "꼬리 잡히면 끝장이야.",
                "배가 빵빵해서 뛰기 힘들어."
            ],
            gift: [
                "이건 신들의 음식보다 맛있군!",
                "반짝이는 건 다 내 거야.",
                "뇌물인가? 좋아, 봐주지."
            ],
            special: [
                "빛의 속도로 도주!",
                "치즈 훔치기!",
                "앞니 공격!"
            ]
        },
        lines: {
            normal: "배부른 쥐가 행복한 쥐지.",
            touch_head: "머리 좋다고 소문났어.",
            touch_chest: "심장이 쫄깃해지는 모험이 좋아.",
            touch_legs: "누구보다 빠르게 남들과는 다르게.",
            touch_special: "신들의 창고 열쇠, 어디 있는지 알지."
        }
    },
    {
        id: "rune_stone_living",
        name: "살아있는 룬석",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"],
        baseStr: 15, baseInt: 30,
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
            "base": "anime style, rune stone, glowing symbols, magic rock, floating",
            "idle": "floating, spinning"
        },
        lore: {
            "title": "오딘의 실패작",
            "story": "오딘이 룬 문자를 새기다 실패하여 버려진 돌조각에 마력이 깃들었다. 비록 완성되지 못했지만 강력한 마력을 품고 있으며, 가끔씩 미래를 예언하는 중얼거림을 들을 수 있다.",
            "personality": "Mystic & Hard"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "미래가... 보인다...",
                "룬의 속삭임이 들리나?",
                "오딘 님은 왜 날 버렸을까."
            ],
            interaction: [
                "글자를 읽으려 하지 마.",
                "만지면 운명이 바뀔 수도 있어.",
                "딱딱하다고 무시하지 마라."
            ],
            gift: [
                "마력석? 에너지가 넘치는군.",
                "조각 도구? 더 새겨주려고?",
                "지혜의 샘물인가."
            ],
            special: [
                "룬의 빛!",
                "운명 예지!",
                "돌의 저주!"
            ]
        },
        lines: {
            normal: "지혜는 돌에도 깃드는 법.",
            touch_head: "윗면엔 '우르즈'가 새겨져 있지.",
            touch_chest: "핵심 문자는 비밀이야.",
            touch_legs: "굴러서 어디든 갈 수 있어.",
            touch_special: "너의 운명을 점쳐주지. 복채는 필요 없어."
        }
    },
    {
        id: "ancient_fossil",
        name: "고대의 화석",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"],
        baseStr: 30, baseInt: 20,
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
            "base": "anime style, fossil monster, ancient bone, skeleton dinosaur, magic animation",
            "idle": "roaring silently"
        },
        lore: {
            "title": "이미르의 파편",
            "story": "태초의 거인 이미르의 뼈조각이 오랜 세월을 거쳐 화석이 되었다. 고대 거인의 원념이 남아있어 스스로 움직이며, 자신의 잃어버린 육체를 찾아 헤맨다.",
            "personality": "Ancient & Vengeful"
        },
        relationships: { likes: [], dislikes: ["odin"], rival: null },
        touchLines: {
            idle: [
                "내 육체는 어디에...",
                "오딘... 용서하지 않겠다...",
                "세월이 야속하구나."
            ],
            interaction: [
                "뼈만 남았다고 무시 마라.",
                "조심해, 부서지면 책임져야 해.",
                "옛날 이야기 해줄까?"
            ],
            gift: [
                "우유? 칼슘 보충인가?",
                "고대 유물? 반갑군.",
                "나를 박물관에 보내지 마."
            ],
            special: [
                "본 스피어!",
                "고대의 포효!",
                "화석화!"
            ]
        },
        lines: {
            normal: "역사는 승자의 기록일 뿐.",
            touch_head: "두개골이 단단해 보이지?",
            touch_chest: "심장은 없어도 분노는 남았다.",
            touch_legs: "이 다리로 태초의 대지를 밟았지.",
            touch_special: "나의 부활을 도와라. 세상을 주겠다."
        }
    },
    {
        id: "mist_beast",
        name: "안개 마수",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Ice", "Dark"],
        baseStr: 30, baseInt: 30,
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
            "base": "anime style, mist monster, fog creature, mysterious, glowing eyes in fog",
            "idle": "fading in and out"
        },
        lore: {
            "title": "니플헤임의 망령",
            "story": "니플헤임의 짙은 안개 속에서 태어난 괴수. 형체가 불분명하여 물리적인 공격이 잘 통하지 않는다. 안개 속에 갇힌 자들의 공포를 먹고 자란다.",
            "personality": "Mysterious & Ghostly"
        },
        relationships: { likes: [], dislikes: ["sun"], rival: null },
        touchLines: {
            idle: [
                "안개 속으로 들어와...",
                "나는 어디에도 없고, 어디에나 있지.",
                "길을 잃었나?"
            ],
            interaction: [
                "잡을 수 없을걸?",
                "허공을 가르는 기분이 어때?",
                "내 몸은 차가운 수증기야."
            ],
            gift: [
                "향로? 연기는 좋아.",
                "차가운 물? 나쁘지 않아.",
                "너의 공포심... 맛있군."
            ],
            special: [
                "안개 숨기!",
                "공포의 환영!",
                "질식!"
            ]
        },
        lines: {
            normal: "진실은 안개 너머에.",
            touch_head: "손이 통과해버렸네?",
            touch_chest: "마음의 눈으로 나를 봐.",
            touch_legs: "발소리를 죽여라.",
            touch_special: "영원히 안개 속을 헤매게 해주지."
        }
    },
    {
        id: "swamp_light",
        name: "늪지의 빛",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Fire"],
        baseStr: 10, baseInt: 40,
        image: "images/creatures/wild/creature_willOWisp_green.png",
        sprites: {
            "idle": "images/creatures/wild/creature_willOWisp_green.png",
            "joy": "images/creatures/wild/creature_willOWisp_green.png",
            "sad": "images/creatures/wild/creature_willOWisp_green.png",
            "angry": "images/creatures/wild/creature_willOWisp_green.png",
            "skill": "images/creatures/wild/creature_willOWisp_green.png",
            "victory": "images/creatures/wild/creature_willOWisp_green.png",
            "defeat": "images/creatures/wild/creature_willOWisp_green.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_willOWisp_green_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, will o wisp, green fire, ghost spirit, swamp background",
            "idle": "flickering"
        },
        lore: {
            "title": "죽음의 유혹",
            "story": "망자들이 길을 잃도록 유도하는 늪지의 도깨비불. 아름다운 빛에 홀려 따라가면 결국 헬의 식탁에 오르게 된다. 장난기가 심하지만 악의는... 있을지도?",
            "personality": "Mischievous & Deadly"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "이쪽이야... 여기야...",
                "따뜻하지? 이리 와.",
                "길을 잃었나?"
            ],
            interaction: [
                "앗 뜨거! 조심해.",
                "불장난하면 오줌 싼다?",
                "내 빛을 꺼트리지 마."
            ],
            gift: [
                "기름? 활활 타오른다!",
                "양초? 친구가 생겼네.",
                "너의 영혼... 반짝여."
            ],
            special: [
                "홀리기!",
                "도깨비불 춤!",
                "영혼 연소!"
            ]
        },
        lines: {
            normal: "어둠 속에서만 빛이 나는 법.",
            touch_head: "머리 위에서 둥둥.",
            touch_chest: "뜨거운 열정이 느껴져?",
            touch_legs: "다리는 없어. 날아다니니까.",
            touch_special: "나랑 같이 지옥 끝까지 가볼래?"
        }
    }
];

const newContent = prefix + tail;
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Fixed AsgardData.js');
