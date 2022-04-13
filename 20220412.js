// Calculate average
// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  
 return (array.length == 0) ? 0 : array.reduce( (acc, n) => acc + n, 0) / array.length
}



// Reversed sequence
// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
  let arr = [];
  for ( let i = n; i > 0; i--) arr.push(i)  
  return arr;
};
