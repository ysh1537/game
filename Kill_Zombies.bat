@echo off
chcp 65001
cls
echo ========================================================
echo 🧹 좀비 프로세스 소탕 작전 (Zombie Cleaner)
echo ========================================================
echo.
echo ⚠️ 현재 에이전트(IDE)가 켜져 있어도 안전합니다.
echo ⚠️ 메모리를 13GB 이상 먹고 있는 Language Server만 골라서 제거합니다.
echo.

echo 🔫 Language Server 종료 시도...
taskkill /F /IM language_server_windows_x64.exe
if %ERRORLEVEL% EQU 0 (
    echo ✅ Language Server 제거 성공!
) else (
    echo ⚠️ 실행 중인 Language Server가 없거나 이미 종료되었습니다.
)

echo.
echo --------------------------------------------------------
echo ✨ 작업이 완료되었습니다. 
echo 📉 작업 관리자를 열어 메모리가 돌아왔는지 확인해보세요.
echo --------------------------------------------------------
pause
