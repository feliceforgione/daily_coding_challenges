/* Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]] */

var flatten = function (array: any[]): any[] {
  const result = [];
  for (let subArr of array) {
    for (let e of subArr) {
      result.push(e);
    }
  }
  return result;
};

console.log(flatten([[[1, 2, 3]]]));
