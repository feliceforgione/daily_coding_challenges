/* Write a function

titleToNumber(title) or title_to_number(title) or titleToNb title ...

(depending on the language)

that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

Examples:

titleTonumber('A') === 1
titleTonumber('Z') === 26
titleTonumber('AA') === 27 */

function titleToNumber(title: string): number {
  return title
    .split("")
    .reduce(
      (acc, cur, index) =>
        acc + (cur.charCodeAt(0) - 64) * Math.pow(26, title.length - 1 - index),
      0
    );
}

console.log(titleToNumber("AA"));
