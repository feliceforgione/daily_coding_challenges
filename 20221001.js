/* Imagine, if you will, an array with length X, with each of its entries having X number of primitives as their entries. Now imagine it arranged as a grid.

[[0,1,2],[3,4,5],[6,7,8]]

// as a grid
[
[0,1,2],
[3,4,5],
[6,7,8]
]
Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be.

Examples:
myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// call move up function with 'h' and myGrid
console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// Note that 'h' is already as far up as it can go
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move down function this time, with 'f' and myGrid as arguments
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// call move down function again, same arguments
// Note that 'f' is already as far down as it can go
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]


*/

function moveGridUp(arr, value) {
  let originalPosition = [];
  for (let row = 0; row < arr.length; row++) {
    const valuePosition = arr[row].findIndex((val) => val === value);
    if (valuePosition >= 0) {
      originalPosition = [row, valuePosition];
      break;
    }
  }

  if (originalPosition[0] === 0) return;

  arr[originalPosition[0]][originalPosition[1]] =
    arr[originalPosition[0] - 1][originalPosition[1]];
  arr[originalPosition[0] - 1][originalPosition[1]] = value;
}

function moveGridDown(arr, value) {
  let originalPosition = [];
  for (let row = 0; row < arr.length; row++) {
    const valuePosition = arr[row].findIndex((val) => val === value);
    if (valuePosition >= 0) {
      originalPosition = [row, valuePosition];
      break;
    }
  }

  if (originalPosition[0] === arr.length - 1) return;

  arr[originalPosition[0]][originalPosition[1]] =
    arr[originalPosition[0] + 1][originalPosition[1]];
  arr[originalPosition[0] + 1][originalPosition[1]] = value;
}
