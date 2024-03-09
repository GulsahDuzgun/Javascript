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
    }
    console.log(zFlag);
    // console.log(zGen); ReferenceError
  };
  // console.log(zFlag); ReferenceError

  printAge();
}
