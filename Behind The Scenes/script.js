'use strict';
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
