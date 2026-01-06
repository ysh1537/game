# 🎨 크리처 이미지 생성 워크플로우 (자동화 규칙)

**목적**: 크리처 변형 이미지 생성 시 일관된 프로세스 적용

---

## 📋 생성 프로세스 (자동화)

### 1단계: 임시 폴더에 생성

```
D:\test\multiverse-creature-lab\images\temp\[creature_name]\
```

- 모든 신규 이미지는 먼저 임시 폴더에 저장
- 사용자 검토 대기

### 2단계: 사용자 승인

- 사용자가 이미지 확인 후 결정

### 3단계: 최종 처리 (자동)

**승인 시**:

```powershell
# 실제 폴더로 복사
Copy-Item "D:\test\multiverse-creature-lab\images\temp\[creature]\*" 
          "D:\test\multiverse-creature-lab\images\creatures\[region]\" -Force

# temp 폴더 정리 (자동)
Remove-Item "D:\test\multiverse-creature-lab\images\temp\[creature]\" -Recurse -Force
```

**거부 시**:

```powershell
# 아카이브로 이동
Move-Item "D:\test\multiverse-creature-lab\images\temp\[creature]\*" 
          "D:\test\multiverse-creature-lab\images\_unused_archive\" -Force

# temp 폴더 정리
Remove-Item "D:\test\multiverse-creature-lab\images\temp\[creature]\" -Recurse -Force
```

---

## ✅ 자동화 체크리스트

이미지 생성 완료 후 **자동 실행**:

- [ ] 실제 폴더로 복사 완료 확인
- [ ] temp 폴더 자동 삭제
- [ ] 기존 버전이 있으면 `_unused_archive`로 백업
- [ ] 작업 완료 보고

---

## 📁 폴더 구조

```
images/
├── creatures/
│   ├── asgard/          # 실제 적용된 이미지
│   ├── olympus/
│   ├── shangrila/
│   └── abyss/
├── temp/                # 임시 작업 공간 (자동 정리)
│   ├── odin/
│   └── hel/
└── _unused_archive/     # 폐기/이전 버전 보관
```

---

## 🔧 자동화 규칙 요약

1. ✅ 생성 → temp 폴더
2. ✅ 승인 → 실제 폴더 복사
3. ✅ **temp 폴더 자동 삭제** ⭐ (중요!)
4. ✅ 거부 → archive 이동
5. ✅ 기존 파일 → archive 백업 (덮어쓰기 전)
