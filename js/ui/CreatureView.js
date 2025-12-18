import BaseView from './BaseView.js';
import { getRequiredExp } from '../data/LevelData.js';

export default class CreatureView extends BaseView {
    init() {
        // 필터 및 정렬 이벤트 연결
        const filterIds = ['filter-rarity', 'filter-element', 'sort-order'];
        filterIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('change', () => this.renderCreatureList());
            }
        });

        // 자동 합성 버튼
        if (this.ui.btnAutoCompose) {
            this.ui.btnAutoCompose.addEventListener('click', () => this.handleAutoCompose());
        }

        // 데이터 갱신 감지
        this.game.creatureManager.on('creatures:updated', () => this.renderCreatureList());
        this.game.creatureManager.on('creatures:selected', (c) => this.handleCreatureSelected(c));
        this.game.creatureManager.on('creature:leveledUp', (data) => this.handleLevelUp(data));

        // 탭 전환 감지
        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'home' || tabId === 'team') {
                this.renderCreatureList();
            }
        });
    }

    render() {
        this.renderCreatureList();
    }

    /**
     * @description 필터링 및 정렬된 크리처 목록을 렌더링합니다.
     */
    renderCreatureList() {
        if (!this.ui.creatureList) return;

        const list = this._getFilteredAndSortedCreatures();
        this.ui.creatureList.innerHTML = '';

        const isDeckMode = this.ui.creatureList.classList.contains('mode-deck-select');
        let currentDeckIds = [];
        if (isDeckMode) {
            const deckId = this.game.deckManager.currentEditingDeck || 'main';
            currentDeckIds = this.game.deckManager.decks[deckId] || [];
        }

        if (list.length === 0) {
            this.ui.creatureList.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding:20px; color:#666;">조건에 맞는 크리처가 없습니다.</div>';
            return;
        }

        list.forEach(c => {
            const div = document.createElement('div');
            div.className = `creature-card-mini rarity-${c.def.rarity}`;
            div.dataset.instanceId = c.instanceId;

            if (isDeckMode && currentDeckIds.includes(c.instanceId)) {
                div.classList.add('equipped');
                div.style.opacity = '0.5';
                div.style.border = '2px solid #238636';
            }

            const lockIcon = c.isLocked ? '<span style="position:absolute; top:5px; right:5px; font-size:12px; z-index:20;">🔒</span>' : '';

            div.innerHTML = `
                <img src="${c.def.image}" alt="${c.def.name}">
                ${lockIcon}
                <div class="card-overlay">
                    <div class="card-name">${c.def.name}</div>
                    <div class="card-stats">Lv.${c.level} | ${'★'.repeat(c.star)}</div>
                </div>
            `;

            div.onclick = () => {
                if (isDeckMode) {
                    this._handleDeckSelect(c, currentDeckIds);
                } else {
                    this.game.creatureManager.selectCreature(c.instanceId);
                }
            };
            this.ui.creatureList.appendChild(div);
        });
    }

    /**
     * @description 크리처 상세 패널을 렌더링합니다.
     */
    renderDetailPanel(c) {
        if (!this.ui.detailPanel) return;

        if (!c) {
            this.ui.detailPanel.innerHTML = '<p class="placeholder-text">선택된 데이터가 없습니다</p>';
            return;
        }

        const nextExp = getRequiredExp(c.level);
        const expPercent = Math.min(100, (c.exp / nextExp) * 100).toFixed(1);
        const isMaxLevel = c.level >= 30;

        const lockBtnHtml = `<button id="btn-toggle-lock" class="cyber-btn small" style="color: ${c.isLocked ? '#ff5252' : 'inherit'};">
            ${c.isLocked ? '🔒 잠금됨' : '🔓 잠금해제'}
        </button>`;

        this.ui.detailPanel.innerHTML = `
            <div class="detail-header">
                <h3>${c.def.name} <span style="color:#f1c40f;">${'★'.repeat(c.star)}</span></h3>
                <div style="display:flex; gap:8px;">
                    ${lockBtnHtml}
                    <button id="btn-close-detail" class="cyber-btn small">×</button>
                </div>
            </div>
            
            <div class="detail-body fade-in">
                <p>등급: <span class="rarity-${c.def.rarity}" style="font-weight:bold">${c.def.rarity}</span> | 속성: ${c.def.elements ? c.def.elements.join(' / ') : c.def.element}</p>
                
                <div class="stat-group">
                    <div><strong>Lv.${c.level}</strong> ${isMaxLevel ? "(MAX)" : `(Exp: ${c.exp} / ${nextExp})`}</div>
                    <div class="exp-bar">
                        <div class="exp-fill" style="width: ${isMaxLevel ? 100 : expPercent}%"></div>
                    </div>
                </div>

                <div class="creature-portrait-large">
                    <img src="${c.def.image}" alt="${c.def.name}">
                </div>

                <div class="action-group" style="margin-top:20px; display:flex; flex-wrap:wrap; gap:10px;">
                    <button id="btn-train-basic" class="cyber-btn action">기초 훈련</button>
                    <button id="btn-train-intensive" class="cyber-btn action premium">집중 강화</button>
                    <button id="btn-compose-creature" class="cyber-btn">합성</button>
                </div>
            </div>
        `;

        // 상세 패널 이벤트 바인딩
        document.getElementById('btn-close-detail').onclick = () => {
            this.ui.detailPanel.innerHTML = '<p class="placeholder-text">SELECT DATA</p>';
            Array.from(this.ui.creatureList.children).forEach(card => card.classList.remove('selected'));
        };

        document.getElementById('btn-toggle-lock').onclick = () => {
            this.game.creatureManager.toggleLock(c.instanceId);
            this.renderDetailPanel(this.game.creatureManager.getCreatureById(c.instanceId));
        };

        // 훈련 및 합성 (기존 main.js 로직 축약)
        document.getElementById('btn-train-basic').onclick = () => this._handleTraining('basic', c.instanceId);
        document.getElementById('btn-train-intensive').onclick = () => this._handleTraining('intensive', c.instanceId);
    }

    // --- 내부 헬퍼 메서드 ---

    _getFilteredAndSortedCreatures() {
        let list = [...this.game.creatureManager.owned];

        const rFilter = this.ui.filterRarity ? this.ui.filterRarity.value : 'all';
        const eFilter = this.ui.filterElement ? this.ui.filterElement.value : 'all';

        if (rFilter !== 'all') list = list.filter(c => c.def.rarity === rFilter);
        if (eFilter !== 'all') {
            list = list.filter(c => {
                if (c.def.elements) return c.def.elements.includes(eFilter);
                return c.def.element === eFilter;
            });
        }

        const sort = this.ui.sortOrder ? this.ui.sortOrder.value : 'rarity_desc';
        const rarityRank = { 'UR': 7, 'SSR': 6, 'SR': 5, 'Special': 4, 'Rare': 3, 'Unique': 2, 'Normal': 1 };

        list.sort((a, b) => {
            if (sort === 'rarity_desc') {
                const ra = rarityRank[a.def.rarity] || 0;
                const rb = rarityRank[b.def.rarity] || 0;
                return (ra !== rb) ? rb - ra : b.level - a.level;
            } else if (sort === 'level_desc') {
                return (a.level !== b.level) ? b.level - a.level : (rarityRank[b.def.rarity] || 0) - (rarityRank[a.def.rarity] || 0);
            } else if (sort === 'recent') {
                return b.instanceId - a.instanceId;
            }
            return 0;
        });

        return list;
    }

    _handleCreatureSelected(c) {
        this.renderDetailPanel(c);
        const cards = this.ui.creatureList.children;
        Array.from(cards).forEach(card => {
            if (card.dataset.instanceId === String(c.instanceId)) {
                card.classList.add('selected');
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                card.classList.remove('selected');
            }
        });
    }

    _handleLevelUp(data) {
        const { creature, oldLevel, newLevel } = data;
        this.addLog(`[성장] ${creature.def.name} 레벨업! Lv.${oldLevel} -> Lv.${newLevel}`);
        if (this.game.creatureManager.selectedId === creature.instanceId) {
            this.renderDetailPanel(creature);
        }
    }

    _handleDeckSelect(c, currentDeckIds) {
        const deckId = this.game.deckManager.currentEditingDeck || 'main';
        if (currentDeckIds.includes(c.instanceId)) {
            this.addLog(`[덱] 이미 장착된 크리처입니다.`);
            return;
        }

        const emptyIdx = currentDeckIds.indexOf(null);
        if (emptyIdx !== -1) {
            this.game.deckManager.setCreature(deckId, emptyIdx, c.instanceId);
            this.game.events.emit('ui:deckUpdated'); // TeamView에서 수신
            this.renderCreatureList();
        } else {
            alert("덱이 가득 찼습니다! 팀 관리 탭에서 기존 크리처를 해제하세요.");
        }
    }

    _handleTraining(type, instanceId) {
        // 기존 handleTraining 로직 (생략된 경우 CreatureManager에서 처리하도록 유도 가능)
        // 여기서는 간단히 Manager 호출 예시만 작성
        this.game.creatureManager.tryTrain(instanceId, type);
    }

    handleAutoCompose() {
        this.uiManager.showConfirm("잠금되지 않은 중복 크리처를 모두 합성하시겠습니까?", () => {
            const result = this.game.creatureManager.autoCompose();
            if (result.count > 0) {
                alert(`총 ${result.count}회의 합성이 완료되었습니다.`);
                result.logs.forEach(msg => this.addLog(msg));
            } else {
                alert("합성 가능한 대상이 없습니다.");
            }
        });
    }
}
