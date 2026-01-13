var OLYMPUS_CREATURES = [
    {
        id: "centaur_scout",
        name: "켄타우로스 정찰병",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 켄타우로스 정찰병",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 켄타우로스 정찰병, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "숲의 수호자",
            "story": "상반신은 인간, 하반신은 말인 켄타우로스 족의 정찰병. 뛰어난 기동력과 궁술로 올림포스의 숲을 침입자로부터 지킨다. 거친 성격이지만 자연을 사랑하는 마음은 진심이다.",
            "personality": "Wild & Guardian"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "내 화살은 빗나가지 않아.",
                "숲이 속삭이는 소리가 들리나?",
                "침입자는 용서하지 않는다."
            ],
            interaction: [
                "내 말굽에 차이고 싶나?",
                "활시위를 당길 땐 조용히 해.",
                "등에 태워달라고? 건방지군."
            ],
            gift: [
                "좋은 화살촉이군.",
                "숲의 과일인가?",
                "나쁘지 않아."
            ],
            special: [
                "전속력으로 돌격!",
                "숲의 분노를 받아라!",
                "조준, 발사!"
            ]
        },
        lines: {
            normal: "올림포스의 숲은 내가 지킨다.",
            touch_head: "머리 만지지 마. 어린애 취급인가?",
            touch_chest: "인간의 심장과 말의 심장, 두 개가 뛰지.",
            touch_legs: "내 다리는 바람보다 빠르다.",
            touch_special: "함께 달리겠나? 떨어져도 책임 안 진다."
        }
    },
    {
        id: "zeus",
        name: "천둥의 신 제우스",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/olympus/creature_zeus.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_zeus.png",
            "joy": "images/creatures/olympus/creature_zeus_joy.png",
            "sad": "images/creatures/olympus/creature_zeus_sad.png",
            "angry": "images/creatures/olympus/creature_zeus_angry.png",
            "skill": "images/creatures/olympus/creature_zeus_skill.png",
            "victory": "images/creatures/olympus/creature_zeus_victory.png",
            "defeat": "images/creatures/olympus/creature_zeus_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_zeus_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_zeus_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_zeus_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 천둥의 신 제우스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 천둥의 신 제우스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 천둥의 신 제우스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 천둥의 신 제우스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "올림포스의 최고신",
            "story": "하늘과 천둥을 다스리는 올림포스의 왕. 티탄과의 전쟁에서 승리하여 신들의 지배자가 되었다. 강력한 힘과 권위를 지녔으나, 인간 여성들에 대한 관심으로도 유명하다. 번개를 무기로 사용하며, 정의와 질서의 수호자이자 파괴자이다.",
            "origin": "그리스 신화 / 올림포스",
            "personality": "Majestic & Charismatic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "올림포스의 영광이 여기에 있다.",
                "천둥과 번개가 내 의지대로 움직인다.",
                "신들의 왕 앞에 있음을 잊지 마라."
            ],
            interaction: [
                "호오, 대담하군. 신을 직접 만지다니.",
                "이 힘... 느껴지는가? 천둥의 울림이.",
                "흥미롭군. 인간치고는 당당하다."
            ],
            gift: [
                "선물인가? 괜찮은데. 나쁘지 않아.",
                "하하! 신을 기쁘게 하려는 모양이지?",
                "이 정도면 올림포스에 초대해줄 만하군."
            ],
            special: [
                "천둥이여, 내 적을 멸하라!",
                "올림포스의 분노를 보여주마!",
                "신왕의 권능을 받아라!"
            ]
        },
        lines: {
            normal: "올림포스의 권위를 보여주마.",
            touch_head: "왕관을 만지는가? 허허, 대담하군.",
            touch_chest: "이 근육... 신의 힘이 느껴지는가?",
            touch_legs: "감히... 하하, 재미있어!",
            touch_special: "너만은 특별히 올림포스에 있어도 좋다."
        }
    },
    {
        id: "titan_kronos_shade",
        name: "크로노스의 그림자",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 크로노스의 그림자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 크로노스의 그림자, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 크로노스의 그림자, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 크로노스의 그림자, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "시간의 지배자",
            "story": "티탄족의 왕이자 시간을 다스리는 자. 자식들에게 권좌를 빼앗길 것이라는 예언을 두려워하여 자식들을 삼켜버렸으나, 제우스에 의해 타르타로스에 봉인되었다. 이곳에서는 그의 그림자만이 현현하여, 복수의 기회를 노리고 있다. 시간을 멈추거나 되돌리는 능력을 지녔으나, 온전한 힘은 아니다.",
            "origin": "그리스 신화 / 타르타로스",
            "personality": "Vengeful & Paranoid"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "시간은 모든 것을 삼킨다...",
                "복수의 때가 다가온다.",
                "타르타로스는 영원한 감옥이 아니야."
            ],
            interaction: [
                "티탄의 왕을 만지다니... 대가를 치르게 될 것이다.",
                "이 어리석은... 아니, 용기는 인정하지.",
                "시간이 지나면 모든 것은 사라져."
            ],
            gift: [
                "선물? 흥... 오랜만에 받아보는군.",
                "이것으로 내 마음을 얻으려는 건가?",
                "...나쁘지 않아. 오래간만의 온기로군."
            ],
            special: [
                "시간이여, 멈춰라!",
                "티탄의 분노를 보여주겠다!",
                "모든 것을 과거로 되돌리리라!"
            ]
        },
        lines: {
            normal: "제우스... 반드시 복수하리라.",
            touch_head: "왕관은 이미 빼앗겼어... 하지만 언젠가.",
            touch_chest: "이 가슴의 분노, 느껴지는가?",
            touch_legs: "타르타로스의 사슬도 언젠간 끊어질 것이다.",
            touch_special: "너만은... 내 편이 되어주겠는가?"
        }
    },
    {
        id: "poseidon",
        name: "심해의 군주 포세이돈",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/olympus/creature_poseidon.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_poseidon.png",
            "joy": "images/creatures/olympus/creature_poseidon_joy.png",
            "sad": "images/creatures/olympus/creature_poseidon_sad.png",
            "angry": "images/creatures/olympus/creature_poseidon_angry.png",
            "skill": "images/creatures/olympus/creature_poseidon_skill.png",
            "victory": "images/creatures/olympus/creature_poseidon.png",
            "defeat": "images/creatures/olympus/creature_poseidon.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_poseidon_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_poseidon_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_poseidon_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 심해의 군주 포세이돈",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 심해의 군주 포세이돈, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 심해의 군주 포세이돈, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 심해의 군주 포세이돈, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "바다의 제왕",
            "story": "바다와 지진을 다스리는 올림포스의 주신. 삼지창 트라이던트로 대지를 뒤흔들고 해일을 일으킨다. 그의 분노는 폭풍우와 같으며, 평소에는 바다의 신전에서 머문다. 제우스의 형제이자 강력한 경쟁자이다.",
            "origin": "그리스 신화 / 바다",
            "personality": "Wild & Powerful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "바다가 나의 깸을 기다린다.",
                "파도 소리가 들리는가?",
                "나의 분노는 해일과 같다."
            ],
            interaction: [
                "감히 바다의 왕을 건드려?",
                "삼지창의 맛을 보고 싶은가!",
                "물러가라, 하찮은 것."
            ],
            gift: [
                "바다의 보물인가? 흥미롭군.",
                "제우스에게 바치는 것보단 낫군.",
                "마음에 든다. 축복을 내리지."
            ],
            special: [
                "바다여, 삼켜버려라!",
                "대지를 뒤흔드는 힘!",
                "폭풍우를 불러오리라!"
            ]
        },
        lines: {
            normal: "진정한 왕은 바다에 있다.",
            touch_head: "내 머리카락은 파도와 같지.",
            touch_chest: "근육은 바위보다 단단하다.",
            touch_legs: "지진을 일으키는 발걸음이다.",
            touch_special: "나와 함께 심해의 궁전으로 가겠나?"
        }
    },
    {
        id: "hades",
        name: "지옥의 지배자 하데스",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/olympus/creature_hades.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_hades.png",
            "joy": "images/creatures/olympus/creature_hades_joy.png",
            "sad": "images/creatures/olympus/creature_hades_sad.png",
            "angry": "images/creatures/olympus/creature_hades_angry.png",
            "skill": "images/creatures/olympus/creature_hades_skill.png",
            "victory": "images/creatures/olympus/creature_hades.png",
            "defeat": "images/creatures/olympus/creature_hades.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_hades.png",
                "lv2": "images/creatures/olympus/creature_hades.png",
                "lv3": "images/creatures/olympus/creature_hades.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 지옥의 지배자 하데스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 지옥의 지배자 하데스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 지옥의 지배자 하데스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 지옥의 지배자 하데스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "명계의 왕",
            "story": "지하세계와 죽은 자들을 다스리는 신. 냉철하고 엄격한 성격으로, 죽음의 법칙을 공정하게 집행한다. 그의 투구 퀴네에는 모습을 감추게 해주는 능력이 타. 페르세포네를 납치하여 왕비로 삼았다.",
            "origin": "그리스 신화 / 명계",
            "personality": "Cold & Just"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "죽음은 누구에게나 평등하다.",
                "여기는 산 자가 올 곳이 아니다.",
                "케르베로스가 짖는군."
            ],
            interaction: [
                "차가움이 느껴지나?",
                "내 투구를 탐내지 마라.",
                "어둠이 두렵지 않은가?"
            ],
            gift: [
                "명계의 꽃인가?",
                "페르세포네가 좋아하겠군.",
                "죽은 자들의 공물보다 낫군."
            ],
            special: [
                "영원한 어둠 속으로!",
                "명계의 심판을 받아라!",
                "죽음의 문이 열린다!"
            ]
        },
        lines: {
            normal: "모든 길은 결국 명계로 통한다.",
            touch_head: "생각을 읽으려 하지 마라.",
            touch_chest: "내 심장은 멈춰있다.",
            touch_legs: "돌아가라, 아직 때가 아니다.",
            touch_special: "네 영혼... 아주 흥미로운 빛을 내는군."
        }
    },
    {
        id: "hero_hercules",
        name: "불멸의 영웅 헤라클레스",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 불멸의 영웅 헤라클레스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 불멸의 영웅 헤라클레스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 불멸의 영웅 헤라클레스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 불멸의 영웅 헤라클레스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "신이 된 영웅",
            "story": "제우스의 아들이자 가장 위대한 영웅. 12과업을 완수하고 불멸의 신이 되었다. 사자 가죽을 두르고 몽둥이를 든 그의 모습은 힘의 상징이다. 엄청난 괴력으로 어떤 적이든 물리친다.",
            "origin": "그리스 신화 / 테베",
            "personality": "Mighty & Heroic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "힘이 넘치는군!",
                "어디 몸 좀 풀어볼까?",
                "12과업? 그거 별거 아니었어."
            ],
            interaction: [
                "하하! 간지럽군.",
                "팔씨름 한 판 할까?",
                "내 근육 멋지지?"
            ],
            gift: [
                "고기인가! 좋지!",
                "술인가? 하하하!",
                "영웅에 어울리는 선물이군."
            ],
            special: [
                "최강의 일격!",
                "산산조각 내주마!",
                "영웅의 이름으로!"
            ]
        },
        lines: {
            normal: "어떤 괴물이라도 덤벼라!",
            touch_head: "사자 가죽 멋있지?",
            touch_chest: "강철 같은 가슴 근육이야.",
            touch_legs: "기둥처럼 튼튼하지.",
            touch_special: "너도 훈련하면 나처럼 강해질 수 있어. 아마도."
        }
    },
    {
        id: "titan_atlas",
        name: "거신 아틀라스",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 거신 아틀라스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 거신 아틀라스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 거신 아틀라스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 거신 아틀라스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "천공의 지지자",
            "story": "티탄 신족의 일원으로, 제우스에게 패배한 후 하늘을 떠받치는 형벌을 받았다. 세상의 서쪽 끝에서 영원히 하늘의 무게를 견디고 있다. 강인한 인내심과 힘의 상징이다.",
            "origin": "그리스 신화 / 티탄",
            "personality": "Enduring & Strong"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "하늘이... 무겁군...",
                "영원한 형벌이여...",
                "그래도 나는 버틴다."
            ],
            interaction: [
                "건드리지 마! 중심 흔들려.",
                "잠시만... 어깨 좀 주물러줘.",
                "으라차차!"
            ],
            gift: [
                "휴식이 필요해.",
                "이건... 가볍군.",
                "고맙소."
            ],
            special: [
                "대지를 들어 올린다!",
                "하늘이 무너진다!",
                "티탄의 힘!"
            ]
        },
        lines: {
            normal: "이 무게는... 나의 죄의 무게다.",
            touch_head: "하늘을 받치느라 목이 뻐근해.",
            touch_chest: "바위처럼 단단한 근육이지.",
            touch_legs: "다리가 후들거려도 쓰러질 순 없어.",
            touch_special: "잠시만이라도 좋으니, 이 짐을 나누어 질 수 있다면..."
        }
    },
    {
        id: "minotaur_king",
        name: "미노타우로스 왕",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 미노타우로스 왕",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 미노타우로스 왕, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 미노타우로스 왕, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 미노타우로스 왕, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미궁의 주인",
            "story": "크레타의 미궁에 갇혀 있던 반인반우의 괴물. 포세이돈의 저주로 태어났으며, 인간의 고기를 탐한다. 거대한 도끼를 휘두르며 미궁에 들어온 자들을 사냥한다.",
            "origin": "그리스 신화 / 크레타",
            "personality": "Savage & Cruel"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "꾸워어어!!",
                "배고프다...",
                "미궁은 내 집이야."
            ],
            interaction: [
                "내 뿔 멋지지?",
                "코뚜레 건드리지 마.",
                "힘겨루기 할까?"
            ],
            gift: [
                "고기! 고기!",
                "맛있겠다...",
                "크아앙! (좋음)"
            ],
            special: [
                "다 부숴버리겠다!",
                "미궁에 갇혀라!",
                "도끼 맛 좀 봐라!"
            ]
        },
        lines: {
            normal: "여기에 들어온 이상 나갈 수는 없다.",
            touch_head: "쓰다듬지 마! 난 개가 아냐.",
            touch_chest: "털이 북실북실해.",
            touch_legs: "발굽 조심해라.",
            touch_special: "너, 냄새가 좋군... 먹어도 되나?"
        }
    },
    {
        id: "cerberus_guardian",
        name: "지옥파수꾼 케르베로스",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 지옥파수꾼 케르베로스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 지옥파수꾼 케르베로스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 지옥파수꾼 케르베로스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 지옥파수꾼 케르베로스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "지옥의 문지기",
            "story": "머리가 세 개 달린 거대한 개. 하데스의 애완견이자 명계의 문을 지키는 파수꾼이다. 산 자가 들어오는 것을 막고, 죽은 자가 나가는 것을 막는다. 뱀의 꼬리를 가졌다.",
            "origin": "그리스 신화 / 명계",
            "personality": "Vigilant & Loyal"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "크르르...",
                "멍! 멍! (세 번 짖는다)",
                "수상한 냄새가 나."
            ],
            interaction: [
                "어느 머리를 쓰다듬을 거야?",
                "꼬리 물지 마.",
                "침 묻어도 괜찮아?"
            ],
            gift: [
                "뼈다귀!",
                "고기!",
                "헥헥! (좋음)"
            ],
            special: [
                "지옥의 불길!",
                "물어뜯어라!",
                "절대 통과 못 해!"
            ]
        },
        lines: {
            normal: "죽은 자는 들어오고, 산 자는 나가라.",
            touch_head: "가운데 머리가 제일 똑똑해.",
            touch_chest: "털이 거칠지?",
            touch_legs: "발톱 날카로워.",
            touch_special: "주인님 외에는 아무도 따르지 않아... 하지만 너는 좀 다르군."
        }
    },
    {
        id: "hydra_lernaean",
        name: "레르나의 히드라",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 레르나의 히드라",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 레르나의 히드라, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 레르나의 히드라, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 레르나의 히드라, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "재생의 괴물",
            "story": "레르나의 늪에 사는 머리 아홉 달린 물뱀. 머리 하나를 자르면 그 자리에서 두 개가 다시 자라난다. 가운데 머리는 불사이며, 맹독을 지니고 있다.",
            "origin": "그리스 신화 / 레르나",
            "personality": "Persistent & Toxic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "쉬이익...",
                "머리가 아홉 개...",
                "배가 아홉 배로 고파."
            ],
            interaction: [
                "모든 머리를 다 볼 수 있나?",
                "독니 조심해.",
                "서로 싸우지 마!"
            ],
            gift: [
                "먹이!",
                "다 같이 나눠 먹어야지.",
                "쉿! (감사)"
            ],
            special: [
                "맹독 분사!",
                "무한 재생!",
                "물어뜯기 난무!"
            ]
        },
        lines: {
            normal: "우리를 죽일 순 없어. 우린 계속 늘어나니까.",
            touch_head: "어느 머리? 3번째?",
            touch_chest: "비늘이 축축해.",
            touch_legs: "다리 대신 꼬리.",
            touch_special: "헤라클레스 녀석만 아니었다면... 으득."
        }
    },
    {
        id: "lion_nemean",
        name: "네메아의 사자",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 네메아의 사자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 네메아의 사자, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 네메아의 사자, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 네메아의 사자, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "불침의 맹수",
            "story": "네메아 골짜기에 살던 거대한 사자. 그 가죽은 어떤 칼이나 화살로도 뚫을 수 없을 만큼 단단하다. 헤라클레스의 첫 번째 과업 상대로, 목이 졸려 죽었다.",
            "origin": "그리스 신화 / 네메아",
            "personality": "Invulnerable & Ferocious"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "크르르가...",
                "천하무적이다.",
                "아무도 날 상처 입힐 수 없어."
            ],
            interaction: [
                "간지럽군.",
                "칼 따윈 필요 없어.",
                "갈기를 빗겨줘?"
            ],
            gift: [
                "생고기!",
                "피가 뚝뚝 떨어지는군.",
                "만족스럽다."
            ],
            special: [
                "사자후!",
                "발톱 공격!",
                "강철 가죽!"
            ]
        },
        lines: {
            normal: "나는 맹수의 왕이다.",
            touch_head: "쓰다듬을 수 있는 건 너뿐이다.",
            touch_chest: "뚫리지 않는 가죽이지.",
            touch_legs: "발톱을 세우면 바위도 갈라진다.",
            touch_special: "헤라클레스... 다시 붙는다면 지지 않아."
        }
    },
    {
        id: "medusa_cursed",
        name: "저주받은 미모 메두사",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 저주받은 미모 메두사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 저주받은 미모 메두사, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 저주받은 미모 메두사, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 저주받은 미모 메두사, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "석화의 시선",
            "story": "눈을 마주친 자를 돌로 만들어버리는 저주받은 여인. 원래는 아름다운 사제였으나 아테나의 저주를 받아 머리카락이 뱀으로 변했다. 페르세우스에게 목이 베였다.",
            "origin": "그리스 신화 / 고르곤",
            "personality": "Cursed & Tragic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "내 눈을 보지 마...",
                "뱀들이 속삭여.",
                "외로워..."
            ],
            interaction: [
                "돌이 되고 싶니?",
                "머리카락이 물 수도 있어.",
                "가까이 오지 마."
            ],
            gift: [
                "거울은 싫어.",
                "예쁜 빗이네.",
                "고마워..."
            ],
            special: [
                "석화 광선!",
                "모두 굳어라!",
                "뱀의 저주!"
            ]
        },
        lines: {
            normal: "옛날엔 나도 아름다웠는데...",
            touch_head: "뱀들을 진정시켜 줘.",
            touch_chest: "심장은 아직 따뜻해.",
            touch_legs: "꼬리가 아니야.",
            touch_special: "너만은... 나를 괴물로 보지 않는구나."
        }
    },
    {
        id: "mage_flame",
        name: "화염 마법사",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 화염 마법사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 화염 마법사, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "신성한 불꽃",
            "story": "올림포스의 신성한 불꽃을 연구하는 마법사. 헤스티아의 사제 출신으로, 치유와 정화의 불꽃을 다룬다. 전쟁 시에는 파괴적인 화염으로 적을 태워버리기도 한다.",
            "personality": "Wise & Fiery"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "불꽃의 온기가 느껴지나요?",
                "헤스티아 님의 가호가 함께하길.",
                "마음의 불을 밝히세요."
            ],
            interaction: [
                "뜨거울 수 있습니다.",
                "장난치지 마세요.",
                "집중이 필요합니다."
            ],
            gift: [
                "잘 쓰겠습니다.",
                "따뜻한 마음이군요.",
                "불꽃이 기뻐합니다."
            ],
            special: [
                "성스러운 정화!",
                "화염의 심판!",
                "모든 부정을 태우리라!"
            ]
        },
        lines: {
            normal: "불꽃은 생명이자 파괴입니다.",
            touch_head: "머리카락이 타지 않게 조심하세요.",
            touch_chest: "심장의 고동이 불꽃과 공명합니다.",
            touch_legs: "제단 앞에 무릎 꿇지 마세요.",
            touch_special: "당신의 열정, 아주 마음에 듭니다."
        }
    },
    {
        id: "dionysus",
        name: "축제의 신 디오니소스",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/olympus/creature_dionysus.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_dionysus.png",
            "joy": "images/creatures/olympus/creature_dionysus_joy.png",
            "sad": "images/creatures/olympus/creature_dionysus_sad.png",
            "angry": "images/creatures/olympus/creature_dionysus_angry.png",
            "skill": "images/creatures/olympus/creature_dionysus_skill.png",
            "victory": "images/creatures/olympus/creature_dionysus_victory.png",
            "defeat": "images/creatures/olympus/creature_dionysus_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_dionysus_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 축제의 신 디오니소스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 축제의 신 디오니소스, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "광기의 신",
            "story": "포도주와 축제, 광기를 관장하는 신. 인간에게 포도 재배법을 가르쳐주었으나, 자신을 무시하는 자에게는 끔찍한 광기를 선사한다. 항상 표범이나 마이낙들을 거느리고 다닌다.",
            "origin": "그리스 신화 / 올림포스",
            "personality": "Hedonistic & Chaotic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "한잔 할까?",
                "인생은 축제야!",
                "취하지 않으면 재미없지."
            ],
            interaction: [
                "내 포도주 건드리지 마.",
                "같이 춤출래?",
                "머리가 어지러워?"
            ],
            gift: [
                "최고의 빈티지!",
                "아주 좋아!",
                "건배!"
            ],
            special: [
                "광란의 축제!",
                "디오니소스의 저주!",
                "모두 미쳐버려라!"
            ]
        },
        lines: {
            normal: "이성을 잃어야 진정한 즐거움을 알 수 있지.",
            touch_head: "포도 덩굴 장식 어때?",
            touch_chest: "심장이 쿵쿵 뛰지?",
            touch_legs: "비틀거리는 거 아니야. 춤추는 거야.",
            touch_special: "너, 꽤 괜찮은 술친구 감이군."
        }
    },
    {
        id: "harpy_queen",
        name: "폭풍우의 하피 퀸",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 폭풍우의 하피 퀸",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 폭풍우의 하피 퀸, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "폭풍의 약탈자",
            "story": "여자의 얼굴에 새의 몸을 가진 괴물 하피들의 여왕. 바람보다 빠르게 날아다니며, 날카로운 발톱으로 먹잇감을 낚아챈다. 제우스의 사냥개라고도 불린다.",
            "personality": "Greedy & Swift"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "반짝이는 거 내놔!",
                "키에에엑!",
                "배고파..."
            ],
            interaction: [
                "내 깃털 뽑지 마!",
                "날고 싶어?",
                "손톱 조심해."
            ],
            gift: [
                "더 줘!",
                "이걸로 만족할 것 같아?",
                "키킥! (좋음)"
            ],
            special: [
                "공중 급습!",
                "폭풍의 칼날!",
                "놓치지 않는다!"
            ]
        },
        lines: {
            normal: "내 것은 내 것, 네 것도 내 것.",
            touch_head: "머리 만지지 마, 헝클어져.",
            touch_chest: "심장이 깃털 아래서 뛰고 있어.",
            touch_legs: "내 발톱은 다이아몬드도 자르지.",
            touch_special: "너, 꽤 맛있는 냄새가 나는데?"
        }
    },
    {
        id: "siren_singer",
        name: "유혹의 사이렌",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 유혹의 사이렌",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 유혹의 사이렌, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "치명적인 유혹",
            "story": "바다의 암초에 앉아 아름다운 노래로 선원들을 유혹하는 요정. 그녀의 노래를 들으면 정신을 잃고 바다로 뛰어들게 된다. 새의 몸에 여자의 얼굴을 하고 있다.",
            "personality": "Seductive & Deadly"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "랄라라~",
                "제 노래 듣고 싶나요?",
                "이리 와요..."
            ],
            interaction: [
                "더 가까이...",
                "귀를 막지 마세요.",
                "제 목소리, 아름답죠?"
            ],
            gift: [
                "어머, 예뻐라.",
                "노래로 보답할게요.",
                "당신을 위해 부르겠어요."
            ],
            special: [
                "죽음의 자장가!",
                "영원히 잠드세요.",
                "바다의 품으로..."
            ]
        },
        lines: {
            normal: "제 노래를 들은 사람은 모두 저를 사랑하게 되죠.",
            touch_head: "머릿결이 곱죠?",
            touch_chest: "심장 박동조차 멜로디 같아요.",
            touch_legs: "날개 깃털은 보드랍답니다.",
            touch_special: "저와 함께 심연 속에서 영원히 노래해요."
        }
    },
    {
        id: "gorgon_sister_e",
        name: "고르곤 자매 에우리알레",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 고르곤 자매 에우리알레",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 고르곤 자매 에우리알레, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "멀리 나는 자",
            "story": "고르곤 세 자매 중 둘째. '멀리 나는 여자'라는 뜻의 이름을 가졌다. 강철 같은 비늘과 황금 날개를 지녔으며, 그 비명소리는 바위를 부술 정도로 강력하다.",
            "personality": "Fierce & Aerial"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "어디까지 날아볼까?",
                "동생아, 조심해.",
                "바람이 좋아."
            ],
            interaction: [
                "내 날개 멋지지?",
                "비늘 만지지 마.",
                "소리 지른다?"
            ],
            gift: [
                "반짝이는 건 좋아.",
                "황금인가?",
                "고마워."
            ],
            special: [
                "음파 공격!",
                "귀를 막아라!",
                "하늘을 찢는 비명!"
            ]
        },
        lines: {
            normal: "우리 자매들을 건드리면 용서하지 않아.",
            touch_head: "머리카락 조심해, 물 수도 있어.",
            touch_chest: "강철 비늘이라 뚫리지 않아.",
            touch_legs: "하늘을 나는 다리야.",
            touch_special: "너, 꽤 용기 있는 인간이네."
        }
    },
    {
        id: "gorgon_sister_s",
        name: "고르곤 자매 스테노",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 고르곤 자매 스테노",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 고르곤 자매 스테노, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "힘 있는 자",
            "story": "고르곤 세 자매 중 첫째. '힘 있는 여자'라는 뜻의 이름을 가졌으며, 자매들 중 가장 잔인하다. 불사의 몸을 지녔으며, 인간을 증오하여 무차별적으로 살육을 즐긴다.",
            "personality": "Cruel & Immortal"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "인간 냄새가 나...",
                "죽이고 싶어.",
                "지루해."
            ],
            interaction: [
                "손 치워.",
                "죽고 싶니?",
                "힘으로 눌러주마."
            ],
            gift: [
                "흥, 시시해.",
                "무기라면 더 좋았을걸.",
                "받아는 주지."
            ],
            special: [
                "피의 축제!",
                "다 찢어발겨주마!",
                "불사의 힘!"
            ]
        },
        lines: {
            normal: "메두사가 불쌍하다고? 흥, 나약한 것.",
            touch_head: "뱀들이 널 노리고 있어.",
            touch_chest: "심장이 없는 것처럼 차갑지.",
            touch_legs: "도망칠 생각 마라.",
            touch_special: "내 잔인함이 마음에 드니? 변태네."
        }
    },
    {
        id: "muse_lyra",
        name: "악보의 뮤즈",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 악보의 뮤즈",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 악보의 뮤즈, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "예술의 여신",
            "story": "음악과 시를 관장하는 무사(Muse). 그녀의 리라 연주는 신들조차 감동시켜 싸움을 멈추게 한다. 예술가들에게 영감을 불어넣어 주는 존재다.",
            "personality": "Artistic & Inspiring"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "영감이 떠오르나요?",
                "아름다운 선율...",
                "시 한 수 읊어볼까요?"
            ],
            interaction: [
                "리라 줄 끊어져요.",
                "조용히 감상하세요.",
                "같이 연주할래요?"
            ],
            gift: [
                "아름다워라!",
                "새로운 악상!",
                "감동이에요."
            ],
            special: [
                "치유의 선율!",
                "영혼의 울림!",
                "평화의 노래!"
            ]
        },
        lines: {
            normal: "예술은 영원히 남는 법이죠.",
            touch_head: "머리 장식 예쁘죠?",
            touch_chest: "마음의 소리가 들리나요?",
            touch_legs: "우아하게 걷는 법을 알죠.",
            touch_special: "당신을 위한 찬가를 만들어 드릴게요."
        }
    },
    {
        id: "phoenix_chick_o",
        name: "베이비 피닉스",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 베이비 피닉스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 베이비 피닉스, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "불멸의 불꽃",
            "story": "전설 속의 불사조 피닉스의 새끼. 알에서 깨어날 때부터 온몸이 불꽃으로 감싸여 있다. 자라나면 스스로 불타오르고 재 속에서 다시 태어나는 영생을 얻는다.",
            "personality": "Warm & Eternal"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "삐약!",
                "따뜻해...",
                "날고 싶어!"
            ],
            interaction: [
                "뜨거워!",
                "간지러워 삐약!",
                "깃털 만지지 마."
            ],
            gift: [
                "씨앗!",
                "맛있다 삐약!",
                "고마워!"
            ],
            special: [
                "작은 불꽃!",
                "타올라라!",
                "부활의 힘!"
            ]
        },
        lines: {
            normal: "언젠가 나도 크고 멋진 불사조가 될 거야.",
            touch_head: "쓰다듬으면 따뜻하지?",
            touch_chest: "아직 작지만 심장은 뜨거워.",
            touch_legs: "발톱 아직 안 날카로워.",
            touch_special: "너랑 있으면 마음이 편안해 삐약."
        }
    },
    {
        id: "hellhound_scout",
        name: "헬하운드 정찰개",
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 헬하운드 정찰개",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 헬하운드 정찰개, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "지옥의 추적자",
            "story": "케르베로스의 피를 이어받은 지옥의 사냥개. 도망친 망자들의 냄새를 맡고 끝까지 추적한다. 붉게 타오르는 눈과 날카로운 이빨을 가졌다.",
            "personality": "Loyal & Aggressive"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "킁킁...",
                "냄새가 나.",
                "놓치지 않아."
            ],
            interaction: [
                "쓰다듬지 마.",
                "으르렁...",
                "물어버린다?"
            ],
            gift: [
                "고기!",
                "피 냄새 좋아.",
                "멍! (만족)"
            ],
            special: [
                "추적 개시!",
                "지옥의 아가리!",
                "도망칠 수 없다!"
            ]
        },
        lines: {
            normal: "주인님의 명령이라면 지옥 끝까지라도 쫓아간다.",
            touch_head: "귀 괜찮아.",
            touch_chest: "심장이 불타고 있어.",
            touch_legs: "달리기라면 자신 있어.",
            touch_special: "네 영혼 냄새... 기억해두지."
        }
    },
    {
        id: "automaton_mini",
        name: "미니 오토마톤",
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 미니 오토마톤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 미니 오토마톤, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "강철 인형",
            "story": "대장장이 신 헤파이스토스가 만든 소형 기계 인형. 작지만 정교한 태엽 장치로 움직이며, 주인의 명령을 완벽하게 수행한다. 간단한 심부름부터 전투 보조까지 가능하다.",
            "personality": "Obedient & Mechanical"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "명령 대기 중.",
                "시스템 정상.",
                "끼익... 철컥."
            ],
            interaction: [
                "수리 모드?",
                "나사 조이지 마세요.",
                "기름칠 필요."
            ],
            gift: [
                "에너지 충전.",
                "효율 상승.",
                "긍정적 반응."
            ],
            special: [
                "출력 최대!",
                "레이저 발사!",
                "보안 시스템 가동!"
            ]
        },
        lines: {
            normal: "제작자: 헤파이스토스. 목적: 보좌.",
            touch_head: "안테나 주의.",
            touch_chest: "코어 온도 정상.",
            touch_legs: "관절 구동 확인.",
            touch_special: "마스터, 입력된 명령 외의 행동을 수행합니까?"
        }
    },
    {
        id: "talos_fragment",
        name: "탈로스의 파편",
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 탈로스의 파편",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 탈로스의 파편, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "고대의 잔해",
            "story": "크레타 섬을 지키던 청동 거인 탈로스의 부서진 조각. 여전히 강력한 마력이 남아 있어 스스로 움직이며 침입자를 공격한다. 청동 피부는 매우 단단하다.",
            "personality": "Broken & Durable"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "침입자... 제거...",
                "시스템... 손상...",
                "경계 모드..."
            ],
            interaction: [
                "접근 금지.",
                "청동은 부서지지 않는다.",
                "삐비빅."
            ],
            gift: [
                "수리 파츠?",
                "연료 확인.",
                "가동률 상승."
            ],
            special: [
                "잔해 투척!",
                "자폭 모드!",
                "고대 기술 발동!"
            ]
        },
        lines: {
            normal: "나는... 크레타의... 수호자...",
            touch_head: "회로... 노출...",
            touch_chest: "동력원... 불안정...",
            touch_legs: "기동력... 저하...",
            touch_special: "완전한 수리가 필요해... 도와줘..."
        }
    },
    {
        id: "fury_hiss",
        name: "분노의 정령 퓨리",
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 분노의 정령 퓨리",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 분노의 정령 퓨리, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "복수의 뱀",
            "story": "복수의 여신 에리니예스를 따르는 뱀 모양의 정령. 죄지은 자를 끝까지 쫓아다니며 괴롭힌다. 그 쉿쉿거리는 소리는 죄인의 양심을 찌른다.",
            "personality": "Vengeful & Persistent"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "쉿... 쉿...",
                "죄지은 자 어디 있나?",
                "복수는 달콤해."
            ],
            interaction: [
                "네 양심은 깨끗해?",
                "독니를 보여줄까?",
                "차가운 비늘."
            ],
            gift: [
                "피의 대가.",
                "복수의 도구인가?",
                "받아두지."
            ],
            special: [
                "독니 공격!",
                "죄의 무게를 느껴라!",
                "끔찍한 비명!"
            ]
        },
        lines: {
            normal: "아무리 숨어도 내 눈은 피할 수 없어.",
            touch_head: "머리 만지면 물어.",
            touch_chest: "차갑게 식은 복수심.",
            touch_legs: "소리 없이 다가가지.",
            touch_special: "네 마음속 깊은 곳의 어둠이 보여... 큭큭."
        }
    },
    {
        id: "sphinx_kitten",
        name: "아기 스핑크스",
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 스핑크스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 스핑크스, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "수수께끼의 아이",
            "story": "사자의 몸에 사람의 얼굴을 한 스핑크스의 새끼. 아직 날개는 작지만 지능이 매우 높다. 지나가는 사람에게 수수께끼 내기를 좋아한다.",
            "personality": "Clever & Playful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "문제 하나 낼까?",
                "아침엔 네 발...",
                "심심해 냥."
            ],
            interaction: [
                "틀리면 잡아먹을 거야!",
                "정답은 뭘까?",
                "머리 쓰다듬지 마."
            ],
            gift: [
                "책!",
                "장난감이다!",
                "오오... (반짝)"
            ],
            special: [
                "수수께끼 타임!",
                "모르면 바보!",
                "할퀴기!"
            ]
        },
        lines: {
            normal: "내 문제를 맞히면 지나가게 해줄게.",
            touch_head: "똑똑한 머리라구.",
            touch_chest: "고양이 아니야!",
            touch_legs: "발톱 숨기고 있어.",
            touch_special: "너, 꽤 똑똑하구나? 친구 해줄게."
        }
    },
    {
        id: "cloud_puff",
        name: "구름 솜사탕",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 구름 솜사탕",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 구름 솜사탕, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "폭신한 정령",
            "story": "올림포스 산을 감싼 구름에서 태어난 정령. 솜사탕처럼 부드럽고 가볍다. 제우스의 번개를 맞고도 멀쩡하며, 가끔 비를 뿌리기도 한다.",
            "personality": "Soft & Airy"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "둥실둥실~",
                "바람이 좋아~",
                "졸려..."
            ],
            interaction: [
                "부드럽죠?",
                "먹으면 안 돼요.",
                "간지러워요."
            ],
            gift: [
                "물방울!",
                "햇살!",
                "포근해..."
            ],
            special: [
                "소나기!",
                "번개 찌릿!",
                "안개 숨기!"
            ]
        },
        lines: {
            normal: "하늘을 나는 기분, 정말 좋아요.",
            touch_head: "모양 망가져요.",
            touch_chest: "안개 속에 심장이 있어요.",
            touch_legs: "발은 없어요.",
            touch_special: "당신을 포근하게 감싸줄게요."
        }
    },
    {
        id: "pegasus_colt",
        name: "아기 페가수스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 페가수스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 페가수스, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "천마의 아이",
            "story": "날개 달린 천마 페가수스의 새끼. 아직 하늘을 높이 날지는 못하지만, 날갯짓 연습을 열심히 한다. 발굽으로 땅을 차면 맑은 샘물이 솟아난다고 한다.",
            "personality": "Pure & Free"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "히힝!",
                "푸르르...",
                "날고 싶어!"
            ],
            interaction: [
                "등에 탈래?",
                "날개 만져봐.",
                "당근 있어?"
            ],
            gift: [
                "가장 좋아하는 각설탕!",
                "향긋한 풀냄새.",
                "고마워 히힝!"
            ],
            special: [
                "비상!",
                "뒷발차기!",
                "바람 일으키기!"
            ]
        },
        lines: {
            normal: "저 높은 하늘 끝까지 날아가고 싶어.",
            touch_head: "갈기가 부드럽지?",
            touch_chest: "튼튼한 심장이야.",
            touch_legs: "내 발차기는 꽤 아파.",
            touch_special: "나랑 같이 별 보러 갈래?"
        }
    },
    {
        id: "satyr_young",
        name: "사티로스 견습생",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 사티로스 견습생",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 사티로스 견습생, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "숲의 악동",
            "story": "반인반염소의 모습을 한 사티로스의 아이. 장난기가 많고 숲속을 뛰어다니기를 좋아한다. 피리 연주에 소질이 있으며, 항상 즐거워 보인다.",
            "personality": "Mischievous & Musical"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "룰루랄라~",
                "재미있는 거 없나?",
                "피리 불어줄까?"
            ],
            interaction: [
                "내 뿔 잡지 마!",
                "간지럼 태우지 마.",
                "술래잡기 할까?"
            ],
            gift: [
                "포도!",
                "새 피리!",
                "신난다!"
            ],
            special: [
                "자연의 노래!",
                "덩굴 함정!",
                "박치기!"
            ]
        },
        lines: {
            normal: "숲속에는 신기한 게 정말 많아!",
            touch_head: "뿔이 쑥쑥 자라고 있어.",
            touch_chest: "털이 많아서 따뜻해.",
            touch_legs: "염소 다리라도 엄청 빨라.",
            touch_special: "나중에 커서 판 신처럼 멋진 연주자가 될 거야."
        }
    },
    {
        id: "dryad_seed",
        name: "드라이어드 씨앗",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 드라이어드 씨앗",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 드라이어드 씨앗, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "숲의 잠재력",
            "story": "나무의 요정 드라이어드가 될 씨앗. 숲의 생명력을 가득 머금고 있으며, 맑은 물과 햇빛을 받으면 아름다운 요정으로 자라난다.",
            "personality": "Dormant & Green"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "...",
                "(바스락)",
                "졸려요..."
            ],
            interaction: [
                "물 주세요.",
                "더워요.",
                "깨우지 마세요."
            ],
            gift: [
                "비료!",
                "물!",
                "(무럭무럭 자란다)"
            ],
            special: [
                "싹트기!",
                "덩굴 뻗기!",
                "꽃피우기!"
            ]
        },
        lines: {
            normal: "언젠가 큰 나무가 되어 숲을 지킬 거예요.",
            touch_head: "새싹 다쳐요.",
            touch_chest: "흙 냄새가 나죠?",
            touch_legs: "뿌리가 깊어요.",
            touch_special: "당신의 보살핌 덕분에 쑥쑥 자라고 있어요."
        }
    },
    {
        id: "cyclops_worker",
        name: "키클롭스 견습공",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 키클롭스 견습공",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 키클롭스 견습공, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "대장간의 막내",
            "story": "외눈박이 거인 키클롭스의 견습공. 헤파이스토스의 대장간에서 일을 배우고 있다. 아직 기술은 서툴지만 힘 하나는 장사다. 망치질 소리가 우렁차다.",
            "personality": "Strong & Clumsy"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "망치질 쾅쾅!",
                "불조심 해.",
                "이거 무거워..."
            ],
            interaction: [
                "눈 찌르지 마!",
                "근육 만져봐.",
                "땀 냄새 나?"
            ],
            gift: [
                "새 망치!",
                "철광석!",
                "우오오! (기쁨)"
            ],
            special: [
                "내려치기!",
                "대지의 울림!",
                "뜨거운 열기!"
            ]
        },
        lines: {
            normal: "헤파이스토스 님처럼 최고의 대장장이가 될 거야.",
            touch_head: "눈이 하나라 집중이 잘 돼.",
            touch_chest: "단단한 가슴.",
            touch_legs: "다리도 튼튼해.",
            touch_special: "나중에 네 무기는 내가 만들어 줄게! 공짜는 아니고."
        }
    },
    {
        id: "nymph_water",
        name: "샘의 님프",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 샘의 님프",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 샘의 님프, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "맑은 물의 요정",
            "story": "숲속의 맑은 샘물에 사는 님프. 물을 맑게 유지하고 숲의 생물들에게 생명수를 제공한다. 마음씨가 착하고 노래 부르기를 좋아한다.",
            "personality": "Kind & Pure"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "물이 시원해요.",
                "목마르지 않나요?",
                "퐁당퐁당~"
            ],
            interaction: [
                "물 튀기지 마세요.",
                "옷이 젖었잖아요.",
                "같이 놀아요."
            ],
            gift: [
                "예쁜 조약돌.",
                "꽃반지.",
                "고마워요."
            ],
            special: [
                "치유의 물!",
                "정화!",
                "물방울 방어!"
            ]
        },
        lines: {
            normal: "깨끗한 물은 모든 생명의 근원이에요.",
            touch_head: "머리 장식은 수련 잎이랍니다.",
            touch_chest: "마음이 투명해요.",
            touch_legs: "물속에서는 헤엄을 잘 쳐요.",
            touch_special: "당신의 지친 마음을 제 노래로 씻어 드릴게요."
        }
    },
    {
        id: "griffin_chick",
        name: "아기 그리폰",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 그리폰",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 그리폰, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "황금의 수호자",
            "story": "사자의 몸과 독수리의 머리를 가진 그리폰의 새끼. 어릴 때부터 반짝이는 것을 좋아하며, 자신의 둥지에 보물을 모으는 습성이 있다.",
            "personality": "Greedy & Brave"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "끼이익!",
                "반짝반짝!",
                "내 거야!"
            ],
            interaction: [
                "부리 조심해.",
                "날개 펼쳐볼래.",
                "발톱 날카로워."
            ],
            gift: [
                "금화!",
                "보석!",
                "최고야!"
            ],
            special: [
                "급강하 비행!",
                "황금 깃털!",
                "바람 가르기!"
            ]
        },
        lines: {
            normal: "황금은 내가 지킨다! 아무도 못 가져가.",
            touch_head: "독수리의 눈은 멀리 볼 수 있어.",
            touch_chest: "사자의 심장처럼 용감해.",
            touch_legs: "땅과 하늘을 모두 다닐 수 있지.",
            touch_special: "너, 꽤 좋은 보물을 가지고 있구나? 나랑 바꿀래?"
        }
    },
    {
        id: "cerberus_pup",
        name: "아기 케르베로스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 케르베로스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 케르베로스, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "지옥의 귀염둥이",
            "story": "머리가 세 개 달린 지옥견 케르베로스의 새끼. 아직은 덩치가 작고 귀엽지만, 화가 나면 무시무시한 이빨을 드러낸다. 뼈다귀를 좋아한다.",
            "personality": "Cute & Fierce"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "망! 망! 망!",
                "꼬리 살랑살랑.",
                "놀아줘!"
            ],
            interaction: [
                "세 명 다 쓰다듬어줘.",
                "깨물 거야!",
                "앙!"
            ],
            gift: [
                "큰 뼈다귀!",
                "간식!",
                "행복해!"
            ],
            special: [
                "세 배로 물기!",
                "지옥불 뿜기!",
                "귀여운 위협!"
            ]
        },
        lines: {
            normal: "나는 커서 아빠처럼 무서운 지옥견이 될 거야.",
            touch_head: "어느 머리가 제일 귀여워?",
            touch_chest: "배 긁어줘.",
            touch_legs: "발바닥 젤리 말랑해.",
            touch_special: "주인님 냄새 좋아... 킁킁."
        }
    },
    {
        id: "minotaur_calf",
        name: "아기 미노타우로스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 미노타우로스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 미노타우로스, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미궁의 아기",
            "story": "황소 머리를 한 미노타우로스의 새끼. 뿔이 아직 덜 자라 귀엽지만, 힘은 어른 못지않다. 미궁 안에서 길을 잃지 않는 본능을 가졌다.",
            "personality": "Strong & Lost"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "음매~",
                "길 잃어버렸어?",
                "우유 먹고 싶어."
            ],
            interaction: [
                "뿔 만지지 마.",
                "코뚜레 아직 없어.",
                "힘겨루기 할래?"
            ],
            gift: [
                "건초!",
                "우유!",
                "맛있다!"
            ],
            special: [
                "돌진!",
                "박치기!",
                "미궁 생성!"
            ]
        },
        lines: {
            normal: "미궁은 내 놀이터야. 내가 길 알려줄까?",
            touch_head: "머리가 무거워.",
            touch_chest: "튼튼해지고 있어.",
            touch_legs: "발굽 튼튼해.",
            touch_special: "너 착한 사람이구나? 나랑 친구 하자!"
        }
    },
    {
        id: "charybdis_baby",
        name: "소형 카리브디스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 소형 카리브디스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 소형 카리브디스, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "작은 소용돌이",
            "story": "바다의 괴물 카리브디스의 유체. 물을 빨아들이는 연습을 하고 있다. 아직은 작은 물웅덩이 정도를 만들지만, 자라나면 바다 전체를 삼킬 것이다.",
            "personality": "Gluttonous & Wet"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "꾸르륵...",
                "배고파...",
                "물 마실래."
            ],
            interaction: [
                "손 조심해.",
                "빨려 들어간다!",
                "물장구 쳐줘."
            ],
            gift: [
                "물고기!",
                "해초!",
                "꺼억~"
            ],
            special: [
                "물대포!",
                "소용돌이!",
                "다 마셔버리기!"
            ]
        },
        lines: {
            normal: "바다의 모든 물을 다 마셔버리고 싶어.",
            touch_head: "입이 커서 슬퍼.",
            touch_chest: "배가 빵빵해.",
            touch_legs: "지느러미 파닥파닥.",
            touch_special: "너, 물에 젖어도 괜찮아? 나랑 같이 놀자!"
        }
    },
    {
        id: "scylla_pup",
        name: "새끼 스킬라",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 새끼 스킬라",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 새끼 스킬라, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "다중 인격체",
            "story": "여섯 개의 머리를 가진 스킬라의 새끼. 머리끼리 서로 먹이를 두고 다투기도 한다. 좁은 해협을 지나가는 물고기를 잡아먹으며 성장한다.",
            "personality": "Quarrelsome & Hungry"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "내 거야!",
                "아니야, 내 거야!",
                "싸우지 마!"
            ],
            interaction: [
                "1번 머리 안녕?",
                "6번 머리 심술쟁이.",
                "엉키지 마."
            ],
            gift: [
                "오징어!",
                "새우!",
                "맛있다!"
            ],
            special: [
                "6단 공격!",
                "물어뜯기!",
                "합체 공격!"
            ]
        },
        lines: {
            normal: "우리는 여섯 명이서 하나야. 가끔은 귀찮지만.",
            touch_head: "머리가 많아서 어지러워.",
            touch_chest: "가슴은 하나야.",
            touch_legs: "촉수 다리 흐느적.",
            touch_special: "우리 모두 너를 좋아해! ... 아마도?"
        }
    },
    {
        id: "chimera_cub",
        name: "아기 키메라",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, marble, gold ornaments, bright sunlight, divine, Light, 아기 키메라",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 키메라, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "혼종의 시작",
            "story": "사자, 염소, 뱀이 합쳐진 키메라의 새끼. 불을 뿜으려다 기침을 하기도 하지만, 맹수의 본능은 살아있다. 세 가지 동물의 특징이 섞여 있다.",
            "personality": "Chaotic & Young"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "크앙! (콜록)",
                "매애~",
                "쉬익..."
            ],
            interaction: [
                "어느 쪽이 좋아?",
                "꼬리 조심.",
                "등 타지 마."
            ],
            gift: [
                "고기!",
                "풀!",
                "둘 다 좋아!"
            ],
            special: [
                "불꽃 기침!",
                "물기!",
                "독 뿌리기!"
            ]
        },
        lines: {
            normal: "나는 사자이기도 하고, 염소이기도 하고, 뱀이기도 해. 멋지지?",
            touch_head: "사자 머리 쓰다듬어줘.",
            touch_chest: "염소 털 부드러워.",
            touch_legs: "발톱 날카로워.",
            touch_special: "너는 어떤 동물을 제일 좋아해? 나라고 말해!"
        }
    },
    {
        id: "gaia",
        name: "대지의 어머니 가이아",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Earth", "Light"],
        baseStr: 30, baseInt: 30,
        image: "images/creatures/olympus/creature_gaia.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_gaia.png",
            "joy": "images/creatures/olympus/creature_gaia_joy.png",
            "sad": "images/creatures/olympus/creature_gaia_sad.png",
            "angry": "images/creatures/olympus/creature_gaia_angry.png",
            "skill": "images/creatures/olympus/creature_gaia_skill.png",
            "victory": "images/creatures/olympus/creature_gaia_victory.png",
            "defeat": "images/creatures/olympus/creature_gaia_defeat.png",
            "gallery": {
                "lv1": "images/creatures/olympus/creature_gaia_gallery_lv1.png",
                "lv2": "images/creatures/olympus/creature_gaia_gallery_lv2.png",
                "lv3": "images/creatures/olympus/creature_gaia_gallery_lv3.png"
            }
        },
        prompts: {
            // v3: Clean & Consistent (No UI/Text)
            "base": "(masterpiece:1.5), (best quality:1.4), (nikke style:1.4), (blue archive style:1.2), full body, solo, god_gaia, (extremely beautiful vibrant face:1.4), (seductive golden eyes:1.3), long wavy gradient green hair with glowing flowers, (revealing fusion fantasy dress made of vines and translucent silk:1.3), (nature-themed bikini armor elements), (glamorous body:1.4), (massive breasts:1.3), (wide hips:1.4), (plump thighs:1.3), luscious glossy skin, sunlight rim lighting, lush magical forest background, floating petals, seductive pose, looking at viewer, inviting smile, embodying desire and nature",
            "idle": "standing seductive pose, hand on hip, confident smile, wind blowing, simple forest background",
            "joy": "laughing happily, throwing flower petals, winking, dynamic pose, vibrant energy, simple forest background, no text, no ui",
            "sad": "sitting on withered grass, crying, covering face with hands, raining background, wilted flowers, sad atmosphere, no text, no ui",
            "angry": "angry shouting face, summoning giant thorny vines, stormy forest, glowing green eyes, aggressive stance, no text, no ui",
            "skill": "floating, blooming flowers everywhere, glowing green energy waves, mother nature casting spell, vibrant colors, extreme dynamic angle, cinematic lighting, no text, no ui",
            "victory": "holding a basket of fruits, winking, cheerful victory pose, surrounded by happy animals, simple forest background, no text, no ui",
            "defeat": "collapsed on ground, breathing heavily, dress torn, messy hair, vulnerable look, sweat on skin, simple forest background, no text, no ui",
            "gallery_lv1": "bathing in forest lake, water level up to chest, wet hair, surprised but smiling, water drops on skin, looking at viewer, no text, no ui",
            "gallery_lv2": "sitting inside a giant tree hollow, patting the space next to her, seductive motherly smile, dim cozy lighting, looking at viewer, no text, no ui",
            "gallery_lv3": "hugging viewer tightly, vines wrapping around both, soft breasts pressing against screen, loving gaze, flush, extreme close-up, no text, no ui"
        },
        lore: {
            "title": "대지의 어머니",
            "story": "모든 생명의 어머니이자 대지 그 자체입니다. 가이아의 분노는 지진을 일으키고, 자애는 만물을 피어나게 합니다. 올림포스 신들의 할머니이기도 합니다.",
            "personality": "Motherly & Ancient"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "모든 생명은 내 품으로 돌아오지.",
                "대지의 고동을 느껴보렴.",
                "아이들아, 잘 자라거라."
            ],
            interaction: [
                "어머니의 품이 그립니?",
                "자연을 훼손하면 안 된단다.",
                "내 사랑은 무한하단다."
            ],
            gift: [
                "풍요로운 수확이로구나.",
                "대지의 선물이다.",
                "기특하구나."
            ],
            special: [
                "대지의 분노!",
                "생명의 태동!",
                "어머니의 보호!"
            ]
        },
        lines: {
            normal: "나는 너희가 딛고 선 땅이자, 생명을 틔우는 힘이란다.",
            touch_head: "머리 장식은 살아있는 숲이지.",
            touch_chest: "내 심장은 지구의 중심과 연결되어 있어.",
            touch_legs: "대지 위에 서 있는 한, 나는 쓰러지지 않아.",
            touch_special: "힘들 땐 언제든 내게 기대렴. 나는 너희 모두의 어머니니까."
        }
    },
    {
        id: "archangel_michael",
        name: "대천사 미카엘",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/olympus/creature_archangel_michael.png",
        sprites: {
            "idle": "images/creatures/olympus/creature_archangel_michael.png"
        },
        prompts: {
            "base": "anime style, 대천사 미카엘"
        },
        lore: {
            "title": "천상의 사령관",
            "story": "신들의 군대를 이끄는 대천사. 타락한 자들을 심판하고 정의를 수호한다. 불타는 검을 들고 어둠을 물리치는 빛의 전사다.",
            "personality": "Righteous & Stern"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "악은 결코 승리할 수 없다.",
                "빛이 너를 인도하리라.",
                "나의 검은 정의를 위해 존재한다."
            ],
            interaction: [
                "두려워 마라, 내가 지켜주마.",
                "타락한 기운이 느껴지는군...",
                "기도는 마음을 강하게 하지."
            ],
            gift: [
                "신성한 공물인가.",
                "정의를 위해 쓰겠다.",
                "빛의 축복이 있기를."
            ],
            special: [
                "천상의 심판!",
                "성스러운 빛이여!",
                "악을 멸하리라!"
            ]
        },
        lines: {
            normal: "어둠이 깊을수록 빛은 더 강하게 빛나는 법이다.",
            touch_head: "투구에 손대지 마라.",
            touch_chest: "갑옷 안의 믿음은 흔들리지 않는다.",
            touch_legs: "악을 짓밟는 발이다.",
            touch_special: "네 안에 있는 정의의 불꽃을 보았다. 훌륭하군."
        }
    },
    {
        id: "nymph_dark",
        name: "어둠의 님프",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, 어둠의 님프",
            "idle": "standing"
        },
        lore: {
            "title": "밤의 요정",
            "story": "깊은 숲속, 달빛조차 들지 않는 곳에 사는 어둠의 님프. 그림자 속에 숨어 길 잃은 여행자를 관찰한다. 차가워 보이지만 외로움을 많이 탄다.",
            "personality": "Mysterious & Lonely"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "어둠이 편안해...",
                "나를 봤어?",
                "달빛이 너무 밝아."
            ],
            interaction: [
                "가까이 오지 마...",
                "그림자 놀이 할래?",
                "나는 위험해."
            ],
            gift: [
                "검은 꽃...",
                "어둠의 결정체.",
                "고마워... (수줍)"
            ],
            special: [
                "그림자 속박!",
                "어둠의 장막!",
                "밤의 노래!"
            ]
        },
        lines: {
            normal: "빛이 있는 곳엔 항상 그림자가 있지. 나도 항상 네 곁에 있어.",
            touch_head: "머리카락이 밤하늘 같지?",
            touch_chest: "심장이 천천히 뛰어.",
            touch_legs: "발소리가 나지 않아.",
            touch_special: "어둠을 두려워하지 않는구나... 너라면 내 친구가 될 수 있을까?"
        }
    }
];