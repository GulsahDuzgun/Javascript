'use strict';
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
const arr1 = [17, 21, 23];

const printForecast = function (arr) {
  let tempText = '';

  for (let i = 0; i < arr.length; i++) {
    tempText += `... ${arr[i]}ºC in ${i + 1} days `;
  }

  return tempText + '...';
};

console.log(printForecast(arr1));

/*
//Debugging with the Console and Breakpoints

const temperatures = [3, 4, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcAmplitudeBug = function (arr1, arr2) {
  const tempArr = arr1.concat(arr2);
  let tempMax = 0,
    tempMin = 0;

  for (let i = 0; i <= tempArr.length; i++) {
    if (typeof tempArr[i] !== 'number') continue;

    debugger;
    if (tempMax < tempArr[i]) {
      tempMax = tempArr[i];
    }

    if (tempMin > tempArr[i]) {
      tempMin = tempArr[i];
    }
  }

  console.log(tempMax);
  console.log(tempMin);
  return tempMax - tempMin;
};

console.log(calcAmplitudeBug(temperatures, [18, 24, 2, 8]));

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius')),
    value: 10,
  };

  console.log(measurement);
  console.table(measurement);
  return measurement.value + 273;
};

console.log(measureKelvin());
*/

/*
//Solve Poblem

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcAmplitude = function (arr) {
  let tempMax = arr[0],
    tempMin = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] !== 'number') continue;

    if (tempMax < arr[i]) {
      tempMax = arr[i];
    }

    if (tempMin > arr[i]) {
      tempMin = arr[i];
    }
  }

  console.log(tempMax);
  console.log(tempMin);
  return tempMax - tempMin;
};

const calcAmplitude2 = function (arr1, arr2) {
  const tempArr = arr1.concat(arr2);
  let tempMax = tempArr[0],
    tempMin = tempArr[0];

  for (let i = 0; i <= tempArr.length; i++) {
    if (typeof tempArr[i] !== 'number') continue;

    if (tempMax < tempArr[i]) {
      tempMax = tempArr[i];
    }

    if (tempMin > tempArr[i]) {
      tempMin = tempArr[i];
    }
  }

  console.log(tempMax);
  console.log(tempMin);
  return tempMax - tempMin;
};

console.log('----- One Array -----');
console.log(calcAmplitude(temperatures));
console.log('----- Two Array -----');
console.log(calcAmplitude2(temperatures, [18, 24, -2, -8]));
*/

/*
//Setting up Prettier and VS Code
const text = 'abc';

const print = par2 => `Hello ${par2}`;
console.log();
console.log(text);
*/
