
import EventEmitter from '../utils/EventEmitter.js';
import { WORLDS } from '../data/CreatureData.js'; // [NEW] Import World Data

export default class BattleManager extends EventEmitter {
    constructor(game, events, resourceManager, userCreatures) {
        super();
        this.game = game; // Direct injection
        this.events = events;
        this.resourceManager = resourceManager;
        this.userCreatures = userCreatures;
        // this.game = window.game; // REMOVED: Unreliable at init time

        this.inBattle = false;
        this.turnCount = 0;
        this.heroTeam = [];
        this.enemyTeam = [];
        this.activeSynergies = {}; // [NEW] Track active synergies
    }

    startBattle(dungeonId) {
        // Legacy support
        this.startStageBattle(1);
    }

    startStageBattle(stageId) {
        if (this.inBattle) return;
        console.log(`[BattleManager] Starting Stage ${stageId}`);
        this.inBattle = true;
        this.turnCount = 0;
        this.currentStageId = stageId; // Track current stage

        // 1. Hero Team - From Deck
        const heroTeamRaw = this.game.deckManager.getActiveTeam();

        // Filter out nulls just in case
        const validHeroes = heroTeamRaw ? heroTeamRaw.filter(c => c) : [];

        if (validHeroes.length === 0) {
            alert("출전할 크리처가 없습니다! [팀] 탭에서 덱을 먼저 편성해주세요."); // Direct feedback
            this.inBattle = false; // Reset state
            return;
        }
        this.heroTeam = validHeroes.map(c => this.createBattleEntity(c, true));

        // 2. Enemy Team (From Stage Data)
        this.enemyTeam = [];
        const stageInfo = this.game.stageManager.getStageInfo(stageId);

        if (stageInfo && stageInfo.enemies) {
            this.enemyTeam = stageInfo.enemies.map((res, idx) => {
                return {
                    isHero: false,
                    id: `enemy_stage_${stageId}_${idx}`,
                    name: res.name,
                    maxHp: res.hp,
                    hp: res.hp,
                    atk: res.atk,
                    def: res.def,
                    image: res.image,
                    level: res.level,
                    rarity: stageInfo.isBoss ? 'SSR' : 'Normal' // [NEW] Bosses get SSR glow
                };
            });
            this.enemyName = stageInfo.name;
        } else {
            // Fallback
            this.enemyTeam.push(this.spawnEnemy('default'));
            this.enemyName = "Unknown Stage";
        }

        this.startBattleProcess(false);
    }

    startPvP(target) {
        if (this.inBattle) return;
        console.log(`[BattleManager] Starting PvP with target: ${target}`);
        this.inBattle = true;
        this.turnCount = 0;

        const heroTeamRaw = this.game.deckManager.getActiveTeam();
        if (!heroTeamRaw || heroTeamRaw.length === 0) {
            this.endBattle(false, "대표 덱에 크리처가 없습니다!");
            return;
        }
        this.heroTeam = heroTeamRaw.map(c => this.createBattleEntity(c, true));

        let enemyTeam = [];

        // Dynamic Import to avoid circular dependency issues if any
        import('../data/PvPData.js').then(module => {
            const player = module.getMockPlayerById(target);
            if (player) {
                // Generate 5 units based on rank
                for (let i = 0; i < 5; i++) enemyTeam.push(this.spawnMockFriend(player.rank + "_" + i));
                this.enemyName = player.name;
            } else {
                for (let i = 0; i < 5; i++) enemyTeam.push(this.spawnMockFriend(target + "_" + i));
                this.enemyName = "Unknown Rival";
            }
            this.enemyTeam = enemyTeam;
            this.startBattleProcess(true);
        }).catch(err => {
            console.warn("PvPData error", err);
            for (let i = 0; i < 5; i++) enemyTeam.push(this.spawnMockFriend(target + "_" + i));
            this.enemyName = "Unknown Rival";
            this.enemyTeam = enemyTeam;
            this.startBattleProcess(true);
        });
    }

    startBattleProcess(isPvP = false) {
        this.isPvP = isPvP;
        // Use global events for Scene communication
        this.events.emit('battle:start', {
            heroTeam: this.heroTeam,
            enemyTeam: this.enemyTeam,
            isPvP: this.isPvP,
            enemyName: this.enemyName
        });

        // [NEW] Calculate and Apply Synergies
        this.calculateSynergies();
        this.applySynergyEffects();

        this.nextTurn();
    }

    spawnMockFriend(code) {
        // Hash code to pick a random monster type
        const hash = code.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        const types = [
            { name: "라이벌의 드래곤", img: "images/creature_dragon_fire.png", apk: 25 },
            { name: "친구의 늑대왕", img: "images/creature_wolf_dire.png", apk: 20 },
            { name: "랭커의 골렘", img: "images/creature_golem_mud.png", apk: 30 }
        ];
        const type = types[hash % types.length];

        return {
            isHero: false,
            id: `enemy_pvp_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
            name: type.name,
            maxHp: 300 + (hash % 100),
            hp: 300 + (hash % 100),
            atk: type.apk,
            def: 10,
            image: type.img,
            level: 5
        };
    }

    createBattleEntity(creature, isHero) {
        return {
            isHero: isHero,
            uid: creature.instanceId, // [FIX] Use instanceId for logic 
            id: creature.instanceId, // Keep for compatibility if needed, but ensure it receives instanceId
            name: creature.def.name,
            maxHp: creature.stats.hp,
            hp: creature.currentHp,
            atk: Math.floor(creature.stats.atk * (1 + (isHero ? this.game.getDirectorEffect('battle_atk') : 0))),
            def: creature.stats.def,
            image: creature.def.image,
            level: creature.level,
            rarity: creature.def.rarity,
            world: creature.def.world || 'WILD', // [NEW] Default to WILD
            elements: creature.def.elements || [] // [NEW]
        };
    }

    spawnEnemy(dungeonId) {
        // Simple mock enemy
        return {
            isHero: false,
            id: `enemy_mob_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
            name: "광산 코볼트",
            maxHp: 200,
            hp: 200,
            atk: 15,
            def: 5,
            image: "images/creature_goblin_scout.png",
            level: 3
        };
    }

    nextTurn() {
        if (!this.inBattle) return;
        this.turnCount++;

        // Team Battle Logic: Simply Attack Random Alive Target
        const heroAlive = this.heroTeam.some(u => u.hp > 0);
        const enemyAlive = this.enemyTeam.some(u => u.hp > 0);

        if (!heroAlive || !enemyAlive) {
            this.checkWinCondition();
            return;
        }

        // Simulate One Round of Attacks
        setTimeout(() => {
            if (!this.inBattle) return;
            this.processTeamAttack(this.heroTeam, this.enemyTeam);

            if (this.checkWinCondition()) return;

            setTimeout(() => {
                if (!this.inBattle) return;
                this.processTeamAttack(this.enemyTeam, this.heroTeam);

                if (this.checkWinCondition()) return;
                this.nextTurn();
            }, 1500); // Slower pacing
        }, 1500); // Slower pacing
    }

    processTeamAttack(attackers, defenders) {
        attackers.forEach(attacker => {
            if (attacker.hp <= 0) return;
            const aliveDefenders = defenders.filter(d => d.hp > 0);
            if (aliveDefenders.length === 0) return;
            // Basic AI
            const target = aliveDefenders[Math.floor(Math.random() * aliveDefenders.length)];
            this.attack(attacker, target);
        });
    }

    attack(attacker, defender) {
        if (attacker.hp <= 0 || defender.hp <= 0) return;

        let damage = Math.max(1, attacker.atk - (defender.def * 0.5));

        // [NEW] Elemental Logic
        const advantage = this.checkElementalAdvantage(attacker.elements, defender.elements);
        let isCrit = false;
        let isGlancing = false;

        if (advantage === 1) { // Advantage
            damage *= 1.5;
            // CC Logic could go here
        } else if (advantage === -1) { // Disadvantage
            damage *= 0.7;
            isGlancing = Math.random() < 0.3; // 30% Miss chance
        }

        // [NEW] Synergy Logic (Olympus Crit)
        if (attacker.isHero && this.activeSynergies[WORLDS.OLYMPUS] >= 2) {
            const critRate = 0.15 + (this.activeSynergies[WORLDS.OLYMPUS] >= 4 ? 0.0 : 0); // 15% base
            if (Math.random() < critRate) {
                isCrit = true;
                const critDmg = 1.5 + (this.activeSynergies[WORLDS.OLYMPUS] >= 4 ? 0.6 : 0); // +60% at 4set
                damage *= critDmg;
            }
        }
        // [NEW] Olympus God Tier (6 set)
        if (attacker.isHero && this.activeSynergies[WORLDS.OLYMPUS] >= 6) {
            isCrit = true;
            damage *= 2.5; // Massive boost
            // Penetrate def
            damage += (defender.def * 0.5);
        }

        if (isGlancing) {
            damage = 0; // Miss
        }

        defender.hp -= damage;

        // [NEW] Synergy Logic (Abyss Terror - DoT or Debuff?) 
        // For simplicity, Abyss just does extra damage on hit if set 4
        if (attacker.isHero && this.activeSynergies[WORLDS.ABYSS] >= 4) {
            defender.hp -= (attacker.atk * 0.2); // Procs extra damage
        }

        this.events.emit('battle:action', {
            type: 'attack',
            attackerId: attacker.id,
            defenderId: defender.id,
            damage: Math.floor(damage),
            isCrit: isCrit,
            isGlancing: isGlancing,
            currentHp: defender.hp,
            maxHp: defender.maxHp
        });
    }

    calculateSynergies() {
        this.activeSynergies = {};
        this.heroTeam.forEach(unit => {
            if (unit.world) {
                this.activeSynergies[unit.world] = (this.activeSynergies[unit.world] || 0) + 1;
            }
        });
        console.log("[BattleManager] Active Synergies:", this.activeSynergies);
    }

    applySynergyEffects() {
        // 1. Asgard (Tenacity) -> HP Boost
        if (this.activeSynergies[WORLDS.ASGARD] >= 2) {
            this.heroTeam.forEach(hero => {
                hero.maxHp *= 1.2; // +20% HP
                hero.hp *= 1.2;
            });
            console.log("Applied Asgard(2) Buff: HP +20%");
        }

        // 2. Abyss (Terror) -> Enemy Def Down (Global)
        if (this.activeSynergies[WORLDS.ABYSS] >= 2) {
            this.enemyTeam.forEach(enemy => {
                enemy.def *= 0.8; // -20% Def
            });
            console.log("Applied Abyss(2) Debuff: Enemy Def -20%");
        }

        // 6-Set God Effects (Start of Battle)
        // Abyss God: Instant Kill 1 enemy
        if (this.activeSynergies[WORLDS.ABYSS] >= 6) {
            if (this.enemyTeam.length > 0) {
                const luckyTarget = this.enemyTeam[Math.floor(Math.random() * this.enemyTeam.length)];
                luckyTarget.hp = 0;
                console.log(`[Abyss God] Instant Killed ${luckyTarget.name}`);
            }
        }
    }

    checkElementalAdvantage(atkElems, defElems) {
        if (!atkElems || !defElems) return 0;
        // Simple 1-first match for now
        const A = atkElems[0];
        const D = defElems[0]; // Logic could be more complex

        const WIN = {
            'Fire': 'Nature', 'Nature': 'Water', 'Water': 'Fire',
            'Light': 'Dark', 'Dark': 'Light' // Mutual destruction?
        };
        const LOSE = {
            'Nature': 'Fire', 'Water': 'Nature', 'Fire': 'Water'
        };

        if (WIN[A] === D) return 1;
        if (LOSE[A] === D) return -1;
        return 0;
    }

    checkWinCondition() {
        if (!this.inBattle) return false;

        // Ensure teams differ from initial empty state to avoid instant end
        if (this.turnCount === 0 && this.heroTeam.length > 0 && this.enemyTeam.length > 0) return false;

        const heroAlive = this.heroTeam.some(c => c.hp > 0);
        const enemyAlive = this.enemyTeam.some(c => c.hp > 0);

        if (!heroAlive) {
            this.endBattle(false, "전멸했습니다...");
            return true;
        }
        if (!enemyAlive) {
            this.endBattle(true, "승리!");
            return true;
        }
        return false;
    }

    endBattle(isWin, reason) {
        this.inBattle = false;

        let earnedGold = 0;
        let earnedExp = 0;

        if (isWin) {
            // Calculate Dynamic Rewards based on Stage
            if (this.currentStageId) {
                const stageInfo = this.game.stageManager.getStageInfo(this.currentStageId);
                if (stageInfo) {
                    earnedGold = stageInfo.rewardGold || 100;
                    earnedExp = stageInfo.rewardExp || 50;
                }
            } else if (this.isPvP) {
                // PvP Rewards (Fixed or rank based)
                earnedGold = 200;
                earnedExp = 20;
            } else {
                // Fallback
                earnedGold = 100;
                earnedExp = 50;
            }

            // Apply Rewards
            this.resourceManager.addGold(earnedGold);

            // Reward XP to participating creatures
            if (this.heroTeam) {
                this.heroTeam.forEach(hero => {
                    if (hero.uid) {
                        this.game.creatureManager.addExp(hero.uid, earnedExp);
                    }
                });
            }

            // Unlocking Next Stage logic
            if (this.currentStageId) {
                if (this.currentStageId === this.game.stageManager.getMaxStage()) {
                    this.game.stageManager.unlockNextStage();
                }

                // [NEW] 자동 연속 전투
                if (this.isAutoBattle) {
                    const nextStage = this.currentStageId + 1;
                    if (nextStage <= this.game.stageManager.getMaxStage() + 1) { // 열린 스테이지까지
                        setTimeout(() => {
                            if (this.isAutoBattle) this.startStageBattle(nextStage);
                        }, 3000); // 3초 대기 후 다음 전투
                    }
                }
            }
        } else {
            // 패배 시 자동 전투 중단
            this.isAutoBattle = false;
        }

        // [NEW] Holistic Event for QuestManager
        this.events.emit('battle:completed', {
            isWin,
            stageId: this.currentStageId,
            isPvP: !this.currentStageId,
            rewards: { gold: earnedGold, exp: earnedExp } // Pass actual rewards
        });

        const lastStageId = this.currentStageId; // Preserve for event
        this.currentStageId = null;

        this.events.emit('battle:end', {
            isWin,
            reason,
            rewards: { gold: earnedGold, exp: earnedExp },
            isAutoBattle: this.isAutoBattle
        });
    }

    setAutoBattle(enabled) {
        this.isAutoBattle = enabled;
        console.log(`[BattleManager] Auto Battle: ${enabled}`);
    }
}
