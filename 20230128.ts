/* Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique. */

function consecutive(arr: number[]): number {
  if (arr.length < 2) return 0;
  const difference = Math.max(...arr) - Math.min(...arr);
  return difference - (arr.length - 1);
}
