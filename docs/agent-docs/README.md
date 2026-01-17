# 에이전트 문서 아카이브

이 폴더는 `.agent` 폴더에 있는 주요 스킬, 룰, 워크플로우 문서들의 **읽기 전용 복제본**입니다.

> ⚠️ **주의**: 이 폴더의 문서들은 참조용입니다.
> 실제 에이전트가 사용하는 문서는 `.agent` 폴더에 있습니다.

## 📁 폴더 구조

```
docs/agent-docs/
├── README.md           # 이 파일
├── rules/              # 에이전트 규칙 문서
│   ├── imagerule.md    # 이미지 생성 규칙
│   └── imgstyle.md     # 이미지 스타일 마스터 가이드
├── skills/             # 에이전트 스킬 문서
│   ├── runtime-guardian/
│   │   ├── SKILL.md    # 런타임 가디언 스킬 설명
│   │   └── scripts/
│   │       └── check_health.py
│   └── self-optimizer/
│       ├── SKILL.md    # 셀프 옵티마이저 스킬 설명
│       └── scripts/
│           └── optimize.py
└── workflows/          # 워크플로우 문서
    └── kill-zombies.md # 좀비 프로세스 정리 워크플로우
```

## 📋 문서 요약

### 규칙 (Rules)

| 파일 | 설명 |
|------|------|
| `imagerule.md` | 이미지 생성 시 임시 폴더 경로 및 승인/거부 처리 규칙 |
| `imgstyle.md` | 블루아카이브/니케 스타일 이미지 생성 마스터 가이드 (등급별 프롬프트 포함) |

### 스킬 (Skills)

| 스킬 | 설명 |
|------|------|
| `runtime-guardian` | 메모리 압박 및 좀비 프로세스 감지하여 시스템 안정성 확보 |
| `self-optimizer` | 프로젝트 구조 분석 후 IDE 설정 자동 최적화 |

### 워크플로우 (Workflows)

| 워크플로우 | 설명 |
|------|------|
| `kill-zombies` | 좀비 프로세스 정리 및 메모리 최적화 (`/kill-zombies` 명령으로 실행) |

---
*마지막 동기화: 2026-01-17*
