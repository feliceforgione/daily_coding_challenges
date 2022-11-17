/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/
function adjacentElementsProduct(inputArray: number[]): number {
  let firstCompareValue: number;
  let secondCompareValue: number;
  let maxProduct;
  let index = 0;
  while (index < inputArray.length) {
    firstCompareValue = inputArray[index];
    secondCompareValue = inputArray[index + 1];
    const product = firstCompareValue * secondCompareValue;
    if (product > maxProduct || maxProduct == null) maxProduct = product;
    index++;
  }
  return maxProduct;
}
