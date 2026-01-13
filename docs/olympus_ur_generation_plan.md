
# 🌊 올림푸스 UR/SSR 생성 계획: 포세이돈 & 하데스

**작성일**: 2026-01-13
**목표**: 제우스(Zeus)와 동일한 완성도를 갖추기 위해, 올림푸스 3대장 중 나머지인 포세이돈과 하데스의 누락된 시각적 자산을 완성합니다.

---

## 📊 현재 상태 (감사 결과)

| 크리처 | 등급 | 보유 에셋 | **누락 에셋** (생성 대상) |
| :--- | :--- | :--- | :--- |
| **포세이돈** | SSR | Main, Idle, Joy, Sad, Angry, Skill, Gallery(1-3) | **[Victory], [Defeat]** (2종) |
| **하데스** | SSR | Main, Idle, Joy, Sad, Angry, Skill | **[Victory], [Defeat], [Gallery Lv1], [Gallery Lv2], [Gallery Lv3]** (5종) |

> **참고**: 데이터 상 등급은 SSR일 수 있으나, 시각적 품질은 **UR 등급(초월)** 기준을 따릅니다. (마스터 룰: 모든 신은 최상급 미소녀/성인 여성으로 의인화)

---

## 🎨 생성 전략 (마스터 룰 준수)

*   **스타일**: 블루아카이브 + 니케 스타일 (2D 셀 셰이딩, 애니메이션 풍).
*   **신체 특징**: 글래머러스한 바디, 거대한 가슴, 굵은 허벅지(Thick Thighs), 넓은 골반.
*   **파일명 규칙**: `god_` 접두사 금지. 표준 ID (`creature_poseidon`, `creature_hades`) 사용.

---

## 📝 프롬프트 설계 (Prompt Design)

### 1. 🔱 포세이돈 (심해의 여왕)
*   **컨셉**: 성숙함, 야생적, 강력함, 푸른색/청록색 테마, 비늘 갑옷.

| 변형 (Variation) | 파일명 (Filename) | 프롬프트 키워드 (Prompt Keywords) |
| :--- | :--- | :--- |
| **승리 (Victory)** | `creature_poseidon_victory.png` | `anime, blue archive style, nikke style, full body, poseidon girl, long blue hair, golden crown, revealing blue scale armor, holding trident, **winning pose**, cheering, confident smile, ocean background, water splash effects, glamorous body, huge breasts, thick thighs` |
| **패배 (Defeat)** | `creature_poseidon_defeat.png` | `anime, blue archive style, nikke style, full body, poseidon girl, blue scale armor, **defeated pose**, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression, crying, ocean background, glamorous body` |

### 2. 💀 하데스 (명계의 여왕)
*   **컨셉**: 차가움, 고딕 롤리타, 우아함, 검정/보라 테마, 창백한 피부.

| 변형 (Variation) | 파일명 (Filename) | 프롬프트 키워드 (Prompt Keywords) |
| :--- | :--- | :--- |
| **승리 (Victory)** | `creature_hades_victory.png` | `anime, blue archive style, nikke style, full body, hades girl, long black hair, pale skin, gothic dress with purple accents, holding bident, **winning pose**, arrogant smile, looking down on viewer, dark aura, underworld background, glamorous body` |
| **패배 (Defeat)** | `creature_hades_defeat.png` | `anime, blue archive style, nikke style, full body, hades girl, gothic dress, **defeated pose**, sitting on ground, clothes torn, ribbon untied, humiliated expression, tears, dark underworld background, glamorous body` |
| **갤러리 1단계**<br>(데이트) | `creature_hades_gallery_lv1.png` | `anime, blue archive style, nikke style, hades girl, **dating sim event**, cafe setting, casual modern gothic fashion, drinking tea, **shy blush**, avoiding eye contact, soft lighting, cute atmosphere` |
| **갤러리 2단계**<br>(친밀) | `creature_hades_gallery_lv2.png` | `anime, blue archive style, nikke style, hades girl, **dating sim event**, bedroom setting, sitting on bed, taking off boots, **intimate atmosphere**, looking at viewer, blushing hard, slight smile` |
| **갤러리 3단계**<br>(시크릿) | `creature_hades_gallery_lv3.png` | `anime, blue archive style, nikke style, hades girl, **dating sim event**, secret hot spring, **revealing black lingerie** or towel, wet skin, steam, **seductive pose**, huge breasts, thick thighs, heart shaped pupils, intense eye contact, masterpiece` |

---

## 🚀 실행 단계

1.  **생성 (Generate)**: 위 프롬프트를 사용하여 `images/temp` 경로에 이미지 생성.
2.  **검수 (Review)**: "텍스트 없음", "손가락 정상", "스타일 일치" 여부 확인.
3.  **적용 (Apply)**: `images/creatures/olympus/`로 이동 및 파일명 일치 확인.
4.  **확인 (Confirm)**: 인게임에서 기존 플레이스홀더가 정상적으로 교체되었는지 확인.

**생성을 시작하시겠습니까?**
