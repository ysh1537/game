
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../images');
const LEGACY_DIR = path.join(IMAGES_DIR, '_legacy');

async function cleanupImages() {
    console.log("Starting Image Cleanup...");

    if (!fs.existsSync(LEGACY_DIR)) fs.mkdirSync(LEGACY_DIR);

    const files = fs.readdirSync(IMAGES_DIR);
    let moveCount = 0;

    for (const file of files) {
        const fullPath = path.join(IMAGES_DIR, file);
        const stat = fs.statSync(fullPath);

        if (stat.isFile() && !file.startsWith('.')) {
            // Check extension
            if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
                const dest = path.join(LEGACY_DIR, file);
                fs.renameSync(fullPath, dest);
                console.log(`Archived: ${file}`);
                moveCount++;
            }
        }
    }

    console.log(`Cleanup Complete. Archived ${moveCount} files to _legacy/ .`);
}

cleanupImages();
