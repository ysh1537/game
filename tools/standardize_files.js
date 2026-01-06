const fs = require('fs');
const path = require('path');

const DIRS = [
    'd:/test/multiverse-creature-lab/images/creatures/asgard',
    'd:/test/multiverse-creature-lab/images/creatures/shangrila',
    'd:/test/multiverse-creature-lab/images/creatures/wild',
    'd:/test/multiverse-creature-lab/images/creatures/abyss'
];

function standardizeFiles() {
    DIRS.forEach(dir => {
        if (!fs.existsSync(dir)) return;

        const files = fs.readdirSync(dir);
        files.forEach(file => {
            // Check for timestamp pattern: name_123456789.png
            const match = file.match(/^(.+)_\d{13}\.(png|jpg|jpeg)$/);
            if (match) {
                const canonicalName = match[1] + '.' + match[2];
                const oldPath = path.join(dir, file);
                const newPath = path.join(dir, canonicalName);

                if (!fs.existsSync(newPath)) {
                    console.log(`Renaming ${file} -> ${canonicalName}`);
                    fs.renameSync(oldPath, newPath);
                } else {
                    console.log(`Skipping ${file}, ${canonicalName} already exists.`);
                    // Optional: Delete the timestamped duplicate if canonical exists? 
                    // Let's keep it safe and just log for now.
                }
            }
        });
    });
}

standardizeFiles();
