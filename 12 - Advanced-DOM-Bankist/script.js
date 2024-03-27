'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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
// btn Scroll

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
//

const allLinks = document.querySelectorAll('.nav__link');
const allLinkContainer = document.querySelector('.nav__links');
allLinkContainer.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const clickedEl = e.target;
    const id = clickedEl.getAttribute('href');
    const scrollTo = document.querySelector(id);

    scrollTo.scrollIntoView({ behavior: 'smooth' });
  }
});

// allLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//      e.preventDefault()
//     // console.log(link.href); http://127.0.0.1:8080/#section--1
//     // console.log(this.getAttribute('href'));#section--1
//     const target = this.getAttribute('href');
//     document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Tabbed component

const tabContainer = document.querySelector('.operations__tab-container');
const allTabs = document.querySelectorAll('.operations__tab');
const tabContainers = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  const clickedTab = e.target.closest('.operations__tab');

  // Guard clause
  if (!clickedTab) return;
  allTabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedTab.classList.add('operations__tab--active');

  tabContainers.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  const activeContent = document.querySelector(
    `.operations__content--${clickedTab.dataset.tab}`
  );
  activeContent.classList.add('operations__content--active');
});

const nav = document.querySelector('.nav');

const changeOpacity = function (e) {
  // console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   changeOpacity(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   changeOpacity(e, 1);
// });

nav.addEventListener('mouseover', changeOpacity.bind(0.5));
nav.addEventListener('mouseout', changeOpacity.bind(1));

//Sticky Navigation
/*

const initialCords = section1.getBoundingClientRect();

window.addEventListener('scroll', function (e) {
  if (this.window.scrollY > initialCords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
*/

//Sticky Navigation: Intersection Observer API

// const obsCallback = function (entries, observer) {
//   console.log(entries[0]);
// };

// const obsOptions = {};

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const heightNav = nav.getBoundingClientRect().height;
const headerOptions = {
  root: null,
  treshold: 0,
  rootMargin: `-${heightNav}px`,
};

const addStickyCallback = function (entries, observer) {
  // console.log(entries[0]);
  // console.log(observer);
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(
  addStickyCallback,
  headerOptions
);
headerObserver.observe(header);

//Revealing Elements on Scroll

const displaySection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return; //Guard

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const allSection = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(displaySection, {
  root: null,
  threshold: 0.18,
});

allSection.forEach(function (section) {
  // section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

// Lazy Load Images

const callForLoadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const allImages = document.querySelectorAll('.features__img[data-src]');
const imgObserver = new IntersectionObserver(callForLoadImg, {
  root: null,
  threshold: 0.5,
  rootMargin: '-50px',
});

// Building a Slider Component: Part1

allImages.forEach(img => imgObserver.observe(img));
const slides = document.querySelectorAll('.slide');
const slider = document.querySelectorAll('.slider');
const rightBtn = document.querySelector('.slider__btn--right');
const leftBtn = document.querySelector('.slider__btn--left');
const dotsContainer = document.querySelector('.dots');
let currSlide = 0;
const lengthSlides = slides.length - 1;

const createDots = function () {
  slides.forEach((_, indx) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `
    <button class="dots__dot" data-slide=${indx}></button>`
    );
  });
};
createDots();

const displayActiveSlider = function (activeSlide) {
  document.querySelectorAll('.dots__dot').forEach(dot => {
    dot.classList.remove('dots__dot--active');
  });

  document
    .querySelector(`.dots__dot[data-slide = "${activeSlide}"]`)
    .classList.add('dots__dot--active');
};

displayActiveSlider(0);

dotsContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('dots__dot')) return; //guard

  const { slide } = e.target.dataset;
  setPlaceSlides(slide);
  displayActiveSlider(slide);
});

const setPlaceSlides = function (currIndx) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currIndx)}%)`;
  });
};

const nextSlide = () => {
  if (currSlide === lengthSlides) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  setPlaceSlides(currSlide);
  displayActiveSlider(currSlide);
};

const previousSlide = function () {
  if (currSlide === 0) {
    currSlide = lengthSlides;
  } else {
    currSlide--;
  }
  setPlaceSlides(currSlide);
  displayActiveSlider(currSlide);
};

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', previousSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    nextSlide();
  }

  e.key === 'ArrowLeft' && previousSlide();
});

// Building a Slider Component: Part1

///////////////////////////////////////
///////////////////////////////////////
//LECTURES

///////////////////////////////////////
//Lifecycle DOM Events
/* */
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('Document has been parsed ', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = ' ';
});

///////////////////////////////////////
//The Intersection Observer
/*
const callbackFunc = function (entries, observer) {
  console.log('It is seen');
  console.log(entries[0]);
};

const obsObj = {
  root: null,
  treshold: [1],
};

const box = document.querySelector('#section--box');
const boxObserver = new IntersectionObserver(callbackFunc, obsObj);

boxObserver.observe(box); */

///////////////////////////////////////
//DOM Traversing
/* 

//Going downwards: child
const h1 = document.querySelector('h1');
const child1 = h1.querySelector('.highlight');
const childs = h1.querySelectorAll('.highlight');

console.log(child1);
console.log(childs); //NodeList
console.log(h1.children); //HTML Collection
console.log(h1.childNodes); //NodeList
h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'rebeccapurple';

//Going upwards: parents

h1.parentElement.style.backgroundColor = 'var(--color-secondary)';
console.log(h1.parentNode);

h1.closest('.header').style.opacity = 0.8;
h1.closest('h1').style.color = 'orangered'; //itself

//Going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);

const allSiblingsWitItself = h1.parentElement.children; //HTMLCollection

console.log(allSiblingsWitItself);
[...allSiblingsWitItself].forEach(sib => {
  if (sib !== h1) {
    sib.style.transform = 'scale(0.5)';
  }
});
*/

///////////////////////////////////////
// Event Propagation in Practice
/* 

//12-16 --> 12 + (5*0.9)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandColor = () => `rgb(${randomInt(0, 255)}, 
${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(getRandColor());

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = getRandColor();
  console.log('NAV', e.target, e.currentTarget);
  console.log(this === e.currentTarget); //true
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = getRandColor();
  console.log('Container', e.target, e.currentTarget);
  e.stopPropagation();
});

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = getRandColor();
  console.log('LINK', e.target, e.currentTarget);
});
*/

///////////////////////////////////////
// Types of Events and Event Handlers
/* 

const h1 = document.querySelector('h1');
const clickH1 = function (e) {
  alert('addEventListener: Great!');
  h1.removeEventListener('mouseenter', clickH1);
};

h1.addEventListener('mouseenter', clickH1);

h1.onmouseenter = function () {
  alert('x.onmouseenter');
};

setTimeout(() => {
  alert('setTimeout method');
}, 3000);
*/

///////////////////////////////////////
// Implementing Smooth Scrolling
/*

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

 
  console.log(s1coords);
  console.log(window.pageYOffset);

  //viewport measures
  console.log(document.documentElement.clientHeight);
  console.log(document.documentElement.clientWidth);


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
}); */

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
