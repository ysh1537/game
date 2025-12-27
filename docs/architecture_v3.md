# Architecture V3: Advanced Creature System

## 1. Overview
The **V3 Architecture** transforms the game from a simple clicker into a rich **Collection RPG**. It introduces a Data-Driven design where `CreatureManager` and `AffinityManager` drive core gameplay loop, supported by a V5 Asset Schema.

## 2. Core Systems

### 2.1 Game Loop (`js/core/Game.js`)
- Central hub initializing all Managers.
- Manages global `Save/Load` state via `SaveManager`.
- Ticks `BattleManager` for auto-combat.

### 2.2 Creature Manager (`js/managers/CreatureManager.js`)
- **Lifecycle:** Manages Summoning, Training, Evolution, and Composition.
- **Data Source:** Wraps `js/data/CreatureData.js`.
- **Key Logic:**
  - `tryTrain(type)`: Dynamic cost calculation based on `LevelData.js`.
  - `tryEvolve()`: Checks conditions (Level, Star, Affinity) and mutates `dataId`.
  - `autoCompose()`: Batch processes duplicate units into higher Star ranks.

### 2.3 Affinity Manager (`js/managers/AffinityManager.js`)
- **Purpose:** Tracks emotional bond with each creature instance.
- **Levels:**
  - **Lv1 (100pt):** Interest (Gallery Lv1 Unlock)
  - **Lv2 (500pt):** Trust (Gallery Lv2 Unlock)
  - **Lv3 (1500pt):** Love (Gallery Lv3 Unlock)
  - **Lv4 (5000pt):** Oath 💍 (Endgame Status)
- **Interaction:** Handles `TOUCH`, `GIFT` events and cooldowns.

### 2.4 Battle Manager (`js/managers/BattleManager.js`)
- **Synergy System:**
  - `calculateSynergies()`: Scans team for `relationships` defined in Data V5.
  - Applies stats buffs (Atk+ for Lovers, Crit+ for Rivals).
- **Visuals:** Uses `V5 Sprite Schema` for Victory/Defeat poses and Skill Cut-ins.

## 3. Data Schema (V5)

The `CreatureDefinition` object has been expanded:

```javascript
{
    id: "fenrir",
    name: "Fenrir",
    rarity: "UR",
    image: "images/fenrir_idle.png",
    
    // [V5] Rich Sprites
    sprites: {
        idle: "...",
        choice: "...", 
        victory: "...", // Used in Battle Win / Premium Summon
        defeat: "...",
        skill: "...",
        gallery: {      // Progressive Reveals
            lv1: "...",
            lv2: "...",
            lv3: "..."  // "Secret" Image
        }
    },
    
    // [V5] Living Lore
    lore: {
        story: "...",
        personality: "Cold but loyal",
        relationships: [
            { id: "odin", type: "rival" }
        ]
    },
    
    // [V5] Interactive Lines
    touchLines: {
        interaction: ["Don't touch me there...", "Fine, just for a moment."],
        special: ["I pledge my eternal soul to you."]
    }
}
```

## 4. Economy & Balance

### 4.1 Progression Curve (`js/data/LevelData.js`)
- **Cost Formula:** `Cost = Base * 1.1^(Level-1)`
- **Reward Formula:** `Gold = 50 * 1.05^(Stage)`
- **Design Intent:** Exponential growth prevents runaway inflation while rewarding higher stage clears.

### 4.2 Gacha Rates
- **Normal Summon:** Gold based. Rates: N(80%), U(15%), R(5%).
- **Premium Summon:** Gem based. Rates: R(50%), SR(30%), SSR(15%), UR(5%).

## 5. UI System

### 5.1 CreatureView (`js/ui/CreatureView.js`)
- **Dynamic Render:** Uses `DocumentFragment` for performance.
- **Affection Gauge:** Linear gradient bar with Lv4 Oath distinct styling.
- **Gallery Modal:** Unlock-based grid view with blur filters for locked content.

### 5.2 SummonView (`js/ui/SummonView.js`)
- **Cinematic:** Prioritizes `gallery.lv3` or `victory` sprites for UR/SSR reveals to maximize emotional impact.
