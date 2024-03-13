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
};

const [first, second, , fourth] = restaurant.categories;
console.log(first);
console.log(second);
console.log(fourth);

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
