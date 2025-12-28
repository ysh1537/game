# 🛠️ Game Scripts Collection

이 폴더는 게임 데이터 관리, 에셋 처리, 유지보수를 위한 스크립트들을 포함하고 있습니다.
기존 루트 디렉토리에 산재해 있던 스크립트들을 목적에 따라 분류하였습니다.

## 📂 구조 (Structure)

### 1. `maintenance/` (유지보수 및 복구)
데이터 무결성 검사, 오류 수정, 백업 복구 등의 작업을 수행합니다.
- `audit_*.js`: 데이터/에셋 감사 스크립트.
- `fix_*.js`, `repair_*.js`: 발견된 문제 수정 스크립트.
- `recover_*.js`: 손상된 데이터 복구 스크립트.
- `scan_game_integrity.mjs`: 전체 게임 무결성 진단.

### 2. `assets/` (에셋 관리)
이미지 생성, 에셋 연결, 플레이스홀더 채우기 등을 담당합니다.
- `fill_creature_content.js`: 크리처 이미지 생성 파이프라인.
- `link_assets.js`: 생성된 에셋을 데이터 파일에 연결.

### 3. `data/` (데이터 처리)
마스터 데이터 생성, 직렬화/역직렬화, 초기화 작업을 수행합니다.
- `generate_master_data.js`: 게임 초기 데이터 생성.
- `serialize_data.js`: 데이터 직렬화 도구.

## 🚀 사용법 (Usage)
모든 스크립트는 **프로젝트 루트 (`d:\test\game\`)** 에서 실행하는 것을 권장합니다.

```bash
# 예시: 크리처 데이터 정합성 검사
node scripts/maintenance/audit_creature_consistency.js

# 예시: 이미지 자동 생성 프로세스 시작
node scripts/assets/fill_creature_content_v2.js
```

> **주의**: 일부 레거시 스크립트는 파일 경로 참조 문제로 실행 시 오류가 발생할 수 있습니다. 이 경우 해당 스크립트 내부의 상대 경로(`../` 등)를 확인해주세요.
