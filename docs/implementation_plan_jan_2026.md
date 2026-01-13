
# 📅 2026년 1월 구현 계획 (Implementation Plan)

## 🎯 목표 (Objective)
최근 수행한 **자산 감사(Deep Audit)** 결과를 바탕으로, 프로젝트의 시각적/청각적 완성도를 높이기 위한 **누락 자산 생성** 및 **시스템 안정화**를 수행합니다.

> **기준 문서**: `docs/creature_image_master_guide.md`, `docs/priority_1_resources.md`

---

## 1. 🖼️ 에셋 생성 파이프라인 (Asset Generation)

현재 1,792개의 누락 자산 중, 게임 경험에 가장 치명적인 **UR/SSR 등급의 스프라이트 및 갤러리 이미지**를 최우선으로 생성합니다.

### 1-1. 최상위 등급 스프라이트 채우기 (Priority: Highest)
*   **대상**: Main 이미지는 존재하나, 표정/스킬/승리/패배 컷신이 없는 UR/SSR 크리처.
*   **목록**:
    *   **Olympus**: 제우스(Zeus), 포세이돈(Poseidon), 하데스(Hades) (Main만 존재, Variation 9종 누락)
    *   **Abyss**: 크툴루(Cthulhu), 에레보스(Void Emperor), 티아마트(Tiamat) (회수된 Main 외 Variation 누락)
    *   **Shangri-La**: 백호, 청룡, 주작, 현무 (4성수)
*   **액션**:
    1.  `generation_queue.json`에 해당 크리처들의 Variation 프롬프트 구체화.
    2.  마스터 스타일 가이드(니케/블루아카이브 풍)에 맞춰 이미지 생성.
    3.  `images/temp` -> 승인 -> `images/creatures/[world]/` 이동 프로세스 수행.

### 1-2. 필수 배경 및 오디오 (Priority: High)
*   **배경 (Backgrounds)**: `docs/priority_1_resources.md`에 명시된 누락 스테이지 배경 5종 생성.
    *   네메아 숲, 에리만토스 설원, 스팀팔로스 호수 등.
*   **오디오 (Audio)**: 현재 비어 있는 BGM 및 SFX 폴더 채우기.
    *   전투(Battle), 보스(Boss), 로비(Lobby) 테마곡 확보.

---

## 2. 🧹 시스템 정비 (System Maintenance)

### 2-1. 고아 파일(Orphan) 심층 정리
*   현재 **474개**의 고아 파일이 존재함.
*   **분석 대상**:
    *   유효한 에셋이나 파일명이 잘못된 경우 (`_restored` 접미사 등) -> 정식 명칭으로 변경.
    *   생성 실패작 또는 중복 파일 -> `_unused_archive`로 이동 후 일괄 삭제.

### 2-2. 데이터 정합성 검증 (Data Integrity)
*   `fix_mismatches.ps1`으로 파일 경로는 수정되었으나, 코드(`js/data/*.js`) 내의 로직이나 주석에 구형 ID(`god_zeus` 등)가 남아있는지 검색(`grep_search`)하여 일괄 수정.

---

## 3. 📅 주간 일정 (Weekly Schedule)

| 구분 | 작업 내용 | 예상 소요 | 비고 |
| :--- | :--- | :--- | :--- |
| **Week 1** | **[UR/SSR]** 올림푸스(포세이돈, 하데스) 잔여 스프라이트 및 심연(크툴루, 에레보스) 생성 | 2일 | 잔여 누락본 정밀 타격 |
| **Week 1** | **[UR/SSR]** 심연(Abyss) 크툴루, 에레보스 스프라이트 생성 | 2일 | 심연 테마 완성 |
| **Week 2** | **[Audio/BG]** 필수 배경 5종 및 기본 BGM 5곡 확보 | 2일 | 게임 분위기 조성 |
| **Week 2** | **[System]** 잔여 Orphan 파일 정리 및 코드 리팩토링 | 1일 | 프로젝트 용량 최적화 |

---

## 4. 승인 요청 (Approval Request)

위 계획에 따라 **Week 1: 올림푸스 3대장 스프라이트 생성**부터 착수하고자 합니다.
진행하시겠습니까?
