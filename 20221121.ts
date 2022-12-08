/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str: string): string[] {
  const arr: string[] = [];
  for (let i = 0; i < str.length; i = i + 2) {
    const strSegment: string = str.slice(i, i + 2);
    arr.push(strSegment.length === 2 ? strSegment : strSegment + "_");
  }
  return arr;
}

console.log(solution("abc"));
