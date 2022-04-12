// Sum Arrays
// takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum (numbers) {
    "use strict";
    
    return (numbers.length == 0) ? 0: numbers.reduce( (acc, n) => acc + n, 0)
};

//Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
  return x.split('').map( n => n<5 ? 0 : 1).join('')
}
