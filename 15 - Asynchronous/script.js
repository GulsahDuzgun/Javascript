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
}

// function getCountryAndNeighbour(country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(request.responseText);
//     renderHTML(data);

//     const neighbours = data.borders;
//     neighbours.forEach(cntry => {
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${cntry}`);
//       request2.send();

//       request2.addEventListener('load', function () {
//         const [data] = JSON.parse(request2.responseText);
//         renderHTML(data, 'neighbour');
//         console.log(data);
//       });
//     });
//     console.log(neighbours);
//   });
// }

// getCountryAndNeighbour('finland');

// fetch(`https://restcountries.com/v3.1/name/finland`)
//   .then(function (response) {
//     const data = response.json();
//     console.log(data);
//     return data;
//   })
//   .then(function (data) {
//     console.log(data);
//     renderHTML(data[0]);
//   });

// function renderCountry(name) {
//   fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Country can\'t be found`);
//       }
//       return res => res.json();
//     })
//     .then(data => {
//       renderHTML(data[0]);

//       const neighbours = data[0]?.borders;
//       if (!neighbours) return;

//       // neighbours.forEach(countryCode => {
//       //   console.log(countryCode);
//       // });

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbours[1]}`);
//     })
//     .then(res => {
//       return res.json(); //promise action object
//     })
//     .then(data => renderHTML(data[0], 'neighbour'))
//     .catch(err => {
//       countriesContainer.innerHTML = '';
//       countriesContainer.insertAdjacentText('beforeend', err.message);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

function getJSON(url, errMess = 'Something went wrong') {
  return fetch(`${url}`).then(res => {
    if (!res.ok) {
      throw new Error(`${errMess}`);
    }
    return res.json();
  });
}

function renderCountry(name) {
  getJSON(
    `https://restcountries.com/v3.1/name/${name}`,
    `Country can\'t be found`
  )
    .then(data => {
      console.log(data);
      renderHTML(data[0]);
      const neighbours = data[0].borders;

      if (!neighbours) throw new Error(`${name} has no neighbour`);
      console.log(neighbours);

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbours[0]}`,
        `${name} has no neighbour`
      );
    })
    .then(data => renderHTML(data[0], 'neighbour'))
    .catch(err => {
      countriesContainer.innerHTML = '';
      countriesContainer.insertAdjacentText('beforeend', err.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

// btn.addEventListener('click', renderCountry.bind(null, 'australia'));

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀*/

function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=KEY`)
    .then(res => {
      if (res.status === 403) {
        throw new Error(`Are you in a hurry? Slow down!!`);
      }
      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.state}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => res.json())
    .then(res => renderHTML(res[0]))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })
    .catch(e => {
      console.log(`💣  ${e.message}`);
    });
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
