/* Write a function called debounce that accepts a function and returns a new function that only allows invocation of the given function after interval milliseconds have passed since the last time the returned function ran.

Additional calls to the returned function within the interval time should not be invoked or queued, but the timer should still get reset. */

function debounce(callback, interval: number) {
  let enoughTimepassed = true;
  let timeoutId: number;

  return function allowedToRun() {
    if (enoughTimepassed) {
      enoughTimepassed = false;
      return callback();
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        enoughTimepassed = true;
        return callback();
      }, interval);
    }
  };
}

function giveHi() {
  return "hi";
}
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function () {
  console.log(giveHiSometimes());
}, 2000); // -> undefined
setTimeout(function () {
  console.log(giveHiSometimes());
}, 4000); // -> undefined
setTimeout(function () {
  console.log(giveHiSometimes());
}, 8000); // -> 'hi'
