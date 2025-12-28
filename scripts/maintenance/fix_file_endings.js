const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'js', 'data', 'creatures');
const files = ['OlympusData.js', 'AsgardData.js', 'AbyssData.js', 'ShangriLaData.js', 'WildData.js'];

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Count occurences of `];`
    // We want to replace all `];` with `,\n` EXCEPT the very last one.

    // Find all indices
    const regex = /\];/g;
    let match;
    const indices = [];
    while ((match = regex.exec(content)) !== null) {
        indices.push(match.index);
    }

    if (indices.length > 1) {
        console.log(`Fixing ${file}: found ${indices.length} endings.`);

        // We reconstruct the string.
        // Or simpler: replace all `];` with `,\n`, then append `];` at the very end (if not present).
        // Wait, if we replace ALL with `,\n`, then we just need to verify the file ends with `];`?
        // No, the last one should correspond to the main array close.

        // Strategy:
        // Replace all `];` with `,\n`.
        // Then look at the end of the string. Change the last `,\n` (or just last comma) back to `];`.
        // Or simply append `];` if the file doesn't end with it?

        // Let's replace ALL `];` with `,\n`.
        let fixed = content.replace(/\];/g, ',\n');

        // Verify format
        fixed = fixed.trim();
        if (fixed.endsWith(',')) {
            fixed = fixed.substring(0, fixed.length - 1); // remove last comma
        }

        // Append correct closing
        fixed += '\n];';

        fs.writeFileSync(filePath, fixed, 'utf8');
    } else {
        console.log(`${file} seems okay (1 or 0 ending).`);
    }
});
