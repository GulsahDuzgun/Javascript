'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const URL = `https://restcountries.com/v3.1/name/`;

// function getCountry(nameCountry) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${nameCountry}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${
//         Object.values(data.languages)[0]
//       }</p>
//       <p class="country__row"><span>💰</span>${
//         Object.values(data.currencies)[0].name
//       }</p>
//     </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }

function renderHTML(data, neighbourClass = '') {
  const html = `
  <article class="country ${neighbourClass}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

function getCountryAndNeighbour(country) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(request.responseText);
    renderHTML(data);

    const neighbours = data.borders;
    neighbours.forEach(cntry => {
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${cntry}`);
      request2.send();

      request2.addEventListener('load', function () {
        const [data] = JSON.parse(request2.responseText);
        renderHTML(data, 'neighbour');
        console.log(data);
      });
    });
    console.log(neighbours);
  });
}

getCountryAndNeighbour('finland');

const req = fetch(`https://restcountries.com/v3.1/name/turkey`);
console.log(req);
