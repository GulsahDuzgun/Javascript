'use strict';

///////////////////////////////////////
//Inheritance Between "Classes": ES6

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    return 2025 - this.birthYear;
  }
}

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
  greet() {
    console.log(
      `Hi! I am ${
        this.firstName
      } and I am ${this.calcAge()}. I have been studying on ${this.course}`
    );
  }
}

const deniz = new StudentCl('Deniz', 2007, 'Medicine');
console.log(deniz);
deniz.greet();

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('tesla', 120, 23);
tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.chargeBattery(33);

tesla.accelerate();
console.log(tesla);
*/

///////////////////////////////////////
// Inheritance Between "Classes" : Constructor Functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

const deniz = new Student('Deniz', 2007, 'Nursing');
console.log(deniz);
console.log(deniz.firstName);
console.log(deniz.__proto__);
console.log(deniz.__proto__.constructor);

deniz.calcAge();

const mike = new Student('Mike', 2008, 'Computer Science');
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

mike.__proto__.constructor = Student;
Student.prototype.constructor = Student;

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀


class CarSpeed {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  set speedUS(val) {
    this.speedUS = val * 1.6;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const ford = new CarSpeed('Ford', 120);
ford.speed = 160;
console.log(ford.speed);
console.log(ford.speedUS);
*/

///////////////////////////////////////
// Object.create()
/* 

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
*/

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
