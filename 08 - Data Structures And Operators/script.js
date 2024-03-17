'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[1]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  wed: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  // openingHours: openingHours,

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
  orderPizza(mainIngredients, ...otherIngredients) {
    //console.log(typeof otherIngredients); object
    console.log(mainIngredients, otherIngredients);
  },
};

/*
///////////////////////////////////////
// Maps:Iteration*/

const quiz = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['trueAnswer', 3],
  [true, 'Correct Answer'],
  [false, 'Try Again'],
]);

console.log(quiz);
console.log(quiz.entries());
console.log(quiz === quiz.entries()); //false

console.log(quiz.get('question'));
for (const [key, value] of quiz) {
  if (typeof key === 'number') {
    console.log(`${key}-) ${quiz.get(key)}`);
  }
}

// const answer = Number(prompt('Enter your answer'));
const answer = 3;
console.log(quiz.get(answer === quiz.get('trueAnswer')));

console.log(quiz);
console.log([...quiz]);
console.log(quiz.entries());
console.log([...quiz.entries()]);
console.log([...quiz.keys()]);
console.log([...quiz.values()]);

// console.log('***');
// for (const el of quiz.entries()) {
//   console.log(el);
// }

/*
///////////////////////////////////////
// Maps:Fundamentals

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open:D')
  .set(false, 'We are closed :(');

console.log(rest);

console.log(rest.get('1')); //undefined
console.log(rest.get(1));

const visitHour = 0;
console.log(
  rest.get(visitHour < rest.get('close') && visitHour > rest.get('open'))
);

console.log(rest.has('open'));
console.log(rest.has('opens'));

console.log(rest.size);
console.log(rest.delete(1)); //true
console.log(rest.delete(1)); //false
console.log(rest.size);

const arr2 = [3, 4];
rest.set([1, 2], 'array');
rest.set(arr2, 'array2');
console.log(rest.get([1, 2]));
console.log(rest.get(arr2));
console.log(arr2);

rest.set(document.querySelector('h1'), 'object');
console.log(rest.get(document.querySelector('h1')));

const obj = { firstName: 'Gülşah' };
rest.set({ firstName: 'Gülşah' }, 'Düzgün');
rest.set(obj, 'Gülşah Düzgün');

console.log(rest.get(obj)); //Gülşah Düzgün
console.log(rest.get({ firstName: 'Gülşah' })); //undefined
*/

/*
///////////////////////////////////////
// Sets

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(orderSet);

//string, sets, arrays are iterable --> can loop over them
const myName = new Set('Gülşah Düzgün');
const empty = new Set();
console.log(myName, myName.size); //11
console.log(empty, empty.size); //0

console.log(myName.has('e')); //false
console.log(orderSet.has('Pizza')); //true
console.log(orderSet.has('pizza')); //false

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

orderSet.delete('Pasta');
console.log(orderSet);

myName.clear();
console.log(myName);

for (const meal of orderSet) {
  console.log(meal);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

console.log(...staff);
console.log([...staff]);

const titles = new Set(staff);
console.log(titles);

const titleArr = [...titles];
console.log(titleArr);

console.log(new Set('gülşahdüzgün').size); //how many different letter is in my name?
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log([...game.scored.entries()]);
for (const [i, element] of game.scored.entries()) {
  // console.log(el); [0, value]
  console.log(`Goal ${i + 1}: ${element}`);
}

let sumTemp = 0;
const valArr = Object.values(game.odds);
for (const el of valArr) {
  sumTemp += el;
}
const average = sumTemp / valArr.length;
console.log(average);

const printOdd = function (obj) {
  // console.log(Object.entries(obj.odds)[1][0]);
  console.log(Object.entries(obj.odds)[1]);
  for (const [i, el] of Object.entries(obj.odds)) {
    console.log(`Odd of ${obj[i] ? `victory  ${obj[i]}` : 'draw'}: ${el}`);
  }
};
printOdd(game);

const scorers = {};
for (const el of game.scored) {
  scorers[el] = (scorers?.[el] || 0) + 1;
}
// scorers['gulsah'] = 2;
console.log(scorers);

*/

/*
///////////////////////////////////////
//Looping Objects:Object Keys, Values and Entries

const keys = Object.keys(openingHours);
console.log(keys);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const variables = Object.values(openingHours);
console.log(variables);

for (const [day, { open, close: closeHour }] of Object.entries(openingHours)) {
  // console.log(day, hours);
  console.log(`On ${day} we open at ${open} and close ${closeHour}`);
}
*/

/*
///////////////////////////////////////
// Optional Chaining(?.)

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
console.log(restaurant.openingHours.mon); //undefined
console.log(restaurant.openingHours?.mon?.open); //undefined
//console.log(restaurant.openingHours.mon.open); //TypeError: Cannot readproperties of undefined

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(restaurant.openingHours?.[`${day}`]);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

//Optional Chaining(?.) in Methods
console.log(restaurant.getPizza?.(1, 2) ?? 'Method does not exist');
console.log(restaurant.getOrder?.(0, 2) ?? 'Method does not exist');

//Optional Chaining(?.) in Arrays

const arr2 = [{ name: 'gulsah', age: 22 }];
console.log(arr2[2]?.name ?? "Property doesn't defined");
console.log(arr2[0]?.age ?? "Property doesn't defined");

if (arr2.length > 0) {
  console.log(arr2[0].age);
} else {
  console.log("Property doesn't defined");
}
*/

/*
console.log(restaurant.openingHours);

///////////////////////////////////////
// Looping Arrays:The for-of Loop

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) {
  console.log(item);
}

console.log(menu.entries());
console.log([...menu.entries()]);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

for (const [i, element] of menu.entries()) {
  console.log(`${i + 1} --> ${element}`);
}

*/
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const player1 = [...game.players[0]];
// const player2 = [...game.players[1]];

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
const [gk2, ...fieldPlayers2] = player2;

const allPlayers = [...player1, ...player2];

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// const { team1, team2, x: draw } = game.odds;
const {
  odds: { team1, team2, x: draw },
} = game;
console.log(team1, team2, draw);

game.printGoals = function (...scoreGoals) {
  let sum = 0;
  for (let i = 0; i < scoreGoals.length; i++) {
    sum += 1;
    console.log(`${i + 1}-) ${scoreGoals[i]} and total score is ${sum}`);
  }
};

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

game.printGoals(...game.scored);

// const flag = game.odds.team1 > game.odds.team2 && 'Team 1';
// const winnerTeam = flag || 'Team 2';
// console.log(winnerTeam);

team1 > team2 && console.log('Team 1 is more likely to win');
team1 < team2 && console.log('Team 2 is more likely to win');
*/

/*
//Logical Assigment Operators

const rest1 = {
  name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// console.log(rest2.numGuest);
// console.log(rest1.numGuest);

// rest1.numGuest = rest1.numGuest ?? 12;
// rest2.numGuest = rest2.numGuest ?? 12;

rest1.numGuest ??= 27;
rest2.numGuest ??= 27;

console.log(rest2.numGuest);
console.log(rest1.numGuest);

// rest1.owner = rest1.owner && '<ANONYMOUS>'; //undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>'; //<ANONYMOUS>

rest1.owner &&= '<ANONYMOUS>';
rest2.name &&= '<ANONYMOUS>';

console.log(rest1.owner);
console.log(rest2.owner);
*/

/*
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
*/

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
