# 🎮 멀티버스 크리처 랩 - 패치노트

---

## v0.4.0 (2024-12-26) - 크리처 이미지 대규모 생성

### ✨ 신규 콘텐츠

#### 🎨 신규 이미지 (50개 생성)

**올림푸스 월드 (26개)** ✅ 완료
- `god_hades`, `god_dionysus`, `hero_hercules`, `medusa_cursed`, `harpy_queen`
- `siren_singer`, `pegasus_colt`, `satyr_young`, `dryad_seed`, `cyclops_worker`
- `nymph_water`, `cerberus_pup`, `hellhound_scout`, `automaton_mini`, `griffin_chick`
- `minotaur_calf`, `gorgon_sister_e`, `gorgon_sister_s`, `charybdis_baby`, `scylla_pup`
- `talos_fragment`, `fury_hiss`, `muse_lyra`, `chimera_cub`, `sphinx_kitten`, `phoenix_chick_o`

**아스가르드 월드 (26개)** ✅ 완료
- `god_loki`, `god_freya`, `god_hel`, `giant_fire_surtr`, `snake_world_jormungandr`
- `valkyrie_leader_gunnr`, `sleipnir_foal`, `huginn_crow`, `muninn_crow`, `wolf_pup_asgard`
- `dwarf_apprentice`, `troll_baby`, `ice_spirit_small`, `viking_youth`, `valkyrie_recruit`
- `einherjar_ghost`, `goat_lightning`, `ratatoskr_squirrel`, `nidhogg_spawn`, `elk_golden`
- `yggdrasil_guardian`, `mimir_spirit`, `frost_giant_warrior`, `fire_giant_scout`
- `shieldmaiden_iron`, `beserker_bear`, `ulfhednar_wolf`, `nordic_cat_freya`
- `draugr_remnant`, `bifrost_wisp`, `heimdall_horn_spirit`

**기타 월드**
- 심연: `god_shub`
- 상그릴라: `hero_wukong`

### 📋 스타일 가이드
- 블루아카이브 + 니케 스타일의 일본 애니메이션풍 2D 전신 일러스트
- 등급별 디테일/이펙트 차등 적용

---

## v0.3.0 (2024-12-24) - 크리처 스토리 & 이미지 대규모 업데이트

### ✨ 신규 콘텐츠

#### 📖 Lore 시스템 추가

- **크리처 스토리**: 8개 크리처에 배경 스토리, 관계, 시너지 정보 추가
  - UR: 제우스, 크로노스, 오딘
  - SSR: 미카엘, 펜리르
  - SR: 아틀라스, 발키리, 거인
- **관계 시스템**: 크리처 간 ally/rival/family 관계 정의
- **전투 시너지**: 특정 크리처 조합 시 보너스 효과 데이터 추가

#### 🎨 신규 이미지

- **오딘** - UR급 (북유럽 최고신)
- **발키리** - SR급 (전장의 깃발 브륀힐트)
- **잉크 정령** - Special급
- **눈 정령** - Special급
- **구름 솜사탕** - Normal급
- **고대 엔트** - Special급

### 🔧 개선 사항

#### UI/UX

- **카드 이미지 표시 개선**: `object-position: top` 적용으로 세로 카드에서 크리처 상반신이 잘 보이도록 수정
- 적용 파일: SummonView, SummonScene, ExpeditionView, style_v4.css

#### 이미지 정리

- 6개 파일명 정리 (`_new` 접미사 제거)
- 마스터 스타일 가이드에 검증된 프롬프트 템플릿 추가

---

## v0.2.0 (2024-12-22) - 탐사 시스템 3단계 개편

### ✨ 신규 콘텐츠

- 탐사 이벤트 다양화 (발견, 전투, 함정, 보물, 보스)
- 탐사 로그 히스토리 시스템
- 젬 보상 추가

### 🔧 개선 사항

- 탐사 결과 모달 UI 개선
- 이벤트 타입별 색상 및 아이콘

---

## v0.1.0 (2024-12-18) - 초기 릴리스

### 핵심 기능

- 소환 시스템 (일반/프리미엄)
- 크리처 수집 및 성장
- 탐사 시스템
- 연구 시스템
- 전투 시스템
- 상점 시스템
