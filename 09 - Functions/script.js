'use strict';

const flight = 23456787654;

const me = {
  firstName: 'Gülşah',
  passport: 345678909876,
};

const checkIn = function (passenger, flightNum) {
  passenger.firstName = 'Mrs. ' + passenger.firstName;

  if (passenger.passport === 345678909876) {
    flightNum = 11111111111;
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(me, flight);
// console.log(me, flight);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000);
};

newPassport(me);
console.log(me, flight);
checkIn(me, flight);

///////////////////////////////////////
// Default Parameters
/*
const bookings = [];

const createBooking = function (
  flightNum = 'ED1232',
  price,
  numPassengers = price * 2
) {
  // flightNum ||= 1;
  // numPassengers = numPassengers || 12;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('ED12', 127);
createBooking(undefined, 58);
createBooking('OSL27', undefined, 73);
createBooking('OSL27', 92);

*/
