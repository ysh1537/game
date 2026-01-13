const { exec } = require('child_process');
const http = require('http');

/**
 * Safe Test Runner
 * 1. 서버(localhost:8080) 생존 확인
 * 2. 죽어있다면 -> 실행 및 대기
 * 3. 살아있다면 -> 성공 로그 출력 (이후 에이전트가 브라우저 도구 실행)
 */

function checkServer(port) {
    return new Promise((resolve) => {
        const req = http.get(`http://localhost:${port}/index.html`, (res) => {
            if (res.statusCode === 200) {
                console.log(`[PASS] Server is ALIVE at ${port}.`);
                resolve(true);
            } else {
                console.log(`[WARN] Server responding with ${res.statusCode}.`);
                resolve(true); // 일단 응답은 하니 통과
            }
        });

        req.on('error', () => {
            console.log(`[FAIL] Server is DEAD at ${port}. Attempting resurrection...`);
            resolve(false);
        });

        req.end();
    });
}

function startServer() {
    console.log("[Auto] Starting http-server...");
    // 윈도우용 커맨드. 백그라운드 실행은 아니지만, 이 프로세스가 살아있는 동안 유지됨.
    // 에이전트 환경상 'start' 명령으로 새 창을 띄우거나, 여기서 실행 후 타임아웃을 줘야 함.
    // 여기서는 간단히 안내만 하고 에이전트에게 실행을 위임하는 것이 안전함 (무한 대기 방지).
    // 하지만 "자동화"를 원하셨으므로, exec으로 실행 시도.

    const server = exec('npx http-server . -p 8080 -c-1');
    server.stdout.on('data', (data) => {
        if (data.includes('Available on:')) {
            console.log("[Auto] Server Started Successfully!");
        }
    });

    // 서버가 켜질 시간 3초 대기
    return new Promise(resolve => setTimeout(resolve, 3000));
}

(async () => {
    let alive = await checkServer(8080);

    if (!alive) {
        await startServer();
        alive = await checkServer(8080); // 재확인

        if (alive) {
            console.log("-----------------------------------------");
            console.log("✅ SAFE TO PROCEED with Browser Test");
            console.log("-----------------------------------------");
        } else {
            console.error("❌ FAILED to auto-start server. Manual Check Required.");
            process.exit(1);
        }
    } else {
        console.log("-----------------------------------------");
        console.log("✅ SYSTEM READY. Proceeding...");
        console.log("-----------------------------------------");
    }
})();
