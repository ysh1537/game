const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'js', 'data', 'creatures');
const files = ['OlympusData.js', 'AsgardData.js', 'AbyssData.js', 'ShangriLaData.js', 'WildData.js'];

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    const lines = content.split('\n');
    const newLines = [];

    let depth = 0; // 0: Top, 1: Inside Creature, 2+: Inside properties (lore, sprites, etc)
    let inArray = false;

    // Pattern to detect the bad lines we added
    const BAD_PATTERNS = [
        /skillId: "default_attack"/,
        /lore: { title: "미지의 존재"/, // Partial match
        /lines: { normal: "..." }/
    ];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Trim comments for syntax check? No, simple check.

        // Check Array Start
        if (line.includes('export const') && line.includes('=[')) {
            inArray = true;
            newLines.push(line);
            continue;
        }

        // Depth Tracking
        // Count { and }
        // Case 1: Start of creature object "    {" -> depth 0->1
        // Case 2: Start of property object "        lore: {" -> depth 1->2
        // Case 3: One-line object "{ ... }" -> depth unchanged

        const openBraces = (line.match(/\{/g) || []).length;
        const closeBraces = (line.match(/\}/g) || []).length;

        // Net change logic is risky if multiple on one line.
        // Assuming formatting is standard (one brace per line typically for blocks)

        // But invalid lines like `lines: { normal: "..." },` have both.
        // So they don't change depth.

        // Let's look at the bad patterns specifically.
        const isBadLine = BAD_PATTERNS.some(p => p.test(line));

        // The bad lines have depth change 0 (they are lines: {...} or one-line property).
        // EXCEPT `skillId: ...` has 0 braces.

        // We only calculate depth change for lines that are NOT bad lines? 
        // No, the bad lines are syntactically valid (except location).

        // Heuristic:
        // If we are at depth >= 2, and we see a bad line, DROP IT.
        // Why? Because our script shouldn't have put them inside `lore` (depth 2) or `sprites` (depth 2).
        // Valid `skillId` should be at depth 1.

        // Current Depth logic:
        // We process the line. Update depth based on its braces.
        // Wait, should we update depth BEFORE or AFTER deciding to keep line?
        // If the line opens a block, it is effectively "in" the outer block but starts inner.
        // If we are at depth 1, and see `lore: {`, we are entering depth 2.

        // Let's assume standard formatting indentation as hint?
        // 4 spaces = Depth 1 (Creature)
        // 8 spaces = Properties of Creature
        // 12 spaces = Properties of `lore`, `sprites`

        // The bad lines were inserted with 8 spaces indentation (by my previous script).
        // `        skillId: ...`
        // But if they are inside a `lore` block (which started at 8 spaces, so contents are 12 spaces),
        // they stand out or fit in syntax but break logic.

        // BUT `depth` logic is more robust than indentation.

        // Let's calc depth.
        // "    {" -> opens
        // "    }," -> closes
        // "        lore: {" -> opens
        // "        }," -> closes

        // If we encounter a bad line.
        // If `depth` > 1, IT IS BAD. DELETE.
        // If `depth` === 1, it MIGHT be bad if duplicate.
        //     But cleaning duplicates inside depth 1 is harder (need state).
        //     First pass: Delete all bad lines at depth > 1.

        // Refined Depth Logic:
        // Calculate net change of line.
        // If net change is positive (opening), we are currently at `depth`. New content is `depth+1`.

        // Actually, let's use a simpler state machine.
        // Ignore lines lines that have `{` AND `}` (one-liners).
        // Only count lines that typically open or close blocks.

        const hasOpen = line.includes('{') && !line.includes('}');
        const hasClose = line.includes('}') && !line.includes('{');
        // This covers `lines: { ... },` -> has both -> ignored.
        // Covers `header = [` -> ignored.
        // Covers `    {` -> hasOpen -> depth++
        // Covers `    },` -> hasClose -> depth--
        // Covers `        lore: {` -> hasOpen -> depth++

        if (isBadLine) {
            // Check current depth
            // If depth >= 2, drop.
            if (depth >= 1) { // Wait.
                // Creature start `{` makes depth 0->1.
                // Inside creature is depth 1.
                // Property start `lore: {` makes depth 1->2.
                // Inside lore is depth 2.

                // So if depth >= 2, we drop.
                if (depth >= 2) {
                    // console.log(`Dropped nested garbage in ${file}: ${line.trim()}`);
                    continue;
                }

                // If depth == 1, it's at root of creature.
                // We keep it for now? Or check for duplicates?
                // Let's rely on `fix_duplicates.js` or manual scan for root level duplicates.
                // But the `Unexpected token` error came from nested ones mostly.
            }
        }

        newLines.push(line);

        if (hasOpen) depth++;
        if (hasClose) depth--;
    }

    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    console.log(`Repaired nesting in ${file}`);
});
