/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order. */

// P: two arrays
// R: one array
// E: arrayDiff([1,2,2,2,3],[2]) == [1,3]
// P: filter array checing if the number is included in b array

function arrayDiff(a, b) {
  return a.filter((n) => !b.includes(n));
}
