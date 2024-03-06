'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

let tempScore = 0;

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const randNum = Math.trunc(Math.random() * 6) + 1;
  console.log(randNum);
  dice.src = `./dice-${randNum}.png`;
  dice.classList.remove('hidden');

  if (randNum !== 1) {
    tempScore += randNum;
  } else {
    tempScore = 0;
  }

  current0.textContent = tempScore;
});
