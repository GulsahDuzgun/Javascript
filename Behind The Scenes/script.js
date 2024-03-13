'use strict';

let lastName = 'guney';
const oldLastName = lastName;
lastName = 'duzgun';

console.log(oldLastName);
console.log(lastName);

const gulsah = {
  firstName: 'Gülşah',
  year: 2000,
};

const esra = gulsah;
esra.firstName = 'Esra';

console.log(esra === gulsah); //true

esra = {}; // TypeError: Assignment to constant variable.

/*
let age = 24;
const tAge = age;
age = 25;

console.log(tAge); //24
console.log(age); //25

const gulsah = {
  firstName: 'Gülşah',
  year: 2000,
};

const deniz = gulsah;
deniz.firstName = 'Deniz';
console.log(deniz.firstName); //Deniz
console.log(gulsah.firstName); //Deniz
*/

/*
const addExp = function (a, b) {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[2]);
};

addExp(3, 4, 'made');

const addArr = a => {
  console.log(arguments); //ReferenceError: arguments is not defined
  console.log(a);
};

addArr(3, 'it', 9);

*/
/*----- this keyword in functions ----- 

var firstName = 'Esra';

const gulsah = {
  firstName: 'Gülşah',
  year: 2000,
  calcAge: function () {
    console.log(this);
    const greet3 = () => {
      console.log(`Arrow function: ${firstName}`);
      console.log(this);
      console.log(`Arrow function: ${this.firstName}`);
    };
    greet3();
  },
  greet: () => console.log(`Hi ${this.firstName}`),
  greet2: function () {
    console.log(`Again hi ${this.firstName}`);
    this.calcAge();
  },
};

gulsah.greet();
gulsah.greet2();

*/

/*----- this keyword in objects ----- 

const gulsah = {
  year: 2000,
  calcAge: function () {
    console.log(this);
  },
};

function calcAge() {
  console.log(this);
}

const calcAge1 = function () {
  console.log(this);
};

const calcAge2 = () => {
  console.log(this);
};

calcAge(); //undefined
calcAge1(); //undefined
calcAge2(); //window --> global scope
gulsah.calcAge(); //gulsah

*/

/*----- this keyword in objects ----- 
const gulsah = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};

const esra = {
  year: 1997,
};
esra.calcAge = gulsah.calcAge;

// gulsah.calcAge();

// console.log(esra);
// esra.calcAge();

const funExp = gulsah.calcAge;
funExp(); //this inside function expression equals to undefined
*/

/*----- this keyword in functions ----- 

console.log(this); //window

function calcAge(bYear) {
  console.log(this); //undefined
  return 2025 - bYear;
}

calcAge(2000);

const calcAgeExp = function (bYear) {
  console.log(this); //undefined
  return 2025 - bYear;
};

calcAgeExp(2000);

const calcAgeArr = bYear => {
  console.log(this); //window
  return 2025 - bYear;
};

calcAgeArr(2000);

*/

/*----- Example ----- 

let x = 'let';
const y = 'const';
var z = 'var';

console.log(window);
console.log(z === window.z); //true -> var makes a property in window object
console.log(y === window.y); //false
console.log(x === window.x); //false

if (!productNum) giveProduct();
var productNum = 18;

function giveProduct() {
  console.log('Product order got given');
}
*/

/*----- Hoisting for functions ----- 
console.log(addVarExpression); //undefined
console.log(addVarExpression(3, 4)); // TypeError: addVarExpression is not a function.It is undefined.
console.log(undefined(3, 4)); //TypeError: undefined is not a function

console.log(addVarArrow); //undefined
console.log(undefined(3, 4)); //TypeError: undefined is not a function
console.log(addVarArrow(3, 4)); //addVarArrow is not a function

console.log(addDeclaration(4, 2));
console.log(addExpression(32, 4)); // ReferenceError: Cannot access 'addExpression' before initialization -- uninitialized
console.log(addArrow(23, 4)); //ReferenceError: Cannot access 'addArrow' before initialization

function addDeclaration(a, b) {
  return a + b;
}

let addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addVarExpression = function (a, b) {
  return a + b;
};

var addVarArrow = (a, b) => a + b;

*/

/* ----- Hoisting for variables ----- 
console.log(job); //undefined
console.log(me); //ReferenceError: Cannot access 'me' before initialization
console.log(year); //uninitialized ReferenceError: Cannot access 'year' before initialization

let me = 'Gülşah';
const year = 2000;
var job = 'Software Developer';
*/

/*
const firstName = 'Gülşah';
calcAge(2000);

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  const printAge = function () {
    const firstName = 'Esra';
    let output = `${firstName}, you are ${age}.`;
    // console.log(` Your job is ${jobL}`); ReferenceError: Cannot access 'jobL' before initialization
    // console.log(` Your job is ${jobC}`); ReferenceError: Cannot access 'jobC' before initialization
    console.log(` Your job is ${jobV}`); // Your job is undefined

    let jobL = 'Accountant(let)';
    const jobC = 'Accountant(const)';
    var jobV = 'Accountant(var)';

    if (birthYear <= 2012 && birthYear >= 1996) {
      var zFlag = true;
      const zGen = `Hi ${firstName} , You are Zoomers`;
      output = `You are ${age} years old.`;

      console.log(zGen);
      console.log(output);

      function add(a, b) {
        return a + b;
      }
      console.log(add(4, 5));
    }

    console.log(output);
    console.log(zFlag);
    // console.log(add(4, 5)); ReferenceError
    // console.log(zGen); ReferenceError
  };
  // console.log(zFlag); ReferenceError

  printAge();
  console.log(firstName);
}
*/
