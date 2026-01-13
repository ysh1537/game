const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../js/data/json');
const OUTPUT_FILE = path.join(__dirname, '../CREATURE_RARITY_LIST.md');

const RARITY_ORDER = {
    "UR": 0,
    "SSR": 1,
    "SR": 2,
    "Rare": 3,
    "Unique": 4,
    "Normal": 5,
    "Special": 6
};

// Map World Codes to Display Names if needed, or just use as is.
const WORLDS = {
    "ASGARD": "Asgard (북유럽 신화)",
    "OLYMPUS": "Olympus (그리스 신화)",
    "SHANGRILA": "Shangri-La (무릉도원)",
    "WILD": "Wild (대자연)",
    "ABYSS": "Abyss (심연/크툴루)"
};

function getRarityOrder(rarity) {
    return RARITY_ORDER[rarity] !== undefined ? RARITY_ORDER[rarity] : 99;
}

function generateList() {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
    let allCreatures = [];

    files.forEach(file => {
        const filePath = path.join(DATA_DIR, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const creatures = Array.isArray(data) ? data : Object.values(data).flat();
        allCreatures = allCreatures.concat(creatures);
    });

    // Group by World
    const grouped = {};
    allCreatures.forEach(c => {
        const world = c.world || "UNKNOWN";
        if (!grouped[world]) grouped[world] = [];
        grouped[world].push(c);
    });

    let markdown = "# 심층 자산 보고서: 테마별 크리처 등급 리스트\n\n";

    // Sort Worlds (Fixed Order)
    const worldOrder = ["ASGARD", "OLYMPUS", "SHANGRILA", "WILD", "ABYSS"];

    worldOrder.forEach(worldKey => {
        const creatures = grouped[worldKey];
        if (!creatures) return;

        const worldName = WORLDS[worldKey] || worldKey;
        markdown += `## ${worldName}\n\n`;
        markdown += `| 등급 (Rarity) | 이름 (Name) | ID | 속성 (Elements) |\n`;
        markdown += `|---|---|---|---|\n`;

        // Sort by Rarity
        creatures.sort((a, b) => getRarityOrder(a.rarity) - getRarityOrder(b.rarity));

        creatures.forEach(c => {
            const elements = c.elements ? c.elements.join(", ") : "-";
            markdown += `| **${c.rarity}** | ${c.name} | ${c.id} | ${elements} |\n`;
        });
        markdown += `\n**Total:** ${creatures.length} Creatures\n\n`;
    });

    fs.writeFileSync(OUTPUT_FILE, markdown, 'utf8');
    console.log(`Report generated at ${OUTPUT_FILE}`);
}

generateList();
