import BaseView from './BaseView.js';

export default class SummonView extends BaseView {
    init() {
        // 소환 버튼 바인딩
        const btnNormal1 = document.getElementById('btn-summon-n1');
        const btnNormal10 = document.getElementById('btn-summon-n10');
        const btnPremium1 = document.getElementById('btn-summon-p1');
        const btnPremium10 = document.getElementById('btn-summon-p10');

        if (btnNormal1) btnNormal1.onclick = () => this.game.creatureManager.tryNormalSummon();
        if (btnNormal10) btnNormal10.onclick = () => this.game.creatureManager.summonBatch('normal', 11);
        if (btnPremium1) btnPremium1.onclick = () => this.game.creatureManager.tryPremiumSummon();
        if (btnPremium10) btnPremium10.onclick = () => this.game.creatureManager.summonBatch('premium', 11);

        // 결과 이벤트 감지
        this.game.creatureManager.on('summon:result', (creature) => {
            this.handleSummonResult(creature);
        });

        this.game.creatureManager.on('summon:failed', (data) => {
            this.addLog(`소환 실패: ${data.reason}`, "normal");
            alert(`소환 실패: ${data.reason}`);
        });

        // [NEW] Inject Cinematic Overlay if not exists
        this.createCinematicOverlay();
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
        `;
        document.body.appendChild(overlay);

        // click to skip
        overlay.onclick = () => {
            if (this.isSkipping) return;
            this.isSkipping = true;
            this.endCinematic();
        };
    }

    handleSummonResult(creature) {
        this.game.save(); // Save immediately

        // Determine if cinematic is needed
        const isHighTier = ['SSR', 'UR'].includes(creature.def.rarity);

        if (isHighTier) {
            this.playCinematic(creature);
        } else {
            this.addLog(`소환 성공! [${creature.def.rarity}] ${creature.def.name}`);
            this.renderSummonResult(creature);
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
            // Use lines from CreatureData or fallback
            const lines = creature.def.lines || {};
            dialogue.innerText = `"${lines.normal || '나를 부른 것이 당신인가요?'}"`;
            dialogue.classList.add('show-dialogue');
        }, 1500);

        // 5. Auto End
        setTimeout(() => {
            this.endCinematic(creature);
        }, 4500);
    }

    endCinematic(creature = null) {
        const overlay = document.getElementById('cinematic-overlay');
        overlay.classList.remove('active');
        overlay.classList.remove('cinematic-ur');
        overlay.classList.remove('cinematic-ssr');

        // Render result card after cinematic
        // Note: We need the creature object if passed, or we assume it's the last summoned one
        // Ideally we should pass logic better, but for now this visual flow is fine.
        // We already saved the game. The rendering on 'Result Box' happens now.

        // Re-render result box if we have the creature ref, 
        // but playCinematic is async.
        // Let's just render the result box at the START but hidden? 
        // Or render it now.
        // Actually handleSummonResult called renderSummonResult ONLY for low tier.
        // So we need to call it here.

        // WARNING: 'creature' arg might be click event object if called from onclick
        // We need to store current creature in `this.currentSummon` to be safe
    }

    // Revised handleSummonResult to store ref
    handleSummonResult(creature) {
        this.currentSummon = creature;
        this.game.save();

        const isHighTier = ['SSR', 'UR'].includes(creature.def.rarity);
        if (isHighTier) {
            this.playCinematic(creature);
        } else {
            this.addLog(`소환 성공! [${creature.def.rarity}] ${creature.def.name}`);
            this.renderSummonResult(creature);
        }
    }

    // Revised endCinematic
    endCinematic() {
        const overlay = document.getElementById('cinematic-overlay');
        if (!overlay.classList.contains('active')) return; // Already closed

        overlay.classList.remove('active');

        if (this.currentSummon) {
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
}
