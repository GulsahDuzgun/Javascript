//Functions

function logName() {
  console.log("My name is Gülşah");
}

logName();
logName(); //calling === invoking === running

function fruitProcessor(grapes, apple) {
  //parameters
  console.log(typeof grapes);
  console.log(typeof apple);
  return `I used ${grapes} and ${apple}kg for this dessert`;
}

const ingredients = fruitProcessor("3kg", 4); //arguments
console.log(ingredients);

/*
//-----Strict Mode-----
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive 😁.");

// const if = 2;
// console.log(if);
*/
