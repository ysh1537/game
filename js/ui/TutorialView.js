
import BaseView from './BaseView.js';

export default class TutorialView extends BaseView {
    constructor(game) {
        super(game);
        this.overlay = null;
        this.tooltip = null;
    }

    init() {
        // Create Tutorial Overlay Elements if not exist
        this.createOverlay();

        // Listen to Manager Events
        this.game.events.on('tutorial:stepChanged', (data) => {
            this.showStep(data);
        });

        this.game.events.on('tutorial:completed', () => {
            this.hide();
        });
    }

    createOverlay() {
        // Check if exists
        if (document.getElementById('tutorial-overlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'tutorial-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.pointerEvents = 'none'; // Passthrough clicks
        overlay.style.zIndex = '9999';
        overlay.style.display = 'none';

        // Tooltip Box
        const tooltip = document.createElement('div');
        tooltip.id = 'tutorial-tooltip';
        tooltip.style.position = 'absolute';
        tooltip.style.padding = '20px';
        tooltip.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(20, 20, 40, 0.95))';
        tooltip.style.border = '2px solid var(--accent-cyan)';
        tooltip.style.borderRadius = '12px';
        tooltip.style.color = '#fff';
        tooltip.style.maxWidth = '320px';
        tooltip.style.boxShadow = '0 0 30px var(--accent-cyan), 0 10px 40px rgba(0,0,0,0.5)';
        tooltip.style.transition = 'all 0.3s ease';
        tooltip.style.pointerEvents = 'auto';

        // 진행 표시
        const progress = document.createElement('div');
        progress.id = 'tutorial-progress';
        progress.style.fontSize = '0.8em';
        progress.style.color = 'var(--accent-cyan)';
        progress.style.marginBottom = '10px';
        progress.style.fontWeight = 'bold';
        tooltip.appendChild(progress);

        const text = document.createElement('p');
        text.id = 'tutorial-text';
        text.style.margin = '0 0 15px 0';
        text.style.fontSize = '1em';
        text.style.lineHeight = '1.5';
        tooltip.appendChild(text);

        // 버튼 컨테이너
        const btnContainer = document.createElement('div');
        btnContainer.style.display = 'flex';
        btnContainer.style.gap = '10px';
        btnContainer.style.justifyContent = 'space-between';

        // 건너뛰기 버튼
        const skipBtn = document.createElement('button');
        skipBtn.id = 'btn-tutorial-skip';
        skipBtn.textContent = '건너뛰기';
        skipBtn.className = 'cyber-btn small';
        skipBtn.style.background = 'rgba(255,255,255,0.1)';
        skipBtn.style.color = '#aaa';
        skipBtn.style.padding = '8px 15px';
        skipBtn.style.fontSize = '0.85em';
        skipBtn.onclick = () => {
            if (this.game.tutorialManager) {
                this.game.tutorialManager.skipTutorial();
                this.hide();
                if (this.game.ui) this.game.ui.showToast('튜토리얼을 건너뛰었습니다.');
            }
        };
        btnContainer.appendChild(skipBtn);

        // 완료 버튼 (마지막 단계용)
        const nextBtn = document.createElement('button');
        nextBtn.id = 'btn-tutorial-next';
        nextBtn.textContent = '완료! 🎉';
        nextBtn.className = 'cyber-btn';
        nextBtn.style.background = 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))';
        nextBtn.style.padding = '8px 20px';
        nextBtn.style.display = 'none';
        nextBtn.onclick = () => {
            if (this.game.tutorialManager) {
                this.game.tutorialManager.completeTutorial();
                this.hide();
                if (this.game.ui) this.game.ui.showToast('🎊 튜토리얼 완료! 행운을 빕니다!');
                // 완료 보상 지급
                if (this.game.resourceManager) {
                    this.game.resourceManager.addGem(50);
                    this.game.resourceManager.addGold(10000);
                }
            }
        };
        btnContainer.appendChild(nextBtn);

        tooltip.appendChild(btnContainer);

        // Highlight Frame
        const frame = document.createElement('div');
        frame.id = 'tutorial-frame';
        frame.style.position = 'absolute';
        frame.style.border = '3px solid var(--accent-orange)';
        frame.style.boxShadow = '0 0 15px var(--accent-orange), inset 0 0 15px var(--accent-orange)';
        frame.style.borderRadius = '8px';
        frame.style.pointerEvents = 'none';
        frame.style.transition = 'all 0.3s ease';
        frame.style.animation = 'pulse-border 1.5s infinite';

        overlay.appendChild(tooltip);
        overlay.appendChild(frame);
        document.body.appendChild(overlay);

        this.overlay = overlay;
        this.tooltip = tooltip;
        this.frame = frame;
        this.textElement = text;
        this.progressElement = progress;
        this.nextBtn = nextBtn;
        this.skipBtn = skipBtn;
    }

    showStep(data) {
        if (!this.overlay) this.createOverlay();
        if (!this.overlay) return; // Guard clause
        this.overlay.style.display = 'block';
        this.textElement.textContent = data.message;

        // 진행 표시 업데이트
        const totalSteps = 7;
        if (this.progressElement) {
            this.progressElement.textContent = `📖 튜토리얼 ${data.step}/${totalSteps}`;
        }

        // 마지막 단계 버튼 표시
        if (this.nextBtn) {
            this.nextBtn.style.display = data.isLast ? 'block' : 'none';
        }
        if (this.skipBtn) {
            this.skipBtn.style.display = data.isLast ? 'none' : 'block';
        }

        // Position Highlight
        if (data.targetId) {
            const target = document.getElementById(data.targetId);
            if (target) {
                const rect = target.getBoundingClientRect();

                // Set Frame
                this.frame.style.width = `${rect.width + 10}px`;
                this.frame.style.height = `${rect.height + 10}px`;
                this.frame.style.top = `${rect.top - 5}px`;
                this.frame.style.left = `${rect.left - 5}px`;
                this.frame.style.display = 'block';

                // Set Tooltip Position (Bottom or Top)
                let top = rect.bottom + 15;
                if (top + 150 > window.innerHeight) {
                    top = rect.top - 180; // Flip up
                }
                this.tooltip.style.top = `${top}px`;
                this.tooltip.style.left = `${Math.max(10, rect.left)}px`;
                this.tooltip.style.transform = 'none';
            } else {
                // Target not found, center tooltip
                this.frame.style.display = 'none';
                this.tooltip.style.top = '50%';
                this.tooltip.style.left = '50%';
                this.tooltip.style.transform = 'translate(-50%, -50%)';
            }
        }
    }

    hide() {
        if (this.overlay) this.overlay.style.display = 'none';
    }
}
