'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  getOrder: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const { name: restName, categories: cat, openingHours: hours } = restaurant;
console.log(restName, cat, hours);

const { menu = [], mainMenu: resMenu = [] } = restaurant;
console.log(menu, resMenu);

/* ----- Destructuring Arrays  Part--III  -----


const arr = [2, 3, [4, 5]];
const [x, , [y, z]] = arr;
console.log(x, y, z);

const apiCall = [7, 2];
const [m, n, i] = apiCall;
const [m2 = 1, n2 = 1, i2 = 1] = apiCall;

console.log(m, n, i); // 7 2 undefined
console.log(m2, n2, i2); // 7 2 1
console.log([apiCall[2]]); //undefined
*/

/* ----- Destructuring Arrays  Part--II  -----


let [first, second, , fourth] = restaurant.categories;
console.log(first, second, fourth);

//switching values
// const temp = second;
// second = fourth;
// fourth = temp;

[second, fourth] = [fourth, second];
console.log(second, fourth);

[fourth, second] = [second, fourth];
console.log(second, fourth);

const [a, b] = restaurant.getOrder(3, 2);
console.log(a, b);

*/

/* ----- Destructuring Arrays -----
const arr = [1, 2, 3];
const [a, b, c] = arr;
let [x, y, z] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(arr);

console.log(x);
console.log(y);
console.log(z);
*/
