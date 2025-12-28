
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dataDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../js/data/creatures');
const filePath = path.join(dataDir, 'ShangriLaData.js');

// Read File
let content = fs.readFileSync(filePath, 'utf-8');

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
        const idMatch = line.match(/^\s*id:\s*["']([^"']+)["']/);
        if (idMatch) currentId = idMatch[1];

        // Check for end of block
        if (line.trim().startsWith('}') && (line.trim().endsWith(',') || line.trim() === '}')) {

            if (currentId) {
                if (seenIds.has(currentId)) {
                    console.log(`Removing duplicate ${currentId} in ShangriLaData.js`);
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
fs.writeFileSync(filePath, finalContent);
console.log('Cleaned ShangriLaData.js');
