/* Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array. */

function averages(numbers: number[]): number[] {
  if (numbers == null || numbers.length < 2) return [];
  const output: number[] = [];
  for (let i = 1; i < numbers.length; i++) {
    const avg = (numbers[i - 1] + numbers[i]) / 2;
    output.push(avg);
  }
  return output;
}

const numbers = [1, 3, 5, 1, -10];
console.log(averages(numbers));
