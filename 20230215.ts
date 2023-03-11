/* Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
 */

const orderedCount = function (text: string): [string, number][] {
  const map = new Map();
  for (let char of text) {
    const curr = map.get(char);
    if (curr) {
      map.set(char, curr + 1);
    } else {
      map.set(char, 1);
    }
  }
  const result: [string, number][] = [];
  for (let [key, value] of map) {
    result.push([key, value]);
  }
  return result;
};

console.log(orderedCount("abracadabra"));
