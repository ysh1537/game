const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../js/data/creatures/WildData.js');
let content = fs.readFileSync(filePath, 'utf8');

const idsToRemove = [
    'wolf_dire',
    'snow_spirit',
    'golem_mud',
    'creature_giant_hill',
    'creature_bat_small',
    'rat_brown',
    'pebble_new',
    'fossil_stone',
    'mist_crawler',
    'willOWisp_green'
];

let newContent = content;
let removedCount = 0;

idsToRemove.forEach(id => {
    const idString = `id: "${id}"`;
    const idIndex = newContent.indexOf(idString);

    if (idIndex !== -1) {
        // Find start brace (backwards)
        let startIndex = idIndex;
        while (startIndex > 0 && newContent[startIndex] !== '{') {
            startIndex--;
        }

        // Find end brace (forwards)
        let braceCount = 1;
        let endIndex = startIndex + 1;
        while (braceCount > 0 && endIndex < newContent.length) {
            if (newContent[endIndex] === '{') braceCount++;
            if (newContent[endIndex] === '}') braceCount--;
            endIndex++;
        }

        // Handle trailing comma which might be after the closing brace
        let removeEndIndex = endIndex;
        while (removeEndIndex < newContent.length) {
            const char = newContent[removeEndIndex];
            if (char === ' ' || char === '\n' || char === '\r' || char === '\t') {
                removeEndIndex++;
                continue;
            }
            if (char === ',') {
                removeEndIndex++; // Include the comma in removal
                break;
            }
            break; // Found something else, stop
        }

        console.log(`Removing ${id}...`);
        newContent = newContent.substring(0, startIndex) + newContent.substring(removeEndIndex);
        removedCount++;
    } else {
        console.log(`ID ${id} not found.`);
    }
});

fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Fixed WildData.js. Removed ${removedCount} creatures.`);
