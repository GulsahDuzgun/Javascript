'use strict';

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelector('.show-modal');
const openBtnList = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

console.log(modal);
console.log(closeBtn);
console.log(openBtn);
console.log(openBtnList);
console.log(overlay);

for (let i = 0; i < openBtnList.length; i++) {
  console.log(openBtnList[i]);
  console.log(openBtnList[i].textContent);
}
