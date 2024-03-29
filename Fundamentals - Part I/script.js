//The Conditional(Ternary) Operator
const favPet = "dog";

const declaration = favPet ? "dog 🐕‍🦺" : "cat 😼";
console.log(declaration);
console.log(`Conditional Operator | My favorite animal is ${declaration}`);

let temp;
if (favPet === "dog") {
  temp = "dog 🐕‍🦺";
} else {
  temp = "cat 😼";
}
console.log(`if-else | My favorite animal is ${temp}`);

/*
//The switch Statement

const day = "thursday";

switch (day) {
  case "monday":
    console.log(`Today is ${day}`);
  case "tuesday":
    console.log(`Today is ${day}`);
    break;
  case "wednesday":
    console.log(`Today is ${day}`);
    break;
  case "thursday":
    console.log(`Today is my favorite`);
  case "friday":
    console.log(`Today is friday`);
    break;
  default:
    console.log("Today can be saturday or sunday 😁");
    break;
}

if (day === "monday") {
  console.log(`Today is ${day}`);
} else if (day === "tuesday") {
  console.log(`Today is ${day}`);
} else if (day === "wednesday") {
  console.log(`Today is ${day}`);
} else if (day === "friday" || day === "thursday") {
  console.log(`Today is my favorite`);
  console.log(`Today is friday`);
} else {
  console.log("Today can be saturday or sunday 😁");
}
*/
/*
//Equality Operators == vs ===

const num = 24;
console.log(num);
if (num !== 24) {
  console.log("Strict operator || Number");
} else if (num === "24") {
  console.log("Strict operator || String");
} else if (num == "24") {
  console.log("Loose operator || String");
}

const val = prompt("What's your favorite number?");
console.log(typeof val, val);

if (val === 27) {
  console.log("It is 27");
} else if (val == 7) {
  console.log("It is 7");
} else if (val != 7) {
  console.log("It is not 7");
}
*/

/*
//Truthy and Falsy Values
//--> 5 falsy values: 0 ,'', undefined, null, NaN;
console.log(Boolean(0));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean(NaN));

let money = 0;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("Get a job 🤡");
}
*/

/*
//type conversion
let inputYear = "2000";
console.log(typeof inputYear);
console.log(typeof Number(inputYear));

inputYear = Number(inputYear);
console.log(inputYear + 24);
console.log(inputYear + "24");
console.log(inputYear - "24");
console.log(inputYear / "24");
console.log(inputYear * "24");

let firstName = "Gülşah";
const num = Number(firstName);
console.log(num);
console.log(typeof num);

//type coercion
let n = 19;
console.log(n + "4"); //194
console.log(n + 5); //24
console.log(n - "5"); //14
console.log("9" + n - "5"); //914
console.log(2 + 3 + 4 + "5"); //95
console.log("10" - "4" - "3" - 2 + "5"); //15
*/

/*
// If-else Statements

const age = 14;
const isAgeEnough = age >= 18;

if (isAgeEnough) {
  console.log(`Sarah can take driver test`);
} else {
  let difAge = 18 - age;
  console.log(`Sarah is too young. Wait another ${difAge} years`);
}

const year = 2024;
let ceuntry;

if (year >= 2000) {
  ceuntry = 21;
} else {
  ceuntry = 20;
}
console.log(ceuntry);
*/
/*
//String and Template Literals
const city = "İstanbul";
const age = 24;
const firstName = "Gülşah";

const text1 =
  "I'm " +
  firstName +
  " and I'm " +
  age +
  ". I have been living in " +
  city +
  " for 2 years.";

const tempLiteral = `I'm ${firstName} and I'm ${age}. I have been living in ${city} for 2 years.`;

console.log(text1);
console.log(tempLiteral);

const spreadString = "Hello, \n  Believe in yourself!";
const spreadString2 = `Hello,
 Believe in yourself!`;

console.log(spreadString);
console.log(spreadString2);
*/
/*
//-----LET, CONST AND VAR-----

let age = 24;
console.log(age);

age = 25;
console.log(age);

const birthYear = 2000;
console.log(birthYear);
//birthYear = 1999;  couldn't be mutate
*/

/*
//-----Data Types-----
let jsIsFun = "Yes";
console.log(typeof jsIsFun);

jsIsFun = false;
console.log(typeof jsIsFun);

let react = null;
console.log(typeof react);

nodeJs = undefined;
console.log(typeof nodeJs);

nextJS = 9007199254740991n;
console.log(typeof nextJS);
*/

//-----Values and Variables-----
/*
  let firstname = "Matilda";
  let person = "jonas";
  let PI = "3.14";
  */

// -----Linking  a JS File-----
/*
  let js = "awesome";
  if (js === "awesome");
  console.log(js);
  */
