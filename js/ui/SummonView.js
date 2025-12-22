import BaseView from './BaseView.js';
import { NORMAL_SUMMON_TABLE, PREMIUM_SUMMON_TABLE } from '../data/SummonTable.js';

export default class SummonView extends BaseView {
    init() {
        // 소환 버튼 바인딩
        const btnNormal1 = document.getElementById('btn-summon-n1');
        const btnNormal10 = document.getElementById('btn-summon-n10');
        const btnPremium1 = document.getElementById('btn-summon-p1');
        const btnPremium10 = document.getElementById('btn-summon-p10');

        if (btnNormal1) btnNormal1.onclick = () => this.game.creatureManager.tryNormalSummon();
        if (btnNormal10) btnNormal10.onclick = () => this.game.creatureManager.summonBatch('normal');
        if (btnPremium1) btnPremium1.onclick = () => this.game.creatureManager.tryPremiumSummon();
        if (btnPremium10) btnPremium10.onclick = () => this.game.creatureManager.summonBatch('premium');

        // 결과 이벤트 감지
        this.game.creatureManager.on('summon:result', (creature) => {
            this.handleSummonResult(creature);
        });

        // [NEW] 일괄 소환 결과 감지
        this.game.creatureManager.on('summon:batch_result', (results) => {
            this.handleBatchSummonResult(results);
        });

        this.game.creatureManager.on('summon:failed', (data) => {
            this.addLog(`소환 실패: ${data.reason}`, "normal");
            alert(`소환 실패: ${data.reason}`);
        });

        // [NEW] Inject Cinematic Overlay if not exists
        this.createCinematicOverlay();

        // [NEW] 확률 정보 버튼
        this.injectProbabilityInfo();
    }

    injectProbabilityInfo() {
        const contentSummon = document.getElementById('content-summon');
        if (!contentSummon) return;

        const header = contentSummon.querySelector('.panel-header');
        if (header && !header.querySelector('.btn-prob-info')) {
            const btn = document.createElement('button');
            btn.className = 'cyber-btn small btn-prob-info';
            btn.innerText = '확률 정보 (Probability)';
            btn.style.marginLeft = 'auto';
            btn.onclick = () => this.showProbabilityInfo();
            header.appendChild(btn);
        }
    }

    showProbabilityInfo() {
        let msg = "=== 소환 확률 (Probabilities) ===\n\n[일반 소환 (Gold)]\n";
        NORMAL_SUMMON_TABLE.forEach(row => {
            msg += `${row.rarity}: ${row.weight}%\n`;
        });

        msg += "\n[프리미엄 소환 (Gem)]\n";
        PREMIUM_SUMMON_TABLE.forEach(row => {
            msg += `${row.rarity}: ${row.weight}%\n`;
        });

        alert(msg);
    }

    createCinematicOverlay() {
        if (document.getElementById('cinematic-overlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'cinematic-overlay';
        overlay.innerHTML = `
            <div id="cinematic-flash"></div>
            <div id="cinematic-image-container">
                <img id="cinematic-image" src="" alt="">
                <div id="cinematic-dialogue"></div>
            </div>
            <div id="cinematic-skip-hint">Click to Skip</div>
        `;
        document.body.appendChild(overlay);

        // click to skip
        overlay.onclick = () => {
            if (this.isSkipping) return;
            this.isSkipping = true;
            this.endCinematic();
        };
    }

    // 단일 소환 처리
    handleSummonResult(creature) {
        this.currentSummon = creature; // 현재 소환된 크리처 기억
        this.currentBatch = null;      // 단일 소환이므로 배치는 null
        this.game.save();

        const isHighTier = ['SSR', 'UR'].includes(creature.def.rarity);
        if (isHighTier) {
            this.playCinematic(creature);
        } else {
            this.addLog(`소환 성공! [${creature.def.rarity}] ${creature.def.name}`);
            this.renderSummonResult(creature);
        }
    }

    // 일괄 소환 처리
    handleBatchSummonResult(results) {
        this.currentBatch = results; // 배치 결과 기억
        this.currentSummon = null;   // 배치는 개별 강조가 아니므로 null (시네마틱용 리더만 따로 지정)
        this.game.save();

        // 가장 높은 등급 찾기 (Cinematic용)
        let bestCreature = null;
        const highTiers = results.filter(c => ['SSR', 'UR'].includes(c.def.rarity));
        if (highTiers.length > 0) {
            // UR 우선, 그 다음 SSR 중 첫 번째
            bestCreature = highTiers.find(c => c.def.rarity === 'UR') || highTiers[0];
        }

        if (bestCreature) {
            this.playCinematic(bestCreature);
        } else {
            this.addLog(`10+1회 소환 완료! (${results.length}마리 획득)`);
            this.renderBatchResult(results);
        }
    }

    playCinematic(creature) {
        const overlay = document.getElementById('cinematic-overlay');
        const img = document.getElementById('cinematic-image');
        const dialogue = document.getElementById('cinematic-dialogue');
        const flash = document.getElementById('cinematic-flash');

        if (!overlay) return;

        this.isSkipping = false;
        overlay.className = 'active'; // Show overlay

        // Reset state
        img.src = creature.def.image;
        img.style.opacity = '0';
        dialogue.innerText = '';
        dialogue.className = '';
        flash.className = '';

        // Set Theme Class
        if (creature.def.rarity === 'UR') {
            overlay.classList.add('cinematic-ur');
            overlay.classList.remove('cinematic-ssr');
        } else {
            overlay.classList.add('cinematic-ssr');
            overlay.classList.remove('cinematic-ur');
        }

        // Sequence
        // 1. Flash
        flash.className = 'do-flash';

        // 2. Image Reveal (Ken Burns)
        setTimeout(() => {
            if (this.isSkipping) return;
            img.style.opacity = '1';
        }, 200);

        // 3. Shake (Impact)
        setTimeout(() => {
            if (this.isSkipping) return;
            document.body.classList.add('shake-screen');
            setTimeout(() => document.body.classList.remove('shake-screen'), 500);
        }, 500);

        // 4. Dialogue
        setTimeout(() => {
            if (this.isSkipping) return;
            const lines = creature.def.lines || {};
            dialogue.innerText = `"${lines.normal || '나를 부른 것이 당신인가요?'}"`;
            dialogue.classList.add('show-dialogue');
        }, 1500);

        // 5. Auto End
        setTimeout(() => {
            this.endCinematic();
        }, 4500);
    }

    endCinematic() {
        const overlay = document.getElementById('cinematic-overlay');
        if (!overlay.classList.contains('active')) return; // Already closed

        overlay.classList.remove('active');
        overlay.classList.remove('cinematic-ur');
        overlay.classList.remove('cinematic-ssr');

        // 종료 후 결과 화면 렌더링
        if (this.currentBatch) {
            // 배치 소환이었던 경우
            this.addLog(`10+1회 소환 완료! (${this.currentBatch.length}마리 획득)`);
            this.renderBatchResult(this.currentBatch);
            this.currentBatch = null;
        } else if (this.currentSummon) {
            // 단일 소환이었던 경우
            this.addLog(`소환 성공! [${this.currentSummon.def.rarity}] ${this.currentSummon.def.name}`);
            this.renderSummonResult(this.currentSummon);
            this.currentSummon = null;
        }
    }

    renderSummonResult(creature) {
        const resultBox = document.getElementById('summon-result');
        if (!resultBox) return;

        const rarityColorMap = {
            'Normal': '#95a5a6', 'Unique': '#2ecc71', 'Rare': '#3498db',
            'Special': '#9b59b6', 'SR': '#e67e22', 'SSR': '#e74c3c', 'UR': '#f1c40f'
        };
        const color = rarityColorMap[creature.def.rarity] || '#fff';

        const card = document.createElement('div');
        card.className = `creature-card rarity-${creature.def.rarity} fade-in`;
        card.style.border = `2px solid ${color}`;
        card.style.margin = '10px auto';

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-grade" style="color:${color}">${creature.def.rarity} [${creature.def.world || 'Unknown'}]</div>
                <div class="card-img">
                    <img src="${creature.def.image}" alt="${creature.def.name}">
                </div>
                <div class="card-name">${creature.def.name}</div>
            </div>
        `;

        resultBox.innerHTML = '';
        resultBox.appendChild(card);
    }

    // [NEW] 배치 결과 렌더링 (Grid)
    renderBatchResult(results) {
        const resultBox = document.getElementById('summon-result');
        if (!resultBox) return;

        resultBox.innerHTML = '';

        // 그리드 컨테이너
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(80px, 1fr))';
        grid.style.gap = '10px';
        grid.style.width = '100%';
        grid.style.padding = '10px';

        results.forEach((creature, index) => {
            const rarityColorMap = {
                'Normal': '#95a5a6', 'Unique': '#2ecc71', 'Rare': '#3498db',
                'Special': '#9b59b6', 'SR': '#e67e22', 'SSR': '#e74c3c', 'UR': '#f1c40f'
            };
            const color = rarityColorMap[creature.def.rarity] || '#fff';

            const card = document.createElement('div');
            // 애니메이션 딜레이 효과 (순차 등장)
            card.className = `creature-card mini rarity-${creature.def.rarity} fade-in`;
            card.style.border = `1px solid ${color}`;
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-grade" style="font-size:0.7em; color:${color}">${creature.def.rarity}</div>
                    <div class="card-img" style="height:60px;">
                        <img src="${creature.def.image}" alt="${creature.def.name}" style="object-fit:contain; width:100%; height:100%;">
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        resultBox.appendChild(grid);
    }
}
