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
