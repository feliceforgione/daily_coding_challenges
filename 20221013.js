/* Sum an array of contiguous intergers in constant time */

function sumContinguousNumers(arr) {
  const lastItem = arr[arr.length - 1];
  return (lastItem * (lastItem + 1)) / 2;
}

console.log(sumContinguousNumers([1, 2, 3, 4, 5]));
