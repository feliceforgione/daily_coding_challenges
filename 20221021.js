/* Given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them */
function rangeSum(arr) {
  const firstNum = arr[0];
  const lastNum = arr[arr.length - 1];
  let sum = 0;
  for (let i = firstNum; i <= lastNum; i++) {
    sum += i;
  }
  return sum;
}
