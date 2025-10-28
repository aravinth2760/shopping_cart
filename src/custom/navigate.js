import CartPage from "../js/cartPage.js";
import { getCartCount } from "./cart.js";

export const navigate = () => {
    const navBtn = document.getElementById('cartCount');
    const homePage = document.getElementById('homePage');
    const cartPage = document.getElementById('cartPage');
    navBtn.addEventListener('click', () => {
        const currPage = navBtn.innerHTML == 'Home' ? 'home' : 'cart';
        if (currPage == 'home') {
            navBtn.innerHTML = `Cart[${getCartCount()}]`;
            homePage.classList.remove('d-none');
            cartPage.classList.add('d-none');
        } else {
            navBtn.innerHTML = 'Home';
            homePage.classList.add('d-none');
            cartPage.classList.remove('d-none');
            new CartPage();
        }
    })
}