// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
  return numbers.reduce( (acc, num) => acc +Math.pow(num, 2), 0)
}


// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
  return x.split(' ').join('')
}



// Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce( (acc, sheep) =>  sheep === true ? acc + 1 : acc, 0)
}
