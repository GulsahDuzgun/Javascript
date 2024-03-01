//----- Arrow Functions -----

const haveMoney = function (bill) {
  return 500 - bill > 0 ? true : false;
};

const haveMoneyArr = (bill) => (500 - bill > 0 ? true : false);
console.log(haveMoneyArr(700));

const haveMoneyArr2 = (bill, fees) => {
  return 500 - (bill + fees) > 0 ? "I have money" : "I need a job";
};
console.log(haveMoneyArr2(900, 200));

/*
//----- Function declaration and expression -----
console.log(calcAge1(2000));
function calcAge1(birthYear) {
  //declaration
  return 2025 - birthYear;
}

console.log(calcAge2(2000));
const calcAge2 = function (birthYear) {
  //expression
  return 2025 - birthYear;
};
*/

/*
//----- Functions -----

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
*/
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
