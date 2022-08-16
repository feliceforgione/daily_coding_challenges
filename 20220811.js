/* You are given an array of inegers. Write a function that will take this array as input and return the storted array using insertion sort */

const insertionSort = (arr) => {
  let temp;
  let sortedRightPointer = 0;
  let unsortedLeftPointer = 1;

  while (sortedRightPointer < arr.length - 1) {
    temp = arr[unsortedLeftPointer];
    let j = sortedRightPointer;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
    unsortedLeftPointer++;
    sortedRightPointer++;
  }
  return arr;
};
