/* Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array. */

function findLongest(array: number[]): number {
  let longestLength = 0;
  let longestItem = 0;
  for (const item of array) {
    const length = item.toString().length;
    if (length > longestLength) {
      longestItem = item;
      longestLength = length;
    }
  }
  return longestItem;
}

console.log(findLongest([9000, 8, 800]));
