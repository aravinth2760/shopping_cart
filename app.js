import { HomePage } from "./src/js/home.js";

(async () => {
    await fetch('./data.json').then((res) => {
        if (res.status === 200) {
            res.json().then((data) => {
                const homePage = new HomePage(data);
                window.addToCart = homePage.addToCart.bind(homePage);
            });
        }
    }).catch((error) => console.log(error));
})();