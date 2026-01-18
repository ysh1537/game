/**
 * AdManager - 광고 관리 매니저
 * 리워드 광고, 배너 광고, 전면 광고 통합 관리
 */
import EventEmitter from '../utils/EventEmitter.js';

export default class AdManager extends EventEmitter {
    constructor(game, events) {
        super();
        this.game = game;
        this.events = events;

        // 광고 쿨다운 (남용 방지)
        this.lastAdTime = 0;
        this.adCooldown = 60000; // 1분

        // 일일 광고 시청 제한
        this.dailyAdCount = 0;
        this.maxDailyAds = 10;
        this.lastResetDate = new Date().toDateString();

        // 리워드 설정
        this.rewards = {
            gem: { amount: 10, label: '💎 10 젬' },
            gold: { amount: 500, label: '💰 500 골드' },
            energy: { amount: 50, label: '⚡ 50 에너지' }
        };

        this._checkDailyReset();
    }

    /**
     * 일일 리셋 체크
     */
    _checkDailyReset() {
        const today = new Date().toDateString();
        if (this.lastResetDate !== today) {
            this.dailyAdCount = 0;
            this.lastResetDate = today;
        }
    }

    /**
     * 광고 시청 가능 여부 확인
     */
    canWatchAd() {
        this._checkDailyReset();

        const now = Date.now();
        const cooldownRemaining = Math.max(0, this.adCooldown - (now - this.lastAdTime));

        if (cooldownRemaining > 0) {
            return { available: false, reason: `쿨다운 중 (${Math.ceil(cooldownRemaining / 1000)}초)` };
        }

        if (this.dailyAdCount >= this.maxDailyAds) {
            return { available: false, reason: `일일 한도 도달 (${this.maxDailyAds}회)` };
        }

        return { available: true };
    }

    /**
     * 리워드 광고 시청 (시뮬레이션)
     * 실제 서비스에서는 Google AdMob이나 Unity Ads 연동 필요
     */
    async watchRewardAd(rewardType = 'gem') {
        const canWatch = this.canWatchAd();
        if (!canWatch.available) {
            this.emit('ad:failed', { reason: canWatch.reason });
            return false;
        }

        // 광고 로딩 시뮬레이션
        this.emit('ad:loading');

        try {
            // 실제 환경에서는 여기서 광고 SDK 호출
            // 개발/테스트 환경에서는 시뮬레이션
            const adWatched = await this._simulateAdWatch();

            if (adWatched) {
                // 보상 지급
                const reward = this.rewards[rewardType];
                this._giveReward(rewardType, reward.amount);

                // 상태 업데이트
                this.lastAdTime = Date.now();
                this.dailyAdCount++;

                this.emit('ad:completed', {
                    rewardType,
                    amount: reward.amount,
                    remainingAds: this.maxDailyAds - this.dailyAdCount
                });

                return true;
            }
        } catch (error) {
            console.error('[AdManager] 광고 오류:', error);
            this.emit('ad:failed', { reason: '광고 로드 실패' });
        }

        return false;
    }

    /**
     * 광고 시청 시뮬레이션 (개발용)
     */
    async _simulateAdWatch() {
        return new Promise((resolve) => {
            // 3초 후 광고 완료 시뮬레이션
            setTimeout(() => {
                resolve(true);
            }, 3000);
        });
    }

    /**
     * 보상 지급
     */
    _giveReward(type, amount) {
        switch (type) {
            case 'gem':
                this.game.resourceManager.addGem(amount);
                break;
            case 'gold':
                this.game.resourceManager.addGold(amount);
                break;
            case 'energy':
                this.game.resourceManager.addEnergy(amount);
                break;
        }

        this.game.events.emit('log:add', `🎬 광고 시청 완료! ${this.rewards[type].label} 획득!`);
    }

    /**
     * 남은 광고 횟수
     */
    getRemainingAds() {
        this._checkDailyReset();
        return this.maxDailyAds - this.dailyAdCount;
    }

    /**
     * 쿨다운 남은 시간 (초)
     */
    getCooldownRemaining() {
        const now = Date.now();
        return Math.max(0, Math.ceil((this.adCooldown - (now - this.lastAdTime)) / 1000));
    }

    // [저장/로드]
    getSerializableState() {
        return {
            dailyAdCount: this.dailyAdCount,
            lastResetDate: this.lastResetDate,
            lastAdTime: this.lastAdTime
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.dailyAdCount = state.dailyAdCount || 0;
        this.lastResetDate = state.lastResetDate || new Date().toDateString();
        this.lastAdTime = state.lastAdTime || 0;
        this._checkDailyReset();
    }
}
