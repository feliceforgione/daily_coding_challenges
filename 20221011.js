/* you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice. 
Solve it two ways
*/

function repeats(arr) {
  return arr
    .filter((num, i, arr) => arr.indexOf(num) === arr.lastIndexOf(num))
    .reduce((acc, num) => acc + num, 0);
}

function repeatsMap(arr) {
  const numMap = new Map();
  for (num of arr) {
    if (numMap.has(num)) numMap.set(num, numMap.get(num) + 1);
    else numMap.set(num, 1);
  }

  return [...numMap.entries()]
    .filter((entry) => entry[1] === 1)
    .reduce((acc, num) => acc + num[0], 0);
}

console.log(repeats([4, 5, 7, 5, 4, 8]));
