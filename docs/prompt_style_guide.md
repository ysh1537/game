# 🎨 Creature Art Prompt & Style Guide v1.0

This document defines the standard prompts and style rules for generating high-quality creature assets, ensuring consistency across ranks and variations (Expressions, Skill Cuts).

---

## 1. Core Style Pills (All Prompts Must Include)
> `anime style, cell shaded, high quality, 2d game art, fantasy, transparent background, full body`

- **Negative Prompts**: `3d, realistic, photorealistic, low quality, pixelated, cropped, text, watermark, signature`

---

## 2. Rank-Based Quality Tiers
Append these keywords based on the creature's rarity:

| Rank | Keywords | Visual Focus |
| :--- | :--- | :--- |
| **Normal** | `simple design, clean lines, flat colors` | Basic monster, minion look |
| **Rare/Unique** | `detailed, dynamic pose, vibrant colors` | Distinct features, established power |
| **SR (Legendary)** | `masterpiece, intricate details, glowing effects, magical aura` | Heroic presence, elaborate armor/fur |
| **SSR/UR (Mythic)** | `godlike, cinematic lighting, divine aura, particle effects, overwhelming presence` | Screen-filling majesty, visual feast |

---

## 3. Variation Prompts (SR+ Only)
For high-ranking creatures (SR+), generate multiple sprites using the **same seed** referencing the base design.

### A. **Base (Default/Idle)**
- **Prompt**: `[Character Description], standing pose, neutral expression, confident stance`
- **Use**: Main card art, inventory, lobby default.

### B. **Joy (Touch/Affection)**
- **Prompt**: `[Character Description], smiling, happy, eyes closed in delight, blushing, soft atmosphere, hand on cheek or waving`
- **Use**: High affection interaction, gift receipt.

### C. **Sadness (Defeat/Low HP)**
- **Prompt**: `[Character Description], sad expression, looking down, tears, injured, clothes slightly torn, dark atmosphere`
- **Use**: Battle defeat, low health warning.

### D. **Anger (Battle Start/Attack)**
- **Prompt**: `[Character Description], angry, shouting, fierce eyes, glowing eyes, battle stance, weapon drawn, aggressive energy`
- **Use**: Battle skill activation, crit animation.

### E. **Skill Cut-in (Cinematic)**
- **Prompt**: `[Character Description], extreme dynamic angle, close up face, unleashing ultimate power, motion blur, intense lighting backlight, cinematic composition`
- **Use**: Special skill activation overlay.

---

## 4. Prompt Template Construction

```text
(Core Style) + (Rank Keywords) + (Character Description) + (Variation Keywords) 
```

### Example: Fenrir (SSR) - Anger Variation
> **anime style, cell shaded, 2d game art, masterpiece, intricate details, divine aura**, 
> **giant mythic wolf with black fur and glowing blue runes, chains broken around neck**, 
> **angry, fierce glowing red eyes, roaring, showing fangs, aggressive battle stance, dark energy swirling**

---

## 5. Lore & Dialogue Expansion Guidelines
When defining a creature, ensure these fields are filled for immersion:

- **Lore**: 3-4 sentences describing origin, personality, and power source.
- **Relationships**: 1-2 other creatures they like/dislike (e.g., Fenrir hates Odin).
- **Touch Lines**:
    - `Normal`: Casual greeting.
    - `Happy`: Reaction to gifts/petting.
    - `Upset`: Reaction to annoyance/failure.

---

## 6. Implementation Schema (Draft)

```javascript
{
    id: "wolf_fenrir",
    // ... basic stats ...
    sprites: {
        idle: "images/wolf_fenrir_idle.png",   // Default
        joy: "images/wolf_fenrir_joy.png",     // Optional (SR+)
        sad: "images/wolf_fenrir_sad.png",     // Optional (SR+)
        angry: "images/wolf_fenrir_angry.png", // Optional (SR+)
        skill: "images/wolf_fenrir_skill.png"  // Optional (SSR+)
    },
    // ...
}
```
