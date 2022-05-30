// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, () In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

// P: three integers, +, range 1>= digit <=10
// R: largest integer

function expressionMatter(a, b, c) {
  let max = 0;
  if (max < a * (b + c)) max = a * (b + c);
  if (max < a * b * c) max = a * b * c;
  if (max < a + b + c) max = a + b + c;
  if (max < a + b * c) max = a + b * c;
  if (max < (a + b) * c) max = (a + b) * c;
  return max;
}
