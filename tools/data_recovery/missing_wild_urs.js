
{
    id: "beast_ziz",
        name: "천상의 여왕 지즈",
            rarity: RANKS.UR,
                world: WORLDS.WILD,
                    elements: ["Wind", "Light"],
                        baseStr: 80, baseInt: 60,
                            image: "images/creatures/wild/creature_beast_ziz.png",
                                sprites: {
        idle: "images/creatures/wild/creature_beast_ziz.png",
            joy: "images/creatures/wild/creature_beast_ziz_joy.png",
                sad: "images/creatures/wild/creature_beast_ziz_sad.png",
                    angry: "images/creatures/wild/creature_beast_ziz_angry.png",
                        skill: "images/creatures/wild/creature_beast_ziz_skill.png",
                            victory: "images/creatures/wild/creature_beast_ziz_victory.png",
                                defeat: "images/creatures/wild/creature_beast_ziz_defeat.png",
                                    gallery: { }
    },
    prompts: {
        base: "anime style, 천상의 여왕 지즈, giant mythical bird, glowing wings",
            idle: "flying"
    },
    lore: {
        title: "하늘의 지배자",
            story: "하늘을 지배하는 거대한 새. 날개를 펼치면 태양을 가릴 정도로 거대하며, 레비아탄, 베히모스와 함께 태초의 짐승 중 하나입니다.",
                personality: "Majestic"
    },
    relationships: { likes: [], dislikes: [], rival: null },
    touchLines: {
        idle: ["하늘은 나의 것이다.", "바람이 느껴지는가?", "구름 위로 올라오라."],
            interaction: ["깃털 하나가 숲 하나를 덮을 수 있지.", "나를 부르는 자 누구냐.", "태양 가까이로 가자."],
                gift: ["하늘의 보물이군.", "바람의 선물인가?", "만족스럽다."],
                    special: ["천공의 심판!", "하늘이 무너질 것이다!", "태풍을 불러오마!"]
    },
    lines: {
        normal: "나의 날개 아래 모든 것이 평온하리라.",
            touch_head: "왕관을 건드리지 마라.",
                touch_chest: "심장은 폭풍처럼 뛰고 있다.",
                    touch_legs: "대지에 발을 딛는 것은 드문 일이지.",
                        touch_special: "함께 하늘의 끝까지 날아보자꾸나."
    }
}
