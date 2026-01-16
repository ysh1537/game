/**
 * AudioManager.js
 * BGM 및 효과음을 관리하는 오디오 매니저
 * 
 * 사용법:
 * - game.audioManager.playBGM('lobby') // BGM 재생
 * - game.audioManager.playSFX('click') // 효과음 재생
 * - game.audioManager.stopBGM() // BGM 정지
 */

export default class AudioManager {
    constructor(game) {
        this.game = game;
        this.bgm = null;
        this.bgmVolume = 0.5;
        this.sfxVolume = 0.7;
        this.isMuted = false;
        this.currentBGMId = null;

        // BGM 트랙 정의 (파일이 준비되면 경로 수정)
        this.bgmTracks = {
            'lobby': 'assets/sounds/bgm/lobby_theme.mp3',
            'battle': 'assets/sounds/bgm/battle_epic.mp3',
            'boss': 'assets/sounds/bgm/boss.mp3',
            'victory': 'assets/sounds/bgm/victory.mp3',
            'defeat': 'assets/sounds/bgm/defeat.mp3'
        };

        // 효과음 정의
        this.sfxTracks = {
            'click': 'assets/sounds/sfx/click.mp3',
            'summon': 'assets/sounds/sfx/summon.mp3',
            'skill': 'assets/sounds/sfx/skill.mp3',
            'hit': 'assets/sounds/sfx/hit.mp3',
            'critical': 'assets/sounds/sfx/critical.mp3',
            'levelup': 'assets/sounds/sfx/levelup.mp3',
            'evolve': 'assets/sounds/sfx/evolve.mp3',
            'gold': 'assets/sounds/sfx/gold.mp3',
            'error': 'assets/sounds/sfx/error.mp3'
        };

        // 오디오 컨텍스트 초기화 (사용자 인터랙션 후)
        this._audioContext = null;
        this._unlocked = false;

        this._bindEvents();
    }

    _bindEvents() {
        // 첫 클릭 시 오디오 컨텍스트 활성화
        const unlock = () => {
            if (!this._unlocked) {
                this._audioContext = new (window.AudioContext || window.webkitAudioContext)();
                this._unlocked = true;
                console.log('[AudioManager] Audio context unlocked');
                document.removeEventListener('click', unlock);

                // Resume BGM if needed
                if (this.currentBGMId && !this.bgm) {
                    this.playBGM(this.currentBGMId);
                }
            }
        };
        document.addEventListener('click', unlock);

        // 게임 이벤트와 연동
        this.game.events.on('ui:tabSwitched', (tabId) => {
            // 탭에 따라 BGM 변경
            if (this.game.battleManager.inBattle) return; // 전투 중에는 탭 전환 BGM 무시

            if (tabId === 'home' || tabId === 'team' || tabId === 'shop' || tabId === 'research' || tabId === 'mission') {
                // Common Lobby BGM
                this.playBGM('lobby');
            }
            // Add other themes if available, e.g. 'expedition'
        });

        this.game.events.on('battle:start', ({ mode }) => {
            this.playBGM(mode === 'boss' ? 'boss' : 'battle');
        });

        this.game.events.on('battle:end', ({ isWin }) => {
            this.playBGM(isWin ? 'victory' : 'defeat');
            // Return to lobby music handled by UI flow usually, but we can auto-switch after stinger
        });

        this.game.events.on('summon:complete', () => this.playSFX('summon'));
        this.game.events.on('creature:leveledUp', () => this.playSFX('levelup'));
        this.game.events.on('evolve:success', () => this.playSFX('evolve'));

        // [NEW] Battle SFX Binding
        this.game.events.on('battle:action', (data) => {
            if (data.type === 'attack') {
                if (data.isCrit) this.playSFX('critical');
                else if (data.isMiss) this.playSFX('click'); // Miss sound?
                else this.playSFX('hit');
            } else if (data.type === 'skill') {
                this.playSFX('skill');
            }
        });
    }

    /**
     * BGM 재생
     * @param {string} trackId - BGM 트랙 ID
     */
    playBGM(trackId) {
        if (this.isMuted) return;
        if (this.currentBGMId === trackId) return; // 이미 재생 중이면 무시

        const trackPath = this.bgmTracks[trackId];
        if (!trackPath) return; // Silent return if disabled

        this.stopBGM();

        try {
            this.bgm = new Audio(trackPath);
            this.bgm.volume = this.bgmVolume;
            this.bgm.loop = true;

            // Missing File Detection
            this.bgm.addEventListener('error', (e) => {
                console.warn(`[AudioManager] File broken, disabling BGM: ${trackId}`);
                this.bgmTracks[trackId] = null;
            });

            this.bgm.play().catch(e => {
                // Auto-play policy or load error
            });

            this.currentBGMId = trackId;
        } catch (e) {
            console.warn('[AudioManager] BGM load failed:', e.message);
        }
    }

    /**
     * BGM 정지
     */
    stopBGM() {
        if (this.bgm) {
            this.bgm.pause();
            this.bgm.currentTime = 0;
            this.bgm = null;
            this.currentBGMId = null;
        }
    }

    /**
     * 효과음 재생
     * @param {string} sfxId - 효과음 ID
     */
    playSFX(sfxId) {
        if (this.isMuted) return;

        const trackPath = this.sfxTracks[sfxId];
        if (!trackPath) return;

        try {
            const sfx = new Audio(trackPath);
            sfx.volume = this.sfxVolume;

            sfx.addEventListener('error', () => {
                // Only log once per session per track? 
                // Let's just disable it.
                this.sfxTracks[sfxId] = null;
            });

            sfx.play().catch(e => {
                // Ignore autoplay errors
            });
        } catch (e) {
            // Ignore
        }
    }

    /**
     * 음소거 토글
     */
    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopBGM();
        } else {
            this.playBGM('lobby');
        }
        console.log(`[AudioManager] Muted: ${this.isMuted}`);
        if (!this.isMuted) this.playSFX('click');
        return this.isMuted;
    }

    /**
     * BGM 볼륨 설정
     * @param {number} volume - 0.0 ~ 1.0
     */
    setBGMVolume(volume) {
        this.bgmVolume = Math.max(0, Math.min(1, volume));
        if (this.bgm) {
            this.bgm.volume = this.bgmVolume;
        }
    }

    /**
     * 효과음 볼륨 설정
     * @param {number} volume - 0.0 ~ 1.0
     */
    setSFXVolume(volume) {
        this.sfxVolume = Math.max(0, Math.min(1, volume));
    }
}
