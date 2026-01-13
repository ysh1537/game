const fs = require('fs');
const path = require('path');

const jsonDir = path.join(__dirname, '../js/data/json');
const worlds = ['Asgard', 'Abyss', 'Olympus', 'ShangriLa', 'Wild'];
const missingAssets = [];
const existingAssets = [];

let totalAssets = 0;

console.log('Checking for missing assets...');

worlds.forEach(world => {
    const jsonPath = path.join(jsonDir, `${world}Data.json`);
    if (!fs.existsSync(jsonPath)) {
        console.error(`Missing JSON file: ${jsonPath}`);
        return;
    }

    try {
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        data.forEach(creature => {
            // Check main image
            if (creature.image) checkAsset(creature.image, world, creature.name, 'main');

            // Check sprites
            if (creature.sprites) {
                Object.entries(creature.sprites).forEach(([key, value]) => {
                    if (typeof value === 'string') {
                        checkAsset(value, world, creature.name, `sprite:${key}`);
                    } else if (typeof value === 'object') {
                        // Handle nested objects like gallery
                        Object.entries(value).forEach(([subKey, subValue]) => {
                            checkAsset(subValue, world, creature.name, `sprite:${key}:${subKey}`);
                        });
                    }
                });
            }
        });
    } catch (e) {
        console.error(`Error processing ${world}: ${e.message}`);
    }
});

function checkAsset(relativePath, world, creatureName, type) {
    totalAssets++;
    // Assume relativePath is from project root, e.g. "images/creatures/..."
    const absolutePath = path.join(__dirname, '..', relativePath);

    if (!fs.existsSync(absolutePath)) {
        missingAssets.push({
            world,
            creature: creatureName,
            type,
            path: relativePath
        });
    } else {
        existingAssets.push(relativePath);
    }
}

console.log('\n--- Asset Check Summary ---');
console.log(`Total Asset References: ${totalAssets}`);
console.log(`Existing Assets: ${existingAssets.length}`);
console.log(`Missing Assets: ${missingAssets.length}`);
console.log(`Missing Rate: ${((missingAssets.length / totalAssets) * 100).toFixed(1)}%`);

if (missingAssets.length > 0) {
    console.log('\n--- Missing Assets by World ---');
    const byWorld = missingAssets.reduce((acc, curr) => {
        acc[curr.world] = (acc[curr.world] || 0) + 1;
        return acc;
    }, {});
    console.table(byWorld);

    console.log('\n--- First 20 Missing Assets ---');
    missingAssets.slice(0, 20).forEach(m => {
        console.log(`[${m.world}] ${m.creature} (${m.type}): ${m.path}`);
    });

    // Write full report to file
    const reportPath = path.join(__dirname, '../MISSING_ASSETS_REPORT.md');
    let reportContent = '# Missing Assets Report\n\n';
    reportContent += `Generated at: ${new Date().toISOString()}\n`;
    reportContent += `Missing: ${missingAssets.length} / ${totalAssets}\n\n`;

    const structuredMissing = {};
    missingAssets.forEach(m => {
        if (!structuredMissing[m.world]) structuredMissing[m.world] = [];
        structuredMissing[m.world].push(m);
    });

    for (const [world, assets] of Object.entries(structuredMissing)) {
        reportContent += `## ${world} (${assets.length})\n`;
        assets.forEach(m => {
            reportContent += `- **${m.creature}** [${m.type}]: \`${m.path}\`\n`;
        });
        reportContent += '\n';
    }

    fs.writeFileSync(reportPath, reportContent);
    console.log(`\nFull report written to: ${reportPath}`);
}
