// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n: number) {
  const baseLength = 2 * n - 1;
  for (let row = 1; row <= n; row++) {
    const poundStringLength = row * 2 - 1;
    const sidePadding = " ".repeat((baseLength - poundStringLength) / 2);
    console.log(sidePadding + "#".repeat(poundStringLength) + sidePadding);
  }
}

pyramid(3);
