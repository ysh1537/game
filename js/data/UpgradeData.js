import { RANKS } from './RankData.js';

/**
 * UpgradeData.js
 * 크리처 강화(Level Up) 관련 밸런스 데이터
 * 하드코딩 방지용 (Rule 1.1)
 */
export const UPGRADE_DATA = {
    // 레벨업 비용 증가율 (Cost * 1.5 ^ (CurrentLevel - 1))
    COST_SCALE: 1.5,

    // 최대 레벨
    MAX_LEVEL: 50,

    // 등급별 기본 강화 비용 (1레벨 -> 2레벨 기준)
    BASE_COSTS: {
        [RANKS.NORMAL]: 100,
        [RANKS.UNIQUE]: 200,
        [RANKS.RARE]: 500,
        [RANKS.SPECIAL]: 1000,
        [RANKS.SR]: 2000,
        [RANKS.SSR]: 5000,
        [RANKS.UR]: 10000
    },

    // 레벨당 스탯 증가율 (기본 스탯의 10%씩 증가)
    STAT_GROWTH_PER_LEVEL: 0.1
};
