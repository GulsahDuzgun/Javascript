///////////////////////////////////////
//
/**/
import cloneObj from 'lodash-es';
import { age, addToCart, ct, shippingCost as sCost } from './shoppingCard.js';

const state = {
  cart: [
    { product: 'pizza', quantity: 3 },
    { product: 'bread', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const newObj = Object.assign({}, state);
const newObj2 = cloneObj(state);

state.user.loggedIn = false;
newObj.cart[0].quantity = 3;
newObj2.cart[2].quantity = 3;
console.log(newObj);
console.log(newObj2);

console.log(state);

console.log('Import module');
console.log(age);
console.log(sCost);
console.log(ct);

addToCart('bread', 7);

if (module.hot) {
  module.hot.accept();
}

///////////////////////////////////////
//Common.js Modules
/* 

//Export with CommonJS
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart (${totalPrice})`);
};

//import with CommonJS
const {addToCart} = require('./shoppingCard.js')
*/

///////////////////////////////////////
//The Module Pattern
/* 

const shoppingCard2 = (function () {
  const cart = [];
  const shippingCoast = 10;
  const totalPrice = 127;
  const totalQuantity = 27;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart (${totalPrice})`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    shippingCoast,
    totalQuantity,
  };
})();

shoppingCard2.addToCart('salad', 2);
shoppingCard2.addToCart('egg', 3);

console.log(shoppingCard2.cart);
console.log(shoppingCard2.totalPrice);
console.log(shoppingCard2);
*/

///////////////////////////////////////
//Top-Level await
/*

const getLastPost = async function () {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    res => res.json()
  );

  const { title, body: comment } = data.at(-1);
  return { title, comment };
};

const res = getLastPost(); //Promise
const res2 = getLastPost().then(res => console.log(res));
const res3 = await getLastPost();
console.log(res);
console.log(res2);
console.log(res3);
*/

///////////////////////////////////////
// Exporting and Importing in ES6 Modules - Part II
/* 

// ShoppingCart.addToCart('grapes', 3);
// console.log(ShoppingCart.age);
console.log(ct);

add('apple', 2);

console.log(age);
console.log(ct);
*/

///////////////////////////////////////
// Exporting and Importing in ES6 Modules
/* 

console.log('Import module');
console.log(age);
console.log(sCost);
console.log(ct);

addToCart('bread', 7);
*/
