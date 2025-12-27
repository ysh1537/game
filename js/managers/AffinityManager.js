
export class AffinityManager {
    constructor(game) {
        this.game = game;
        this.affinityTable = {}; // { instanceId: { points: 0, level: 0, unlockedGallery: [] } }

        // Thresholds
        this.LEVEL_THRESHOLDS = {
            1: 100,  // Lv1 Gallery
            2: 500,  // Lv2 Gallery
            3: 1500, // Lv3 Gallery (OATH potential)
            4: 5000  // Oath/Marriage
        };

        // Actions
        this.ACTIONS = {
            TOUCH: { points: 5, cooldown: 60 * 1000 }, // 1 min
            GIFT: { points: 50 },
            BATTLE_WIN: { points: 2 }
        };

        this.lastActionTime = {}; // { instanceId_action: timestamp }
    }

    init() {
        // Load data potentially? Or handled by SaveManager
    }

    getAffinity(instanceId) {
        if (!this.affinityTable[instanceId]) {
            this.affinityTable[instanceId] = { points: 0, level: 0 };
        }
        return this.affinityTable[instanceId];
    }

    addPoints(instanceId, amount, source = 'generic') {
        const data = this.getAffinity(instanceId);
        const oldLevel = data.level;

        data.points += amount;

        // Level Up Check
        let newLevel = oldLevel;
        for (const [lvl, req] of Object.entries(this.LEVEL_THRESHOLDS)) {
            if (data.points >= req) {
                newLevel = Math.max(newLevel, parseInt(lvl));
            }
        }

        if (newLevel > oldLevel) {
            data.level = newLevel;
            this.game.events.emit('affinity:levelUp', { instanceId, level: newLevel });
            // Unlock Gallery Notification
            this.game.ui.showToast(`❤ 호감도 레벨 ${newLevel} 달성! 갤러리가 해금되었습니다!`);
        } else {
            // Small toast for points
            // this.game.ui.showToast(`❤ 호감도 +${amount}`);
        }

        this.save();
    }

    interact(instanceId, actionType) {
        // Handle Cooldowns if needed
        // For simplified V1, just add points
        if (actionType === 'TOUCH') {
            this.addPoints(instanceId, this.ACTIONS.TOUCH.points, 'TOUCH');
            return { success: true, points: this.ACTIONS.TOUCH.points };
        }
        return { success: false };
    }

    // Check if a gallery image is unlocked
    isGalleryUnlocked(instanceId, levelIndex) {
        // levelIndex: 1, 2, 3
        const data = this.getAffinity(instanceId);
        return data.level >= levelIndex;
    }

    save() {
        // Integration with SaveManager usually happens by SaveManager calling getData()
        // or we push to localStorage directly for now
        localStorage.setItem('affinityData', JSON.stringify(this.affinityTable));
    }

    load() {
        const raw = localStorage.getItem('affinityData');
        if (raw) {
            this.affinityTable = JSON.parse(raw);
        }
    }
}
