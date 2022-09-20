/* You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions. */

function sortArray(array) {
  const oddSortedArray = array
    .filter((item) => item % 2 != 0)
    .sort((a, b) => a - b);
  return array.map((num) => {
    if (num % 2 == 0) return num;
    return oddSortedArray.shift();
  });
}
