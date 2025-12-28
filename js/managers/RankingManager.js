
import EventEmitter from '../utils/EventEmitter.js';

export default class RankingManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;
    }

    getLeaderboard(type) {
        let myScore = 0;
        let myName = this.game.authManager.user?.nickname || "Player";

        // Get actual score based on type
        switch (type) {
            case 'stage':
                myScore = this.game.stageManager.currentStageId;
                break;
            case 'tower':
                myScore = this.game.towerManager.bestFloor;
                break;
            case 'prestige':
                myScore = this.game.prestigeManager.totalRebirths;
                break;
        }

        // Generate Fake Leaderboard centered around player
        // But also always include Top 3
        const leaderboard = [];

        // Top 1-3 (High goals)
        leaderboard.push({ rank: 1, name: "Legend_X", score: Math.max(1000, myScore * 2 + 500) });
        leaderboard.push({ rank: 2, name: "NoP2W", score: Math.max(900, myScore * 1.8 + 400) });
        leaderboard.push({ rank: 3, name: "GachaKing", score: Math.max(800, myScore * 1.5 + 300) });

        // If player is far from top 3, show generic rivals above/below
        // Let's pretend player is Rank 42
        const myRank = 42;

        leaderboard.push({ rank: myRank - 1, name: "Rival_A", score: myScore + 15 });
        leaderboard.push({ rank: myRank, name: myName, score: myScore, isMe: true });
        leaderboard.push({ rank: myRank + 1, name: "Newbie_B", score: Math.max(0, myScore - 20) });

        return leaderboard;
    }
    // [저장/로드]
    getSerializableState() {
        return {}; // Persistent data is not yet needed for ranking
    }

    loadFromState(state) {
        // No state to load yet
    }
}
