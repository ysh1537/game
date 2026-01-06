# 🎨 Asset Generation Workflow & Style Guide

이 문서는 프로젝트의 모든 **이미지/애셋 생성**, **검수**, **적용**에 대한 **절대 규칙**과 **워크플로우**를 정의합니다.
모든 에이전트와 작업자는 이 가이드를 반드시 준수해야 합니다.

---

## 1. 🔄 이미지 생성 및 적용 프로세스 (Standard Workflow)

**절대 원칙**: "생성된 이미지는 **즉시 게임에 적용하지 않는다**."

### Step 1: 생성 (Generation)

- 사용자의 요청 또는 `missing_assets_report.md`에 따라 이미지를 생성한다.
- **파일명 규칙**: `creature_[영문이름]_[variant].png` (예: `creature_dragon_fire.png`)

### Step 2: 임시 저장 (Temporary Storage)

- 생성된 이미지는 **반드시** 아래 경로의 **임시 폴더**로 이동시킨다.
- **경로**: `d:\test\multiverse-creature-lab\temp_review\`
- *Folder가 없으면 생성할 것.*

### Step 3: 검수 요청 (Review Request)

- `walkthrough.md` 또는 아티팩트를 통해 생성된 이미지를 사용자에게 보여준다.
- **절대 경로(file:///)** 또는 **상대 경로**를 사용하여 뷰어에서 보이도록 한다.
- 예: "방금 생성한 이미지 3종을 `temp_review` 폴더에 넣었습니다. 확인해주세요."

### Step 4: 승인 및 적용 (Approval & Apply)

- 사용자의 **명시적 승인(OK, 굿, 적용해 등)**이 있을 때만 게임 폴더로 이동한다.
- **이동 경로**: `d:\test\multiverse-creature-lab\images\creatures\[world_name]\`
- 적용 후, 게임 내에서 잘 나오는지 확인한다.

---

## 2. 🖌️ 이미지 스타일 가이드 (Style Guidelines)

**핵심 키워드**: `Blue Archive`, `Nikke`, `Moe Anthropomorphism` (모에화), `All-Female`

### ✅ 필수 (Must Have)

1. **전신 샷 (Full Body)**: 머리부터 발끝까지 잘리지 않게.
2. **모에화 (Anthropomorphism)**:
    - 몬스터라도 반드시 **아름다운 여성(미소녀)** 형태여야 함. (할머니 X, 괴물 X)
    - 특징적 요소(뿔, 날개, 꼬리, 피부색 등)로 크리처임을 표현.
    - 예: "거북이" → 등껍질 방패를 멘 글래머 미소녀.
3. **화풍 (Art Style)**:
    - `(blue archive art style:1.4)`, `(nikke art style:1.3)`
    - 2D 셀 셰이딩, 선명한 라인, 밝고 채도 높은 색감.
    - 실사(Photorealistic) 또는 3D 렌더링 느낌 **절대 금지**.
4. **등급별 차별화**:
    - **SR/SSR**: 화려한 배경, 이펙트, 역동적 포즈, 많은 장식.
    - **Normal/Rare**: 깔끔하고 단정된 포즈, 심플한 배경.

### 🚫 금지 (Don't)

1. **텍스트/UI**: 이미지 안에 글자나 게임 UI가 포함되면 안 됨 (`(text, ui, signature:1.5)`).
2. **과도한 혐오/공포**: 좀비/언데드라도 "귀여운/고딕풍"으로 순화 (예: 강시 소녀, 붕대 감은 간호사). 절대 징그럽게 그리지 말 것.
3. **절단/고어**: 사지 절단 등 혐오스러운 표현 금지.

---

## 3. 📝 프롬프트 작성 요령

- **설명은 한글로**: 작업 계획(`implementation_plan.md`) 작성 시, 영어 프롬프트 옆에 **한글 컨셉 설명**을 반드시 적는다.
- **구조 예시**:

    ```markdown
    1. **화염 드래곤 (`creature_dragon_fire`)**
       - **컨셉**: 붉은 비늘 갑옷을 입은 여전사, 용 날개와 꼬리, 불타는 대검.
       - *Prompt*: (blue archive art style:1.3), female dragon knight, red scale armor, wings, fire sword...
    ```

---

## 4. 📂 폴더 구조 및 파일 관리

- **프로젝트 루트**: `d:\test\multiverse-creature-lab\`
- **리소스 폴더**:
  - `images/creatures/abyss/`: 심연 (Abyss)
  - `images/creatures/asgard/`: 아스가르드 (Asgard)
  - `images/creatures/olympus/`: 올림푸스 (Olympus)
  - `images/creatures/shangrila/`: 무릉도원 (ShangriLa)
  - `images/creatures/wild/`: 야생 (Wild)
- **임시 검수 폴더**: `temp_review/`

---

*이 가이드는 프로젝트 룰로서 모든 작업 단계에서 우선적으로 고려되어야 합니다.*
