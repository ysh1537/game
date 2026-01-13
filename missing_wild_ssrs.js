
{
    id: "beast_behemoth",
        name: "대지의 패왕 베히모스",
            rarity: RANKS.SSR,
                world: WORLDS.WILD,
                    elements: ["Earth"],
                        baseStr: 90, baseInt: 10,
                            image: "images/creatures/wild/creature_beast_behemoth.png",
                                sprites: {
        idle: "images/creatures/wild/creature_beast_behemoth.png",
            joy: "images/creatures/wild/creature_beast_behemoth_joy.png",
                sad: "images/creatures/wild/creature_beast_behemoth_sad.png",
                    angry: "images/creatures/wild/creature_beast_behemoth_angry.png",
                        skill: "images/creatures/wild/creature_beast_behemoth_skill.png",
                            gallery: { }
    },
    prompts: {
        base: "anime style, 대지의 패왕 베히모스, gigantic beast, hippo elephant mix, earth armor",
            idle: "standing"
    },
    lore: {
        title: "대지의 기둥",
            story: "대지를 지탱하는 거대한 짐승. 그가 걸음을 옮길 때마다 지각 변동이 일어납니다. 레비아탄과 대적하는 지상의 지배자입니다.",
                personality: "Stoic"
    },
    relationships: { likes: [], dislikes: ["beast_leviathan"], rival: null },
    touchLines: {
        idle: ["쿵... 쿵...", "땅이 울린다.", "나는 흔들리지 않는다."],
            interaction: ["개미가 기어가는군.", "내 가죽은 강철보다 단단하다.", "힘을 시험해보고 싶나?"],
                gift: ["바위인가? 먹을 만하군.", "거대한 것이 좋지.", "나쁘지 않군."],
                    special: ["지진이다!", "대지여, 솟아라!", "짓밟아주마!"]
    },
    lines: {
        normal: "산보다 거대한 나의 힘을 보아라.",
            touch_head: "머리를 숙일 일은 없다.",
                touch_chest: "심장은 용암처럼 뜨겁지.",
                    touch_legs: "기둥처럼 단단하다.",
                        touch_special: "나를 움직이게 만든 건 네가 처음이다."
    }
},
{
    id: "creator_gaia_wild",
        name: "대지의 어머니 가이아 (Wild)",
            rarity: RANKS.SSR,
                world: WORLDS.WILD,
                    elements: ["Earth", "Nature"],
                        baseStr: 30, baseInt: 80,
                            image: "images/creatures/olympus/creature_god_gaia.png", // Reuse Olympus Gaia image
                                sprites: {
        idle: "images/creatures/olympus/creature_god_gaia.png",
            joy: "images/creatures/olympus/creature_god_gaia_joy.png",
                sad: "images/creatures/olympus/creature_god_gaia_sad.png",
                    angry: "images/creatures/olympus/creature_god_gaia_angry.png",
                        skill: "images/creatures/olympus/creature_god_gaia_skill.png",
                            gallery: { }
    },
    prompts: {
        base: "anime style, 대지의 어머니 가이아, nature goddess, flowers",
            idle: "standing"
    },
    lore: {
        title: "생명의 요람",
            story: "모든 생명체의 어머니. 야생의 땅에서도 그녀의 숨결은 숲을 이루고 강을 흐르게 합니다. 올림포스의 가이아와 동일한 존재이지만, 이곳에서는 더욱 야성적인 모습으로 현현합니다.",
                personality: "Motherly"
    },
    relationships: { likes: [], dislikes: [], rival: null },
    touchLines: {
        idle: ["모든 것은 흙으로 돌아간단다.", "생명이 피어나는 소리가 들리니?", "자연은 위대해요."],
            interaction: ["아이 착해라.", "품에 안기고 싶니?", "대지의 축복을 내려줄게."],
                gift: ["어머, 예쁜 꽃이네.", "자연의 선물 고마워요.", "잘 키워볼게."],
                    special: ["대지의 분노!", "생명의 힘으로!", "모두 자라나라!"]
    },
    lines: {
        normal: "나는 모든 것의 시작이자 끝이란다.",
            touch_head: "머릿결이 숲같지?",
                touch_chest: "모든 생명을 품을 수 있어.",
                    touch_legs: "대지와 연결되어 있단다.",
                        touch_special: "나의 정원에서 영원히 뛰어놀렴."
    }
}
