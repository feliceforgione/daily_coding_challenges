/* convert the pop, push, and update array methods to immutable functions */

function push(item, arr) {
  return [...arr, item];
}

function pop(arr) {
  return arr.slice(0, -1);
}

function updateArr(index, item, arr) {
  return [...arr.slice(0, index), item, ...arr.slice(index + 1)];
}
