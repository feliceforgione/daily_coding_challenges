/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

function solution(string: string): string {
  const convertedStr = string.split("").map((char) => {
    if (char === char.toUpperCase()) {
      char = " " + char;
    }
    return char;
  });
  return convertedStr.join("");
}
