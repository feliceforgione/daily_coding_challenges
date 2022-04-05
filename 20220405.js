// Return Negative
function makeNegative(num) {
  return num < 0 ? num : -num;
}



// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


// Summation 
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
  let sum = 0;
  for(let  i=0; i<=num;i++){
    sum+=i
}
  return sum;
}
