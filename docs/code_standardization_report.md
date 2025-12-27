
# 📏 Code Standardization Report

**Date**: 2025-12-27
**Auditor**: AntiGravity Agent

This report identifies areas where the current codebase deviates from industry standards or the project's own architectural guidelines (`Architecture V3`), and proposes fixes.

## 1. 🚨 Architecture Violations

### A. View Logic in Managers (MVC Violation)
*   **Standard**: Managers should *only* handle data/logic and emit events. Views listen to events and update DOM.
*   **Violation**:
    *   `TutorialManager.js`: Directly manipulates DOM elements (e.g., highlighting buttons) in some steps.
    *   `AuthManager.js`: Uses `alert()` and `confirm()` which blocks the UI thread.
*   **Fix**: Move all DOM manipulation to `TutorialView.js` or `MainView.js`. Use custom Modal/Toast events instead of native alerts.

### B. Magic Numbers (Hardcoded Constants)
*   **Standard**: All balance constants (costs, rates, multipliers) should be in `js/data/GameConfig.js`.
*   **Violation**:
    *   `CreatureManager.js`: Cost formula `Math.pow(1.1, level)` is hardcoded inline.
    *   `BattleManager.js`: Elemental damage bonus `1.3` (30%) is hardcoded.
*   **Fix**: Extract these to `GameConfig.BATTLE.ELEMENTAL_BONUS` and `GameConfig.GROWTH.COST_MULTIPLIER`.

## 2. 🌐 Localization & String Handling
*   **Standard**: All user-facing text should be in `LanguageData.js` and accessed via `LanguageManager`.
*   **Violation**:
    *   Most code files (`BattleView.js`, `GuildView.js`) contain hardcoded Korean string literals (e.g., `"전투 시작"`, `"골드가 부족합니다"`).
*   **Fix**: Replace literals with keys: `this.game.lang.get('battle_start')`.

## 3. 🧹 Code Cleanliness
*   **Console Logs**: Extensive `console.log` usage for debugging (e.g., `[Battle] Attack!`). This impacts performance in production.
*   **Fix**: Implement a `Logger` utility with log levels (DEBUG, INFO, WARN, ERROR) and disable DEBUG in production.

## 4. 🛡️ Error Handling Patterns
*   **Standard**: Try-Catch blocks should handle specific errors and fail gracefully.
*   **Violation**:
    *   `AudioManager.js`: Simply suppresses errors.
    *   `loadFromState`: Often lacks validation for missing fields in old save data.
*   **Fix**: Add schema validation (using Zod or manual checks) when loading save data to prevent "Current state is null" crashes.

---

## ✅ Recommendation
To bring the project to a "Professional Standard", the **Localization (i18n)** extraction is the most critical next step. Hardcoded strings make the code brittle and hard to expand globally.
