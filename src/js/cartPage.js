import { getCartItems, getCartCount, removeFromCart, updateTotalPrice, getTotalPrice } from "../custom/cart.js";
class CartPage {
    #cartPage = document.getElementById('cartPage');
    constructor() {
        this.#viewCartPage();
    }


    #viewCartPage() {
        if (getCartCount()) {
            const totalPriceEle = document.createElement('p');
            totalPriceEle.id = 'totalPrice';
            totalPriceEle.className = 'p-4 bg-light h6 bg-white mt-3 mb-3 text-end'
            getCartItems().forEach((item) => {
                const card = document.createElement('section');
                card.classList.add('bg-white', 'm-1', 'p-2', 'd-flex', 'justify-content-between', 'align-items-center');
                card.id = 'parentSection' + item.id;
                card.innerHTML = `<div class="d-flex">
                    <img src="${item.image}" style="width: 75px;height: 75px;" alt="">
                <div class="ms-2">
                    <p class="m-1">${item.name}</p>
                    <p class="m-1">₹${item.price}</p>
                </div>
                </div>
                <div class="d-flex justify-content-evenly me-0 me-md-3 me-lg-5" id="CartPage${item.id}">
                    <p class="decrementBtn p-2 ps-3 pe-3 border" onclick="updatePurchaseCount(${item.id},'decrement')">-</p>
                    <p class="p-2 ps-3 pe-3 border" id="purchaseCount${item.id}">${item.purchaseCount}</p>
                    <p class="incrementBtn p-2 ps-3 pe-3 border" onclick="updatePurchaseCount(${item.id},'increment')" id="increment">+</p>
                </div>`
                this.#cartPage.appendChild(card);
                updateTotalPrice(getTotalPrice() + item.price);
                if(getCartCount) totalPriceEle.innerHTML = 'Total Price : ₹' + getTotalPrice();
                this.#cartPage.appendChild(totalPriceEle);
            });

        }
    }

    updatePurchaseCount(productId, value) {
        const product = getCartItems().find((item) => item.id === productId);
        if (!product) return;

        const parentSection = document.getElementById('parentSection' + product.id);
        const ele = document.getElementById('purchaseCount' + product.id);
        const totalPriceEle = document.getElementById('totalPrice');

        switch (value) {
            case 'increment':
                product.purchaseCount++;
                updateTotalPrice(getTotalPrice() + product.price);
                break;
            case 'decrement':
                if (product.purchaseCount > 1) product.purchaseCount--;
                else {
                    parentSection.remove();
                    removeFromCart(product.id);
                }
                if(getCartCount()) updateTotalPrice(getTotalPrice() - product.price);
                break;
        }
        ele.innerHTML = product.purchaseCount;
        totalPriceEle.innerHTML = 'Total Price : ₹' + getTotalPrice();
    }
}

export default CartPage;