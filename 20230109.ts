/* Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb' */

function switcheroo(x: string): string {
  const strArr: string[] = [];
  for (const char of x) {
    if (char === "a") strArr.push("b");
    else if (char === "b") strArr.push("a");
    else strArr.push(char);
  }
  return strArr.join("");
}

console.log(switcheroo("aabacbaa"));
