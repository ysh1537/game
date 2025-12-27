
# 🛠️ Monetization Implementation Plan (5 Solutions)

Based on the `Monetization Strategy`, here are 5 concrete technical solutions (Action Items) to implement these features into the `YESOL Resonance V3` project.

## 1. Implement "Limited-Time Starter Bundle" UI
> **Target Strategy**: Competitive Advantage & Efficiency

*   **Concept**: A high-value package (SSR Hero + 100k Gold) available only for 24 hours after account creation.
*   **Technical Implementation**:
    *   **Data**: Add `starter_pack_expiry` timestamp to `SaveManager` (User Data).
    *   **Logic**: In `ShopManager`, check `if (Date.now() < user.starter_pack_expiry)`.
    *   **UI**: Add a glowing, countdown timer banner in `ShopView.js` (`#shop-banner-starter`).
    *   **Effect**: Creates immediate urgency and converts F2P users to paying users early.

## 2. Add "Gacha Pity System" Logic
> **Target Strategy**: Gacha (Safety Net)

*   **Concept**: Guarantee an SSR unit if the player hasn't received one in 50 pulls.
*   **Technical Implementation**:
    *   **Data**: Add `pityCounter` field to `CreatureManager` (or `InventoryManager`).
    *   **Logic**: In `CreatureManager.summon()`, increment `pityCounter`.
        *   If `pityCounter >= 50` and the roll isn't SSR, **force** the result to be SSR and reset counter.
        *   If natural SSR is pulled, reset `pityCounter` to 0.
    *   **UI**: Display "Guaranteed SSR in X pulls" on `SummonView.js`.

## 3. Create "Ad Watch" Reward Hook
> **Target Strategy**: Ad Integration (Free Stuff)

*   **Concept**: Watch a 30s video to get Free Gems.
*   **Technical Implementation**:
    *   **External SDK**: Integrate Google AdMob or Unity Ads SDK (for mobile wrapper).
    *   **Logic**: Create `AdManager.js`.
        *   Method `showRewardAd()` returns a Promise.
        *   On success, call `ResourceManager.addGem(50)`.
    *   **Cooldown**: Store `lastAdWatchTime` in `localStorage` to limit to 5 times/day.

## 4. Design "Affinity Gift Shop" Tab
> **Target Strategy**: Emotional Monetization

*   **Concept**: A dedicated shop section for items that boost affinity (Cakes, Flowers).
*   **Technical Implementation**:
    *   **Data**: Define `ItemData.js` with types `gift_small` (+50pt), `gift_medium` (+200pt).
    *   **Logic**: Update `AffinityManager.giveGift()` to consume these specific item IDs.
    *   **UI**: Add a `Gifts` tab in `ShopView.js`.
    *   **Visual**: Show a "Heart Explosion" effect (`EffectManager`) when a premium gift is used.

## 5. Implement "Battle Pass" (Season Pass) System
> **Target Strategy**: Retention & Time Solvers

*   **Concept**: A 30-day season where players earn points for daily tasks, unlocking tiers. "Premium Pass" buyers get double rewards.
*   **Technical Implementation**:
    *   **Data**: `PassManager.js` tracks `seasonId`, `currentPoints`, `isPremiumUnlocked`.
    *   **Logic**: Hook into `QuestManager`; when a daily quest is done, add Pass Points.
    *   **UI**: Create `PassView.js` showing a two-row progress bar (Free vs Premium).
    *   **Reward**: "Exclusive Skin" or "UR Guarantee" at Level 30.
