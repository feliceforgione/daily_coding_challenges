/* Write a function InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0). */

function insertDash(num: number): string {
  const newNum: string | number[] = [];
  let prevNumOdd = false;
  for (const n of num.toString().split("")) {
    if (n % 2 === 0) {
      newNum.push(n);
      prevNumOdd = false;
    } else {
      if (prevNumOdd) newNum.push("-");
      newNum.push(n);
      prevNumOdd = true;
    }
  }
  return newNum.join("");
}
