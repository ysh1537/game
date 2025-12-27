
import EventEmitter from '../utils/EventEmitter.js';

export default class MailManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;
        this.inbox = [];
        this.nextMailId = 1;
    }

    init() {
        // Welcome Mail if empty
        if (this.inbox.length === 0) {
            this.sendMail({
                title: "환영합니다!",
                content: "연구소장 부임 축하 선물입니다.",
                rewards: { gold: 1000, gem: 50 },
                expiresAt: null // Permanent
            });
        }
    }

    sendMail({ title, content, rewards, expiresAt }) {
        const mail = {
            id: this.nextMailId++,
            title,
            content,
            rewards,
            receivedAt: Date.now(),
            expiresAt: expiresAt || (Date.now() + 7 * 24 * 60 * 60 * 1000), // Default 7 days
            isRead: false,
            isClaimed: false
        };
        this.inbox.push(mail);
        this.emit('mail:received', mail);
        this.emit('mail:updated', this.inbox);
    }

    claimMail(id) {
        const mail = this.inbox.find(m => m.id === id);
        if (!mail) return { success: false, reason: "Mail not found" };
        if (mail.isClaimed) return { success: false, reason: "Already claimed" };

        if (mail.rewards) {
            if (mail.rewards.gold) this.game.resourceManager.addGold(mail.rewards.gold);
            if (mail.rewards.gem) this.game.resourceManager.addGem(mail.rewards.gem);
            // Handle Items/Creatures if needed later
        }

        mail.isClaimed = true;
        mail.isRead = true;
        this.emit('mail:claimed', mail);
        this.emit('mail:updated', this.inbox);

        return { success: true, rewards: mail.rewards };
    }

    claimAll() {
        let totalRewards = { gold: 0, gem: 0 };
        let count = 0;

        this.inbox.forEach(mail => {
            if (!mail.isClaimed && mail.rewards) {
                if (mail.rewards.gold) totalRewards.gold += mail.rewards.gold;
                if (mail.rewards.gem) totalRewards.gem += mail.rewards.gem;
                mail.isClaimed = true;
                mail.isRead = true;
                count++;
            }
        });

        if (count > 0) {
            if (totalRewards.gold > 0) this.game.resourceManager.addGold(totalRewards.gold);
            if (totalRewards.gem > 0) this.game.resourceManager.addGem(totalRewards.gem);
            this.emit('mail:updated', this.inbox);
            return { success: true, count, totalRewards };
        }
        return { success: false, reason: "No rewards to claim" };
    }

    deleteRead() {
        this.inbox = this.inbox.filter(m => !m.isClaimed);
        this.emit('mail:updated', this.inbox);
    }

    getUnreadCount() {
        return this.inbox.filter(m => !m.isRead).length;
    }

    getSerializableState() {
        return {
            inbox: this.inbox,
            nextMailId: this.nextMailId
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.inbox = state.inbox || [];
        this.nextMailId = state.nextMailId || 1;
    }
}
