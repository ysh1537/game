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
        LOBBY: "assets/sounds/bgm/lobby_theme.mp3",
        SUMMON: "assets/sounds/bgm/summon_mystic.mp3",
        LAB: "assets/sounds/bgm/lab_tech.mp3",
        BATTLE: "assets/sounds/bgm/battle_epic.mp3"
    },

    // 효과음 (UI)
    UI: {
        CLICK: "assets/sounds/sfx/ui_click.mp3",
        HOVER: "assets/sounds/sfx/ui_hover.mp3",
        CONFIRM: "assets/sounds/sfx/ui_confirm.mp3",
        ERROR: "assets/sounds/sfx/ui_error.mp3",
        POPUP_OPEN: "assets/sounds/sfx/ui_popup_open.mp3",
        REWARD: "assets/sounds/sfx/ui_reward.mp3"
    },

    // 효과음 (인게임)
    FX: {
        SUMMON_START: "assets/sounds/sfx/fx_summon_start.mp3",
        SUMMON_REVEAL: "assets/sounds/sfx/fx_summon_reveal.mp3",
        SUMMON_SSR: "assets/sounds/sfx/fx_summon_ssr_flash.mp3",
        LEVEL_UP: "assets/sounds/sfx/fx_levelup.mp3",
        UPGRADE_SUCCESS: "assets/sounds/sfx/fx_upgrade_success.mp3"
    },

    // 보이스 (내레이션/캐릭터)
    VOICE: {
        WELCOME: "assets/sounds/voice/welcome_operator.mp3",
        SUMMON_GREETING: "assets/sounds/voice/summon_greeting.mp3",
        LEVEL_MAX: "assets/sounds/voice/level_max.mp3"
    }
};
