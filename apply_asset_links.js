
import fs from 'fs';
import path from 'path';

// Load map
const map = JSON.parse(fs.readFileSync('orphaned_assets_map.json', 'utf8'));

// Group by source file
const updates = {};
map.forEach(item => {
    const source = item.sourceFile;
    if (!updates[source]) updates[source] = [];
    updates[source].push(item);
});

for (const [sourcePath, items] of Object.entries(updates)) {
    // sourcePath is relative like ./js/data/creatures/AsgardData.js
    // We need absolute path for reading
    const absPath = path.resolve(sourcePath);
    console.log(`Processing ${absPath}...`);

    let content = fs.readFileSync(absPath, 'utf8');

    let updatedCount = 0;
    items.forEach(item => {
        // Regex to find the object definition for this ID and update image property
        // Pattern: id:\s*["']{item.id}["'][\s\S]*?image:\s*["']([^"']+)["']
        // Caution: this regex is tricky if 'image' comes before 'id' or far after.
        // Better approach: Regex for `id: "wolf_fenrir"` then find nearest `image: "..."`

        // Let's try string replacement key-based. 
        // We know the current value from the map item.current
        // item.current is "images/placeholder_asgard.png"
        // But multiple creatures might use the same placeholder.

        // Safer approach: replace exact block
        // Find: id: "god_hel" ... image: "images/placeholder.png"
        // We will read file, find index of `id: "${item.id}"`, then look ahead for `image:`

        const idRegex = new RegExp(`id:\\s*["']${item.id}["']`);
        const match = idRegex.exec(content);

        if (match) {
            const idIndex = match.index;
            // Look for 'image:' after this ID, but before the next 'id:' or end of object '}'
            const contentAfterId = content.slice(idIndex);
            const imageRegex = /image:\s*["']([^"']+)["']/;
            const imageMatch = imageRegex.exec(contentAfterId);

            if (imageMatch) {
                // Check if this image belongs to the current object (simple heuristic: distance)
                // If distance is too far (>500 chars), maybe it's next object?
                if (imageMatch.index < 500) {
                    const fullMatchString = imageMatch[0];
                    const currentVal = imageMatch[1];
                    const newVal = item.found; // "images/god_hel.png"

                    // Construct replacement
                    const replacement = `image: "${newVal}"`;

                    // We need to replace specifically THIS instance
                    // We splice the string
                    const absoluteStartIndex = idIndex + imageMatch.index;

                    const before = content.slice(0, absoluteStartIndex);
                    const after = content.slice(absoluteStartIndex + fullMatchString.length);

                    content = before + replacement + after;
                    updatedCount++;
                } else {
                    console.warn(`Skipping ${item.id}: image property too far (${imageMatch.index})`);
                }
            } else {
                console.warn(`Skipping ${item.id}: image property not found after id`);
            }
        } else {
            console.warn(`Skipping ${item.id}: ID not found in file`);
        }
    });

    if (updatedCount > 0) {
        fs.writeFileSync(absPath, content, 'utf8');
        console.log(`Updated ${updatedCount} items in ${sourcePath}`);
    }
}
