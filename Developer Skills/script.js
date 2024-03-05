'use strict';

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

/*
//Solve Poblem

'use strict';

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
