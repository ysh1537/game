/**
 * @file main.js
 * @description 게임의 엔트리 포인트. 모든 View 및 Manager를 초기화하고 연결합니다.
 */
import Game from './core/Game.js';
import { LangManager } from './managers/LanguageManager.js';
import UIManager from './managers/UIManager.js';

// 각 화면별 View 임포트
import AuthView from './ui/AuthView.js';
import CreatureView from './ui/CreatureView.js';
import SummonView from './ui/SummonView.js';
import ExpeditionView from './ui/ExpeditionView.js';
import ResearchView from './ui/ResearchView.js';
import TeamView from './ui/TeamView.js';
import MissionView from './ui/MissionView.js';
import ShopView from './ui/ShopView.js';
import BattleView from './ui/BattleView.js';
import PrestigeView from './ui/PrestigeView.js'; // [NEW]

document.addEventListener('DOMContentLoaded', () => {
    console.log("Multiverse Creature Lab - Phase 4 Refactored");

    // 1. 핵심 인스턴스 초기화
    const game = new Game();
    const langManager = new LangManager();
    const uiManager = new UIManager(game);

    // 2. 언어 설정 연동 (생성자에서 초기화됨)
    // langManager.init();

    // 3. 화면별 View 인스턴스 생성 및 초기화
    // (AuthView는 LangManager가 필요하므로 별도 전달)
    const views = {
        auth: new AuthView(game, uiManager, langManager),
        creature: new CreatureView(game, uiManager),
        summon: new SummonView(game, uiManager),
        expedition: new ExpeditionView(game, uiManager),
        research: new ResearchView(game, uiManager),
        team: new TeamView(game, uiManager),
        mission: new MissionView(game, uiManager),
        shop: new ShopView(game, uiManager),
        battle: new BattleView(game, uiManager),
        prestige: new PrestigeView(game, uiManager) // [NEW]
    };

    // 모든 뷰 초기화
    Object.values(views).forEach(view => {
        if (typeof view.init === 'function') {
            view.init();
        }
    });

    // 4. 전역 접근성 확보 (디버그 및 상위 로직용)
    window.uiManager = uiManager;
    window.views = views;

    // 5. 게임 엔진 초기화
    // (주의: UI가 준비된 후 game.init을 호출하여 초기 렌더링이 정상 작동하게 함)
    game.init();

    // 6. 리소스바 실시간 동기화 (전역 리스너)
    game.resourceManager.on('resources:changed', (res) => {
        if (uiManager.ui.goldDisplay) uiManager.ui.goldDisplay.innerText = res.gold.toLocaleString();
        if (uiManager.ui.gemDisplay) uiManager.ui.gemDisplay.innerText = res.gem.toLocaleString();
        if (uiManager.ui.energyDisplay) {
            uiManager.ui.energyDisplay.innerText = `${res.energy} / ${res.maxEnergy}`;
        }
    });

    // 7. 시스템 설정 모달 등 기타 전역 UI 제어
    initSystemOverlay();

    // [NEW] 8. 로비 캐릭터 인터랙션 초기화
    initLobbyInteraction(game);
});

/**
 * 로비 캐릭터 인터랙션 및 표시 제어
 */
function initLobbyInteraction(game) {
    const wrapper = document.getElementById('lobby-character-wrapper');
    const img = document.getElementById('lobby-character-img');
    const speechBubble = document.getElementById('lobby-speech-bubble');
    const speechText = document.getElementById('lobby-speech-text');

    if (!wrapper || !img) return;

    // 1. 대표 크리처 로드 (없으면 기본값 or 덱 1번)
    function updateLobbyCharacter() {
        // DeckManager에서 첫 번째 덱의 첫 번째 슬롯 가져오기
        const mainDeck = game.deckManager.decks[0]; // Assuming 0 is Main
        if (!mainDeck) return;

        const leaderId = mainDeck[0]; // UID
        if (!leaderId) return;

        const creature = game.creatureManager.getCreature(leaderId);
        if (creature) {
            img.src = creature.def.image;
            // 애니메이션 리셋
            img.style.animation = 'none';
        }
    }

    // 초기 로드 및 변경 감지 (간단히 3초마다 체크 or 이벤트 리스너)
    updateLobbyCharacter();
    game.events.on('deck:updated', updateLobbyCharacter);

    // 2. 터치 핸들러
    const parts = ['head', 'chest', 'legs'];
    parts.forEach(part => {
        const hitbox = document.getElementById(`lobby-hitbox-${part}`);
        if (hitbox) {
            hitbox.onclick = () => {
                // 현재 리더 다시 조회
                const mainDeck = game.deckManager.decks[0];
                const leaderId = mainDeck ? mainDeck[0] : null;
                const creature = leaderId ? game.creatureManager.getCreature(leaderId) : null;

                if (!creature) return;

                // 1. 애니메이션 트리거
                img.className = ''; // Reset
                void img.offsetWidth; // Reflow
                img.className = `touch-react-${part}`;

                // 2. 대사 출력
                const lines = creature.def.lines || {};
                let text = lines.normal || "...";

                if (part === 'head' && lines.touch_head) text = lines.touch_head;
                if (part === 'chest' && lines.touch_special) text = lines.touch_special; // Chest maps to special for now
                if (part === 'legs' && lines.touch_special) text = lines.touch_special; // Duplicate for now

                // 호감도 시스템 연동 가능 (나중에)

                // 말풍선 표시
                speechText.innerText = text;
                speechBubble.classList.add('active');

                // 3초 후 숨김
                if (window.speechTimer) clearTimeout(window.speechTimer);
                window.speechTimer = setTimeout(() => {
                    speechBubble.classList.remove('active');
                }, 3000);
            };
        }
    });
}

/**
 * 시스템 설정 및 공지사항 오버레이 제어
 */
function initSystemOverlay() {
    // ... (Existing code)
    const btnOpenSystem = document.getElementById('btn-system-settings');
    const btnCloseSystem = document.getElementById('btn-close-system');
    const overlay = document.getElementById('system-modal-overlay');

    if (btnOpenSystem && overlay) {
        btnOpenSystem.addEventListener('click', () => {
            overlay.style.display = 'flex';
        });
    }

    if (btnCloseSystem && overlay) {
        btnCloseSystem.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }

    // 시스템 탭 전환
    const tabs = document.querySelectorAll('.system-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('active');
                t.style.color = '#888';
                t.style.borderBottomColor = 'transparent';
            });
            tab.classList.add('active');
            tab.style.color = 'white';
            tab.style.borderBottomColor = 'var(--accent-cyan)';

            const target = tab.dataset.tab;
            document.getElementById('view-notice').style.display = target === 'notice' ? 'block' : 'none';
            document.getElementById('view-contact').style.display = target === 'contact' ? 'block' : 'none';
        });
    });
}
