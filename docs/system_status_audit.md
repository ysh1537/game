
# 🔍 System Status Audit & Improvement Plan

**Date**: 2025-12-27
**Scope**: Full Project Codebase Analysis

This document categorizes the current game systems into **Applied (Fully Functional)**, **Partial (Simulated/Local)**, and **Missing (Not Implemented)**, and provides improvement plans for the incomplete areas.

---

## 1. ✅ Fully Applied Systems (제대로 적용된 시스템)
These systems are code-complete, functional, and ready for deployment without major changes.

*   **V3 Architecture**: Event-driven `Game.js` hub, Manager pattern, Component-based UI.
*   **Combat Core**: Turn-based logic, Elemental Advantage (±30%), Skill System, Auto-Battle.
*   **Asset Pipeline**: Dynamic Image Loading, Background generation, BGM/Audio Manager.
*   **Grow & Economy**: Level/Evolution formulas, Save/Load (Local), Offline Rewards, Inventory/Artifacts.
*   **UI Framework**: Tech-Noir Glassmorphism Design, Modal system, Toast notifications, Tab navigation.

## 2. ⚠️ Partial / Simulated Systems (미흡하거나 시뮬레이션 된 시스템)
These systems work mechanically but rely on "Fake Data" or "Local Logic" where a real server/backend is usually required.

### A. PvP Arena (비동기 대전)
*   **Current Status**: Uses `PvPData.js` (Mock JSON) to generate rivals. Results are calculated locally.
*   **Limitation**: No real interaction with other players. Ranks reset locally.
*   **Improvement Plan**:
    1.  **Firebase Firestore Integration**: Store user decks in a `users` collection.
    2.  **Matchmaking Logic**: Query Firestore for users with similar ELO scores.
    3.  **Replay System**: Save battle logs to the cloud to watch how your defense deck performed.

### B. World Boss (레이드)
*   **Current Status**: Boss HP drains via a local simulation timer loop (`simulateGlobalDamage`).
*   **Limitation**: Every player sees a different boss instance; it's not truly shared.
*   **Improvement Plan**:
    1.  **Server-Side HP Tracking**: Use Firebase Realtime Database to sync `BossHP` across all clients.
    2.  **Contribution Ranking**: Store damage logs to award prizes based on actual server-wide rank.

### C. Guild & Chat (커뮤니티)
*   **Current Status**: Local object. You are the only member. Chat is fake logs.
*   **Limitation**: Feels lonely; no social retention value.
*   **Improvement Plan**:
    1.  **Guild Document**: Create `guilds` collection in DB. Supports Join/Leave/Kick.
    2.  **Real-Time Chat**: Use Firebase Realtime DB (or Socket.io if moving to Node server) for global/guild chat.

## 3. ❌ Missing / Not Applied Systems (적용되지 않은 시스템)
These are critical feature gaps identified in the standard mobile RPG model.

### A. Monetization (IAP & Ads)
*   **Current Status**: UI placeholders only (Shop buttons do nothing or mock purchase).
*   **Improvement Plan**:
    1.  **Payment Gateway**: Integrate **PortOne** (formerly I'mport) or **Google Play Billing Library**.
    2.  **Receipt Validation**: Implement a secure server function (Cloud Functions) to verify payments before granting Gems.
    3.  **AdMob/Unity Ads**: Add Web SDK for "Watch Ad" buttons.

### B. Cloud Save (Cross-Device)
*   **Current Status**: `SaveManager.js` has methods like `saveToCloud()` but they are empty or console logs.
*   **Improvement Plan**:
    1.  **Auth Sync**: Enforce Google Login to link data.
    2.  **Blob Storage**: Compress the `localStorage` JSON and upload it to Firestore/Storage on meaningful events (Logout, Purchase).

### C. Security & Anti-Cheat
*   **Current Status**: None. All logic is client-side. Easy to hack via Console.
*   **Improvement Plan**:
    1.  **Server-Authoritative Battle**: (Hard) Move damage calculation to server.
    2.  **Sanity Check**: (Easy) Validate "impossible" results upon submission (e.g., clearing Stage 100 in 2 seconds).

---

## 🚀 Summary & Recommendation
The project is in a **Solid Alpha State**. It plays well as a single-player tycoon/RPG.
To transition to a **Live Service (Beta)**, the priority sequence should be:
1.  **Cloud Save** (Data safety)
2.  **IAP Integration** (Revenue)
3.  **Real PvP/Raid** (Social Retention)
