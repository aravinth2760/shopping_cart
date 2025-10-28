import card from "../custom/card.js";

export class HomePage {
    #cartBtn = document.getElementById('cartCount');
    #homePage = document.getElementById('homePage');
    #cartPage = document.getElementById('cartPage');
    constructor(productLists) {
        this.productLists = productLists;
        this.cartItems = [];
        this.#viewProduct();
        this.#navigatePage();
    }

    #viewProduct() {
        card(this.productLists);
        this.#updateCartCount();
    }

    addToCart(productId) {
        const product = this.productLists.find((item) => item.id == productId);
        if (!product) return;

        this.cartItems.push(product);
        const button = document.getElementById(product.id);
        button.disabled = true;
        this.#updateCartCount();
    }

    #updateCartCount() {
        if (this.#cartBtn) {
            this.#cartBtn.innerHTML = `Cart [${this.cartItems.length}]`;
        }
    }

    #navigatePage(){
        this.#cartBtn.addEventListener('click',()=>{
            this.#homePage.classList.add('d-none');   
            this.#cartPage.classList.remove('d-none');
            this.#cartBtn.innerHTML = 'Home'; 
        });
    }
}