const fs = require('fs');
const path = require('path');

const files = ['OlympusData.js', 'ShangriLaData.js', 'AbyssData.js'];
const dir = path.join(__dirname, '../js/data/creatures');

files.forEach(f => {
    const p = path.join(dir, f);
    if (fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');
        // Remove imports
        content = content.replace(/import .* from .*;/g, '');
        // Replace export const -> var
        content = content.replace(/export const/g, 'var');
        // Clean up empty lines at top if created
        content = content.trim();
        fs.writeFileSync(p, content, 'utf8');
        console.log(`Converted ${f}`);
    }
});
