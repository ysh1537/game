
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dataDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../js/data/creatures');
const abyssPath = path.join(dataDir, 'AbyssData.js');

// Load IDs from other worlds - strictly speaking not needed if only internal duplicates, but safer.
const otherWorlds = ['AsgardData.js', 'OlympusData.js', 'WildData.js', 'ShangriLaData.js'];
const forbiddenIds = new Set();
// Actually let's NOT forbid other worlds for now, just internal duplicates logic.
// The main issue in Abyss was duplicated IDs within itself.
// But if it has Wild creatures... let's check.
// The bad section seems to just copy Abyss creatures but with "Unknown" lore.

// Read AbyssData
let content = fs.readFileSync(abyssPath, 'utf-8');

const lines = content.split('\n');
const newLines = [];
let insideCreature = false;
let currentBlock = [];
let currentId = null;
let keepBlock = true;
let seenIds = new Set();

// Header lines
let headerLines = [];
let footerLines = [];
let inHeader = true;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

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
        // Robust ID matching for weird indentation
        const idMatch = line.match(/^\s*id:\s*["']([^"']+)["']/);
        if (idMatch) currentId = idMatch[1];

        // Check for end of block
        // The weird formatting seems to end with }, or },?
        // Standard block ends with },
        if (line.trim().startsWith('}') && (line.trim().endsWith(',') || line.trim() === '}')) {

            if (currentId) {
                if (seenIds.has(currentId)) {
                    console.log(`Removing duplicate ${currentId} in AbyssData.js`);
                    keepBlock = false;
                } else {
                    seenIds.add(currentId);
                }
            }

            if (keepBlock) {
                newLines.push(...currentBlock);
            }

            insideCreature = false;
            currentBlock = [];
            currentId = null;
            keepBlock = true;
        }
    } else {
        if (line.trim().startsWith('{')) {
            insideCreature = true;
            currentBlock.push(line);
        } else if (line.trim() === '];') {
            footerLines.push(line);
        }
    }
}

const finalContent = headerLines.join('\n') + '\n' + newLines.join('\n') + '\n' + footerLines.join('\n');
fs.writeFileSync(abyssPath, finalContent);
console.log('Cleaned AbyssData.js');
