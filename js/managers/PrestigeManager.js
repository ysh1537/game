import EventEmitter from '../utils/EventEmitter.js';

export default class PrestigeManager extends EventEmitter {
    constructor(game, events, resourceManager) {
        super();
        this.game = game;
        this.events = events;
        this.resourceManager = resourceManager;

        this.dimensionShards = 0; // 환생 재화
        this.totalRebirths = 0;
        this.prestigeUpgrades = {
            attack_multi: 0,   // 공격력 배율
            gold_multi: 0,     // 골드 배율
            exp_multi: 0       // 경험치 배율
        };
    }

    /**
     * @description 현재 상태에서 환생 시 얻을 수 있는 차원 조각 계산
     */
    calculatePendingShards() {
        const maxStage = this.game.stageManager.getMaxStage();
        if (maxStage < 10) return 0; // 최소 10스테이지부터 환생 가능

        // 공식: (최대 스테이지 / 10) ^ 2
        return Math.floor(Math.pow(maxStage / 10, 2));
    }

    /**
     * @description 차원 도약(환생) 실행
     */
    executeRebirth() {
        const pending = this.calculatePendingShards();
        if (pending <= 0) return false;

        this.dimensionShards += pending;
        this.totalRebirths++;

        // 게임 데이터 초기화 (영구 보너스 제외)
        this.game.resourceManager.resetForRebirth();
        this.game.creatureManager.resetForRebirth();
        this.game.stageManager.resetForRebirth();
        this.game.expeditionManager.activeExpeditions = [];

        this.emit('prestige:rebirth', { shards: pending, total: this.dimensionShards });
        this.game.save(); // 즉시 저장
        return true;
    }

    upgradePrestige(type) {
        const cost = this.getUpgradeCost(type);
        if (this.dimensionShards >= cost) {
            this.dimensionShards -= cost;
            this.prestigeUpgrades[type]++;
            this.emit('prestige:upgraded', { type, level: this.prestigeUpgrades[type] });
            return true;
        }
        return false;
    }

    getUpgradeCost(type) {
        const level = this.prestigeUpgrades[type] || 0;
        return Math.floor(10 * Math.pow(2, level));
    }

    getBonusMultiplier(type) {
        const level = this.prestigeUpgrades[type] || 0;
        return 1 + (level * 0.2); // 레벨당 20% 증가
    }

    getSerializableState() {
        return {
            dimensionShards: this.dimensionShards,
            totalRebirths: this.totalRebirths,
            prestigeUpgrades: this.prestigeUpgrades
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.dimensionShards = state.dimensionShards || 0;
        this.totalRebirths = state.totalRebirths || 0;
        if (state.prestigeUpgrades) {
            this.prestigeUpgrades = { ...state.prestigeUpgrades };
        }
    }
}
