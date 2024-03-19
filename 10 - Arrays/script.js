'use strict';

///////////////////////////////////////
// forEach With Maps and Sets
/* */

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const currenciesArr2 = [
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
];

currenciesArr2.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});

currencies.forEach(function (element, index, map) {
  console.log(index, element, map);
});

const setCurrencies = new Set(['Euro', 'Dolar', 'USD', 'GBP', 'EUR', 'Euro']);

setCurrencies.forEach(function (element, index, set) {
  console.log(index, element, set);
});
//There is no key value in Sets.

console.log(setCurrencies);

///////////////////////////////////////
// Looping Arrays: forEach
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
  }
}
console.log('------ FOREACH ------');
//callback --> function(200,0 , [])

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}:You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}:You withdrew ${Math.abs(movement)}`);
  }
});
*/

///////////////////////////////////////
// The new at Method
/* 

const arr = [27, 12, 2000];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(...arr.slice(-1));
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

console.log('gulsah'.at(0));
console.log('gulsah'.at(-1));

*/

///////////////////////////////////////
// Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//array.slice(startPoint, endPoint)
console.log(arr.slice());
console.log([...arr]);
console.log(arr.slice(1, 2));
console.log(arr.slice(-1));
console.log(arr.slice(3, 5));
console.log(arr.slice(1, -2));
console.log(arr.slice(-2));

//SPLICE mutates the original array
//array.splice(startPoint,deleteCount)

console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

//REVERSE mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
let letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN returns string, doesn't mutate the original array

console.log(letters.join('-'));
console.log(letters);
*/
