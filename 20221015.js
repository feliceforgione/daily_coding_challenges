/* Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]


Solve three ways
*/

function chunkArray(array, size) {
  const chunkedArr = [array.slice(0, size)];
  for (let i = size; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

function chunckArraySplice(array, size) {
  let chunckedArray = [];
  while (array.length > 0) {
    chunckedArray = [...chunckedArray, array.splice(0, size)];
  }
  return chunckedArray;
}

function chunkArrayRecursion(array, size) {
  if (array.length <= size) return [array];
  return [
    array.slice(0, size),
    ...chunkArrayRecursion(array.slice(size), size),
  ];
}
