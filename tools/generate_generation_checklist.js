const fs = require('fs');
const path = require('path');

// --- Load Data Files ---
// (We need to manually require them or read/eval them as they are formatted as 'var X = ...')
// For simplicity in this tool URL, we'll read file content and eval cleanly or use regex.
// Regex is safer to avoid Runtime reference errors if WORLDS/RANKS are missing.

const DATA_DIR = path.join(__dirname, '../js/data/creatures');
const IMAGE_DIR = path.join(__dirname, '../images/creatures');

const DATA_FILES = [
    { name: 'AsgardData.js', world: 'asgard' },
    { name: 'OlympusData.js', world: 'olympus' },
    { name: 'ShangriLaData.js', world: 'shangrila' },
    { name: 'AbyssData.js', world: 'abyss' },
    { name: 'WildData.js', world: 'wild' }
];

function extractImagePaths(fileContent) {
    const paths = [];
    const regex = /"images\/creatures\/[^"]+"/g;
    let match;
    while ((match = regex.exec(fileContent)) !== null) {
        // Remove quotes
        paths.push(match[0].replace(/"/g, ''));
    }
    return paths;
}

function extractCreatureInfo(fileContent) {
    // This is a rough parser to map lines/blocks to creature IDs for better reporting
    // But since we just want a list of missing FILES, simple string extraction is enough for the file list.
    // However, grouping by creature is nicer.
    // Let's rely on the file structure: 
    // id: "..."
    // image: "..."
    // sprites: { ... }

    // We will parse the file content into a simplified object structure strictly for image extraction
    // This is tricky with raw JS files containing variables. 
    // Strategy: Use regex to find `id: "identifier"` and then capture the block until the next id/end.

    // Actually, simpler approach:
    // Just find all image paths. Then check existence.
    // If we want grouping, we need to know which creature owns which image.
    // We can try to assume standard formatting.

    const creatures = [];
    const blocks = fileContent.split('id: "');

    // blocks[0] is header. blocks[1...] are creatures (mostly)
    for (let i = 1; i < blocks.length; i++) {
        const block = blocks[i];
        const idMatch = block.match(/^([a-zA-Z0-9_]+)"/);
        if (!idMatch) continue;

        const id = idMatch[1];
        const imageMatches = block.match(/"images\/creatures\/[^"]+"/g);

        if (imageMatches) {
            const assets = imageMatches.map(p => p.replace(/"/g, ''));
            // Remove duplicates
            const uniqueAssets = [...new Set(assets)];

            // Extract Name if possible
            const nameMatch = block.match(/name:\s*"([^"]+)"/);
            const name = nameMatch ? nameMatch[1] : id;

            creatures.push({
                id: id,
                name: name,
                assets: uniqueAssets
            });
        }
    }
    return creatures;
}

function generateChecklist() {
    console.log("미보유 에셋 체크리스트 생성 중...");

    let markdownOutput = "# 📋 미보유 에셋 체크리스트 (Missing Assets Checklist)\n\n";
    markdownOutput += "> 코드에서 참조하고 있으나 디스크에 존재하지 않는 에셋 목록입니다. 생성 일시: " + new Date().toLocaleString('ko-KR') + "\n\n";

    let totalMissing = 0;

    DATA_FILES.forEach(dataFile => {
        const filePath = path.join(DATA_DIR, dataFile.name);
        if (!fs.existsSync(filePath)) return;

        const content = fs.readFileSync(filePath, 'utf8');
        const creatures = extractCreatureInfo(content);

        let worldMissingCount = 0;
        let worldSection = `## 🌍 ${dataFile.world.toUpperCase()} (${dataFile.name})\n\n`;

        creatures.forEach(creature => {
            const missingAssets = [];

            creature.assets.forEach(assetPath => {
                const fullPath = path.join(__dirname, '..', assetPath);
                if (!fs.existsSync(fullPath)) {
                    missingAssets.push(assetPath);
                }
            });

            if (missingAssets.length > 0) {
                worldSection += `### ${creature.name} (\`${creature.id}\`)\n`;
                missingAssets.forEach(asset => {
                    worldSection += `- [ ] \`${asset}\`\n`;
                    worldMissingCount++;
                    totalMissing++;
                });
                worldSection += "\n";
            }
        });

        if (worldMissingCount > 0) {
            markdownOutput += worldSection;
        }
    });

    markdownOutput += `\n---\n**총 미보유 파일 수:** ${totalMissing}\n`;

    const outputPath = path.join(__dirname, '../Missing_Assets_To_Generate.md');
    fs.writeFileSync(outputPath, markdownOutput, 'utf8');
    console.log(`Report generated at: ${outputPath}`);
    console.log(`Total missing: ${totalMissing}`);
}

generateChecklist();
