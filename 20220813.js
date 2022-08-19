/* Use merge sort to sort an array of integers */

const mergeSortedArrays = (array1, array2) => {
  let leftArrayLength = array1.length;
  let rightArrayLength = array2.length;
  let leftArrayPointer = 0;
  let rightArrayPointer = 0;
  const mergedArray = [];
  while (
    leftArrayPointer <= leftArrayLength - 1 &&
    rightArrayPointer <= rightArrayLength - 1
  ) {
    if (array1[leftArrayPointer] <= array2[rightArrayPointer]) {
      mergedArray.push(array1[leftArrayPointer]);
      leftArrayPointer++;
    } else {
      mergedArray.push(array2[rightArrayPointer]);
      rightArrayPointer++;
    }
  }
  if (leftArrayPointer <= leftArrayLength - 1) {
    mergedArray.push(...array1.slice(leftArrayPointer, leftArrayLength));
  }
  if (rightArrayPointer <= rightArrayLength - 1) {
    mergedArray.push(...array2.slice(rightArrayPointer, rightArrayLength));
  }
  return mergedArray;
};

const mergeSort = (array) => {
  console.log(array);
  const length = array.length;
  if (length == 1) return array;
  const middlePointer = Math.floor(length / 2);
  const leftArray = array.slice(0, middlePointer);
  const rightArray = array.slice(middlePointer, length);
  return mergeSortedArrays(mergeSort(leftArray), mergeSort(rightArray));
};

const arr = [0, 3, 2, 6, 5];

console.log(mergeSort(arr));
