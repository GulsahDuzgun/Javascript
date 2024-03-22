'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    // updateUI(currentAccount);
  }
  currentAccount = account1;
  updateUI(currentAccount);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
//Creating Dates

const now = new Date();
console.log(now);

console.log(new Date('Fri Mar 22 2024 14:07:08 GMT+0300 (GMT+03:00)'));

console.log(new Date(1999, 11, 27, 12, 23, 53));
console.log(new Date('December 27, 2000'));

console.log(new Date(0));
console.log(new Date(4 * 24 * 60 * 60 * 1000));

const future = new Date(2000, 11, 27, 18, 23, 8, 9);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); //which day of month
console.log(future.getDay()); //which day of week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());

console.log(future.getTime());
console.log(future.toISOString());
console.log(new Date(977934188009));

let now2 = Date.now();
now2 = new Date(now2);
console.log(now2);

now2.setFullYear(2034);
console.log(now2);

/* */
/////////////////////////////////////////////////
//Working with BigInt
/* 

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 5);

console.log(BigInt(98767819925474099654740996));
console.log(98767819925474099654740996n);
console.log(67819925474099654345676543n);

console.log(1000n + 2000n);
console.log(99254740996n * 12n);
// console.log(Math.sqrt(16n)); Cannot convert a BigInt value to a number

const huge = 23456345677865476n;
const num = 27;
//console.log(huge * num);Cannot mix BigInt and other types, use explicit conversions

console.log(huge * BigInt(num)); //633321333302367852n

console.log(20n > 15);
console.log(20n == 20); //Type coercion does ==
console.log(20n === 20); //Type coercion doen't ===
console.log(20n == '20'); //true

console.log(huge + 'is REALLY big!!');

console.log(10 / 3); //3.333
console.log(10n / 3n); //3
*/

/////////////////////////////////////////////////
//Numeric Separators
/* 
const diameter = 287_532_002_000;
console.log(diameter, typeof diameter); //number

const price = 14_99;
console.log(price);

const transferFee = 1_500;
const transferFee2 = 15_00;
console.log(transferFee); //1500
console.log(transferFee2); //1500

console.log(Number('12_27_2000')); //NaN
console.log(Number.parseInt('12_27_2000')); //12
*/

/////////////////////////////////////////////////
//The Remainder Operator
/*
console.log(5 % 2); //1
console.log(5 / 2); //2 * 2 + 1

console.log(8 / 3); //3 * 2 + 2
console.log(8 % 3); //2

const isEven = num => (num % 2 === 0 ? 'even' : 'odd');
console.log(isEven(7));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(
//     (elm, indx, arr) => {
//       if (indx % 2 === 0) {
//         elm.style.backgroundColor = '#ddd';
//       }
//     }
//   );
// });

labelBalance.addEventListener('click', function () {
  Array.from(document.querySelectorAll('.movements__row'))
    .flat()
    .forEach((el, indx) => {
      if (indx % 3 === 0) {
        el.style.backgroundColor = '#ed34';
      }
    });
});

 */

/////////////////////////////////////////////////
// Math and Rounding
/* 

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(8 ** (1 / 3));

console.log(Math.max(2, 3, 5, 8, 34, 486, 87)); //486
console.log(Math.max(2, 3, 5, 8, 34, '486', 87)); //486
console.log(Math.max(2, 3, 5, 8, 34, '-486', 87)); //87
console.log(Math.max(2, 3, 5, 8, 34, '-486N', 87)); //NaN

console.log(Math.min(6, 12, 11, 2)); //2
console.log(Math.min(6, 12, 11, '-2')); //-2
console.log(Math.min(6, 12, 11, '-2e')); //NaN

console.log((Math.PI * Number.parseFloat('25rem')) ** 2);

const randomBtwTwoNum = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomBtwTwoNum(1, 8));

console.log(Math.trunc(12.8));
console.log(Math.trunc(12.27));

console.log(Math.round(24.27));
console.log(Math.round('24.74'));

console.log(Math.ceil(12.37)); //13
console.log(Math.ceil('27.01')); //28

console.log(Math.floor(12.98)); //12
console.log(Math.floor('27.89')); //27

console.log(Math.floor(24.03)); //24
console.log(Math.trunc(24.93)); //24
console.log(Math.floor(-24.03)); //-25
console.log(Math.trunc(-24.93)); //-24

//Rounding Integers
console.log((2.7).toFixed(3)); //2.700
console.log((2.7).toFixed(0)); //3
console.log((2.345).toFixed(2)); //2.35
console.log((+3.455).toFixed(2));
*/

/////////////////////////////////////////////////
// Converting And Checking Numbers
/*
console.log(23 === 23.0); //true
console.log(0.1 + 0.2); //3.0004
console.log(0.1 + 0.2 === 0.3); //false

console.log(Number('27'));
console.log(typeof +'27'); //number

console.log(typeof ('a' + '27')); //string
console.log(typeof (2 + '27')); //string

console.log(typeof -'27'); //number
console.log(typeof +'27'); //number

//Parsing

console.log(Number.parseInt('30px')); //30
console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseInt('e34')); //NaN

console.log(Number.parseFloat('2.5rem')); //2.5
console.log(Number.parseFloat('30px')); //30
console.log(Number.parseFloat('e34')); //NaN

console.log(Number.isNaN('38px')); //false
console.log(Number.isNaN(38)); //false
console.log(Number.isNaN(+'38px')); //true
console.log(Number.isNaN(30 / 0)); //false --> Infinity

console.log(Number.isFinite('38px')); //false
console.log(Number.isFinite(38)); //true
console.log(Number.isFinite(48.3)); //true
console.log(Number.isFinite(+'38px')); //false
console.log(Number.isFinite(30 / 0)); //false

console.log(Number.isInteger(27)); //true
console.log(Number.isInteger('12')); //false
console.log(Number.isInteger(12.0)); //true
console.log(Number.isInteger(12.27)); //false
console.log(Number.isInteger(12 / 0)); //false
*/
