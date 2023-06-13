/* Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0. */

type NumberFunction = (a?: number) => number;

function average(): NumberFunction {
  let sum = 0;
  let numCount = 0;

  function avg() {
    const argLen = arguments.length;
    if (argLen === 0 && numCount == 0) return 0;
    else if (argLen === 0 && numCount > 0) return sum / numCount;
    else {
      sum = sum + arguments[0];
      numCount++;
      return sum / numCount;
    }
  }
  return avg;
}

const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8
