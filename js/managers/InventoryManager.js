
import EventEmitter from '../utils/EventEmitter.js';
import { ARTIFACT_DEFS, getArtifactDef } from '../data/ArtifactData.js';

export default class InventoryManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;
        this.inventory = {}; // { itemId: count }
    }

    // Add Item
    addItem(itemId, amount = 1) {
        if (!getArtifactDef(itemId)) return false;
        this.inventory[itemId] = (this.inventory[itemId] || 0) + amount;
        this.emit('inventory:updated', this.inventory);
        return true;
    }

    // Remove Item
    removeItem(itemId, amount = 1) {
        if (!this.inventory[itemId] || this.inventory[itemId] < amount) return false;
        this.inventory[itemId] -= amount;
        if (this.inventory[itemId] <= 0) delete this.inventory[itemId];
        this.emit('inventory:updated', this.inventory);
        return true;
    }

    getItemCount(itemId) {
        return this.inventory[itemId] || 0;
    }

    // Equip Logic
    equipArtifact(creatureId, itemId, slot) {
        const itemDef = getArtifactDef(itemId);
        if (!itemDef) return { success: false, reason: "Invalid Item" };
        if (itemDef.type !== slot) return { success: false, reason: "Wrong Slot" };

        if (!this.removeItem(itemId, 1)) return { success: false, reason: "Not enough item" };

        const creature = this.game.creatureManager.getCreatureById(creatureId);
        if (!creature) return { success: false, reason: "Creature not found" };

        // Initialize equipment slot
        if (!creature.equipment) creature.equipment = { weapon: null, armor: null, accessory: null };

        // Unequip existing if any
        if (creature.equipment[slot]) {
            this.addItem(creature.equipment[slot], 1);
        }

        creature.equipment[slot] = itemId;

        // Recalculate Stats
        this.game.creatureManager.recalculateStats(creature);

        this.emit('equipment:changed', { creatureId, slot, item: itemId });
        return { success: true };
    }

    unequipArtifact(creatureId, slot) {
        const creature = this.game.creatureManager.getCreatureById(creatureId);
        if (!creature || !creature.equipment || !creature.equipment[slot]) return { success: false };

        const itemId = creature.equipment[slot];
        this.addItem(itemId, 1);
        creature.equipment[slot] = null;

        // Recalculate Stats
        this.game.creatureManager.recalculateStats(creature);

        this.emit('equipment:changed', { creatureId, slot, item: null });
        return { success: true };
    }

    // Serialization
    getSerializableState() {
        return { inventory: this.inventory };
    }

    loadFromState(state) {
        if (state && state.inventory) {
            this.inventory = state.inventory;
        }
    }
}
