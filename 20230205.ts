/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number. */

function divCon(x) {
  return x.reduce(
    (acc, val) => (typeof val === "string" ? acc - parseInt(val) : acc + val),
    0
  );
}

console.log(divCon([9, 3, "7", "3"]));
