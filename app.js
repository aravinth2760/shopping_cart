import { HomePage } from "./src/js/homePage.js";
import { navigate } from "./src/custom/navigate.js";

(async () => {
    await fetch('./data.json').then((res) => {
        if (res.status === 200) {
            res.json().then((data) => {
                const homePage = new HomePage(data);
                window.addToCart = homePage.addToCart.bind(homePage);
                navigate()
            });
        }
    }).catch((error) => console.log(error));
})();