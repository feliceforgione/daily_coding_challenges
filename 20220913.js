/* Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]] */

multiplicationTable = function (size) {
  const table = [];

  for (let row = 0; row < size; row++) {
    table[row] = [];
    for (let col = 0; col < size; col++) {
      table[row][col] = (col + 1) * (row + 1);
    }
  }
  return table;
};
