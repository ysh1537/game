import BaseView from './BaseView.js';
import { EXPEDITIONS } from '../data/ExpeditionData.js';

export default class ExpeditionView extends BaseView {
    init() {
        this.game.expeditionManager.on('expedition:started', (exp) => {
            this.addLog(`${exp.expeditionName} 시작`, "expedition");
            this.renderActiveExpeditions();
        });

        this.game.expeditionManager.on('expedition:completed', (exp) => {
            this.addLog(`${exp.expeditionName} 완료! 골드 +${exp.rewards.gold}`, "expedition");
            this.renderActiveExpeditions();

            // 자동 반복이 아닐 때만 결과창 표시
            if (!this.game.expeditionManager.isAutoRepeat) {
                this.showResultModal(exp);
            }
        });

        // 자동 반복 토글 연결
        const checkAutoRepeat = document.getElementById('check-auto-repeat');
        if (checkAutoRepeat) {
            checkAutoRepeat.checked = this.game.expeditionManager.isAutoRepeat;
            checkAutoRepeat.onchange = (e) => {
                this.game.expeditionManager.setAutoRepeat(e.target.checked);
            };
        }

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'expedition') {
                this.render();
            }
        });

        // [Mod] 전용 탐사 모달 닫기 버튼 연결
        const btnCloseExpModal = document.getElementById('btn-close-exp-modal');
        if (btnCloseExpModal) {
            btnCloseExpModal.onclick = () => {
                document.getElementById('expedition-select-modal').style.display = 'none';
            };
        }
    }

    render() {
        this.renderExpeditionList();
        this.renderActiveExpeditions();
    }

    renderExpeditionList() {
        const listEl = document.getElementById('expedition-list');
        if (!listEl) return;
        listEl.innerHTML = '';

        EXPEDITIONS.forEach(exp => {
            const card = document.createElement('div');
            card.className = 'expedition-card feature-card';
            // 배경 이미지가 없으므로 CSS 그라디언트로 분위기 연출
            let bgGradient = 'linear-gradient(135deg, rgba(30,30,40,0.8), rgba(10,10,20,0.95))';
            let accentColor = '#888';
            if (exp.elementBonus === 'Wind' || exp.elementBonus === 'Nature') {
                bgGradient = 'linear-gradient(135deg, rgba(46, 204, 113, 0.2), rgba(10,10,20,0.9))';
                accentColor = '#2ecc71';
            } else if (exp.elementBonus === 'Earth') {
                bgGradient = 'linear-gradient(135deg, rgba(230, 126, 34, 0.2), rgba(10,10,20,0.9))';
                accentColor = '#e67e22';
            } else if (exp.elementBonus === 'Fire') {
                bgGradient = 'linear-gradient(135deg, rgba(231, 76, 60, 0.2), rgba(10,10,20,0.9))';
                accentColor = '#e74c3c';
            }

            card.style.background = bgGradient;
            card.style.border = `1px solid ${accentColor}44`;
            card.style.position = 'relative';
            card.style.overflow = 'hidden';

            card.innerHTML = `
                <div class="exp-header" style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                    <div class="exp-icon" style="font-size:2rem; background:rgba(0,0,0,0.3); width:50px; height:50px; display:flex; justify-content:center; align-items:center; border-radius:12px; border:1px solid ${accentColor}; color:${accentColor};">
                        ${exp.icon || '🚀'}
                    </div>
                    <div class="exp-element-bonus" style="font-size:0.8rem; color:${accentColor}; border:1px solid ${accentColor}; padding:2px 8px; border-radius:12px;">
                        ${exp.elementBonus ? exp.elementBonus + ' 우대' : '속성 무관'}
                    </div>
                </div>
                
                <div class="exp-info" style="margin-bottom:15px;">
                    <h4 style="margin:0 0 5px 0; font-size:1.1rem;">${exp.name}</h4>
                    <p style="font-size:0.85rem; color:#aaa; margin:0;">${exp.description}</p>
                </div>

                <div class="exp-details" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.85rem; color:#ccc; margin-bottom:15px; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">
                    <div>⏱️ 소요: <span style="color:#fff;">${exp.durationSec}초</span></div>
                    <div>⚡ 피로도: <span style="color:#f1c40f;">-${exp.energyCost}</span></div>
                    <div>💰 보상: <span style="color:#f1c40f;">${exp.baseGoldReward}G</span></div>
                    <div>⭐ 경험치: <span style="color:#3498db;">${exp.baseExpReward}</span></div>
                </div>

                <div class="exp-action">
                    <button class="cyber-btn small btn-start-exp" data-id="${exp.id}" style="width:100%; border-color:${accentColor}; color:${accentColor};">
                        탐사대 파견
                    </button>
                </div>
            `;

            card.querySelector('.cyber-btn').addEventListener('click', () => {
                this._openExpeditionModal(exp);
            });

            listEl.appendChild(card);
        });
    }

    renderActiveExpeditions() {
        const listEl = document.getElementById('active-expedition-list');
        const mapContainer = document.getElementById('map-units-container');
        const logDisplay = document.getElementById('expedition-log-display');

        if (!listEl) return;

        const list = this.game.expeditionManager.getActiveExpeditions();
        listEl.innerHTML = '';
        if (mapContainer) mapContainer.innerHTML = ''; // Clear map markers

        if (list.length === 0) {
            listEl.innerHTML = '<p class="placeholder-text" style="padding:20px; text-align:center; color:#666;">현재 진행 중인 탐사가 없습니다.</p>';
            if (logDisplay && logDisplay.innerHTML.includes('signals')) {
                logDisplay.innerHTML = '<div style="opacity:0.5;">No active signals...</div>';
            }
            return;
        }

        list.forEach(exp => {
            const now = Date.now();
            const totalDuration = exp.endTime - exp.startTime;
            const elapsed = now - exp.startTime;
            const percent = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
            const remainSec = Math.max(0, Math.ceil((exp.endTime - now) / 1000));

            // 1. List Item Render
            const div = document.createElement('div');
            div.className = 'active-expedition-item glass-panel';
            div.style.padding = '15px';
            div.style.marginBottom = '10px';

            const creature = this.game.creatureManager.getCreatureById(exp.creatureInstanceId);
            const creatureImg = creature ? creature.def.image : 'images/creature_slime_green.png';

            // [Phased System]
            let statusText = "진행 중";
            let statusColor = "var(--text-secondary)";
            const phase = exp.phase || "EXPLORE"; // Fallback

            if (phase === 'TRAVEL') {
                statusText = "🚀 이동 중";
                statusColor = "#aaaaaa";
            } else if (phase === 'EXPLORE') {
                statusText = "🔭 탐사 중";
                statusColor = "var(--accent-primary)";
            } else if (phase === 'RETURN') {
                statusText = "🏠 복귀 중";
                statusColor = "#4caf50";
            }

            // Report Button Logic
            let actionHtml = `<span style="color:var(--accent-primary); font-family:monospace;">${Math.floor(remainSec / 60)}:${String(remainSec % 60).padStart(2, '0')}</span>`;
            if (exp.isReportReady) {
                actionHtml = `<button class="btn-view-report cyber-btn small" style="padding:2px 8px; font-size:0.7rem; border-color:#ffd700; color:#ffd700;">📡 보고서 수신</button>`;
            }

            div.innerHTML = `
                <div style="display:flex; gap:15px; align-items:center;">
                    <div style="width:50px; height:50px; border-radius:50%; overflow:hidden; border:2px solid var(--accent-primary);">
                        <img src="${creatureImg}" style="width:100%; height:100%; object-fit:cover; object-position:top;">
                    </div>
                    <div style="flex:1;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                            <span style="font-weight:bold; color:var(--text-primary);">${exp.expeditionName}</span>
                            ${actionHtml}
                        </div>
                        <div style="background:rgba(255,255,255,0.1); height:6px; border-radius:3px; overflow:hidden;">
                            <div style="width:${percent}%; height:100%; background:${phase === 'RETURN' ? '#4caf50' : 'var(--accent-primary)'}; transition:width 1s linear;"></div>
                        </div>
                        <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-top:5px;">
                            <span style="color:#aaa;">${exp.creatureName}</span>
                            <span style="color:${statusColor}; font-weight:bold;">${statusText}</span>
                        </div>
                    </div>
                </div>
            `;
            listEl.appendChild(div);

            // Bind Report Button Event
            const btnReport = div.querySelector('.btn-view-report');
            if (btnReport) {
                btnReport.onclick = (e) => {
                    e.stopPropagation();
                    this.showResultModal(exp);
                };
            }

            // 2. Map Marker Render
            if (mapContainer) {
                this._renderMapUnit(exp, percent, creatureImg);
            }

            // 3. Auto Log Trigger
            this._handleAutoLogs(exp, percent);
        });

        // Start ticker if not running
        this._startMapTicker();
    }

    _renderMapUnit(exp, percent, img) {
        const container = document.getElementById('map-units-container');
        if (!container) return;

        // 고정적이지만 탐사별로 다른 경로 시뮬레이션
        const seed = parseInt(exp.id.split('_')[1]) || 0;
        const startX = 5;  // 기지 위치 (왼쪽)
        const startY = 50;

        // 목표 지점 (랜덤)
        const targetX = 70 + (seed % 20);
        const targetY = 20 + (seed % 60);

        let currentX, currentY;
        let p;

        // [Phased Movement Logic]
        if (percent < 20) {
            // 1. Travel (0 -> 20%) : Base -> Target
            p = percent / 20; // 0.0 ~ 1.0
            currentX = startX + (targetX - startX) * p;
            currentY = startY + (targetY - startY) * p;
        } else if (percent < 80) {
            // 2. Explore (20 -> 80%) : Hover around Target
            // Jitter effect based on time
            const timeParam = Date.now() / 500;
            const jitterX = Math.sin(timeParam + seed) * 3;
            const jitterY = Math.cos(timeParam * 1.5 + seed) * 3;
            currentX = targetX + jitterX;
            currentY = targetY + jitterY;
        } else {
            // 3. Return (80 -> 100%) : Target -> Base
            p = (percent - 80) / 20; // 0.0 ~ 1.0
            currentX = targetX + (startX - targetX) * p;
            currentY = targetY + (startY - targetY) * p;
        }

        const unit = document.createElement('div');
        unit.className = 'map-unit';
        unit.style.left = `${currentX}%`;
        unit.style.top = `${currentY}%`;
        unit.innerHTML = `
            <div class="map-unit-icon">
                <img src="${img}">
            </div>
            <div class="map-unit-label">${exp.creatureName}</div>
        `;
        container.appendChild(unit);
    }

    _handleAutoLogs(exp, percent) {
        if (!this.lastLogPercents) this.lastLogPercents = {};
        const lastP = this.lastLogPercents[exp.id] || 0;

        const logData = [
            { p: 1, msg: "Point Alpha 도달. 정찰 개시." },
            { p: 25, msg: "에너지 주파수 감지. 주변 탐색 중..." },
            { p: 50, msg: "미확립 생명체 조우. 교전 회피 후 이동." },
            { p: 75, msg: "목표 자원 확보 성공. 귀환 경로 설정." },
            { p: 95, msg: "기지 접근 중. 차원 고정 장치 활성화." }
        ];

        logData.forEach(entry => {
            if (percent >= entry.p && lastP < entry.p) {
                this._addTacticalLog(exp.creatureName, entry.msg);
            }
        });

        this.lastLogPercents[exp.id] = percent;
    }

    _addTacticalLog(name, msg) {
        const logDisplay = document.getElementById('expedition-log-display');
        if (!logDisplay) return;

        if (logDisplay.innerHTML.includes('No active signals')) logDisplay.innerHTML = '';

        const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const item = document.createElement('div');
        item.className = 'exp-log-item';
        item.innerHTML = `<span class="time">[${time}]</span><span class="tag">${name}</span><span class="msg">${msg}</span>`;

        logDisplay.prepend(item);

        // Max logs
        if (logDisplay.children.length > 20) {
            logDisplay.removeChild(logDisplay.lastChild);
        }
    }

    _startMapTicker() {
        if (this.mapTicker) return;
        this.mapTicker = setInterval(() => {
            const activeTab = document.querySelector('.feature-view.active');
            if (activeTab && activeTab.id === 'content-expedition') {
                this.renderActiveExpeditions();
            }
        }, 1000); // 1초마다 갱신 (실시간 느낌)
    }

    _openExpeditionModal(expedition) {
        const modal = document.getElementById('expedition-select-modal');
        const listEl = document.getElementById('exp-creature-list');
        if (!modal || !listEl) return;

        const owned = this.game.creatureManager.owned || [];
        const available = owned.filter(c => !c.isOnExpedition);

        if (available.length === 0) {
            this.game.uiManager.showConfirm('탐사에 파견할 수 있는 크리처가 없습니다.', () => { });
            return;
        }

        listEl.innerHTML = '';
        available.forEach(c => {
            const item = document.createElement('div');
            item.className = 'feature-card'; // Reuse card style
            item.style.padding = '10px';
            item.style.cursor = 'pointer';
            item.style.display = 'flex';
            item.style.flexDirection = 'column';
            item.style.alignItems = 'center';
            item.style.gap = '5px';
            item.style.background = 'rgba(255,255,255,0.05)';
            item.style.transition = 'all 0.2s';

            // Rarity Color
            let borderColor = '#888';
            if (['SR', 'SSR', 'UR'].includes(c.def.rarity)) borderColor = 'var(--accent-gold)';
            else if (['Rare', 'Special'].includes(c.def.rarity)) borderColor = 'var(--accent-cyan)';

            item.style.border = `1px solid ${borderColor}`;

            item.innerHTML = `
                <div style="width:50px; height:50px; border-radius:50%; overflow:hidden; border:2px solid ${borderColor};">
                    <img src="${c.def.image}" style="width:100%; height:100%; object-fit:cover; object-position:top;" onerror="this.src='images/creature_slime.png'">
                </div>
                <div style="font-size:0.8rem; font-weight:bold; color:white; text-align:center;">${c.def.name}</div>
                <div style="font-size:0.7rem; color:#aaa;">Lv.${c.level}</div>
            `;

            item.onclick = () => {
                const result = this.game.expeditionManager.startExpedition(c.instanceId, expedition.id);
                if (result) {
                    modal.style.display = 'none';
                    // [UX] 즉시 리스트 갱신하여 반응성 향상
                    this.renderActiveExpeditions();
                }
            };

            // Hover effect
            item.onmouseenter = () => { item.style.background = 'rgba(255,255,255,0.15)'; item.style.transform = 'translateY(-2px)'; };
            item.onmouseleave = () => { item.style.background = 'rgba(255,255,255,0.05)'; item.style.transform = 'translateY(0)'; };

            listEl.appendChild(item);
        });

        modal.style.display = 'flex';
    }

    // [New] 결과 모달 표시
    showResultModal(exp) {
        // 이미 띄워진 모달이 있으면 제거 (중복 방지)
        const oldModal = document.getElementById('exp-result-modal');
        if (oldModal) oldModal.remove();

        const modal = document.createElement('div');
        modal.id = 'exp-result-modal';
        modal.style.position = 'fixed';
        modal.style.inset = '0';
        modal.style.background = 'rgba(0,0,0,0.85)';
        modal.style.zIndex = '100000';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.backdropFilter = 'blur(5px)';
        modal.style.animation = 'fadeIn 0.3s ease-out';

        // Result Styling (다양한 이벤트 타입)
        let titleColor = '#aaa';
        let resultIcon = '🏁';
        let resultTitle = '탐사 완료';
        let bgGradient = 'linear-gradient(135deg, #1e1e2e, #2d1b2e)';
        const eventType = exp.eventResult?.type || 'NORMAL';

        switch (eventType) {
            case 'LEGENDARY': titleColor = '#da77f2'; resultIcon = '🌟'; resultTitle = '전설 발견!'; bgGradient = 'linear-gradient(135deg, #2d1b4e, #4a1a7a)'; break;
            case 'GREAT_SUCCESS': titleColor = '#FFD700'; resultIcon = '✨'; resultTitle = '대성공!'; bgGradient = 'linear-gradient(135deg, #2e2a1b, #4a3d10)'; break;
            case 'BATTLE_WIN': titleColor = '#ff6b6b'; resultIcon = '⚔️'; resultTitle = '토벌 성공!'; bgGradient = 'linear-gradient(135deg, #2e1b1b, #4a1a1a)'; break;
            case 'DISCOVERY': titleColor = '#4fc3f7'; resultIcon = '📜'; resultTitle = '유물 발견!'; bgGradient = 'linear-gradient(135deg, #1b2e3e, #1a3a4a)'; break;
            case 'TRAP': titleColor = '#ffa726'; resultIcon = '⚠️'; resultTitle = '함정 발동'; break;
            case 'DISASTER': titleColor = '#ef5350'; resultIcon = '🌪️'; resultTitle = '재난 발생'; break;
        }

        // 젬/로그 표시 준비
        const hasGem = exp.rewards.gem && exp.rewards.gem > 0;
        const rewardCols = hasGem ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)';
        let logsHtml = '';
        if (exp.logs && exp.logs.length > 0) {
            const logItems = exp.logs.map(log => {
                const t = new Date(log.time).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
                return `<div style="font-size:0.7rem; padding:3px 0; border-bottom:1px solid #333; color:#bbb;"><span style="color:#666;">[${t}]</span> ${log.message}</div>`;
            }).join('');
            logsHtml = `<div style="text-align:left; margin-top:12px;"><div style="color:#888; font-size:0.75rem; margin-bottom:4px;">📋 탐사 기록</div><div style="background:rgba(0,0,0,0.5); border-radius:6px; padding:6px; max-height:100px; overflow-y:auto; border:1px solid #444;">${logItems}</div></div>`;
        }

        modal.innerHTML = `
            <div style="background:${bgGradient}; border:2px solid ${titleColor}; border-radius:12px; padding:25px; width:92%; max-width:450px; text-align:center; box-shadow:0 0 30px ${titleColor}66;">
                <div style="font-size:3rem; margin-bottom:10px;">${resultIcon}</div>
                <h2 style="color:${titleColor}; margin:0 0 20px 0; font-family:'Orbitron';">${resultTitle}</h2>
                
                <h3 style="color:#ddd; margin-bottom:5px;">${exp.expeditionName}</h3>
                <p style="color:#888; font-size:0.9rem; margin-bottom:20px;">담당: ${exp.creatureName}</p>

                ${exp.eventResult && exp.eventResult.message ?
                `<div style="background:rgba(0,0,0,0.3); padding:10px; border-radius:8px; margin-bottom:20px; color:${titleColor}; font-size:0.95rem;">
                      ${exp.eventResult.message}
                   </div>` : ''
            }

                <div style="display:grid; grid-template-columns:${rewardCols}; gap:8px; background:rgba(255,255,255,0.05); padding:12px; border-radius:8px;">
                    <div style="color:#ffd700; text-align:center;">💰<br><span style="font-size:1.1rem; font-weight:bold;">+${exp.rewards.gold}</span></div>
                    <div style="color:#4fc3f7; text-align:center;">✨<br><span style="font-size:1.1rem; font-weight:bold;">+${exp.rewards.exp}</span></div>
                    ${hasGem ? `<div style="color:#da77f2; text-align:center;">💎<br><span style="font-size:1.1rem; font-weight:bold;">+${exp.rewards.gem}</span></div>` : ''}
                </div>

                ${logsHtml}

                <button id="btn-close-result" class="cyber-btn" style="width:100%; margin-top:15px; border-color:${titleColor}; color:${titleColor}; padding:12px;">확인</button>
            </div>
        `;

        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('#btn-close-result');
        closeBtn.onclick = () => {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        };
    }
}
