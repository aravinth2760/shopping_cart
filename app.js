import { HomePage } from "./src/js/homePage.js";
import { navigate } from "./src/custom/navigate.js";
import CartPage from "./src/js/cartPage.js";

(async () => {
    await fetch('./data.json').then((res) => {
        if (res.status === 200) {
            res.json().then((data) => {
                const homePage = new HomePage(data);
                const cartPage = new CartPage();
                window.addToCart = homePage.addToCart.bind(homePage);
                window.updatePurchaseCount = cartPage.updatePurchaseCount.bind(cartPage);
                navigate()
            });
        }
    }).catch((error) => console.log(error));
})();