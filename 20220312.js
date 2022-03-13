// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// P: two integers, first int is less than second
// R: array
// E: between(1,4) => [1, 2, 3, 4]
// PC: loop between a and b
//     add increment to arr

function between(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
