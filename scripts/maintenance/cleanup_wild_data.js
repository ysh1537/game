
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dataDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../js/data/creatures');
const wildPath = path.join(dataDir, 'WildData.js');

// Load IDs from other worlds
const otherWorlds = ['AsgardData.js', 'OlympusData.js', 'AbyssData.js', 'ShangriLaData.js'];
const forbiddenIds = new Set();

otherWorlds.forEach(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
    const regex = /^\s+id:\s*["']([^"']+)["']/gm;
    let match;
    while ((match = regex.exec(content)) !== null) {
        forbiddenIds.add(match[1]);
    }
});

console.log(`Loaded ${forbiddenIds.size} forbidden IDs from other worlds.`);

// Read WildData
let wildContent = fs.readFileSync(wildPath, 'utf-8');

// We need to parse WildData entries. 
// Since it's a JS export, we can try to extract object blocks.
// A heuristic approach: Split by "    {" (indentation 4 spaces + brace)
// But formatting might vary. 
// Let's assume standard formatting (from my edits).
// The file starts with imports and `export const WILD_CREATURES = [`.
// Then objects.

// Regex to capture each object block. 
// This is tricky with nested braces.
// Alternative: Read line by line, track braces.

const lines = wildContent.split('\n');
const newLines = [];
let insideCreature = false;
let currentBlock = [];
let currentId = null;
let keepBlock = true;
let isUnknown = false;

// Header lines (imports, export const...)
let headerLines = [];
let footerLines = [];
let inHeader = true;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if start of creatures array
    if (inHeader) {
        if (line.trim().startsWith('{')) {
            inHeader = false;
            insideCreature = true;
            currentBlock.push(line);
        } else {
            headerLines.push(line);
        }
        continue;
    }

    if (insideCreature) {
        currentBlock.push(line);

        // Check for ID
        const idMatch = line.match(/^\s+id:\s*["']([^"']+)["']/);
        if (idMatch) currentId = idMatch[1];

        // Check for Unknown lore (heuristic for low quality auto-gen)
        if (line.includes('"personality": "Unknown"')) isUnknown = true;

        // Check for end of block
        if (line.trim().startsWith('}') && (line.trim().endsWith(',') || line.trim() === '}')) {
            // End of creature block

            // DECISION LOGIC:
            if (currentId) {
                if (forbiddenIds.has(currentId)) {
                    console.log(`Removing ${currentId} (Exists in other world)`);
                    keepBlock = false;
                } else if (forbiddenIds.has("WILD_" + currentId)) { // Self-duplicate check?
                    // No, forbiddenIds are from OTHER worlds only.
                } else {
                    // Check if we already have this ID in Wild (internal duplicate)
                    // We need to track seen Wild IDs.
                    if (forbiddenIds.has("SEEN_" + currentId)) {
                        console.log(`Removing ${currentId} (Duplicate within Wild) - Keeping previous version`);
                        keepBlock = false;
                    } else {
                        // Mark as seen
                        forbiddenIds.add("SEEN_" + currentId);

                        // If it's Unknown but we haven't seen it, we keep it? 
                        // Or we prefer "Known" ones? 
                        // The user said "remove duplicates".
                        // My manual edits (lines ~800) were added BEFORE the end-of-file junk.
                        // So the first occurrence is likely the good one.
                        // So this logic (keep first) works perfectly.
                    }
                }
            }

            if (keepBlock) {
                newLines.push(...currentBlock);
            }

            // Reset
            insideCreature = false;
            currentBlock = [];
            currentId = null;
            keepBlock = true;
            isUnknown = false;
        }
    } else {
        // Between blocks (likely comma or newline)
        if (line.trim().startsWith('{')) {
            insideCreature = true;
            currentBlock.push(line);
        } else if (line.trim() === '];') {
            footerLines.push(line);
        }
    }
}

// Reconstruct
const finalContent = headerLines.join('\n') + '\n' + newLines.join('\n') + '\n' + footerLines.join('\n');
fs.writeFileSync(wildPath, finalContent);
console.log('Cleaned WildData.js');

