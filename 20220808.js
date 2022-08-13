/* Implement Quick Sort */

const quickSort = (array) => {
  const length = array.length - 1;
  if (length < 2) return [...array];
  const pivot = array[0];
  const leftArray = [];
  const rightArray = [];
  for (let i = 1; i <= length; i++) {
    if (array[i] < pivot) leftArray.push(array[i]);
    else rightArray.push(array[i]);
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

const arr = [1, 4, 2, 8];
console.log(quicksort(arr));
