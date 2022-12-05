// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n: number) {
  for (let step = 1; step <= n; step++) {
    const row = "#".repeat(step) + " ".repeat(n - step);
    console.log(row);
  }
}

function stepsRecussion(n: number, length: number = n) {
  if (n === 0) return;
  stepsRecussion(n - 1, length);
  console.log("#".repeat(n) + " ".repeat(length - n));
}
