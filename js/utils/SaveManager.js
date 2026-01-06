import { firebaseService } from '../firebase/FirebaseService.js';

export default class SaveManager {
    static SAVE_KEY = "mclab_save_v1";

    static async saveGame(state, key = null) {
        try {
            const targetKey = key ? `mclab_save_${key}` : this.SAVE_KEY;

            // 1. Local Save (Always)
            const json = JSON.stringify(state);
            localStorage.setItem(targetKey, json);
            console.log(`[SaveManager] 로컬 저장 완료 (${targetKey})`);

            // 2. Cloud Save (If Logged In)
            if (firebaseService.isLoggedIn()) {
                await firebaseService.saveGameData(state);
                console.log(`[SaveManager] 클라우드(Firebase) 백업 완료`);
            }
        } catch (e) {
            console.error("[SaveManager] 저장 실패:", e);
        }
    }

    static async loadGame(key = null) {
        try {
            const targetKey = key ? `mclab_save_${key}` : this.SAVE_KEY;

            // 1. Cloud Load (Priority if Logged In? Or Sync?)
            // Policy: If Logged In, ask or check timestamps. For now, prefer Local for speed, but Cloud for recovery.
            // Let's implement: Try Local first.
            const localJson = localStorage.getItem(targetKey);

            if (firebaseService.isLoggedIn()) {
                const cloudResult = await firebaseService.loadGameData();
                if (cloudResult.success && cloudResult.data) {
                    console.log(`[SaveManager] Cloud data found.`);
                    // Compare timestamps if possible. For now, if local is missing, use cloud.
                    if (!localJson) return cloudResult.data;

                    // If both exist, maybe use Cloud? (Simplistic approach: Cloud wins or Local wins? Usually Local is fresher)
                    // Let's stick to Local being primary cache, Cloud being backup.
                    // But if User clears cache, Local is null, Cloud restores functionality.
                }
            }

            if (!localJson) return null;
            return JSON.parse(localJson);
        } catch (e) {
            console.error("[SaveManager] 로드 실패:", e);
            return null;
        }
    }

    static clearGame(key = null) {
        const targetKey = key ? `mclab_save_${key}` : this.SAVE_KEY;
        localStorage.removeItem(targetKey);
        console.log(`[SaveManager] 로컬 데이터 초기화 (${targetKey})`);
    }
}
