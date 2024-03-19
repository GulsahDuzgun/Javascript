'use strict';

///////////////////////////////////////
//Immediately Invoked Function Expressions(IIFE)

const runOne = function () {
  console.log('This function will be called whenever it calls');
};

runOne();

(function () {
  console.log(this); //undefined
  const isPrived = 27;
  var isPublic = 12;
  console.log('This function will be called just once');
})();

{
  const isPrived1 = 34;
  var isPublic1 = 98;
  console.log(this); //Window
}

console.log(`${isPublic1}`);
// console.log(`${isPublic}`);// isPublic is not defined
console.log(`${isPrived}`); // isPrived is not defined
console.log(`${isPrived1}`); // isPrived1 is not defined

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

const pullBtn = document.querySelector('.poll');

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  inputValue: 0,
  registerNewAnswer() {
    const input = Number(
      prompt(` What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)`)
    );
    console.log(this);

    if (input >= 0 && input <= 3 && typeof input === 'number') {
      this.answers[input]++;
      this.inputValue = input;
    }
    this.displayResults('array');
  },
};

//pullBtn.addEventListener('click', poll.registerNewAnswer); //TypeError: Cannot read properties of undefined (reading '3')

pullBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type) {
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    console.log(`Poll results are ${[...this.answers]}`);
  }
};

const obj = {
  answers: [1, 5, 3, 9, 6, 1],
};

const obj2 = {
  answers: [5, 2, 3],
};


// poll.displayResults.call(obj, 'string'); // call immediately calls the method
// const bindGetResults = poll.displayResults.bind(obj2); //bins calls the method when it calls with()

// bindGetResults('array');
// bindGetResults('string');


const getDisplayResults = poll.displayResults;
const bindGetResults = getDisplayResults.bind(obj);
getDisplayResults.call(obj2, 'string');

bindGetResults('array');
bindGetResults('string');
*/

///////////////////////////////////////
// The bind() method
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
*/

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
