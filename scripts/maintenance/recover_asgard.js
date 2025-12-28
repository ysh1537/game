
import fs from 'fs';
import path from 'path';

const RANKS_IMPORT = "import { RANKS } from '../RankData.js';\nimport { WORLDS } from '../WorldData.js';\n\n";

// Data from creature_asset_inventory.md
const RAW_DATA = `
| **SSR** | 발키리 지휘관 | valkyrie_commander | Placeholder |
| **Unique** | 발키리 정예병 | valkyrie_elite | Placeholder |
| ASGARD | UR | 천둥의 망치 토르 | images/creature_god_thor.png |
| ASGARD | UR | 세계뱀 요르문간드 | images/creature_snake_world_jormungandr.png |
| ASGARD | SSR | 종말의 늑대 펜리르 | images/creature_wolf_fenrir.png |
| ASGARD | SSR | 장난의 신 로키 | images/creature_god_loki.png |
| ASGARD | SSR | 아름다움의 여신 프레이야 | images/creature_god_freya.png |
| ASGARD | SSR | 발키리 대장 군르 | images/creature_valkyrie_leader_gunnr.png |
| ASGARD | SSR | 아기 슬레이프니르 | images/creature_sleipnir_foal.png |
| ASGARD | SR | 대지의 방패 그로트 | images/creature_giant_hill.png |
| ASGARD | SR | 저승의 여왕 헬 | images/god_hel.png |
| ASGARD | SR | 불의 거인 수르트 | images/giant_fire_surtr.png |
| ASGARD | SR | 세계수 수호병 | images/yggdrasil_guardian.png |
| ASGARD | Special | 방황하는 에인헤랴르 | images/einherjar_ghost.png |
| ASGARD | Special | 황금 뿔 엘크 | images/elk_golden.png |
| ASGARD | Special | 미미르의 지혜 정령 | images/mimir_spirit.png |
| ASGARD | Special | 프레이야의 고양이 | images/nordic_cat_freya.png |
| ASGARD | Rare | 강철 독수리 | images/creature_eagle_iron.png |
| ASGARD | Rare | 만년설 곰 | images/creature_bear_ice.png |
| ASGARD | Rare | 오딘의 까마귀 후긴 | images/huginn_crow.png |
| ASGARD | Rare | 오딘의 까마귀 무닌 | images/muninn_crow.png |
| ASGARD | Rare | 번개 염소 탕그리스니르 | images/goat_lightning.png |
| ASGARD | Rare | 니드호그의 자식 | images/nidhogg_spawn.png |
| ASGARD | Rare | 서리 거인 전사 | images/frost_giant_warrior.png |
| ASGARD | Rare | 화염 거인 정찰병 | images/fire_giant_scout.png |
| ASGARD | Rare | 걀라르호른의 메아리 | images/heimdall_horn_spirit.png |
| ASGARD | Unique | 열혈 바이킹 소년 | images/viking_youth.png |
| ASGARD | Unique | 신입 발키리 | images/valkyrie_recruit.png |
| ASGARD | Unique | 전령 다람쥐 라타토스크 | images/ratatoskr_squirrel.png |
| ASGARD | Unique | 철벽의 방패처녀 | images/shieldmaiden_iron.png |
| ASGARD | Unique | 베어 버서커 | images/beserker_bear.png |
| ASGARD | Unique | 울프헤드나르 전사 | images/ulfhednar_wolf.png |
| ASGARD | Normal | 아기 늑대 | images/wolf_pup_asgard.png |
| ASGARD | Normal | 드워프 수습전공 | images/dwarf_apprentice.png |
| ASGARD | Normal | 아기 트롤 | images/troll_baby.png |
| ASGARD | Normal | 작은 얼음 정령 | images/ice_spirit_small.png |
| ASGARD | Normal | 낡은 드라우그 | images/draugr_remnant.png |
| ASGARD | Normal | 비프뢰스트의 빛무궁 | images/bifrost_wisp.png |
`;

// Also add Odin manually as it was missing from the generated list (maybe in Wild/Unknown section)
const ODIN = {
    id: "god_odin",
    name: "최고신 오딘",
    rarity: "SSR",
    world: "Asgard", // Should map to WORLDS.ASGARD
    image: "images/creature_god_odin.png"
};

function parseRawData() {
    const lines = RAW_DATA.trim().split('\n');
    const items = [];

    lines.forEach(line => {
        if (!line.includes('|')) return;

        // Split by pipe
        // Format 1: | **Rarity** | Name | ID | Status | (Missing List)
        // Format 2: | World | Rarity | Name | Image | (Generated List)

        const parts = line.split('|').map(s => s.trim()).filter(s => s);

        let rarity, name, id, image;

        if (parts[0].includes('**')) {
            // Missing List: Rarity | Name | ID | Status
            rarity = parts[0].replace(/\*\*/g, '');
            name = parts[1];
            id = parts[2];
            image = `images/${id}.png`; // Guess
        } else {
            // Generated List: World | Rarity | Name | Image
            rarity = parts[1];
            name = parts[2];
            image = parts[3];
            // ID extract from image? "images/creature_god_thor.png" -> "god_thor"?
            // Or use name map? No, image filename is usually ID based but sometimes not.
            // Let's assume ID is basename without extension, removing 'creature_' prefix if present?
            // Wait, I need correct ID.
            // Archive has ID in generated list? No, check table headers: | World | Rarity | Name | Image |
            // Missing ID column in generated list!
            // I have to guess ID from Image.
            const basename = path.basename(image, path.extname(image));
            id = basename.replace(/^creature_/, '');
        }

        // Map Rarity to Key
        // RANKS.SSR etc.
        // We will store as string literal property reference: "RANKS.SSR"

        items.push({
            id,
            name,
            rarity: `RANKS.${rarity.toUpperCase()}`,
            image,
            world: "WORLDS.ASGARD"
        });
    });

    // Add Odin
    items.unshift({
        id: ODIN.id,
        name: ODIN.name,
        rarity: `RANKS.${ODIN.rarity}`,
        image: ODIN.image,
        world: "WORLDS.ASGARD"
    });

    return items;
}

function generateFile() {
    const items = parseRawData();
    console.log(`Recovered ${items.length} items`);

    let content = `${RANKS_IMPORT}export const ASGARD_CREATURES = [\n`;

    items.forEach(item => {
        content += `    {
        id: "${item.id}",
        name: "${item.name}",
        rarity: ${item.rarity},
        world: ${item.world},
        elements: ["Light"], // Default
        baseStr: 10, baseInt: 10,
        image: "${item.image}",
        sprites: {
            idle: "${item.image}"
        },
        lore: { title: "미지의 존재", story: "복구된 데이터입니다." },
        lines: { normal: "..." }
    },\n`;
    });

    content += "];";

    fs.writeFileSync('./js/data/creatures/AsgardData.js', content, 'utf8');
    console.log("AsgardData.js restored.");
}

generateFile();
