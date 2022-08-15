/* You are given an array of integers.  Write a function that will take this array as input and return the sorted array using Bubble sort*/

const bubbleSort = (arr) => {
  let sorted = false;
  let counter = 0;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1 - counter; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        sorted = false;
      }
    }
    counter++;
  }

  return arr;
};

const arr = [0, 3, 4, 1, 8, 5];
