'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const createUserNames = function (accs) {
  accs.forEach(function (acc, indx) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(el => el[0])
      .join('');
  });
};
createUserNames(accounts);

const displayMovements = function (movements, isShort = false) {
  const movs = isShort ? movements.slice().sort((a, b) => a - b) : movements;
  containerMovements.innerHTML = '';

  movs.forEach(function (movement, indx) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const movElement = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
       ${indx + 1} ${type} </div>
      <div class="movements__value">${movement}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', movElement);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, el) => acc + el, 0);
  labelBalance.textContent = account.balance;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(el => el > 0)
    .reduce((acc, el) => acc + el, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outComes = account.movements
    .filter(el => el < 0)
    .reduce((acc, el) => acc + el, 0);

  labelSumOut.textContent = `${outComes}€`;

  const interest = account.movements
    .filter(el => el > 0)
    .map(el => (el * account.interestRate) / 100)
    .filter((el, indx, arr) => {
      // console.log(el, arr);
      return el >= 1;
    })
    .reduce((acc, el) => el + acc);

  labelSumInterest.textContent = `${interest}€`;
};

const updateAccountData = function (account) {
  displayMovements(account.movements);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    updateAccountData(currentAccount);
  }

  inputLoginPin.value = inputLoginUsername.value = '';
  inputLoginPin.blur();
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const receiveAccount = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  const amount = inputTransferAmount.value;
  if (
    amount > 0 &&
    receiveAccount &&
    amount <= currentAccount.balance &&
    receiveAccount?.owner !== currentAccount.owner
  ) {
    receiveAccount.movements.push(Number(amount));
    currentAccount.movements.push(Number(-amount));
    updateAccountData(currentAccount);
  }

  inputTransferAmount.value = inputTransferTo.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const deleteAccIndx = accounts.findIndex((el, indx, arr) => {
      return el => el.userName === inputCloseUsername.value;
    });

    accounts.splice(deleteAccIndx, 1);
    containerApp.style.opacity = 0;
  }

  inputClosePin.value = inputCloseUsername.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(element => element >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateAccountData(currentAccount);
  }

  inputLoanAmount.value = '';
});

let shortFlag = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  shortFlag = !shortFlag;
  displayMovements(currentAccount.movements, shortFlag);
});

// ------ LECTURES ------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////
// Creating and Filing  Arrays
/* */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

const emptArr = new Array(4);
console.log(emptArr); //[empty × 4]

emptArr[0] = 32;
console.log(emptArr);

emptArr.map((el, indx, arr) => (arr[indx] = el));
console.log(emptArr); // [32, empty × 3]

emptArr.fill(2, 0, 2); //element,startPoint, endPoint
emptArr.fill(7, 2, 5);
console.log(emptArr);

//Array.from({length:x}, (_, i) => i+1);
const y = Array.from({ length: 4 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (elm, indx, arr) => {
  console.log(elm, arr, indx);
  return indx + 1;
});
console.log(z);

const ranArr = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 7) + 1
);

console.log(ranArr);

const movArrays = document.querySelectorAll('.movements__value');
console.log(movArrays); //NodeList
console.log([...movArrays]);

const arrMov1 = [...movArrays].map(e => e.textContent.replace('€', ''));
console.log(arrMov1);

const getMovementFromUI = () => {
  const arrMov2 = Array.from(
    document.querySelectorAll('.movements__value'),
    el => {
      return el.textContent.replace('€', '');
    }
  );
  return console.log(arrMov2);
};
labelBalance.addEventListener('click', getMovementFromUI);

///////////////////////////////////////
// Sorting Arrays
/* 

// return < 0, A, B(keep order)
// return > 0, B, A (switch order)

console.log(movements);
movements.sort((current, next) => {
  if (current > next) return 1;
  if (next > current) return -1;
});
console.log(movements);

//Ascending
movements.sort((curr, next) => curr - next);
console.log(movements);

//Descending
movements.sort((curr, next) => next - curr);
console.log(movements);
*/

///////////////////////////////////////
// The flat() and flatMap() method
/*

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); //don't mutate the original array

const deeperArr = [[[1, 2], 3], [4, [5], 6], 7, 8];
console.log(deeperArr.flat()); // [Array(2), 3, 4, Array(1), 6, 7, 8]
console.log(deeperArr.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]

// const allMovements = accounts.map(acc => acc.movements);
// console.log(allMovements);

// const flatMovements = allMovements.flat();
// console.log(flatMovements);

// const totalBalance = flatMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(totalBalance);

const totalBalance = accounts
  .map(elm => elm.movements)
  .flat()
  .reduce((acc, elt) => acc + elt, 0);

console.log(totalBalance);

const totalBalance2 = accounts
  .flatMap(elm => elm.movements)
  .reduce((acc, elm) => acc + elm, 0);
console.log(totalBalance2);
 */

///////////////////////////////////////
// The some() method
/* 

const flag = movements.includes(70); //using for certainty
const any2 = movements.some((el, indx, arr) => el === 70);
const any = movements.some((el, indx, arr) => el > 300); //some allow us to do more complex works
console.log(flag, any, any2);

const callBackFunc = el => el > 0;

const everIsDeposit = movements.every(el => el > 0);
const getDeposits = movements.filter(el => el > 0);
const ever4IsDeposit = account4.movements.every(el => el > 0);
const everIsDeposit2 = movements.every(callBackFunc);
const getDeposits2 = movements.filter(callBackFunc);
const ever4IsDeposit2 = account4.movements.every(callBackFunc);

console.log(everIsDeposit, ever4IsDeposit);
console.log(getDeposits);

console.log(everIsDeposit2, ever4IsDeposit2);
console.log(getDeposits2);
console.log(callBackFunc);
*/

///////////////////////////////////////
// The find method
/* 

const firstWithdrawal = movements.find(el => el < 0);
console.log(firstWithdrawal);

const accountSarah = accounts.find(el => el.owner === 'Sarah Smith');
console.log(accountSarah);

let trueMatch;
for (const acc of accounts) {
  if (acc.owner === 'Jonas Schmedtmann') {
    trueMatch = acc;
  }
}
console.log(trueMatch);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀


const calcAverageHumanAge = function (ages) {
  const average = ages
    .map(el => (el <= 2 ? el * 2 : el * 4 + 16))
    .filter(el => el >= 18)
    .reduce((acc, el, indx, arr) => acc + el / arr.length, 0);
  return console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

///////////////////////////////////////
//The Magic of Chaining Methods
/*
const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter(el => el > 0)
  .map((el, indx, arr) => {
    // console.log(arr);
    return el * eurToUsd;
  })
  .reduce((acc, el) => acc + el, 0);

console.log(totalDepositsUSD);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀


const calcAverageHumanAge = function (ages) {
  // const calcAges = ages.map(function (el, indx, arr) {
  //   return el <= 2 ? el * 2 : 16 + 4 * el;
  // });
  // console.log(calcAges);

  // const calcAdult = calcAges.filter(function (el, indx, arr) {
  //   return el >= 18;
  // });
  // console.log(calcAdult);

  // const average =
  //   calcAdult.reduce(function (acc, el, indx, arr) {
  //     return acc + el;
  //   }, 0) / calcAdult.length;

  // console.log(average);
  // return average;

  const calcArr = ages
    .map(el => (el <= 2 ? el * 2 : 16 + 4 * el))
    .filter(e => e >= 18);

  // const average = calcArr.reduce((acc, el) => acc + el, 0) / calcArr.length;
  const average = calcArr.reduce((acc, el, i, arr) => acc + el / arr.length, 0);
  // 2+3/2 => 2/2 + 3/2

  return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

///////////////////////////////////////
// The reduce Method
/* 

//Accumulator -> SNOWBAL
const totalMov = movements.reduce(function (acc, element, index, arr) {
  return acc + element;
}, 0);
console.log(totalMov);

let sum = 0; //acc
for (const el of movements) {
  sum += el;
}
console.log(sum);

//get max value
const maxVal = movements.reduce(function (acc, val) {
  return val > acc ? val : acc;
}, movements[0]);

console.log(maxVal);
*/

///////////////////////////////////////
// The filter Method
/* 

const withdrawal = movements.filter(el => el < 0);
console.log(withdrawal);

const deposits = movements.filter(function (element, indx, arr) {
  return element > 0;
});
console.log(deposits);

const deposits2 = [];
movements.forEach(function (el, indx, arr) {
  if (el > 0) deposits2.push(el);
});
console.log(deposits2);

*/

///////////////////////////////////////
// Computing Usernames
/* 

const createUserNames = function (accs) {
  accs.forEach(function (acc, indx) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(el => el[0])
      .join('');
  });
};

createUserNames(accounts);
console.log(accounts);
*/

///////////////////////////////////////
// The Map Method
/* 

const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements.map(function (el, indx, arr) {
  // console.log(el, indx, arr);
  return el * eurToUsd;
});
console.log(movementsUSD);

const movementsUSD1 = movements.map((el, indx, arr) => el * eurToUsd);
console.log(movementsUSD1);

const movementsUSD2 = [];
for (const el of movements) {
  movementsUSD2.push(el * eurToUsd);
}
console.log(movementsUSD2);

const movementsUSD3 = [];
movements.forEach(function (el, indx, arr) {
  movementsUSD3.push(el * eurToUsd);
});
console.log(movementsUSD3);

const movementsDescription = movements.map(
  (el, indx, arr) =>
    `Movement ${indx + 1}: You ${el > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      el
    )}`
);

console.log(movementsDescription);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function (dogsJulia, dogsKate) {
  // const correctedDogsJ = dogsJulia.slice(1, -2);
  const correctedDogsJ = dogsJulia.slice();
  correctedDogsJ.splice(0, 1);
  correctedDogsJ.splice(-2);
  // const allDogs = [...correctedDogsJ, ...dogsKate];
  const allDogs = correctedDogsJ.concat(dogsKate);
  console.log(allDogs);

  allDogs.forEach(function (element, index, array) {
    if (element >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${element} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

///////////////////////////////////////
// Creating DOM Elements
/* 

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (movement, indx) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const movElement = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
       ${indx + 1} ${type} </div>
      <div class="movements__value">${movement}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', movElement);
  });
};

displayMovements(account1.movements);
*/

///////////////////////////////////////
// forEach With Maps and Sets
/* 

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
*/

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
