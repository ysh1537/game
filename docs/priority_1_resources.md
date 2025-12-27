# 🚨 Priority 1 Resource List (Generation Queue)

**Date**: 2025. 12. 27.
**Objective**: Complete the visual and audio experience by filling in missing assets for the core game loop.

---

## 1. 🎵 Audio (BGM & SFX)
**Status**: Critical (Directory Empty / Files Missing)
**Action**: Generate or Source immediately.

- [ ] `bgm_lobby.mp3` (Calm, ethereal, mysterious)
- [ ] `bgm_battle.mp3` (Intense, orchestral, fast-paced)
- [ ] `bgm_boss.mp3` (Epic, choir, dramatic)
- [ ] `bgm_victory.mp3` (Short, triumphant fanfare)
- [ ] `bgm_defeat.mp3` (Short, melancholic)
- [ ] `sfx_click.mp3` (UI interaction)
- [ ] `sfx_summon.mp3` (Magical burst sound)

---

## 2. 🖼️ Backgrounds (Stage Biomes)
**Status**: Partial (5 Found, 5 Generic/Missing)
**Action**: Generate unique backgrounds/biomes for better immersion.

- [ ] `bg_nemean_forest.jpg` (Stage 1-10: Dense ancient forest, massive trees)
- [ ] `bg_erymanthian_wilds.jpg` (Stage 31-40: Snowy mountain foothills, rugged terrain)
- [ ] `bg_stymphalian_lake.jpg` (Stage 41-50: Murky lake, metallic feathers focus)
- [ ] `bg_garden_hesperides.jpg` (Stage 61-70: Golden sunset, magical garden, golden apples)
- [ ] `bg_underworld_entrance.jpg` (Stage 71-80: Dark rocky gate, river Styx mist)

*(Existing found: Lerna Swamp, Ceryneian Highlands, Cretan Labyrinth, Tartarus, Olympus)*

---

## 3. ⚔️ Battle Mobs & Bosses (Unique Assets)
**Status**: Placeholder Reused (Current implementation reuses existing creatures)
**Action**: Geneate dedicated enemy assets to distinguish from collectable creatures.

### Bosses (Currently using placeholders)
- [ ] `hind_golden.png` (Boss Stage 30) - Currently reusing *Unicorn*
- [ ] `boar_erymanthian.png` (Boss Stage 40) - Currently reusing *Ice Bear*
- [ ] `bird_stymphalian.png` (Boss Stage 50) - Currently reusing *Iron Eagle*
- [ ] `dragon_ladon.png` (Boss Stage 70) - Check if *Dragon Ancient* matches vision

### Mobs (Reused Assets)
- [ ] `automaton_gold.png` - Currently reusing *Skeleton Knight*
- [ ] `bull_mad.png` - Currently reusing *Mud Golem*
- [ ] `deer_horn.png` - Currently reusing *Unicorn*

---

## 4. 🐉 Collectable Creatures (High Priority)
**Refer to:** `docs/creature_asset_inventory.md` for full list.
**Summary**: ~169 Placeholders / 28 Missing.

### Top Priority (UR/SSR Missing)
- Check `creature_asset_inventory.md` > Priority 1 Section.
- **Key Missing Groups**:
    - **Olympus**: Gods (Zeus variants exist, need others)
    - **Abyss**: High ranking Void creatures
    - **Shanri-La**: Four Symbols (Blue Dragon, White Tiger... partially exist, need verify)

---

## 🔍 Verification Checklist (Post-Generation)
1. **File Naming**: Ensure filenames match exactly as listed in `StageData.js` or `Data` files.
2. **Format**:
    - Images: `.png` or `.jpg` (PNG preferred for transparency/creatures).
    - Audio: `.mp3` (WebAudio compatible).
3. **Paths**:
    - Images -> `D:\test\game\images\`
    - Audio -> `D:\test\game\audio\`
