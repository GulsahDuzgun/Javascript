'use strict';

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelector('.show-modal');
const openBtnList = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openModal = () => {
  modal.classList.remove('hidden'); // do not use .
  overlay.classList.remove('hidden');
};

for (let i = 0; i < openBtnList.length; i++) {
  openBtnList[i].addEventListener('click', openModal);
}

closeBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', closeModal);

/*
console.log(modal);
console.log(closeBtn);
console.log(openBtn);
console.log(openBtnList);
console.log(overlay);

for (let i = 0; i < openBtnList.length; i++) {
  console.log(openBtnList[i]);
  console.log(openBtnList[i].textContent);
}
*/
