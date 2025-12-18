import BaseView from './BaseView.js';

export default class AuthView extends BaseView {
    constructor(game, uiManager, langManager) {
        super(game, uiManager);
        this.langManager = langManager;
        this.selectedPersona = 'director_vesper'; // Default
    }

    init() {
        // 페르소나 선택 버튼
        const personaBtns = document.querySelectorAll('.persona-option');
        personaBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                personaBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.selectedPersona = btn.dataset.persona;
                this._updatePersonaInfo();
            });
        });

        // 폼 제출
        const btnSubmit = document.getElementById('btn-auth-submit');
        if (btnSubmit) {
            btnSubmit.addEventListener('click', () => this.handleAuthSubmit());
        }

        // 로그인/사인업 모드 전환
        const authToggles = document.querySelectorAll('input[name="auth-mode"]');
        authToggles.forEach(radio => {
            radio.addEventListener('change', () => this._updateAuthFormUI());
        });

        // 로그아웃 버튼
        const btnLogout = document.getElementById('btn-logout');
        if (btnLogout) {
            btnLogout.addEventListener('click', () => {
                this.game.authManager.logout();
                location.reload(); // 세션 초기화를 위해 리로드 권장
            });
        }

        this.game.authManager.events.on('auth:login', () => {
            if (this.ui.loginOverlay) this.ui.loginOverlay.style.display = 'none';
        });

        this._updatePersonaInfo();
        this._updateAuthFormUI();
    }

    handleAuthSubmit() {
        const username = document.getElementById('auth-username')?.value;
        const password = document.getElementById('auth-password')?.value;
        const isLogin = document.getElementById('mode-login')?.checked;

        if (!username || !password) {
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }

        if (isLogin) {
            const res = this.game.authManager.login(username, password);
            if (res.success) {
                this.game.startMainGame();
            } else {
                alert(res.message);
            }
        } else {
            const res = this.game.authManager.signup(username, password, this.selectedPersona);
            if (res.success) {
                alert("회원가입이 완료되었습니다! 자동으로 로그인합니다.");
                this.game.startMainGame();
            } else {
                alert(res.message);
            }
        }
    }

    _updatePersonaInfo() {
        const descEl = document.getElementById('persona-desc');
        if (!descEl) return;

        const info = this.langManager.getPersonaInfo(this.selectedPersona);
        descEl.innerHTML = `
            <div style="font-weight:bold; color:var(--accent-primary); font-size:1.1rem; margin-bottom:5px;">${info.name}</div>
            <div style="font-size:0.9rem; line-height:1.4;">${info.description}</div>
            <div style="margin-top:8px; font-size:0.85rem; color:var(--accent-tertiary);">[패시브] ${info.passive}</div>
        `;
    }

    _updateAuthFormUI() {
        const isLogin = document.getElementById('mode-login')?.checked;
        const btnSubmit = document.getElementById('btn-auth-submit');
        const personaSection = document.querySelector('.persona-selection');

        if (btnSubmit) {
            btnSubmit.innerText = isLogin ? (this.langManager.currentLang === 'kr' ? '본부 접속' : 'Login') : (this.langManager.currentLang === 'kr' ? '새 계정 생성' : 'Sign Up');
        }

        if (personaSection) {
            personaSection.style.display = isLogin ? 'none' : 'block';
        }
    }
}
