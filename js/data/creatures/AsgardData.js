
var ASGARD_CREATURES = [
    {
        id: "wolf_fenrir",
        name: "종말의 늑대 펜리르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Ice", "Beast"],
        ego: "Berserker",
        baseStr: 55, baseInt: 30,
        image: "images/creatures/asgard/creature_wolf_fenrir.png",
        sprites: {
            idle: "images/creatures/asgard/creature_wolf_fenrir.png",
            joy: "images/creatures/asgard/creature_wolf_fenrir_joy.png",
            sad: "images/creatures/asgard/creature_wolf_fenrir_sad.png",
            angry: "images/creatures/asgard/creature_wolf_fenrir_angry.png",
            skill: "images/creatures/asgard/creature_wolf_fenrir_skill.png",
            gallery: {
                "lv1": "images/creatures/asgard/creature_wolf_fenrir_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_wolf_fenrir_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_wolf_fenrir_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Beast, 종말의 늑대 펜리르",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery_lv1: "anime, blue archive style, nikke style, full body, wolf_fenrir, wolf girl, wild grey hair, sharp teeth, wearing torn gothic punk outfit, shackles on wrists and neck, glamorous body, huge breasts, athletic thighs, crouching pose, dark dungeon background",
            gallery_lv2: "anime, blue archive style, nikke style, full body, wolf_fenrir, wolf girl, wild bushy grey hair, glowing yellow eyes, sharp teeth, wearing torn black leather bikini top, micro shorts, broken chains hanging from cuffs, glamorous body, huge breasts, sweaty skin, thick thighs, crouching wild pose, licking lips, looking at viewer like prey",
            gallery_lv3: "anime, blue archive style, nikke style, full body, wolf_fenrir, wolf girl, wolf ears, waging tail, wearing black leather collar, torn clothes, lying on bed, happy expression, heart shaped pupils, blushing, sweat, intimate atmosphere"
        },
        lore: {
            title: "종말의 파괴자",
            story: "로키와 앙그르보다 사이에서 태어난 거대한 늑대. 신들이 그 힘을 두려워하여 글레이프니르로 묶었지만, 끊임없이 사슬을 물어뜯으며 탈출을 노리고 있습니다. 라그나로크 때 해방되어 오딘을 삼킬 운명을 지닌, 억눌린 분노의 화신입니다.",
            personality: "Ferocious & Vengeful"
        },
        relationships: [
            { id: "god_odin", type: "rival", desc: "나를 묶은 장본인. 반드시 삼킨다." }
        ],
        touchLines: {
            idle: [
                "사슬이... 조여온다...",
                "배가 고파... 모든 걸 삼키고 싶어.",
                "신들의 냄새가 나는군."
            ],
            interaction: [
                "가까이 오지 마! 물어뜯길 거야.",
                "으르릉... 내 인내심을 시험하지 마라.",
                "풀어달라고? 하! 거짓말쟁이들."
            ],
            gift: [
                "고기인가? 뼈째 씹어주지.",
                "나쁘지 않군. 잠시 놔두겠다.",
                "더 가져와! 부족해!"
            ],
            special: [
                "크아아앙!",
                "태양마저 삼켜주마!",
                "라그나로크는 내가 만든다!"
            ]
        },
        lines: {
            normal: "이 사슬... 끊어버리겠어!",
            touch_head: "크르릉... 쓰다듬는 건... 딱 한 번만 허락하지.",
            touch_chest: "심장 소리가 거세지는 건... 굶주림 때문이야!",
            touch_chest_reject: "크르르! 함부로 만지지 마!",
            touch_chest_love: "흥... 너한테만 예외를 두는 거야.",
            touch_legs: "발목 사슬은 이미 끊었어. 다음은 네 마음이야.",
            touch_special: "라그나로크의 시작이다!"
        },
        synergy: { ally: [], rival: ["odin"] }
    },
    {
        id: "odin",
        name: "천둥의 신 오딘",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        ego: "Seeker",
        baseStr: 10, baseInt: 10,
        skillId: "odin_skill",
        image: "images/creatures/asgard/creature_odin.png",
        sprites: {
            idle: "images/creatures/asgard/creature_odin.png",
            joy: "images/creatures/asgard/creature_odin_joy.png",
            sad: "images/creatures/asgard/creature_odin_sad.png",
            angry: "images/creatures/asgard/creature_odin_angry.png",
            skill: "images/creatures/asgard/creature_odin_skill.png",
            victory: "images/creatures/asgard/creature_odin_victory.png",
            defeat: "images/creatures/asgard/creature_odin_defeat.png",
            gallery: {
                "lv1": "images/creatures/asgard/creature_odin_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_odin_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_odin_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Wind, Magic, 최고신 오딘",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery_lv1: "anime, blue archive style, nikke style, full body, odin, goddess, long silver hair, eyepatch, golden eye, wearing revealing golden valkyrie armor, white fur cape, thigh highs, glamorous body, huge breasts, wide hips, thick thighs, sitting on golden throne, legs crossed, arrogant expression, looking down at viewer",
            gallery_lv2: "anime, blue archive style, nikke style, full body, odin, goddess, long silver hair, single golden eye, eyepatch, wearing loose golden armor, exposed cleavage, exposed midriff, glamorous body, huge breasts, extremely thick thighs, wide hips, leaning forward, holding gungnir spear, smirking, seductive domineering gaze, throne room background, dynamic angle, dramatic lighting",
            gallery_lv3: "anime, blue archive style, nikke style, full body, solo, odin, goddess, long silver hair, eyepatch, lying on bed, white silk slip, strap slipping off, heart shaped pupils, heavy blush, sweat, mouth open, panting, overwhelmed expression, messy hair, intimate, soft lighting"
        },
        lore: {
            title: "지혜의 대가를 치른 자",
            story: "아홉 세계를 다스리는 북유럽의 최고신. 지혜를 위해 한쪽 눈을 희생하고, 우주의 비밀을 알기 위해 위그드라실에 9일간 목을 매달았다. 냉철하고 계산적이지만, 인정받은 전사에게는 발할라의 문을 연다. 라그나로크에서 펜리르에게 삼켜질 운명.",
            origin: "북유럽 신화 / 아스가르드",
            personality: "Wise & Domineering"
        },
        relationships: [
            { id: "wolf_fenrir", type: "rival", desc: "운명적 숙적. 라그나로크에서 오딘을 삼킬 자." },
            { id: "valkyrie", type: "ally", desc: "충실한 전사. 함께하면 치명타율 증가." }
        ],
        touchLines: {
            idle: [
                "아홉 세계의 지혜가 나를 이끄는군.",
                "라그나로크는 피할 수 없다. 대비해야 해.",
                "내 눈은 모든 것을 지켜보고 있다."
            ],
            interaction: [
                "흠... 그대의 통찰력이 훌륭하군.",
                "내 까마귀들이 새로운 소식을 가져왔다.",
                "지혜를 갈구하는 자인가?"
            ],
            gift: [
                "음, 나쁘지 않군.",
                "미미르의 샘물만큼 가치 있는 것인가?",
                "잘 받아두마."
            ],
            special: [
                "궁니르가 목표를 꿰뚫을 것이다!",
                "신들의 왕의 위엄을 보아라!",
                "모든 것은 예언대로 흘러간다."
            ]
        },
        lines: {
            normal: "지혜를 탐구하는 자만이 진실에 도달할 수 있다.",
            touch_head: "신들의 왕에게 손을 대는가? 무례하군.",
            touch_head_reject: "물러거라. 지금은 사색 중이다.",
            touch_head_love: "후훗, 나의 머리를 쓰다듬을 수 있는 건 그대뿐이군.",
            touch_chest: "궁니르의 창끝은 언제나 적을 향해 있다.",
            touch_chest_reject: "갑옷에 손대지 마라. 전쟁의 흔적이다.",
            touch_chest_love: "나의 심장, 그리고 아홉 세계는 그대의 것이다.",
            touch_legs: "이 발걸음은 라그나로크를 향한 것이다.",
            touch_legs_love: "그대와 함께라면, 종말의 날도 두렵지 않구나."
        },
        synergy: { ally: ["valkyrie"], rival: ["wolf_fenrir"] }
    },
    {
        id: "valkyrie",
        name: "전장의 깃발 브륀힐트",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Wind"],
        ego: "Soldier",
        baseStr: 40, baseInt: 40,
        skillId: "valkyrie_skill",
        image: "images/creatures/asgard/creature_valkyrie.png",
        sprites: {
            idle: "images/creatures/asgard/creature_valkyrie.png",
            joy: "images/creatures/asgard/creature_valkyrie_joy.png",
            sad: "images/creatures/asgard/creature_valkyrie_sad.png",
            angry: "images/creatures/asgard/creature_valkyrie_angry.png",
            skill: "images/creatures/asgard/creature_valkyrie_skill.png",
            victory: "images/creatures/asgard/creature_valkyrie_victory.png",
            defeat: "images/creatures/asgard/creature_valkyrie_defeat.png",
            gallery: {
                "lv1": "images/creatures/asgard/creature_valkyrie_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_valkyrie_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_valkyrie_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime, full body, wide angle, valkyrie brunhilde, goddess of war, long silver hair, winged headpiece, silver and white armor, holding spear and flag, soft lighting, bloom, shiny skin, sweat, alluring body curves, massive breasts, thick thighs, heroic but seductive pose, masterpiece, best quality, consistent with freya style",
            idle: "anime, full body, wide angle, valkyrie brunhilde, goddess of war, long silver hair, winged headpiece, silver and white armor, holding spear and flag, soft lighting, bloom, shiny skin, sweat, alluring body curves, masterpiece, best quality, consistent with freya style, standing pose, confident, neutral expression, subtle breathing",
            joy: "anime, full body, wide angle, valkyrie brunhilde, goddess of war, long silver hair, winged headpiece, silver and white armor, soft lighting, bloom, shiny skin, sweat, alluring body curves, masterpiece, best quality, consistent with freya style, smiling brightly, blushing, waving hand, happy eyes, petals falling, radiant atmosphere",
            sad: "anime, full body, wide angle, valkyrie brunhilde, goddess of war, long silver hair, winged headpiece, silver and white armor, soft lighting, bloom, shiny skin, sweat, alluring body curves, masterpiece, best quality, consistent with freya style, sad expression, looking down, tears, rain background, gloomy atmosphere, hugging self",
            angry: "anime, full body, wide angle, valkyrie brunhilde, goddess of war, long silver hair, winged headpiece, silver and white armor, holding spear, soft lighting, bloom, shiny skin, sweat, alluring body curves, masterpiece, best quality, consistent with freya style, angry shouting, glowing eyes, battle stance, pointing spear at enemy, dynamic wind effects",
            skill: "anime, full body, wide angle, valkyrie brunhilde, goddess of war, long silver hair, winged headpiece, silver and white armor, holding spear, soft lighting, bloom, shiny skin, sweat, alluring body curves, masterpiece, best quality, consistent with freya style, unleashing ultimate move, flying in sky, holy light explosion, dynamic angle, shouting command, cinematic",
            victory: "anime, full body, wide angle, valkyrie brunhilde, goddess of war, long silver hair, winged headpiece, silver and white armor, holding flag and spear, soft lighting, bloom, shiny skin, sweat, alluring body curves, masterpiece, best quality, consistent with freya style, standing proudly on cliff edge, planting flag firmly, chest puffed out, triumphant smile, sunset background",
            defeat: "anime, full body, wide angle, valkyrie brunhilde, goddess of war, long silver hair, winged headpiece, silver and white armor, holding damaged spear, soft lighting, bloom, shiny skin, sweat, alluring body curves, masterpiece, best quality, consistent with freya style, armor damaged, kneeling on ground, exhausted, heavy sweat, blushing, panting, looking at viewer with teary eyes",
            gallery_lv1: "anime, full body, wide angle, valkyrie brunhilde, goddess of war, long silver hair, winged headpiece, removing armor, wearing white leotard underneath, soft lighting, bloom, shiny skin, sweat, alluring body curves, massive breasts, thick thighs, masterpiece, best quality, consistent with freya style, sitting on bench in training grounds, polishing spear, wiping sweat, sunset light, looking at player with gentle smile, romantic atmosphere",
            gallery_lv2: "anime, full body, wide angle, valkyrie brunhilde, goddess of war, long silver hair, winged headpiece, inside tent, unbuckling armor chestplate, wearing white leotard underneath, sweaty skin, biting lip, flushed face, alluring gaze, alluring body curves, massive breasts, thick thighs, masterpiece, best quality, consistent with freya style, intimate atmosphere",
            gallery_lv3: "anime, full body, wide angle, valkyrie brunhilde, goddess of war, long silver hair, winged headpiece, wearing only white shirt, wet skin, sparks of lightning, heavy blush, heart shaped pupils, panting, legs spread, overwhelming pleasure, electric aura, alluring body curves, massive breasts, thick thighs, masterpiece, best quality, consistent with freya style, lying on bed of white feathers, afterglow"
        },
        lore: {
            title: "섬광의 선별자",
            story: "오딘의 명을 받아 전장에서 가장 용맹한 전사를 발할라로 인도하는 전쟁 처녀. 냉철하고 무자비하게 보이지만, 선택받지 못한 자들을 위해 몰래 눈물 흘리는 섬세한 마음의 소유자.",
            origin: "북유럽 신화 / 아스가르드",
            personality: "Loyal & Strict"
        },
        relationships: [
            { id: "odin", type: "master", desc: "주군. 절대적 충성." }
        ],
        touchLines: {
            idle: [
                "전장의 영혼들을 인도해야 합니다.",
                "오딘 님의 뜻을 따를 뿐입니다.",
                "검을 닦고 있었습니다."
            ],
            interaction: [
                "출격 명령입니까?",
                "전 칠 준비가 되었습니다.",
                "당신의 용기는 칭찬할 만하군요."
            ],
            gift: [
                "이런 귀한 것을... 감사합니다.",
                "다음 전투에 도움이 되겠군요.",
                "소중히 간직하겠습니다."
            ],
            special: [
                "발할라의 문이 열립니다!",
                "영광스러운 승리를 위하여!",
                "전사의 혼이여, 일어나라!"
            ]
        },
        synergy: { ally: ["odin"], rival: [] }
    },
    {
        id: "thor",
        name: "천둥의 신 토르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Wind", "Light", "Warrior"],
        ego: "Warlord",
        baseStr: 60, baseInt: 20,
        skillId: "thor_skill",
        image: "images/creatures/asgard/creature_thor.png",
        sprites: {
            idle: "images/creatures/asgard/creature_thor.png",
            joy: "images/creatures/asgard/creature_thor_joy.png",
            sad: "images/creatures/asgard/creature_thor_sad.png",
            angry: "images/creatures/asgard/creature_thor_angry.png",
            skill: "images/creatures/asgard/creature_thor_skill.png",
            gallery: {
                "lv1": "images/creatures/asgard/creature_thor_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_thor_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_thor_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Wind, Light, Warrior, 천둥의 신 토르",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery_lv1: "anime, blue archive style, nikke style, full body, thor, thunder goddess, fit athletic body (not bodybuilding), blonde hair in ponytail, blue eyes, wearing casual medieval tunic with shoulder off, holding large wooden beer mug, frothy beer, tavern background, warm lighting, cheerful laughing expression, blushing, high detail masterpiece, dating atmosphere",
            gallery_lv2: "anime, blue archive style, nikke style, full body, thor, thunder goddess, blonde hair, messy, wearing damaged battle armor, exposed skin, cleavage, drinking beer from large mug, flushed face, drunk, happy, tavern background",
            gallery_lv3: "anime, blue archive style, nikke style, full body, solo, thor, thunder goddess, blonde hair, lying on bed, wearing only white shirt, wet skin, sparks of lightning, heavy blush, heart shaped pupils, panting, legs spread, overwhelming pleasure, electric aura"
        },
        lore: {
            title: "아스가르드의 수호자",
            story: "천둥과 번개를 다루는 오딘의 아들(혹은 딸). 묠니르를 휘두르며 거인들로부터 아스가르드를 지킵니다. 단순하고 호쾌한 성격이며, 술과 전투를 사랑합니다.",
            origin: "북유럽 신화 / 아스가르드",
            personality: "Energetic"
        },
        relationships: [
            { id: "loki", type: "friend", desc: "골치 아픈 의형제. 배신해도 미워할 수 없다." },
            { id: "wolf_fenrir", type: "rival", desc: "위협적인 존재." }
        ],
        touchLines: {
            idle: [
                "술이 부족해! 더 가져와!",
                "거인 놈들, 내 망치 맛 좀 볼테냐!",
                "오늘 날씨 참 좋군. 번개 치기 딱 좋은 날이야."
            ],
            interaction: [
                "하하하! 힘겨루기 한 판 할까?",
                "내 근육 멋지지 않나?",
                "묠니르는 아무나 들 수 없다고!"
            ],
            gift: [
                "오! 이거 쓸만한데?",
                "하하하! 훌륭해! 한 잔 하자고!",
                "마음 조오타!"
            ],
            special: [
                "천둥이여, 울부짖어라!",
                "박살을 내주마!",
                "내가 바로 아스가르드의 힘이다!"
            ]
        },
        lines: { normal: "번개여, 내 부름에 답하라!" },
        synergy: { ally: ["loki"], rival: ["wolf_fenrir"] }
    },
    {
        id: "loki",
        name: "교활한 신 로키",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Magic", "Trickster"],
        ego: "Nihilist",
        baseStr: 25, baseInt: 65,
        skillId: "loki_skill",
        image: "images/creatures/asgard/creature_loki.png",
        sprites: {
            idle: "images/creatures/asgard/creature_loki.png",
            joy: "images/creatures/asgard/creature_loki_joy.png",
            sad: "images/creatures/asgard/creature_loki_sad.png",
            angry: "images/creatures/asgard/creature_loki_angry.png",
            skill: "images/creatures/asgard/creature_loki_skill.png",
            gallery: {
                "lv1": "images/creatures/asgard/creature_loki_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_loki_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_loki_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Magic, Trickster, 교활한 신 로키",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery_lv1: "anime, blue archive style, nikke style, full body, loki, trickster goddess, green hair, mischievous smile, sitting on floating magic staff, wearing jester-inspired mini dress, thigh highs, magical particles, playful pose",
            gallery_lv2: "anime, blue archive style, nikke style, full body, loki, trickster goddess, green hair, tangled in magical ropes, self-inflicted bondange, winking, tongue out, teasing expression, wearing sheer bodysuit, exposed skin, funny but sexy situation",
            gallery_lv3: "anime, blue archive style, nikke style, full body, solo, loki, trickster goddess, green hair, lying down, defeated, heart shaped pupils, heavy blush, drooling, submission, wearing torn clothes, messy, overwhelmed with pleasure"
        },
        lore: {
            title: "변신과 속임수의 달인",
            story: "신들의 말썽꾸러기이자 해결사. 거인의 피를 이어받았으며, 변신술에 능합니다. 오딘과 의형제를 맺었지만, 결국 신들을 배신하고 라그나로크를 일으킵니다.",
            origin: "북유럽 신화 / 아스가르드",
            personality: "Mischievous"
        },
        relationships: [
            { id: "thor", type: "friend", desc: "힘만 센 멍청이. 놀리는 재미가 있다." },
            { id: "odin", type: "rival", desc: "나를 인정하지 않는 늙은이." }
        ],
        touchLines: {
            idle: [
                "심심한데... 누구 골탕 먹일 사람 없나?",
                "변신술 보여줄까? 아, 깜짝 놀랄걸.",
                "오딘 그 늙은이는 너무 진지해."
            ],
            interaction: [
                "어라? 속았네? 하하하!",
                "방심하면 곤란하지.",
                "내가 뭘 꾸미고 있는지 궁금해?"
            ],
            gift: [
                "오호, 뇌물인가? 일단 받아주지.",
                "이걸로 무슨 장난을 칠까...",
                "센스 있는데? 맘에 들어."
            ],
            special: [
                "속임수의 끝을 보여주지!",
                "혼돈을 즐겨라!",
                "네 뒤야, 하하하!"
            ]
        },
        lines: { normal: "재미있는 장난을 쳐볼까?" },
        synergy: { ally: ["thor"], rival: ["odin"] }
    },
    {
        id: "freya",
        name: "미의 여신 프레이야",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_freya.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_freya.png",
            "joy": "images/creatures/asgard/creature_freya_joy.png",
            "sad": "images/creatures/asgard/creature_freya_sad.png",
            "angry": "images/creatures/asgard/creature_freya_angry.png",
            "skill": "images/creatures/asgard/creature_freya_skill.png",
            "victory": "images/creatures/asgard/creature_freya_victory.png",
            "defeat": "images/creatures/asgard/creature_freya_defeat.png",
            "gallery": {
                "lv1": "images/creatures/asgard/creature_freya_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_freya_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_freya_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Undead, 죽음의 여신 헬",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery_lv1: "anime, full body, freya, goddess of beauty, long pink hair, white dress with gold armor, soft lighting, solo, lying on stomach on bed, looking back at viewer, dress riding up, flushed face, biting lip, alluring pose, masterpiece, best quality, consistent with original image style",
            gallery_lv2: "anime, full body, freya, goddess of beauty, long pink hair, white dress with gold armor, soft lighting, solo, sitting on bed edge, untying ribbon of dress, shy expression, blushing heavy, looking up at viewer, anticipation, masterpiece, best quality, consistent with original image style",
            gallery_lv3: "anime, full body, wide angle, freya, goddess of beauty, long pink hair, white dress with gold armor, soft lighting, solo, waking up on huge bed, stretching arms, heart shaped pupils, heavy blush, euphoric expression, afterglow, clothes disheveled and slipping off, messy hair, sweat, silk sheets, soft sunlight, alluring curves, masterpiece, best quality, consistent with original image style"
        },
        lore: {
            title: "니플헤임의 지배자",
            story: "오딘에 의해 니플헤임으로 추방당한 로키의 딸. 반은 아름다운 여인, 반은 썩어가는 시체의 모습을 하고 있었으나, 이곳에서는 아름다운 모습으로 현현했습니다. 죽은 자들을 다스리며 라그나로크를 기다립니다.",
            personality: "Cold"
        },
        relationships: [],
        touchLines: {
            idle: [
                "죽음은 끝이 아니야. 시작일 뿐...",
                "니플헤임은 고요하고 평온해.",
                "살아있는 자들은 시끄러워."
            ],
            interaction: [
                "흥... 감히 나를 만지다니. 용기는 인정하지.",
                "이 차가운 손길이 두렵지 않아?",
                "생명의 온기... 얼마만인지 기억도 안 나."
            ],
            gift: [
                "선물? ...고맙다. 오래간만에 받아보네.",
                "이런 걸 나한테 줘도 돼? 아무도 안 주던데.",
                "...따뜻하군. 네 마음이."
            ],
            special: [
                "라그나로크가 다가온다!",
                "죽음의 여신이 너를 부른다.",
                "니플헤임이 너를 환영한다..."
            ]
        },
        lines: {
            normal: "죽음은 끝이 아니야. 새로운 시작일 뿐.",
            touch_head: "머리를... 쓰다듬는 건가? ...싫지 않아.",
            touch_chest: "이 차가운 심장도 네게는 뛰는 것 같아.",
            touch_legs: "발까지 만지다니... 대담하군.",
            touch_special: "너와 함께라면, 니플헤임도 따뜻해질 수 있을까..."
        }
    }
    ,
    {
        id: "freya",
        name: "여신 프레이야",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_freya.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_freya_idle.png",
            "joy": "images/creatures/asgard/creature_freya_joy.png",
            "sad": "images/creatures/asgard/creature_freya_sad.png",
            "angry": "images/creatures/asgard/creature_freya_angry.png",
            "skill": "images/creatures/asgard/creature_freya_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, freya goddess, long pink hair, white dress with gold armor, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style",
            "idle": "anime, blue archive style, nikke style, full body, freya goddess, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing elegantly, warm smile",
            "joy": "anime, blue archive style, nikke style, full body, freya goddess, shiny skin, bloom, masterpiece, best quality, consistent with freya style, laughing, flowers overlapping, radiant",
            "sad": "anime, blue archive style, nikke style, full body, freya goddess, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, shedding golden tears, sorrowful",
            "angry": "anime, blue archive style, nikke style, full body, freya goddess, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, commanding aura, battle stance, glowing eyes",
            "skill": "anime, full body, wide angle, freya goddess, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, blessing magic, golden light effects"
        },
        lore: {
            title: "사랑과 전쟁의 여신",
            story: "바니르 신 출신으로 아스가르드에서 가장 아름다운 여신입니다. 사랑과 풍요를 관장하지만, 동시에 전사들의 영혼을 거두는 발키리의 수장이기도 합니다. 그녀의 눈물은 황금이 되어 땅에 스며듭니다.",
            personality: "Alluring & Noble"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "아름다움은 가장 강력한 무기죠.",
                "제 목걸이 브리싱가멘, 예쁘지 않나요?",
                "사랑도 전쟁처럼 치열하답니다."
            ],
            interaction: [
                "어머, 저에게 반하셨나요?",
                "부드럽게 대해주세요.",
                "당신의 마음, 제가 가져가도 될까요?"
            ],
            gift: [
                "어머나, 아름다워라.",
                "저를 위한 선물인가요? 기뻐요.",
                "당신의 정성을 생각해서 받을게요."
            ],
            special: [
                "사랑의 포로가 되세요!",
                "황금 눈물의 비를 내려드리죠.",
                "저항할 수 없을 거예요."
            ]
        },
        lines: {
            normal: "사랑과 전쟁, 둘 다 제가 관장하죠.",
            touch_head: "머리결이 흐트러지잖아요.",
            touch_chest: "어머, 대담하시네요.",
            touch_legs: "제 다리가 예쁜가요?",
            touch_special: "당신이라면 허락해 드릴 수도..."
        }
    }
    ,
    {
        id: "nordic_cat_freya",
        name: "프레이야의 고양이",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_nordic_cat_freya.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_nordic_cat_freya.png",
            "joy": "images/creatures/asgard/creature_nordic_cat_freya.png", // Fallback
            "sad": "images/creatures/asgard/creature_nordic_cat_freya.png", // Fallback
            "angry": "images/creatures/asgard/creature_nordic_cat_freya.png", // Fallback
            "skill": "images/creatures/asgard/creature_nordic_cat_freya.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 프레이야의 고양이",
            "idle": "standing"
        },
        lore: {
            title: "프레이야의 전차 끄는 고양이",
            story: "여신 프레이야의 전차를 끄는 거대한 노르웨이 숲 고양이입니다. 덩치는 크지만 여신 앞에서는 애교 많은 평범한 고양이처럼 굽니다.",
            personality: "Loyal & Cute"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "야옹~",
                "그르릉...",
                "(꼬리를 살랑거린다)"
            ],
            interaction: [
                "야옹! (비비적거린다)",
                "하악! (깜짝 놀란다)",
                "(배를 뒤집어 보인다)"
            ],
            gift: [
                "야옹~ (좋아하는 눈치다)",
                "(냄새를 맡아본다)",
                "골골골..."
            ],
            special: [
                "캬아앙!",
                "(날카로운 발톱을 세운다)",
                "야옹!!!"
            ]
        },
        lines: {
            normal: "야옹~",
            touch_head: "골골골...",
            touch_chest: "야옹?",
            touch_legs: "(다리에 매달린다)"
        }
    }
    ,
    {
        id: "heimdall_horn_spirit",
        name: "헤임달의 뿔 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_heimdall_horn_spirit.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_heimdall_horn_spirit.png",
            "joy": "images/creatures/asgard/creature_heimdall_horn_spirit_joy.png",
            "sad": "images/creatures/asgard/creature_heimdall_horn_spirit_sad.png",
            "angry": "images/creatures/asgard/creature_heimdall_horn_spirit_angry.png",
            "skill": "images/creatures/asgard/creature_heimdall_horn_spirit_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, horn spirit girl, blond hair, glowing aura, holding gjallarhorn, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style",
            "idle": "anime, blue archive style, nikke style, full body, horn spirit girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, listening intently, floating",
            "joy": "anime, blue archive style, nikke style, full body, horn spirit girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, cheerful smile, blowing horn lightly",
            "sad": "anime, blue archive style, nikke style, full body, horn spirit girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, weeping, horn dropped",
            "angry": "anime, blue archive style, nikke style, full body, horn spirit girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, shouting warning, soundwaves",
            "skill": "anime, full body, wide angle, horn spirit girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, blowing giant horn, sonic boom"
        },
        lore: {
            title: "걀라르호른의 정령",
            story: "헤임달이 라그나로크를 알릴 때 부는 뿔피리, 걀라르호른에 깃든 정령입니다. 작은 소리도 놓치지 않고 듣는 예민한 청각을 지녔습니다.",
            personality: "Alert"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "무슨 소리가 들리지 않으십니까?",
                "경계 태세! 적이 올지도 모릅니다.",
                "바람 소리조차 놓치지 않습니다."
            ],
            interaction: [
                "쉿! 조용히 하십시오.",
                "귀를 기울여 보세요.",
                "모든 신호는 제가 감지합니다."
            ],
            gift: [
                "감사합니다. 잘 간직하겠습니다.",
                "오, 소리가 맑은 물건이군요.",
                "경계 근무에 도움이 되겠군요."
            ],
            special: [
                "모두 들어라! 적이 나타났다!",
                "빠아아앙!!! (경적 소리)",
                "비상! 비상!"
            ]
        },
        lines: {
            normal: "경계를 늦추지 마십시오.",
            touch_head: "쉿, 집중하는 중입니다.",
            touch_chest: "이 뿔은 라그나로크를 위해 존재합니다.",
            touch_legs: "항상 준비되어 있습니다.",
            touch_special: "마지막 때가 오면, 제가 가장 먼저 알릴 것입니다."
        }
    }
    ,
    {
        id: "mimir_spirit",
        name: "미미르의 지혜 정령",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_mimir_spirit.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_mimir_spirit.png",
            "joy": "images/creatures/asgard/creature_mimir_spirit_joy.png",
            "sad": "images/creatures/asgard/creature_mimir_spirit_sad.png",
            "angry": "images/creatures/asgard/creature_mimir_spirit_angry.png",
            "skill": "images/creatures/asgard/creature_mimir_spirit_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, water spirit girl, blue translucent skin, knowledgeable look, holding scroll, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style",
            "idle": "anime, blue archive style, nikke style, full body, water spirit girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, reading ancient text, floating in water",
            "joy": "anime, blue archive style, nikke style, full body, water spirit girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, enlightened smile, glowing rune",
            "sad": "anime, blue archive style, nikke style, full body, water spirit girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, troubled expression, scroll closed",
            "angry": "anime, blue archive style, nikke style, full body, water spirit girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, strict teacher look, pointing finger",
            "skill": "anime, full body, wide angle, water spirit girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, unleashing knowledge, magic circle"
        },
        lore: {
            title: "지혜의 샘 정령",
            story: "지혜의 샘 미미르의 머리에서 피어난 정령입니다. 세상의 모든 지식을 알고 있으며, 오딘조차 조언을 구하러 옵니다.",
            personality: "Wise"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "지혜를 원하느냐?",
                "세상의 비밀은 물 속에 있지.",
                "알고 싶은 것이 많구나."
            ],
            interaction: [
                "흐음... 흥미로운 영혼이군.",
                "질문이 있는가?",
                "생각에 잠기게 내버려 둬라."
            ],
            gift: [
                "지혜의 대가인가?",
                "좋은 선물이군. 기억해두마.",
                "미미르 님의 샘에 바치겠다."
            ],
            special: [
                "진실을 마주하라!",
                "지식의 힘을 보여주지.",
                "모든 것은 기록되어 있다."
            ]
        },
        lines: {
            normal: "지혜는 고통 속에서 얻는 법이다.",
            touch_head: "머리를 식히는 것도 좋지.",
            touch_chest: "내면의 목소리를 들어라.",
            touch_legs: "흐르는 물처럼 유연하게.",
            touch_special: "눈을 뜨면 새로운 세계가 보일 것이다."
        }
    }
    ,
    {
        id: "muninn_crow",
        name: "까마귀 무닌",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_muninn_crow.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_muninn_crow.png",
            "joy": "images/creatures/asgard/creature_muninn_crow_joy.png",
            "sad": "images/creatures/asgard/creature_muninn_crow_sad.png",
            "angry": "images/creatures/asgard/creature_muninn_crow_angry.png",
            "skill": "images/creatures/asgard/creature_muninn_crow_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, crow girl, black feathers, gothic lolita, memory orb, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style",
            "idle": "anime, blue archive style, nikke style, full body, crow girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, sitting on branch, observing",
            "joy": "anime, blue archive style, nikke style, full body, crow girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, faint smile, holding shiny object",
            "sad": "anime, blue archive style, nikke style, full body, crow girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, looking away, rainy mood",
            "angry": "anime, blue archive style, nikke style, full body, crow girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, glare, feathers ruffling",
            "skill": "anime, full body, wide angle, crow girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, memory flash, psychic wave"
        },
        lore: {
            title: "기억의 까마귀",
            story: "오딘의 어깨에 앉아 세상의 정보를 모으는 두 까마귀 중 하나인 무닌(기억)입니다. 후긴(생각)보다 과묵하며 과거의 일들을 잊지 않고 기억합니다.",
            personality: "Quiet & Observant"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "과거는 잊혀지지 않아...",
                "깍... 깍...",
                "모든 것을 기억한다."
            ],
            interaction: [
                "너의 기억... 맛이 어떠려나.",
                "까아악! (날개를 퍼덕인다)",
                "오딘 님께 보고해야 해."
            ],
            gift: [
                "반짝이는군... 까악.",
                "기억해 두겠다.",
                "오딘 님을 위한 것인가?"
            ],
            special: [
                "잊혀진 기억이여!",
                "과거의 그림자가 덮친다!",
                "까아아악!!"
            ]
        },
        lines: {
            normal: "기억은 사라지지 않는다.",
            touch_head: "조심해, 부리로 쪼아버릴 테다.",
            touch_chest: "검은 깃털에 비밀이 숨어있지.",
            touch_legs: "날아갈 준비는 언제나 되어있다.",
            touch_special: "네 모든 과거를 내가 알고 있다..."
        }
    }
    ,
    {
        id: "ratatoskr_squirrel",
        name: "다람쥐 라타토스크",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_ratatoskr_squirrel.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_ratatoskr_squirrel.png",
            "joy": "images/creatures/asgard/creature_ratatoskr_squirrel_joy.png",
            "sad": "images/creatures/asgard/creature_ratatoskr_squirrel_sad.png",
            "angry": "images/creatures/asgard/creature_ratatoskr_squirrel_angry.png",
            "skill": "images/creatures/asgard/creature_ratatoskr_squirrel_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, squirrel girl, bushy tail, messenger bag, climbing tree, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style",
            "idle": "anime, blue archive style, nikke style, full body, squirrel girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, eating acorn, looking around",
            "joy": "anime, blue archive style, nikke style, full body, squirrel girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, laughing, jumping high",
            "sad": "anime, blue archive style, nikke style, full body, squirrel girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, ears drooping, dropping acorn",
            "angry": "anime, blue archive style, nikke style, full body, squirrel girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, puffing cheeks, throwing nuts",
            "skill": "anime, full body, wide angle, squirrel girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, speed dash, creating rumors"
        },
        lore: {
            title: "세계수의 메신저",
            story: "이그드라실 위아래를 오르내리며 독수리와 니드호그 사이의 말을 전하는 다람쥐입니다. 가끔은 없는 말을 지어내어 둘 사이를 이간질하는 장난꾸러기입니다.",
            personality: "Mischievous & Fast"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "니드호그 그 녀석이 뭐라고 했는지 알아?",
                "독수리 아저씨는 너무 꼰대라니까!",
                "빨리빨리! 바쁘다 바빠!"
            ],
            interaction: [
                "헤헤, 재밌는 얘기 해줄까?",
                "간지러워! 그만해!",
                "나 잡을 수 있으면 잡아봐~"
            ],
            gift: [
                "도토리? 아니네? 그래도 좋아!",
                "오오! 이거 진귀한 건데?",
                "헤헤, 고마워! 나중에 비밀 하나 알려줄게."
            ],
            special: [
                "이간질 시작이다!",
                "싸워라! 싸워라!",
                "세계수를 타고 슝~!"
            ]
        },
        lines: {
            normal: "세상에서 제일 빠른 건 바로 나!",
            touch_head: "귀는 만지지 마! 예민하다구.",
            touch_chest: "털 고르는 중이야.",
            touch_legs: "내 발은 보이지도 않을걸?",
            touch_special: "니드호그랑 독수리랑 싸우는 거 구경할래?"
        }
    }
    ,
    {
        id: "shieldmaiden_iron",
        name: "강철의 방패처녀",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_shieldmaiden_iron.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_shieldmaiden_iron.png",
            "joy": "images/creatures/asgard/creature_shieldmaiden_iron_joy.png",
            "sad": "images/creatures/asgard/creature_shieldmaiden_iron_sad.png",
            "angry": "images/creatures/asgard/creature_shieldmaiden_iron_angry.png",
            "skill": "images/creatures/asgard/creature_shieldmaiden_iron_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, shield maiden, heavy iron armor, tower shield, blonde braid, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style",
            "idle": "anime, blue archive style, nikke style, full body, shield maiden, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, defensive stance, holding ground",
            "joy": "anime, blue archive style, nikke style, full body, shield maiden, shiny skin, bloom, masterpiece, best quality, consistent with freya style, proud smile, raising shield",
            "sad": "anime, blue archive style, nikke style, full body, shield maiden, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, exhausted, leaning on shield",
            "angry": "anime, blue archive style, nikke style, full body, shield maiden, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, shield bash preparation, war cry",
            "skill": "anime, full body, wide angle, shield maiden, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, iron wall defense, magical barrier"
        },
        lore: {
            title: "강철의 방패 처녀",
            story: "발할라의 연회장이 아닌, 최전선에서 방패벽을 형성하는 강철 같은 여전사입니다. 그녀의 방패는 어떤 공격도 막아낸다고 전해집니다.",
            personality: "Stalwart"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "방패 벽을 유지하라!",
                "발할라가 우리를 기다린다.",
                "두려움은 없다."
            ],
            interaction: [
                "훈련하시겠습니까?",
                "방패는 나의 자존심입니다.",
                "단단히 무장하십시오."
            ],
            gift: [
                "전사에게 어울리는 선물이군요.",
                "감사합니다. 잘 쓰겠습니다.",
                "승리를 위하여."
            ],
            special: [
                "철벽 방어!",
                "뚫을 수 없을 것이다!",
                "방패로 밀어버려라!"
            ]
        },
        lines: {
            normal: "나의 방패는 뚫리지 않는다.",
            touch_head: "투구는 전사의 명예입니다.",
            touch_chest: "갑옷의 흠집은 훈장과도 같죠.",
            touch_legs: "대지 위에 굳건히 서겠습니다.",
            touch_special: "당신을 위해서라면 이 방패를 들겠습니다."
        }
    }
    ,
    {
        id: "sleipnir_foal",
        name: "슬레이프니르 망아지",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_sleipnir_foal.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_sleipnir_foal.png",
            "joy": "images/creatures/asgard/creature_sleipnir_foal_joy.png",
            "sad": "images/creatures/asgard/creature_sleipnir_foal_sad.png",
            "angry": "images/creatures/asgard/creature_sleipnir_foal_angry.png",
            "skill": "images/creatures/asgard/creature_sleipnir_foal_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, sleek eight-legged magical foal, silver mane, glowing blue eyes, mystical runes on fur, soft lighting, bloom, shiny skin, masterpiece, best quality, consistent with freya style",
            "idle": "anime, blue archive style, nikke style, full body, sleek eight-legged magical foal, shiny skin, bloom, masterpiece, best quality, consistent with freya style, playful pose, trotting",
            "joy": "anime, blue archive style, nikke style, full body, sleek eight-legged magical foal, shiny skin, masterpiece, best quality, consistent with freya style, neighing happily, jumping",
            "sad": "anime, blue archive style, nikke style, full body, sleek eight-legged magical foal, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, drooping head, ears back",
            "angry": "anime, blue archive style, nikke style, full body, sleek eight-legged magical foal, shiny skin, sweat, masterpiece, best quality, consistent with freya style, stomping eight hooves, snorting",
            "skill": "anime, full body, wide angle, sleek eight-legged magical foal, dynamic angle, shiny skin, masterpiece, best quality, consistent with freya style, running on air, leaving light trail"
        },
        lore: {
            title: "팔다리 망아지",
            story: "오딘의 명마 슬레이프니르의 어린 시절 모습입니다. 다리가 8개라 남들보다 두 배로 빨리 달릴 수 있으며, 하늘과 바다를 걷는 능력을 잠재하고 있습니다.",
            personality: "Energetic & Playful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "히힝~!",
                "타닥타닥 (발이 8개라 소리가 요란하다)",
                "달리고 싶어! 몸이 근질거려!"
            ],
            interaction: [
                "푸르르... (코를 비빈다)",
                "히이잉! (앞발을 든다)",
                "(등을 내어준다)"
            ],
            gift: [
                "당근? 사과? 히힝!",
                "(맛있게 먹는다)",
                "기운이 넘쳐!"
            ],
            special: [
                "빛의 속도로!",
                "하늘을 날아보자!",
                "히이이잉!!"
            ]
        },
        lines: {
            normal: "히힝! (어디든 갈 수 있어!)",
            touch_head: "푸르르... (기분 좋아하는 듯하다)",
            touch_chest: "(탄탄한 근육이 느껴진다)",
            touch_legs: "다리가 8개라 더 빠르지!",
            touch_special: "언젠가 오딘 님을 태우고 달릴 거야!"
        }
    },
    {
        id: "ulfhednar_wolf",
        name: "울프헤드나르 늑대",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_ulfhednar_wolf.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_ulfhednar_wolf.png",
            "joy": "images/creatures/asgard/creature_ulfhednar_wolf_joy.png",
            "sad": "images/creatures/asgard/creature_ulfhednar_wolf_sad.png",
            "angry": "images/creatures/asgard/creature_ulfhednar_wolf_angry.png",
            "skill": "images/creatures/asgard/creature_ulfhednar_wolf_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, wolf girl warrior, berserker, wearing wolf pelt hood, wild grey hair, glowing red eyes, torn leather armor, exposed midriff, shiny skin, sweat, muscular thighs, alluring curves, masterpiece, best quality, consistent with freya style",
            "idle": "anime, blue archive style, nikke style, full body, wolf girl warrior, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, breathing heavily, ready to attack",
            "joy": "anime, blue archive style, nikke style, full body, wolf girl warrior, shiny skin, bloom, masterpiece, best quality, consistent with freya style, savage grin, howling victory",
            "sad": "anime, blue archive style, nikke style, full body, wolf girl warrior, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, whimpering, licking wounds",
            "angry": "anime, blue archive style, nikke style, full body, wolf girl warrior, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, berserk rage, drooling, claws out",
            "skill": "anime, full body, wide angle, wolf girl warrior, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, pouncing attack, bloodlust aura"
        },
        lore: {
            title: "늑대 가죽 전사",
            story: "늑대 가죽을 뒤집어쓰고 광란의 상태로 싸우는 전사들입니다. 고통을 느끼지 않으며 오직 적을 물어뜯는 것에만 집중합니다.",
            personality: "Feral & Berserk"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "크르르...",
                "피 냄새가 난다.",
                "먹이... 먹이가 필요해."
            ],
            interaction: [
                "가까이 오지 마! 물어뜯어 주지.",
                "으르렁!",
                "전투! 전투다!"
            ],
            gift: [
                "고기? (허겁지겁 먹는다)",
                "나에게 주는 건가? 크르릉...",
                "힘이 솟는다!"
            ],
            special: [
                "피의 축제를!",
                "모조리 찢어주마!",
                "아우우우우!!"
            ]
        },
        lines: {
            normal: "고통 따위는... 느껴지지 않아!",
            touch_head: "손 조심해라.",
            touch_chest: "내 심장은 분노로 뛴다.",
            touch_legs: "한 번 물면 놓지 않아.",
            touch_special: "오늘 밤은 붉게 물들 것이다!"
        }
    },
    {
        id: "valkyrie_leader_gunnr",
        name: "발키리 대장 군르",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_valkyrie_leader_gunnr.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_valkyrie_leader_gunnr.png",
            "joy": "images/creatures/asgard/creature_valkyrie_leader_gunnr_joy.png",
            "sad": "images/creatures/asgard/creature_valkyrie_leader_gunnr_sad.png",
            "angry": "images/creatures/asgard/creature_valkyrie_leader_gunnr_angry.png",
            "skill": "images/creatures/asgard/creature_valkyrie_leader_gunnr_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, valkyrie commander gunnr, mature woman, golden heavy armor, red cape, holding commanding sword, stern beautiful face, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style",
            "idle": "anime, blue archive style, nikke style, full body, valkyrie commander gunnr, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, crossing arms, observing battlefield",
            "joy": "anime, blue archive style, nikke style, full body, valkyrie commander gunnr, shiny skin, bloom, masterpiece, best quality, consistent with freya style, satisfied nod, slight smile",
            "sad": "anime, blue archive style, nikke style, full body, valkyrie commander gunnr, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, looking down holding helmet, rain",
            "angry": "anime, blue archive style, nikke style, full body, valkyrie commander gunnr, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, pointing sword, furious gaze",
            "skill": "anime, full body, wide angle, valkyrie commander gunnr, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, raising banner, rallying troops"
        },
        lore: {
            title: "전투의 지휘자 군르",
            story: "발키리 중에서도 전투를 지휘하는 능력이 탁월한 대장입니다. 그녀가 깃발을 들면 패배하던 전세도 뒤집힌다고 합니다.",
            personality: "Commanding"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "전열을 정비하라!",
                "빈틈을 보이지 마라.",
                "승리는 준비된 자의 것이다."
            ],
            interaction: [
                "지휘관, 명령을.",
                "내 뒤를 따르라!",
                "적의 움직임을 주시하십시오."
            ],
            gift: [
                "군수 물자인가? 감사하다.",
                "부대원들과 나누겠다.",
                "사기 진작에 도움이 되겠군."
            ],
            special: [
                "전군 돌격하라!",
                "깃발을 높이 들어라!",
                "후퇴는 없다!"
            ]
        },
        lines: {
            normal: "나를 따르라.",
            touch_head: "투구는 함부로 벗기지 마라.",
            touch_chest: "훈장은 명예의 상징이다.",
            touch_legs: "전장에서 다리는 생명이지.",
            touch_special: "이 깃발이 꺾이지 않는 한, 패배는 없다."
        }
    },
    {
        id: "valkyrie_recruit",
        name: "발키리 신병",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_valkyrie_recruit.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_valkyrie_recruit.png",
            "joy": "images/creatures/asgard/creature_valkyrie_recruit_joy.png",
            "sad": "images/creatures/asgard/creature_valkyrie_recruit_sad.png",
            "angry": "images/creatures/asgard/creature_valkyrie_recruit_angry.png",
            "skill": "images/creatures/asgard/creature_valkyrie_recruit_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, valkyrie recruit, young girl, light silver armor, short skirt, holding practice spear, nervous expression, cute face, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style",
            "idle": "anime, blue archive style, nikke style, full body, valkyrie recruit, shiny skin, alluring curves, masterpiece, best quality, consistent with freya style, checking equipment nervously, saluting clumsy",
            "joy": "anime, blue archive style, nikke style, full body, valkyrie recruit, shiny skin, bloom, masterpiece, best quality, consistent with freya style, jumping with joy, praised",
            "sad": "anime, blue archive style, nikke style, full body, valkyrie recruit, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, crying, dropped spear",
            "angry": "anime, blue archive style, nikke style, full body, valkyrie recruit, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, trying to look tough, pouting",
            "skill": "anime, full body, wide angle, valkyrie recruit, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, reckless charge, tripping"
        },
        lore: {
            title: "수습 발키리",
            story: "아직 전장에서 영혼을 거두는 일이 서툰 신입 발키리입니다. 선배들을 따라다니며 날개짓과 무술을 배우고 있습니다.",
            personality: "Eager & Clumsy"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "저, 저도 잘할 수 있습니다!",
                "으아악! (넘어지는 소리)",
                "선배님, 같이 가요!"
            ],
            interaction: [
                "충성! 무엇을 도와드릴까요?",
                "어... 창이 너무 무거워요.",
                "열심히 하겠습니다!"
            ],
            gift: [
                "우와! 저에게 주시는 건가요?",
                "감동입니다! 흑흑...",
                "더 열심히 훈련할게요!"
            ],
            special: [
                "제... 제 실력을 보여드리죠!",
                "받아라! 얍!",
                "으아아아! (돌진하다 넘어진다)"
            ]
        },
        lines: {
            normal: "발키리가 되는 건 어려워요...",
            touch_head: "어... 머리 헝클어지는데...",
            touch_chest: "갑옷 닦느라 힘들었어요.",
            touch_legs: "다리에 쥐가 났어요...",
            touch_special: "언젠간 저도 멋진 영웅을 인도할 거예요!"
        }
    },
    {
        id: "wolf_pup_asgard",
        name: "아스가르드 늑대개",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_wolf_pup_asgard.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_wolf_pup_asgard.png",
            "joy": "images/creatures/asgard/creature_wolf_pup_asgard_joy.png",
            "sad": "images/creatures/asgard/creature_wolf_pup_asgard_sad.png",
            "angry": "images/creatures/asgard/creature_wolf_pup_asgard_angry.png",
            "skill": "images/creatures/asgard/creature_wolf_pup_asgard_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, wolf pup, cute animal, grey fur, big eyes, shiny fur, soft bloom, masterpiece, best quality, consistent with freya style, curious pose",
            "idle": "anime, blue archive style, nikke style, full body, wolf pup, shiny fur, masterpiece, best quality, consistent with freya style, sitting, wagging tail",
            "joy": "anime, blue archive style, nikke style, full body, wolf pup, shiny fur, bloom, masterpiece, best quality, consistent with freya style, barking happily, jumping",
            "sad": "anime, blue archive style, nikke style, full body, wolf pup, shiny fur, dark atmosphere, masterpiece, best quality, consistent with freya style, whining, ears down",
            "angry": "anime, blue archive style, nikke style, full body, wolf pup, shiny fur, masterpiece, best quality, consistent with freya style, growling, tiny teeth showing",
            "skill": "anime, full body, wide angle, wolf pup, dynamic angle, shiny fur, masterpiece, best quality, consistent with freya style, bite attack, brave charge"
        },
        lore: {
            title: "아스가르드 새끼 늑대",
            story: "아스가르드의 숲에서 자라는 신성한 늑대의 새끼입니다. 작지만 용맹하며, 성장하면 펜리르 못지않은 거수가 될 잠재력을 지녔습니다.",
            personality: "Brave"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "아우~~! (하울링 연습)",
                "콩콩콩 (뛰어다닌다)",
                "킁킁..."
            ],
            interaction: [
                "왕! (꼬리를 흔든다)",
                "앙! (장난스럽게 문다)",
                "헥헥..."
            ],
            gift: [
                "육포다! 냠냠!",
                "(뼈다귀를 물고 도망간다)",
                "아우~ (기분 좋다)"
            ],
            special: [
                "나도 무섭다구! 크왕!",
                "물어버릴 거야!",
                "아우우우우!!"
            ]
        },
        lines: {
            normal: "나는 커서 늑대 왕이 될 거야!",
            touch_head: "쓰다듬어 줘!",
            touch_chest: "간지러워~",
            touch_legs: "나랑 달리기 시합 할래?",
            touch_special: "내가 지켜줄게! 왕!"
        }
    }
    ,
    {
        id: "yggdrasil_guardian",
        name: "이그드라실 수호자",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_yggdrasil_guardian.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_yggdrasil_guardian.png",
            "joy": "images/creatures/asgard/creature_yggdrasil_guardian_joy.png",
            "sad": "images/creatures/asgard/creature_yggdrasil_guardian_sad.png",
            "angry": "images/creatures/asgard/creature_yggdrasil_guardian_angry.png",
            "skill": "images/creatures/asgard/creature_yggdrasil_guardian_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, wood spirit girl, dryad, body made of bark and leaves, glowing green runes, branches for hair, holding wooden staff, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, in ancient forest",
            "idle": "anime, blue archive style, nikke style, full body, wood spirit girl, shiny skin, bloom, alluring curves, masterpiece, best quality, consistent with freya style, peaceful pose, birds landing on shoulder",
            "joy": "anime, blue archive style, nikke style, full body, wood spirit girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, flowers blooming hair, smiling gently",
            "sad": "anime, blue archive style, nikke style, full body, wood spirit girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, leaves withering, weeping sap",
            "angry": "anime, blue archive style, nikke style, full body, wood spirit girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, thorns growing, eyes glowing angry green",
            "skill": "anime, full body, wide angle, wood spirit girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, summoning giant roots, nature magic"
        },
        lore: {
            title: "세계수의 수호자",
            story: "이그드라실의 뿌리를 갉아먹는 해충들을 쫓아내는 수호자입니다. 나무의 정기를 받아 숲과 하나 된 육체를 지녔습니다.",
            personality: "Protective"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "나무의 뿌리는 깊다.",
                "숲의 숨결이 느껴지는가?",
                "자연을 훼손하는 자, 용서치 않으리."
            ],
            interaction: [
                "평온하군.",
                "나뭇잎이 속삭이는 소리가 들리는가?",
                "숲의 안식이 그대와 함께하길."
            ],
            gift: [
                "자연의 선물인가? 고맙다.",
                "비료가 되겠군.",
                "숲이 기뻐할 것이다."
            ],
            special: [
                "덩굴이여, 옭아매라!",
                "자연의 분노를 느껴보아라!",
                "이그드라실의 힘으로!"
            ]
        },
        lines: {
            normal: "세계수는 모든 것을 지켜본다.",
            touch_head: "나뭇잎이 떨어진다.",
            touch_chest: "심장은 나무의 수액처럼 흐르지.",
            touch_legs: "뿌리처럼 단단하게 지탱한다.",
            touch_special: "이 숲은 나의 성역이다."
        }
    }
    ,
    {
        id: "bifrost_wisp",
        name: "비프로스트 위습",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_bifrost_wisp.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_bifrost_wisp.png",
            "joy": "images/creatures/asgard/creature_bifrost_wisp_joy.png",
            "sad": "images/creatures/asgard/creature_bifrost_wisp_sad.png",
            "angry": "images/creatures/asgard/creature_bifrost_wisp_angry.png",
            "skill": "images/creatures/asgard/creature_bifrost_wisp_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, rainbow elemental fairy, glowing prismatic body, abstract light form, cute face, floating, shiny particles, soft bloom, masterpiece, best quality, consistent with freya style, on rainbow bridge",
            "idle": "anime, blue archive style, nikke style, full body, rainbow elemental fairy, shiny particles, bloom, masterpiece, best quality, consistent with freya style, floating playfully, color changing",
            "joy": "anime, blue archive style, nikke style, full body, rainbow elemental fairy, shiny particles, heavy bloom, masterpiece, best quality, consistent with freya style, spinning happily, bright light",
            "sad": "anime, blue archive style, nikke style, full body, rainbow elemental fairy, shiny particles, dim light, masterpiece, best quality, consistent with freya style, fading color, drooping",
            "angry": "anime, blue archive style, nikke style, full body, rainbow elemental fairy, shiny particles, intense flare, masterpiece, best quality, consistent with freya style, spiking light, red hue",
            "skill": "anime, full body, wide angle, rainbow elemental fairy, dynamic angle, shiny particles, masterpiece, best quality, consistent with freya style, teleportation flash, bridge opening"
        },
        lore: {
            title: "무지개 다리의 조각",
            story: "비프로스트의 빛이 뭉쳐 만들어진 작은 정령입니다. 차원과 차원 사이를 넘나드는 힘을 희미하게나마 품고 있습니다.",
            personality: "Radiant"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "반짝반짝~",
                "여기는 어디? 나는 누구?",
                "무지개 타고 슝~"
            ],
            interaction: [
                "빛나고 있어!",
                "따뜻하지?",
                "색깔이 변하는 걸 봐!"
            ],
            gift: [
                "빛나는 건 다 좋아!",
                "냠냠, 빛의 맛이 나.",
                "더 밝게 빛날게!"
            ],
            special: [
                "눈부신 빛으로!",
                "차원의 문을 열어라!",
                "반짝임 폭발!"
            ]
        },
        lines: {
            normal: "나는야 무지개 조각!",
            touch_head: "만지면 뜨거울지도 몰라?",
            touch_chest: "마음속까지 비춰줄게.",
            touch_legs: "둥둥 떠다녀서 다리는 필요 없어~",
            touch_special: "나랑 같이 다른 세상으로 가볼래?"
        }
    }
    ,
    {
        id: "creature_dwarf",
        name: "드워프 대장장이",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_creature_dwarf.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_creature_dwarf.png",
            "joy": "images/creatures/asgard/creature_creature_dwarf_joy.png",
            "sad": "images/creatures/asgard/creature_creature_dwarf_sad.png",
            "angry": "images/creatures/asgard/creature_creature_dwarf_angry.png",
            "skill": "images/creatures/asgard/creature_creature_dwarf_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, dwarf smith girl, short sturdy stature, braided beard style hair, welding goggles, leather apron, holding hammer, shiny skin, sweat, oil stains, muscular arms, alluring curves, masterpiece, best quality, consistent with freya style, forge background",
            "idle": "anime, blue archive style, nikke style, full body, dwarf smith girl, shiny skin, sweat, allure, masterpiece, best quality, consistent with freya style, wiping sweat, checking hammer",
            "joy": "anime, blue archive style, nikke style, full body, dwarf smith girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, holding up masterpiece, laughing hearty",
            "sad": "anime, blue archive style, nikke style, full body, dwarf smith girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, broken tool, disappointed",
            "angry": "anime, blue archive style, nikke style, full body, dwarf smith girl, shiny skin, sweat, allure, masterpiece, best quality, consistent with freya style, raising hammer threateningly, shouting",
            "skill": "anime, full body, wide angle, dwarf smith girl, dynamic angle, shiny skin, sweat, allure, masterpiece, best quality, consistent with freya style, striking anvil, sparks flying"
        },
        lore: {
            title: "니다벨리르의 장인",
            story: "신들의 보물을 만들어내는 손재주 좋은 난쟁이입니다. 황금과 보석을 좋아하며, 망치질 한 번으로 명검을 탄생시킵니다.",
            personality: "Crafty & Greedy"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "뚝딱뚝딱! 바쁘다 바빠!",
                "어디 좋은 광석 없나?",
                "황금이 최고지, 암."
            ],
            interaction: [
                "무기 수리하러 왔나?",
                "내 망치는 값을 비싸게 받지.",
                "솜씨 하나는 내가 최고라네."
            ],
            gift: [
                "오오! 순금인가?!",
                "이런 귀한 걸 주다니, 자네 좋은 사람이구만!",
                "답례로 칼을 갈아주지."
            ],
            special: [
                "받아라! 대장장이의 망치!",
                "달궈진 쇠처럼 뜨겁게!",
                "명품의 위력을 보여주마!"
            ]
        },
        lines: {
            normal: "세상에 공짜는 없어.",
            touch_head: "수염 잡아당기지 마!",
            touch_chest: "근육 좀 보게, 단단하지?",
            touch_legs: "키가 작다고 무시하지 마라.",
            touch_special: "이 망치로 신들의 무기를 만들었단 말씀이야."
        }
    }
    ,
    {
        id: "creature_eagle_iron",
        name: "강철 독수리",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_creature_eagle_iron.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_creature_eagle_iron.png",
            "joy": "images/creatures/asgard/creature_creature_eagle_iron_joy.png",
            "sad": "images/creatures/asgard/creature_creature_eagle_iron_sad.png",
            "angry": "images/creatures/asgard/creature_creature_eagle_iron_angry.png",
            "skill": "images/creatures/asgard/creature_creature_eagle_iron_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, mecha eagle girl, harpy, metal feathers, steel wings, pilot headset, sharp gaze, shiny skin, sweat, mechanical parts, alluring curves, masterpiece, best quality, consistent with freya style, high altitude background",
            "idle": "anime, blue archive style, nikke style, full body, mecha eagle girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hovering, preening metal feathers",
            "joy": "anime, blue archive style, nikke style, full body, mecha eagle girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, spreading wings proud, smile",
            "sad": "anime, blue archive style, nikke style, full body, mecha eagle girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, grounded, wings folded tight",
            "angry": "anime, blue archive style, nikke style, full body, mecha eagle girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, screeching, talons out",
            "skill": "anime, full body, wide angle, mecha eagle girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, diving attack, sonic boom wind"
        },
        lore: {
            title: "흐레스벨그의 후예",
            story: "북쪽 끝에서 날개짓으로 바람을 일으키는 거인의 후예입니다. 온몸이 강철 깃털로 덮여 있어 화살 따위는 튕겨냅니다.",
            personality: "Stern"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "바람이 불어온다...",
                "내 날개짓은 폭풍을 부르지.",
                "높은 곳에서 모든 것을 지켜본다."
            ],
            interaction: [
                "접근하지 마라.",
                "강철 깃털에 베일 것이다.",
                "날고 싶은가?"
            ],
            gift: [
                "필요 없다... 하지만 받아두지.",
                "가볍군.",
                "바람에 날려보내지 않겠다."
            ],
            special: [
                "폭풍이여, 몰아쳐라!",
                "하늘의 제왕이여!",
                "강철의 비를 내려주마!"
            ]
        },
        lines: {
            normal: "하늘은 나의 것이다.",
            touch_head: "깃털을 만지지 마라.",
            touch_chest: "심장은 차갑게 식어있다.",
            touch_legs: "발톱은 언제나 날카롭지.",
            touch_special: "나를 길들일 수는 없다."
        }
    }
    ,
    {
        id: "einherjar_ghost",
        name: "에인헤랴르 영혼",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_einherjar_ghost.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_einherjar_ghost.png",
            "joy": "images/creatures/asgard/creature_einherjar_ghost_joy.png",
            "sad": "images/creatures/asgard/creature_einherjar_ghost_sad.png",
            "angry": "images/creatures/asgard/creature_einherjar_ghost_angry.png",
            "skill": "images/creatures/asgard/creature_einherjar_ghost_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, ghost warrior girl, translucent blue spectral body, viking armor, holding spectral axe, floating, eerie glow, shiny ectoplasm, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, valhalla background",
            "idle": "anime, blue archive style, nikke style, full body, ghost warrior girl, shiny spectral skin, alluring curves, masterpiece, best quality, consistent with freya style, drinking spectral mead, laughing",
            "joy": "anime, blue archive style, nikke style, full body, ghost warrior girl, shiny spectral skin, bloom, masterpiece, best quality, consistent with freya style, cheering, raising axe",
            "sad": "anime, blue archive style, nikke style, full body, ghost warrior girl, shiny spectral skin, dark atmosphere, masterpiece, best quality, consistent with freya style, fading away, looking at hands",
            "angry": "anime, blue archive style, nikke style, full body, ghost warrior girl, shiny spectral skin, intense glow, alluring curves, masterpiece, best quality, consistent with freya style, battle cry, berserk ghost",
            "skill": "anime, full body, wide angle, ghost warrior girl, dynamic angle, shiny spectral skin, allure, masterpiece, best quality, consistent with freya style, spectral charge, passing through walls"
        },
        lore: {
            title: "발할라의 영혼",
            story: "라그나로크를 대비해 발할라에서 훈련하는 죽은 전사들의 영혼입니다. 낮에는 서로 죽이고, 밤에는 다시 살아나 술을 마십니다.",
            personality: "Undying"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "오늘도 죽기 좋은 날이군!",
                "술 더 없나? 목이 마르다!",
                "전투! 전투를 다오!"
            ],
            interaction: [
                "한 판 붙어볼텐가?",
                "내 검술을 보여주지.",
                "하하하! 덤벼라!"
            ],
            gift: [
                "오오! 술인가?",
                "좋아, 아주 좋아!",
                "전사에게 어울리는구만!"
            ],
            special: [
                "발할라를 위하여!",
                "나는 죽지 않는다!",
                "돌격! 앞으로!"
            ]
        },
        lines: {
            normal: "우리는 영원히 싸운다!",
            touch_head: "투구는 내 자존심이다.",
            touch_chest: "상처는 훈장이지.",
            touch_legs: "다리가 잘려도 다시 자라나지!",
            touch_special: "라그나로크 때 다시 만나자!"
        }
    }
    ,
    {
        id: "elk_golden",
        name: "황금 엘크",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_elk_golden.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_elk_golden.png",
            "joy": "images/creatures/asgard/creature_elk_golden_joy.png",
            "sad": "images/creatures/asgard/creature_elk_golden_sad.png",
            "angry": "images/creatures/asgard/creature_elk_golden_angry.png",
            "skill": "images/creatures/asgard/creature_elk_golden_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, elk girl, deer antlers huge golden, golden fur accents, elegant robe, mystical water flowing from antlers, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, standing on yggdrasil roof",
            "idle": "anime, blue archive style, nikke style, full body, elk girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, noble stance, looking down arrogantly",
            "joy": "anime, blue archive style, nikke style, full body, elk girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, gentle smile, glowing antlers",
            "sad": "anime, blue archive style, nikke style, full body, elk girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, shedding crystal tears, dim antlers",
            "angry": "anime, blue archive style, nikke style, full body, elk girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, stomping foot, antlers sparking energy",
            "skill": "anime, full body, wide angle, elk girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, river torrent summoning, purification light"
        },
        lore: {
            title: "에이크쉬르니르",
            story: "발할라의 지붕 위에서 세계수의 잎을 뜯어먹는 사슴입니다. 뿔에서 맑은 물이 흘러나와 모든 강의 근원이 된다고 합니다.",
            personality: "Noble"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "맑은 물소리가 들리는구나.",
                "세계수의 잎은 달콤하지.",
                "고귀함은 태도에서 나오는 법."
            ],
            interaction: [
                "무례하구나.",
                "내 뿔에 손대지 마라.",
                "물처럼 흘러가거라."
            ],
            gift: [
                "아름다운 것이로구나.",
                "감사히 받겠다.",
                "강물에 띄워 보내리라."
            ],
            special: [
                "생명의 물이여!",
                "정화하라!",
                "빛나는 뿔의 힘을 보아라!"
            ]
        },
        lines: {
            normal: "모든 강은 나에게서 시작된다.",
            touch_head: "함부로 만지는 건 예의가 아니다.",
            touch_chest: "나의 털은 황금빛이지.",
            touch_legs: "높은 곳에 서는 자의 다리다.",
            touch_special: "이 물을 마시면 지혜를 얻을지도 모른다."
        }
    }
    ,
    {
        id: "fire_giant_scout",
        name: "불의 거인 정찰병",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_fire_giant_scout.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_fire_giant_scout.png",
            "joy": "images/creatures/asgard/creature_fire_giant_scout_joy.png",
            "sad": "images/creatures/asgard/creature_fire_giant_scout_sad.png",
            "angry": "images/creatures/asgard/creature_fire_giant_scout_angry.png",
            "skill": "images/creatures/asgard/creature_fire_giant_scout_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, fire giant girl, lava skin texture, cracked skin manifesting magma, burning hair, obsidian armor, holding torch, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, muspelheim background",
            "idle": "anime, blue archive style, nikke style, full body, fire giant girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, checking flames, impatient",
            "joy": "anime, blue archive style, nikke style, full body, fire giant girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, laughing maniacally, playing with fire",
            "sad": "anime, blue archive style, nikke style, full body, fire giant girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, dim flames, smoke only",
            "angry": "anime, blue archive style, nikke style, full body, fire giant girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, erupting flames, furious shouting",
            "skill": "anime, full body, wide angle, fire giant girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, inferno explosion, magma wave"
        },
        lore: {
            title: "무스펠헤임의 불꽃",
            story: "수르트의 군대에서 파견된 정찰병입니다. 몸에서 끊임없이 열기와 매연을 뿜어내며, 밟는 땅을 잿더미로 만듭니다.",
            personality: "Hot-tempered"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "다 태워버리겠어!",
                "뜨거워! 더 뜨겁게!",
                "수르트 님의 명을 받든다."
            ],
            interaction: [
                "앗, 뜨거울 텐데?",
                "화상 입고 싶나?",
                "건드리면 폭발한다!"
            ],
            gift: [
                "땔감인가? 좋아!",
                "활활 타오르겠군.",
                "재로 만들어주지."
            ],
            special: [
                "인페르노!",
                "모조리 불태워라!",
                "화염의 분노를!"
            ]
        },
        lines: {
            normal: "내 발자국은 꺼지지 않는 불꽃이다.",
            touch_head: "머리 조심해, 불붙는다.",
            touch_chest: "마그마처럼 끓고 있어.",
            touch_legs: "잿더미 위를 걷는 기분이야.",
            touch_special: "라그나로크는 불꽃으로 끝날 것이다!"
        }
    }
    ,
    {
        id: "frost_giant_warrior",
        name: "서리 거인 전사",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_frost_giant_warrior.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_frost_giant_warrior.png",
            "joy": "images/creatures/asgard/creature_frost_giant_warrior_joy.png",
            "sad": "images/creatures/asgard/creature_frost_giant_warrior_sad.png",
            "angry": "images/creatures/asgard/creature_frost_giant_warrior_angry.png",
            "skill": "images/creatures/asgard/creature_frost_giant_warrior_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, ice giant girl, pale blue skin, ice crystals on body, fur bikini armor, holding ice club, cold expression, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, jotunheim background",
            "idle": "anime, blue archive style, nikke style, full body, ice giant girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, shivering cold aura, menacing stare",
            "joy": "anime, blue archive style, nikke style, full body, ice giant girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, cold smirk, crushing ice",
            "sad": "anime, blue archive style, nikke style, full body, ice giant girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, melting slightly, lonely look",
            "angry": "anime, blue archive style, nikke style, full body, ice giant girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, blizzard aura, swinging club",
            "skill": "anime, full body, wide angle, ice giant girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, glacier smash, freezing breath"
        },
        lore: {
            title: "요툰헤임의 한기",
            story: "혹한의 땅 요툰헤임에서 온 거인 전사입니다. 얼음 몽둥이를 휘두르며 신들에게 원한을 품고 있습니다.",
            personality: "Cold & Brutal"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "춥다고? 나약하군.",
                "얼어붙어라...",
                "아스가르드를 얼음으로 뒤덮겠다."
            ],
            interaction: [
                "꺼져라, 조무래기.",
                "얼음 조각상이 되고 싶나?",
                "냉기를 맛보아라."
            ],
            gift: [
                "흠... 나쁘지 않군.",
                "얼려서 보관하지.",
                "차가운 것이 맘에 드는군."
            ],
            special: [
                "빙하시대!",
                "산산조각 내주마!",
                "얼음의 심판을!"
            ]
        },
        lines: {
            normal: "추위는 나의 친구다.",
            touch_head: "머리가 띵할걸?",
            touch_chest: "심장은 이미 얼어있다.",
            touch_legs: "눈보라를 헤치고 왔다.",
            touch_special: "모든 것을 영원히 얼려주마."
        }
    },
    {
        id: "snake_world_jormungandr",
        name: "요르문간드",
        rarity: "UR",
        world: "ASGARD",
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_snake_world_jormungandr.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_snake_world_jormungandr.png",
            "joy": "images/creatures/asgard/creature_snake_world_jormungandr_joy.png",
            "sad": "images/creatures/asgard/creature_snake_world_jormungandr_sad.png",
            "angry": "images/creatures/asgard/creature_snake_world_jormungandr_angry.png",
            "skill": "images/creatures/asgard/creature_snake_world_jormungandr_skill.png",
            "gallery": {
                "lv1": "images/creatures/asgard/creature_snake_world_jormungandr_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_snake_world_jormungandr_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_snake_world_jormungandr_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, blue archive style, nikke style, full body, jormungandr, snake girl, long green hair, snake eyes, split tongue, wearing revealing scale armor, Ouroboros symbol",
            "idle": "standing pose, confident, winding tail around legs, neutral expression",
            "gallery_lv1": "anime, blue archive style, nikke style, full body, jormungandr, snake girl, long green hair, closed eyes, sleeping pose, lying on coiled giant snake tail, comfortable, peaceful expression, wearing loose white sheer dress, see-through",
            "gallery_lv2": "anime, blue archive style, nikke style, full body, jormungandr, snake girl, long green hair, glowing vertical pupils, split tongue, coiling around stone pillar, teasing pose",
            "gallery_lv3": "anime, blue archive style, nikke style, full body, solo, jormungandr, snake girl, long green hair, snake eyes, heart shaped pupils, wearing white silk sheet loosely draped, tangled in green snake tail, lying on bed, heavy sweat, extremely deep blush"
        },
        lore: {
            "title": "세계의 뱀",
            "story": "세상을 휘감고 자신의 꼬리를 물고 있는 거대한 뱀 요르문간드. 미드가르드를 둘러싸고 있으며, 그녀가 움직이면 세상이 흔들린다고 한다. 평소에는 인간 소녀의 모습을 하고 있지만, 그 본성은 파괴적이고 유혹적이다.",
            "personality": "Seductive & Dangerous"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." },
        synergy: { ally: [], rival: ["god_thor"] }
    },
    {
        id: "goat_lightning",
        name: "천둥 염소",
        rarity: "Rare",
        world: "ASGARD",
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_goat_lightning.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_goat_lightning.png",
            "joy": "images/creatures/asgard/creature_goat_lightning_joy.png",
            "sad": "images/creatures/asgard/creature_goat_lightning_sad.png",
            "angry": "images/creatures/asgard/creature_goat_lightning_angry.png",
            "skill": "images/creatures/asgard/creature_goat_lightning_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, lightning goat girl, tanngrisnir descendant, ram horns with sparks, fluffy white fur, tribal accessories, holding lightning rod, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, stormy sky background",
            "idle": "anime, blue archive style, nikke style, full body, lightning goat girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, chewing on grass, sparking horns",
            "joy": "anime, blue archive style, nikke style, full body, lightning goat girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, bleating happily, jumping",
            "sad": "anime, blue archive style, nikke style, full body, lightning goat girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, ears drooping, static fading",
            "angry": "anime, blue archive style, nikke style, full body, lightning goat girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, charging posture, lightning eyes",
            "skill": "anime, full body, wide angle, lightning goat girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, thunder crash, electric shock"
        },
        lore: {
            title: "탕그리스니르의 후손",
            story: "토르의 전차를 끄는 염소들의 후손입니다. 발굽을 구르면 천둥소리가 나고, 죽어도 뼈만 남으면 다시 부활할 수 있다고 전해집니다.",
            personality: "Stubborn"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["메헤헤헤!", "풀 뜯어 먹을 거야.", "고집 부릴 거야!"],
            interaction: ["밀지 마! 메헤헤!", "뿔로 들이받는다?", "머리 박치기!"],
            gift: ["종이? 냠냠.", "맛있는 건 다 내 거야.", "메헤헤, 고마워."],
            special: ["천둥 발굽!", "우르릉 쾅쾅!", "메헤헤헤헤!!!"]
        },
        lines: { normal: "토르 님은 너무 무거워.", touch_head: "뿔 잡으면 혼나!", touch_chest: "털이 북슬북슬하지?", touch_legs: "발굽 소리 좀 들어봐.", touch_special: "난 죽어도 뼈만 있으면 다시 살아나!" }
    },
    {
        id: "ice_spirit_small",
        name: "작은 얼음 정령",
        rarity: "Normal",
        world: "ASGARD",
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_ice_spirit_small.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_ice_spirit_small.png",
            "joy": "images/creatures/asgard/creature_ice_spirit_small_joy.png",
            "sad": "images/creatures/asgard/creature_ice_spirit_small_sad.png",
            "angry": "images/creatures/asgard/creature_ice_spirit_small_angry.png",
            "skill": "images/creatures/asgard/creature_ice_spirit_small_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, small ice fairy, snowflake wings, pale blue skin, white dress, floating ice crystals, shiny skin, soft bloom, cute, masterpiece, best quality, consistent with freya style, winter forest background",
            "idle": "anime, blue archive style, nikke style, full body, small ice fairy, shiny skin, bloom, cute, masterpiece, best quality, consistent with freya style, floating, making snowballs",
            "joy": "anime, blue archive style, nikke style, full body, small ice fairy, shiny skin, bloom, cute, masterpiece, best quality, consistent with freya style, giggling, scattering snow",
            "sad": "anime, blue archive style, nikke style, full body, small ice fairy, shiny skin, dark atmosphere, cute, masterpiece, best quality, consistent with freya style, melting slightly, shivering",
            "angry": "anime, blue archive style, nikke style, full body, small ice fairy, shiny skin, intense glow, cute, masterpiece, best quality, consistent with freya style, freezing glare, ice spikes",
            "skill": "anime, full body, wide angle, small ice fairy, dynamic angle, shiny skin, cute, masterpiece, best quality, consistent with freya style, blizzard summon, freezing wind"
        },
        lore: {
            title: "작은 서리 요정",
            story: "눈송이 속에 숨어 사는 작은 요정입니다. 장난치는 것을 좋아하여 사람들의 코끝을 얼리거나 길을 미끄럽게 만듭니다.",
            personality: "Playful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["아야! 차가워!", "눈싸움 할래?", "꽁꽁 얼어라~"],
            interaction: ["에취! 감기 걸릴걸?", "미끌미끌~ 조심해!", "손 시려!"],
            gift: ["아이스크림 좋아!", "차가운 거면 다 좋아.", "녹지 않게 해줘."],
            special: ["눈보라 슝슝!", "다 얼려버릴 거야!", "화이트 크리스마스!"]
        },
        lines: { normal: "난 녹으면 사라져버려.", touch_head: "머리에 눈이 쌓였네?", touch_chest: "심장은 얼음 조각이야.", touch_legs: "발자국도 안 남는다구.", touch_special: "나랑 같이 눈사람 만들자!" }
    },
    {
        id: "fenrir_kin",
        name: "펜리르의 권속",
        rarity: "Rare",
        world: "ASGARD",
        elements: ["Ice", "Beast"],
        baseStr: 35, baseInt: 15,
        image: "images/creatures/asgard/creature_fenrir_kin.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_fenrir_kin.png",
            "joy": "images/creatures/asgard/creature_fenrir_kin_joy.png",
            "sad": "images/creatures/asgard/creature_fenrir_kin_sad.png",
            "angry": "images/creatures/asgard/creature_fenrir_kin_angry.png",
            "skill": "images/creatures/asgard/creature_fenrir_kin_skill.png",
            "victory": "images/creatures/asgard/creature_fenrir_kin_victory.png",
            "defeat": "images/creatures/asgard/creature_fenrir_kin_defeat.png",
            "gallery": { "lv1": "images/creatures/asgard/creature_fenrir_kin_gallery_lv1.png" }
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, fenrir kin girl, werewolf girl, grey wolf ears and tail, sharp claws, fur collar, leather armor, wild look, glowing yellow eyes, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, snowy tundra background",
            "idle": "anime, blue archive style, nikke style, full body, fenrir kin girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, crouching, sniffing air",
            "joy": "anime, blue archive style, nikke style, full body, fenrir kin girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, howling happy, tail wagging blur",
            "sad": "anime, blue archive style, nikke style, full body, fenrir kin girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, ears flattened, whining",
            "angry": "anime, blue archive style, nikke style, full body, fenrir kin girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, teeth baring, claws out, berserk",
            "skill": "anime, full body, wide angle, fenrir kin girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, savage pounce, bite attack"
        },
        lore: {
            "title": "종말의 전조",
            "story": "펜리르의 피를 이어받은 거대한 늑대. 라그나로크 때 신들을 사냥하기 위해 무리를 짓고 있다. 그 울음소리는 가장 용감한 전사조차 공포에 떨게 한다.",
            "personality": "Savage & Loyal"
        },
        relationships: { likes: ["wolf_fenrir"], dislikes: ["valkyrie"], rival: null },
        touchLines: {
            idle: ["크르릉... 먹이 냄새가 난다.", "대장 펜리르 님을 위하여!", "겨울이 오면 우리는 강해진다."],
            interaction: ["가까이 오지 마라.", "내 이빨은 강철도 씹는다.", "으르릉!"],
            gift: ["고기인가? 합격이다.", "피 냄새... 좋아.", "이걸 바치고 목숨을 구걸하는 거냐?"],
            special: ["물어뜯기!", "얼음 송곳니!", "무리의 습격!"]
        },
        lines: { normal: "우리는 끝내 신들을 삼킬 것이다.", touch_head: "머리를 숙이는 건 대장님 앞에서뿐이다.", touch_chest: "심장은 사냥의 열기로 뜨겁다.", touch_legs: "설원을 달리는 건 내게 놀이지.", touch_special: "나와 함께 신들의 황혼을 보겠나?" }
    }
    , {
        id: "ice_nymph",
        name: "얼음 님프",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Ice"],
        baseStr: 20, baseInt: 35,
        image: "images/creatures/asgard/creature_ice_nymph.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_ice_nymph.png",
            "joy": "images/creatures/asgard/creature_ice_nymph_joy.png",
            "sad": "images/creatures/asgard/creature_ice_nymph_sad.png",
            "angry": "images/creatures/asgard/creature_ice_nymph_angry.png",
            "skill": "images/creatures/asgard/creature_ice_nymph_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, ice nymph, asgard spirit, pale skin, white translucent dress, ice crown, floating snowflakes, cold beauty, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, frozen lake background",
            "idle": "anime, blue archive style, nikke style, full body, ice nymph, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, floating, graceful dance",
            "joy": "anime, blue archive style, nikke style, full body, ice nymph, shiny skin, bloom, masterpiece, best quality, consistent with freya style, elegant smile, creating ice sculpture",
            "sad": "anime, blue archive style, nikke style, full body, ice nymph, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, freezing tears, looking away",
            "angry": "anime, blue archive style, nikke style, full body, ice nymph, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, cold glare, summoning blizzard",
            "skill": "anime, full body, wide angle, ice nymph, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, absolute zero freeze, ice storm"
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
        image: "images/creatures/asgard/creature_mud_troll.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_mud_troll.png",
            "joy": "images/creatures/asgard/creature_mud_troll_joy.png",
            "sad": "images/creatures/asgard/creature_mud_troll_sad.png",
            "angry": "images/creatures/asgard/creature_mud_troll_angry.png",
            "skill": "images/creatures/asgard/creature_mud_troll_skill.png",
            "victory": "images/creatures/asgard/creature_mud_troll_victory.png",
            "defeat": "images/creatures/asgard/creature_mud_troll_defeat.png",
            "gallery": {
                "lv1": "images/creatures/asgard/creature_mud_troll_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, mud troll girl, swamp monster, covered in mud, vines for clothes, messy hair, strong physique, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, swamp background",
            "idle": "anime, blue archive style, nikke style, full body, mud troll girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing clumsily, scratching head",
            "joy": "anime, blue archive style, nikke style, full body, mud troll girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, stupid happy grin, playing with mud",
            "sad": "anime, blue archive style, nikke style, full body, mud troll girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, sitting in puddle, pouting",
            "angry": "anime, blue archive style, nikke style, full body, mud troll girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, roaring, throwing mud",
            "skill": "anime, full body, wide angle, mud troll girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, mud landslide, brute force smash"
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
        image: "images/creatures/asgard/creature_jotunn_hill.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_jotunn_hill.png",
            "joy": "images/creatures/asgard/creature_jotunn_hill_joy.png",
            "sad": "images/creatures/asgard/creature_jotunn_hill_sad.png",
            "angry": "images/creatures/asgard/creature_jotunn_hill_angry.png",
            "skill": "images/creatures/asgard/creature_jotunn_hill_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, hill giant girl, rocky skin texture, moss growing on shoulders, massive size, stone armor, sleeping face, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, mountain range background",
            "idle": "anime, blue archive style, nikke style, full body, hill giant girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, sleeping standing up, yawning",
            "joy": "anime, blue archive style, nikke style, full body, hill giant girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, slow laugh, causing tremor",
            "sad": "anime, blue archive style, nikke style, full body, hill giant girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, curling up like a boulder, quiet",
            "angry": "anime, blue archive style, nikke style, full body, hill giant girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, stomping ground, earthquake",
            "skill": "anime, full body, wide angle, hill giant girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, rock throw, mountain crush"
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
        image: "images/creatures/asgard/creature_deep_cave_bat.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_deep_cave_bat.png",
            "joy": "images/creatures/asgard/creature_deep_cave_bat_joy.png",
            "sad": "images/creatures/asgard/creature_deep_cave_bat_sad.png",
            "angry": "images/creatures/asgard/creature_deep_cave_bat_angry.png",
            "skill": "images/creatures/asgard/creature_deep_cave_bat_skill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, bat girl, vampire attributes, large bat wings, gothic dress, red eyes, fangs, hanging upside down, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, dark cave background",
            "idle": "anime, blue archive style, nikke style, full body, bat girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hanging, wrapping wings",
            "joy": "anime, blue archive style, nikke style, full body, bat girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, screeching happily, fluttering",
            "sad": "anime, blue archive style, nikke style, full body, bat girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, hiding face in wings, shivering",
            "angry": "anime, blue archive style, nikke style, full body, bat girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hissing, eyes glowing red",
            "skill": "anime, full body, wide angle, bat girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, sonic scream, swarm summon"
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
        image: "images/creatures/asgard/creature_bilskirnir_rat.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_bilskirnir_rat.png",
            "joy": "images/creatures/asgard/creature_bilskirnir_rat_joy.png",
            "sad": "images/creatures/asgard/creature_bilskirnir_rat_sad.png",
            "angry": "images/creatures/asgard/creature_bilskirnir_rat_angry.png",
            "skill": "images/creatures/asgard/creature_bilskirnir_rat_skill.png",
            "victory": "images/creatures/asgard/creature_bilskirnir_rat_victory.png",
            "defeat": "images/creatures/asgard/creature_bilskirnir_rat_defeat.png",
            "gallery": {
                "lv1": "images/creatures/asgard/creature_bilskirnir_rat_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, rat girl, brown hair, mouse ears, oversized thief outfit, holding cheese, kitchen background, cute, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style",
            "idle": "anime, blue archive style, nikke style, full body, rat girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, nibbling on food, looking around nervously",
            "joy": "anime, blue archive style, nikke style, full body, rat girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, stuffing cheeks, happy squeak",
            "sad": "anime, blue archive style, nikke style, full body, rat girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, empty hands, crying",
            "angry": "anime, blue archive style, nikke style, full body, rat girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hissing, guarding hoard",
            "skill": "anime, full body, wide angle, rat girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, zip dash, sonic steal"
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
        image: "images/creatures/asgard/creature_rune_stone_living.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_rune_stone_living.png",
            "joy": "images/creatures/asgard/creature_rune_stone_living_joy.png",
            "sad": "images/creatures/asgard/creature_rune_stone_living_sad.png",
            "angry": "images/creatures/asgard/creature_rune_stone_living_angry.png",
            "skill": "images/creatures/asgard/creature_rune_stone_living_skill.png",
            "victory": "images/creatures/asgard/creature_rune_stone_living_victory.png",
            "defeat": "images/creatures/asgard/creature_rune_stone_living_defeat.png",
            "gallery": {
                "lv1": "images/creatures/asgard/creature_rune_stone_living_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, rune stone girl, golem girl, made of inscribed stones, glowing rune patterns, magical energy, floating rocks, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, mystic ruins background",
            "idle": "anime, blue archive style, nikke style, full body, rune stone girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hovering, rearranging stones",
            "joy": "anime, blue archive style, nikke style, full body, rune stone girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, pulsating bright light, happy spinning",
            "sad": "anime, blue archive style, nikke style, full body, rune stone girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, dim light, stones falling",
            "angry": "anime, blue archive style, nikke style, full body, rune stone girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, red glow, stones shaking",
            "skill": "anime, full body, wide angle, rune stone girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, rune bombardment, magic beam"
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
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"],
        baseStr: 30, baseInt: 20,
        image: "images/creatures/asgard/creature_ancient_fossil.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_ancient_fossil.png",
            "joy": "images/creatures/asgard/creature_ancient_fossil_joy.png",
            "sad": "images/creatures/asgard/creature_ancient_fossil_sad.png",
            "angry": "images/creatures/asgard/creature_ancient_fossil_angry.png",
            "skill": "images/creatures/asgard/creature_ancient_fossil_skill.png",
            "victory": "images/creatures/asgard/creature_ancient_fossil_victory.png",
            "defeat": "images/creatures/asgard/creature_ancient_fossil_defeat.png",
            "gallery": {
                "lv1": "images/creatures/asgard/creature_ancient_fossil_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, fossil monster girl, skeleton armor, dinosaur bone aesthetic, ancient warrior spirit, pale skin, eerie glow, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, archaeological site background",
            "idle": "anime, blue archive style, nikke style, full body, fossil monster girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, cracking neck, dusty",
            "joy": "anime, blue archive style, nikke style, full body, fossil monster girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, toothy grin, bone rattle",
            "sad": "anime, blue archive style, nikke style, full body, fossil monster girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, falling apart, crumbling",
            "angry": "anime, blue archive style, nikke style, full body, fossil monster girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, skeletal scream, bone spikes",
            "skill": "anime, full body, wide angle, fossil monster girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, ancient roar, fossilize beam"
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
        image: "images/creatures/asgard/creature_mist_beast.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_mist_beast.png",
            "joy": "images/creatures/asgard/creature_mist_beast_joy.png",
            "sad": "images/creatures/asgard/creature_mist_beast_sad.png",
            "angry": "images/creatures/asgard/creature_mist_beast_angry.png",
            "skill": "images/creatures/asgard/creature_mist_beast_skill.png",
            "victory": "images/creatures/asgard/creature_mist_beast_victory.png",
            "defeat": "images/creatures/asgard/creature_mist_beast_defeat.png",
            "gallery": {
                "lv1": "images/creatures/asgard/creature_mist_beast_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, mist beast girl, fog spirit, translucent body, phantom limbs, glowing white eyes, ethereal form, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, thick fog background",
            "idle": "anime, blue archive style, nikke style, full body, mist beast girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, drifting, fading legs",
            "joy": "anime, blue archive style, nikke style, full body, mist beast girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, twirling mist, soft glow",
            "sad": "anime, blue archive style, nikke style, full body, mist beast girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, losing form, evaporated tears",
            "angry": "anime, blue archive style, nikke style, full body, mist beast girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, storm cloud darkness, sharp claws",
            "skill": "anime, full body, wide angle, mist beast girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, fog suffocation, phantom strike"
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
        image: "images/creatures/asgard/creature_swamp_light.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_swamp_light.png",
            "joy": "images/creatures/asgard/creature_swamp_light_joy.png",
            "sad": "images/creatures/asgard/creature_swamp_light_sad.png",
            "angry": "images/creatures/asgard/creature_swamp_light_angry.png",
            "skill": "images/creatures/asgard/creature_swamp_light_skill.png",
            "victory": "images/creatures/asgard/creature_swamp_light_victory.png",
            "defeat": "images/creatures/asgard/creature_swamp_light_defeat.png",
            "gallery": {
                "lv1": "images/creatures/asgard/creature_swamp_light_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, blue archive style, nikke style, full body, will o wisp girl, swamp spirit, green flame hair, floating lantern, alluring ghostly figure, shiny skin, sweat, soft bloom, alluring curves, masterpiece, best quality, consistent with freya style, dark swamp background",
            "idle": "anime, blue archive style, nikke style, full body, will o wisp girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, bobbing up and down, beckoning finger",
            "joy": "anime, blue archive style, nikke style, full body, will o wisp girl, shiny skin, bloom, masterpiece, best quality, consistent with freya style, bright flare, dazzling smile",
            "sad": "anime, blue archive style, nikke style, full body, will o wisp girl, shiny skin, dark atmosphere, masterpiece, best quality, consistent with freya style, dimming light, flickering out",
            "angry": "anime, blue archive style, nikke style, full body, will o wisp girl, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, wildfire rage, intense heat",
            "skill": "anime, full body, wide angle, will o wisp girl, dynamic angle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, soul lure, swamp gas explosion"
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
                "길을 잃었니? 내가 안내해 줄게."
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