/* write a function that will check equality between 2 arrays with a particular structure.

The arrays will:

Be of equal size
Will each contain some number (X) arrays
Each inner array will contain that same number (X) primitive elements
All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

For example:

// each of these arrays have 3 nested arrays of 3 strings each 
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

checkEquality(arr1, arr2) => true
checkEquality(arr1, arr3) => false
checkEquality(arr1, arr4) => false
// etc.

*/

function checkEquality(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const childArr1 = arr1[i];
    const childArr2 = arr2[i];
    if (childArr1.length != childArr2.length) return false;
    for (let j = 0; j < childArr1.length; j++) {
      if (childArr1[j] !== childArr2[j]) return false;
    }
  }
  return true;
}
