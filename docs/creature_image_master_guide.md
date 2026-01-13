# 🎨 크리처 이미지 생성 마스터 가이드 (Consolidated SSOT)

> **프로젝트**: 멀티버스 크리처 랩
> **스타일**: 블루아카이브 + 니케 스타일 (2D Anime, Cel Shading, Glazing)
> **타겟**: 성인 서브컬처 (매력적이고 관능적인 캐릭터)
> **버전**: 3.0 (Consolidated)

---

# 🎨 Creature Image Master Guide (The Freya Standard)

> **[2026-01-13 Update]**
> 모든 크리처 에셋 제작은 **'프레이야 스탠다드(Freya Standard)'**를 따릅니다.
> 기존의 모호한 스타일 가이드는 폐기하며, **반드시 아래 원칙에 따라 제작**해야 합니다.

## 🏆 The Golden Rule: "Like Freya"

모든 이미지는 **[프레이야 Base]**의 화풍, 질감, 조명과 이질감이 없어야 합니다.

1. **화풍**: Soft Anime Illustration (NOT heavy impasto, NOT 3D)
2. **피부**: **Shiny & Sweaty** (매끄러운 윤기와 리얼한 땀방울)
3. **조명**: **Soft Bloom** (뽀샤시하고 몽환적인 빛)
4. **연출**: **Alluring Curves** (단순 노출이 아닌, 몸매의 굴곡과 탄력을 강조)

---

## 🏛️ 절대 헌장 (The Constitution of Art)

**모든 이미지 생성은 아래 규칙을 따른다. 예외는 없다.**

### 1. 스타일 (Style)

* **키워드**: `(masterpiece:1.5), (blue archive style:1.5), (nikke style:1.4), (cel shading:1.3)`
* **전신(Full Body)**: 발끝부터 정수리까지 잘림 없이 나와야 함.
* **여체화(Moe Anthropomorphism)**: 모든 신, 괴물, 동물은 **미소녀/성인 여성**으로 의인화. (남캐 금지)

### 2. 매력 포인트 (Appeal)

* **바디**: `huge breasts`, `thick thighs`, `wide hips`, `glossy skin`
* **얼굴**: `beautiful anime face`, `blushing`, `expressive eyes`
* **금지**: 실사(Realistic), 3D 렌더, 서양 카툰, 텍스트, UI, 기괴함, 노인.

### 3. 워크플로우 (Strict Workflow)

**위반 시 롤백 대상임.**

1. **검증 (Audit)**: 작업 전 `MISSING_ASSETS_REPORT.md` 또는 `deep_asset_audit.js` 확인.
2. **생성 (Generate)**: AI 생성 후 즉시 `images/temp/` 로 저장 (절대 실서버 경로 직저장 금지).
3. **리뷰 (Review)**: `walkthrough.md`에 등재하여 사용자 승인 요청.
4. **승인 (Approve)**: 사용자 승인 후 `images/creatures/[world]/`로 이동.
5. **적용 (Apply)**: `js/data/*.js`의 경로가 실제 파일과 일치하는지 최종 확인.

---

### 4. 파일 명명 규칙 (Naming Convention - 2026 Update)

**절대 규칙: `god_` 접두사 사용 금지.**

* **기본 구조**: `creature_[id]_[variation].png`
* **ID 규칙**:
  * `god_thor` (X) -> `thor` (O)
  * `god_zeus` (X) -> `zeus` (O)
  * `titan_kronos` (O) -> `titan` 접두사는 유지 (계급 구분이 아닌 종족명인 경우)
* **Variation 표준 (9-Set Standard)**:
    1. `base` (또는 `idle`): 기본 전신
    2. `joy`: 웃는 표정
    3. `sad`: 슬픈 표정
    4. `angry`: 화난 표정/전투 태세 (구 `battle`)
    5. `skill`: 스킬 컷신 (Cinematic)
    6. `victory`: 승리 포즈 (구 `clear`)
    7. `defeat`: 패배 포즈 (구 `fail`)
    8. `gallery_lv1`: 호감도 1단계
    9. `gallery_lv2`: 호감도 2단계
    10. `gallery_lv3`: 호감도 3단계 (성인 버전)

---

## 🎨 레퍼런스 아키타입 (Reference Archetypes)

### 🩸 Abyss (뱀파이어/심연)

* **Visuals**: 고딕 롤리타, 창백한 피부, 붉은 눈, 검은 안개.
* **Apply to**: 뱀파이어, 악마, 크툴루 계열.
* **Keywords**: `gothic lolita`, `pale skin`, `red aura`, `tentacles (hair)`

### 👼 Olympus/Asgard (천사/발키리)

* **Visuals**: 화이트/골드 갑옷, 날개, 성스러운 빛.
* **Apply to**: 제우스, 오딘, 발키리, 천사 계열.
* **Keywords**: `white armor`, `gold trim`, `angel wings`, `divine light`

### 🔥 Wild/Elements (자연/정령)

* **Visuals**: 원소 이펙트(불, 물, 풀), 노출도 높은 판타지 의상.
* **Apply to**: 드래곤, 이프리트, 정령왕.
* **Keywords**: `fire aura`, `water droplets`, `nature dress`, `floating elements`

### 🦊 Shangri-La (동양/요괴)

* **Visuals**: 한복/기모노/치파오 변형, 동물귀/꼬리.
* **Apply to**: 구미호, 손오공, 사신수.
* **Keywords**: `kimono`, `hanbok`, `animal ears`, `oriental patterns`

---

## 📝 프롬프트 뱅크 (Prompt Bank)

### Global Prompts

* **Positive**: `(masterpiece:1.5, best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4), full body, female, solo, (beautiful face:1.3), (thick thighs:1.4), (wide hips:1.4), (huge breasts:1.2)`
* **Negative**: `(western cartoon:1.5), (3d render:1.5), (realistic:1.5), lowres, bad anatomy, text, watermark, cropped, ugly face, old`

### 주요 캐릭터 프롬프트 (Verified)

#### 🐙 God Cthulhu (Abyss UR)
>
> `female cthulhu girl, green twin-tails hair resemble tentacles, gothic lolita dress, glowing green eyes, underwater ruins background, mysterious aura`

#### 🦅 Harpy Queen (Olympus SR)
>
> `female harpy queen, large feathered wings, aviator outfit, open jacket, tight hotpants, blue sky background`

#### 🐉 Cloud Serpent (Shangri-La SR)
>
> `female dragon girl, white oriental dress, scales, dragon horns, floating on clouds, white mist effects`

*(나머지 상세 프롬프트는 `js/data/*.js`의 `prompt` 필드 참조)*

---

## 5. 프롬프트 정규화 및 등급별 자산 규칙 (2026.01 Standard)

### A. 프롬프트 정규화 (Prompt Normalization)

캐릭터 일관성(Consistency) 유지를 위해 **[Core Prompt]**와 **[Variation]**을 물리적으로 분리하여 조합한다.

1. **Core Prompt Defined**: 캐릭터의 고정 외형(머리색, 눈동자, 옷, 체형, 귀/꼬리 등) 및 기본 Quality Tag.
    * *모든 바리에이션 생성 시 이 문장이 100% 동일하게 선행되어야 함.*
2. **Variation Added**: 해당 씬의 독자적인 동작, 표정, 배경 효과만 뒤에 추가.
    * *예: [Core Prompt], smiling, waving hand*

### B. 등급별 갤러리/이미지 구성 (Rank-based Composition)

| 등급 (Rank) | 구성 (Total Images) | 갤러리 (Gallery) | 비고 |
| :--- | :--- | :--- | :--- |
| **SSR / SR** | **10장** | **3장 (Lv1, Lv2, Lv3)** | 훅(Lv1), 데이트(Lv2), 침실(Lv3) 필수 |
| **Rare / Special** | **8장** | **1장 (Lv1 Only)** | 캐릭터성 강조 (Hook) |
| **Normal** | **8장** | **1장 (Lv1 Only)** | 단순/귀여움 강조 (Mob Style) |

* **Gallery Lv1 규칙**: `date sim event`, `no text`, `no ui` 필수.
* **Gallery Lv3 규칙 (SR 이상)**: `intimate`, `bed scene`, `ecstatic expression` 등 수위 묘사 포함 (Safety Filter 우회 필요 시 `intimate atmosphere` 등으로 순화).
