console.log('Export Module');

export const age = 24;

const shippingCost = 10;
const cart = [];

console.log(cart);

export { shippingCost, cart as ct };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
