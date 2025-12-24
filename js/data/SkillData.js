/**
 * SkillData.js
 * 전투 중에 사용되는 모든 스킬과 상태이상의 데이터 정의
 */

export const SKILL_TYPES = {
    SINGLE_ATTACK: "SINGLE_ATTACK",
    MULTI_ATTACK: "MULTI_ATTACK",
    ALL_ATTACK: "ALL_ATTACK",
    HEAL: "HEAL",
    SHIELD: "SHIELD",
    BUFF: "BUFF",
    DEBUFF: "DEBUFF"
};

export const TARGET_TYPES = {
    ENEMY_FIRST: "ENEMY_FIRST",
    ENEMY_RANDOM: "ENEMY_RANDOM",
    ENEMY_ALL: "ENEMY_ALL",
    ENEMY_ADVANTAGE: "ENEMY_ADVANTAGE", // 상성 유리 대상 우선
    ALLY_SELF: "ALLY_SELF",
    ALLY_LOWEST_HP: "ALLY_LOWEST_HP",
    ALLY_ALL: "ALLY_ALL"
};

export const STATUS_EFFECTS = {
    BURN: { id: "burn", name: "화상", type: "dot", icon: "🔥", desc: "턴마다 데미지" },
    FREEZE: { id: "freeze", name: "동상", type: "stun", icon: "❄️", desc: "행동 불능 및 속도 감소" },
    STUN: { id: "stun", name: "기절", type: "stun", icon: "💫", desc: "행동 불능" },
    SHOCK: { id: "shock", name: "감전", type: "debuff", icon: "⚡", desc: "방어력 감소 및 연쇄 데미지" },
    SLOW: { id: "slow", name: "둔화", type: "debuff", icon: "🐌", desc: "공격 속도 감소" },
    POISON: { id: "poison", name: "맹독", type: "dot", icon: "🤢", desc: "강력한 지속 데미지" },
    BLEED: { id: "bleed", name: "출혈", type: "dot", icon: "🩸", desc: "행동 시 피해 발생" },
    SILENCE: { id: "silence", name: "침묵", type: "cc", icon: "🤐", desc: "스킬 사용 불가" },
    BLIND: { id: "blind", name: "실명", type: "debuff", icon: "🕶️", desc: "명중률 대폭 하락" },
    ATK_UP: { id: "atk_up", name: "공격력 증가", type: "buff", icon: "⚔️", desc: "공격력 상승" },
    DEF_UP: { id: "def_up", name: "방어력 증가", type: "buff", icon: "🛡️", desc: "방어력 상승" }
};

export const SKILLS = {
    // --- 기본 공격 ---
    DEFAULT_ATTACK: {
        id: "default_attack",
        name: "일반 공격",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_ADVANTAGE,
        power: 1.0,
        description: "적을 공격합니다."
    },

    // --- 시간의 지배자 (크로노스) ---
    TIME_NIGHTMARE: {
        id: "chronos_skill",
        name: "시간의 악몽",
        type: SKILL_TYPES.ALL_ATTACK,
        target: TARGET_TYPES.ENEMY_ALL,
        power: 1.2,
        effects: [{ id: "slow", chance: 1.0, duration: 2 }, { id: "silence", chance: 0.5, duration: 1 }],
        description: "적들의 시간을 늦추고 침묵시킵니다."
    },

    // --- 펜리르 ---
    RAGNAROK_HOWL: {
        id: "fenrir_skill",
        name: "라그나로크 하울",
        type: SKILL_TYPES.MULTI_ATTACK,
        target: TARGET_TYPES.ENEMY_RANDOM,
        power: 1.4,
        hitCount: 2,
        effects: [{ id: "bleed", chance: 0.8, duration: 3 }],
        description: "무작위 적을 물어뜯어 출혈을 일으킵니다."
    },

    // --- 올림푸스 (제우스) ---
    JUDGEMENT_THUNDER: {
        id: "zeus_skill",
        name: "천둥의 심판",
        type: SKILL_TYPES.ALL_ATTACK,
        target: TARGET_TYPES.ENEMY_ALL,
        power: 1.5,
        effects: [{ id: "stun", chance: 0.3, duration: 1 }],
        description: "모든 적에게 강력한 번개를 내리고 확률적으로 기절시킵니다."
    },

    // --- 아스가르드 (오딘) ---
    GUNGNIR_STRIKE: {
        id: "odin_skill",
        name: "궁니르의 일격",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_FIRST,
        power: 3.5,
        effects: [{ id: "shock", chance: 1.0, duration: 2 }],
        description: "단일 대상에게 치명적인 데미지를 주고 감전 상태로 만듭니다."
    },

    // --- 상그릴라 (미호) ---
    SEDUCTION_ORB: {
        id: "miho_skill",
        name: "유혹의 구슬",
        type: SKILL_TYPES.MULTI_ATTACK,
        target: TARGET_TYPES.ENEMY_RANDOM,
        power: 1.2,
        hitCount: 3,
        effects: [{ id: "slow", chance: 0.5, duration: 2 }],
        description: "랜덤한 적들에게 3회의 유혹의 구슬을 던집니다."
    },

    // --- 어비스 (티아마트) ---
    CHAOS_BREATH: {
        id: "tiamat_skill",
        name: "혼돈의 브레스",
        type: SKILL_TYPES.ALL_ATTACK,
        target: TARGET_TYPES.ENEMY_ALL,
        power: 1.8,
        effects: [{ id: "burn", chance: 0.8, duration: 3 }],
        description: "모든 적을 혼돈의 불꽃으로 불태웁니다."
    },

    // --- 힐러/보조 예시 ---
    FAIRY_BLESSING: {
        id: "fairy_skill",
        name: "요정의 축복",
        type: SKILL_TYPES.HEAL,
        target: TARGET_TYPES.ALLY_LOWEST_HP,
        power: 2.0, // ATK 기반 힐량
        description: "체력이 가장 낮은 아군을 회복시킵니다."
    },

    SHIELD_OF_LIGHT: {
        id: "angel_skill",
        name: "성스러운 방벽",
        type: SKILL_TYPES.SHIELD,
        target: TARGET_TYPES.ALLY_ALL,
        power: 1.0, // ATK 기반 쉴드량
        description: "모든 아군에게 성스러운 빛의 방어막을 부여합니다."
    }
};

/**
 * 스킬 ID를 받아 스킬 데이터를 반환
 */
export function getSkillData(skillId) {
    return Object.values(SKILLS).find(s => s.id === skillId) || SKILLS.DEFAULT_ATTACK;
}
