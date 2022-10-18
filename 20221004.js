/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

const uniqueInOrder = function (iterable) {
  let uniqueVal = null;
  let uniqueArr = [];
  for (let i = 0; i < iterable.length; i++) {
    const currentVal = iterable[i];
    if (currentVal != uniqueVal) {
      uniqueVal = currentVal;
      uniqueArr.push(uniqueVal);
    }
  }
  return uniqueArr;
};
