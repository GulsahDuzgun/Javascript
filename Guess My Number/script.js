'use strict';

const btnCheck = document.querySelector('.check');
const messageBox = document.querySelector('.message');
const checkBox = document.querySelector('.guess');

btnCheck.addEventListener('click', function () {
  const checkVal = Number(checkBox.value);

  if (!checkVal) messageBox.textContent = 'Not correct number 🤡';

  console.log(checkVal, typeof checkVal);
});

//console.log(btnCheck, typeof btnCheck);

/*
//----- Selecting and Manipulating Elements -----

const number = document.querySelector('.number');
number.textContent = 24;
console.log(number.textContent);

document.querySelector('.message').textContent = 'Correct number 🎉';

const inputNum = (document.querySelector('.left .guess').value = 25);
const inputNum2 = (document.querySelector('.left .guess').textContent = 30);

console.log(inputNum);
console.log(inputNum2);
*/

/*
//----- DOM -----
const btn = document.querySelector('.btn.check');
const btnText = document.querySelector('.btn.check').textContent;
console.log(btn);
console.log(btnText);
*/
