/* Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called. */

type NumberFunction = () => void;

function callTimes(): NumberFunction {
  let called = 0;
  function numCalled() {
    called = called + 1;
    console.log(called);
  }
  return numCalled;
}

let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2
