const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'js', 'data', 'creatures');
const files = ['OlympusData.js', 'AsgardData.js', 'AbyssData.js', 'ShangriLaData.js', 'WildData.js'];

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract the array content
    // Assuming format: export const NAME = [ ... ];
    const startMatch = content.match(/export const \w+ = \[\s*/);
    if (!startMatch) {
        console.log(`Skipping ${file}: No array start found`);
        return;
    }

    const header = startMatch[0];
    const arrayBody = content.substring(startMatch.index + header.length);

    // We need to robustly parse the objects.
    // Instead of regex hacking which failed before or caused issues, let's try a safer split.
    // Objects start with { and end with }, or },
    // But nested objects (lore, lines) make simple split hard.

    // Let's iterate line by line and track braces depth.
    const lines = content.split('\n');
    const newLines = [];
    const seenIds = new Set();

    let inArray = false;
    let braceDepth = 0;
    let currentObjectLines = [];
    let currentId = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (!inArray) {
            newLines.push(line);
            if (line.includes('export const') && line.includes('=[')) {
                inArray = true;
                braceDepth = 1; // [ is mostly treated like an opening block for this logic? No.
                // Actually JS array uses [ ]. Objects use { }.
                // Let's assume the array starts. 
                // But braceDepth logic is for Objects inside array.
            }
            continue;
        }

        // Inside Array
        // Identify start of object
        if (line.trim().startsWith('{') && braceDepth === 0) { // Top level object start?
            // Actually, braceDepth relative to array?
            // Iterate char by char is safer but slow to implement here.
            // Assume formatting is clean (one object start per line)
            braceDepth = 1;
            currentObjectLines = [line];
            currentId = null;
            continue;
        }

        if (braceDepth > 0) {
            currentObjectLines.push(line);
            // Check ID
            if (line.includes('id:') && !currentId) {
                const match = line.match(/id:\s*['"]([^'"]+)['"]/);
                if (match) currentId = match[1];
            }

            // Check braces count in line
            const openCount = (line.match(/\{/g) || []).length;
            const closeCount = (line.match(/\}/g) || []).length;
            // The first '{' was already counted if we started block
            // Excluding the first '{' of the block if we counted it?
            // Wait, simple brace counting:

            // Let's use a cleaner approach:
            // Parse line braces.
            // If braceDepth goes back to 0, object ended.
        }

        // This is getting complicated.
        // Alternative: Regex find all `{ id: ... },?` blocks?
        // Too risky with nested braces.

        // Let's use the previous logic but with ID deduplication.
        // Just construct the file again, skipping objects with seen IDs.
    }

    // Attempt 2: Simple text processing assuming formatting
    // Objects start with "    {"
    // Objects end with "    }," or "    }"

    const outputLines = [];
    let skipping = false;
    const seen = new Set();

    let buffer = [];
    let tempId = null;
    let bracketBalance = 0;

    // Keep header
    let headerLinesIdx = 0;
    for (; headerLinesIdx < lines.length; headerLinesIdx++) {
        outputLines.push(lines[headerLinesIdx]);
        if (lines[headerLinesIdx].includes('export const') && lines[headerLinesIdx].includes('[')) {
            headerLinesIdx++;
            break;
        }
    }

    for (let i = headerLinesIdx; i < lines.length; i++) {
        const line = lines[i];

        // End of array
        if (line.trim() === '];') {
            if (buffer.length > 0 && tempId && !seen.has(tempId)) {
                outputLines.push(...buffer);
            }
            outputLines.push(line);
            break;
        }

        buffer.push(line);

        // Check ID
        if (line.includes('id:')) {
            const match = line.match(/id:\s*['"]([^'"]+)['"]/);
            if (match) tempId = match[1];
        }

        // Check end of object
        // Assuming formatted as "    }," or "    }" at indent 4
        if (line.trim().startsWith('}') && (line.trim() === '},' || line.trim() === '}')) {
            // Block ended
            if (tempId) {
                if (seen.has(tempId)) {
                    // Metadata: Skip duplicate
                    // console.log(`Duplicate removed: ${tempId}`);
                } else {
                    seen.add(tempId);
                    outputLines.push(...buffer);
                }
            } else {
                // No ID found? Keep it to be safe (or drop?)
                outputLines.push(...buffer);
            }
            buffer = []; // Clear buffer
            tempId = null;
        }
    }

    fs.writeFileSync(filePath, outputLines.join('\n'), 'utf8');
    console.log(`Cleaned ${file}: ${seen.size} unique creatures.`);
});
