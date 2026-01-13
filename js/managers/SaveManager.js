/**
 * SaveManager.js
 * Handles Data Persistence (Write-through Caching)
 */
class SaveManager {
    constructor() {
        this.data = {
            userId: null,
            resources: { gold: 1000, gems: 100, energy: 50 }, // Default Start
            inventory: {}, // creature_id: { level: 1, count: 1 }
            settings: { volume: 50, lang: 'ko' },
            lastSave: 0
        };
        this.lastSnapshot = JSON.stringify(this.data);
    }

    /**
     * Load Data (Routing based on Auth)
     */
    async load() {
        const auth = window.AuthManager;
        if (!auth || !auth.isAuthenticated) return;

        if (auth.isGuest) {
            // Load from LocalStorage
            const localData = localStorage.getItem("multiverse_guest_save");
            if (localData) {
                this.data = JSON.parse(localData);
                console.log("[SaveManager] Loaded Guest Data from LocalStorage");
            } else {
                console.log("[SaveManager] New Guest Profile Created");
            }
        } else {
            // Load from Cloud (Firebase)
            if (window.firebaseService) {
                const result = await window.firebaseService.loadGameData();
                if (result.success && result.data) {
                    this.data = { ...this.data, ...result.data }; // Merge defaults
                    console.log("[SaveManager] Loaded User Data from Firestore");
                } else {
                    console.log("[SaveManager] New Cloud Profile Created");
                }
            }
        }

        // Notify UI to update
        if (window.UIManager) window.UIManager.updateAll();
    }

    /**
     * Save Data (Debounced recommended, but direct for now)
     */
    async save() {
        const auth = window.AuthManager;
        if (!auth || !auth.isAuthenticated) return;

        this.data.lastSave = Date.now();
        this.data.userId = auth.user.uid;

        if (auth.isGuest) {
            // Save to LocalStorage
            localStorage.setItem("multiverse_guest_save", JSON.stringify(this.data));
            console.log("[SaveManager] Saved to LocalStorage");
        } else {
            // Save to Cloud
            if (window.firebaseService) {
                await window.firebaseService.saveGameData(this.data);
            }
        }
    }

    // --- Data Accessors ---

    addResource(type, amount) {
        if (!this.data.resources[type]) this.data.resources[type] = 0;
        this.data.resources[type] += amount;
        this.save();
        return this.data.resources[type];
    }

    spendResource(type, amount) {
        if (!this.data.resources[type] || this.data.resources[type] < amount) return false;
        this.data.resources[type] -= amount;
        this.save();
        return true;
    }

    addCreature(creatureId) {
        if (!this.data.inventory[creatureId]) {
            this.data.inventory[creatureId] = { level: 1, count: 0 };
        }
        this.data.inventory[creatureId].count++;
        this.save();
    }
}

// Global Instance
window.SaveManager = new SaveManager();
