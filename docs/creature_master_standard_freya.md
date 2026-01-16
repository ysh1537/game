# ✨ 골든 스탠다드: 프레이야 (The Freya Standard)

**"모든 크리처 에셋은 이 수준이어야 한다."**
본 가이드는 [프레이야 복구 프로젝트]를 통해 확립된 **최고 품질의 화풍 및 제작 공정 표준**을 정의합니다.

---

## 1. 핵심 철학 (Core Philosophy)

* **원본 존중 (Respect the Original)**: 텍스트 프롬프트만으로 재창조하려 하지 말고, 우수한 **원본 이미지(Base)를 직접 참조(Image-to-Image)**하여 화풍과 질감을 100% 계승한다.
* **뇌살적 디테일 (Alluring Details)**: 단순한 노출이 아니라, **피부의 윤기, 땀방울, 홍조, 몸매의 굴곡(Curves)** 등 감각적인 텍스처 표현에 집중한다.
* **감정의 깊이 (Emotional Depth)**: 기쁨, 슬픔, 패배 등 각각의 표정에서 원본 캐릭터의 아이덴티티가 느껴져야 한다.

---

## 2. 제작 공정 (Pipeline)

### Step 1. Base 이미지 품질 확보

* 가장 완벽한 **Base 이미지**를 먼저 확보한다. (기존 이미지가 훌륭하다면 그대로 채택)
* 만약 새로 생성해야 한다면, 만족할 때까지 `v1, v2, v3...` 반복하여 **최상의 퀄리티**를 뽑아낸다.

### Step 2. 스타일 복제 (Style Cloning & Variation)

* **Img2Img (Image-to-Image) 필수 적용**:
  * **Reference Input**: 확정된 Base 이미지를 반드시 입력으로 사용한다. (얼굴/체형 고정)
  * **Variation Logic**: 스타일은 유지하되, **프롬프트를 통해 자세(Pose), 표정(Expression), 배경(Background)은 확실하게 변화**를 주어야 한다. (Base 이미지와 똑같은 구도가 나오면 실패)
  * **Prompt**: `consistent with original image style` + `[Specific Pose/Scenario Tag]`

### Step 3. 갤러리 연출 (Gallery Direction)

* **Lv1 (Dating)**: 설렘, 데이트, 부드러운 스킨십. (Solo 권장)
* **Lv2 (Intimacy)**: 유혹, 도발, 과감한 의상 변경(란제리/실크 등).
* **Lv3 (Ecstasy/Climax)**:
  * **Afterglow**: 절정 후의 나른함, 헝클어진 머리, 풀린 눈(하트눈), 땀, 상기된 피부.
  * **Disheveled**: 옷이나 장신구가 자연스럽게 흐트러진 모습.
  * **Bypass**: 직접적인 묘사 대신 '분위기'로 필터를 우회하며 최대의 매력을 이끌어냄.

---

## 3. 프레이야 레퍼런스 (The Reference)

| 구분 | 설명 | 핵심 포인트 |
| :--- | :--- | :--- |
| **화풍** | **Soft Illustration (Original)** | Blue Archive/Nikke 태그에 얽매이지 않고, **원본의 고유한 부드러움을 우선**. |
| **조명** | **Soft Bloom & Sunlight** | 따뜻하고 몽환적인 빛 처리. |
| **질감** | **Shiny Skin & Sweat** | 매끄러운 피부 질감과 리얼한 땀 묘사. |
| **구도** | **Wide Angle / Full Body** | 중요 부위뿐 아니라 전신의 곡선이 드러나는 앵글. |

---

> *"앞으로의 모든 크리처 복구 작업은 이 '프레이야 스탠다드'를 기준으로 진행한다."*
