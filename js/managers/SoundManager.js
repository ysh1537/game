/**
 * SoundManager.js
 * Handles Background Music (BGM) and Sound Effects (SFX)
 */
import { SOUNDS, SOUND_CONFIG } from '../data/SoundData.js';

/**
 * SoundManager.js
 * 게임의 모든 오디오를 총괄하는 매니저.
 * BGM(배경음)과 SFX(효과음), Voice(보이스)를 독립적인 채널로 관리.
 */
class SoundManager {
    constructor() {
        this.bgmAudio = new Audio();
        this.bgmAudio.loop = true;

        this.volumes = {
            bgm: SOUND_CONFIG.DEFAULT_BGM_VOLUME,
            sfx: SOUND_CONFIG.DEFAULT_SFX_VOLUME,
            voice: SOUND_CONFIG.DEFAULT_VOICE_VOLUME
        };

        this.isMuted = false;
        this.currentBgmKey = null;

        // 초기화
        this.bgmAudio.volume = this.volumes.bgm;
    }

    /**
     * 배경음악 재생 (Fade In/Out 지원 예정)
     * @param {string} bgmKey - SOUNDS.BGM의 키 (예: 'LOBBY')
     */
    playBGM(bgmKey) {
        if (this.isMuted) return;
        if (this.currentBgmKey === bgmKey) return; // 이미 재생 중이면 무시

        const path = SOUNDS.BGM[bgmKey];
        if (!path) {
            console.warn(`[Sound] BGM not found for key: ${bgmKey}`);
            return;
        }

        // 이전 BGM 정지 (TODO: Fade Out)
        this.bgmAudio.pause();

        // 새 BGM 설정
        this.bgmAudio.src = path;
        this.bgmAudio.play().catch(e => console.log(`[Sound] Auto-play blocked: ${e.message}`));

        this.currentBgmKey = bgmKey;
        console.log(`[Sound] Playing BGM: ${bgmKey}`);
    }

    /**
     * 효과음 재생 (Fire and Forget)
     * @param {string} sfxKey - SOUNDS.UI 또는 SOUNDS.FX의 키 (예: 'CLICK')
     */
    playSFX(sfxKey) {
        if (this.isMuted) return;

        // UI와 FX 모두 검색
        const path = SOUNDS.UI[sfxKey] || SOUNDS.FX[sfxKey];

        if (!path) {
            // 키가 없을 경우 경로 자체를 넘겼는지 확인 (유연성)
            if (sfxKey.includes('/')) {
                this._playOneShot(sfxKey, this.volumes.sfx);
            } else {
                console.warn(`[Sound] SFX not found for key: ${sfxKey}`);
            }
            return;
        }

        this._playOneShot(path, this.volumes.sfx);
    }

    /**
     * 보이스 재생
     * @param {string} voiceKey 
     */
    playVoice(voiceKey) {
        if (this.isMuted) return;

        const path = SOUNDS.VOICE[voiceKey];
        if (!path) {
            console.warn(`[Sound] Voice not found for key: ${voiceKey}`);
            return;
        }

        this._playOneShot(path, this.volumes.voice);
    }

    /**
     * 내부용: 일회성 오디오 재생
     */
    _playOneShot(path, volume) {
        const audio = new Audio(path);
        audio.volume = volume;
        audio.play().catch(e => {
            // 짧은 효과음 재생 실패는 로그를 남기지 않음 (DOMException 방지)
        });
    }

    setVolume(type, value) {
        if (this.volumes[type] !== undefined) {
            this.volumes[type] = Math.max(0, Math.min(1, value));
            if (type === 'bgm') {
                this.bgmAudio.volume = this.volumes.bgm;
            }
            console.log(`[Sound] Set ${type} volume to ${value}`);
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.bgmAudio.pause();
        } else {
            if (this.currentBGM) this.bgmAudio.play();
        }
        return this.isMuted;
    }

    setVolume(val) {
        this.volume = val;
        this.bgmAudio.volume = val;
        // Save to Settings
        if (window.SaveManager) {
            window.SaveManager.data.settings.volume = Math.floor(val * 100);
            window.SaveManager.save();
        }
    }
}

// Global Instance
window.SoundManager = new SoundManager();
