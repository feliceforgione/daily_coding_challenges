/* Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1. */

function mygcd(x: number, y: number): number {
  const sortValues = x > y ? [y, x] : [x, y];
  if (sortValues[0] === 0) return sortValues[1];
  return mygcd(sortValues[0], sortValues[1] % sortValues[0]);
}

console.log(mygcd(8, 9));
