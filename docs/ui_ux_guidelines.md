# UI/UX Design Guidelines: Sensory Satisfaction
>
> **Project**: Multiverse Creature Lab
> **Core Philosophy**: "감각적 만족 (Sensory Satisfaction)" & "성인 타겟 인터랙션 (Adult-Oriented Interaction)"

---

## 1. Core Philosophy (핵심 철학)

본 프로젝트의 UI/UX는 단순한 정보 전달을 넘어, **사용자의 시각/청각/촉각적 욕망을 충족시키는 것**을 최우선 목표로 한다.
모든 인터랙션은 즉각적이고 관능적인 피드백을 동반해야 한다.

### 1-1. Sensory Feedback (감각 피드백)

* **Touch**: 버튼, 캐릭터, 아이템 터치 시 단순한 눌림 효과가 아닌, `Elastic`하고 `Fluid`한 반응을 제공한다.
* **Visual**: 유리(Glass), 네온(Neon), 글리치(Glitch) 효과를 사용하여 미래적이면서도 몽환적인 분위기를 연출한다.
* **Flow**: 화면 전환은 딱딱하지 않게, 물 흐르듯(Smooth Transition) 연결되어야 한다.

### 1-2. Adult-Oriented Aesthetic (성인 지향 미학)

* **Focus**: UI는 캐릭터의 매력을 가리지 않도록 **Minimal & Transparent**하게 설계한다.
* **Emphasis**: 캐릭터의 특정 부위(머리, 가슴, 다리 등)에 대한 시선을 유도하거나 강조하는 연출을 적극 활용한다.
* **Secret Mode**: 특정 조건(호감도, 등급) 달성 시 해금되는 **시크릿 모드** UI는 붉은색/보라색 톤의 전용 테마를 적용한다.

---

## 2. Interaction Rules (인터랙션 규칙)

### 2-1. Main Lobby (메인 로비)

* **Live Layout**: UI 패널은 좌측/하단에 배치하고, 우측/중앙은 캐릭터의 전신(Full Body)을 온전히 보여준다.
* **Touch Response**:
  * **Head**: 부드러운 흔들림 + 친근/부끄럼 대사.
  * **Chest**: 탄력적인(Bouncing) 모션 + 당황/매혹 대사. (물리 엔진/CSS 애니메이션 적극 활용)
  * **Legs**: 미세한 떨림 + 경계/복종 대사.
* **Idle Motion**: 사용자가 조작하지 않을 때도 캐릭터는 숨쉬기(Breathing), 머리카락 날림 등의 미세 동작을 계속 수행해야 한다.

### 2-2. Summoning (소환 연출)

* **Anticipation**: 소환 버튼 클릭 시 즉시 결과를 보여주지 않는다. 화면 암전 -> 심장 박동 소리 -> 글리치 효과 순으로 긴장감을 고조시킨다.
* **Climax**:
  * **SSR**: 붉은색 경고등 + 화면 깨짐(Glass Shatter) 효과.
  * **UR**: 황금색 오라 + 우주적 배경 확장(Cosmic Expansion).
* **Reveal**: 캐릭터 등장 시 **발 -> 가슴 -> 얼굴** 순서로 카메라가 패닝(Panning)하며 등장하거나, 실루엣이 벗겨지는 연출을 사용한다.

---

## 3. Visual System (비주얼 시스템)

### 3-1. Color Palette

| Role | Color | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Cyber Cyan | `#00f3ff` | 일반 버튼, 강조 텍스트, 테두리 |
| **Danger/SSR** | Fatal Red | `#e74c3c` | 경고, SSR 등급, 공격적 요소 |
| **Luxury/UR** | Royal Gold | `#f1c40f` | UR 등급, 프리미엄 재화, VIP |
| **Magic/Secret**| Mystic Purple| `#ab47bc` | 시크릿 모드, 마법, 정신 계열 |
| **Background** | Deep Void | `#050510` | 기본 배경 (캐릭터 부각을 위해 어두움) |

### 3-2. Typography

* **Main Font**: 'Orbitron' (영문), 'Noto Sans KR' (국문)
* **Style**: 헤드라인에는 `Text Shadow`와 `Glow` 효과를 적용하여 네온 사인 느낌을 준다.

### 3-3. Components

* **Glassmorphism**: 모든 패널은 불투명도 70~90%의 검은 유리 질감(`backdrop-filter: blur(10px)`)을 사용한다.
* **Borders**: 1px 두께의 얇은 선을 사용하되, 모서리(Corner)에만 강조점을 찍는 `Bracket` 스타일을 선호한다.

---

## 4. Implementation Checklist (구현 체크리스트)

(개발 시 본 항목을 준수했는지 확인한다)

* [x] 버튼 클릭 시 Ripple Effect 또는 Scale 애니메이션이 있는가?
* [x] 중요한 보상 획득 시 전체 화면 오버레이(Overlay)가 뜨는가?
* [x] 캐릭터 터치 시 부위별로 다른 반응(Animation & Sound)을 하는가?
* [x] 텍스트 가독성을 해치지 않으면서 배경(캐릭터)이 잘 보이는가?
