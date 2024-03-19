'use strict';

///////////////////////////////////////
// The bind() method
/* */

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  // book:function(){}
  book(flight, passenger) {
    const book = {
      passenger,
      flight,
      airline: this.airline,
      iataCode: this.iataCode,
    };
    console.log(
      `${passenger} booked a seat on ${this.airline} flight ${this.iataCode}${flight}`
    );
    this.booking.push(book);
  },
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SW',
  booking: [],
  // book: lufthansa.book,
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;

const LHBook = book.bind(swiss);
LHBook(89, 'Mary Cooper');
console.log(swiss);

const EWBook = book.bind(eurowings, undefined, 'gülşah');
EWBook(67, 'esra');
console.log(eurowings);

swiss.plane = 200;
swiss.buyPlane = function () {
  this.plane++;
  console.log(this);
  console.log(this.plane);
};

swiss.buyPlane();
const btn = document.querySelector('.buy');

// btn.addEventListener('click', swiss.buyPlane);  //this is btn object
btn.addEventListener('click', swiss.buyPlane.bind(swiss));

const addTax = (rate, val) => val + val * rate;

const VAT = addTax.bind(null, 0.23); //order of argument is important
console.log(VAT);
console.log(VAT(100));

const addTax2 = function (rate) {
  return function (val) {
    return val + val * rate;
  };
};

const VAT2 = addTax2(0.23);

console.log(VAT2(100));
console.log(VAT2(200));

///////////////////////////////////////
// The call() and apply() method
/* 

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  // book:function(){}
  book(flight, passenger) {
    const book = {
      passenger,
      flight,
      airline: this.airline,
      iataCode: this.iataCode,
    };
    console.log(
      `${passenger} booked a seat on ${this.airline} flight ${this.iataCode}${flight}`
    );
    this.booking.push(book);
  },
};

lufthansa.book('238', 'Gülşah Düzgün');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SW',
  booking: [],
  // book: lufthansa.book,
};

const book = lufthansa.book;
//book('Deniz Düzgün', '54'); TypeError: Cannot read properties of undefined (reading 'airline')
book.call(swiss, '54', 'Deniz Düzgün');
console.log(swiss);

// swiss.book('54', 'Esra Nur Düzgün');
// console.log(swiss);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

book.call(eurowings, 'Sarah Willliams', '23');
console.log(eurowings);

const infoArr = [39, 'Mary Cooper'];
book.apply(eurowings, infoArr);
book.call(swiss, ...infoArr);
*/

///////////////////////////////////////
// Functions Returning Functions
/* 

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
*/

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
