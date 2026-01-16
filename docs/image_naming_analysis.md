# 이미지 파일 명명 규칙 위반 분석 보고서

## 개요

`images` 폴더 내의 파일들을 분석하여 프로젝트 명명 규칙을 위반하거나 불필요해 보이는 파일("애매한 것들")을 식별했습니다. 이 파일들은 `images/_quarantine` 폴더로 격리될 예정입니다.

## 격리 대상 파일 목록 (총 15개)

### 중복/백업 의심 파일 (괄호 포함)

- `creatures\abyss\creature_cthulhu_joy (1).png`
- `creatures\abyss\creature_cthulhu_skill (1).png`
- `creatures\abyss\creature_shub_joy (1).png`
- `creatures\abyss\creature_shub_skill (1).png`
- `creatures\abyss\creature_void_emperor_joy (1).png`
- `creatures\abyss\creature_void_emperor_skill (1).png`
- `creatures\shangrila\creature_dragon_ancient_joy (1).png`
- `creatures\shangrila\creature_dragon_ancient_skill (1).png`

### 타임스탬프 포함 파일 (임시 파일 의심)

- `creatures\shangrila\creature_bonsai_spirit_1767578481154.png`
- `creatures\shangrila\creature_crane_sage_1767578461311.png`
- `creatures\shangrila\creature_heavenly_maiden_small_1767578527404.png`
- `creatures\shangrila\creature_lucky_cat_kuro_1767578510298.png`
- `creatures\shangrila\creature_statue_lion_dog_1767578544463.png`
- `creatures\wild\creature_griffin_gold_1767579100989.png`
- `images\icons\icon_skill_fire_1766992699091.png`

### 코드 미사용(Unused) 식별 파일

- **배경:** `bg_ceryneian_highlands.jpg`, `bg_cretan_labyrinth.jpg`, `bg_dungeon_01.png`, `bg_lerna_swamp.jpg`, `bg_mount_olympus.jpg`, `bg_tartarus_depths.jpg`
- **크리처:** `creature_odin_gallery_lv2_alt.png`, `creature_zeus_attack.jpg`
- **아이콘:** `icon_app.png`, `icon_energy.png`, `icon_gem.png`, `icon_gold.png`, `icon_role_defense.png`, `icon_role_heal.png` 및 `icon_skill_*` 시리즈

## 분석 의견

1. **명명 규칙 위반**: `(1).png` 등은 명백한 중복이므로 격리가 안전합니다.
2. **미사용 파일**: 검색 결과 코드가 참조하지 않는 파일들입니다. 특히 배경 이미지와 아이콘들이 다수 포함되어 있습니다. 격리 후 UI에서 누락된 이미지가 없는지 확인하겠습니다.
