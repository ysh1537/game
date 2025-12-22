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
        this.game.creatureManager.on('creatures:selected', (c) => this._handleCreatureSelected(c));
        this.game.creatureManager.on('creature:leveledUp', (data) => this._handleLevelUp(data));
        this.game.creatureManager.on('evolve:success', (data) => this._handleEvolveSuccess(data));

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

            // 속성 아이콘 맵
            const elementIcons = { 'fire': '🔥', 'water': '💧', 'earth': '🌿', 'light': '✨', 'dark': '🌙' };
            const elementIcon = elementIcons[c.def.element] || '';

            // 등급 배지 (유저 요청: 물음표 아이콘 -> 랭크 등급)
            const rarityBadge = c.def.rarity === 'Normal' ? 'N' :
                c.def.rarity === 'Unique' ? 'U' :
                    c.def.rarity === 'Rare' ? 'R' :
                        c.def.rarity === 'Special' ? 'S' :
                            c.def.rarity === 'SR' ? 'SR' :
                                c.def.rarity === 'SSR' ? 'SSR' :
                                    c.def.rarity === 'UR' ? 'UR' : '?';

            if (isDeckMode && currentDeckIds.includes(c.instanceId)) {
                div.classList.add('equipped');
                div.style.opacity = '0.5';
                div.style.border = '2px solid #238636';
            }

            const lockIcon = c.isLocked ? '<span style="position:absolute; top:5px; right:5px; font-size:12px; z-index:20;">🔒</span>' : '';

            div.innerHTML = `
                <div class="element-badge" style="font-weight:900; font-size:0.9em;">${rarityBadge}</div>
                <img src="${c.def.image}" alt="${c.def.name}">
                ${lockIcon}
                <div class="card-overlay">
                    <div class="card-name">${elementIcon} ${c.def.name}</div>
                    <div class="card-stats">Lv.${c.level} | ${'★'.repeat(c.star)}</div>
                </div>
            `;

            div.onclick = () => {
                if (isDeckMode) {
                    this._handleDeckSelect(c, currentDeckIds);
                } else {
                    this.game.creatureManager.selectCreature(c.instanceId);
                    // 로비 캐릭터 변경
                    const lobbyImg = document.getElementById('lobby-character-img');
                    if (lobbyImg && c.def) {
                        lobbyImg.src = c.def.image;
                        lobbyImg.alt = c.def.name;
                        // localStorage에 저장
                        localStorage.setItem('lobbyCharacter', JSON.stringify({
                            image: c.def.image,
                            name: c.def.name,
                            instanceId: c.instanceId
                        }));
                        this.uiManager.addLog(`로비 캐릭터를 ${c.def.name}(으)로 변경했습니다.`, 'success');
                    }
                }
            };
            this.ui.creatureList.appendChild(div);
        });
    }

    /**
     * @description 크리처 상세 정보를 모달로 렌더링하고 표시합니다.
     */
    renderDetailPanel(c) {
        const modal = document.getElementById('creature-detail-modal');
        const body = document.getElementById('modal-detail-body');
        if (!modal || !body) return;

        if (!c) {
            modal.style.display = 'none';
            return;
        }

        const nextExp = getRequiredExp(c.level);
        const expPercent = Math.min(100, (c.exp / nextExp) * 100).toFixed(1);
        const isMaxLevel = c.level >= 30;

        const lockBtnHtml = `<button id="btn-toggle-lock" class="cyber-btn small" style="color: ${c.isLocked ? '#ff5252' : 'inherit'};">
            ${c.isLocked ? '🔒 잠금됨' : '🔓 잠금해제'}
        </button>`;

        body.innerHTML = `
            <div class="detail-header" style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="margin:0; font-size:1.3rem;">
                    <span class="rarity-badge rarity-${c.def.rarity}" style="font-size:0.7em; padding:2px 8px; border-radius:4px; margin-right:5px; border:1px solid currentColor;">${c.def.rarity}</span>
                    ${c.def.name} 
                    <span style="color:#f1c40f; font-size:0.8em; margin-left:5px;">${'★'.repeat(c.star)}</span>
                    <div style="font-size:0.8rem; color:#ff4081; margin-top:4px; font-weight:normal;">
                        <span style="background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px; margin-right:5px; border:1px solid rgba(255,255,255,0.2); font-size:0.75rem;">
                            🧠 ${c.def.ego || 'Normal'}
                        </span>
                        ❤️ Resonance: ${this.game.creatureManager.getResonanceScore(c).toLocaleString()}
                    </div>
                </h3>
                <button id="btn-close-detail" class="cyber-btn small icon-only" style="font-size:1.2rem; padding:5px 10px;">×</button>
            </div>
            
            <div class="detail-body fade-in" style="position:relative;">
                <div class="creature-info-row" style="display:flex; justify-content:space-between; margin:10px 0; font-size:0.9rem; color:#ccc;">
                    <div>
                        <span style="opacity:0.6;">World:</span> <span style="color:var(--accent-primary); font-weight:bold;">${c.def.world || 'Unknown'}</span>
                    </div>
                    <div>
                         <span style="opacity:0.6;">Elements:</span> ${this._renderElementIcons(c.def.elements || [c.def.element])}
                    </div>
                </div>
                
                <div class="creature-portrait-large" style="position:relative;">
                    <img src="${c.def.image}" alt="${c.def.name}">
                    <div class="speech-bubble-modal" style="position:absolute; bottom:10px; left:50%; transform:translateX(-50%); width:90%; background:rgba(0,0,0,0.8); border:1px solid var(--accent-primary); border-radius:8px; padding:10px; font-size:0.9rem; text-align:center; color:#fff; box-shadow:0 0 10px rgba(0,0,0,0.5);">
                        "${c.def.lines?.normal || '...'}"
                    </div>
                </div>

                <div class="stat-group" style="margin:15px 0; background:rgba(255,255,255,0.03); padding:10px; border-radius:8px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                        <strong style="color:var(--text-primary);">Lv.${c.level}</strong>
                        <span style="font-size:0.85em; color:var(--text-secondary);">${isMaxLevel ? "MAX LEVEL" : `EXP ${Math.floor(expPercent)}%`}</span>
                    </div>
                    <div class="exp-bar" style="height:6px; background:rgba(0,0,0,0.5); border-radius:3px; overflow:hidden; margin-bottom:15px;">
                        <div class="exp-fill" style="width: ${isMaxLevel ? 100 : expPercent}%; height:100%; background:linear-gradient(90deg, var(--accent-primary), var(--accent-secondary)); box-shadow:0 0 5px var(--accent-primary);"></div>
                    </div>

                    <!-- 상세 능력치 표시 영역 -->
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:0.9rem;">
                        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:5px;">
                            <span style="color:#aaa;">전투력</span>
                            <span style="color:var(--accent-cyan); font-weight:bold;">${Number(c.stats.explorePower || 0).toLocaleString()}</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:5px;">
                            <span style="color:#aaa;">체력 (HP)</span>
                            <span style="color:#ef5350; font-weight:bold;">${Number(c.stats.hp || 0).toLocaleString()}</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:5px;">
                            <span style="color:#aaa;">공격력</span>
                            <span style="color:#ffa726; font-weight:bold;">${Number(c.stats.atk || 0).toLocaleString()}</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:5px;">
                            <span style="color:#aaa;">방어력</span>
                            <span style="color:#42a5f5; font-weight:bold;">${Number(c.stats.def || 0).toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                <div class="action-group" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:20px;">
                    <button id="btn-train-basic" class="cyber-btn action">기초 훈련</button>
                    <button id="btn-train-intensive" class="cyber-btn action premium">집중 강화</button>
                    <button id="btn-compose-creature" class="cyber-btn">강화 / 합성</button>
                    <button id="btn-evolve-creature" class="cyber-btn ${this._canEvolveUI(c).canEvolve ? 'premium' : ''}" ${this._canEvolveUI(c).canEvolve ? '' : 'disabled'} style="${this._canEvolveUI(c).canEvolve ? 'background:linear-gradient(135deg,#ff9800,#ff5722);' : ''}">${this._canEvolveUI(c).canEvolve ? '🦋 진화 가능!' : '🔒 진화'}</button>
                    ${this._canEvolveUI(c).evolvesTo ? `<div style="grid-column:span 2; font-size:0.8rem; color:#aaa; text-align:center;">진화 조건: ${this._canEvolveUI(c).reason || '조건 충족!'}</div>` : ''}
                    <div style="grid-column: span 2; display:flex; justify-content:center; margin-top:10px;">
                        ${lockBtnHtml}
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'flex';

        // 상세 패널 이벤트 바인딩
        document.getElementById('btn-close-detail').onclick = () => {
            modal.style.display = 'none';
        };

        modal.onclick = (e) => {
            if (e.target === modal) modal.style.display = 'none';
        };

        document.getElementById('btn-toggle-lock').onclick = () => {
            this.game.creatureManager.toggleLock(c.instanceId);
            this.renderDetailPanel(this.game.creatureManager.getCreatureById(c.instanceId));
            this.renderCreatureList(); // 리스트의 잠금 아이콘 갱신
        };

        document.getElementById('btn-train-basic').onclick = () => this._handleTraining('basic', c.instanceId);
        document.getElementById('btn-train-intensive').onclick = () => this._handleTraining('intensive', c.instanceId);
        document.getElementById('btn-compose-creature').onclick = () => this._handleCompose(c.instanceId);

        // 진화 버튼 이벤트
        const evolveBtn = document.getElementById('btn-evolve-creature');
        if (evolveBtn && !evolveBtn.disabled) {
            evolveBtn.onclick = () => this._handleEvolve(c.instanceId);
        }
    }

    /**
     * 진화 가능 여부 확인 (UI용)
     */
    _canEvolveUI(c) {
        if (!c) return { canEvolve: false };
        return this.game.creatureManager.canEvolve(c.instanceId);
    }

    /**
     * 진화 실행 핸들러
     */
    _handleEvolve(instanceId) {
        const check = this.game.creatureManager.canEvolve(instanceId);
        if (!check.canEvolve) {
            alert(`진화 불가: ${check.reason}`);
            return;
        }

        const targetName = check.evolvesTo.name;
        this.uiManager.showConfirm(
            `${targetName}(으)로 진화하시겠습니까?\n\n⚠️ 진화 시 레벨과 별이 초기화됩니다!`,
            () => {
                const result = this.game.creatureManager.tryEvolve(instanceId);
                if (result.success) {
                    alert(`🎉 진화 성공!\n${result.newCreature.def.name}(이)가 되었습니다!`);
                    this.addLog(`[진화] ${result.newCreature.def.name}(으)로 진화 성공!`, 'success');
                    this.renderDetailPanel(result.newCreature);
                    this.renderCreatureList();
                } else {
                    alert(`진화 실패: ${result.reason}`);
                }
            }
        );
    }

    /**
     * 합성(강화) 핸들러
     */
    _handleCompose(instanceId) {
        const creature = this.game.creatureManager.getCreature(instanceId);
        if (!creature) return;

        if (creature.star >= 5) {
            alert("이미 최대 강화 상태입니다! (5성)");
            return;
        }

        // 같은 종류, 같은 별의 재료 찾기
        const materials = this.game.creatureManager.owned.filter(c =>
            c.instanceId !== instanceId &&
            c.dataId === creature.dataId &&
            c.star === creature.star &&
            !c.isLocked
        );

        if (materials.length === 0) {
            alert(`합성 재료가 없습니다!\n\n필요: ${creature.def.name} (${creature.star}성, 잠금해제)`);
            return;
        }

        this.uiManager.showConfirm(
            `${creature.def.name}을(를) 합성하시겠습니까?\n\n재료: ${creature.def.name} (${creature.star}성) x1\n결과: ${creature.star + 1}성으로 강화`,
            () => {
                const result = this.game.creatureManager.tryCompose(instanceId, materials[0].instanceId);
                if (result.success) {
                    alert(`🎉 합성 성공! ${creature.star}성이 되었습니다!`);
                    this.addLog(`[합성] ${creature.def.name} ${creature.star}성 강화 성공!`, 'success');
                    this.renderDetailPanel(this.game.creatureManager.getCreature(instanceId));
                    this.renderCreatureList();
                } else {
                    alert(`합성 실패: ${result.reason}`);
                }
            }
        );
    }

    // --- 내부 헬퍼 메서드 ---

    _getFilteredAndSortedCreatures() {
        let list = [...(this.game.creatureManager.owned || [])];

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

    _handleEvolveSuccess(data) {
        const { creature, oldName, newName } = data;
        this.addLog(`🦋 [진화] ${oldName} → ${newName} 진화 성공!`, 'success');
        this.renderCreatureList();
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
        const result = this.game.creatureManager.tryTrain(instanceId, type);
        if (result.success) {
            const label = type === 'basic' ? '기초 훈련' : '집중 강화';
            this.addLog(`[${label}] 경험치 +${result.expGained} 획득!`, 'success');
            if (result.leveledUp) {
                this.addLog(`[성장] 레벨업! Lv.${result.newLevel}`, 'success');
            }
            // 상세 패널 및 리스트 갱신
            const c = this.game.creatureManager.getCreatureById(instanceId);
            if (c) this.renderDetailPanel(c);
            this.renderCreatureList();
        } else {
            this.addLog(`[훈련 실패] ${result.reason}`, 'error');
        }
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

    _renderElementIcons(elements) {
        if (!elements) return '';
        const iconMap = {
            'Fire': '🔥', 'Water': '💧', 'Earth': '🌿', 'Wind': '🌪️', 'Light': '✨', 'Dark': '🌙',
            'Metal': '⚙️', 'Ice': '❄️', 'Nature': '🍀', 'Lightning': '⚡', 'Time': '⏳',
            'Void': '⚫', 'Chaos': '🌀', 'Life': '🌱'
        };

        return elements.map(e => `<span title="${e}" style="cursor:help;">${iconMap[e] || e}</span>`).join(' ');
    }
}
