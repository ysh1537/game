
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
        tooltip.style.padding = '15px';
        tooltip.style.background = 'rgba(0, 0, 0, 0.9)';
        tooltip.style.border = '2px solid var(--accent-cyan)';
        tooltip.style.borderRadius = '8px';
        tooltip.style.color = '#fff';
        tooltip.style.maxWidth = '300px';
        tooltip.style.boxShadow = '0 0 20px var(--accent-cyan)';
        tooltip.style.transition = 'all 0.3s ease';

        const text = document.createElement('p');
        text.id = 'tutorial-text';
        text.style.margin = '0 0 10px 0';
        tooltip.appendChild(text);

        // Highlight Frame
        const frame = document.createElement('div');
        frame.id = 'tutorial-frame';
        frame.style.position = 'absolute';
        frame.style.border = '3px solid var(--accent-orange)';
        frame.style.boxShadow = '0 0 15px var(--accent-orange), inset 0 0 15px var(--accent-orange)';
        frame.style.borderRadius = '4px';
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
    }

    showStep(data) {
        if (!this.overlay) this.createOverlay();
        this.overlay.style.display = 'block';
        this.textElement.textContent = data.message;

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
                if (top + 100 > window.innerHeight) {
                    top = rect.top - 120; // Flip up
                }
                this.tooltip.style.top = `${top}px`;
                this.tooltip.style.left = `${rect.left}px`;
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
