console.log('Export Module');

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

export const age = 24;

const shippingCost = 10;
const cart = [];
console.log(cart);

export { shippingCost, cart as ct };

///////////////////////////////////////
//Top-Level await
/* 
console.log('Fetch Start');
const data = await fetch(`https://jsonplaceholder.typicode.com/comments`);
const jsonData = await data.json();
console.log('Fetch Finish');

console.log(jsonData);



*/
