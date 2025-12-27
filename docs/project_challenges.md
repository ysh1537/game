
# ⚠️ Key Challenges & Considerations (쟁점 분석)

To fully achieve the project goals, the following two major issues (Pain Points) must be addressed.

## 1. Asset Pipeline Scalability vs. API Limits
> **Conflict**: "Infinite Content Vision" vs. "Resource Constraints"

*   **The Issue**: The project aims for high-quality, continuous asset generation (Goal #1). However, relying on external AI APIs (Gemini/Midjourney) introduces hard constraints like **Rate Limits (Quota)** and **Generation Time**.
*   **Current Status**: We hit "429 Too Many Requests" errors when batch-generating 20+ images.
*   **Implication**: To achieve a true "Live Service" volume (hundreds of new creatures/backgrounds), we cannot rely solely on on-demand generation.
*   **Solution Direction**:
    *   **Tiered Generation**: Focus high-quality generation on SSR/UR only. Use varying styles or lower-cost models for N/R ranks.
    *   **Pre-generation**: Run batch jobs overnight to build a "Stockpile" of assets rather than real-time generation.

## 2. Content Depth vs. System Breadth
> **Conflict**: "Feature Richness" vs. "Game Balance"

*   **The Issue**: We have rapidly implemented valid *structures* for many systems (Guilds, Raids, Towers, PVP) to simulate a full RPG experience (Goal #2). However, filling these systems with **mathematically balanced, fun content** is a different challenge.
*   **Current Status**: 
    *   The "World Boss" is a simulation (HP doesn't drain based on real user population).
    *   "PVP" is against mock data, not real strategies.
*   **Implication**: Without a real player base or deep playtesting, these systems risk feeling "hollow" or "unbalanced" quickly.
*   **Solution Direction**:
    *   **AI Simulation**: Use the `BattleManager` to run thousands of simulated battles (`simulate_all_battles.js`) to auto-tune stats.
    *   **Dynamic Difficulty**: Implement algorithms that adjust Enemy HP/Atk based on the player's actual win rate, rather than static tables.
