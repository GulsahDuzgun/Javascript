'use strict';

const firstName = 'Gülşah';
calcAge(2000);

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  const printAge = function () {
    const firstName = 'Esra';
    let output = `${firstName}, you are ${age}.`;
    // console.log(` Your job is ${jobL}`); ReferenceError: Cannot access 'jobL' before initialization
    // console.log(` Your job is ${jobC}`); ReferenceError: Cannot access 'jobC' before initialization
    console.log(` Your job is ${jobV}`); // Your job is undefined

    let jobL = 'Accountant(let)';
    const jobC = 'Accountant(const)';
    var jobV = 'Accountant(var)';

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
