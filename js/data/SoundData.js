/**
 * SoundData.js
 * 게임 내 모든 오디오 리소스의 경로와 설정을 관리하는 데이터 파일.
 * 하드코딩 방지 및 중앙 관리를 위해 사용.
 */

export const SOUND_CONFIG = {
    DEFAULT_BGM_VOLUME: 0.5,
    DEFAULT_SFX_VOLUME: 0.7,
    DEFAULT_VOICE_VOLUME: 0.8,
    FADE_DURATION: 1000 // ms
};

export const SOUNDS = {
    // 배경음악 (Loop 필수)
    BGM: {
        LOBBY: "assets/sounds/bgm/lobby_theme.wav",
        SUMMON: "assets/sounds/bgm/summon_mystic.wav",
        LAB: "assets/sounds/bgm/lab_tech.wav",
        BATTLE: "assets/sounds/bgm/battle_epic.wav"
    },

    // 효과음 (UI)
    UI: {
        CLICK: "assets/sounds/sfx/ui_click.wav",
        HOVER: "assets/sounds/sfx/ui_hover.wav",
        CONFIRM: "assets/sounds/sfx/ui_confirm.wav",
        ERROR: "assets/sounds/sfx/ui_error.wav",
        POPUP_OPEN: "assets/sounds/sfx/ui_popup_open.wav",
        REWARD: "assets/sounds/sfx/ui_reward.wav"
    },

    // 효과음 (인게임)
    FX: {
        SUMMON_START: "assets/sounds/sfx/fx_summon_start.wav",
        SUMMON_REVEAL: "assets/sounds/sfx/fx_summon_reveal.wav",
        SUMMON_SSR: "assets/sounds/sfx/fx_summon_ssr_flash.wav",
        LEVEL_UP: "assets/sounds/sfx/fx_levelup.wav",
        UPGRADE_SUCCESS: "assets/sounds/sfx/fx_upgrade_success.wav"
    },

    // 보이스 (내레이션/캐릭터)
    VOICE: {
        WELCOME: "assets/sounds/voice/welcome_operator.wav",
        SUMMON_GREETING: "assets/sounds/voice/summon_greeting.wav",
        LEVEL_MAX: "assets/sounds/voice/level_max.wav"
    }
};
