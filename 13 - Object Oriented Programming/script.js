'use strict';

const Person = function (firstName, birthYear) {
  console.log(this); // {}

  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never create a method inside of constructor function. Use prototype and prototype inheritance
  this.calcAge = function () {
    console.log(2025 - this.birthYear);
  };
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

function Person2() {}
