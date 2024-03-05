'use strict';

const btnCheck = document.querySelector('.check');
const messageBox = document.querySelector('.message');
const checkBox = document.querySelector('.guess');
const secretNumBox = document.querySelector('.number');
const scoreBox = document.querySelector('.score');
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');
const highScoreBox = document.querySelector('.highscore');

//0-19 arasında random satı üretirken 1 ekleyerek 1-20 arasında olmasını sağladık
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// console.log(secretNum);

const displayMessage = function (message) {
  messageBox.textContent = message;
};

btnCheck.addEventListener('click', function () {
  const checkVal = Number(checkBox.value);

  if (!checkVal) {
    displayMessage('No number 🤡');
  } else if (checkVal === secretNum) {
    displayMessage('Congratulations 🎉');
    body.style.backgroundColor = '#60b347';
    secretNumBox.textContent = secretNum;

    if (score > highScore) {
      highScore = score;
      highScoreBox.textContent = highScore;
    }

    secretNumBox.style.width = '30rem';
  } else if (checkVal !== secretNum) {
    displayMessage(checkVal > secretNum ? 'Too high 📈' : 'Too low 📉');

    if (score > 1) {
      score--;
    } else {
      score = 0;
      displayMessage('You lost the game');
    }
  }
  //  else if (checkVal > secretNum) {
  //   messageBox.textContent = 'Too high 📈';

  //   if (score > 1) {
  //     score--;
  //   } else {
  //     score = 0;
  //     messageBox.textContent = 'You lost the game';
  //   }
  // } else if (checkVal < secretNum) {
  //   messageBox.textContent = 'Too low 📉';

  //   if (score > 1) {
  //     score--;
  //   } else {
  //     score = 0;
  //     messageBox.textContent = 'You lost the game';
  //   }
  // }

  scoreBox.textContent = score;
  // console.log(checkVal, typeof checkVal);
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNum);
  scoreBox.textContent = score;
  secretNumBox.textContent = '?';
  messageBox.textContent = ' Start guessing...';
  checkBox.value = '';
  body.style.backgroundColor = '#222';
  secretNumBox.style.width = '15rem';
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
