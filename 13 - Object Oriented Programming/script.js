'use strict';

///////////////////////////////////////
// Static Methods
/* */

const Person = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const gulsah = Object.create(Person);
gulsah.birthYear = 2000;
gulsah.firstname = 'Gülşah';
gulsah.calcAge();
console.log(gulsah);

const aden = Object.create(Person);
console.log(aden);
console.log(aden.__proto__ === Person); //true
aden.init('aden', 2018);
aden.calcAge();

///////////////////////////////////////
// Static Methods
/*

class Person {
  constructor() {}

  static hey() {
    console.log(this);
    console.log('Hey, keep going');
  }
}

const Car = function (brand) {
  this.brand = brand;
};

Car.hey = function () {
  console.log(this);
  console.log('Hey, move on');
};

const mercedesg63 = new Car();
Car.hey();
mercedesg63.hey(); // not a function

const gulsah = new Person();
Person.hey();
console.log(gulsah.hey()); // not a function

 */
///////////////////////////////////////
// Setters and Getters
/*
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  set firstName(name) {
    if (name.includes(' ')) this._firstName = name;
    else alert(`${name} does not include space`);
  }

  get firstName() {
    return this._firstName;
  }
}

const gulsah = new PersonCl('Gülşah Düzgün', 2000);
console.log(gulsah.firstName);
console.log(gulsah._firstName);
console.log(gulsah);

*/

///////////////////////////////////////
// ES6 Classes
/*

const account = {
  owner: 'Gülşah Düzgün',
  movements: [200, 350, 300, 600],

  lastElement() {
    return this.movements.pop();
  },

  get lastElement2() {
    return this.movements.pop();
  },

  set lastElement2(el) {
    this.movements.push(el);
  },
};

console.log(account.lastElement());
console.log(account.lastElement2);
console.log(account);

account.lastElement2 = 270;
console.log(account);
*/

///////////////////////////////////////
// ES6 Classes
/*

//class expression
//const Car = class {}

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property of Constructor
  greetings() {
    console.log(` Hello ${this.firstName}`);
  }
}

const gulsah = new PersonCl('Gülşah', 2000);

PersonCl.prototype.calcAge = function () {
  console.log(`2025 -${this.birthYear}`);
};
console.log(gulsah);
console.log(PersonCl.prototype);
console.log(PersonCl.prototype === gulsah.__proto__); //true
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

console.log(typeof Car.prototype); //object

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.brake();
mercedes.brake();
mercedes.accelerate();
*/

///////////////////////////////////////
//Prototypal Inheritance on Built-In Objects
/* 

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
*/

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
