
import fs from 'fs';
import path from 'path';

const WORLDS = ['Asgard', 'Olympus', 'ShangriLa', 'Abyss', 'Wild'];

function repairFile(world) {
    const filePath = `./js/data/creatures/${world}Data.js`;
    const absPath = path.resolve(filePath);

    if (!fs.existsSync(absPath)) return;

    let content = fs.readFileSync(absPath, 'utf8');

    // Pattern: 
    // An object closing brace `    },` or `    }` 
    // Followed by new line
    // Followed by standard property indentation (8 spaces) and a key (e.g. `skillId:`, `lore:`)
    // We want to remove the `    },` or `    }` to merge the blocks.

    // Regex:
    // (\s*?)\}(\s*?[\r\n]+\s{4,}[a-zA-Z0-9_]+:)

    // We expect the script added `\n    }` (4 spaces indentation).
    // And the keys are indented by 8 spaces (or 4? usually 8 in array).

    // Let's match:
    // `    },\n        key:`

    const countBefore = content.split('},').length; // Rough metric

    // We iterate regex replacement until no changes, because there might be multiple (nested issues).
    // But primarily we look for the specific breakage where an object was closed early.

    // Breaking pattern from ViewFile:
    // 27:         },
    // 28:     },
    // 29:         skillId: "wolf_skill",

    // Line 28 has 4 spaces? `    },`
    // Line 29 has 8 spaces? `        skillId`

    const brokenPattern = /(\n\s{4}\},)(\s*[\r\n]+\s{8}[a-zA-Z0-9_]+:)/g;

    let newContent = content.replace(brokenPattern, (match, p1, p2) => {
        // p1 is "    },"
        // p2 is "\n        skillId:"
        // We want to Replace p1 with "," if the previous line didn't have one, or just empty if it did?
        // The script added `prompts: { ... }` (no comma?) 
        // `+ "\n    }"`
        // `prompts` block logic: `},` was added to `newFields`.
        // `prompts: { ... },\n    }`
        // So line 27 `},` is the prompt comma.
        // Line 28 `},` is the object closer.

        // We just delete p1. And ensure comma exists?
        // If line 27 has comma, we are good.
        return "," + p2;
    });

    // Also handle case where it stopped at `lore: { ... }`
    // The brace would be `        },` (8 spaces) if it was inside lore?
    // No, `idPattern` matches up to `}`.
    // If it caught `lore: { ... }`, the closing brace of lore is `        },`.
    // The script replaced it with `lore: { ... }, prompts: ... }`.
    // The indent of the LAST brace in replacement was `    }` (4 spaces) hardcoded.
    // So `    },` is likely the one.

    if (newContent !== content) {
        fs.writeFileSync(absPath, newContent, 'utf8');
        console.log(`Repaired ${world}Data.js`);
    } else {
        console.log(`No syntax errors found in ${world}Data.js`);
    }
}

WORLDS.forEach(repairFile);
