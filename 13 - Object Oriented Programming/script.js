'use strict';

///////////////////////////////////////
//Prototypal Inheritance on Built-In Objects
/* */

const Person = function (firstName, birthYear) {
  console.log(this); // {}

  this.firstName = firstName;
  this.birthYear = birthYear;
};
const gulsah = new Person('Gülşah', 2000);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

console.log(gulsah.__proto__);
console.log(gulsah.__proto__.__proto__); //Object.prototype
console.log(gulsah.__proto__.__proto__.__proto__); //null
console.log(gulsah.__proto__.constructor);

const arr = [3, 4, 3, 2, 2, 4, 5, 6, 7, 4, 849, 76, 6, 3, 6]; //[] === new Array && {} === new Object
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

// arr.__proto__.uniq = function () {
//   return [...new Set(this)];
// };

Array.prototype.uniq = function () {
  return [...new Set(this)];
};
console.log(arr.uniq());

console.dir(x => x + 1);

///////////////////////////////////////
/*

const Person = function (firstName, birthYear) {
  console.log(this); // {}

  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // //Never create a method inside of constructor function. Use prototype and prototype inheritance
  // this.calcAge = function () {
  //   console.log(2025 - this.birthYear);
  // };
};

//1- new {} is created
//2- function is running and this = {} >Arrow function this tanımından dolayı kullanılmaz.

//3- this object is linked to prototype
//4- constructor returns this object

const gulsah = new Person('Gülşah', 2000);
const deniz = new Person('Deniz', 2007);
const esra = new Person('Esra', 1997);
const jay = 'Jay';

console.log(gulsah);
console.log(deniz);
console.log(esra instanceof Person); //true
console.log(jay instanceof Person); //false

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

console.log(Person.prototype);
console.log(gulsah);
console.log(gulsah.__proto__);
gulsah.calcAge();
deniz.calcAge();

console.log(gulsah.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(gulsah));
console.log(Person.prototype.isPrototypeOf(deniz));
console.log(Person.prototype.isPrototypeOf(Person)); //false

//Person.prototype => .prototypeOfLinkedObjects

Person.prototype.hasCar = false;
Person.prototype.species = 'Homo Sapiens';
console.log(gulsah.hasCar);
console.log(gulsah.species);

console.log(gulsah.hasOwnProperty('firstName'));
console.log(gulsah.hasOwnProperty('species'));
*/
