'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Implementing Smooth Scrolling
/* */

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  /*
  console.log(s1coords);
  console.log(window.pageYOffset);

  //viewport measures
  console.log(document.documentElement.clientHeight);
  console.log(document.documentElement.clientWidth);
  */

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   window.pageYOffset + s1coords.top //current scroll + current position
  // );

  // window.scrollTo({
  //   top: s1coords.top + window.pageYOffset,
  //   left: s1coords.left + window + pageXOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Selecting Elements
/* 

console.log(document.documentElement); // all HTML
console.log(document.head); //Just head-> not visible on the page
console.log(document.body); // body element of HTML

const allSelections = document.querySelectorAll('.section');
console.log(allSelections); //NodeList

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //HTMLCollection

//creating and inserting elements
const message = document.createElement('div');
const header = document.querySelector('.header');
message.classList.add('cookie-message');

// message.textContent = 'We use cookied for improved functionality and analytics';
message.innerHTML = `We use cookied for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);
header.insertAdjacentElement('beforeend', message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

message.style.backgroundColor = '#373458';
message.style.width = '120%';

console.log(message.style.width);
console.log(message.style.color);

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);
console.log(Number.parseFloat(getComputedStyle(message).height));

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

console.log(getComputedStyle(message).height);

// document.documentElement --> root

document.documentElement.style.setProperty('--color-primary', '#f3f234');

const logo = document.querySelector('.nav__logo');

console.log(logo.alt);
logo.alt = 'Bankist LOGO';
console.log(logo.alt);

logo.setAttribute('unDefined', 'New property');
console.log(logo.getAttribute('unDefined'));

console.log(logo.src); //absolute URL
console.log(logo.getAttribute('src')); //relative url

const link = document.querySelector('.nav__link');

console.log(link.href); //exact url
console.log(link.getAttribute('href')); //fragment
console.log(link.dataset.setProperty);
console.log(link.className);
*/
/*
link.classList.remove()
link.classList.toggle()
link.classList.contains()
link.classList.add();
*/
