/**
 * @file main.js
 * @description 게임의 엔트리 포인트. 모든 View 및 Manager를 초기화하고 연결합니다.
 */
import Game from './core/Game.js';
import LangManager from './managers/LangManager.js';
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

document.addEventListener('DOMContentLoaded', () => {
    console.log("Multiverse Creature Lab - Phase 4 Refactored");

    // 1. 핵심 인스턴스 초기화
    const game = new Game();
    const langManager = new LangManager();
    const uiManager = new UIManager(game);

    // 2. 언어 설정 연동
    langManager.init();

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
        battle: new BattleView(game, uiManager)
    };

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
});

/**
 * 시스템 설정 및 공지사항 오버레이 제어
 */
function initSystemOverlay() {
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
