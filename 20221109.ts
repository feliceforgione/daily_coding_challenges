/* Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be arrayMaxConsecutiveSum(inputArray, k) = 8. All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8 */

function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let maxValue = inputArray.slice(0, k).reduce((a, c) => a + c, 0);
  console.log(maxValue);
  for (let i = 1; i < inputArray.length; i++) {
    const sum = inputArray.slice(i, i + k).reduce((a, c) => a + c, 0);
    if (sum > maxValue) maxValue = sum;
  }
  return maxValue;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
