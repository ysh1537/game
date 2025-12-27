
export default class RankingView {
    constructor(game) {
        this.game = game;
        this.init();
    }

    init() {
        this.injectButton();
        this.injectModal();
        this.bindEvents();
    }

    injectButton() {
        const lobbyButtons = document.getElementById('lobby-buttons');
        if (lobbyButtons && !document.getElementById('btn-open-ranking')) {
            const btn = document.createElement('button');
            btn.id = 'btn-open-ranking';
            btn.className = 'cyber-btn';
            btn.style.cssText = 'background: linear-gradient(135deg, #f1c40f, #e67e22); margin-top:5px;';
            btn.innerHTML = '🏆 랭킹';
            lobbyButtons.appendChild(btn);
        }
    }

    injectModal() {
        if (document.getElementById('ranking-modal')) return;

        const modal = document.createElement('div');
        modal.id = 'ranking-modal';
        modal.className = 'modal-overlay';
        modal.style.display = 'none';
        modal.innerHTML = `
            <div class="modal-content glass-panel" style="max-width:500px; width:90%; height:80%; display:flex; flex-direction:column;">
                <div class="modal-header" style="justify-content:space-between; display:flex; border-bottom:1px solid #444; padding-bottom:10px; margin-bottom:15px;">
                    <h2 style="margin:0; color:var(--accent-gold);">🏆 명예의 전당</h2>
                    <button class="btn-close-ranking" style="background:none; border:none; color:white; font-size:1.5rem; cursor:pointer;">&times;</button>
                </div>
                
                <div style="display:flex; gap:10px; margin-bottom:15px; justify-content:center;">
                    <button class="cyber-btn small ranking-tab active" data-type="stage">스테이지</button>
                    <button class="cyber-btn small ranking-tab" data-type="tower">무한의 탑</button>
                    <button class="cyber-btn small ranking-tab" data-type="prestige">환생</button>
                </div>

                <div id="ranking-list" style="flex:1; overflow-y:auto; padding:10px; background:rgba(0,0,0,0.2); border-radius:8px;">
                    <!-- List Items -->
                </div>
                
                <div id="my-rank-info" style="margin-top:15px; padding:10px; background:rgba(255,255,255,0.05); border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
                    <span>내 순위: <span id="my-rank-val" style="color:var(--accent-cyan); font-weight:bold;">-</span></span>
                    <span id="my-score-val" style="color:white;">-</span>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    bindEvents() {
        const btnOpen = document.getElementById('btn-open-ranking');
        const modal = document.getElementById('ranking-modal');
        const btnClose = modal?.querySelector('.btn-close-ranking');

        if (btnOpen) btnOpen.onclick = () => this.openRanking('stage');
        if (btnClose) btnClose.onclick = () => { modal.style.display = 'none'; };

        const tabs = modal?.querySelectorAll('.ranking-tab');
        tabs?.forEach(tab => {
            tab.onclick = () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.renderRanking(tab.dataset.type);
            };
        });
    }

    openRanking(type = 'stage') {
        const modal = document.getElementById('ranking-modal');
        if (modal) {
            modal.style.display = 'flex';
            this.renderRanking(type);
        }
    }

    renderRanking(type) {
        const container = document.getElementById('ranking-list');
        if (!container) return;

        container.innerHTML = '<div style="text-align:center; padding:20px;">로딩 중...</div>';

        // Use RankingManager
        const data = this.game.rankingManager.getLeaderboard(type);

        container.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('div');
            row.style.cssText = `
                display:flex; justify-content:space-between; padding:12px; margin-bottom:8px; 
                background:${item.isMe ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255,255,255,0.02)'}; 
                border-radius:8px; border:1px solid ${item.isMe ? 'var(--accent-cyan)' : 'transparent'};
            `;

            let medal = '';
            if (item.rank === 1) medal = '🥇';
            else if (item.rank === 2) medal = '🥈';
            else if (item.rank === 3) medal = '🥉';
            else medal = `<span style="display:inline-block; width:20px; text-align:center;">${item.rank}</span>`;

            row.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px;">
                    <div style="font-size:1.2em; font-weight:bold; color:${item.rank <= 3 ? '#ffeaa7' : '#aaa'}; width:30px;">${medal}</div>
                    <div style="color:${item.isMe ? 'var(--accent-cyan)' : 'white'}; font-weight:${item.isMe ? 'bold' : 'normal'};">
                        ${item.name}
                    </div>
                </div>
                <div style="color:#ddd;">
                    ${item.score.toLocaleString()} 
                    <span style="font-size:0.8em; color:#666;">
                        ${type === 'stage' ? 'Stg' : type === 'tower' ? 'F' : '회'}
                    </span>
                </div>
            `;
            container.appendChild(row);
        });

        // Update My Info Footer
        const myData = data.find(d => d.isMe);
        if (myData) {
            document.getElementById('my-rank-val').innerText = `${myData.rank}위`;
            document.getElementById('my-score-val').innerText = `${myData.score.toLocaleString()}`;
        }
    }
}
