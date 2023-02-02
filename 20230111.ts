/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

function rowSumOddNumbers(n: number): number {
  const startingOddIndex = sumOfSequence(n);
  console.log(startingOddIndex);
  let sum = 0;
  for (let i = startingOddIndex; i < startingOddIndex + n; i++) {
    sum += i * 2 + 1;
  }
  return sum;
}

function sumOfSequence(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n - 1; i++) {
    sum += i;
  }
  return sum;
}

console.log(rowSumOddNumbers(3));
