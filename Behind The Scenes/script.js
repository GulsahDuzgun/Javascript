'use strict';

const firstName = 'Gülşah';
calcAge(2000);

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  const printAge = function () {
    const output = `${firstName}, you are ${age}.`;
    console.log(output);

    if (birthYear <= 2012 && birthYear >= 1996) {
      var zFlag = true;
      const zGen = `Hi ${firstName} , You are Zoomers`;
      console.log(zGen);

      function add(a, b) {
        return a + b;
      }
      console.log(add(4, 5));
    }
    console.log(zFlag);
    console.log(add(4, 5));
    // console.log(zGen); ReferenceError
  };
  // console.log(zFlag); ReferenceError

  printAge();
}
