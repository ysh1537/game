
# 🎮 YESOL Game Project: Feature Summary
> **Version**: Resonance V3 Final
> **Last Updated**: 2025-12-27

This document summarizes the key features and systems implemented in the game project.

---

## 🏗️ Core Architecture (V3)
- **Centralized Management**: `Game` class orchestrates all managers (`BattleManager`, `CreatureManager`, etc.).
- **Event-Driven**: Components communicate via a global `EventEmitter`, reducing coupling.
- **Data Persistence**: LocalStorage-based save/load with support for complex objects (Maps, Sets) via custom serialization.
- **Firebase Integration**: Optional support for Cloud Auth and Firestore (prototype ready).

## ⚔️ Gameplay Systems
### 1. Battle System
- **Turn-Based Combat**: Speed-based turn order logic.
- **Elemental Advantage**: Fire > Nature > Water > Fire, etc. (±30% Damage).
- **Skill System**: Active/Passive skills with level scaling (Damage, Heal, Shield, Buff/Debuff).
- **Modes**:
    - **Stage**: Progressive PvE campaign.
    - **Infinite Tower**: Climbing difficulty challenge.
    - **World Boss**: Global raid boss with cumulative damage tracking.
    - **PvP**: Asynchronous arena battles against other player decks (Simulated).
    - **Auto Battle**: AI-driven combat loop.

### 2. Creature Growth
- **Level Up**: EXP based growth system.
- **Evolution**: Form changes at specific levels provided evolution stones are available.
- **Skill Enhancement**: Consuming duplicate creatures raises skill levels.
- **Affinity (Ho-gam-do)**: Gift system unlocking tiered gallery images and stats.
- **Equipment (Artifacts)**: Equipable items boosting base stats (Atk/Def/HP/Crit).

### 3. Economy & Resources
- **Currencies**: Gold (Basic), Gems (Premium), Ether (Energy).
- **Offline Rewards**: Passive income calculated based on time away.
- **Prestige (Rebirth)**: Reset progress for "Dimension Shards" to buy permanent multipliers.

## 🎨 Visual & Audio
- **Dynamic UI**: "Tech-Noir" / "Cyberpunk" aesthetic with glassmorphism.
- **Asset Pipeline**: AI-integrated generation workflow for backgrounds and character art.
- **Audio Manager**: BGM/SFX management with volume control and error handling for missing assets.
- **Visual Effects**: Critical hit numbers, elemental weakness indicators, skill cut-ins.

## 🤝 Social & LiveOps
- **Guild System**: Create guilds, donate resources, unlock shared buffs.
- **Ranking System**: Leaderboards for Stage, Tower, and Rebirth scores.
- **Mail System**: Admin rewards, welcome packages, and notices.
- **Missions**: Daily quests and long-term achievements.
- **Settings**: Account management, nickname change, data reset, sound config.

## 🛠️ Content Volume
- **Creatures**: 230+ Unique creatures defined (Asgard, Wild, Abyss, Shangrila, etc.).
- **Stages**: Procedurally generated stages with increasing difficulty.
- **Artifacts**: 20+ defined artifact types.

---
**Status**: Ready for Alpha Testing / Polishing Phase.
