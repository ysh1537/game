import BaseView from './BaseView.js';

export default class PrestigeView extends BaseView {
    init() {
        this.btnExecute = document.getElementById('btn-execute-prestige');
        this.shardDisplay = document.getElementById('prestige-shards-total');
        this.pendingDisplay = document.getElementById('prestige-shards-pending');
        this.upgradeBtns = document.querySelectorAll('.prestige-upgrade-btn');

        // [Event] 환생 실행
        if (this.btnExecute) {
            this.btnExecute.onclick = () => {
                const pending = this.game.prestigeManager.calculatePendingShards();
                if (pending <= 0) {
                    this.game.uiManager.showConfirm("아직 획득할 수 있는 차원 조각이 없습니다.\n더 높은 스테이지에 도달해보세요!", () => { });
                    return;
                }

                this.game.uiManager.showConfirm(
                    `[경고] 정말로 차원 도약을 실행하시겠습니까?\n\n획득 예정 조각: ${pending}개\n\n모든 골드, 크리처, 스테이지 진행도가 초기화됩니다.\n(영구 강화 및 젬은 유지됩니다)`,
                    () => {
                        this.game.prestigeManager.executeRebirth();
                        this.addLog(`[차원 도약] 환생 완료! 차원 조각 ${pending}개 획득`, "system");
                        // 탭을 홈으로 이동
                        this.game.uiManager.switchTab('home');
                    }
                );
            };
        }

        // [Event] 업그레이드 버튼
        this.upgradeBtns.forEach(btn => {
            btn.onclick = () => {
                const type = btn.getAttribute('data-type');
                if (this.game.prestigeManager.upgradePrestige(type)) {
                    this.addLog(`[영혼 강화] 업그레이드 성공!`, "system");
                    this.render();
                } else {
                    this.addLog(`[영혼 강화] 차원 조각이 부족합니다.`, "error");
                }
            };
        });

        // [Global Event Listener]
        this.game.events.on('prestige:rebirth', () => this.render());
        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'prestige') {
                this.render();
            }
        });

        // 1초마다 보상 예측치 갱신
        setInterval(() => {
            if (this.ui.contentPrestige && this.ui.contentPrestige.classList.contains('active')) {
                this.renderPendingShards();
            }
        }, 1000);
    }

    render() {
        this.renderPendingShards();
        this.renderUpgrades();
        if (this.shardDisplay) {
            this.shardDisplay.innerText = this.game.prestigeManager.dimensionShards.toLocaleString();
        }
    }

    renderPendingShards() {
        const pending = this.game.prestigeManager.calculatePendingShards();
        if (this.pendingDisplay) {
            this.pendingDisplay.innerText = pending.toLocaleString();
        }
    }

    renderUpgrades() {
        this.upgradeBtns.forEach(btn => {
            const type = btn.getAttribute('data-type');
            const level = this.game.prestigeManager.prestigeUpgrades[type] || 0;
            const cost = this.game.prestigeManager.getUpgradeCost(type);

            const elLv = btn.querySelector('.lv .val');
            const elCost = btn.querySelector('.cost');

            if (elLv) elLv.innerText = level;
            if (elCost) elCost.innerText = cost.toLocaleString();

            // 비용 부족 시 스타일 처리
            if (this.game.prestigeManager.dimensionShards < cost) {
                btn.style.opacity = '0.5';
            } else {
                btn.style.opacity = '1';
            }
        });
    }
}
