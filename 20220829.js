/* Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order. */

function flattenAndSort(array) {
  const flattenArr = [];
  for (let i = 0; i < array.length; i++) {
    const nestedArr = array[i];
    for (let j = 0; j < nestedArr.length; j++) {
      flattenAndSort.push(nestedArr[j]);
    }
  }
  return flattenArr;
}

const arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

console.log(flattenAndSort(arr));
