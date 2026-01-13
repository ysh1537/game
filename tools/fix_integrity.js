const fs = require('fs');
const path = require('path');

// 1. Skip Asgard (Already done)
console.log('Skipping AsgardData (Already processed).');

// 2. Fix Wild
const wildPath = path.join(__dirname, '../js/data/creatures/WildData.js');
console.log(`Processing WildData: ${wildPath}`);

try {
    let wild = fs.readFileSync(wildPath, 'utf8');

    // Strategy: Remove the *last* duplicate of "time_lord_chronos".
    // 1. Find the LAST occurrence of 'id: "time_lord_chronos"'.
    const lastChronosID = wild.lastIndexOf('id: "time_lord_chronos"');

    if (lastChronosID !== -1) {
        // 2. Find the opening brace '{' belonging to this entry.
        // Search backwards from lastChronosID.
        const openBrace = wild.lastIndexOf('{', lastChronosID);

        if (openBrace !== -1) {
            console.log(`Found duplicate Chronos starting at index ${openBrace}`);

            // 3. Truncate file content before this brace.
            // This leaves the preceding comma if present.
            let cleanWild = wild.substring(0, openBrace);

            // 4. Clean up trailing comma/whitespace if needed
            cleanWild = cleanWild.trim();
            if (cleanWild.endsWith(',')) {
                cleanWild = cleanWild.slice(0, -1); // Remove trailing comma
            }

            // 5. Check if we also need to close the array.
            // The file structure was [ ... , {Ziz}, {Chronos} ];
            // We removed {Chronos} ];
            // So we need to append ];
            cleanWild += '\n];';

            fs.writeFileSync(wildPath, cleanWild, 'utf8');
            console.log('WildData.js: Removed duplicate time_lord_chronos and closed array.');
        } else {
            console.error('Could not find opening brace for last Chronos.');
        }
    } else {
        console.log('time_lord_chronos not found in WildData.js (or only one instance?). Check audit.');
    }

} catch (err) {
    console.error('Error processing WildData:', err);
}
