'use strict';
///////////////////////////////////////
// The new at Method
/* */

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
