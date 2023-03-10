/* In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

*/

function add(num1: number, num2: number): number {
  let num1Str = num1.toString();
  let num2Str = num2.toString();
  const num1StrLength = num1Str.length;
  const num2StrLength = num2Str.length;
  const stringLengthDifference = Math.abs(num1StrLength - num2StrLength);

  if (num1StrLength > num2StrLength) {
    num2Str = num2Str.padStart(num2StrLength + stringLengthDifference, "0");
  } else {
    num1Str = num1Str.padStart(num1StrLength + stringLengthDifference, "0");
  }
  let total: number[] = [];
  for (let i = 0; i < num1Str.length; i++) {
    total.push(Number(num1Str[i]) + Number(num2Str[i]));
  }
  return parseInt(total.join(""));
}

console.log(add(2, 11));
