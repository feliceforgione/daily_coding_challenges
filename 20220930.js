/* write a function that:

takes in a given array of strings and move any entries containing the letter 'a' to the front
then move any remaining entries that have over 3 characters to the back
please preserve the relative order of entries within their given category
Example:

myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// move things around
=> ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']


*/

function day3Rearrange(arr) {
  return arr
    .filter((word) => word.includes("a"))
    .concat(arr.filter((word) => !word.includes("a") && word.length <= 3))
    .concat(arr.filter((word) => !word.includes("a") && word.length > 3));
}
