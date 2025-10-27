var cartItems = [];

(async() => {
    await fetch('./data.json').then((res) => {
        if (res.status === 200) {
            res.json().then((data) => {
                card(data);
            });
        }
    }).catch((error) => console.log(error));
})();


// View Product
function card(item) {
    console.log(item)
    const cartItem = document.getElementById('cartItem');
     item.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card', 'm-sm-1', 'm-md-2', 'm-lg-3');
        card.innerHTML = `
    <img src="${item.image}" class="card-img-top" height="300px" alt="${item.name}">
    <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
            <h6 class="card-title m-0">${item.name}</h6>
            <button type="button" class="btn btn-sm m-0 p-0" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Add To Cart.">
                <img src="./assets/icons/add-shopping-cart.png" width="28px"/>
            </button>
        </div>
      <p class="card-text mt-2 mb-2">Price : <span class="fst-italic fw-normal">${item.price}</span></p>
      <p class="card-text fw-light">${item.description}</p>
    </div>
  `;
        cartItem.appendChild(card);
    });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
}