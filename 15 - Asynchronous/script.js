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
/*

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

*/

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

/*

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
*/

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

GOOD LUCK 😀

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

*/

/*
console.log('Test start');
setTimeout(() => console.log('function from Callback Queue'), 0);
Promise.resolve('function from Microtask Queue').then(text => {
  console.log(text);
  for (let i = 0; i < 1000000000; i++) {}
});
console.log('Test end');
*/

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random(1) > 0.5) {
    return resolve('You win 💲');
  } else {
    return reject(new Error('You lost 💩'));
  }
});

console.log(lotteryPromise);

lotteryPromise
  .then(mess => console.log(mess))
  .catch(err => console.log(err.message));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('2 seconds have passed');
    return wait(4);
  })
  .then(() => console.log('4 seconds have passed'));

Promise.resolve('returns fulfilled promise').then(mes => console.log(mes));

Promise.reject(new Error('returns rejected promise')).catch(err =>
  console.log(err.message)
);
*/

/*

function getCurrentCord() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function whereAmI() {
  getCurrentCord()
    .then(curr => {
      const { latitude: lat, longitude: lng } = curr.coords;
      console.log(curr);
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=KEY`);
    })
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

whereAmI();
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀

const imgContainer = document.querySelector('.images');
let currentImage;

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = `${imgPath}`;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
}

createImage('./img/img-1.jpg')
  .then(imgData => {
    currentImage = imgData;

    return new Promise(function (resolve) {
      setTimeout(resolve, 2000);
    });
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(currImg => {
    currentImage = currImg;

    return new Promise(function (resolve) {
      setTimeout(resolve, 2000);
    }).then(() => {
      currentImage.style.display = 'none';
    });
  });
*/

///////////////////////////////////////
// Consuming Promises with Async/Await

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

function getCurrentPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve), reject;
  });
}

const whereAmI = async function () {
  try {
    const currPosition = await getCurrentPosition();
    const { latitude: lat, longitude: lng } = currPosition.coords;
    countriesContainer.style.opacity = 1;

    const fetchRes = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=213831191454149425239x3191`
    );

    if (!fetchRes.ok) {
      throw new Error("Error happened while getting user's country");
    }
    const res = await fetchRes.json();

    const data = await fetch(
      `https://restcountries.com/v3.1/name/${res.country}s`
    );

    if (!data.ok) {
      throw new Error(
        'Error is created while getting the country data from API'
      );
    }
    const JSONData = await data.json();
    renderHTML(JSONData[0]);
    return `You are in ${JSONData[0].name.common}`;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

///////////////////////////////////////
// Returning Values from Async Functions
/*

// console.log('first');
// console.log(whereAmI());

// whereAmI()
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));

// console.log('third');

(async function () {
  console.log('first');
  try {
    await whereAmI().then(data => console.log(data));
  } catch (err) {
    console.log(err.message);
  }
  console.log('third');
})();

const order = async function () {
  console.log('first **');

  await whereAmI()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));

  console.log('third**');
};
order();
*/

///////////////////////////////////////
// Running Promises in Parallel
/* 

function getJSON(url, errMess = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(errMess);
    }
    return res.json();
  });
}

const getCapital = async function (c1, c2, c3) {
  //   const countryData1 = await getJSON(
  //     `https://restcountries.com/v3.1/name/${c1}`
  //   );
  //   const countryData2 = await getJSON(
  //     `https://restcountries.com/v3.1/name/${c2}`
  //   );

  //   const countryData3 = await getJSON(
  //     `https://restcountries.com/v3.1/name/${c3}`
  //   );

  try {
    const allData = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    const capitalCities = allData.map(data => data[0].capital[0]);

    console.log(capitalCities);
  } catch (err) {
    console.log(err);
  }
};

getCapital('finland', 'turkey', 'italy');
*/

const timeOut = async function (sec) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

const getJSON = async function (url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error("Data can't fetch from API");
      }
      return res.json();
    })
    .catch(err => console.log(err.message));
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/finland`),
  timeOut(0.02),
])
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

Promise.any([
  //first positive
  Promise.reject('Error 1'),
  Promise.resolve('Success'),
  Promise.reject('Error 2'),
]).then(res => console.log(res));

Promise.race([
  Promise.reject('Error 1'),
  Promise.resolve('Success'),
  Promise.reject('Error 2'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

Promise.all([
  Promise.reject('Error 1'),
  Promise.resolve('Success'),
  Promise.reject('Error 2'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

Promise.allSettled([
  Promise.reject('Error 1'),
  Promise.resolve('Success'),
  Promise.reject('Error 2'),
]).then(res => console.log(res));
