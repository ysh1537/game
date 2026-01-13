const { spawn } = require('child_process');
const net = require('net');

/**
 * ensure_server.js
 * - 포트 8080 체크
 * - 닫혀있으면 npx http-server 실행 (Detached)
 * - 열릴 때까지 대기 (타임아웃 10초)
 * - 성공 시 Exit 0, 실패 시 Exit 1
 */

function checkPort(port) {
    return new Promise((resolve) => {
        const socket = new net.Socket();
        socket.setTimeout(500);
        socket.on('connect', () => {
            socket.destroy();
            resolve(true);
        });
        socket.on('timeout', () => {
            socket.destroy();
            resolve(false);
        });
        socket.on('error', () => {
            resolve(false);
        });
        socket.connect(port, '127.0.0.1');
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    const PORT = 8080;
    console.log(`[Ensure-Server] Checking port ${PORT}...`);

    // 1. 초기 체크
    if (await checkPort(PORT)) {
        console.log(`[Ensure-Server] Port ${PORT} is ALIVE. Safe to proceed.`);
        process.exit(0);
    }

    console.log(`[Ensure-Server] Port ${PORT} is CLOSED. Spawning http-server...`);

    // 2. 서버 실행 (Detached Process)
    // stdio: 'ignore'로 설정하여 부모 프로세스와의 연결을 끊음
    const server = spawn('npx.cmd', ['http-server', '.', '-p', '8080', '-c-1'], {
        detached: true,
        stdio: 'ignore',
        shell: false
    });
    server.unref();

    // 3. 실행 확인 대기 (최대 10초)
    const MAX_RETRIES = 20;
    for (let i = 0; i < MAX_RETRIES; i++) {
        await sleep(500);
        if (await checkPort(PORT)) {
            console.log(`[Ensure-Server] Server started successfully on attempt ${i + 1}.`);
            process.exit(0);
        }
        process.stdout.write('.');
    }

    console.error(`\n[Ensure-Server] FAILED to start server after ${MAX_RETRIES} attempts.`);
    process.exit(1);
})();
