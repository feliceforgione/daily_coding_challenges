/* Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/

function allLongestStrings(inputArray: string[]): string[] {
  const stringsByLength = {};
  let maxLength: number = inputArray[0].length;
  for (const str of inputArray) {
    const len = str.length;
    len in stringsByLength
      ? stringsByLength[len].push(str)
      : (stringsByLength[len] = [str]);
    if (len > maxLength) maxLength = len;
  }
  return stringsByLength[maxLength];
}
