/* Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications . */
function maxTriSum(numbers: number[]): number {
  const uniqueNumbers = new Set(numbers);
  const sortedNumbersArray = Array.from(uniqueNumbers).sort((a, b) => b - a);
  return sortedNumbersArray[0] + sortedNumbersArray[1] + sortedNumbersArray[2];
}
