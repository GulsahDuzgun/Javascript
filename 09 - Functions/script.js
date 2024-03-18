'use strict';

///////////////////////////////////////
// Functions Returning Functions
/* */

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

console.log(greet); //function
console.log(typeof greet('Hello')); //function

const greetPerson = greet('Hi');
console.log(greetPerson);
greetPerson('Gülşah');

greet('Hello')('Hasan');

// const greeting2 = greetWord =>
//   function (name2) {
//     console.log(`${greetWord} ${name2}`);
//   };

const greeting2 = greetWord => name2 => console.log(`${greetWord} ${name2}`);

greeting2('Hi')('Adem');
const sayHello = greeting2('Hello');
sayHello('Ahmet');

console.log(sayHello);
console.log(greeting2);

///////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference
/*

const flight = 23456787654;

const me = {
  firstName: 'Gülşah',
  passport: 345678909876,
};

const checkIn = function (passenger, flightNum) {
  passenger.firstName = 'Mrs. ' + passenger.firstName;

  if (passenger.passport === 345678909876) {
    flightNum = 11111111111;
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(me, flight);
// console.log(me, flight);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000);
};

newPassport(me);
console.log(me, flight);
checkIn(me, flight);
*/

///////////////////////////////////////
// Functions Accepting Callback Functions
/* 

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// console.log(upperFirstWord('Javascript is the best'));
// console.log(oneWord('Javascript is the best'));

//Higher-Order Functions
const transformer = function (str, fn) {
  console.log(str);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by:${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

//JS uses callbacks functions all the time.

const high5 = function () {
  console.log('🖐');
};

document.body.addEventListener('click', high5);

['a', 2, 'abc'].forEach(high5);
*/

///////////////////////////////////////
// Default Parameters
/*
const bookings = [];

const createBooking = function (
  flightNum = 'ED1232',
  price,
  numPassengers = price * 2
) {
  // flightNum ||= 1;
  // numPassengers = numPassengers || 12;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('ED12', 127);
createBooking(undefined, 58);
createBooking('OSL27', undefined, 73);
createBooking('OSL27', 92);

*/
