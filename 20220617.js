/* Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero). */

// P: array of integers
// R: string of either 'odd' or 'even'
// E:  Input: [0, -1, -5]  Output: "even"
/* P: check if array is empty and if so return even
reduce array to sum of elements using reduce
if number is even return "even" else return "odd" 
*/

function oddOrEven(array) {
  if (array.lenght === 0) return "even";
  return array.reduce((acc, n) => acc + n, 0) % 2 == 0 ? "even" : "odd";
}
