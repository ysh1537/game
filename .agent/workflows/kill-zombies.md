---
description: 좀비 프로세스 정리 및 메모리 최적화 실행
---

# 🔫 Kill Zombies 워크플로우

메모리가 비정상적으로 차오르거나 시스템이 느려질 때 실행합니다.

## 사전 조건

- 특별한 사전 조건 없음

## 실행 단계

// turbo-all

### 1. 현재 메모리 상태 확인

```powershell
(Get-Process | Where-Object { $_.ProcessName -match 'node|python' } | Measure-Object -Property WorkingSet64 -Sum).Sum / 1GB
```

### 2. Kill_Zombies.bat 실행

```powershell
& "D:\test\multiverse-creature-lab\Kill_Zombies.bat"
```

### 3. 정리 후 메모리 상태 재확인

```powershell
Start-Sleep -Seconds 3
(Get-Process | Where-Object { $_.ProcessName -match 'node|python' } | Measure-Object -Property WorkingSet64 -Sum).Sum / 1GB
```

## 예상 결과

- node/python 관련 프로세스 메모리 사용량 대폭 감소
- 시스템 반응 속도 개선

## 주의사항

- 실행 중인 개발 서버가 있다면 함께 종료될 수 있음
- 필요시 서버 재시작 필요
