//----- Dot vs Bracket Notation in Objects -----

const myInfoObject = {
  firstName: "Gülşah",
  lastName: "Düzgün",
  age: 2024 - 2000,
  job: "software engineer",
  friends: ["Micheal", "Steven", "Peter"],
};

const temp = "Name";
console.log(myInfoObject.age);
console.log(myInfoObject.firstName);
console.log(myInfoObject["friends"]);
console.log(myInfoObject["last" + temp]);
/*
const interestedIn = prompt(
  "What do you want to know about ME? Choose between firstName, lastName, age, job and friends"
);

if (myInfoObject[interestedIn]) {
  console.log(myInfoObject[interestedIn]);
} else {
  console.log(
    "Please, choose between options and make sure to write it properly"
  );
}
*/
//ADD property:value to an object

myInfoObject.country = "Turkey";
myInfoObject["sister"] = 3;
console.log(myInfoObject);

console.log(
  `${myInfoObject.firstName} has ${myInfoObject.friends.length} friends (${myInfoObject.friends})  and her best friend is called ${myInfoObject.friends[0]}`
);

/*
//----- Introduction to Objects  -----

const myInfo = [
  "Gülşah",
  "Düzgün",
  2024 - 2000,
  ["Micheal", "Steven", "Peter"],
];

const myInfoObject = {
  firstname: "Gülşah",
  lastname: "Düzgün",
  age: 2024 - 2000,
  job: "software engineer",
  friends: ["Micheal", "Steven", "Peter"],
};


*/

/*
//----- Array Operations -----
const friends = ["Micheal", "Steven", "Peter"];

friends.push("Lily");
console.log(friends.push("Barney")); //push returns the lenght of the array
console.log(friends);

friends.unshift("Robin");
console.log(friends);
console.log(friends.unshift("Marshall")); //unshift returns the lenght of the array
console.log(friends);

friends.pop();
console.log(friends.pop()); //pop returns the element which it removed at the end of the array
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.shift()); //shift returns the element which it removed at the start of the array
console.log(friends);

console.log(friends.includes("Steven"));
console.log(friends.includes("Robin")); //false
console.log(friends.indexOf("Robin")); //-1
console.log(friends.indexOf("Steven"));


*/
/*
//----- Introductions to Array -- Part I -----

const friend = "Micheal";
const friend2 = "Steven";

const friends = ["Micheal", "Steven", "Peter"];
const cities = new Array(
  "Roma",
  "Münih",
  "Amsterdam",
  "Helsinki",
  "Oslo",
  "Londra",
  "Liverpool",
  "Edinburg",
  "Manchester"
);

const list = ["apple", 2, "grapes", 3];
console.log(list);

console.log(friends);
console.log(friends[0]);
console.log(cities.length);
console.log(cities[cities.length - 1]); //last element

console.log(cities);
cities[1] = "Melbourne";
console.log(cities);
// cities = ["Istanbul"];
// console.log(cities);

const firstname = "Gülşah";
const me = [firstname, 24, "Düzgün", cities];
console.log(me);

const birthYears = [1997, 2008, 2018, 2000];
const calcAge = (birthYear) => 2025 - birthYear;
console.log(birthYears);

const newArr = [
  calcAge(birthYears[0]),
  calcAge(birthYears[1]),
  calcAge(birthYears[2]),
  calcAge(birthYears[3]),
];
console.log(newArr);
*/

/*
//----- Reviewing Functions -----

const calcAge = (bYear) => 2025 - bYear;

function yearsUntilRetirement(birthYear) {
  const age = calcAge(birthYear);

  console.log("Hello,");
  return age >= 65
    ? "You are already retired"
    : `You should work ${65 - age} years more`;
}

console.log(yearsUntilRetirement(2018));
console.log(yearsUntilRetirement(1930));

*/
/*

//----- Functions Calling Other Functions -----

// function calcTotal(m1, m2, m3) {
//   return m1 + m2 + m3;
// }

function totalCostPer1(meal1, meal2, meal3, count) {
  const total = calcTotal(meal1, meal2, meal3);
  return total / count;
}
//console.log(calcTotal(2, 12, 21));//expression function doesn't workf before define it
const calcTotal = (m1, m2, m3) => m1 + m2 + m3;

console.log(totalCostPer1(200, 300, 320, 5));
*/

/*
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
*/
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
