'use strict';

const btnCheck = document.querySelector('.check');
const messageBox = document.querySelector('.message');
const checkBox = document.querySelector('.guess');
const secretNumBox = document.querySelector('.number');
const scoreBox = document.querySelector('.score');

//0-19 arasında random satı üretirken 1 ekleyerek 1-20 arasında olmasını sağladık
const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
secretNumBox.textContent = secretNum;

btnCheck.addEventListener('click', function () {
  const checkVal = Number(checkBox.value);

  if (!checkVal) {
    messageBox.textContent = 'No number 🤡';
  } else if (checkVal === secretNum) {
    messageBox.textContent = 'Congratulations 🎉';
  } else if (checkVal > secretNum) {
    messageBox.textContent = 'Too high 📈';
    if (score > 1) {
      score--;
    } else {
      score = 0;
      messageBox.textContent = 'You lost the game';
    }
  } else if (checkVal < secretNum) {
    messageBox.textContent = 'Too low 📉';
    if (score > 1) {
      score--;
    } else {
      score = 0;
      messageBox.textContent = 'You lost the game';
    }
  }

  scoreBox.textContent = score;
  // console.log(checkVal, typeof checkVal);
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
