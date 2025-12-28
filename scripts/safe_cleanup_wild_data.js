
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dataDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../js/data/creatures');
const filePath = path.join(dataDir, 'WildData.js');

const forbiddenIds = new Set([
    'god_odin', 'valkyrie', 'god_zeus', 'titan_atlas', 'cloud_puff',
    'mage_flame', 'demon_king', 'void_emperor', 'giant_hill',
    'phoenix_eternal', 'eagle_iron', 'vampire_lord', 'ninja_shadow'
]);

let content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

const newLines = [];
let insideBlock = false;
let currentBlock = [];
let seenIds = new Set();
let inHeader = true;

for (let line of lines) {
    if (inHeader) {
        if (line.trim().startsWith('export const')) {
            newLines.push(line);
            continue;
        }
        if (line.trim().startsWith('[')) {
            newLines.push(line);
            inHeader = false;
            continue;
        }
        newLines.push(line);
        continue;
    }

    // Start of creature block (Indent 4 + {)
    if (line.match(/^\s{4}\{/)) {
        insideBlock = true;
        currentBlock = [line];
        continue;
    }

    if (insideBlock) {
        currentBlock.push(line);

        // End of creature block: Indent 4 + } + optional comma
        if (line.match(/^\s{4}\},?/)) {
            // Process block
            const blockContent = currentBlock.join('\n');
            const idMatch = blockContent.match(/id:\s*["']([^"']+)["']/);

            if (idMatch) {
                const id = idMatch[1];
                console.log(`Found ID: ${id}`);
                if (forbiddenIds.has(id)) {
                    console.log(`Removing Forbidden ID: ${id}`);
                } else if (seenIds.has(id)) {
                    console.log(`Removing Duplicate ID: ${id}`);
                } else {
                    seenIds.add(id);
                    newLines.push(...currentBlock);
                }
            } else {
                // Block without ID? keep it.
                newLines.push(...currentBlock);
            }
            insideBlock = false;
            currentBlock = [];
        }
    } else {
        // Outside block (lines between creatures)
        if (line.trim() === '];') {
            newLines.push(line);
        } else if (line.trim().startsWith('//')) {
            newLines.push(line);
        }
        // ignore repeated commas or empty lines between blocks if we reconstruct perfectly
        // But to be safe, if it's just comma or empty, ignore.
    }
}

fs.writeFileSync(filePath, newLines.join('\n'));
console.log('Cleaned WildData.js using indentation logic');
