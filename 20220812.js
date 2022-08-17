/* Use selection sort to sort an array of integers */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[smallest]) smallest = j;
    }
    if (smallest != i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
  }
  return arr;
};
