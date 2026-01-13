# 🕵️‍♂️ Full Asset & Creature Audit Report

**Date**: 2026-01-13T02:31:45.060Z
**Scope**: All *Data.js vs images/creatures/*

## 📊 Executive Summary
| Metric | Count | Status |
| :--- | :---: | :--- |
| Total Code References | **1333** | -
| Actual Files Found | **861** | -
| ❌ **Missing Assets** | **916** | Requires Generation
| 🗑️ **Orphaned Files** | **436** | Candidates for Deletion/Cleanup
| ⚠️ **Naming Violations** | **0** | "god_" prefix detected in code

## 🚨 Critical: Missing Assets (Code references file, but file nonexistent)
> These files are requested by the code but do NOT exist on disk.

- **[Asgard : 미의 여신 프레이야 (thor)]** `images/creatures/asgard/creature_thor_sad.png`
- **[Asgard : 미의 여신 프레이야 (thor)]** `images/creatures/asgard/creature_thor_angry.png`
- **[Asgard : 교활한 신 로키 (loki)]** `images/creatures/asgard/creature_loki_sad.png`
- **[Asgard : 교활한 신 로키 (loki)]** `images/creatures/asgard/creature_loki_angry.png`
- **[Asgard : 여신 프레이야 (freya)]** `images/creatures/asgard/creature_freya_victory.png`
- **[Asgard : 여신 프레이야 (freya)]** `images/creatures/asgard/creature_freya_defeat.png`
- **[Asgard : 여신 프레이야 (freya)]** `images/creatures/asgard/creature_freya_gallery_lv1.png`
- **[Asgard : 여신 프레이야 (freya)]** `images/creatures/asgard/creature_freya_gallery_lv2.png`
- **[Asgard : 여신 프레이야 (freya)]** `images/creatures/asgard/creature_freya_gallery_lv3.png`
- **[Wild : 다이어 울프 (wolf_dire)]** `images/creatures/wild/creature_wolf_dire_joy.png`
- **[Wild : 다이어 울프 (wolf_dire)]** `images/creatures/wild/creature_wolf_dire_sad.png`
- **[Wild : 다이어 울프 (wolf_dire)]** `images/creatures/wild/creature_wolf_dire_angry.png`
- **[Wild : 다이어 울프 (wolf_dire)]** `images/creatures/wild/creature_wolf_dire_skill.png`
- **[Wild : 다이어 울프 (wolf_dire)]** `images/creatures/wild/creature_wolf_dire_victory.png`
- **[Wild : 다이어 울프 (wolf_dire)]** `images/creatures/wild/creature_wolf_dire_defeat.png`
- **[Wild : 다이어 울프 (wolf_dire)]** `images/creatures/wild/creature_wolf_dire_gallery_lv1.png`
- **[Wild : 진흙 골렘 (golem_mud)]** `images/creatures/wild/creature_golem_mud_joy.png`
- **[Wild : 진흙 골렘 (golem_mud)]** `images/creatures/wild/creature_golem_mud_sad.png`
- **[Wild : 진흙 골렘 (golem_mud)]** `images/creatures/wild/creature_golem_mud_angry.png`
- **[Wild : 진흙 골렘 (golem_mud)]** `images/creatures/wild/creature_golem_mud_skill.png`
- **[Wild : 진흙 골렘 (golem_mud)]** `images/creatures/wild/creature_golem_mud_victory.png`
- **[Wild : 진흙 골렘 (golem_mud)]** `images/creatures/wild/creature_golem_mud_defeat.png`
- **[Wild : 진흙 골렘 (golem_mud)]** `images/creatures/wild/creature_golem_mud_gallery_lv1.png`
- **[Unknown]** `images/creatures/wild/creature_rat_brown_joy.png`
- **[Unknown]** `images/creatures/wild/creature_rat_brown_sad.png`
- **[Unknown]** `images/creatures/wild/creature_rat_brown_angry.png`
- **[Unknown]** `images/creatures/wild/creature_rat_brown_skill.png`
- **[Unknown]** `images/creatures/wild/creature_rat_brown_victory.png`
- **[Unknown]** `images/creatures/wild/creature_rat_brown_defeat.png`
- **[Unknown]** `images/creatures/wild/creature_rat_brown_gallery_lv1.png`
- **[Unknown]** `images/creatures/wild/creature_pebble_new_joy.png`
- **[Unknown]** `images/creatures/wild/creature_pebble_new_sad.png`
- **[Unknown]** `images/creatures/wild/creature_pebble_new_angry.png`
- **[Unknown]** `images/creatures/wild/creature_pebble_new_skill.png`
- **[Unknown]** `images/creatures/wild/creature_pebble_new_victory.png`
- **[Unknown]** `images/creatures/wild/creature_pebble_new_defeat.png`
- **[Unknown]** `images/creatures/wild/creature_pebble_new_gallery_lv1.png`
- **[Unknown]** `images/creatures/wild/creature_fossil_stone_joy.png`
- **[Unknown]** `images/creatures/wild/creature_fossil_stone_sad.png`
- **[Unknown]** `images/creatures/wild/creature_fossil_stone_angry.png`
- **[Unknown]** `images/creatures/wild/creature_fossil_stone_skill.png`
- **[Unknown]** `images/creatures/wild/creature_fossil_stone_victory.png`
- **[Unknown]** `images/creatures/wild/creature_fossil_stone_defeat.png`
- **[Unknown]** `images/creatures/wild/creature_fossil_stone_gallery_lv1.png`
- **[Unknown]** `images/creatures/wild/creature_mist_crawler_joy.png`
- **[Unknown]** `images/creatures/wild/creature_mist_crawler_sad.png`
- **[Unknown]** `images/creatures/wild/creature_mist_crawler_angry.png`
- **[Unknown]** `images/creatures/wild/creature_mist_crawler_skill.png`
- **[Unknown]** `images/creatures/wild/creature_mist_crawler_victory.png`
- **[Unknown]** `images/creatures/wild/creature_mist_crawler_defeat.png`
... and 866 more.

## ⚠️ Legacy Naming Violations (Code uses 'god_' prefix)
> ✅ No legacy nomenclature found.

## 🗑️ Orphaned Files (Files exist but NOT used in code)
> These files exist in the folder but are NOT referenced by any Data file. Potential garbage or renamed leftovers.

### 📂 images/creatures/abyss
- `abyss_leech_angry.png`
- `abyss_leech_joy.png`
- `abyss_leech_sad.png`
- `abyss_leech_skill.png`
- `abyss_mermaid_joy.png`
- `abyss_mermaid_sad.png`
- `creature_abyss_jellyfish_angry.png`
- `creature_abyss_jellyfish_joy.png`
- `creature_abyss_jellyfish_sad.png`
- `creature_abyss_jellyfish_skill.png`
- `creature_abyss_mermaid_angry.png`
- `creature_abyss_mermaid_joy.png`
- `creature_abyss_mermaid_sad.png`
- `creature_abyss_mermaid_skill.png`
- `creature_cthulhu_joy (1).png`
- `creature_cthulhu_skill (1).png`
- `creature_demon_king_1766992699053.png`
- `creature_demon_king_restored.png`
- `creature_dragon_chaos_joy (1).png`
- `creature_dragon_chaos_restored.png`
- ... (21 more)

### 📂 images/creatures/asgard
- `creature_beast_fenrir_joy.png`
- `creature_beast_fenrir_skill.png`
- `creature_beast_jormungandr_joy.png`
- `creature_beast_jormungandr_skill.png`
- `creature_freya_idle.png`
- `creature_frost_wyrm_angry.png`
- `creature_frost_wyrm_skill.png`
- `creature_giant_hill.png`
- `creature_goblin_scout_angry.png`
- `creature_goblin_scout_sad.png`
- `creature_goblin_scout_skill.png`
- `creature_god_hel_angry.png`
- `creature_god_hel_gallery_lv1.png`
- `creature_god_hel_gallery_lv2.png`
- `creature_god_hel_gallery_lv3.png`
- `creature_god_hel_joy.png`
- `creature_god_hel_sad.png`
- `creature_god_hel_skill.png`
- `creature_god_odin.png`
- `creature_god_odin_angry.png`
- ... (63 more)

### 📂 images/creatures/olympus
- `.png`
- `cerberus_pup_angry.png`
- `cerberus_pup_joy.png`
- `cerberus_pup_sad.png`
- `cerberus_pup_skill.png`
- `cloud_puff_angry.png`
- `cloud_puff_joy.png`
- `cloud_puff_sad.png`
- `cloud_puff_skill.png`
- `creature_archangel_michael_angry.png`
- `creature_archangel_michael_joy.png`
- `creature_archangel_michael_sad.png`
- `creature_archangel_michael_skill.png`
- `creature_atlas_idle.png`
- `creature_atlas_restored.png`
- `creature_behemoth.png`
- `creature_desert_scorpion.png`
- `creature_gaia_gallery_lv3_backup.png`
- `creature_gaia_olympus_angry.png`
- `creature_gaia_olympus_defeat.png`
- ... (33 more)

### 📂 images/creatures/shangrila
- `cherry_blossom_petal_angry.png`
- `cherry_blossom_petal_defeat.png`
- `cherry_blossom_petal_joy.png`
- `cherry_blossom_petal_sad.png`
- `cherry_blossom_petal_skill.png`
- `cherry_blossom_petal_victory.png`
- `creature_bahamut_idle.png`
- `creature_bamboo_spirit.png`
- `creature_bonsai_spirit_1767578481154.png`
- `creature_crane_sage_1767578461311.png`
- `creature_creature_mushroom_joy.png`
- `creature_creature_mushroom_sad.png`
- `creature_creature_mushroom_skill.png`
- `creature_dragon_ancient_joy (1).png`
- `creature_dragon_ancient_restored.png`
- `creature_dragon_ancient_skill (1).png`
- `creature_dragon_king_idle.png`
- `creature_fox_nine_tailed.png`
- `creature_fox_nine_ur.jpg`
- `creature_green_wisp.png`
- ... (44 more)

### 📂 images/creatures/wild
- `blue_slime_angry.png`
- `blue_slime_defeat.png`
- `blue_slime_joy.png`
- `blue_slime_sad.png`
- `blue_slime_skill.png`
- `blue_slime_victory.png`
- `creature_ancient_titan_angry.png`
- `creature_ancient_titan_joy.png`
- `creature_ancient_titan_sad.png`
- `creature_ancient_titan_skill.png`
- `creature_atlas_angry.png`
- `creature_atlas_joy.png`
- `creature_atlas_sad.png`
- `creature_atlas_skill.png`
- `creature_bahamut_angry.png`
- `creature_bahamut_joy.png`
- `creature_bahamut_sad.png`
- `creature_bahamut_skill.png`
- `creature_beast_ziz_gallery_lv1.png`
- `creature_boulder_beetle.png`
- ... (175 more)

