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
  deliverOrder: function ({
    firtsName,
    time: deliverTime = '20.00',
    address: adrs,
    starterIndex,
    mainIndex = 0,
  }) {
    console.log(
      `${firtsName} was delivered ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${adrs} at ${deliverTime}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here the ingredients in pasta: 
    ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    //console.log(typeof otherIngredients); object
    console.log(mainIngredients, otherIngredients);
  },
};

// The Nullish Coalescing (??)
let a = 0,
  b = 0,
  c = NaN;
const flag = a || -1;
const flag2 = b ?? -1; //Nullish Coalescing accepts null and undefined as falsy
const flag3 = c ?? -1;
console.log(a, flag);
console.log(b, flag2);
console.log(c, flag3);

/*  ----- Short Circuiting (&& and ||) -----
console.log('---OR (||) ---');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const temp = restaurant.guestNumber ? restaurant.guestNumber : 10;
const temp2 = restaurant.guestNumber || 10;
console.log(temp, temp2);

console.log('---AND (&&) ---');
console.log(0 && 'Jonas');
console.log('Jonas' && 23);
console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/

/*1-) THE REST  OPERATOR --- Destructuring

//right side of equal sign
const arr = [2, 4, ...[6, 7, 8]];
console.log(arr);

//left side of equal sign
const [a, b, ...rest] = arr;
console.log(a, b); //2 4
console.log(rest, typeof rest); //6,7,8 object

const allMeal = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMeal);

const [meal1, , meal3, ...restMeals] = allMeal;
console.log(meal1, meal3, restMeals);

const { fri, sat: saturday, ...other } = restaurant.openingHours;
console.log(other, saturday, fri);

//2-) FUNCTIONS

const add = function (...arg) {
  //packing
  let temp = 0;
  for (let i = 0; i < arguments.length; i++) {
    temp += arg[i];
  }
  return console.log(temp);
};

add(2, 3);
add(2, 3, 4, 5, 6);
add(22, 32, 44);

const x = [1, 2, 3, 4, 5, 6];
add(...x); //unpacking

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/* ----- The Spread Operator  -----

const arr = [6, 7, 8];
let badWay = [1, 2, arr];
console.log(badWay.length); //3

badWay = [1, 2, arr[0], arr[1], arr[2]];
console.log(badWay.length); //5

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
const newMenu2 = ['Gnocci', ...restaurant.mainMenu];
console.log(newMenu, newMenu2);

const arr1 = [
  1,
  2,
  {
    title: 'Software Engineer',
    firtsName: 'Gülşah',
  },
];

const copyArr = [...arr1];
copyArr[2].title = 'Front-End Developer';
console.log(copyArr[2].title); //Front-End Developer
console.log(arr1[2].title); //Front-End Developer

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = 'Gulsah';
const str2 = 'uzgun';
const strArr = [...str, 'd', ...str2];
console.log(`${strArr}`);
//console.log(`${...str}`); Unexpected token '...'
console.log('G', ' u l s a h d u z g u n');

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

restaurant.orderPasta(...ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

const newRestaurant = { foundIn: 2000, ...restaurant, founder: 'Guiseppe' };
newRestaurant.name = 'New Name';
newRestaurant.mainMenu[0] = 'New Meal';
console.log(newRestaurant.name);
console.log(restaurant.name);

console.log(newRestaurant.mainMenu[0]);
console.log(restaurant.mainMenu[0]);
*/

/* ----- Destructuring Objects  -----

restaurant.deliverOrder({
  firtsName: 'Gülşah',
  time: '10:38',
  address: 'Avcılar, Istanbul',
  starterIndex: 0,
  mainIndex: 1,
});

restaurant.deliverOrder({
  firtsName: 'Esra',
  address: 'Eyüp, Istanbul',
  starterIndex: 2,
});

const { name: restName, categories: cat, openingHours: hours } = restaurant;
console.log(restName, cat, hours);

//default value while object destructuring
const { menu = [], mainMenu: resMenu = [] } = restaurant;
console.log(menu, resMenu);

//switching while object destructuring
let a = 12;
let b = 27;
const obj = { a: 8, b: 9, c: 31 };

({ a, b } = obj);
console.log(a, b);

const { openingHours } = restaurant;
const {
  fri: { open: o, close },
} = openingHours;
console.log(o, close);

*/

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
