
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

console.log(`Processing ${lines.length} lines...`);

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (inHeader) {
        newLines.push(line);
        if (line.includes('[')) {
            inHeader = false;
            console.log("Found Header End at line " + (i + 1));
        }
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
            // Find ID line
            const idLine = currentBlock.find(l => l.trim().startsWith('id:'));

            if (idLine) {
                const idMatch = idLine.match(/id:\s*["']([^"']+)["']/);
                if (idMatch) {
                    const id = idMatch[1];
                    // console.log(`Found ID: [${id}]`);

                    if (forbiddenIds.has(id)) {
                        console.log(`Removing Forbidden ID: ${id}`);
                    } else if (seenIds.has(id)) {
                        console.log(`Removing Duplicate ID: ${id}`);
                    } else {
                        seenIds.add(id);
                        newLines.push(...currentBlock);
                    }
                } else {
                    console.log(`Could not extract ID from line: ${idLine}`);
                    newLines.push(...currentBlock);
                }
            } else {
                console.log(`Block ending at ${i + 1} has no ID line.`);
                newLines.push(...currentBlock);
            }
            insideBlock = false;
            currentBlock = [];
        }
    } else {
        // Outside block
        if (line.trim() === '];') {
            newLines.push(line);
            console.log("Found Footer");
        } else if (line.trim().startsWith('//')) {
            newLines.push(line);
        } else if (line.trim() === '') {
            // ignore empty
        } else {
            // console.log("Dropping line: " + line);
        }
    }
}

fs.writeFileSync(filePath, newLines.join('\n'));
console.log(`Cleaned WildData.js. Total lines: ${newLines.length}`);
