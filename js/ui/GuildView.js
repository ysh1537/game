
export default class GuildView {
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
        if (lobbyButtons && !document.getElementById('btn-open-guild')) {
            const btn = document.createElement('button');
            btn.id = 'btn-open-guild';
            btn.className = 'cyber-btn';
            btn.style.cssText = 'background: linear-gradient(135deg, #6c5ce7, #a29bfe); margin-top:5px;';
            btn.innerHTML = '🛡️ 길드';
            lobbyButtons.appendChild(btn);
        }
    }

    injectModal() {
        if (document.getElementById('guild-modal')) return;

        const modal = document.createElement('div');
        modal.id = 'guild-modal';
        modal.className = 'modal-overlay';
        modal.style.display = 'none';
        modal.innerHTML = `
            <div class="modal-content glass-panel" style="max-width:500px; width:90%; height:80%; display:flex; flex-direction:column;">
                <div class="modal-header" style="justify-content:space-between; display:flex; border-bottom:1px solid #444; padding-bottom:10px; margin-bottom:15px;">
                    <h2 style="margin:0; color:var(--accent-purple);">🛡️ 길드 (Guild)</h2>
                    <button class="btn-close-guild" style="background:none; border:none; color:white; font-size:1.5rem; cursor:pointer;">&times;</button>
                </div>
                
                <div id="guild-content" style="flex:1; overflow-y:auto;">
                    <!-- Dynamic Content -->
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    bindEvents() {
        const btnOpen = document.getElementById('btn-open-guild');
        const modal = document.getElementById('guild-modal');
        const btnClose = modal?.querySelector('.btn-close-guild');

        if (btnOpen) btnOpen.onclick = () => this.openGuild();
        if (btnClose) btnClose.onclick = () => { modal.style.display = 'none'; };

        // Listen for updates
        this.game.guildManager.on('guild:updated', () => this.renderContent());
    }

    openGuild() {
        const modal = document.getElementById('guild-modal');
        if (modal) {
            modal.style.display = 'flex';
            this.renderContent();
        }
    }

    renderContent() {
        const container = document.getElementById('guild-content');
        if (!container) return;

        const guild = this.game.guildManager.guild;

        if (!guild) {
            // Not in Guild -> Create/Join View
            container.innerHTML = `
                <div style="text-align:center; padding:30px;">
                    <p style="color:#aaa; margin-bottom:20px;">아직 가입한 길드가 없습니다.</p>
                    <div style="background:rgba(0,0,0,0.2); padding:20px; border-radius:12px; margin-bottom:20px;">
                        <h3 style="color:var(--accent-gold); margin-bottom:15px;">길드 창설</h3>
                        <input type="text" id="input-guild-name" class="cyber-input" placeholder="길드명 입력" style="margin-bottom:10px; width:80%;">
                        <div style="color:#f1c40f; font-size:0.9em; margin-bottom:15px;">필요: 10,000 Gold</div>
                        <button id="btn-create-guild" class="cyber-btn action">창설하기</button>
                    </div>
                    <div style="opacity:0.5; font-size:0.8em;">(가입 기능은 랭킹에서 지원 예정)</div>
                </div>
            `;

            // Bind Create
            const btnCreate = container.querySelector('#btn-create-guild');
            if (btnCreate) {
                btnCreate.onclick = () => {
                    const name = document.getElementById('input-guild-name').value;
                    if (!name) return alert("길드명을 입력하세요.");
                    const res = this.game.guildManager.createGuild(name);
                    if (!res.success) alert(res.reason);
                };
            }
        } else {
            // Already in Guild -> Info View
            container.innerHTML = `
                <div style="background:rgba(108, 92, 231, 0.1); padding:20px; border-radius:12px; margin-bottom:20px; text-align:center;">
                    <h2 style="color:white; margin:0;">${guild.name}</h2>
                    <div style="color:#aaa; font-size:0.9em;">Lv.${guild.level} | Master: ${guild.members[0].name}</div>
                    <div style="margin-top:10px; font-size:0.9em; color:#fff;">
                        EXP: ${guild.exp} / ${guild.maxExp}
                    </div>
                </div>

                <div style="margin-bottom:20px;">
                    <h4 style="color:var(--accent-cyan); border-bottom:1px solid #444; padding-bottom:5px;">길드 버프</h4>
                    <div style="display:flex; justify-content:space-around; margin-top:10px;">
                        <div style="text-align:center;">
                            <div style="font-size:1.5em;">⚔️</div>
                            <div>공격력 +${(guild.buffs.atk * 100).toFixed(0)}%</div>
                        </div>
                        <div style="text-align:center;">
                            <div style="font-size:1.5em;">💰</div>
                            <div>골드획득 +${(guild.buffs.gold * 100).toFixed(0)}%</div>
                        </div>
                    </div>
                </div>

                <div style="margin-bottom:20px;">
                    <h4 style="color:var(--accent-gold); border-bottom:1px solid #444; padding-bottom:5px;">기부 하기</h4>
                    <div style="display:flex; gap:10px; justify-content:center; margin-top:10px;">
                        <button class="cyber-btn small btn-donate" data-amt="1000">1,000 G</button>
                        <button class="cyber-btn small btn-donate" data-amt="10000">10,000 G</button>
                        <button class="cyber-btn small btn-donate" data-amt="50000">50,000 G</button>
                    </div>
                </div>
            `;

            // Bind Donate
            container.querySelectorAll('.btn-donate').forEach(btn => {
                btn.onclick = () => {
                    const amt = parseInt(btn.dataset.amt);
                    const res = this.game.guildManager.donate(amt);
                    if (!res.success) alert(res.reason);
                    else alert(`${amt}골드를 기부했습니다!`);
                };
            });
        }
    }
}
