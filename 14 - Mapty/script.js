'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let globalE, globalMap;

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},12z?entry=ttu`
    );

    const coords = [latitude, longitude];
    console.log(L.map);
    const map = L.map('map').setView(coords, 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    globalMap = map;
    map.on('click', function (mapEvent) {
      globalE = mapEvent;

      form.classList.remove('hidden');
      inputDistance.focus();
      // const { lat, lng } = mapEvent.latlng;
      // L.marker([lat, lng])
      //   .addTo(map)
      //   .bindPopup(
      //     L.popup({
      //       maxWidth: 250,
      //       minWidth: 100,
      //       autoClose: false,
      //       closeOnClick: false,
      //       clasName: 'cycling-popup',
      //     })
      //   )
      //   .setPopupContent('Hi bro')
      //   .openPopup();
    });

    L.marker(coords).addTo(map).bindPopup('Hello').openPopup();
  },
  function () {
    alert('Could not get your position ');
  }
);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  inputCadence.value =
    inputDistance.value =
    inputDuration.value =
    inputElevation.value =
      '';

  const { lat, lng } = globalE.latlng;
  L.marker([lat, lng])
    .addTo(globalMap)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        clasName: 'cycling-popup',
      })
    )
    .setPopupContent('Hi bro')
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');

  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
});
