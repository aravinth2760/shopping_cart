import card from "../custom/card.js";
import { addToCartItem ,getCartCount} from "../custom/cart.js";

export class HomePage {
    #cartBtn = document.getElementById('cartCount');

    constructor(productLists) {
        this.productLists = productLists;
        this.#viewProduct();
    }

    #viewProduct() {
        card(this.productLists);
        this.#updateCartCount();
    }

    addToCart(productId) {
        const product = this.productLists.find((item) => item.id == productId);
        if (!product) return;

        addToCartItem(product);
        const button = document.getElementById(product.id);
        button.disabled = true;
        this.#updateCartCount();
    }

    #updateCartCount() {
        if (this.#cartBtn) {
            this.#cartBtn.innerHTML = `Cart [${getCartCount()}]`;
        }
    }
}