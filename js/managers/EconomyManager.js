/**
 * EconomyManager.js
 * Centralized Currency Control
 */
class EconomyManager {
    constructor() {
        // Currency Types
        this.CURRENCY = {
            GOLD: 'gold',  // Upgrade
            GEMS: 'gems',  // Summon
            ENERGY: 'energy' // Play
        };
    }

    /**
     * Get current balance of a currency
     */
    getBalance(type) {
        if (!window.SaveManager) return 0;
        return window.SaveManager.data.resources[type] || 0;
    }

    /**
     * Add currency (Rewards, IAP)
     */
    add(type, amount) {
        if (!window.SaveManager) return;
        const newBalance = window.SaveManager.addResource(type, amount);
        console.log(`[Economy] +${amount} ${type} (Total: ${newBalance})`);

        // Update UI
        this.updateUI();
        return newBalance;
    }

    /**
     * Spend currency (Summon, Upgrade)
     */
    spend(type, amount) {
        if (!window.SaveManager) return false;
        const success = window.SaveManager.spendResource(type, amount);

        if (success) {
            console.log(`[Economy] -${amount} ${type}`);
            this.updateUI();
            return true;
        } else {
            console.warn(`[Economy] Not enough ${type}`);
            // Trigger UI Alert (Toast)
            alert(`Not enough ${type}!`);
            return false;
        }
    }

    /**
     * Update Header UI
     */
    updateUI() {
        // Assumes HTML elements with IDs: 'display-gold', 'display-gems'
        const goldEl = document.getElementById('display-gold');
        const gemsEl = document.getElementById('display-gems');

        if (goldEl) goldEl.innerText = this.formatNumber(this.getBalance(this.CURRENCY.GOLD));
        if (gemsEl) gemsEl.innerText = this.formatNumber(this.getBalance(this.CURRENCY.GEMS));
    }

    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

// Global Instance
window.EconomyManager = new EconomyManager();
