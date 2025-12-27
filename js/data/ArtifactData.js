
export const ARTIFACT_TYPES = {
    WEAPON: 'weapon',
    ARMOR: 'armor',
    ACCESSORY: 'accessory'
};

export const ARTIFACT_DEFS = [
    { id: 'sword_wood', name: 'Wooden Sword', type: 'weapon', stats: { atk: 10 }, rarity: 'Normal' },
    { id: 'sword_iron', name: 'Iron Sword', type: 'weapon', stats: { atk: 50 }, rarity: 'Rare' },
    { id: 'sword_dragon', name: 'Dragon Slayer', type: 'weapon', stats: { atk: 500, crit: 0.1 }, rarity: 'SSR' },

    { id: 'armor_leather', name: 'Leather Armor', type: 'armor', stats: { def: 10, hp: 100 }, rarity: 'Normal' },
    { id: 'armor_plate', name: 'Plate Armor', type: 'armor', stats: { def: 50, hp: 500 }, rarity: 'Rare' },

    { id: 'ring_gold', name: 'Gold Ring', type: 'accessory', stats: { hp: 200, atk: 20 }, rarity: 'Rare' },
    { id: 'ring_oath', name: 'Oath Ring', type: 'accessory', stats: { hp: 1000, atk: 100, spSpeed: 1.2 }, rarity: 'UR' } // Special Item
];

export function getArtifactDef(id) {
    return ARTIFACT_DEFS.find(a => a.id === id);
}
