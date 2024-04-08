console.log('Export Module');

export const age = 24;

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

console.log(cart);

export { shippingCost, cart as ct };
