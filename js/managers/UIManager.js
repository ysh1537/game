/**
 * @class UIManager
 * @description 전역 UI 요소 캐싱, 탭 전환, 공통 UI 기능(로그, 모달)을 관리합니다.
 */
export default class UIManager {
    constructor(game) {
        this.game = game;
        this.ui = this._cacheElements();
        this.currentHighlight = null;
        this._initCommonEvents();
    }

    /**
     * @private
     * @description 주요 UI 요소들을 한 번만 캐싱합니다.
     */
    _cacheElements() {
        return {
            // 사이드바 및 탭
            tabHome: document.getElementById('tab-home'),
            tabSummon: document.getElementById('tab-summon'),
            tabExpedition: document.getElementById('tab-expedition'),
            tabResearch: document.getElementById('tab-research'),
            tabMission: document.getElementById('tab-mission'),
            tabShop: document.getElementById('tab-shop'),
            tabTeam: document.getElementById('tab-team'),
            tabBattle: document.getElementById('tab-battle'),

            // 메인 컨텐츠 영역
            layoutContainer: document.getElementById('layout-container'),
            contentSummon: document.getElementById('content-summon'),
            contentExpedition: document.getElementById('content-expedition'),
            contentResearch: document.getElementById('content-research'),
            contentMission: document.getElementById('content-mission'),
            contentShop: document.getElementById('content-shop'),
            contentTeam: document.getElementById('content-team'),
            contentBattle: document.getElementById('content-battle'),

            // 공통 패널
            creatureList: document.getElementById('creature-list'),
            detailPanel: document.getElementById('detail-panel'),
            logContent: document.getElementById('log-content'),

            // 필터 & 정렬
            sortOrder: document.getElementById('sort-order'),
            filterRarity: document.getElementById('filter-rarity'),
            filterElement: document.getElementById('filter-element'),
            btnAutoCompose: document.getElementById('btn-auto-compose'),

            // 상태바 리소스
            goldDisplay: document.getElementById('gold-display'),
            gemDisplay: document.getElementById('gem-display'),
            energyDisplay: document.getElementById('energy-display'),

            // 오버레이 및 모달
            loginOverlay: document.getElementById('login-overlay'),
            modalOverlay: document.getElementById('custom-modal-overlay'),
            modalMsg: document.getElementById('custom-modal-msg'),
            btnModalYes: document.getElementById('btn-modal-yes'),
            btnModalNo: document.getElementById('btn-modal-no'),

            // 개발자 치트
            devFill: document.getElementById('devFillResources')
        };
    }

    /**
     * @private
     * @description 공통 UI 이벤트를 초기화합니다.
     */
    _initCommonEvents() {
        // 탭 이벤트 연결
        const tabPairs = [
            { btn: this.ui.tabHome, id: 'home' },
            { btn: this.ui.tabSummon, id: 'summon' },
            { btn: this.ui.tabExpedition, id: 'expedition' },
            { btn: this.ui.tabResearch, id: 'research' },
            { btn: this.ui.tabMission, id: 'mission' },
            { btn: this.ui.tabShop, id: 'shop' },
            { btn: this.ui.tabTeam, id: 'team' },
            { btn: this.ui.tabBattle, id: 'battle' }
        ];

        tabPairs.forEach(pair => {
            if (pair.btn) {
                pair.btn.addEventListener('click', () => this.switchTab(pair.id));
            }
        });

        // 개발자 치트 버튼
        if (this.ui.devFill) {
            this.ui.devFill.addEventListener('click', () => {
                this.game.resourceManager.addResource('gold', 10000);
                this.game.resourceManager.addResource('gem', 100);
                this.game.resourceManager.addResource('energy', 100);
                this.addLog("치트 사용: 자원 충전 완료");
            });
        }
    }

    /**
     * @description 탭을 전환하고 관련 뷰를 활성화합니다.
     * @param {string} tabId 
     */
    switchTab(tabId) {
        // 1. 모든 컨텐츠 숨김
        const contents = [
            this.ui.layoutContainer, this.ui.contentSummon, this.ui.contentExpedition,
            this.ui.contentResearch, this.ui.contentMission, this.ui.contentShop,
            this.ui.contentTeam, this.ui.contentBattle
        ];
        contents.forEach(el => {
            if (el) {
                el.classList.remove('active');
                el.style.display = 'none';
            }
        });

        // 2. 모든 탭 버튼 비활성화
        const tabs = [
            this.ui.tabHome, this.ui.tabSummon, this.ui.tabExpedition,
            this.ui.tabResearch, this.ui.tabMission, this.ui.tabShop,
            this.ui.tabTeam, this.ui.tabBattle
        ];
        tabs.forEach(el => el && el.classList.remove('active'));

        // 3. 대상 활성화
        const targetBtn = this.ui[`tab${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`];
        const targetContent = (tabId === 'home') ? this.ui.layoutContainer : this.ui[`content${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`];

        if (targetBtn) targetBtn.classList.add('active');
        if (targetContent) {
            targetContent.classList.add('active');
            targetContent.style.display = (tabId === 'home') ? 'grid' : 'block';
        }

        // [Mode Cleanup] 덱 설정 모드 해제 로직 등
        if (tabId !== 'team') {
            this.ui.creatureList.classList.remove('mode-deck-select');
        }

        // 전역 이벤트 발생 (각 View에서 인지하여 렌더링하도록 함)
        this.game.events.emit('ui:tabSwitched', tabId);
    }

    /**
     * @description 로그 시스템에 메시지를 추가합니다.
     * @param {string} msg 
     * @param {string} type 
     */
    addLog(msg, type = "normal") {
        if (!this.ui.logContent) return;

        const time = new Date().toLocaleTimeString();
        let prefix = "";
        switch (type) {
            case "expedition": prefix = "[탐사] "; break;
            case "facility": prefix = "[연구] "; break;
            case "mission": prefix = "[미션] "; break;
            case "shop": prefix = "[보급] "; break;
        }

        const div = document.createElement('div');
        div.style.marginBottom = "4px";
        div.innerHTML = `<span style="color:#888">[${time}]</span> ${prefix}${msg}`;
        this.ui.logContent.prepend(div);
    }

    /**
     * @description 커스텀 확인 모달을 띄웁니다.
     * @param {string} message 
     * @param {Function} onYes 
     */
    showConfirm(message, onYes) {
        if (!this.ui.modalOverlay) {
            if (confirm(message)) onYes();
            return;
        }

        this.ui.modalMsg.innerText = message;
        this.ui.modalOverlay.style.display = 'flex';

        this.ui.btnModalYes.onclick = () => {
            this.ui.modalOverlay.style.display = 'none';
            onYes();
        };
        this.ui.btnModalNo.onclick = () => {
            this.ui.modalOverlay.style.display = 'none';
        };
    }

    /**
     * @description 특정 요소를 하이라이트합니다 (튜토리얼 등에서 사용).
     * @param {string} elementId 
     */
    highlightElement(elementId) {
        if (this.currentHighlight) {
            this.currentHighlight.classList.remove('highlight');
        }

        const target = document.getElementById(elementId);
        if (target) {
            target.classList.add('highlight');
            this.currentHighlight = target;
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}
