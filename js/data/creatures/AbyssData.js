var ABYSS_CREATURES = [
    {
        id: "void_beast",
        name: "공허의 야수",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_void_beast.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_beast.png",
            "joy": "images/creatures/abyss/creature_void_beast_joy.png",
            "sad": "images/creatures/abyss/creature_void_beast_sad.png",
            "angry": "images/creatures/abyss/creature_void_beast_angry.png",
            "skill": "images/creatures/abyss/creature_void_beast_skill.png",
            "victory": "images/creatures/abyss/creature_void_beast_victory.png",
            "defeat": "images/creatures/abyss/creature_void_beast_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_beast_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_void_beast_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_void_beast_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, void beast girl, wild wolf ears, sharp claws, purple fur accents, glowing purple eyes, tentacles from back, void energy, sharp fangs, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, roaring pose",
            "idle": "anime, full body, wide angle, void beast girl, wild wolf ears, sharp claws, purple fur accents, glowing purple eyes, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, stalking pose",
            "joy": "anime, full body, wide angle, void beast girl, wild wolf ears, purple fur, glowing purple eyes, happy expression, waging tail, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, playful pose",
            "sad": "anime, full body, wide angle, void beast girl, wild wolf ears, purple fur, glowing purple eyes, sad expression, drooping ears, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, sitting pose",
            "angry": "anime, full body, wide angle, void beast girl, wild wolf ears, purple fur, glowing purple eyes, angry expression, baring fangs, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, attacking pose",
            "skill": "anime, full body, wide angle, void beast girl, wild wolf ears, purple fur, glowing purple eyes, using skill, void blast, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, void beast girl, wild wolf ears, purple fur, glowing purple eyes, victory pose, howling, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, void beast girl, wild wolf ears, purple fur, glowing purple eyes, defeated pose, collapsed, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, lying down"
        },
        lore: {
            "title": "공허의 포식자",
            "story": "차원의 틈새에서 넘어온 흉포한 맹수. 끊임없는 허기를 채우기 위해 모든 것을 집어삼킨다. 지능은 낮지만 본능적인 사냥 감각이 뛰어나며, 그림자 속에 숨어 먹잇감을 노린다. 그 울음소리는 영혼을 얼어붙게 만든다.",
            "personality": "Voracious"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "배고파... 끊임없이...",
                "공허가... 나를 채우지 못해.",
                "크르르... 먹잇감은 어디 있나?"
            ],
            interaction: [
                "먹어도 되나?",
                "내 이빨은 차원을 찢지.",
                "가까이 오면... 삼켜버린다."
            ],
            gift: [
                "고기? 부족해...",
                "더 가져와... 더!",
                "냠냠... 맛이 없군."
            ],
            special: [
                "크아아아!",
                "모든 것을 무로 돌려주마!",
                "공허의 이빨을 받아라!"
            ]
        },
        lines: {
            normal: "나는 배고프다...",
            touch_head: "머리를 만지면 손이 사라질걸?",
            touch_chest: "텅 빈 위장이 울부짖는다.",
            touch_legs: "도망쳐도 소용없다.",
            touch_special: "이 세계를 통째로 씹어먹어 주지!"
        }
    },
    {
        id: "shadow_assassin",
        name: "그림자 암살자",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_shadow_assassin.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_shadow_assassin.png",
            "joy": "images/creatures/abyss/creature_shadow_assassin_joy.png",
            "sad": "images/creatures/abyss/creature_shadow_assassin_sad.png",
            "angry": "images/creatures/abyss/creature_shadow_assassin_angry.png",
            "skill": "images/creatures/abyss/creature_shadow_assassin_skill.png",
            "victory": "images/creatures/abyss/creature_shadow_assassin_victory.png",
            "defeat": "images/creatures/abyss/creature_shadow_assassin_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_shadow_assassin_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, shadow assassin girl, skin tight black bodysuit, hood, glowing purple eyes, dual daggers, shadow aura, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, combat stance",
            "idle": "anime, full body, wide angle, shadow assassin girl, skin tight black bodysuit, hood, glowing purple eyes, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, stealth pose",
            "joy": "anime, full body, wide angle, shadow assassin girl, skin tight black bodysuit, hood, glowing purple eyes, happy expression, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, smiling pose",
            "sad": "anime, full body, wide angle, shadow assassin girl, skin tight black bodysuit, hood, glowing purple eyes, sad expression, removing mask, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, looking down",
            "angry": "anime, full body, wide angle, shadow assassin girl, skin tight black bodysuit, hood, glowing purple eyes, angry expression, drawing daggers, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, aggressive pose",
            "skill": "anime, full body, wide angle, shadow assassin girl, skin tight black bodysuit, hood, glowing purple eyes, using skill, shadow strike, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, shadow assassin girl, skin tight black bodysuit, hood, glowing purple eyes, victory pose, cleaning dagger, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, confident",
            "defeat": "anime, full body, wide angle, shadow assassin girl, skin tight black bodysuit, hood, glowing purple eyes, defeated pose, kneeling, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, exhausted"
        },
        lore: {
            "title": "그림자 암살자",
            "story": "빛조차 도망치는 심연의 암살자. 소리 없이 움직이며, 적의 그림자에 동화되어 치명적인 일격을 가한다. 감정이 없으며 오직 임무만을 수행하는 냉혹한 살인 기계다. 그의 단검에는 공허의 독이 발라져 있다.",
            "personality": "Ruthless"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "......",
                "그림자는 언제나 네 곁에 있다.",
                "임무 대기 중."
            ],
            interaction: [
                "목숨이 아깝지 않나 보군.",
                "빈틈이 보인다.",
                "내 칼날은 소리를 내지 않아."
            ],
            gift: [
                "보수인가? 받아두지.",
                "쓸만하군.",
                "감정은... 필요 없다."
            ],
            special: [
                "그림자 속으로!",
                "죽음은 조용히 찾아오지.",
                "단 일격에 끝낸다."
            ]
        },
        lines: {
            normal: "어둠 속에서 나는 왕이다.",
            touch_head: "투구를 건드리지 마라.",
            touch_chest: "심장은 차갑게 식어있다.",
            touch_legs: "발소리를 죽여라.",
            touch_special: "네가 눈치챘을 땐, 이미 늦었다."
        }
    },
    {
        id: "gargoyle_stone",
        name: "석상 가고일",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_gargoyle_stone.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_gargoyle_stone.png",
            "joy": "images/creatures/abyss/creature_gargoyle_stone_joy.png",
            "sad": "images/creatures/abyss/creature_gargoyle_stone_sad.png",
            "angry": "images/creatures/abyss/creature_gargoyle_stone_angry.png",
            "skill": "images/creatures/abyss/creature_gargoyle_stone_skill.png",
            "victory": "images/creatures/abyss/creature_gargoyle_stone_victory.png",
            "defeat": "images/creatures/abyss/creature_gargoyle_stone_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_gargoyle_stone_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, gargoyle girl, grey skin like stone, demonic wings, horns, stone armor bikini, glowing red eyes, shiny stone texture, soft lighting, bloom, alluring curves, masterpiece, best quality, consistent with freya style, perched pose",
            "idle": "anime, full body, wide angle, gargoyle girl, grey skin like stone, demonic wings, horns, stone armor bikini, glowing red eyes, shiny stone texture, soft lighting, bloom, masterpiece, best quality, consistent with freya style, statue pose",
            "joy": "anime, full body, wide angle, gargoyle girl, grey skin like stone, demonic wings, horns, stone armor bikini, happy expression, shiny stone texture, alluring curves, masterpiece, best quality, consistent with freya style, smiling pose",
            "sad": "anime, full body, wide angle, gargoyle girl, grey skin like stone, demonic wings, horns, stone armor bikini, sad expression, crumbling stone, shiny stone texture, alluring curves, masterpiece, best quality, consistent with freya style, sitting pose",
            "angry": "anime, full body, wide angle, gargoyle girl, grey skin like stone, demonic wings, horns, stone armor bikini, angry expression, glowing red eyes, shiny stone texture, alluring curves, masterpiece, best quality, consistent with freya style, threatening pose",
            "skill": "anime, full body, wide angle, gargoyle girl, grey skin like stone, demonic wings, horns, stone armor bikini, using skill, stone skin, shiny stone texture, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, gargoyle girl, grey skin like stone, demonic wings, horns, stone armor bikini, victory pose, wings spread, shiny stone texture, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, gargoyle girl, grey skin like stone, demonic wings, horns, stone armor bikini, defeated pose, cracked stone, shiny stone texture, alluring curves, masterpiece, best quality, consistent with freya style, broken pose"
        },
        lore: {
            "title": "심연의 파수꾼",
            "story": "심연의 고대 요새를 지키는 석상. 평소에는 돌처럼 굳어 있다가 침입자가 나타나면 움직인다. 마법에 면역이 있으며, 단단한 피부는 어떤 칼날도 튕겨낸다. 주인의 명령에 절대 복종한다.",
            "personality": "Loyal"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "...",
                "침입자... 감시 중.",
                "심연의 문을 지킨다."
            ],
            interaction: [
                "움직이지 마라.",
                "너는 허가받지 못했다.",
                "돌덩이라고 무시하지 마라."
            ],
            gift: [
                "가져와도 소용없다.",
                "제물인가?",
                "주인님께 바치겠다."
            ],
            special: [
                "석화!",
                "무겁게 짓눌러주마!",
                "절대 방어!"
            ]
        },
        lines: {
            normal: "나는 영원히 이곳을 지킨다.",
            touch_head: "딱딱하다고 투덜대지 마.",
            touch_chest: "내 몸은 금강불괴다.",
            touch_legs: "한번 자리를 잡으면 절대 비키지 않아.",
            touch_special: "돌이 되어 영원히 멈춰라."
        }
    },
    {
        id: "eye_of_chaos",
        name: "혼돈의 눈",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_eye_of_chaos.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_eye_of_chaos.png",
            "joy": "images/creatures/abyss/creature_eye_of_chaos_joy.png",
            "sad": "images/creatures/abyss/creature_eye_of_chaos_sad.png",
            "angry": "images/creatures/abyss/creature_eye_of_chaos_angry.png",
            "skill": "images/creatures/abyss/creature_eye_of_chaos_skill.png",
            "victory": "images/creatures/abyss/creature_eye_of_chaos_victory.png",
            "defeat": "images/creatures/abyss/creature_eye_of_chaos_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_eye_of_chaos_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, eye of chaos girl, gothic dress with eye patterns, giant floating eye background, bat wings, purple aura, looking at viewer, detailed iris, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, observing pose",
            "idle": "anime, full body, wide angle, eye of chaos girl, gothic dress, giant floating eye, purple aura, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, floating",
            "joy": "anime, full body, wide angle, eye of chaos girl, gothic dress, giant floating eye, happy expression, winking, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, cheerful pose",
            "sad": "anime, full body, wide angle, eye of chaos girl, gothic dress, giant floating eye, sad expression, tearing up, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, looking down",
            "angry": "anime, full body, wide angle, eye of chaos girl, gothic dress, giant floating eye, angry expression, glowing red iris, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, staring intensity",
            "skill": "anime, full body, wide angle, eye of chaos girl, gothic dress, giant floating eye, using skill, chaos beam, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, eye of chaos girl, gothic dress, giant floating eye, victory pose, peace sign, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, floating high",
            "defeat": "anime, full body, wide angle, eye of chaos girl, gothic dress, giant floating eye, defeated pose, closing eye, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, falling"
        },
        lore: {
            "title": "광기를 보는 눈",
            "story": "모든 것을 지켜보는 혼돈의 눈. 마주치는 순간 상대의 정신을 오염시키고 환각을 보여준다. 심연의 군주들에게 정보를 전달하는 정찰병 역할을 한다. 눈동자 속에는 무수한 우주가 담겨 있다.",
            "personality": "Observant"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "보고 있다...",
                "모든 것이 보여...",
                "네 안의 공포가 느껴지는구나."
            ],
            interaction: [
                "눈을 피하지 마라.",
                "내 시선은 영혼을 꿰뚫지.",
                "어딜 숨으려는 거냐?"
            ],
            gift: [
                "이건... 흥미롭군.",
                "잘 보겠다.",
                "지식을 바쳐라."
            ],
            special: [
                "혼돈을 보아라!",
                "정신 붕괴!",
                "미쳐버려라!"
            ]
        },
        lines: {
            normal: "나는 심연의 눈이다.",
            touch_head: "눈을 찌르지 마!",
            touch_chest: "이건 심장이 아니라 핵이야.",
            touch_legs: "날개 달린 눈을 본 적 없나?",
            touch_special: "끝없는 악몽 속에 가둬주지."
        }
    },
    {
        id: "abyss_stalker",
        name: "심연의 추적자",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_abyss_stalker.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_abyss_stalker.png",
            "joy": "images/creatures/abyss/creature_abyss_stalker_joy.png",
            "sad": "images/creatures/abyss/creature_abyss_stalker_sad.png",
            "angry": "images/creatures/abyss/creature_abyss_stalker_angry.png",
            "skill": "images/creatures/abyss/creature_abyss_stalker_skill.png",
            "victory": "images/creatures/abyss/creature_abyss_stalker_victory.png",
            "defeat": "images/creatures/abyss/creature_abyss_stalker_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_abyss_stalker_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, abyss stalker girl, dark leather hunter outfit, hood, glowing blue eyes, dual crossbows, mist effect, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, tracking pose",
            "idle": "anime, full body, wide angle, abyss stalker girl, dark leather hunter outfit, glowing blue eyes, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, crouching",
            "joy": "anime, full body, wide angle, abyss stalker girl, dark leather hunter outfit, glowing blue eyes, happy expression, holding crossbows up, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, smiling pose",
            "sad": "anime, full body, wide angle, abyss stalker girl, dark leather hunter outfit, glowing blue eyes, sad expression, sitting on ground, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, gloomy pose",
            "angry": "anime, full body, wide angle, abyss stalker girl, dark leather hunter outfit, glowing blue eyes, angry expression, aiming crossbows, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, combat ready",
            "skill": "anime, full body, wide angle, abyss stalker girl, dark leather hunter outfit, glowing blue eyes, using skill, rapid fire, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, abyss stalker girl, dark leather hunter outfit, glowing blue eyes, victory pose, standing tall, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, abyss stalker girl, dark leather hunter outfit, glowing blue eyes, defeated pose, kneeling, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, exhausted"
        },
        lore: {
            "title": "보이지 않는 추적자",
            "story": "어둠 속에서 사냥감을 끝까지 추적하는 사냥꾼. 발자국 소리조차 내지 않으며, 한 번 찍은 목표는 절대 놓치지 않는다. 심연의 생태계에서 매우 위험한 포식자 중 하나다.",
            "personality": "Persistent"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "킁킁... 냄새가 난다.",
                "도망쳐 봐라.",
                "어디까지 갈 수 있을까?"
            ],
            interaction: [
                "잡았다.",
                "네 뒤에 있어.",
                "발버둥 쳐 보시지."
            ],
            gift: [
                "뇌물인가?",
                "잠시... 봐주지.",
                "이걸로 도망칠 시간을 벌 셈인가?"
            ],
            special: [
                "숨통을 끊어주마!",
                "사냥 시작!",
                "절대 놓치지 않는다!"
            ]
        },
        lines: {
            normal: "그림자는 나의 사냥터다.",
            touch_head: "쓰다듬어도 소용없어.",
            touch_chest: "심장은 멈추지 않고 뛴다.",
            touch_legs: "지치지 않는 다리다.",
            touch_special: "네 공포가 나를 즐겁게 하는군."
        }
    },
    {
        id: "dark_matter_slime",
        name: "암흑 물질 슬라임",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_dark_matter_slime.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_dark_matter_slime.png",
            "joy": "images/creatures/abyss/creature_dark_matter_slime_joy.png",
            "sad": "images/creatures/abyss/creature_dark_matter_slime_sad.png",
            "angry": "images/creatures/abyss/creature_dark_matter_slime_angry.png",
            "skill": "images/creatures/abyss/creature_dark_matter_slime_skill.png",
            "victory": "images/creatures/abyss/creature_dark_matter_slime_victory.png",
            "defeat": "images/creatures/abyss/creature_dark_matter_slime_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_dark_matter_slime_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, dark matter slime girl, translucent purple slime skin, black core, melting dress, glowing eyes, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, melting pose",
            "idle": "anime, full body, wide angle, dark matter slime girl, translucent purple slime skin, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, dark matter slime girl, translucent purple slime skin, happy expression, bubbling, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, cheerful pose",
            "sad": "anime, full body, wide angle, dark matter slime girl, translucent purple slime skin, sad expression, melting down, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, puddle pose",
            "angry": "anime, full body, wide angle, dark matter slime girl, translucent purple slime skin, angry expression, spikes forming, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, aggressive pose",
            "skill": "anime, full body, wide angle, dark matter slime girl, translucent purple slime skin, using skill, dark matter explosion, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, dark matter slime girl, translucent purple slime skin, victory pose, forming shape, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, dark matter slime girl, translucent purple slime skin, defeated pose, splattered, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, flat pose",
            "gallery_lv1": "anime, full body, wide angle, dark matter slime girl, translucent purple slime skin, curious expression, looking at viewer, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, cute pose"
        },
        lore: {
            "title": "암흑의 점액질",
            "story": "암흑 물질로 이루어진 슬라임. 닿는 모든 것을 부식시키고 흡수한다. 형태가 일정하지 않아 물리 공격이 잘 통하지 않는다. 작다고 무시했다가는 뼈도 못 추리기 십상이다.",
            "personality": "Mindless"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "꿈틀... 꿈틀...",
                "녹인다... 흡수한다...",
                "흐물... 흐물..."
            ],
            interaction: [
                "다... 내 거야...",
                "끈적... 기분 나빠?",
                "만지면... 녹아..."
            ],
            gift: [
                "먹는 거? 꿀꺽...",
                "녹여 먹을래.",
                "더 줘..."
            ],
            special: [
                "모조리 녹아라!",
                "산성 분출!",
                "형체 없는 공포!"
            ]
        },
        lines: {
            normal: "나는... 암흑 그 자체...",
            touch_head: "머리? 몸통? 구분이 없어.",
            touch_chest: "핵을 건드리지 마...",
            touch_legs: "발이 어디 있냐고?",
            touch_special: "뼈도 안 남기고 먹어주지."
        }
    },
    {
        id: "void_walker",
        name: "공허의 보행자",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_void_walker.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_walker.png",
            "joy": "images/creatures/abyss/creature_void_walker_joy.png",
            "sad": "images/creatures/abyss/creature_void_walker_sad.png",
            "angry": "images/creatures/abyss/creature_void_walker_angry.png",
            "skill": "images/creatures/abyss/creature_void_walker_skill.png",
            "victory": "images/creatures/abyss/creature_void_walker_victory.png",
            "defeat": "images/creatures/abyss/creature_void_walker_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_walker_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, void walker girl, tattered hooded cloak, void stepping, purple portals, mysterious face, glowing eyes, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, walking pose",
            "idle": "anime, full body, wide angle, void walker girl, tattered hooded cloak, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, void walker girl, tattered hooded cloak, happy expression, hood down, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, waving pose",
            "sad": "anime, full body, wide angle, void walker girl, tattered hooded cloak, sad expression, looking at void, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, lonely pose",
            "angry": "anime, full body, wide angle, void walker girl, tattered hooded cloak, angry expression, void energy flaring, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, combat pose",
            "skill": "anime, full body, wide angle, void walker girl, tattered hooded cloak, using skill, dimension warp, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, void walker girl, tattered hooded cloak, victory pose, floating over void, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, void walker girl, tattered hooded cloak, defeated pose, cloak torn, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, kneeling",
            "gallery_lv1": "anime, full body, wide angle, void walker girl, tattered hooded cloak, mysterious smile, reaching out, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dating event"
        },
        lore: {
            "title": "공허의 방랑자",
            "story": "공허를 떠도는 망령. 원래는 다른 차원의 모험가였으나 심연에 잠식되어 자아를 잃었다. 무의식적으로 생명체를 찾아 헤매며, 닿는 자에게 공허의 저주를 건다.",
            "personality": "Curses"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "여긴 어디지...?",
                "빛이 그리워...",
                "나를... 데려가 줘..."
            ],
            interaction: [
                "가까이 오지 마...",
                "저주가... 옮을 거야...",
                "내 이름을... 잊어버렸어."
            ],
            gift: [
                "이건... 따뜻해.",
                "기억 나지 않아.",
                "고마워... 아마도."
            ],
            special: [
                "내 고통을 느껴봐라!",
                "공허의 손길!",
                "함께 타락하자..."
            ]
        },
        lines: {
            normal: "돌아갈 곳이 없어...",
            touch_head: "머리가 깨질 것 같아.",
            touch_chest: "가슴에 구멍이 뚫렸어.",
            touch_legs: "더 이상 걷고 싶지 않아.",
            touch_special: "나와 함께 영원히 여기 있자."
        }
    },
    {
        id: "abyss_leech",
        name: "심연의 거머리",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_abyss_leech.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_abyss_leech.png",
            "joy": "images/creatures/abyss/creature_abyss_leech_joy.png",
            "sad": "images/creatures/abyss/creature_abyss_leech_sad.png",
            "angry": "images/creatures/abyss/creature_abyss_leech_angry.png",
            "skill": "images/creatures/abyss/creature_abyss_leech_skill.png",
            "victory": "images/creatures/abyss/creature_abyss_leech_victory.png",
            "defeat": "images/creatures/abyss/creature_abyss_leech_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_abyss_leech_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, abyss leech girl, dark slick suit, leech tails, purple markings, sucking mask or accessory, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, clinging pose",
            "idle": "anime, full body, wide angle, abyss leech girl, dark slick suit, leech tails, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, abyss leech girl, dark slick suit, leech tails, happy expression, thirst satisfied, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, smiling pose",
            "sad": "anime, full body, wide angle, abyss leech girl, dark slick suit, leech tails, sad expression, hungry, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, drooping pose",
            "angry": "anime, full body, wide angle, abyss leech girl, dark slick suit, leech tails, angry expression, hissing, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, aggressive pose",
            "skill": "anime, full body, wide angle, abyss leech girl, dark slick suit, leech tails, using skill, life drain, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, abyss leech girl, dark slick suit, leech tails, victory pose, full belly, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, satisfied",
            "defeat": "anime, full body, wide angle, abyss leech girl, dark slick suit, leech tails, defeated pose, dried up, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, collapsed",
            "gallery_lv1": "anime, full body, wide angle, abyss leech girl, dark slick suit, leech tails, seductive gaze, licking lips, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, close up"
        },
        lore: {
            "title": "에너지 기생충",
            "story": "심연의 생명력을 흡수하는 거대 거머리. 숙주의 몸에 달라붙어 피와 마력을 빨아먹는다. 떼를 지어 다니며 거대한 몬스터조차 말려 죽일 수 있다.",
            "personality": "Parasitic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "피... 피 냄새...",
                "쪽쪽 빨아먹을 테다.",
                "꿈틀꿈틀..."
            ],
            interaction: [
                "살점이 부드럽군.",
                "달라붙으면 안 떨어져!",
                "네 피는 무슨 맛이지?"
            ],
            gift: [
                "피가 아니잖아?",
                "이것도 먹을 순 있겠군.",
                "냠냠..."
            ],
            special: [
                "흡혈!",
                "말라 비틀어져라!",
                "기생 완료!"
            ]
        },
        lines: {
            normal: "나는 배가 고프다... 언제나...",
            touch_head: "머리에서 피를 뽑아주지.",
            touch_chest: "심장 가까이 붙어있고 싶어.",
            touch_legs: "다리에 붙어도 되겠나?",
            touch_special: "네 모든 생명력을 내가 가져가겠어!"
        }
    },
    {
        id: "void_emperor",
        name: "공허의 여제 에레보스",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 30, baseInt: 70,
        image: "images/creatures/abyss/creature_void_emperor.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_emperor.png",
            "joy": "images/creatures/abyss/creature_void_emperor_joy.png",
            "sad": "images/creatures/abyss/creature_void_emperor_sad.png",
            "angry": "images/creatures/abyss/creature_void_emperor_angry.png",
            "skill": "images/creatures/abyss/creature_void_emperor_skill.png",
            "victory": "images/creatures/abyss/creature_void_emperor_victory.png",
            "defeat": "images/creatures/abyss/creature_void_emperor_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_emperor_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_void_emperor_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_void_emperor_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "(masterpiece:1.5), (best quality:1.4), (nikke style:1.4), (blue archive style:1.2), full body, solo, void_emperor_erebus, female, (pale skin:1.3), (long black hair floating like smoke:1.3), (void eyes:1.2), wearing elegant black evening dress made of shadows, (high slit:1.3), (exposed back:1.2), (glamorous body:1.4), (huge breasts:1.3), (wide hips:1.4), dark purple aura, void particles, mysterious and cold expression, abyss background",
            "idle": "standing pose, looking at viewer with cold eyes, floating slightly, shadows swirling, no text, no ui",
            "joy": "faint smile, closing eyes, hand on cheek, soft shadow particles, relaxing atmosphere, no text, no ui",
            "sad": "hugging self, looking down, shadows fading, lonely expression, pale face, no text, no ui",
            "angry": "eyes glowing purple, hair turning into spikes, void hole opening behind, dark energy explosion, menacing, no text, no ui",
            "skill": "raising both hands, summoning a massive black hole, cinematic lighting, warping reality, masterpiece, no text, no ui",
            "victory": "sitting on a throne of void, crossing legs, looking down arrogantly, swirling darkness, no text, no ui",
            "defeat": "kneeling, dress dissipating into smoke, vulnerable expression, covering body with arms, weak aura, no text, no ui",
            "gallery_lv1": "dating sim event, standing on a balcony overlooking the abyss, wind blowing dress, turning to look at viewer, melancholy but beautiful, detailed background, no text, no ui",
            "gallery_lv2": "dating sim event, creating a private space of darkness, sitting on a floating void chair, dress slipping off shoulder, beckoning viewer, seductive gaze, unknown light source, no text, no ui",
            "gallery_lv3": "dating sim event, engulfed in soft shadows, lying down, dress semi-transparent, heart shaped pupils in void eyes, reaching out, intimate and surreal, overwhelming affection, no text, no ui"
        },
        lore: {
            "title": "영원한 공허의 지배자",
            "story": "우주 창조 이전부터 존재했던 원초적 어둠의 화신. 모든 빛과 물질을 삼키는 공허 그 자체이며, 현현한 모습조차 실체가 아닌 그림자에 불과하다. 냉철하고 감정이 없어 보이나, 존재의 고독을 이해하는 자에게만 마음을 연다. 공허의 힘으로 만물을 무(無)로 되돌릴 수 있다.",
            "origin": "고대 신화 / 태초의 어둠",
            "personality": "Nihilistic & Solitary"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "공허는 모든 것의 시작이자 끝...",
                "존재한다는 것이 고통일까, 축복일까.",
                "이 어둠 속에서 나는 홀로 영원히..."
            ],
            interaction: [
                "만지다니... 네 손길마저 언젠간 사라질 텐데.",
                "온기... 이상하군. 이런 감각은 처음이야.",
                "공허를 두려워하지 않는 건가?"
            ],
            gift: [
                "선물? ...고마워. 오래 기억할게.",
                "이 작은 것이... 영원한 고독을 채워줄 수 있을까.",
                "네가 준 것만은 무로 돌리지 않을게."
            ],
            special: [
                "공허여, 만물을 집어삼켜라!",
                "존재의 끝을 보여주마!",
                "모든 것은 무로 돌아간다!"
            ]
        },
        lines: {
            normal: "공허 속에서도 너만은... 빛나 보여.",
            touch_head: "머리를... 쓰다듬는구나. 따뜻해.",
            touch_chest: "이 공허한 가슴에도 뭔가 차오르는구나...",
            touch_legs: "만지면 사라질 것 같지 않아?",
            touch_special: "너와 함께라면 영원한 고독도 견딜 수 있을 것 같아."
        }
    },
    {
        id: "dragon_chaos",
        name: "혼돈의 용희 티아마트",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 50, baseInt: 50,
        image: "images/creatures/abyss/creature_dragon_chaos.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_dragon_chaos.png",
            "joy": "images/creatures/abyss/creature_dragon_chaos_joy.png",
            "sad": "images/creatures/abyss/creature_dragon_chaos_sad.png",
            "angry": "images/creatures/abyss/creature_dragon_chaos_angry.png",
            "skill": "images/creatures/abyss/creature_dragon_chaos_skill.png",
            "victory": "images/creatures/abyss/creature_dragon_chaos_victory.png",
            "defeat": "images/creatures/abyss/creature_dragon_chaos_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_dragon_chaos_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_dragon_chaos_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_dragon_chaos_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "(masterpiece:1.5), (best quality:1.4), (nikke style:1.4), (blue archive style:1.2), full body, solo, tiamat_chaos, female, (beautiful exotic face:1.4), (purple skin:1.1), (dragon horns:1.3), (multiple dragon tails:1.4), long violet hair, glowing yellow eyes, wearing revealing dragon scale armor bikini, (glamorous body:1.4), (huge breasts:1.3), (wide hips:1.4), (thick thighs:1.3), chaotic energy aura, sea of chaos background, powerful and motherly",
            "idle": "standing pose, hands on hips, confident smile, tails swaying, looking at viewer, no text, no ui",
            "joy": "laughing loudly, open arms, hugging pose, tails forming a heart, happy expression, no text, no ui",
            "sad": "looking down, tails drooping, tears in eyes, rain of chaos, gloomy atmosphere, no text, no ui",
            "angry": "roaring, dragon wings spreading, purple lightning, chaotic sea raging, fierce expression, no text, no ui",
            "skill": "summoning monster children, chaotic magic circle, cinematic lighting, extreme angle, masterpiece, no text, no ui",
            "victory": "floating in air, tails spread out like a throne, arrogant smile, holding a chaos orb, no text, no ui",
            "defeat": "collapsed on water surface, scales broken, armor torn, panting, humiliated look, no text, no ui",
            "gallery_lv1": "dating sim event, walking on a beach of chaos, playing with water, splashing viewer, playful smile, sunset background, no text, no ui",
            "gallery_lv2": "dating sim event, soaking in a chaos pool, wet skin, hair sticking to body, blushing, inviting viewer to join, steamy atmosphere, no text, no ui",
            "gallery_lv3": "dating sim event, lying on a nest of dragon tails, completely relaxed, armor removed, covering bits with tails, heart shaped pupils, motherly affection, no text, no ui"
        },
        lore: {
            "title": "태초의 혼돈",
            "story": "바빌로니아 신화의 원초적 여신. 바다와 혼돈을 상징하며, 모든 신들의 어머니였으나 자식들에게 배신당했다. 분노로 괴물들을 창조하여 신들과 전쟁을 벌였으나 패배했다. 이곳에서는 용의 모습으로 현현하여, 창조와 파괴의 양면성을 지녔다. 혼돈의 힘으로 새로운 생명을 창조할 수 있다.",
            "origin": "바빌로니아 신화 / 태초의 바다",
            "personality": "Motherly & Vengeful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "혼돈이야말로 진정한 자유...",
                "모든 신의 어머니, 나를 기억하는 자 있나.",
                "창조와 파괴, 둘은 하나일 뿐."
            ],
            interaction: [
                "감히 어머니를 만지다니... 용기있구나.",
                "이 혼돈의 힘... 느껴지는가?",
                "내 자식들처럼 배신하지는 않겠지?"
            ],
            gift: [
                "선물? ...어머니에게 바치는 제물인가?",
                "오랜만에 받아보는 경의로군.",
                "좋아. 너만은 내 곁에 둬야겠어."
            ],
            special: [
                "혼돈이여, 세계를 집어삼켜라!",
                "태초의 분노를 보여주마!",
                "창조의 어머니가 파괴를 가져온다!"
            ]
        },
        lines: {
            normal: "모든 것은 혼돈에서 시작되었다.",
            touch_head: "뿔을 만지는구나... 대담해.",
            touch_chest: "어머니의 심장 고동을 느껴봐라.",
            touch_legs: "용의 비늘, 단단하지?",
            touch_special: "너는 내 새로운 자식이 되어줄래?"
        }
    },
    {
        id: "kraken_trainee",
        name: "연습생 루루",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Water"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/abyss/creature_lulu_01_trainee.png",
        evolvesTo: "kraken_idol",
        evolveConditions: {
            star: 3,
            level: 20,
            affectionLevel: 2
        },
        sprites: {
            "idle": "images/creatures/abyss/creature_lulu_01_trainee.png",
            "joy": "images/creatures/abyss/creature_lulu_01_trainee_joy.png",
            "sad": "images/creatures/abyss/creature_lulu_01_trainee_sad.png",
            "angry": "images/creatures/abyss/creature_lulu_01_trainee_angry.png",
            "skill": "images/creatures/abyss/creature_lulu_01_trainee_skill.png",
            "victory": "images/creatures/abyss/creature_lulu_01_trainee_victory.png",
            "defeat": "images/creatures/abyss/creature_lulu_01_trainee_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_lulu_01_trainee_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, abyss, cute trainee girl, tentacles hair, sweat drops, practice outfit, Water, 연습생 루루",
            "idle": "practice dance pose, determined face",
            "gallery_lv1": "selfie in practice room, tired but happy, mirror shot"
        },
        lore: {
            "title": "꿈꾸는 연습생",
            "story": "심연의 아이돌이 되기 위해 노력하는 루루의 데뷔 전 모습. 아직은 서툴지만 열정만큼은 누구에게도 뒤지지 않는다. 매일 10시간씩 춤 연습을 하고 있다.",
            "origin": "심연 엔터테인먼트 연습생",
            "personality": "Hardworking & Cute"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["하나 둘, 하나 둘!", "아직 멀었어... 더 연습해야 해!", "데뷔하면 꼭 응원해줄 거지?"],
            interaction: ["앗! 방해하면 안 돼~", "땀 냄새 나려나... 헤헤.", "이 동작이 잘 안 돼서 고민이야."],
            gift: ["우와! 이거 먹고 힘낼게!", "연습생한테 이런 걸 줘도 돼?", "매니저님한테는 비밀이야~"],
            special: ["언젠가 꼭, 최고의 무대에 설 거야!", "나를 지켜봐 줘, 프로듀서... 아, 아니 친구야!", "내 노래가 심연 끝까지 닿을 때까지!"]
        },
        lines: { normal: "연습만이 살길이다!" }
    },
    {
        id: "kraken_idol",
        name: "아이돌 루루",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Water"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/abyss/creature_lulu_02_idol.png",
        evolvesTo: "kraken_worldstar",
        evolveConditions: {
            star: 5,
            level: 40,
            affectionLevel: 5
        },
        sprites: {
            "idle": "images/creatures/abyss/creature_lulu_02_idol.png",
            "joy": "images/creatures/abyss/creature_lulu_02_idol_joy.png",
            "sad": "images/creatures/abyss/creature_lulu_02_idol_sad.png",
            "angry": "images/creatures/abyss/creature_lulu_02_idol_angry.png",
            "skill": "images/creatures/abyss/creature_lulu_02_idol_skill.png",
            "victory": "images/creatures/abyss/creature_lulu_02_idol_victory.png",
            "defeat": "images/creatures/abyss/creature_lulu_02_idol_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_lulu_02_idol_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, abyss, idol girl, stage costume, frills and ribbons, microphone, Water, 아이돌 루루",
            "idle": "singing pose, wink, happy smile",
            "gallery_lv1": "concert stage, spotlight, singing to fans"
        },
        lore: {
            "title": "심연의 샛별",
            "story": "긴 연습생 생활 끝에 데뷔한 루루. 상큼하고 발랄한 매력으로 심연의 생물들을 사로잡고 있다. 팬레터를 읽는 것이 취미이며, 악플에는 조금 상처받는다.",
            "origin": "심연 엔터테인먼트 소속 아이돌",
            "personality": "Cheerful & Charming"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["안녕! 루루의 무대에 온 걸 환영해~", "오늘 의상 어때? 귀엽지?", "팬 서비스는 확실하게!"],
            interaction: ["꺄악! 스킨십은 금지라구~", "헤헤, 사인해 줄까?", "카메라가 보고 있어! 조심해~"],
            gift: ["어머! 팬의 선물은 언제나 감동이야!", "이거 SNS에 올려도 돼?", "사랑해! 넌 최고의 팬이야!"],
            special: ["무대 위에서 난 가장 빛나!", "모두의 사랑이 나를 강하게 만들어!", "앵콜! 앵콜! 더 크게 외쳐봐!"]
        },
        lines: { normal: "루루~ 비~ 빔!" }
    },
    {
        id: "kraken_worldstar",
        name: "월드스타 루루",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_kraken_worldstar_gallery_lv3.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_kraken_worldstar_gallery_lv3.png",
            "joy": "images/creatures/abyss/creature_kraken_worldstar_joy.png",
            "sad": "images/creatures/abyss/creature_kraken_worldstar_sad.png",
            "angry": "images/creatures/abyss/creature_kraken_worldstar_angry.png",
            "skill": "images/creatures/abyss/creature_kraken_worldstar_skill.png",
            "victory": "images/creatures/abyss/creature_kraken_worldstar_victory.png",
            "defeat": "images/creatures/abyss/creature_kraken_worldstar_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_kraken_worldstar_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_kraken_worldstar_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_kraken_worldstar_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 월드스타 루루",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 월드스타 루루, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 월드스타 루루, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 월드스타 루루, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "심해의 아이돌",
            "story": "크라켄의 후예로 태어났으나, 심연의 어둠을 싫어하여 표층으로 올라왔다. 우연히 인간세계의 아이돌 문화를 접하고 매료되어, 자신도 '월드스타'가 되기로 결심했다. 촉수를 이용한 화려한 춤과 공연으로 유명하며, 팬들을 위해서라면 무엇이든 한다. 밝고 긍정적이지만, 무대 뒤에서는 외로움을 느낀다.",
            "origin": "북유럽 전설 / 심해",
            "personality": "Cheerful & Lonely"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "오늘도 팬분들을 위해 최선을~!",
                "루루의 공연, 기대해주세요!",
                "촉수 댄스, 연습 중이에요!"
            ],
            interaction: [
                "와! 팬이신가요? 반가워요!",
                "만져도 돼요! 루루는 팬서비스를 아끼지 않아요~",
                "헤헤, 간지럽네요!"
            ],
            gift: [
                "팬레터? 선물? 정말요? 감동...",
                "루루를 위해 준비해주신 거예요? 최고!",
                "이건 평생 보관할게요! 고마워요!"
            ],
            special: [
                "루루의 스페셜 스테이지, 시작!",
                "월드스타의 진가를 보여드릴게요!",
                "모두 루루와 함께 춤춰요!"
            ]
        },
        lines: {
            normal: "루루는 모두의 아이돌이에요!",
            touch_head: "머리 쓰다듬기? 루루, 좋아요!",
            touch_chest: "심장이 두근두근... 무대 전 같아요.",
            touch_legs: "촉수도 만져보실래요? 부드러워요!",
            touch_special: "이런 팬서비스는 당신만 특별해요...♡"
        }
    },
    {
        id: "cthulhu",
        name: "별의 지배자 크툴루",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 60, baseInt: 40,
        image: "images/creatures/abyss/creature_cthulhu.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_cthulhu.png",
            "joy": "images/creatures/abyss/creature_cthulhu_joy.png",
            "sad": "images/creatures/abyss/creature_cthulhu_sad.png",
            "angry": "images/creatures/abyss/creature_cthulhu_angry.png",
            "skill": "images/creatures/abyss/creature_cthulhu_skill.png",
            "victory": "images/creatures/abyss/creature_cthulhu_victory.png",
            "defeat": "images/creatures/abyss/creature_cthulhu_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_cthulhu_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_cthulhu_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_cthulhu_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "(masterpiece:1.5), (best quality:1.4), (nikke style:1.4), (blue archive style:1.2), full body, solo, cthulhu_girl, female, (cute sleepy face:1.3), (green tentacle hair:1.4), (dragon wings:1.2), green eyes, wearing loose oversized white shirt (boyfriend shirt), (no pants), (glamorous body:1.4), (huge breasts:1.3), (wide hips:1.4), (thick thighs:1.3), holding a cute octopus plushie, underwater city background (R'lyeh), bubbles, mysterious lighting",
            "idle": "standing pose, yawning, rubbing eyes, sleepy expression, cute pose, no text, no ui",
            "joy": "hugging plushie tightly, smiling happily, bubbles floating, eyes closed in delight, no text, no ui",
            "sad": "sitting on ground, hugging knees, looking down, plushie on floor, gloomy bubbles, no text, no ui",
            "angry": "tentacles flaring up, eyes glowing red, dark aura, shadows looming, scary expression, no text, no ui",
            "skill": "summoning massive tentacles from ground, cinematic angle, green energy blast, masterpiece, fierce look, no text, no ui",
            "victory": "sleeping floating in air, drooling slightly, peaceful expression, victory peace sign in sleep, no text, no ui",
            "defeat": "lying on side, shirt torn, covered in ink/slime, crying, plushie torn, messy hair, no text, no ui",
            "gallery_lv1": "dating sim event, sitting on a rock in R'lyeh, dipping feet in water, looking at viewer curiously, tilting head, innocent look, no text, no ui",
            "gallery_lv2": "dating sim event, waking up in bed (underwater room), stretching arms, shirt lifting up, exposed midriff and panties, sleepy blush, morning light, no text, no ui",
            "gallery_lv3": "dating sim event, tentacles gently wrapping around viewer (POV), pulling viewer into a hug, heart shaped pupils, heavy blush, mouth open, overwhelming obsession, no text, no ui"
        },
        lore: {
            "title": "잠들어 꿈꾸는 자",
            "story": "태평양 깊은 곳, R'lyeh에 잠들어 있는 고대의 신. 인간의 이성으로는 이해할 수 없는 존재이며, 그의 꿈만으로도 세상에 영향을 미친다. 수많은 狂信徒들이 그의 부활을 기다리고 있다. 이곳에서는 일부만 현현하여 활동하나, 그것만으로도 충분히 강대하다. 촉수와 거대한 날개를 지녔으며, 보는 것만으로도 정신이 무너진다.",
            "origin": "크툴루 신화 / R'lyeh",
            "personality": "Incomprehensible & Ancient"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "Ph'nglui mglw'nafh...",
                "꿈속에서 기다리고 있었다.",
                "인간의 이성은 한계가 있지..."
            ],
            interaction: [
                "감히 나를 만지다니... 광기가 필요한가?",
                "이 촉수의 감촉, 이해할 수 없을 것이다.",
                "네 정신이 무너지지 않아 다행이로군."
            ],
            gift: [
                "선물? 흥미로운 행위구나.",
                "인간의 물건... 오래간만에 보는군.",
                "이것으로 내 심기를 건드릴 생각인가?"
            ],
            special: [
                "R'lyeh가 깨어난다!",
                "광기여, 세상을 집어삼켜라!",
                "고대의 힘을 보여주마!"
            ]
        },
        lines: {
            normal: "Cthulhu fhtagn...",
            touch_head: "머리를... 아니, 이것은 촉수다.",
            touch_chest: "이 심장은 영겁의 시간을 견뎌왔다.",
            touch_legs: "날개를 만지고 싶은가?",
            touch_special: "네 정신이 무너지지 않는 것이 신기하군."
        }
    },
    {
        id: "nyarlathotep",
        name: "기어다니는 혼돈 니알라토텝",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_nyarlathotep.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_nyarlathotep.png",
            "joy": "images/creatures/abyss/creature_nyarlathotep_joy.png",
            "sad": "images/creatures/abyss/creature_nyarlathotep_sad.png",
            "angry": "images/creatures/abyss/creature_nyarlathotep_angry.png",
            "skill": "images/creatures/abyss/creature_nyarlathotep_skill.png",
            "victory": "images/creatures/abyss/creature_nyarlathotep_victory.png",
            "defeat": "images/creatures/abyss/creature_nyarlathotep_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_nyarlathotep_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_nyarlathotep_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_nyarlathotep_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "(masterpiece, best quality, ultra-detailed), distinct nikke style, hyung-tae kim style, oil painting texture, thick coating, glossy skin, extremely beautiful female nyarlathotep, crawling chaos, long wavy silver hair, glowing red eyes with heart-shaped pupils, wearing stylish black body-con dress with futuristic red energy lines, thigh-high boots, heavy cleavage, sideboob, standing full body pose, posing playfully with finger on lips, simple purple gradient background, soft lighting, perfect anatomy, thick thighs, extremely wide hips, tiny waist, (human-like:1.5), semi-realism anime face, attractive and cute, NO tentacles on face, NO slime, NO monster features, NO text",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 기어다니는 혼돈 니알라토텝, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 기어다니는 혼돈 니알라토텝, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 기어다니는 혼돈 니알라토텝, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "기어다니는 혼돈",
            "story": "천의 얼굴을 가진 혼돈의 사자. 인간의 모습을 하고 세상을 활보하며, 파멸과 광기를 퍼뜨리는 것을 즐긴다. 아우터 갓들의 영혼이자 전령이며, 과학과 마법을 동시에 다루는 사악한 지능을 지녔다.",
            "personality": "Chaotic & Deceptive"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "다음엔 어떤 가면을 쓸까?",
                "너희의 절망이 나에겐 유희일 뿐이지.",
                "혼돈만이 유일한 진리다."
            ],
            interaction: [
                "내 진짜 모습을 보고 싶나?",
                "후후, 재미있는 반응이군.",
                "네 운명을 내가 바꿔줄 수도 있어."
            ],
            gift: [
                "흥미롭군. 받아주지.",
                "대가 없는 선물은 없다.",
                "이걸로 무엇을 원하지?"
            ],
            special: [
                "혼돈의 연주를 들어라!",
                "모든 것은 나의 장난감이다!",
                "절망하라, 그리고 숭배하라!"
            ]
        },
        lines: {
            normal: "나는 어디에나 존재한다.",
            touch_head: "머리를 쓰다듬다니, 겁도 없군.",
            touch_chest: "심장 대신 혼돈이 뛰고 있다.",
            touch_legs: "기어다니는 혼돈을 따라잡을 순 없어.",
            touch_special: "네 영혼을 내 컬렉션에 추가해주지."
        }
    },
    {
        id: "demon_king",
        name: "마왕 바알",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_demon_king.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_demon_king.png",
            "joy": "images/creatures/abyss/creature_demon_king_joy.png",
            "sad": "images/creatures/abyss/creature_demon_king_sad.png",
            "angry": "images/creatures/abyss/creature_demon_king_angry.png",
            "skill": "images/creatures/abyss/creature_demon_king_skill.png",
            "victory": "images/creatures/abyss/creature_demon_king_victory.png",
            "defeat": "images/creatures/abyss/creature_demon_king_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_demon_king_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_demon_king_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_demon_king_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, demon king baal girl, black gothic military uniform, mini skirt, bat wings, horns, red lightning, arrogant expression, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, arms crossed",
            "idle": "anime, full body, wide angle, demon king baal girl, black gothic military uniform, mini skirt, bat wings, horns, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, commanding pose",
            "joy": "anime, full body, wide angle, demon king baal girl, black gothic military uniform, bat wings, horns, red lightning, arrogant laugh, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, laughing pose",
            "sad": "anime, full body, wide angle, demon king baal girl, black gothic military uniform, bat wings, horns, frustrated expression, looking away, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, annoyed pose",
            "angry": "anime, full body, wide angle, demon king baal girl, black gothic military uniform, bat wings, horns, red lightning intensifying, angry expression, glowing eyes, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, threatening pose",
            "skill": "anime, full body, wide angle, demon king baal girl, black gothic military uniform, bat wings, horns, using skill, massive lightning bolt, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, demon king baal girl, black gothic military uniform, bat wings, horns, victory pose, stepping on debris, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dominant",
            "defeat": "anime, full body, wide angle, demon king baal girl, black gothic military uniform, bat wings, horns, defeated pose, clothes torn, angry blush, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, kneeling"
        },
        lore: {
            "title": "폭풍의 마왕",
            "story": "지옥의 7대 마왕 중 하나이자 파리와 오물의 군주. 하지만 이곳에서는 붉은 번개를 다루는 압도적인 힘의 소유자로 현현했다. 강함을 절대적인 가치로 여기며, 자신보다 약한 자를 철저히 유린하는 가학적인 성격을 지녔다.",
            "origin": "솔로몬의 72악마 / 지옥",
            "personality": "Arrogant & Sadistic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "나는 최초의 왕이다.",
                "약한 것들은 내 앞에서 사라져라.",
                "폭풍이... 나를 부르는군."
            ],
            interaction: [
                "감히 옥체에 손을 대다니.",
                "전율하라, 이것이 왕의 힘이다.",
                "무릎 꿇어라!"
            ],
            gift: [
                "조공인가? 나쁘지 않군.",
                "나에게 바치는 영광을 허락하마.",
                "미천한 것 치고는 제법이구나."
            ],
            special: [
                "지옥의 번개여!",
                "티끌 하나 남기지 않겠다!",
                "절대적인 힘 앞에 굴복해라!"
            ]
        },
        lines: {
            normal: "나의 등장은 곧 재앙이다.",
            touch_head: "왕관의 무게를 견딜 수 있겠나?",
            touch_chest: "나의 분노는 번개보다 뜨겁지.",
            touch_legs: "내 발밑이 네가 있을 곳이다.",
            touch_special: "고통 속에서 나를 찬양하게 될 것이다."
        }
    },
    {
        id: "shub",
        name: "만 마리 새끼를 품은 숲의 염소",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_shub.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_shub.png",
            "joy": "images/creatures/abyss/creature_shub_joy.png",
            "sad": "images/creatures/abyss/creature_shub_sad.png",
            "angry": "images/creatures/abyss/creature_shub_angry.png",
            "skill": "images/creatures/abyss/creature_shub_skill.png",
            "victory": "images/creatures/abyss/creature_shub_victory.png",
            "defeat": "images/creatures/abyss/creature_shub_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_shub_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_shub_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_shub_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, shub-niggurath girl, black goat horns, white silk priestess robe, see-through, massive breasts, wide hips, nature magic, forest background, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, motherly smile",
            "idle": "anime, full body, wide angle, shub-niggurath girl, black goat horns, white silk priestess robe, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, shub-niggurath girl, black goat horns, white silk priestess robe, happy expression, holding hands together, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, gentle pose",
            "sad": "anime, full body, wide angle, shub-niggurath girl, black goat horns, white silk priestess robe, sad expression, looking down, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, worried pose",
            "angry": "anime, full body, wide angle, shub-niggurath girl, black goat horns, white silk priestess robe, angry expression, tentacles emerging from robe, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, terrifying pose",
            "skill": "anime, full body, wide angle, shub-niggurath girl, black goat horns, white silk priestess robe, using skill, forest overgrowth, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, shub-niggurath girl, black goat horns, white silk priestess robe, victory pose, open arms, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, embracing",
            "defeat": "anime, full body, wide angle, shub-niggurath girl, black goat horns, white silk priestess robe, defeated pose, robe torn, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, kneeling"
        },
        lore: {
            "title": "검은 숲의 어머니",
            "story": "천 마리 새끼를 거느린 숲의 검은 염소. 풍요와 다산의 상징이자, 끔찍한 생명력의 원천이다. 그녀의 품은 따뜻하면서도 영원히 벗어날 수 없는 굴레와 같다. 모든 생명을 자신의 아이로 만들고자 하는 뒤틀린 모성애를 지녔다.",
            "origin": "크툴루 신화 / 검은 숲",
            "personality": "Motherly & Obsessive"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "이리 온, 아가야...",
                "숲은 언제나 너를 환영한단다.",
                "내 품에서 영원히 쉬렴."
            ],
            interaction: [
                "착하지, 내 아이가 되고 싶니?",
                "따뜻하지? 여기가 네 집이야.",
                "어딜 가려고? 못 가..."
            ],
            gift: [
                "어머, 효도하는 거니?",
                "기특하기도 해라.",
                "이것도 숲의 양분이 되겠지."
            ],
            special: [
                "생명은 끝없이 태어난단다!",
                "검은 숲으로 돌아오렴!",
                "천 마리 아이들아, 일어나라!"
            ]
        },
        lines: {
            normal: "숲의 숨결이 느껴지니?",
            touch_head: "뿔은 조심하렴.",
            touch_chest: "모든 생명이 이곳에서 시작되었단다.",
            touch_legs: "더 깊은 숲으로 안내해줄게.",
            touch_special: "너는 이제 영원히 나의 것이란다... 사랑스러운 아가."
        }
    },
    {
        id: "hastur",
        name: "황색 옷의 왕 하스터",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_hastur.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_hastur.png",
            "joy": "images/creatures/abyss/creature_hastur_joy.png",
            "sad": "images/creatures/abyss/creature_hastur_sad.png",
            "angry": "images/creatures/abyss/creature_hastur_angry.png",
            "skill": "images/creatures/abyss/creature_hastur_skill.png",
            "victory": "images/creatures/abyss/creature_hastur_victory.png",
            "defeat": "images/creatures/abyss/creature_hastur_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_hastur_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_hastur_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_hastur_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, hastur girl, yellow hooded robe, mask, wind magic, mysterious aura, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, floating pose",
            "idle": "anime, full body, wide angle, hastur girl, yellow hooded robe, mask, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, hastur girl, yellow hooded robe, mask, happy expression (implied), hood blown back, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, playful breeze",
            "sad": "anime, full body, wide angle, hastur girl, yellow hooded robe, mask, sad aura, robe drooping, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, motionless",
            "angry": "anime, full body, wide angle, hastur girl, yellow hooded robe, mask, angry aura, violet wind raging, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, tempest pose",
            "skill": "anime, full body, wide angle, hastur girl, yellow hooded robe, mask, using skill, yellow sign magic, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, hastur girl, yellow hooded robe, mask, victory pose, floating high, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, majestic",
            "defeat": "anime, full body, wide angle, hastur girl, yellow hooded robe, mask cracked, defeated pose, falling, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, collapsed"
        },
        lore: {
            "title": "황색 옷의 왕",
            "story": "'이름을 말해선 안 되는 그분'의 화신. 별들 사이의 공간을 걷는 바람의 신이다. 황색 옷과 창백한 가면을 쓰고 있으며, 가면 아래의 진실을 본 자는 영원한 광기에 휩싸인다. 카르코사의 왕좌에서 우주의 종말을 기다리고 있다.",
            "origin": "크툴루 신화 / 카르코사",
            "personality": "Mysterious & Madness"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "바람이 불어온다...",
                "카르코사의 노래가 들리는가?",
                "가면 무도회는 끝나지 않아."
            ],
            interaction: [
                "가면을 벗기려 하지 마라.",
                "내 이름을 말했는가?",
                "진실은 감당할 수 없을 것이다."
            ],
            gift: [
                "황색의 징표를 주마.",
                "이것도 연극의 소품일 뿐.",
                "재미없군."
            ],
            special: [
                "보아라, 황색의 징표를!",
                "카르코사의 그림자가 드리운다!",
                "광기의 바람이여!"
            ]
        },
        lines: {
            normal: "별들이 제자리를 찾을 때가 온다.",
            touch_head: "내 생각은 인간의 언어로 표현할 수 없다.",
            touch_chest: "텅 빈 옷자락 속에는 무엇이 있을까?",
            touch_legs: "발자국 없이 걷는 법을 아는가?",
            touch_special: "가면 아래를 본 대가는 네 영혼이다."
        }
    },
    {
        id: "vampire_lord",
        name: "진홍의 여왕 카밀라",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_vampire_lord.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_vampire_lord.png",
            "joy": "images/creatures/abyss/creature_vampire_lord_joy.png",
            "sad": "images/creatures/abyss/creature_vampire_lord_sad.png",
            "angry": "images/creatures/abyss/creature_vampire_lord_angry.png",
            "skill": "images/creatures/abyss/creature_vampire_lord_skill.png",
            "victory": "images/creatures/abyss/creature_vampire_lord_victory.png",
            "defeat": "images/creatures/abyss/creature_vampire_lord_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_vampire_lord_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_vampire_lord_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_vampire_lord_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, vampire queen camilla, elegant gothic dress, red and black, pale skin, red eyes, bat wings, blood magic, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, seductive pose",
            "idle": "anime, full body, wide angle, vampire queen camilla, elegant gothic dress, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing elegant",
            "joy": "anime, full body, wide angle, vampire queen camilla, elegant gothic dress, happy expression, holding wine glass with blood, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, toasting",
            "sad": "anime, full body, wide angle, vampire queen camilla, elegant gothic dress, sad expression, looking away, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, lonely pose",
            "angry": "anime, full body, wide angle, vampire queen camilla, elegant gothic dress, angry expression, glowing red eyes, showing fangs, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hissing pose",
            "skill": "anime, full body, wide angle, vampire queen camilla, elegant gothic dress, using skill, blood bats swarm, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, vampire queen camilla, elegant gothic dress, victory pose, sitting on throne, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, regal",
            "defeat": "anime, full body, wide angle, vampire queen camilla, elegant gothic dress, defeated pose, dress torn, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, kneeling"
        },
        lore: {
            "title": "진홍의 뱀파이어",
            "story": "피의 귀부인 카밀라. 영원한 젊음과 아름다움을 유지하기 위해 흡혈을 한다. 우아하고 고혹적이지만, 배신자는 절대 용서하지 않는 잔혹함을 지녔다. 그녀의 성에는 수많은 희생자의 피로 채워진 목욕탕이 있다고 한다.",
            "origin": "고딕 호러 / 카밀라",
            "personality": "Elegant & Cruel"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "목이 마르구나...",
                "아름다움은 고통을 동반하지.",
                "달빛이 참 붉기도 하여라."
            ],
            interaction: [
                "가까이 오렴, 물지 않을게.",
                "피 냄새가... 향긋해.",
                "내 피부가 부러운 거니?"
            ],
            gift: [
                "와인인가? 아, 피로군.",
                "취향이 꽤 고급이네.",
                "잘 받을게, 나의 하인."
            ],
            special: [
                "피의 축제를 열자꾸나!",
                "붉게 물들어라!",
                "영원히 내 곁에서 시들어라!"
            ]
        },
        lines: {
            normal: "영원한 삶은 지루해... 네가 날 즐겁게 해줄래?",
            touch_head: "머리 스타일 망가지잖아.",
            touch_chest: "죽은 심장이라 뛰지 않아.",
            touch_legs: "내 다리에 키스하고 싶니?",
            touch_special: "네 피 한 방울까지 남김없이 마셔줄게."
        }
    },
    {
        id: "dagon",
        name: "심해의 거신 다곤",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_dagon.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_dagon.png",
            "joy": "images/creatures/abyss/creature_dagon_joy.png",
            "sad": "images/creatures/abyss/creature_dagon_sad.png",
            "angry": "images/creatures/abyss/creature_dagon_angry.png",
            "skill": "images/creatures/abyss/creature_dagon_skill.png",
            "victory": "images/creatures/abyss/creature_dagon_victory.png",
            "defeat": "images/creatures/abyss/creature_dagon_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_dagon_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_dagon_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_dagon_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, dagon girl, fish scales, aquatic armor, fins, trident, water magic, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, ruling pose",
            "idle": "anime, full body, wide angle, dagon girl, fish scales, aquatic armor, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, dagon girl, fish scales, aquatic armor, happy expression, holding trident up, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, smiling pose",
            "sad": "anime, full body, wide angle, dagon girl, fish scales, aquatic armor, sad expression, underwater gloom, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, looking down",
            "angry": "anime, full body, wide angle, dagon girl, fish scales, aquatic armor, angry expression, summoning tidal wave, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, fierce pose",
            "skill": "anime, full body, wide angle, dagon girl, fish scales, aquatic armor, using skill, trident thrust, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, dagon girl, fish scales, aquatic armor, victory pose, waves crashing behind, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, dagon girl, fish scales, aquatic armor, defeated pose, floating in water, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, unconscious"
        },
        lore: {
            "title": "심해의 아버지",
            "story": "딥 원들의 아버지이자 숭배의 대상. 심해의 거대한 지배자로, 폭풍과 해일을 부르며 바다의 모든 생물을 다스린다. 거대한 비늘로 뒤덮인 몸은 어떤 무기로도 뚫을 수 없으며, 그의 분노는 곧 자연재해와 같다.",
            "origin": "크툴루 신화 / 심해",
            "personality": "Dominant & Mighty"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "파도가 부르는 소리가 들린다.",
                "심해의 수압은 나에겐 산들바람이지.",
                "바다를 더럽히는 자, 용서치 않으리."
            ],
            interaction: [
                "비늘이 단단해서 아플 텐데.",
                "나의 힘을 시험하려는가?",
                "물러가라, 아직은 때가 아니다."
            ],
            gift: [
                "육지의 물건인가?",
                "바다에 바치는 공물로 알겠다.",
                "쓸모없군. 수장시켜라."
            ],
            special: [
                "해일을 일으켜라!",
                "심해의 분노를 느껴봐라!",
                "모든 것은 씻겨 내려갈 것이다!"
            ]
        },
        lines: {
            normal: "육지는 언젠가 바다 아래 잠길 것이다.",
            touch_head: "내 뿔은 심해의 보석보다 단단하지.",
            touch_chest: "내 폐활량은 무한하다.",
            touch_legs: "이봐, 미끄러질걸?",
            touch_special: "너를 심해의 왕국으로 초대하지... 숨이 막힐 정도로 아름다운 곳이야."
        }
    },
    {
        id: "knight_dullahan",
        name: "머리 없는 기사 듀라한",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_knight_dullahan.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_knight_dullahan.png",
            "joy": "images/creatures/abyss/creature_knight_dullahan_joy.png",
            "sad": "images/creatures/abyss/creature_knight_dullahan_sad.png",
            "angry": "images/creatures/abyss/creature_knight_dullahan_angry.png",
            "skill": "images/creatures/abyss/creature_knight_dullahan_skill.png",
            "victory": "images/creatures/abyss/creature_knight_dullahan_victory.png",
            "defeat": "images/creatures/abyss/creature_knight_dullahan_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_knight_dullahan_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_knight_dullahan_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_knight_dullahan_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, dullahan girl, holding own head, black armor, headless neck, purple flame, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, holding sword",
            "idle": "anime, full body, wide angle, dullahan girl, holding own head, black armor, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, dullahan girl, holding own head, head smiling, black armor, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, happy pose",
            "sad": "anime, full body, wide angle, dullahan girl, holding own head, head looking sad, black armor, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, gloomy pose",
            "angry": "anime, full body, wide angle, dullahan girl, holding own head, head angry, flaming neck, black armor, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, combat pose",
            "skill": "anime, full body, wide angle, dullahan girl, holding own head, high angle, swinging sword, black armor, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, dullahan girl, holding own head high, black armor, victory flame, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, dullahan girl, head dropped on ground, kneeling body, black armor, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, defeated"
        },
        lore: {
            "title": "죽음을 알리는 기사",
            "story": "자신의 머리를 옆구리에 끼고 다니는 죽음의 기사. 밤길에 그의 이름을 들으면 영혼을 빼앗긴다고 전해진다. 척추로 만든 채찍을 휘두르며, 멈추지 않고 목표를 향해 돌진한다.",
            "origin": "아일랜드 신화 / 듀라한",
            "personality": "Grim & Relentless"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "내 머리... 어디 있나...",
                "죽음의 마차가 달린다!",
                "너의 이름은... 아직 명부에 없군."
            ],
            interaction: [
                "길을 막지 마라.",
                "이 채찍의 맛을 보고 싶은가?",
                "내 눈은 너를 보고 있다... 옆구리에서."
            ],
            gift: [
                "죽은 자에게 선물이라니.",
                "이건 저승길 노잣돈으로 쓰지.",
                "흥미롭군."
            ],
            special: [
                "죽음의 질주!",
                "영혼 수확!",
                "네 목을 가지러 왔다!"
            ]
        },
        lines: {
            normal: "밤길을 조심하는 게 좋을 거야.",
            touch_head: "거긴 아무것도 없어, 목만 남았지.",
            touch_chest: "내 심장은 오래전에 멈췄다.",
            touch_legs: "내 말은 지치지 않는다.",
            touch_special: "너의 영혼... 아주 맛있게 생겼군."
        }
    },
    {
        id: "knight_skeleton",
        name: "스켈레톤 나이트",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_knight_skeleton.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_knight_skeleton.png",
            "joy": "images/creatures/abyss/creature_knight_skeleton_joy.png",
            "sad": "images/creatures/abyss/creature_knight_skeleton_sad.png",
            "angry": "images/creatures/abyss/creature_knight_skeleton_angry.png",
            "skill": "images/creatures/abyss/creature_knight_skeleton_skill.png",
            "victory": "images/creatures/abyss/creature_knight_skeleton_victory.png",
            "defeat": "images/creatures/abyss/creature_knight_skeleton_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_knight_skeleton_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, skeleton knight girl, bone armor, rusty sword, shield, blue flame eyes, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, combat stance",
            "idle": "anime, full body, wide angle, skeleton knight girl, bone armor, blue flame eyes, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, skeleton knight girl, bone armor, blue flame eyes, happy rattle, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, pose with sword",
            "sad": "anime, full body, wide angle, skeleton knight girl, bone armor, blue flame eyes dim, sad stance, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, drooping pose",
            "angry": "anime, full body, wide angle, skeleton knight girl, bone armor, red flame eyes, angry stance, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, attacking pose",
            "skill": "anime, full body, wide angle, skeleton knight girl, bone armor, blue flame eyes, using skill, shield bash, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, skeleton knight girl, bone armor, blue flame eyes, victory pose, raising sword, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, skeleton knight girl, bone armor, blue flame eyes, defeated pose, bones scattered, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, collapsed"
        },
        lore: {
            "title": "불멸의 충성",
            "story": "죽어서도 주군에 대한 충성을 버리지 못한 기사의 해골. 낡은 갑옷과 녹슨 검을 들고 있으나, 그 검술만은 생전 그대로다. 심연의 군단에서 가장 규율지키는 병사들이다.",
            "personality": "Loyal & Undead"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "주군을 위하여...",
                "죽음은 휴식이 아니다.",
                "명령만 내리십시오."
            ],
            interaction: [
                "갑옷이 낡았다고 얕보지 마라.",
                "뼈가 부딪히는 소리가 들리는가?",
                "내 검은 아직 날카롭다."
            ],
            gift: [
                "감사합니다, 주군.",
                "이것 또한 군수품으로 쓰겠습니다.",
                "영광입니다."
            ],
            special: [
                "전군 돌격!",
                "두려움을 모르는 군단이여!",
                "죽음조차 우리를 막을 수 없다!"
            ]
        },
        lines: {
            normal: "경계를 늦추지 않겠습니다.",
            touch_head: "투구가 흔들립니다.",
            touch_chest: "갈비뼈 사이로 바람이 지나갑니다.",
            touch_legs: "아직 잘 걸을 수 있습니다.",
            touch_special: "당신을 위해서라면 지옥 끝까지 가겠습니다."
        }
    },
    {
        id: "mimic_box",
        name: "탐욕의 상자 미믹",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_mimic_box.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_mimic_box.png",
            "joy": "images/creatures/abyss/creature_mimic_box_joy.png",
            "sad": "images/creatures/abyss/creature_mimic_box_sad.png",
            "angry": "images/creatures/abyss/creature_mimic_box_angry.png",
            "skill": "images/creatures/abyss/creature_mimic_box_skill.png",
            "victory": "images/creatures/abyss/creature_mimic_box_victory.png",
            "defeat": "images/creatures/abyss/creature_mimic_box_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_mimic_box_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, mimic box girl, monster chest, sharp teeth, tongue out, shiny wood texture, sweat, alluring curves, masterpiece, best quality, consistent with freya style, trap pose",
            "idle": "anime, full body, wide angle, mimic box girl, monster chest, shiny wood texture, sweat, alluring curves, masterpiece, best quality, consistent with freya style, closed pose",
            "joy": "anime, full body, wide angle, mimic box girl, monster chest, happy expression, open wide displaying gold, shiny wood texture, sweat, alluring curves, masterpiece, best quality, consistent with freya style, inviting pose",
            "sad": "anime, full body, wide angle, mimic box girl, monster chest, sad expression, slightly open, shiny wood texture, sweat, alluring curves, masterpiece, best quality, consistent with freya style, gloomy pose",
            "angry": "anime, full body, wide angle, mimic box girl, monster chest, angry expression, teeth bared, drooling, shiny wood texture, sweat, alluring curves, masterpiece, best quality, consistent with freya style, aggressive pose",
            "skill": "anime, full body, wide angle, mimic box girl, monster chest, using skill, biting attack, shiny wood texture, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, mimic box girl, monster chest, victory pose, burping, shiny wood texture, sweat, alluring curves, masterpiece, best quality, consistent with freya style, satisfied",
            "defeat": "anime, full body, wide angle, mimic box girl, monster chest, defeated pose, broken wood, shiny wood texture, sweat, alluring curves, masterpiece, best quality, consistent with freya style, shattered",
            "gallery_lv1": "anime, full body, wide angle, mimic box girl, monster chest, playing with adventurer, cute pose, shiny wood texture, sweat, alluring curves, masterpiece, best quality, consistent with freya style, detailed"
        },
        lore: {
            "title": "탐욕의 덫",
            "story": "보물상자로 위장한 탐욕의 괴물. 모험가들의 욕심을 이용하여 그들을 잡아먹는다. 날카로운 이빨과 긴 혀를 가지고 있으며, 상자 안에는 보물 대신 끔찍한 소화액이 들어있다.",
            "personality": "Deceptive & Greedy"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "달그락... 달그락...",
                "반짝이는 거... 좋아해?",
                "히히히... 이리 와 봐."
            ],
            interaction: [
                "아이쿠, 손 조심해야지?",
                "내 입속이 궁금해?",
                "앙! 물어버린다!"
            ],
            gift: [
                "오오! 이건 진짜 보물이다!",
                "내 뱃속에 저장할게!",
                "맛있는 냄새가 나!"
            ],
            special: [
                "서프라이즈!",
                "다 먹어치우겠다!",
                "탐욕의 대가다!"
            ]
        },
        lines: {
            normal: "함부로 열면 다쳐요.",
            touch_head: "뚜껑 닫지 마!",
            touch_chest: "여긴 자물쇠가 있는 곳이야.",
            touch_legs: "다리 달린 상자 처음 봐?",
            touch_special: "너도 보물상자에 들어와 볼래? 아주 아늑해..."
        }
    },
    {
        id: "cursed_doll",
        name: "저주받은 인형",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_cursed_doll.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_cursed_doll.png",
            "joy": "images/creatures/abyss/creature_cursed_doll_joy.png",
            "sad": "images/creatures/abyss/creature_cursed_doll_sad.png",
            "angry": "images/creatures/abyss/creature_cursed_doll_angry.png",
            "skill": "images/creatures/abyss/creature_cursed_doll_skill.png",
            "victory": "images/creatures/abyss/creature_cursed_doll_victory.png",
            "defeat": "images/creatures/abyss/creature_cursed_doll_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_cursed_doll_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, cursed doll girl, gothic lolita dress, stitched skin, button eye, holding needle, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, creepy cute pose",
            "idle": "anime, full body, wide angle, cursed doll girl, gothic lolita dress, stitched skin, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, cursed doll girl, gothic lolita dress, stitched skin, happy creepy smile, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dancing pose",
            "sad": "anime, full body, wide angle, cursed doll girl, gothic lolita dress, stitched skin, sad expression, tearing fabric, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, sitting pose",
            "angry": "anime, full body, wide angle, cursed doll girl, gothic lolita dress, stitched skin, angry expression, holding many needles, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, threatening pose",
            "skill": "anime, full body, wide angle, cursed doll girl, gothic lolita dress, stitched skin, using skill, voodoo magic, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, cursed doll girl, gothic lolita dress, stitched skin, victory pose, hugging self, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, happy",
            "defeat": "anime, full body, wide angle, cursed doll girl, gothic lolita dress, stitched skin, defeated pose, torn arm, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, broken"
        },
        lore: {
            "title": "버려진 원한",
            "story": "주인에게 버림받은 인형에 원한이 깃들어 움직이는 존재. 밤마다 주인을 찾아다니며, 자신과 함께 영원히 놀자고 속삭인다. 못과 바늘을 무기로 사용한다.",
            "personality": "Creepy & Obsessive"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "나랑 놀자...",
                "왜 나를 버렸어?",
                "심심해... 심심해..."
            ],
            interaction: [
                "망가뜨리지 마...",
                "바늘로 콕 찌를 거야.",
                "헤헤... 안아줘."
            ],
            gift: [
                "새 장난감이야?",
                "이건 안 버릴 거지?",
                "고마워... 히히."
            ],
            special: [
                "영원히 함께야!",
                "저주할 거야!",
                "아무도 못 나가!"
            ]
        },
        lines: {
            normal: "내 눈... 어디 갔는지 알아?",
            touch_head: "머리카락 뽑지 마.",
            touch_chest: "솜뭉치밖에 없어.",
            touch_legs: "걷는 건 힘들어...",
            touch_special: "너도 인형으로 만들어줄까? 그러면 영원히 같이 있을 수 있어."
        }
    },
    {
        id: "eye_bat",
        name: "외눈박이 박쥐",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_eye_bat.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_eye_bat.png",
            "joy": "images/creatures/abyss/creature_eye_bat_joy.png",
            "sad": "images/creatures/abyss/creature_eye_bat_sad.png",
            "angry": "images/creatures/abyss/creature_eye_bat_angry.png",
            "skill": "images/creatures/abyss/creature_eye_bat_skill.png",
            "victory": "images/creatures/abyss/creature_eye_bat_victory.png",
            "defeat": "images/creatures/abyss/creature_eye_bat_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_eye_bat_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, eye bat girl, bat wings, single large eye, cute fangs, fur collar, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, flying pose",
            "idle": "anime, full body, wide angle, eye bat girl, bat wings, single large eye, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hanging upside down",
            "joy": "anime, full body, wide angle, eye bat girl, bat wings, happy eye, flapping wings, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, playful pose",
            "sad": "anime, full body, wide angle, eye bat girl, bat wings, sad eye, wings wrapped around, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, sleeping pose",
            "angry": "anime, full body, wide angle, eye bat girl, bat wings, angry eye, glowing red, screeching, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, attacking pose",
            "skill": "anime, full body, wide angle, eye bat girl, bat wings, using skill, sonic wave, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, eye bat girl, bat wings, victory pose, flying high, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, eye bat girl, bat wings, defeated pose, on ground, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, fallen"
        },
        lore: {
            "title": "심연의 감시자",
            "story": "거대한 하나의 눈을 가진 변종 박쥐. 어둠 속에서도 사물을 완벽하게 볼 수 있으며, 초음파 대신 시선으로 적을 마비시킨다. 심연의 동굴 천장에 매달려 먹잇감을 기다린다.",
            "personality": "Vigilant & Aerial"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "키익... 킥...",
                "다 보고 있다...",
                "어둠이 좋아..."
            ],
            interaction: [
                "날개 건드리지 마!",
                "눈 부셔!",
                "거꾸로 매달리면 편해."
            ],
            gift: [
                "벌레? 아니네...",
                "반짝이는 거다!",
                "키이익! (좋음)"
            ],
            special: [
                "초음파 발사!",
                "마비되어라!",
                "어둠 속으로!"
            ]
        },
        lines: {
            normal: "내 눈을 피할 순 없어.",
            touch_head: "귀 간지러워.",
            touch_chest: "심장 소리 들려?",
            touch_legs: "발톱 날카로워.",
            touch_special: "너의 공포가 보여... 아주 선명하게."
        }
    },
    {
        id: "ghost_lamp",
        name: "영혼의 등불",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_ghost_lamp.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_ghost_lamp.png",
            "joy": "images/creatures/abyss/creature_ghost_lamp_joy.png",
            "sad": "images/creatures/abyss/creature_ghost_lamp_sad.png",
            "angry": "images/creatures/abyss/creature_ghost_lamp_angry.png",
            "skill": "images/creatures/abyss/creature_ghost_lamp_skill.png",
            "victory": "images/creatures/abyss/creature_ghost_lamp_victory.png",
            "defeat": "images/creatures/abyss/creature_ghost_lamp_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_ghost_lamp_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, ghost lamp girl, holding lantern, blue spirit fire, transparent dress, floating, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, guiding pose",
            "idle": "anime, full body, wide angle, ghost lamp girl, holding lantern, blue spirit fire, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, floating",
            "joy": "anime, full body, wide angle, ghost lamp girl, holding lantern, bright blue fire, happy smile, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dancing pose",
            "sad": "anime, full body, wide angle, ghost lamp girl, holding lantern, dim fire, sad expression, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, lonely pose",
            "angry": "anime, full body, wide angle, ghost lamp girl, holding lantern, explosive fire, angry expression, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, threatening pose",
            "skill": "anime, full body, wide angle, ghost lamp girl, holding lantern, using skill, soul burn, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, ghost lamp girl, holding lantern, victory pose, swirling lights, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, ghost lamp girl, holding lantern, defeated pose, light extinguished, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, fading"
        },
        lore: {
            "title": "도깨비불",
            "story": "죽은 자의 영혼이 뭉쳐 만들어진 푸른 불꽃. 낡은 등불에 깃들어 스스로 떠다닌다. 길 잃은 여행자를 안전한 곳으로 안내하는 척하며 벼랑 끝으로 유인한다.",
            "personality": "Mischievous & Spirit"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "이쪽이야... 이쪽...",
                "따뜻하지?",
                "길을 잃었니?"
            ],
            interaction: [
                "손 데일걸?",
                "후~ 불어도 안 꺼져.",
                "나랑 춤출래?"
            ],
            gift: [
                "기름인가?",
                "내 불꽃이 더 커졌어!",
                "고마워, 여행자."
            ],
            special: [
                "홀려라!",
                "영혼을 태워라!",
                "길을 잃게 해주지!"
            ]
        },
        lines: {
            normal: "어두운 밤길엔 내가 필요할걸?",
            touch_head: "뜨거워!",
            touch_chest: "심지는 내 생명이야.",
            touch_legs: "다리? 난 떠다녀.",
            touch_special: "나를 따라와... 돌아올 수 없는 곳으로 안내해줄게."
        }
    },
    {
        id: "deep_one_soldier",
        name: "딥 원 전사",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_deep_one_soldier.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_deep_one_soldier.png",
            "joy": "images/creatures/abyss/creature_deep_one_soldier_joy.png",
            "sad": "images/creatures/abyss/creature_deep_one_soldier_sad.png",
            "angry": "images/creatures/abyss/creature_deep_one_soldier_angry.png",
            "skill": "images/creatures/abyss/creature_deep_one_soldier_skill.png",
            "victory": "images/creatures/abyss/creature_deep_one_soldier_victory.png",
            "defeat": "images/creatures/abyss/creature_deep_one_soldier_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_deep_one_soldier_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, deep one soldier girl, fish scales, webbed hands, gills, spear, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, underwater combat pose",
            "idle": "anime, full body, wide angle, deep one soldier girl, fish scales, gills, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, deep one soldier girl, fish scales, gills, happy expression, raising spear, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, celebrating pose",
            "sad": "anime, full body, wide angle, deep one soldier girl, fish scales, gills, sad expression, droopy fins, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, sitting pose",
            "angry": "anime, full body, wide angle, deep one soldier girl, fish scales, gills, angry expression, showing teeth, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, attacking pose",
            "skill": "anime, full body, wide angle, deep one soldier girl, fish scales, gills, using skill, water thrust, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, deep one soldier girl, fish scales, gills, victory pose, swimming fast, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, deep one soldier girl, fish scales, gills, defeated pose, floating, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, unconscious"
        },
        lore: {
            "title": "심해의 보병",
            "story": "다곤과 크툴루를 섬기는 수중 종족. 물갈퀴가 달린 손발과 비늘로 덮인 몸을 가졌다. 육지에서도 활동할 수 있으나 물속에서 더욱 강력하다. 그들의 창은 심해의 금속으로 만들어졌다.",
            "personality": "Subservient & Aquatic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "쿠르... 르르...",
                "바다 냄새가 그립다.",
                "다곤 님을 위하여."
            ],
            interaction: [
                "미끈거린다고?",
                "내 창은 날카롭다.",
                "물 좀 줘..."
            ],
            gift: [
                "물고기?",
                "신선하군.",
                "바다의 맛이야."
            ],
            special: [
                "심해의 일격!",
                "물살을 갈라라!",
                "침입자 제거!"
            ]
        },
        lines: {
            normal: "육지는 너무 건조해.",
            touch_head: "비늘이 마르면 안 돼.",
            touch_chest: "아가미를 건드리지 마.",
            touch_legs: "헤엄치기 좋은 다리지.",
            touch_special: "심해의 도시 르뤼에를 본 적 있나? 꿈에서도 잊을 수 없지."
        }
    },
    {
        id: "goblin_scout_new",
        name: "고블린 정찰병",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_goblin_scout_new.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_goblin_scout_new.png",
            "joy": "images/creatures/abyss/creature_goblin_scout_new_joy.png",
            "sad": "images/creatures/abyss/creature_goblin_scout_new_sad.png",
            "angry": "images/creatures/abyss/creature_goblin_scout_new_angry.png",
            "skill": "images/creatures/abyss/creature_goblin_scout_new_skill.png",
            "victory": "images/creatures/abyss/creature_goblin_scout_new_victory.png",
            "defeat": "images/creatures/abyss/creature_goblin_scout_new_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_goblin_scout_new_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, goblin scout girl, green skin, leather armor, dagger, mischievous grin, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, sneaking pose",
            "idle": "anime, full body, wide angle, goblin scout girl, green skin, leather armor, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, crouching",
            "joy": "anime, full body, wide angle, goblin scout girl, green skin, leather armor, happy expression, holding gold coin, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, laughing pose",
            "sad": "anime, full body, wide angle, goblin scout girl, green skin, leather armor, sad expression, empty pockets, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, sitting pose",
            "angry": "anime, full body, wide angle, goblin scout girl, green skin, leather armor, angry expression, brandishing dagger, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, threatening pose",
            "skill": "anime, full body, wide angle, goblin scout girl, green skin, leather armor, using skill, backstab, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, goblin scout girl, green skin, leather armor, victory pose, bag of loot, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, goblin scout girl, green skin, leather armor, defeated pose, tied up, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, captured"
        },
        lore: {
            "title": "심연의 약탈자",
            "story": "심연의 환경에 적응하여 피부가 검게 변한 고블린. 일반 고블린보다 훨씬 잔인하고 교활하다. 어둠 속에서 은신하는 능력이 뛰어나며, 독을 바른 무기를 즐겨 사용한다.",
            "personality": "Cunning & Cruel"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "케헤헤... 주머니 조심해.",
                "뭐 훔칠 거 없나?",
                "심심한데 누구 괴롭힐까?"
            ],
            interaction: [
                "뭘 봐?",
                "내 칼에 독 있다?",
                "돈 내놔!"
            ],
            gift: [
                "오! 금화다!",
                "이건 내 거야!",
                "더 줘!"
            ],
            special: [
                "기습이다!",
                "독침 발사!",
                "다 털어라!"
            ]
        },
        lines: {
            normal: "어둠 속에 숨으면 아무도 모르지.",
            touch_head: "때리지 마!",
            touch_chest: "갑옷 훔친 거 아니야.",
            touch_legs: "도망치는 건 자신 있어.",
            touch_special: "네 보물... 내가 잘 보관해줄게. 영원히."
        }
    },
    {
        id: "shadow_lurker",
        name: "그림자 잠복자",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_shadow_lurker.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_shadow_lurker.png",
            "joy": "images/creatures/abyss/creature_shadow_lurker_joy.png",
            "sad": "images/creatures/abyss/creature_shadow_lurker_sad.png",
            "angry": "images/creatures/abyss/creature_shadow_lurker_angry.png",
            "skill": "images/creatures/abyss/creature_shadow_lurker_skill.png",
            "victory": "images/creatures/abyss/creature_shadow_lurker_victory.png",
            "defeat": "images/creatures/abyss/creature_shadow_lurker_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_shadow_lurker_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, shadow lurker girl, black shadowy form, glowing white eyes, hiding in darkness, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, stalking pose",
            "idle": "anime, full body, wide angle, shadow lurker girl, black shadowy form, glowing white eyes, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hiding pose",
            "joy": "anime, full body, wide angle, shadow lurker girl, black shadowy form, glowing white eyes, happy expression, curving eyes, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, smiling pose",
            "sad": "anime, full body, wide angle, shadow lurker girl, black shadowy form, glowing white eyes, sad expression, fading form, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, gloomy pose",
            "angry": "anime, full body, wide angle, shadow lurker girl, black shadowy form, glowing white eyes, angry expression, many eyes opening, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, scary pose",
            "skill": "anime, full body, wide angle, shadow lurker girl, black shadowy form, glowing white eyes, using skill, shadow spikes, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, shadow lurker girl, black shadowy form, glowing white eyes, victory pose, expanding shadow, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, shadow lurker girl, black shadowy form, glowing white eyes, defeated pose, dissolved by light, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, vanished"
        },
        lore: {
            "title": "그림자 속의 눈",
            "story": "그림자 속에 숨어 오직 눈만 내놓고 주변을 감시하는 정령. 직접 공격하기보다는 적의 위치를 알리고 혼란을 주는 역할을 한다. 빛을 받으면 사라진다.",
            "personality": "Shy & Observant"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "...",
                "(지켜보고 있다)",
                "그림자가 길어지네."
            ],
            interaction: [
                "놀랐지?",
                "난 여기 없어.",
                "잡을 수 없을걸?"
            ],
            gift: [
                "...",
                "(조용히 가져간다)",
                "흥미로워."
            ],
            special: [
                "어둠의 장막!",
                "숨을 곳은 없다!",
                "그림자 습격!"
            ]
        },
        lines: {
            normal: "나는 어디에나 있고, 어디에도 없다.",
            touch_head: "만질 수 없을걸?",
            touch_chest: "그림자에 심장이 있나?",
            touch_legs: "발소리를 죽여.",
            touch_special: "네 그림자 속에 이미 내가 있을지도 몰라."
        }
    },
    {
        id: "abyss_watcher_small",
        name: "작은 심연의 감시자",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_abyss_watcher_small.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_abyss_watcher_small.png",
            "joy": "images/creatures/abyss/creature_abyss_watcher_small_joy.png",
            "sad": "images/creatures/abyss/creature_abyss_watcher_small_sad.png",
            "angry": "images/creatures/abyss/creature_abyss_watcher_small_angry.png",
            "skill": "images/creatures/abyss/creature_abyss_watcher_small_skill.png",
            "victory": "images/creatures/abyss/creature_abyss_watcher_small_victory.png",
            "defeat": "images/creatures/abyss/creature_abyss_watcher_small_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_abyss_watcher_small_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, small abyss watcher girl, bat wings, large single eye, scout outfit, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, flying pose",
            "idle": "anime, full body, wide angle, small abyss watcher girl, bat wings, large single eye, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hovering",
            "joy": "anime, full body, wide angle, small abyss watcher girl, bat wings, large single eye, happy expression, doing loop-de-loop, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, playful pose",
            "sad": "anime, full body, wide angle, small abyss watcher girl, bat wings, large single eye, sad expression, broken wing, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, falling",
            "angry": "anime, full body, wide angle, small abyss watcher girl, bat wings, large single eye, angry expression, screeching, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, attacking pose",
            "skill": "anime, full body, wide angle, small abyss watcher girl, bat wings, large single eye, using skill, eye beam, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, small abyss watcher girl, bat wings, large single eye, victory pose, saluting, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, small abyss watcher girl, bat wings, large single eye, defeated pose, crashed on ground, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, unconscious"
        },
        lore: {
            "title": "작은 감시자",
            "story": "심연의 군주들이 부리는 작은 정찰병. 날개가 달려 있어 빠르게 비행하며, 본 것을 군주에게 텔레파시로 전달한다. 귀여운 외모와 달리 성격은 사납다.",
            "personality": "Loyal & Scout"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "삐익! 삐익!",
                "수상한 놈 발견!",
                "보고해야 해!"
            ],
            interaction: [
                "만지지 마!",
                "군주님께 다 이를 거야!",
                "쪼아버린다!"
            ],
            gift: [
                "뇌물인가?",
                "이걸로 봐주지.",
                "냠냠."
            ],
            special: [
                "지원 요청!",
                "경계 경보!",
                "눈을 찔러라!"
            ]
        },
        lines: {
            normal: "나는 군주님의 눈과 귀야.",
            touch_head: "머리 헝클어지잖아!",
            touch_chest: "작다고 무시하지 마.",
            touch_legs: "내 날개 빠르지?",
            touch_special: "너, 지금 딴생각했지? 다 보고했어."
        }
    },
    {
        id: "screaming_root",
        name: "비명 지르는 뿌리",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_screaming_root.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_screaming_root.png",
            "joy": "images/creatures/abyss/creature_screaming_root_joy.png",
            "sad": "images/creatures/abyss/creature_screaming_root_sad.png",
            "angry": "images/creatures/abyss/creature_screaming_root_angry.png",
            "skill": "images/creatures/abyss/creature_screaming_root_skill.png",
            "victory": "images/creatures/abyss/creature_screaming_root_victory.png",
            "defeat": "images/creatures/abyss/creature_screaming_root_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_screaming_root_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, screaming root girl, plant monster, mandrake roots, open mouth screaming, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, screaming pose",
            "idle": "anime, full body, wide angle, screaming root girl, plant monster, mandrake roots, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, buried pose",
            "joy": "anime, full body, wide angle, screaming root girl, plant monster, mandrake roots, happy expression, flowers blooming, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, growing pose",
            "sad": "anime, full body, wide angle, screaming root girl, plant monster, mandrake roots, sad expression, withering leaves, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, shrinking pose",
            "angry": "anime, full body, wide angle, screaming root girl, plant monster, mandrake roots, angry expression, ear-piercing scream, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, loud pose",
            "skill": "anime, full body, wide angle, screaming root girl, plant monster, mandrake roots, using skill, root entanglement, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, screaming root girl, plant monster, mandrake roots, victory pose, giant size, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dominant",
            "defeat": "anime, full body, wide angle, screaming root girl, plant monster, mandrake roots, defeated pose, pulled out of ground, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, helpless"
        },
        lore: {
            "title": "비명의 식물",
            "story": "땅속에 숨어 있다가 지나가는 생물에게 비명을 질러 기절시키는 식물. 그 비명 소리는 정신을 혼미하게 만들며, 기절한 먹잇감을 뿌리로 감아 영양분을 섭취한다.",
            "personality": "Loud & Trap"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "...",
                "(부스럭)",
                "기다리고 있어..."
            ],
            interaction: [
                "꺄아아아악!!",
                "건드리면 소리 지른다!",
                "깜짝 놀랐지?"
            ],
            gift: [
                "비료?",
                "물...",
                "맛없어."
            ],
            special: [
                "고막 파괴!",
                "절규하라!",
                "뿌리 묶기!"
            ]
        },
        lines: {
            normal: "조용히 지나가는 게 좋을 거야.",
            touch_head: "잎사귀 뜯지 마.",
            touch_chest: "뿌리가 깊어서 안 뽑혀.",
            touch_legs: "내 뿌리에 걸리면 끝장이야.",
            touch_special: "내 비명 소리를 듣고도 서 있을 수 있을까? 꺄아아악!"
        }
    },
    {
        id: "ghoul_scavenger",
        name: "시체 먹는 구울",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_ghoul_scavenger.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_ghoul_scavenger.png",
            "joy": "images/creatures/abyss/creature_ghoul_scavenger_joy.png",
            "sad": "images/creatures/abyss/creature_ghoul_scavenger_sad.png",
            "angry": "images/creatures/abyss/creature_ghoul_scavenger_angry.png",
            "skill": "images/creatures/abyss/creature_ghoul_scavenger_skill.png",
            "victory": "images/creatures/abyss/creature_ghoul_scavenger_victory.png",
            "defeat": "images/creatures/abyss/creature_ghoul_scavenger_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_ghoul_scavenger_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, ghoul scavenger girl, pale grey skin, sharp claws, tattered clothes, hunger expression, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, eating pose",
            "idle": "anime, full body, wide angle, ghoul scavenger girl, pale grey skin, sharp claws, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, crouching",
            "joy": "anime, full body, wide angle, ghoul scavenger girl, pale grey skin, sharp claws, happy expression, eating bone, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, full pose",
            "sad": "anime, full body, wide angle, ghoul scavenger girl, pale grey skin, sharp claws, sad expression, holding empty stomach, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, starving pose",
            "angry": "anime, full body, wide angle, ghoul scavenger girl, pale grey skin, sharp claws, angry expression, hissing, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, threatening pose",
            "skill": "anime, full body, wide angle, ghoul scavenger girl, pale grey skin, sharp claws, using skill, claw slash, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, ghoul scavenger girl, pale grey skin, sharp claws, victory pose, sitting on pile of bones, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, satisfied",
            "defeat": "anime, full body, wide angle, ghoul scavenger girl, pale grey skin, sharp claws, defeated pose, dead on ground, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, collapsed"
        },
        lore: {
            "title": "부패의 청소부",
            "story": "심연의 전장을 돌아다니며 시체를 먹어 치우는 구울. 썩은 고기를 즐기며, 질병과 독을 퍼뜨린다. 무덤을 파헤치는 것을 좋아하며, 살아있는 자도 공격하여 시체로 만든다.",
            "personality": "Filthy & Scavenger"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "배고파...",
                "썩은 냄새... 좋아...",
                "시체가 어딨지?"
            ],
            interaction: [
                "캬아악!",
                "내 밥이야!",
                "너도 맛있겠군."
            ],
            gift: [
                "썩은 고기?",
                "뼈다귀!",
                "히히... 고마워."
            ],
            special: [
                "질병 퍼뜨리기!",
                "살점을 뜯어라!",
                "다 먹어치워!"
            ]
        },
        lines: {
            normal: "산 사람 냄새가 나.",
            touch_head: "머리 때리지 마.",
            touch_chest: "갈비뼈가 드러났어.",
            touch_legs: "쩔뚝거려도 빨라.",
            touch_special: "죽으면 내가 제일 먼저 찾아갈게."
        }
    },
    {
        id: "void_tentacle",
        name: "공허의 촉수",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_void_tentacle.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_tentacle.png",
            "joy": "images/creatures/abyss/creature_void_tentacle_joy.png",
            "sad": "images/creatures/abyss/creature_void_tentacle_sad.png",
            "angry": "images/creatures/abyss/creature_void_tentacle_angry.png",
            "skill": "images/creatures/abyss/creature_void_tentacle_skill.png",
            "victory": "images/creatures/abyss/creature_void_tentacle_victory.png",
            "defeat": "images/creatures/abyss/creature_void_tentacle_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_tentacle_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, void tentacle girl, purple tentacles, portal background, void energy, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, wrapping pose",
            "idle": "anime, full body, wide angle, void tentacle girl, purple tentacles, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, wriggling",
            "joy": "anime, full body, wide angle, void tentacle girl, purple tentacles, happy expression, tentacles forming heart, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, playful pose",
            "sad": "anime, full body, wide angle, void tentacle girl, purple tentacles, sad expression, tentacles drooping, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, lonely pose",
            "angry": "anime, full body, wide angle, void tentacle girl, purple tentacles, angry expression, tentacles thrashing, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, aggressive pose",
            "skill": "anime, full body, wide angle, void tentacle girl, purple tentacles, using skill, portal opening, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, void tentacle girl, purple tentacles, victory pose, holding captured object, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, void tentacle girl, purple tentacles, defeated pose, retreating to portal, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, escaping"
        },
        lore: {
            "title": "차원의 촉수",
            "story": "허공에서 갑자기 튀어나오는 공허의 촉수. 본체는 다른 차원에 있으며 촉수만으로 공격한다. 무엇이든 휘감아 차원의 틈새로 끌고 들어가려 한다.",
            "personality": "Unknown & Grasping"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "...",
                "(꿈틀)",
                "공허가 부른다."
            ],
            interaction: [
                "잡았다!",
                "끌려들어 올 거야.",
                "놓아주지 않아."
            ],
            gift: [
                "...",
                "(사라진다)",
                "흡수."
            ],
            special: [
                "차원 균열!",
                "휘감기!",
                "공허로!"
            ]
        },
        lines: {
            normal: "어디서 튀어나올지 몰라.",
            touch_head: "미끌거려.",
            touch_chest: "본체는 여기가 아냐.",
            touch_legs: "다리? 촉수뿐이야.",
            touch_special: "저 너머의 세상이 궁금하지 않아?"
        }
    },
    {
        id: "sludge_blob",
        name: "오염된 슬러지",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_sludge_blob.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_sludge_blob.png",
            "joy": "images/creatures/abyss/creature_sludge_blob_joy.png",
            "sad": "images/creatures/abyss/creature_sludge_blob_sad.png",
            "angry": "images/creatures/abyss/creature_sludge_blob_angry.png",
            "skill": "images/creatures/abyss/creature_sludge_blob_skill.png",
            "victory": "images/creatures/abyss/creature_sludge_blob_victory.png",
            "defeat": "images/creatures/abyss/creature_sludge_blob_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_sludge_blob_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, sludge blob girl, slime monster, purple toxic slime, melting clothes, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, melting pose",
            "idle": "anime, full body, wide angle, sludge blob girl, slime monster, purple toxic slime, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, bubbling",
            "joy": "anime, full body, wide angle, sludge blob girl, slime monster, purple toxic slime, happy expression, bubbling happily, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, bouncing pose",
            "sad": "anime, full body, wide angle, sludge blob girl, slime monster, purple toxic slime, sad expression, melting down, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, flattened pose",
            "angry": "anime, full body, wide angle, sludge blob girl, slime monster, purple toxic slime, angry expression, emitting fumes, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, toxic pose",
            "skill": "anime, full body, wide angle, sludge blob girl, slime monster, purple toxic slime, using skill, sludge wave, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, sludge blob girl, slime monster, purple toxic slime, victory pose, expanding size, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, dominant",
            "defeat": "anime, full body, wide angle, sludge blob girl, slime monster, purple toxic slime, defeated pose, dried puddle, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, evaporated"
        },
        lore: {
            "title": "독성 슬러지",
            "story": "산업 폐기물과 심연의 마력이 섞여 태어난 오염된 몬스터. 지독한 악취를 풍기며, 닿으면 피부가 썩어들어간다. 정화되지 않는 한 계속해서 증식한다.",
            "personality": "Toxic & Pollution"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "보글... 보글...",
                "녹아버려...",
                "더러워..."
            ],
            interaction: [
                "만지지 마... 녹아.",
                "끈적거리지?",
                "합체하자."
            ],
            gift: [
                "쓰레기?",
                "오염 물질...",
                "좋아..."
            ],
            special: [
                "독성 분출!",
                "오염 지대!",
                "모두 썩어라!"
            ]
        },
        lines: {
            normal: "나는 인간이 만든 재앙이야.",
            touch_head: "형체가 없어.",
            touch_chest: "핵이 보여?",
            touch_legs: "흐물흐물해.",
            touch_special: "깨끗한 건 싫어... 모두 더럽혀주지."
        }
    },
    {
        id: "bone_fragment_spirit",
        name: "뼈 조각 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_bone_fragment_spirit.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_bone_fragment_spirit.png",
            "joy": "images/creatures/abyss/creature_bone_fragment_spirit_joy.png",
            "sad": "images/creatures/abyss/creature_bone_fragment_spirit_sad.png",
            "angry": "images/creatures/abyss/creature_bone_fragment_spirit_angry.png",
            "skill": "images/creatures/abyss/creature_bone_fragment_spirit_skill.png",
            "victory": "images/creatures/abyss/creature_bone_fragment_spirit_victory.png",
            "defeat": "images/creatures/abyss/creature_bone_fragment_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_bone_fragment_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, bone spirit girl, floating bone shards, ghostly aura, white dress, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, drifting pose",
            "idle": "anime, full body, wide angle, bone spirit girl, floating bone shards, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, floating",
            "joy": "anime, full body, wide angle, bone spirit girl, floating bone shards, happy expression, bones dancing, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, playful pose",
            "sad": "anime, full body, wide angle, bone spirit girl, floating bone shards, sad expression, bones falling, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, crying pose",
            "angry": "anime, full body, wide angle, bone spirit girl, floating bone shards, angry expression, bones swirling fast, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, threatening pose",
            "skill": "anime, full body, wide angle, bone spirit girl, floating bone shards, using skill, bone spike, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, bone spirit girl, floating bone shards, victory pose, forming a throne, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, regal",
            "defeat": "anime, full body, wide angle, bone spirit girl, floating bone shards, defeated pose, bones scattered, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dust"
        },
        lore: {
            "title": "부서진 영혼",
            "story": "전쟁터에 흩어진 뼈 조각에 깃든 하급 정령. 온전한 형태를 갖추지 못해 끊임없이 뼈를 모으려 한다. 약하지만 떼로 덤벼들면 귀찮은 존재다.",
            "personality": "Fragile & Persistent"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "딱... 딱...",
                "내 뼈...",
                "추워..."
            ],
            interaction: [
                "부서져.",
                "조심해.",
                "붙여줘."
            ],
            gift: [
                "칼슘?",
                "우유...",
                "고마워."
            ],
            special: [
                "뼈 던지기!",
                "합체!",
                "따끔할걸!"
            ]
        },
        lines: {
            normal: "완전한 몸을 가지고 싶어.",
            touch_head: "두개골 조각이야.",
            touch_chest: "텅 비었어.",
            touch_legs: "발가락 뼈가 모자라.",
            touch_special: "네 뼈는 튼튼해 보이네... 하나만 줄래?"
        }
    },
    {
        id: "whispering_skull",
        name: "속삭이는 해골",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_whispering_skull.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_whispering_skull.png",
            "joy": "images/creatures/abyss/creature_whispering_skull_joy.png",
            "sad": "images/creatures/abyss/creature_whispering_skull_sad.png",
            "angry": "images/creatures/abyss/creature_whispering_skull_angry.png",
            "skill": "images/creatures/abyss/creature_whispering_skull_skill.png",
            "victory": "images/creatures/abyss/creature_whispering_skull_victory.png",
            "defeat": "images/creatures/abyss/creature_whispering_skull_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_whispering_skull_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, whispering skull girl, holding skull, gothic dress, pale skin, eerie whisper, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, whispering pose",
            "idle": "anime, full body, wide angle, whispering skull girl, holding skull, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, whispering skull girl, holding skull, happy expression, giggling, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, laughing pose",
            "sad": "anime, full body, wide angle, whispering skull girl, holding skull, sad expression, silent, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, quiet pose",
            "angry": "anime, full body, wide angle, whispering skull girl, holding skull, angry expression, screaming skull, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, loud pose",
            "skill": "anime, full body, wide angle, whispering skull girl, holding skull, using skill, curse aura, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, whispering skull girl, holding skull, victory pose, floating high, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, eerie smile",
            "defeat": "anime, full body, wide angle, whispering skull girl, holding skull, defeated pose, dropped skull, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, crying"
        },
        lore: {
            "title": "저주의 속삭임",
            "story": "공중에 떠다니며 불길한 말을 속삭이는 해골. 그 속삭임을 계속 들으면 정신이 피폐해지고 불운이 닥친다. 마법사들이 연구실을 지키기 위해 만들어내기도 한다.",
            "personality": "Cursed & Chatterbox"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "너는 곧 불행해질 거야...",
                "조심해... 뒤에...",
                "키키키..."
            ],
            interaction: [
                "내 입을 막으려고?",
                "저주받아라!",
                "시끄러워?"
            ],
            gift: [
                "부적?",
                "태워버려.",
                "필요 없어."
            ],
            special: [
                "비명 발사!",
                "저주 걸기!",
                "정신 붕괴!"
            ]
        },
        lines: {
            normal: "내 말은 예언이 될 거야.",
            touch_head: "머리만 남아서 편해.",
            touch_chest: "몸뚱이는 어디 갔지?",
            touch_legs: "날아다니는 게 최고야.",
            touch_special: "비밀 하나 알려줄까? 너... 오늘 죽을지도 몰라."
        }
    },
    {
        id: "void_larva",
        name: "공허의 유충",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_void_larva.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_larva.png",
            "joy": "images/creatures/abyss/creature_void_larva_joy.png",
            "sad": "images/creatures/abyss/creature_void_larva_sad.png",
            "angry": "images/creatures/abyss/creature_void_larva_angry.png",
            "skill": "images/creatures/abyss/creature_void_larva_skill.png",
            "victory": "images/creatures/abyss/creature_void_larva_victory.png",
            "defeat": "images/creatures/abyss/creature_void_larva_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_larva_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, void larva girl, insect monster girl, purple chitin, wriggling tail, cute face, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, crawling pose",
            "idle": "anime, full body, wide angle, void larva girl, insect monster girl, purple chitin, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, void larva girl, insect monster girl, purple chitin, happy expression, wriggling happily, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, playful pose",
            "sad": "anime, full body, wide angle, void larva girl, insect monster girl, purple chitin, sad expression, curled up, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hiding pose",
            "angry": "anime, full body, wide angle, void larva girl, insect monster girl, purple chitin, angry expression, hissing, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, threatening pose",
            "skill": "anime, full body, wide angle, void larva girl, insect monster girl, purple chitin, using skill, acid spit, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, void larva girl, insect monster girl, purple chitin, victory pose, eating magical leaf, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, happy eating",
            "defeat": "anime, full body, wide angle, void larva girl, insect monster girl, purple chitin, defeated pose, rolled over, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, unconscious",
            "gallery_lv1": "anime, full body, wide angle, void larva girl, insect monster girl, purple chitin, cute pose, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, detailed"
        },
        lore: {
            "title": "공허의 씨앗",
            "story": "공허의 생명체가 되기 전의 유충 단계. 작고 약해 보이지만 강한 생명력을 지녔다. 성장하면 어떤 괴물이 될지 알 수 없으므로 미리 제거하는 것이 좋다.",
            "personality": "Weak & Potential"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "꿈틀... 꿈틀...",
                "배고파...",
                "진화할 거야."
            ],
            interaction: [
                "징그러워?",
                "터트리지 마.",
                "물어버린다."
            ],
            gift: [
                "에너지?",
                "먹이...",
                "힘이 솟아."
            ],
            special: [
                "산성액!",
                "물어뜯기!",
                "변태 시작!"
            ]
        },
        lines: {
            normal: "나는 위대한 존재가 될 거야.",
            touch_head: "말랑말랑해.",
            touch_chest: "내부는 복잡해.",
            touch_legs: "기어다니는 게 좋아.",
            touch_special: "언젠가 너를 내려다볼 날이 올 거야."
        }
    },
    {
        id: "dark_puddles",
        name: "검은 물웅덩이",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_dark_puddles.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_dark_puddles.png",
            "joy": "images/creatures/abyss/creature_dark_puddles_joy.png",
            "sad": "images/creatures/abyss/creature_dark_puddles_sad.png",
            "angry": "images/creatures/abyss/creature_dark_puddles_angry.png",
            "skill": "images/creatures/abyss/creature_dark_puddles_skill.png",
            "victory": "images/creatures/abyss/creature_dark_puddles_victory.png",
            "defeat": "images/creatures/abyss/creature_dark_puddles_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_dark_puddles_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, dark puddle girl, liquid form, oil slime, purple tint, rising from ground, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, merging pose",
            "idle": "anime, full body, wide angle, dark puddle girl, liquid form, oil slime, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, dark puddle girl, liquid form, oil slime, happy expression, rippling water, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, splashing pose",
            "sad": "anime, full body, wide angle, dark puddle girl, liquid form, oil slime, sad expression, becoming flat, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, hiding pose",
            "angry": "anime, full body, wide angle, dark puddle girl, liquid form, oil slime, angry expression, boiling bubbles, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, surging pose",
            "skill": "anime, full body, wide angle, dark puddle girl, liquid form, oil slime, using skill, drowning grasp, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, dark puddle girl, liquid form, oil slime, victory pose, covering ground, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, dominant",
            "defeat": "anime, full body, wide angle, dark puddle girl, liquid form, oil slime, defeated pose, evaporated mist, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, vanishing",
            "gallery_lv1": "anime, full body, wide angle, dark puddle girl, liquid form, oil slime, cute pose, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, detailed"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 검은 물웅덩이은(는) 특별한 능력을 지녔습니다.",
            "personality": "Hidden & Trap"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "찰박...",
                "깊이를 알 수 없어.",
                "빠지지 마."
            ],
            interaction: [
                "밟지 마.",
                "더러워질걸?",
                "발목을 잡겠어."
            ],
            gift: [
                "돌멩이?",
                "가라앉아.",
                "꿀꺽."
            ],
            special: [
                "늪지대!",
                "익사!",
                "모두 삼킨다!"
            ]
        },
        lines: {
            normal: "그냥 물웅덩이인 줄 알았어?",
            touch_head: "수면이 일렁여.",
            touch_chest: "핵은 깊은 곳에.",
            touch_legs: "퍼져나가.",
            touch_special: "내 안에는 끝없는 어둠이 있어. 들어와 볼래?"
        }
    },
    {
        id: "void_moth_small",
        name: "작은 공허 나방",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_void_moth_small.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_moth_small.png",
            "joy": "images/creatures/abyss/creature_void_moth_small_joy.png",
            "sad": "images/creatures/abyss/creature_void_moth_small_sad.png",
            "angry": "images/creatures/abyss/creature_void_moth_small_angry.png",
            "skill": "images/creatures/abyss/creature_void_moth_small_skill.png",
            "victory": "images/creatures/abyss/creature_void_moth_small_victory.png",
            "defeat": "images/creatures/abyss/creature_void_moth_small_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_moth_small_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, void moth girl, moth wings, antennae, fur collar, purple dust, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, flying pose",
            "idle": "anime, full body, wide angle, void moth girl, moth wings, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, fluttering",
            "joy": "anime, full body, wide angle, void moth girl, moth wings, happy expression, dancing in air, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, playful pose",
            "sad": "anime, full body, wide angle, void moth girl, moth wings, sad expression, wings folded, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, resting pose",
            "angry": "anime, full body, wide angle, void moth girl, moth wings, angry expression, spreading dust, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, attacking pose",
            "skill": "anime, full body, wide angle, void moth girl, moth wings, using skill, confusion powder, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, void moth girl, moth wings, victory pose, landed on flower, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, beautiful",
            "defeat": "anime, full body, wide angle, void moth girl, moth wings, defeated pose, wings torn, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, fallen",
            "gallery_lv1": "anime, full body, wide angle, void moth girl, moth wings, cute pose, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, detailed"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 작은 공허 나방은(는) 특별한 능력을 지녔습니다.",
            "personality": "Fluttering & Void"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "팔락... 팔락...",
                "빛을 쫓아서...",
                "공허의 가루..."
            ],
            interaction: [
                "잡지 마.",
                "가루 묻는다.",
                "간지러워."
            ],
            gift: [
                "빛?",
                "꿀?",
                "좋아..."
            ],
            special: [
                "가루 뿌리기!",
                "환각!",
                "군집 비행!"
            ]
        },
        lines: {
            normal: "불꽃을 보면 뛰어들고 싶어.",
            touch_head: "더듬이 조심해.",
            touch_chest: "날개는 약해.",
            touch_legs: "작은 다리야.",
            touch_special: "내 날갯짓이 폭풍이 될 수도 있어."
        }
    },
    {
        id: "ink_squid_abyss",
        name: "심연 먹물 오징어",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,

        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_ink_squid_abyss.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_ink_squid_abyss.png",
            "joy": "images/creatures/abyss/creature_ink_squid_abyss_joy.png",
            "sad": "images/creatures/abyss/creature_ink_squid_abyss_sad.png",
            "angry": "images/creatures/abyss/creature_ink_squid_abyss_angry.png",
            "skill": "images/creatures/abyss/creature_ink_squid_abyss_skill.png",
            "victory": "images/creatures/abyss/creature_ink_squid_abyss_victory.png",
            "defeat": "images/creatures/abyss/creature_ink_squid_abyss_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_ink_squid_abyss_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, ink squid girl, black tentacles, squid hat, ink splatter, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, painting pose",
            "idle": "anime, full body, wide angle, ink squid girl, black tentacles, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, ink squid girl, black tentacles, happy expression, spraying ink heart, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, playful pose",
            "sad": "anime, full body, wide angle, ink squid girl, black tentacles, sad expression, pale color, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, crying ink",
            "angry": "anime, full body, wide angle, ink squid girl, black tentacles, angry expression, red skin, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, splattering ink",
            "skill": "anime, full body, wide angle, ink squid girl, black tentacles, using skill, multiple tentacle strike, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, ink squid girl, black tentacles, victory pose, holding prey, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, triumphant",
            "defeat": "anime, full body, wide angle, ink squid girl, black tentacles, defeated pose, dissolved, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, melting",
            "gallery_lv1": "anime, full body, wide angle, ink squid girl, black tentacles, cute pose, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, detailed"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 심연 먹물 오징어은(는) 특별한 능력을 지녔습니다.",
            "personality": "Inky & Slippery"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "뿌우...",
                "먹물 발사 준비.",
                "미끌미끌."
            ],
            interaction: [
                "먹물 맞고 싶어?",
                "미끄러워.",
                "다리가 많지?"
            ],
            gift: [
                "오징어?",
                "동족 상잔...",
                "맛은 있어."
            ],
            special: [
                "먹물 폭탄!",
                "시야 차단!",
                "다리 묶기!"
            ]
        },
        lines: {
            normal: "바다의 무법자... 가 되고 싶어.",
            touch_head: "말랑해.",
            touch_chest: "내장은 여기.",
            touch_legs: "빨판 조심해.",
            touch_special: "온 세상을 검게 물들여주지."
        }
    },
    {
        id: "abyss_jellyfish",
        name: "심연의 해파리",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Void"],
        baseStr: 6, baseInt: 10,
        image: "images/creatures/abyss/creature_abyss_jellyfish.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_abyss_jellyfish.png",
            "joy": "images/creatures/abyss/creature_abyss_jellyfish_joy.png",
            "sad": "images/creatures/abyss/creature_abyss_jellyfish_sad.png",
            "angry": "images/creatures/abyss/creature_abyss_jellyfish_angry.png",
            "skill": "images/creatures/abyss/creature_abyss_jellyfish_skill.png",
            "victory": "images/creatures/abyss/creature_abyss_jellyfish_victory.png",
            "defeat": "images/creatures/abyss/creature_abyss_jellyfish_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_abyss_jellyfish_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, abyss jellyfish girl, transparent dress, glowing tentacles, biological lights, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, floating pose",
            "idle": "anime, full body, wide angle, abyss jellyfish girl, transparent dress, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hovering",
            "joy": "anime, full body, wide angle, abyss jellyfish girl, transparent dress, happy expression, glowing bright, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dancing pose",
            "sad": "anime, full body, wide angle, abyss jellyfish girl, transparent dress, sad expression, dim light, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, sinking pose",
            "angry": "anime, full body, wide angle, abyss jellyfish girl, transparent dress, angry expression, electrical sparks, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, stinging pose",
            "skill": "anime, full body, wide angle, abyss jellyfish girl, transparent dress, using skill, poison sting, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, abyss jellyfish girl, transparent dress, victory pose, floating high, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, majestic",
            "defeat": "anime, full body, wide angle, abyss jellyfish girl, transparent dress, defeated pose, melted on ground, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, liquid",
            "gallery_lv1": "anime, full body, wide angle, abyss jellyfish girl, transparent dress, cute pose, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, detailed"
        },
        lore: {
            "title": "부유하는 독",
            "story": "투명한 몸체 안에 공허의 에너지를 품고 떠다니는 해파리. 아름답지만 촉수에 닿으면 영혼까지 마비된다.",
            "personality": "Floating & Toxic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["둥실... 둥실...", "건드리면 쏘인다.", "투명해지고 싶어."],
            interaction: ["찌릿할걸?", "물컹해.", "독침 조심해."],
            gift: ["플랑크톤?", "빛나는 돌...", "먹을래."],
            special: ["마비 독!", "촉수 채찍!", "투명화!"]
        },
        lines: {
            normal: "바다의 유령이라고 불리지.",
            touch_head: "머리가 어디게?",
            touch_chest: "심장이 보이니?",
            touch_legs: "촉수야.",
            touch_special: "나를 안으면 영원히 잠들 거야."
        }
    },
    {
        id: "void_crab",
        name: "공허 게",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Earth"],
        baseStr: 12, baseInt: 4,
        image: "images/creatures/abyss/creature_void_crab.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_crab.png",
            "joy": "images/creatures/abyss/creature_void_crab_joy.png",
            "sad": "images/creatures/abyss/creature_void_crab_sad.png",
            "angry": "images/creatures/abyss/creature_void_crab_angry.png",
            "skill": "images/creatures/abyss/creature_void_crab_skill.png",
            "victory": "images/creatures/abyss/creature_void_crab_victory.png",
            "defeat": "images/creatures/abyss/creature_void_crab_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_crab_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, void crab girl, crab armor, large claws, purple carapace, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, combat stance",
            "idle": "anime, full body, wide angle, void crab girl, crab armor, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, standing pose",
            "joy": "anime, full body, wide angle, void crab girl, crab armor, happy expression, clicking claws, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, victory V pose",
            "sad": "anime, full body, wide angle, void crab girl, crab armor, sad expression, hiding in shell, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, defensive pose",
            "angry": "anime, full body, wide angle, void crab girl, crab armor, angry expression, bubbles foaming, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, pinching pose",
            "skill": "anime, full body, wide angle, void crab girl, crab armor, using skill, giant clamp, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, void crab girl, crab armor, victory pose, standing on rock, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, strong",
            "defeat": "anime, full body, wide angle, void crab girl, crab armor, defeated pose, flipped over, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dizzy",
            "gallery_lv1": "anime, full body, wide angle, void crab girl, crab armor, cute pose, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, detailed"
        },
        lore: {
            "title": "단단한 껍질",
            "story": "공허의 힘으로 강화된 등껍질을 가진 게. 집게발은 강철도 자를 수 있다고 한다. 옆으로 걷지만 공격은 정면으로 한다.",
            "personality": "Hard & Crabby"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["딸깍... 딸깍...", "거품 뽀글...", "집게발 자랑."],
            interaction: ["딱딱해.", "집게 조심해.", "뒤집지 마."],
            gift: ["조개?", "단단한 거...", "좋아."],
            special: ["집게 절단!", "거품 광선!", "껍질 강화!"]
        },
        lines: {
            normal: "내 등껍질은 최강의 방패야.",
            touch_head: "눈 찌르지 마.",
            touch_chest: "배는 약점이야.",
            touch_legs: "다리가 많아서 편해.",
            touch_special: "내 집게에 잡히면 절대 놓지 않아."
        }
    },
    {
        id: "dark_eel",
        name: "암흑 장어",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Dark"],
        baseStr: 14, baseInt: 5,
        image: "images/creatures/abyss/creature_dark_eel.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_dark_eel.png",
            "joy": "images/creatures/abyss/creature_dark_eel_joy.png",
            "sad": "images/creatures/abyss/creature_dark_eel_sad.png",
            "angry": "images/creatures/abyss/creature_dark_eel_angry.png",
            "skill": "images/creatures/abyss/creature_dark_eel_skill.png",
            "victory": "images/creatures/abyss/creature_dark_eel_victory.png",
            "defeat": "images/creatures/abyss/creature_dark_eel_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_dark_eel_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, dark eel girl, sleek bodysuit, long tail, electric aura, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, swimming pose",
            "idle": "anime, full body, wide angle, dark eel girl, sleek bodysuit, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, floating",
            "joy": "anime, full body, wide angle, dark eel girl, sleek bodysuit, happy expression, swimming loops, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, playful pose",
            "sad": "anime, full body, wide angle, dark eel girl, sleek bodysuit, sad expression, coiling up, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, hiding pose",
            "angry": "anime, full body, wide angle, dark eel girl, sleek bodysuit, angry expression, sparks flying, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, shocking pose",
            "skill": "anime, full body, wide angle, dark eel girl, sleek bodysuit, using skill, thunderbolt, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, dark eel girl, sleek bodysuit, victory pose, mouth open wide, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, roaring",
            "defeat": "anime, full body, wide angle, dark eel girl, sleek bodysuit, defeated pose, tied in knot, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, stunned",
            "gallery_lv1": "anime, full body, wide angle, dark eel girl, sleek bodysuit, cute pose, shiny wet skin, alluring curves, masterpiece, best quality, consistent with freya style, detailed"
        },
        lore: {
            "title": "미끄러운 포식자",
            "story": "어두운 틈새에 숨어 사는 거대 장어. 몸에서 검은 점액을 분비하여 잡으려 해도 미끄러져 나간다. 전기를 내뿜어 먹이를 기절시킨다.",
            "personality": "Slippery & Electric"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["스으윽...", "미끌미끌...", "틈새가 좋아."],
            interaction: ["못 잡을걸?", "찌릿할 거야.", "물어뜯는다."],
            gift: ["물고기?", "미끼?", "냠냠."],
            special: ["전기 충격!", "휘감기!", "점액 발사!"]
        },
        lines: {
            normal: "어둠 속에서 나는 보이지 않지.",
            touch_head: "미끄럽지?",
            touch_chest: "길다란 몸이야.",
            touch_legs: "다리 없어.",
            touch_special: "너를 칭칭 감아서 심해로 데려가줄까?"
        }
    },
    {
        id: "skeleton_fish",
        name: "해골 물고기",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Spirit", "Water"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/abyss/creature_skeleton_fish.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_skeleton_fish.png",
            "joy": "images/creatures/abyss/creature_skeleton_fish_joy.png",
            "sad": "images/creatures/abyss/creature_skeleton_fish_sad.png",
            "angry": "images/creatures/abyss/creature_skeleton_fish_angry.png",
            "skill": "images/creatures/abyss/creature_skeleton_fish_skill.png",
            "victory": "images/creatures/abyss/creature_skeleton_fish_victory.png",
            "defeat": "images/creatures/abyss/creature_skeleton_fish_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_skeleton_fish_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, skeleton fish girl, bone armor, fish tail, empty eyes, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, swimming pose",
            "idle": "anime, full body, wide angle, skeleton fish girl, bone armor, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, floating",
            "joy": "anime, full body, wide angle, skeleton fish girl, bone armor, happy rattle, jaw clacking, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, fast swim",
            "sad": "anime, full body, wide angle, skeleton fish girl, bone armor, sad expression, sinking, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, deep sea pose",
            "angry": "anime, full body, wide angle, skeleton fish girl, bone armor, angry rattle, teeth chattering, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, biting pose",
            "skill": "anime, full body, wide angle, skeleton fish girl, bone armor, using skill, bone bite, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, skeleton fish girl, bone armor, victory pose, swimming fast, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, leading",
            "defeat": "anime, full body, wide angle, skeleton fish girl, bone armor, defeated pose, bones falling apart, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, broken",
            "gallery_lv1": "anime, full body, wide angle, skeleton fish girl, bone armor, cute pose, shiny bones, sweat, alluring curves, masterpiece, best quality, consistent with freya style, detailed"
        },
        lore: {
            "title": "죽지 않는 물고기",
            "story": "살점은 다 썩어 없어지고 뼈만 남은 물고기. 원인 모를 마력으로 계속해서 헤엄친다. 떼를 지어 다니며 살아있는 것들의 살점을 탐한다.",
            "personality": "Undead & Hungry"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["달그락... 달그락...", "물고 싶어...", "끝없는 허기."],
            interaction: ["뼈만 남았어.", "손가락 조심해.", "안 아파."],
            gift: ["고기?", "피...", "살점 줘."],
            special: ["뼈 가시!", "물어뜯기!", "죽음의 행진!"]
        },
        lines: {
            normal: "배고프지 않아도 계속 먹어.",
            touch_head: "가시 조심해.",
            touch_chest: "심장이 없어.",
            touch_legs: "지느러미 뼈야.",
            touch_special: "너도 뼈만 남으면 우리랑 친구가 될 수 있어."
        }
    },
    {
        id: "phantom_ray",
        name: "유령 가오리",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Spirit", "Void"],
        baseStr: 10, baseInt: 18,
        image: "images/creatures/abyss/creature_phantom_ray.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_phantom_ray.png",
            "joy": "images/creatures/abyss/creature_phantom_ray_joy.png",
            "sad": "images/creatures/abyss/creature_phantom_ray_sad.png",
            "angry": "images/creatures/abyss/creature_phantom_ray_angry.png",
            "skill": "images/creatures/abyss/creature_phantom_ray_skill.png",
            "victory": "images/creatures/abyss/creature_phantom_ray_victory.png",
            "defeat": "images/creatures/abyss/creature_phantom_ray_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_phantom_ray_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, phantom ray girl, transparent wings, ghostly blue, glowing eyes on back, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, gliding pose",
            "idle": "anime, full body, wide angle, phantom ray girl, transparent wings, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, hovering",
            "joy": "anime, full body, wide angle, phantom ray girl, transparent wings, happy expression, gliding gracefully, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dancing pose",
            "sad": "anime, full body, wide angle, phantom ray girl, transparent wings, sad expression, fading away, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, transparent pose",
            "angry": "anime, full body, wide angle, phantom ray girl, transparent wings, angry expression, eyes glowing red, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, scaring pose",
            "skill": "anime, full body, wide angle, phantom ray girl, transparent wings, using skill, hypnosis wave, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, phantom ray girl, transparent wings, victory pose, looping in air, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, playful",
            "defeat": "anime, full body, wide angle, phantom ray girl, transparent wings, defeated pose, vanished on ground, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, exhausted",
            "gallery_lv1": "anime, full body, wide angle, phantom ray girl, transparent wings, cute pose, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, detailed"
        },
        lore: {
            "title": "심해의 유령",
            "story": "물속을 날아다니듯 헤엄치는 유령 가오리. 벽이나 바닥을 통과할 수 있으며, 기분 나쁜 웃음소리를 낸다. 등에 달린 눈알 무늬로 적을 최면 건다.",
            "personality": "Ghostly & Hypnotic"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["스으윽...", "날아오른다...", "벽을 넘어서."],
            interaction: ["통과할걸?", "만져지지 않아.", "최면을 걸어주지."],
            gift: ["영혼?", "기억...", "맛있어."],
            special: ["최면 파동!", "유령 돌진!", "투과!"]
        },
        lines: {
            normal: "나는 어디든 갈 수 있어.",
            touch_head: "날개 짓.",
            touch_chest: "유령이야.",
            touch_legs: "꼬리에 독침 있어.",
            touch_special: "내 등의 눈을 봐... 점점... 잠이 온다..."
        }
    }
    ,
    {
        id: "wisp_faint",
        name: "희미한 위습",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_wisp_faint.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_wisp_faint.png",
            "joy": "images/creatures/abyss/creature_wisp_faint_joy.png",
            "sad": "images/creatures/abyss/creature_wisp_faint_sad.png",
            "angry": "images/creatures/abyss/creature_wisp_faint_angry.png",
            "skill": "images/creatures/abyss/creature_wisp_faint_skill.png",
            "victory": "images/creatures/abyss/creature_wisp_faint_victory.png",
            "defeat": "images/creatures/abyss/creature_wisp_faint_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_wisp_faint_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime, full body, wide angle, faint wisp girl, small glowing spirit, translucent body, weak light, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, shy pose",
            "idle": "anime, full body, wide angle, faint wisp girl, small glowing spirit, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, floating",
            "joy": "anime, full body, wide angle, faint wisp girl, small glowing spirit, happy expression, flickering bright, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, glowing pose",
            "sad": "anime, full body, wide angle, faint wisp girl, small glowing spirit, sad expression, almost invisible, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, fading pose",
            "angry": "anime, full body, wide angle, faint wisp girl, small glowing spirit, angry expression, flaring up, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, warning pose",
            "skill": "anime, full body, wide angle, faint wisp girl, small glowing spirit, using skill, flashbang, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, dynamic pose",
            "victory": "anime, full body, wide angle, faint wisp girl, small glowing spirit, victory pose, guiding light, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, helpful",
            "defeat": "anime, full body, wide angle, faint wisp girl, small glowing spirit, defeated pose, darkness, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, extinguished",
            "gallery_lv1": "anime, full body, wide angle, faint wisp girl, small glowing spirit, cute pose, shiny skin, sweat, alluring curves, masterpiece, best quality, consistent with freya style, detailed"
        },
        lore: {
            "title": "희미한 존재",
            "story": "심연의 가장자리에서 희미하게 빛나는 하급 정령. 존재감이 거의 없어 눈에 잘 띄지 않는다. 하지만 모이면 어둠을 밝히는 길잡이가 되기도 한다.",
            "personality": "Faint & Helpful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "나 여기 있어...",
                "보이니?",
                "깜빡... 깜빡..."
            ],
            interaction: [
                "꺼지지 않아.",
                "후 불지 마.",
                "간지러워."
            ],
            gift: [
                "빛조각?",
                "고마워...",
                "힘이 나."
            ],
            special: [
                "빛의 점멸!",
                "눈부시지?",
                "여기라고!"
            ]
        },
        lines: {
            normal: "나를 잊지 말아줘.",
            touch_head: "형체가 희미해.",
            touch_chest: "마음만은 따뜻해.",
            touch_legs: "발이 없어.",
            touch_special: "네 마음속의 작은 빛이 되어줄게."
        }
    }
];