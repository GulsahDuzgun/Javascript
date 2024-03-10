'use strict';

const firstName = 'Gülşah';
calcAge(2000);

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  const printAge = function () {
    const firstName = 'Esra';
    let output = `${firstName}, you are ${age}.`;

    if (birthYear <= 2012 && birthYear >= 1996) {
      var zFlag = true;
      const zGen = `Hi ${firstName} , You are Zoomers`;
      output = `You are ${age} years old.`;

      console.log(zGen);
      console.log(output);

      function add(a, b) {
        return a + b;
      }
      console.log(add(4, 5));
    }

    console.log(output);
    console.log(zFlag);
    // console.log(add(4, 5)); ReferenceError
    // console.log(zGen); ReferenceError
  };
  // console.log(zFlag); ReferenceError

  printAge();
  console.log(firstName);
}
