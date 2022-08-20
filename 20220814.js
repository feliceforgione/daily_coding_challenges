/* Sort using quicksort in place */

const swap = (arr, leftPointer, rightPointer) => {
  [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]];
};

const partition = (arr, leftPointer = 0, rightPointer = arr.length - 1) => {
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  swap(arr, leftPointer, middlePointer);
  pivotValue = arr[leftPointer];
  let i = leftPointer + 1;
  let j = rightPointer;
  while (i <= j) {
    console.log(arr.join(", "));
    console.log(leftPointer, middlePointer, rightPointer);

    while (arr[i] <= pivotValue) {
      i++;
    }
    while (arr[j] > pivotValue) {
      j--;
    }
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, leftPointer, j);
  return j;
};
const quickSort = (arr, leftPointer = 0, rightPointer = arr.length - 1) => {
  if (leftPointer < rightPointer) {
    let pivotIdx = partition(arr, leftPointer, rightPointer);
    quickSort(arr, leftPointer, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, rightPointer);
  }
  console.log(arr.join(", "));
  return arr;
};
