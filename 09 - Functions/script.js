'use strict';

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
