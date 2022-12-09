// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n: number): number[][] {
  const matrixArr = new Array(n).fill(null).map(() => new Array(n).fill(0));
  let num = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  while (num <= Math.pow(n, 2)) {
    for (let i = colStart; i <= colEnd; i++) {
      matrixArr[rowStart][i] = num;
      num++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      matrixArr[i][colEnd] = num;
      num++;
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      matrixArr[rowEnd][i] = num;
      num++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      matrixArr[i][colStart] = num;
      num++;
    }
    colStart++;
  }
  return matrixArr;
}
