var SHANGRILA_CREATURES = [
    {
        id: "bonsai_spirit",
        name: "천년 분재 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 천년 분재 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 천년 분재 정령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "오랜 시간의 지혜",
            "story": "천 년을 살아온 분재에 깃든 정령. 작지만 깊은 숲의 기운을 담고 있다. 오랜 세월 동안 수많은 선인들의 이야기를 들으며 자라났다.",
            "personality": "Wise & Patient"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "천 년을 기다리는 것은 찰나와 같지요.",
                "조급해하지 마세요.",
                "차 한잔 하겠소?"
            ],
            interaction: [
                "가지를 꺾지 마시오.",
                "뿌리가 깊어야 흔들리지 않는 법.",
                "음, 좋은 기운이로군."
            ],
            gift: [
                "맑은 물이로구나.",
                "좋은 비료는 보약이지.",
                "허허, 고맙네."
            ],
            special: [
                "자연의 섭리!",
                "뿌리 묶기!",
                "천년의 기운!"
            ]
        },
        lines: {
            normal: "성장은 서두른다고 되는 것이 아니란다. 묵묵히 제 자리를 지키는 것이지.",
            touch_head: "잎사귀가 간지럽구나.",
            touch_chest: "오래된 나무의 향이 나지 않느냐?",
            touch_legs: "화분은 나의 집이네.",
            touch_special: "자네에게서 훌륭한 선인이 될 자질이 보이는군."
        }
    },
    {
        id: "panda_monk",
        name: "판다 수도승",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 판다 수도승",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 판다 수도승, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "대나무 숲의 무도가",
            "story": "깊은 대나무 숲에서 수행하는 판다 수도승. 둥글둥글한 외모와 달리 날렵한 권법을 구사한다. 평소에는 느긋하지만, 불의를 보면 참지 않는다.",
            "personality": "Relaxed & Just"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "대나무 잎 좀 있나?",
                "후아... 낮잠 시간인가?",
                "수행은... 내일부터."
            ],
            interaction: [
                "배 만지지 마!",
                "내 권법을 보고 싶나?",
                "둥굴둥굴~"
            ],
            gift: [
                "죽순이 최고지!",
                "만두? 좋아!",
                "자네, 뭘 좀 아는군."
            ],
            special: [
                "판다 권법!",
                "대나무 숲의 분노!",
                "구르기 공격!"
            ]
        },
        lines: {
            normal: "진정한 강함은 부드러움 속에 있는 법이다.",
            touch_head: "귀는 예민하다네.",
            touch_chest: "푹신하다고 무시하지 마라.",
            touch_legs: "하체 훈련은 기본이야.",
            touch_special: "자네와 함께라면 천하를 유랑해보고 싶군."
        }
    },
    {
        id: "lucky_cat_kuro",
        name: "복 고양이 쿠로",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 복 고양이 쿠로",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 복 고양이 쿠로, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "행운을 부르는 고양이",
            "story": "신비한 금화를 모으는 검은 고양이. 오른발을 들면 금전운을, 왼발을 들면 손님을 부른다고 한다. 주막에서 가장 인기 있는 마스코트다.",
            "personality": "Lucky & Greedy"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "돈이 최고다냥!",
                "손님 어서 오라냥!",
                "반짝이는 거 줘."
            ],
            interaction: [
                "공짜는 없다냥.",
                "복채 내놔라냥.",
                "쓰다듬으려면 금화 하나."
            ],
            gift: [
                "금화다냥!",
                "생선도 좋아!",
                "복 받아라냥!"
            ],
            special: [
                "마네키네코 소환!",
                "돈벼락 내려라!",
                "행운의 발톱!"
            ]
        },
        lines: {
            normal: "내 발을 만지면 부자가 될지도 몰라. 물론 나한테 맛있는 걸 줘야지.",
            touch_head: "귀 뒤를 긁어달라냥.",
            touch_chest: "방울 소리 들리냥?",
            touch_legs: "손님 부른다고 바쁘다냥.",
            touch_special: "너, 꽤 좋은 냄새가 나는데? 돈 냄새인가?"
        }
    },
    {
        id: "heavenly_maiden_small",
        name: "꼬마 선녀",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 꼬마 선녀",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 꼬마 선녀, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "천계의 심부름꾼",
            "story": "아직 수행이 부족하여 지상에 내려온 꼬마 선녀. 선녀옷을 날개처럼 사용하여 날아다닌다. 복숭아를 매우 좋아하며, 가끔 천계의 물건을 몰래 가져온다.",
            "personality": "Playful & Innocent"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "여기 천계보다 재밌어?",
                "복숭아 먹고 싶다.",
                "날개옷 예쁘지?"
            ],
            interaction: [
                "옷자락 밟지 마!",
                "천계 이야기는 비밀이야.",
                "같이 놀자!"
            ],
            gift: [
                "천도복숭아?!",
                "꽃핀!",
                "히히, 고마워."
            ],
            special: [
                "꽃비 내리기!",
                "두둥실~",
                "선녀의 춤!"
            ]
        },
        lines: {
            normal: "언니들한테는 비밀로 해줘. 나 놀러 나온 거란 말이야.",
            touch_head: "머리 헝클어지면 혼나.",
            touch_chest: "천계의 향기가 나지?",
            touch_legs: "구름 위를 걷는 기분이야.",
            touch_special: "네 소원, 내가 옥황상제 할아버지한테 말해줄까?"
        }
    },
    {
        id: "cloud_serpent",
        name: "구름 이무기",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 구름 이무기",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 구름 이무기, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "하늘을 노니는 뱀",
            "story": "구름 사이를 헤엄치듯 날아다니는 이무기. 용이 되기 위해 여의주를 찾아다닌다. 비와 안개를 부리는 능력이 있다.",
            "personality": "Ambitious & Mystical"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "용이 될 거야...",
                "여의주 봤어?",
                "구름 맛이 나군."
            ],
            interaction: [
                "수염 당기지 마.",
                "비늘은 미끄러워.",
                "안개 뿜는다?"
            ],
            gift: [
                "둥근 구슬?!",
                "맑은 이슬.",
                "크아앙! (좋음)"
            ],
            special: [
                "폭우 소환!",
                "뇌우!",
                "휘감기!"
            ]
        },
        lines: {
            normal: "천 년을 수련하면 나도 승천할 수 있겠지.",
            touch_head: "뿔이 돋아나고 있어.",
            touch_chest: "용의 심장이 뛰기 시작해.",
            touch_legs: "다리는 아직 없지만 곧 생길 거야.",
            touch_special: "네가 나의 여의주가 되어줄 수 있을까?"
        }
    },
    {
        id: "statue_lion_dog",
        name: "해치 석상",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 해치 석상",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 해치 석상, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "정의의 수호상",
            "story": "사악한 기운을 막아주는 해치 모양의 석상. 밤이 되면 눈에 불이 들어와 움직이며 도원을 순찰한다. 거짓말하는 자를 본능적으로 알아본다.",
            "personality": "Stoic & Loyal"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "거짓말하면 안 돼.",
                "지켜보고 있다.",
                "사악한 기운은 물러가라."
            ],
            interaction: [
                "돌처럼 단단하다.",
                "장난치지 마라.",
                "정직한가?"
            ],
            gift: [
                "향.",
                "청소해주는 건가?",
                "고맙군."
            ],
            special: [
                "석상 돌격!",
                "정의의 심판!",
                "사자후!"
            ]
        },
        lines: {
            normal: "나는 도원의 평화를 지키는 파수꾼이다.",
            touch_head: "뿔은 정의를 상징하지.",
            touch_chest: "돌로 된 심장도 감동할 줄 안다.",
            touch_legs: "천 년을 버텨온 다리다.",
            touch_special: "네 눈빛은 흔들림이 없군. 믿음직스럽다."
        }
    },
    {
        id: "bamboo_chopper",
        name: "대나무 전사",
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 대나무 전사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 대나무 전사, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "대나무 숲의 파수꾼",
            "story": "스스로 움직이는 대나무 인형. 누군가 숲을 훼손하려 하면 날카로운 대나무 창으로 공격한다. 몸이 가벼워 바람을 타고 이동한다.",
            "personality": "Silent & Swift"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "사락... 사락...",
                "바람이 분다.",
                "숲을 지킨다."
            ],
            interaction: [
                "조심해, 날카로워.",
                "대나무 인형일 뿐이야.",
                "베인다."
            ],
            gift: [
                "새 대나무.",
                "기름칠.",
                "(끄덕)"
            ],
            special: [
                "죽창 찌르기!",
                "대나무 숲의 춤!",
                "회전 베기!"
            ]
        },
        lines: {
            normal: "자연을 해치는 자는 용서치 않는다.",
            touch_head: "대나무 삿갓이다.",
            touch_chest: "속은 비었지만 의지는 꽉 찼어.",
            touch_legs: "바람처럼 빠르지.",
            touch_special: "너는 숲의 친구인가, 적인가?"
        }
    },
    {
        id: "lantern_ghost",
        name: "초롱불 귀신",
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 초롱불 귀신",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 초롱불 귀신, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "길 잃은 영혼의 인도자",
            "story": "오래된 초롱불에 깃든 귀신. 밤길을 잃은 나그네에게 길을 안내해주거나, 반대로 홀려서 깊은 산속으로 유인하기도 한다. 장난기가 심하다.",
            "personality": "Mischievous & Bright"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "이쪽이야~",
                "아니, 저쪽인가?",
                "히히히!"
            ],
            interaction: [
                "불 끄지 마!",
                "뜨거울걸?",
                "깜짝 놀랐지?"
            ],
            gift: [
                "기름!",
                "새 심지.",
                "밝아진다!"
            ],
            special: [
                "도깨비불!",
                "환각!",
                "길 잃게 만들기!"
            ]
        },
        lines: {
            normal: "나만 믿고 따라오라구. 늪으로 갈지 마을로 갈지는 비밀이지만.",
            touch_head: "손잡이 뜨거워.",
            touch_chest: "불꽃이 일렁거려.",
            touch_legs: "공중에 떠 다녀.",
            touch_special: "너랑 노는 거 재밌다! 밤새도록 같이 놀자!"
        }
    },
    {
        id: "kumiho_servant",
        name: "미호의 시종",
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 미호의 시종",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 미호의 시종, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "여우 구슬의 관리자",
            "story": "구미호 미호를 모시는 하급 여우 요괴. 미호의 꼬리털로 만든 붓을 들고 다니며, 주인의 명을 받들어 인간을 홀리는 연습을 한다.",
            "personality": "Devoted & Cunning"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "주인님은 어디 계시지?",
                "여우구슬 닦아야 해.",
                "홀려줄까?"
            ],
            interaction: [
                "붓 건드리지 마.",
                "꼬리 밟지 마라.",
                "켁켁!"
            ],
            gift: [
                "간!",
                "예쁜 장신구.",
                "주인님께 드려야지."
            ],
            special: [
                "여우불!",
                "둔갑술!",
                "주인님 소환! (실패)"
            ]
        },
        lines: {
            normal: "나도 언젠가 주인님처럼 꼬리가 아홉 개가 될 거야.",
            touch_head: "귀 쫑긋.",
            touch_chest: "여우 구슬은 여기 없어.",
            touch_legs: "살금살금.",
            touch_special: "너, 내 수련 상대로 딱 좋겠어. 이리 와 봐."
        }
    },
    {
        id: "scroll_dragon",
        name: "그림 속의 용",
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 그림 속의 용",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 그림 속의 용, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "수묵화의 생명",
            "story": "신선이 그린 그림 속에서 튀어나온 먹물 용. 종이 위를 자유롭게 오가며, 먹물을 뿜어 적의 시야를 가린다. 물에 젖으면 힘이 약해진다.",
            "personality": "Artistic & Fluid"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "스윽... 스윽...",
                "그림 속이 편해.",
                "먹물 튄다."
            ],
            interaction: [
                "종이 찢어지겠어.",
                "낙서하지 마.",
                "번진다."
            ],
            gift: [
                "고급 먹.",
                "화선지.",
                "아름다워."
            ],
            special: [
                "먹물 뿌리기!",
                "그림 봉인!",
                "수묵화의 세계!"
            ]
        },
        lines: {
            normal: "세상은 거대한 도화지야. 내가 어떤 그림을 그릴지 기대되지?",
            touch_head: "먹물이 마르지 않았어.",
            touch_chest: "심장은 붓터치 한 번.",
            touch_legs: "흐르는 듯한 움직임.",
            touch_special: "너를 내 그림 속에 영원히 가둬두고 싶구나."
        }
    },
    {
        id: "koi_ascending",
        name: "용이 되고 싶은 잉어",
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 용이 되고 싶은 잉어",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 용이 되고 싶은 잉어, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "등용문의 도전자",
            "story": "폭포를 거슬러 올라 용이 되기를 꿈꾸는 잉어. 끊임없이 점프하며 수련한다. 포기하지 않는 끈기의 상징이다.",
            "personality": "Determined & Energetic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "파닥파닥!",
                "더 높이 점프!",
                "폭포 소리가 좋아."
            ],
            interaction: [
                "비늘 만지지 마.",
                "놓아줘, 올라갈거야!",
                "물 튀길거야!"
            ],
            gift: [
                "지렁이!",
                "힘이 난다!",
                "고마워!"
            ],
            special: [
                "용의 일격! (흉내)",
                "물대포!",
                "폭포 오르기!"
            ]
        },
        lines: {
            normal: "나는 절대 포기하지 않아. 언젠가 반드시 구름 위를 날아오를 거야.",
            touch_head: "수염이 자라고 있어.",
            touch_chest: "아가미가 벌렁벌렁.",
            touch_legs: "꼬리지느러미 힘이 장사야.",
            touch_special: "네가 응원해 준다면 더 높이 뛸 수 있을 것 같아!"
        }
    },
    {
        id: "tea_leaf_fairy",
        name: "찻잎 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 찻잎 요정",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 찻잎 요정, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "향기로운 차의 요정",
            "story": "최상급 찻잎에서 태어난 요정. 차를 우리는 물의 온도를 조절하고, 그윽한 향기를 더해준다. 다도 시간의 필수 동반자.",
            "personality": "Calm & Aromatic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "향기롭지 않나요?",
                "차 한 잔의 여유.",
                "물이 끓고 있어요."
            ],
            interaction: [
                "뜨거워요, 조심.",
                "너무 우려내면 써요.",
                "향을 즐기세요."
            ],
            gift: [
                "깨끗한 이슬.",
                "도자기 찻잔.",
                "마음이 차분해지네요."
            ],
            special: [
                "향기 테라피!",
                "찻잎 덖기!",
                "정화의 물!"
            ]
        },
        lines: {
            normal: "복잡한 생각은 잠시 내려놓고, 향긋한 차 한 잔 어떠세요?",
            touch_head: "새순처럼 여리답니다.",
            touch_chest: "따뜻한 온기가 느껴지나요?",
            touch_legs: "가볍게 떠다녀요.",
            touch_special: "당신의 마음속에 있는 찌꺼기를 제가 깨끗이 씻어드릴게요."
        }
    },
    {
        id: "rice_grain_spirit",
        name: "쌀알 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 쌀알 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 쌀알 정령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "풍요의 상징",
            "story": "잘 익은 쌀알에 깃든 정령. 농부들의 땀방울을 먹고 자라며, 풍년을 기원한다. 배고픈 사람을 보면 자신의 몸을 떼어 나눠준다.",
            "personality": "Generous & Pure"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "밥은 먹고 다니니?",
                "배고프지?",
                "무럭무럭 자라라."
            ],
            interaction: [
                "흘리면 안 돼.",
                "한 톨도 소중해.",
                "꼭꼭 씹어 먹어."
            ],
            gift: [
                "비료!",
                "따뜻한 햇살.",
                "배 부르다!"
            ],
            special: [
                "밥알 공격!",
                "풍년 기원!",
                "배불리기!"
            ]
        },
        lines: {
            normal: "한국인은 밥심이지! 든든하게 먹어야 힘을 쓴다고.",
            touch_head: "껍질 까면 하양.",
            touch_chest: "속이 꽉 찼어.",
            touch_legs: "뿌리가 단단해.",
            touch_special: "배고픈 아이가 없는 세상이 내 꿈이야. 같이 만들어 줄 거지?"
        }
    },
    {
        id: "paper_charm_seal",
        name: "봉인 부적",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 봉인 부적",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 봉인 부적, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "강시 제어 부적",
            "story": "도사가 요괴를 봉인할 때 사용하는 부적. 오랜 시간이 지나 자아를 가지게 되었다. 사악한 기운을 감지하면 스스로 날아가 달라붙는다.",
            "personality": "Sticky & Protective"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "펄럭... 펄럭...",
                "촥! 달라붙기.",
                "봉인!"
            ],
            interaction: [
                "찢지 마시오.",
                "물에 젖으면 안 돼.",
                "부적 떨어짐."
            ],
            gift: [
                "붉은 주사.",
                "새 종이.",
                "효력 상승!"
            ],
            special: [
                "봉인술!",
                "결계 생성!",
                "악귀 퇴치!"
            ]
        },
        lines: {
            normal: "급급여율령! 나쁜 기운은 내가 다 막아주겠다!",
            touch_head: "글씨가 써 있어.",
            touch_chest: "가운데가 제일 강력해.",
            touch_legs: "다리는 없어.",
            touch_special: "네 이마에 붙여줄까? 나쁜 꿈을 꾸지 않게 해줄게."
        }
    },
    {
        id: "yin_yang_orb",
        name: "음양구",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 음양구",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 음양구, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "조화의 구슬",
            "story": "음과 양의 기운이 조화를 이루어 만들어진 구슬. 도사의 수련 도구로 사용되며, 주변의 기운을 정화하는 능력이 있다.",
            "personality": "Balanced & Floating"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "빙글... 빙글...",
                "균형이 중요해.",
                "마음을 비워."
            ],
            interaction: [
                "흔들지 마.",
                "어지러워.",
                "조화가 깨진다."
            ],
            gift: [
                "기의 흐름.",
                "명상.",
                "완벽해."
            ],
            special: [
                "음양 조화!",
                "기공파!",
                "회전!"
            ]
        },
        lines: {
            normal: "빛과 어둠, 선과 악... 모든 것은 하나로 통하는 법이지.",
            touch_head: "매끄러운 표면.",
            touch_chest: "중심이 잡혀 있어.",
            touch_legs: "공중부양 중.",
            touch_special: "너의 마음은 흔들리고 있구나. 내가 잡아주마."
        }
    },
    {
        id: "cherry_blossom_petal",
        name: "벚꽃잎 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 벚꽃잎 요정",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 벚꽃잎 요정, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "흩날리는 봄의 전령",
            "story": "봄바람을 타고 날아온 벚꽃잎 요정. 떼를 지어 다니며 분홍빛 춤을 춘다. 이들이 지나간 자리에는 향긋한 꽃향기가 남는다.",
            "personality": "Lovely & Fleet"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "살랑살랑~",
                "봄이 왔어요.",
                "춤추자!"
            ],
            interaction: [
                "잡지 마세요.",
                "부서져요.",
                "바람 타고 갈래."
            ],
            gift: [
                "봄바람.",
                "꽃가루.",
                "기분 좋아!"
            ],
            special: [
                "꽃비 내리기!",
                "화려한 춤!",
                "봄의 축복!"
            ]
        },
        lines: {
            normal: "당신의 어깨 위에 사뿐히 내려앉고 싶어요. 봄의 소식을 전해드릴게요.",
            touch_head: "분홍빛 머릿결.",
            touch_chest: "가벼운 몸.",
            touch_legs: "발이 땅에 닿지 않아.",
            touch_special: "지는 꽃을 슬퍼하지 마세요. 내년에 다시 피어날 테니까요."
        }
    },
    {
        id: "magpie_messenger",
        name: "반가운 까치 전령",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 반가운 까치 전령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 반가운 까치 전령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "좋은 소식의 전달자",
            "story": "아침 일찍 찾아와 반가운 손님이 올 것을 알리는 까치. 칠월칠석에는 견우와 직녀를 위해 다리를 놓아준다고 한다.",
            "personality": "Cheerful & Chatty"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "깍깍! 깍!",
                "좋은 소식이 있어.",
                "손님 온다!"
            ],
            interaction: [
                "깃털 뽑지 마.",
                "뭘 봐?",
                "반짝이는 거 줘."
            ],
            gift: [
                "반지?!",
                "벌레...",
                "기분 좋다 깍!"
            ],
            special: [
                "오작교 건설!",
                "부리 쪼기!",
                "행운 전달!"
            ]
        },
        lines: {
            normal: "오늘 아침 네가 일어나는 걸 봤어. 아주 좋은 일이 생길 징조야!",
            touch_head: "머리 쓰다듬어줘.",
            touch_chest: "흰 배가 예쁘지?",
            touch_legs: "나뭇가지에 앉아야 해.",
            touch_special: "내가 널 위해 특별히 행운을 물어왔어. 자, 받아!"
        }
    },
    {
        id: "wind_chime_spirit",
        name: "풍경 소리 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 풍경 소리 요정",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 풍경 소리 요정, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "처마 밑의 연주자",
            "story": "바람이 불 때마다 맑은 소리를 내는 풍경(종). 그 소리는 잡귀를 쫓고 마음을 평안하게 해준다.",
            "personality": "Clear & Ringing"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "딸랑... 딸랑...",
                "바람이 시원해.",
                "듣기 좋지?"
            ],
            interaction: [
                "너무 세게 치지 마.",
                "시끄러워?",
                "잠이 온다..."
            ],
            gift: [
                "산들바람.",
                "종이 물고기.",
                "맑은 소리."
            ],
            special: [
                "공명!",
                "음파 공격!",
                "자장가."
            ]
        },
        lines: {
            normal: "내 소리를 듣고 있으면 마음 속의 근심이 사라질 거야.",
            touch_head: "고리가 달려있어.",
            touch_chest: "텅 비었지만 소리는 가득해.",
            touch_legs: "물고기 장식.",
            touch_special: "네 마음의 소리도 나처럼 맑고 고왔으면 좋겠어."
        }
    },
    {
        id: "firefly_night",
        name: "달밤의 반딧불이",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 달밤의 반딧불이",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 달밤의 반딧불이, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "어둠을 밝히는 빛",
            "story": "시골의 여름 밤을 수놓는 반딧불이. 맑은 물이 흐르는 곳에서만 서식한다. 아이들의 동심을 지켜주는 작은 등불이다.",
            "personality": "Glowing & Transient"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "반짝... 반짝...",
                "어두워야 잘 보여.",
                "이쪽이야."
            ],
            interaction: [
                "잡지 마.",
                "빛이 약해져.",
                "도망갈래."
            ],
            gift: [
                "이슬.",
                "깨끗한 물.",
                "더 밝게 빛날게."
            ],
            special: [
                "섬광!",
                "눈부시기!",
                "집단 비행!"
            ]
        },
        lines: {
            normal: "나는 아주 작지만, 모이면 세상을 밝힐 수 있어.",
            touch_head: "더듬이.",
            touch_chest: "엉덩이에서 빛이 나.",
            touch_legs: "작은 다리.",
            touch_special: "가장 어두운 밤에만 볼 수 있는 희망이 되고 싶어."
        }
    },
    {
        id: "dragon_ancient",
        name: "태초의 용 바하무트",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 50, baseInt: 40,
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
            "base": "(masterpiece:1.5), (best quality:1.4), (nikke style:1.4), (blue archive style:1.2), full body, solo, dragon_ancient, female, (beautiful authoritative face:1.4), (glowing dragon eyes:1.3), long silver hair, dragon horns, large black dragon wings, fierce dragon tail, (revealing scale armor:1.3), (glamorous body:1.4), (huge breasts:1.3), (wide hips:1.4), (thick thighs:1.3), metallic scales on skin, epic cloudy sky background, lightning, domineering pose",
            "idle": "standing pose, arms crossed, confident smirk, looking down at viewer, wind blowing hair, no text, no ui",
            "joy": "laughing heartily, head tilted back, flushed cheeks, powerful aura, happy eyes, no text, no ui",
            "sad": "looking away, touching chest, slightly tearing up, rain falling, gloomy atmosphere, no text, no ui",
            "angry": "roaring expression, mouth open, glowing throat (breath), violent energy, shaking ground, no text, no ui",
            "skill": "flying in sky, gathering massive energy ball, cinematic angle, epic lighting, destruction background, no text, no ui",
            "victory": "standing on defeated enemies, triumphant pose, holding a flag or weapon high, glorious light, no text, no ui",
            "defeat": "kneeling on ground, armor broken, heavy breathing, sweat, looking frustrated, dust and scratches, no text, no ui",
            "gallery_lv1": "dating sim event, sitting on a cliff edge, watching sunset, wind blowing, looking back at viewer with a soft smile, peaceful atmosphere, no text, no ui",
            "gallery_lv2": "dating sim event, bathing in a mountain hot spring, steam, wet skin, scales glistening, covering chest slightly, blushing, inviting look, no text, no ui",
            "gallery_lv3": "dating sim event, lying on a hoard of gold and treasures, sultry pose, heavy blush, heart shaped pupils, sweat, dragon tail wrapping around leg, overwhelming desire, no text, no ui"
        },
        lore: {
            "title": "세상의 시작",
            "story": "천지창조의 순간부터 존재했다고 전해지는 전설의 용. 거대한 날개로 하늘을 뒤덮고, 입에서는 모든 것을 정화하는 빛을 뿜는다. 신에 필적하는 권능을 지녔다.",
            "personality": "Ancient & Divine"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "나는 시작이자 끝이니라.",
                "하찮은 것들이 소란스럽구나.",
                "바람이... 기억을 실어오는군."
            ],
            interaction: [
                "감히 내 비늘에 손을 대느냐?",
                "뜨거움을 견딜 수 있겠느냐?",
                "나를 깨운 대가는 크다."
            ],
            gift: [
                "이깟 보물... 나쁘진 않구나.",
                "공물인가? 받아주지.",
                "짐의 마음에 드는군."
            ],
            special: [
                "창세의 빛!",
                "멸망의 숨결!",
                "모든 것은 무로 돌아가리라."
            ]
        },
        lines: {
            normal: "인간이여, 네가 가진 그 작은 불꽃이 언제까지 타오를지 지켜보겠다.",
            touch_head: "뿔을 만지는 건 허락하지 않았다.",
            touch_chest: "심장의 고동... 태초의 리듬이지.",
            touch_legs: "발톱에 스치기만 해도 끝이다.",
            touch_special: "나와 함께 하늘의 끝을 보고 싶다는 게냐?"
        }
    },
    {
        id: "fox_nine_ur",
        name: "천년 구미호 미호",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 20, baseInt: 60,
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
            "base": "(masterpiece:1.5), (best quality:1.4), (nikke style:1.4), (blue archive style:1.2), full body, solo, kumiho_miho, female, (beautiful seductive face:1.4), (fox ears:1.2), (nine fluffy fox tails:1.4), long white hair, golden eyes, wearing traditional fancy hanbok with off-shoulder and mini skirt modification, (glamorous body:1.4), (huge breasts:1.3), (wide hips:1.4), (thick thighs:1.3), oriental palace background, cherry blossoms, mystical aura",
            "idle": "standing pose, holding a fan, seductive smile, winking, graceful posture, no text, no ui",
            "joy": "giggling, covering mouth with fan, happy eyes, fox ears twitching, flowers floating, no text, no ui",
            "sad": "droopy fox ears, looking down, tearing up, fan closed, melancholic atmosphere, no text, no ui",
            "angry": "baring fangs, glowing eyes, blue fox fire aura, tails flared up, aggressive stance, no text, no ui",
            "skill": "dancing with fox fire, summoning spiritual energy, cinematic lighting, petals blowing, masterpiece, no text, no ui",
            "victory": "sitting on air, crossing legs, triumphant smile, spinning fan, looking down, no text, no ui",
            "defeat": "collapsed on floor, hanbok torn, messy hair, panting, sweat, looking resentful, no text, no ui",
            "gallery_lv1": "dating sim event, walking under moonlight, holding a lantern, looking back at viewer, mysterious smile, oriental garden background, no text, no ui",
            "gallery_lv2": "dating sim event, sitting on a veranda, drinking tea, hanbok loosening, exposing shoulder and cleavage, flushed face, tipsy, intimate atmosphere, no text, no ui",
            "gallery_lv3": "dating sim event, lying on silk bedding, hanbok disheveled, exposing skin, heart shaped pupils, tails wrapping around body, heavy blush, seducing viewer, no text, no ui"
        },
        lore: {
            "title": "천년 복의 구미호",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물. 천년을 수련하여 아홉 개의 꼬리를 얻었으며, 인간의 모습으로 변신할 수 있다. 장난기를 좋아하지만 심성은 고운하며, 한번 정한 연은 불변이라 믿는다. 여우불로 적을 혹하거나 환영을 보여주며, 달밤이면 그 힘은 배가 된다.",
            "origin": "동양 전설 / 무릉도원",
            "personality": "Playful & Loyal"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "오늘도 달이 아름답구나~",
                "아홉 꼬리의 힘을 보여줄까?",
                "후후~ 여우비는 싫지 않아?"
            ],
            interaction: [
                "오머! 만지려면 대가를 치러야 해~",
                "에헤헤~ 간지럽네, 간지러워.",
                "그렇게 만지고 싶어? 후후~"
            ],
            gift: [
                "선물? 맘에 들어! 고마워~",
                "오오! 이건 전에 봐던 것 같은데...",
                "내게 이런 걸 준다는 건... 후후, 분명한 거야?"
            ],
            special: [
                "여우불로 모든 걸 태워버릴 거야!",
                "천년 구미호의 힘을 볼 준비 됐어?",
                "달빛아래, 내 진정한 모습을 보여줄게!"
            ]
        },
        lines: {
            normal: "달빛 아래서 춤추자~",
            touch_head: "귀 만지는 거야? 간지럽네... 힘희~",
            touch_chest: "심장 소리 들려? 널 향한 내 마음이야.",
            touch_legs: "꼬리까지 만지면 안 돼! ...아, 너라면 괜찮아.",
            touch_special: "내 전부를 바칠 각오가 됐어?"
        }
    },
    {
        id: "dragon_king",
        name: "수정궁의 용왕",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_dragon_king.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_dragon_king.png",
            "joy": "images/creatures/shangrila/creature_dragon_king_joy.png",
            "sad": "images/creatures/shangrila/creature_dragon_king_sad.png",
            "angry": "images/creatures/shangrila/creature_dragon_king_angry.png",
            "skill": "images/creatures/shangrila/creature_dragon_king_skill.png",
            "victory": "images/creatures/shangrila/creature_dragon_king_victory.png",
            "defeat": "images/creatures/shangrila/creature_dragon_king_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_dragon_king_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_dragon_king_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_dragon_king_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, dragon goddess, majestic mature face, long flowing white hair with teal gradient, elaborate regal robes with gold embroidery, translucent silk, exposed cleavage and legs, glamorous body, huge breasts, extremely thick thighs, wide hips, holding radiant dragon pearl, underwater throne room with glowing crystals, swirling water aura, cinematic lighting, masterpiece, best quality, intricate details",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling brightly, happy expression, gentle water swirling, glowing eyes, hand on cheek, radiant atmosphere",
            "sad": "sad expression, tearing up, looking down, darkened background, drooping dragon horns",
            "angry": "furious expression, shouting, glowing red eyes, summoning stormy waves, dynamic action pose",
            "skill": "unleashing ultimate attack, summoning massive water dragon, cinematic lighting, dramatic camera angle, extreme masterpiece",
            "victory": "proud victory pose, winking, peace sign, glowing radiantly, treasures falling",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, messed up hair, shy expression",
            "gallery_lv1": "dating sim event, dragon god girl, sitting on throne, crossing legs, seductive look, underwater bedroom",
            "gallery_lv2": "dating sim event, dragon god girl, close up, intimate moment, blushing hard, holding commander's hand",
            "gallery_lv3": "dating sim event, dragon god girl, lying on bed, barely covered by silk, extremely seductive, heart eyes"
        },
        lore: {
            "title": "사해의 지배자",
            "story": "동해 수정궁을 다스리는 용왕. 바다의 모든 생물과 날씨를 지배하며, 여의주로 온갖 변화를 만들 수 있다. 위엄있고 위계적이나, 정의로운 자에게는 관대하다. 손오공과의 인연으로 여의봉을 빌려준 적이 있으며, 그 일을 아직도 후회한다. 용궁의 축제는 화려하기로 유명하다.",
            "origin": "동양 전설 / 동해 용궁",
            "personality": "Majestic & Just"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "용궁의 위엄은 영원하다.",
                "바다의 평화를 지키는 것이 내 임무다.",
                "여의주의 빛이 모든 것을 비춘다."
            ],
            interaction: [
                "감히 용왕을 직접... 허나 무례는 아니로군.",
                "물의 기운이 느껴지는가?",
                "용궁에서는 예의가 중요하네."
            ],
            gift: [
                "선물이라... 나쁘지 않네. 받아주지.",
                "이런 정성, 오래만에 보는군.",
                "용궁의 보물과도 바꿀 수 없는 마음이로군."
            ],
            special: [
                "조수여, 내 명을 따르라!",
                "용의 분노를 보여주마!",
                "여의주의 진정한 힘을!"
            ]
        },
        lines: {
            normal: "바다는 모든 것을 품는다.",
            touch_head: "용의 뿔을 만지다니... 대담하군.",
            touch_chest: "용의 심장 고동, 듣고 있는가?",
            touch_legs: "발? 아니, 이것은 용의 발톱이라네.",
            touch_special: "그대만은 용궁에 초대하겠네."
        }
    },
    {
        id: "phoenix_eternal",
        name: "불멸의 화조 페이",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 불멸의 화조 페이",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 불멸의 화조 페이, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 불멸의 화조 페이, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 불멸의 화조 페이, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "남쪽의 수호신",
            "story": "죽음과 부활을 반복하며 영원히 사는 불멸의 새. 그 눈물은 모든 병을 고치고, 깃털은 꺼지지 않는 불꽃을 품고 있다. 성군이 나타날 때만 모습을 드러낸다고 전해진다.",
            "personality": "Noble & Eternal"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "불꽃은 사라지지 않아요.",
                "다시 태어나는 기분...",
                "따뜻함이 필요하신가요?"
            ],
            interaction: [
                "뜨거울 수 있어요.",
                "깃털 하나 드릴까요?",
                "재 속에서 희망을 찾아요."
            ],
            gift: [
                "불멸의 약초.",
                "붉은 보석.",
                "영원히 간직할게요."
            ],
            special: [
                "영원한 불꽃!",
                "부활의 빛!",
                "정화!"
            ]
        },
        lines: {
            normal: "어둠이 깊을수록 불꽃은 더 밝게 타오르는 법이죠.",
            touch_head: "왕관이 뜨거워요.",
            touch_chest: "심장이 불타고 있어요.",
            touch_legs: "날카로운 발톱 조심.",
            touch_special: "당신의 영혼에 꺼지지 않는 열정을 심어드릴게요."
        }
    },
    {
        id: "hero_wukong",
        name: "제천대성 손오공",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 제천대성 손오공",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 제천대성 손오공, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 제천대성 손오공, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 제천대성 손오공, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "돌원숭이의 왕",
            "story": "화과산의 돌에서 태어나 도술을 익히고 천계를 소란스럽게 했던 장난꾸러기 원숭이 왕. 삼장법사를 도와 서역으로 여행을 떠났으며, 여의봉과 근두운을 다루는 무술의 달인이다.",
            "personality": "Mischievous & Heroic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "근질근질하네, 한판 붙자!",
                "근두운~!",
                "천도복숭아 먹고 싶다."
            ],
            interaction: [
                "털 뽑지 마! 분신술 쓴다?",
                "어라? 간지러워!",
                "내 여의봉, 무거울걸?"
            ],
            gift: [
                "바나나? 아니, 복숭아가 좋아!",
                "오! 쓸만해 보이네.",
                "이 형님이 잘 써주지!"
            ],
            special: [
                "여의봉 늘어나라!",
                "분신술!",
                "회오리 바람!"
            ]
        },
        lines: {
            normal: "겁먹지 마! 이 제천대성님이 널 지켜줄 테니까.",
            touch_head: "머리띠 조심해. 조여온단 말이야.",
            touch_chest: "갑옷 튼튼하지? 천계에서 훔... 아니, 얻은 거야.",
            touch_legs: "꼬리 잡지 마!",
            touch_special: "나랑 같이 천계 구경이나 갈까? 옥황상제 수염 좀 뽑으러!"
        }
    },
    {
        id: "rabbit_moon",
        name: "달토끼 루나",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 달토끼 루나",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 달토끼 루나, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 달토끼 루나, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 달토끼 루나, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "달의 약제사",
            "story": "달나라 계수나무 아래에서 불로장생의 약을 찧는 토끼. 하얀 털은 달빛을 받아 빛나며, 떡방아를 찧는 소리가 밤하늘에 울려 퍼진다. 세상의 근심을 잊게 해주는 묘약을 만든다.",
            "personality": "Diligent & Pure"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "쿵덕쿵덕!",
                "절구 찧기 바빠요.",
                "달님이 보고 계셔."
            ],
            interaction: [
                "귀 잡으면 안 돼요.",
                "떡 찌르는 중이에요.",
                "하얀 털 묻어요."
            ],
            gift: [
                "당근 케이크!",
                "새 절구공이.",
                "힘이 솟아요!"
            ],
            special: [
                "떡방아 찍기!",
                "불로장생 약!",
                "달빛 샤워!"
            ]
        },
        lines: {
            normal: "지구는 참 파랗고 예쁘네요. 여기서도 다 보여요.",
            touch_head: "귀가 쫑긋!",
            touch_chest: "폭신폭신해요.",
            touch_legs: "깡충 뛸 준비 완료!",
            touch_special: "당신을 위해 특별히 만든 약과예요. 한 입 드셔보세요."
        }
    },
    {
        id: "peacock_princess",
        name: "공작 공주",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 공작 공주",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 공작 공주, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 공작 공주, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 공작 공주, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "화려한 춤사위",
            "story": "공작 명왕의 가호를 받은 무희. 화려한 깃털 옷을 입고 춤을 추면 세상의 모든 시름이 사라진다. 그녀의 춤은 천상의 신들도 멈추게 만든다.",
            "personality": "Elegant & Captivating"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "우아하게...",
                "아름다움은 죄가 아니죠.",
                "날개 깃을 다듬어야 해요."
            ],
            interaction: [
                "깃털을 함부로 만지면 안 돼요.",
                "춤추는데 방해하지 마세요.",
                "눈이 부신가요?"
            ],
            gift: [
                "보석 장식.",
                "비단 옷감.",
                "아름다워요."
            ],
            special: [
                "공작의 춤!",
                "환상의 날개!",
                "매혹의 시선!"
            ]
        },
        lines: {
            normal: "제 춤을 보고 싶으신가요? 대가는 당신의 마음 하나면 충분해요.",
            touch_head: "머리 장식이 흐트러져요.",
            touch_chest: "가장 화려한 깃털이 있는 곳이죠.",
            touch_legs: "스텝이 꼬이면 안 돼요.",
            touch_special: "이 춤이 끝나면... 저와 단둘이 차 한 잔 어떠세요?"
        }
    },
    {
        id: "miho_baby",
        name: "아기 여우 미호",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/shangrila/creature_kumiho_servant.png", // 임시 플레이스홀더
        evolvesTo: "fox_yokai_sr",
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, cute baby fox girl, fluffy tail, innocent look, Light, 아기 여우 미호",
            "idle": "sitting pose, curious eyes, tilting head",
            "gallery_lv1": "playing with butterfly, cute paws, sunny garden"
        },
        lore: {
            "title": "천년의 시작",
            "story": "훗날 천년 구미호가 될 미호의 어린 시절. 아직 꼬리는 하나뿐이며, 장난치기를 좋아한다. 자신의 잠재력을 모른 채 숲속을 뛰어다닌다.",
            "origin": "무릉도원 깊은 숲",
            "personality": "Playful & Innocent"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["(갸웃거리며 바라본다)", "낑? 낑!", "놀아줘~ 놀아줘~"],
            interaction: ["간지러워!", "내 꼬리 잡지 마~", "헤헤, 재미있다!"],
            gift: ["와아! 이거 뭐야?", "맛있는 냄새!", "고마워, 친구야!"],
            special: ["나도 언젠가 멋진 여우가 될 거야!", "꼬리가 더 생길 것 같은 기분이야!", "으르렁~ 무섭지?"]
        },
        lines: { normal: "캥!" }
    },

    {
        id: "fox_yokai_sr",
        name: "여우요괴 미호",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_fox_yokai_sr.png",
        evolvesTo: "fox_nine_ur",
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 여우요괴 미호",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 여우요괴 미호, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 여우요괴 미호, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 여우요괴 미호, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "둔갑의 귀재",
            "story": "수련을 통해 꼬리가 늘어난 미호. 이제 완벽한 여인의 모습으로 둔갑할 수 있으며, 도술을 부려 사람들을 놀래키는 것을 즐긴다. 아직 인간의 정을 그리워한다.",
            "personality": "Charming & Tricky"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "어떤 모습이 좋아?",
                "심심해... 놀자.",
                "꼬리 숨기기 힘들다."
            ],
            interaction: [
                "진짜 꼬리 찾았어?",
                "간지러워!",
                "변신 풀릴 뻔했잖아."
            ],
            gift: [
                "예쁜 비녀.",
                "맛있는 간.",
                "마음에 들어."
            ],
            special: [
                "둔갑술!",
                "여우불 소환!",
                "홀리기!"
            ]
        },
        lines: {
            normal: "인간 세상은 참 재미있어. 속고 속이는 게 일상이니까.",
            touch_head: "귀 나오면 깜짝 놀랄걸?",
            touch_chest: "두근거리는 게 느껴져?",
            touch_legs: "치마 들추지 마.",
            touch_special: "오늘 밤엔 어떤 꿈을 꾸게 해 줄까? 네가 원하는 건 뭐든지."
        }
    },
    {
        id: "dragon_azure",
        name: "청룡",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 청룡",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 청룡, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 청룡, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 청룡, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "동방의 수호신",
            "story": "사신(四神) 중 하나로 동쪽을 관장하는 푸른 용. 봄과 생명을 상징하며, 천둥과 번개를 다스린다. 위엄 있는 모습으로 악한 기운을 물리친다.",
            "personality": "Majestic & Powerful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "동쪽의 기운이 솟아난다.",
                "천둥 소리가 들리는가.",
                "봄비가 내리리라."
            ],
            interaction: [
                "비늘에 손대지 마라.",
                "전기가 통할 것이다.",
                "물러가라."
            ],
            gift: [
                "푸른 여의주.",
                "맑은 물.",
                "힘이 넘치는군."
            ],
            special: [
                "청룡의 포효!",
                "뇌전 소환!",
                "생명 회복!"
            ]
        },
        lines: {
            normal: "생명이 태동하는 소리가 들린다. 내가 지켜야 할 것들이지.",
            touch_head: "뿔은 하늘을 향한다.",
            touch_chest: "푸른 비늘 갑옷.",
            touch_legs: "발톱은 강철보다 단단하다.",
            touch_special: "나와 함께 비바람을 뚫고 날아오르자. 세상 끝까지."
        }
    },
    {
        id: "tiger_white",
        name: "백호",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 백호",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 백호, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 백호, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 백호, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "서방의 수호신",
            "story": "사신(四神) 중 하나로 서쪽을 관장하는 하얀 호랑이. 가을과 정의를 상징하며, 쇠보다 단단한 발톱으로 악을 심판한다.",
            "personality": "Brave & Righteous"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "어흥!",
                "정의는 승리한다.",
                "바람 냄새가 달라."
            ],
            interaction: [
                "털 고르는 중이다.",
                "발톱 조심해라.",
                "등에 타지 마라."
            ],
            gift: [
                "고기!",
                "황금 갑옷.",
                "든든하군."
            ],
            special: [
                "백호의 발톱!",
                "포효!",
                "심판!"
            ]
        },
        lines: {
            normal: "사악한 자들은 내 눈을 똑바로 쳐다보지 못하지. 네 눈은 맑구나.",
            touch_head: "쓰다듬는 건 허락하지.",
            touch_chest: "강인한 근육.",
            touch_legs: "소리 없이 움직인다.",
            touch_special: "내 등에 타라. 그 누구보다 빠르게 전장을 누비게 해주마."
        }
    },
    {
        id: "bird_vermilion",
        name: "주작",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 주작",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 주작, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 주작, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 주작, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "남방의 수호신",
            "story": "사신(四神) 중 하나로 남쪽을 관장하는 붉은 봉황. 여름과 불꽃을 상징하며, 뜨거운 열기로 부정을 태워 없앤다.",
            "personality": "Passionate & Radiant"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "뜨겁게 타올라라!",
                "여름의 태양처럼.",
                "날개가 아름답지?"
            ],
            interaction: [
                "화상 입는다.",
                "너무 가까이 오지 마.",
                "따뜻하지?"
            ],
            gift: [
                "루비.",
                "태양의 파편.",
                "열정이 솟아나!"
            ],
            special: [
                "주작의 날개!",
                "화염 폭풍!",
                "비상!"
            ]
        },
        lines: {
            normal: "내 불꽃은 오직 악한 자들만 태운다. 너에게는 따뜻한 빛이 될 거야.",
            touch_head: "벼슬이 멋있지?",
            touch_chest: "가슴속에 태양이 있어.",
            touch_legs: "땅에 잘 내려앉지 않아.",
            touch_special: "가장 높은 곳에서 세상을 내려다보자. 나와 함께라면 춥지 않을 거야."
        }
    },
    {
        id: "turtle_black",
        name: "현무",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 현무",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 현무, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 현무, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 현무, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "북방의 수호신",
            "story": "사신(四神) 중 하나로 북쪽을 관장하는 검은 거북과 뱀. 겨울과 지혜를 상징하며, 단단한 등껍질로 어떤 공격도 막아낸다.",
            "personality": "Wise & Steady"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "서두를 것 없다.",
                "현명하게 판단하라.",
                "겨울잠 자고 싶군."
            ],
            interaction: [
                "등껍질은 뚫지 못해.",
                "무겁지 않다.",
                "뱀과 이야기 중이다."
            ],
            gift: [
                "오래된 비급.",
                "검은 보석.",
                "지혜롭구나."
            ],
            special: [
                "현무의 방패!",
                "빙결!",
                "수호의 진!"
            ]
        },
        lines: {
            normal: "빠른 것이 능사는 아니지. 흔들리지 않는 굳건함이 결국 승리한다.",
            touch_head: "딱딱하지.",
            touch_chest: "갑옷 안은 따뜻해.",
            touch_legs: "천천히 걷지만 멈추지 않아.",
            touch_special: "너의 뒤는 내가 맡겠다. 너는 앞만 보고 나아가거라."
        }
    },
    {
        id: "dokkeabi_king",
        name: "황금 방망이 도깨비",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 황금 방망이 도깨비",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 황금 방망이 도깨비, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 황금 방망이 도깨비, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 황금 방망이 도깨비, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "장난기 많은 씨름왕",
            "story": "사람들과 씨름 내기를 좋아하는 도깨비들의 우두머리. 황금 방망이를 휘두르면 금은보화가 쏟아져 나온다. 메밀묵과 술을 매우 좋아한다.",
            "personality": "Boisterous & Strong"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "금 나와라 뚝딱!",
                "씨름 한판 할까?",
                "심심하다!"
            ],
            interaction: [
                "뿔 만지면 아파.",
                "방망이 뺏지 마.",
                "힘이 장사야."
            ],
            gift: [
                "메밀묵!",
                "막걸리.",
                "기분 최고다!"
            ],
            special: [
                "도깨비 방망이!",
                "씨름 기술!",
                "금은보화!"
            ]
        },
        lines: {
            normal: "나랑 씨름해서 이기면 이 방망이 줄게! ...농담이야.",
            touch_head: "뿔이 매력 포인트지.",
            touch_chest: "근육 좀 보라고.",
            touch_legs: "넘어뜨려 봐!",
            touch_special: "오늘 밤 도깨비 터에서 잔치를 열 거야. 너도 와서 한잔해!"
        }
    },
    {
        id: "mountain_tiger",
        name: "산신 호랑이",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_mountain_tiger.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_mountain_tiger.png",
            "joy": "images/creatures/shangrila/creature_mountain_tiger_joy.png",
            "sad": "images/creatures/shangrila/creature_mountain_tiger_sad.png",
            "angry": "images/creatures/shangrila/creature_mountain_tiger_angry.png",
            "skill": "images/creatures/shangrila/creature_mountain_tiger_skill.png",
            "victory": "images/creatures/shangrila/creature_mountain_tiger_victory.png",
            "defeat": "images/creatures/shangrila/creature_mountain_tiger_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_mountain_tiger_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_mountain_tiger_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_mountain_tiger_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 산신 호랑이",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 산신 호랑이, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 산신 호랑이, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 산신 호랑이, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "산의 주인",
            "story": "깊은 산속을 호령하는 영험한 호랑이. 산신의 사자로 불리며, 산에 들어온 사람들의 안전을 지켜준다. 그의 울음소리는 산천을 떨게 한다.",
            "personality": "Commanding & Wild"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "어흥...",
                "날파리가 꼬이는군.",
                "산은 내 구역이다."
            ],
            interaction: [
                "수염 건드리지 마.",
                "깨물어 버린다.",
                "배고프군."
            ],
            gift: [
                "산삼.",
                "멧돼지 고기.",
                "잘 먹겠다."
            ],
            special: [
                "산신의 분노!",
                "호랑이 기운!",
                "포효!"
            ]
        },
        lines: {
            normal: "이 산의 모든 생명이 내 보호 아래 있다. 물론 너도 포함해서 말이지.",
            touch_head: "왕 자가 보이나?",
            touch_chest: "그르릉...",
            touch_legs: "발소리를 죽여라.",
            touch_special: "길을 잃었느냐? 내가 안내해 주마. 내 꼬리를 따라와라."
        }
    },
    {
        id: "ninja_shadow",
        name: "그림자 닌자",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 그림자 닌자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 그림자 닌자, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "어둠 속의 암살자",
            "story": "그림자 속에 숨어 은밀하게 임무를 수행하는 닌자. 발소리를 내지 않으며, 연기처럼 사라지는 둔갑술을 사용한다. 주군에 대한 충성심이 강하다.",
            "personality": "Stealthy & Silent"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "...",
                "(나뭇잎 소리)",
                "임무 대기 중."
            ],
            interaction: [
                "들켰나...",
                "기척을 지워라.",
                "손이 빠르군."
            ],
            gift: [
                "수리검.",
                "비밀 문서.",
                "감사합니다."
            ],
            special: [
                "그림자 분신!",
                "연막탄!",
                "암살!"
            ]
        },
        lines: {
            normal: "그림자는 빛이 있기에 존재합니다. 당신은 저의 빛입니다, 주군.",
            touch_head: "복면을 벗길 순 없습니다.",
            touch_chest: "심장은 차갑게 식혔습니다.",
            touch_legs: "발소리는 내지 않습니다.",
            touch_special: "명령만 내리십시오. 목숨을 바쳐 완수하겠습니다."
        }
    },
    {
        id: "crane_sage",
        name: "구름 위의 학 신선",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 구름 위의 학 신선",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 구름 위의 학 신선, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "장수의 상징",
            "story": "천 년을 산다는 신선들의 학. 구름 위를 날아다니며 신선들을 태우고 다닌다. 고고한 자태와 우아항 날개짓은 보는 이의 마음을 정화한다.",
            "personality": "Noble & Graceful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "구름 위는 평화롭네.",
                "천 년은 찰나일 뿐.",
                "고고하게."
            ],
            interaction: [
                "깃털이 더럽혀지네.",
                "우아하지 못하군.",
                "품위를 지키게."
            ],
            gift: [
                "불로초.",
                "맑은 이슬.",
                "오래 살게나."
            ],
            special: [
                "비상!",
                "학익진!",
                "장수 기원!"
            ]
        },
        lines: {
            normal: "급할수록 돌아가라는 말이 있네. 잠시 구름 위에서 쉬어가는 건 어떤가?",
            touch_head: "붉은 정수리.",
            touch_chest: "하얀 날개.",
            touch_legs: "가늘고 긴 다리.",
            touch_special: "자네도 신선의 도를 닦아보는 게 어떤가? 재능이 보여."
        }
    },
    {
        id: "pears_spirit",
        name: "연꽃 아씨",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 연꽃 아씨",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 연꽃 아씨, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "진흙 속의 고결함",
            "story": "탁한 물에서도 맑고 향기로운 꽃을 피우는 연꽃의 정령. 심청전의 이야기처럼 효심 깊은 영혼이 환생한 것이라 전해진다.",
            "personality": "Pure & Elegant"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "진흙 속에서도 피어나요.",
                "마음을 맑게...",
                "물방울이 또르르."
            ],
            interaction: [
                "잎이 찢어져요.",
                "조심스러워요.",
                "물에 빠질라."
            ],
            gift: [
                "연꽃 씨앗.",
                "연잎 차.",
                "향기로워요."
            ],
            special: [
                "정화의 비!",
                "연꽃 만개!",
                "심청의 기도!"
            ]
        },
        lines: {
            normal: "세상이 아무리 혼탁해도, 당신의 마음만은 언제나 맑게 빛나기를 바랄게요.",
            touch_head: "꽃잎 왕관.",
            touch_chest: "순수한 마음.",
            touch_legs: "뿌리는 깊어요.",
            touch_special: "제 손을 잡으세요. 진흙탕 속에서 당신을 건져 올려드릴게요."
        }
    },
    {
        id: "butterfly_dream",
        name: "장자의 나비",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 장자의 나비",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 장자의 나비, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "호접지몽",
            "story": "내가 나비인지, 나비가 나인지 모를 몽환적인 꿈 속의 나비. 현실과 꿈의 경계를 넘나들며, 사람들에게 깨달음을 준다.",
            "personality": "Dreamy & Philosophical"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "여기가 꿈인가?",
                "너는 누구니?",
                "훨훨 날아가자."
            ],
            interaction: [
                "깨우지 마.",
                "잡았다!",
                "현실은 지루해."
            ],
            gift: [
                "꿈조각.",
                "수면 가루.",
                "몽환적이네."
            ],
            special: [
                "꿈 속으로!",
                "환상!",
                "나비 효과!"
            ]
        },
        lines: {
            normal: "우리가 만난 지금, 이것이 꿈일까요 현실일까요? 사실 그건 중요하지 않아요.",
            touch_head: "더듬이 살랑.",
            touch_chest: "날개 무늬.",
            touch_legs: "가벼운 발걸음.",
            touch_special: "눈을 감아보세요. 더 아름다운 세상으로 안내해 드릴게요."
        }
    },
    {
        id: "flower_fairy",
        name: "꽃의 요정",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 꽃의 요정",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 꽃의 요정, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "사계절의 축복",
            "story": "도원의 꽃밭을 가꾸는 요정. 계절마다 옷의 색이 바뀌며, 그녀가 지나간 자리에는 시들지 않는 꽃이 피어난다. 꿀벌들과 친구처럼 지낸다.",
            "personality": "Bright & Colorful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "꽃이 피었어요!",
                "꿀벌아 안녕?",
                "물 줄 시간이야."
            ],
            interaction: [
                "꽃 꺾지 마세요.",
                "향기 맡아볼래?",
                "간지러워요."
            ],
            gift: [
                "꽃다발.",
                "화분.",
                "예쁘다!"
            ],
            special: [
                "만개!",
                "꽃가루 뿌리기!",
                "광합성!"
            ]
        },
        lines: {
            normal: "당신의 마음에도 예쁜 꽃이 피었으면 좋겠어요. 제가 씨앗을 심어드릴까요?",
            touch_head: "화관.",
            touch_chest: "꽃향기가 나요.",
            touch_legs: "풀잎 구두.",
            touch_special: "저랑 같이 꽃밭을 걸어요. 세상에서 가장 향기로운 산책이 될 거예요."
        }
    },
    {
        id: "ink_spirit",
        name: "먹물 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 먹물 요정",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 먹물 요정, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "검은 흔적의 장난",
            "story": "서예가의 벼루에서 태어난 작은 요정. 온몸이 먹물로 이루어져 있으며, 잠자는 사람의 얼굴에 낙서하는 것을 좋아한다. 글씨를 배우고 싶어 기웃거린다.",
            "personality": "Inky & Mischievous"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "쓱싹쓱싹.",
                "낙서할 곳 없나?",
                "새까맣게!"
            ],
            interaction: [
                "옷에 묻는다!",
                "지워지지 않아.",
                "붓으로 콕콕."
            ],
            gift: [
                "고급 벼루.",
                "화선지.",
                "명필이 될거야."
            ],
            special: [
                "먹물 뿌리기!",
                "낙서 공격!",
                "은신!"
            ]
        },
        lines: {
            normal: "내 몸은 까맣지만 마음은 하얗... 아니, 마음도 좀 까만가? 헤헤.",
            touch_head: "먹물이 뚝뚝.",
            touch_chest: "말랑한 젤리 같아.",
            touch_legs: "발자국 남기기.",
            touch_special: "네 얼굴이 도화지처럼 보여. 안경을 그려줄까, 수염을 그려줄까?"
        }
    }
    ,
    {
        id: "fox_nine_new",
        name: "신생 구미호",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, 신생 구미호",
            "idle": "standing"
        },
        lore: {
            "title": "잠재된 요력",
            "story": "갓 태어난 구미호. 아직 꼬리의 힘을 제대로 다루지 못해 비틀거리지만, 눈빛만은 예사롭지 않다. 전설 속의 대요괴가 될 자질을 가지고 있다.",
            "personality": "Clumsy & Potential"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "아, 넘어질 뻔...",
                "꼬리가 무거워.",
                "더 강해질 거야!"
            ],
            interaction: [
                "귀 잡지 마세요!",
                "아직은 약하지만...",
                "우와아앙!"
            ],
            gift: [
                "우유?",
                "작은 고기.",
                "힘이 나는 것 같아."
            ],
            special: [
                "작은 여우불!",
                "물기!",
                "도망가기!"
            ]
        },
        lines: {
            normal: "저도 언젠가... 언젠가는 전설의 구미호가 될 수 있겠죠? 지켜봐 주세요!",
            touch_head: "쓰다듬어 주시는 건가요?",
            touch_chest: "두근두근해요.",
            touch_legs: "다리에 힘이...",
            touch_special: "저를 믿어주신다면, 반드시 보답하겠습니다!"
        }
    }
    ,
    {
        id: "jade_rabbit",
        name: "옥토끼",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, 옥토끼",
            "idle": "standing"
        },
        lore: {
            "title": "달의 주민",
            "story": "옥처럼 투명하고 고운 털을 가진 토끼. 달의 궁전에서 떡을 찧으며 산다고 전해진다. 거짓말을 하면 털이 검게 변한다는 속설이 있다.",
            "personality": "Pure & Honest"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "거짓말은 안 해요.",
                "달님이 보고 계셔요.",
                "귀 쫑긋."
            ],
            interaction: [
                "털이 투명하죠?",
                "만져봐도 돼요.",
                "간지러워요."
            ],
            gift: [
                "달빛 조각.",
                "별 사탕.",
                "고마워요."
            ],
            special: [
                "옥 구슬 소환!",
                "진실의 눈!",
                "도약!"
            ]
        },
        lines: {
            normal: "제 털이 하얀 이유는 거짓말을 하지 않기 때문이에요. 당신도 솔직한 사람이군요.",
            touch_head: "부드럽죠?",
            touch_chest: "따뜻해요.",
            touch_legs: "높이 뛸 수 있어요.",
            touch_special: "당신의 눈을 보면 알 수 있어요. 참 진실된 분이시네요."
        }
    }
    ,
    {
        id: "yin_yang_fish",
        name: "음양어",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, 음양어",
            "idle": "standing"
        },
        lore: {
            "title": "흐르는 조화",
            "story": "하얀색과 검은색이 절묘하게 섞인 물고기. 물속에서 헤엄칠 때마다 태극 문양을 만들어낸다. 이 물고기를 보면 마음의 평화를 얻는다고 한다.",
            "personality": "Balanced & Flowing"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "흐르는 대로...",
                "균형을 맞춰요.",
                "물결에 몸을 맡겨."
            ],
            interaction: [
                "놀라게 하지 마세요.",
                "조화가 깨져요.",
                "부드럽게..."
            ],
            gift: [
                "맑은 물풀.",
                "동그란 조약돌.",
                "편안하네요."
            ],
            special: [
                "태극 회전!",
                "물의 파동!",
                "명상!"
            ]
        },
        lines: {
            normal: "강함과 부드러움은 둘이 아니에요. 물처럼 흐르다 보면 알게 될 거예요.",
            touch_head: "매끄러워요.",
            touch_chest: "지느러미가 살랑살랑.",
            touch_legs: "다리는 없지만 춤출 수 있죠.",
            touch_special: "마음이 복잡할 땐 저를 보세요. 빙글빙글... 편안해지죠?"
        }
    }
    ,
    {
        id: "cloud_spirit",
        name: "운무 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
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
            "base": "anime style, 운무 정령",
            "idle": "standing"
        },
        lore: {
            "title": "산봉우리의 안개",
            "story": "높은 산봉우리에 머무는 구름과 안개의 정령. 형체가 일정하지 않으며, 바람에 따라 자유롭게 모습을 바꾼다. 신선들이 타고 다니는 름의 일종이다.",
            "personality": "Free & Misty"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "두둥실~",
                "여기가 어디지?",
                "바람 부는 대로~"
            ],
            interaction: [
                "잡을 수 없을걸?",
                "손이 쑥 통과해.",
                "흩어져라~"
            ],
            gift: [
                "비구름.",
                "무지개.",
                "시원해?"
            ],
            special: [
                "안개 숨기!",
                "소나기!",
                "변신!"
            ]
        },
        lines: {
            normal: "나는 어디에도 없고, 어디에나 있어. 자유롭다는 건 참 좋은 거야.",
            touch_head: "몽글몽글.",
            touch_chest: "폭신폭신.",
            touch_legs: "발이 땅에 닿지 않아.",
            touch_special: "나를 타고 싶어? 꽉 잡아! 하늘 높이 올라가 줄게!"
        }
    }
];