
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../js/data/creatures');
const QUEUE_FILE = path.join(__dirname, '../docs/generation_queue.json');

// Rank Mapping
const RANK_ORDER = {
    "Normal": 1, "Unique": 2, "Rare": 3, "Special": 4, "SR": 5, "SSR": 6, "UR": 7,
    "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7
};

// Config
const HIGH_RANK_THRESHOLD = 5; // SR or higher
const HIGH_RANK_VARIANTS = ['idle', 'joy', 'sad', 'angry', 'skill', 'victory', 'defeat', 'gallery_lv1', 'gallery_lv2', 'gallery_lv3'];
const LOW_RANK_VARIANTS = ['idle'];

// Style Guide Injection
const STYLE_PREFIX = "(Master Style: anime style, cell shaded, 2d game art, full body, young and attractive, detailed, no text, no ui) ";
const NEGATIVE_PROMPT = " --neg text, ui, watermark, old, ugly, realistic, 3d, western comic";
// Note: our tool doesn't support --neg syntax directly in prompt usually, but we include it for context if the tool supports it, 
// OR we just ensure the positive prompt is strong. 
// The user prompt in `generate_image` usually just takes the positive prompt.
// We will bake the constraints into the positive prompt as much as possible.

async function generateQueue() {
    console.log("Preparing Generation Queue...");
    const queue = [];

    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('Data.js'));

    for (const file of files) {
        try {
            const modulePath = `file://${path.join(DATA_DIR, file)}`;
            const module = await import(modulePath);
            const key = Object.keys(module)[0];
            const creatures = module[key];

            if (!Array.isArray(creatures)) continue;

            const world = file.replace('Data.js', '');

            for (const c of creatures) {
                const rVal = c.rarity.value || c.rarity;
                const rank = RANK_ORDER[rVal] || 1;
                const variants = (rank >= HIGH_RANK_THRESHOLD) ? HIGH_RANK_VARIANTS : LOW_RANK_VARIANTS;

                for (const variant of variants) {
                    // 1. Check if exists (Skip if exists)
                    // We assume organize_images.js has run and files are in images/creatures/{world}/
                    // ... (Skipping strict file check for speed, relying on audit logic)
                    // Actually, we should skip existing to make the queue useful.

                    /* Simple existence check logic from audit */
                    let exists = false;
                    const folder = c.world ? c.world.toLowerCase() : 'unknown';
                    const pathBase = path.join(__dirname, `../images/creatures/${folder}`);

                    const candidates = [
                        `${c.id}.png`, `creature_${c.id}.png`,
                        `${c.id}_${variant}.png`, `creature_${c.id}_${variant}.png`
                    ];
                    if (variant === 'idle') {
                        // idle has special "base" names
                    } else {
                        // variants
                    }

                    // Simplified: just check if ANY matching file exists
                    // Refined logic:
                    if (variant === 'idle') {
                        if (fs.existsSync(path.join(pathBase, `${c.id}.png`)) ||
                            fs.existsSync(path.join(pathBase, `creature_${c.id}.png`))) exists = true;
                    } else {
                        if (fs.existsSync(path.join(pathBase, `${c.id}_${variant}.png`)) ||
                            fs.existsSync(path.join(pathBase, `creature_${c.id}_${variant}.png`))) exists = true;
                    }

                    if (exists) continue;

                    // 2. Build Prompt
                    // Access prompts from creature data
                    let specificPrompt = "";

                    if (c.prompts) {
                        if (variant === 'idle') specificPrompt = c.prompts.base || c.prompts.idle || "";
                        else specificPrompt = c.prompts[variant] || "";
                    }

                    // Fallback if missing specific prompt
                    if (!specificPrompt && variant !== 'idle') {
                        // Construct generic prompt
                        specificPrompt = `${variant} pose, ${c.name}, ${c.prompts?.base || ''}`;
                    }

                    if (!specificPrompt) specificPrompt = `${c.name}, ${c.world} creature`;

                    // Final Prompt Construction
                    const finalPrompt = `${STYLE_PREFIX} ${specificPrompt}, ${c.elements ? c.elements.join(', ') : ''} element`;

                    queue.push({
                        id: c.id,
                        name: c.name,
                        variant: variant,
                        rank: rank,
                        world: world,
                        prompt: finalPrompt
                    });
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2));
    console.log(`Queue generated with ${queue.length} items.`);
}

generateQueue();
