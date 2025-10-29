let cartItems = [];
let totalPrice = 0;

export const getCartItems = () => cartItems;

export const addToCartItem = (product) => {
  const exists = cartItems.find(item => item.id === product.id);
  if (!exists) {
    cartItems.push(product);
  } else {
    cartItems = cartItems.filter(item => item.id !== product.id);
  }
};

export const removeFromCart = (productId) => {
  cartItems = cartItems.filter(item => item.id !== productId);
};

export const getCartCount = () => cartItems.length;

export const setCartItems = (items) => cartItems = items;

export const getTotalPrice = () => totalPrice;
export const updateTotalPrice = (price) => {
  totalPrice = price;
}

