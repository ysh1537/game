import BaseView from './BaseView.js';

export default class ShopView extends BaseView {
    init() {
        this.game.shopManager.on('shop:updated', () => {
            if (this.ui.contentShop && this.ui.contentShop.classList.contains('active')) {
                this.render();
            }
        });

        this.game.shopManager.on('shop:purchaseSuccess', (data) => {
            this.addLog(data.message, "shop");
            alert(data.message);
        });

        this.game.shopManager.on('shop:purchaseFailed', (data) => {
            this.addLog(`구매 실패: ${data.reason}`, "shop");
            alert(data.reason);
        });

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'shop') {
                this.render();
            }
        });
    }

    render() {
        const allItems = this.game.shopManager.getAllItems();
        if (!this.ui.shopList) return;

        this.ui.shopList.innerHTML = '';

        // 광고 배너 제어
        if (this.ui.adBanner) {
            this.ui.adBanner.style.display = this.game.shopManager.removeAdsPurchased ? 'none' : 'block';
        }

        this._renderSection("골드 보급 (젬 사용)", allItems.goldPacks);
        this._renderSection("젬 충전 (가상 결제)", allItems.gemPacks);
        this._renderSection("특수 패키지", allItems.bundles);
        this._renderSection("기타 아이템", allItems.specials);
    }

    _renderSection(title, items) {
        if (!items || items.length === 0) return;

        const h4 = document.createElement('h4');
        h4.textContent = title;
        h4.style.cssText = "grid-column: 1 / -1; margin: 20px 0 10px; padding-bottom: 8px; border-bottom: 1px solid var(--border-subtle); color: var(--accent-primary);";
        this.ui.shopList.appendChild(h4);

        items.forEach(item => {
            const isPurchased = this.game.shopManager.isPurchased(item.id);
            const isPremium = item.priceType === 'real';
            const icon = item.priceType === 'gem' ? '💎' : (item.priceType === 'gold' ? '💰' : '🎁');

            const div = document.createElement('div');
            div.className = `shop-card ${isPremium ? 'premium' : ''} feature-card`;
            div.style.textAlign = "center";

            div.innerHTML = `
                <div class="shop-icon" style="font-size:2rem; margin-bottom:10px;">${icon}</div>
                <div class="shop-name" style="font-weight:bold; margin-bottom:5px;">${item.name}</div>
                <div class="shop-desc" style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:15px; height:2.4em; overflow:hidden;">${item.description}</div>
                <button class="cyber-btn small btn-buy ${item.priceType === 'gem' ? 'premium' : ''}" style="width:100%" data-id="${item.id}" ${isPurchased ? 'disabled' : ''}>
                    ${isPurchased ? '수령 완료' : (item.priceLabel || `${item.priceValue} ${item.priceType === 'gem' ? '젬' : '골드'}`)}
                </button>
            `;

            div.querySelector('.btn-buy').addEventListener('click', () => {
                this.game.shopManager.buyItem(item.id);
            });

            this.ui.shopList.appendChild(div);
        });
    }
}
