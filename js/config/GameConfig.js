/**
 * GameConfig.js
 * 게임 내 중요 상수 및 설정값을 중앙 관리합니다.
 */

export const GAME_CONFIG = {
    // 1. 리소스 초기값
    INITIAL_RESOURCES: {
        gold: 5000,
        energy: 100,
        gem: 10
    },

    // 2. 소환 비용
    SUMMON_COST: {
        NORMAL: { type: 'gold', amount: 300 },
        PREMIUM: { type: 'gem', amount: 1 },
        NORMAL_10: { type: 'gold', amount: 3000 },
        PREMIUM_10: { type: 'gem', amount: 10 }
    },

    // 3. 에너지 설정
    ENERGY: {
        MAX_DEFAULT: 100,
        RECOVERY_INTERVAL_SEC: 300, // 5분
        RECOVERY_AMOUNT: 1
    },

    // 4. 합성 확률 (현재 등급 -> 다음 등급)
    COMPOSE_RATES: {
        0: 1.0,  // 0성 -> 1성
        1: 0.8,  // 1성 -> 2성
        2: 0.5,  // 2성 -> 3성
        3: 0.3,  // 3성 -> 4성
        4: 0.1   // 4성 -> 5성
    },

    // 5. 호감도 레벨 기준
    AFFECTION_LEVELS: {
        0: { min: 0, label: '경계', color: '#9e9e9e' },
        1: { min: 100, label: '관심', color: '#66bb6a' },
        2: { min: 300, label: '신뢰', color: '#f48fb1' },
        3: { min: 1000, label: '서약', color: '#ad1457' }
    }
};
