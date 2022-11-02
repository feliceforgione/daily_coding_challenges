/* Return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument) i.e **arr** once it has been sorted. The returned value should be a number */
function whereIBelong(arr, val) {
  return [...arr, val].sort((a, b) => a - b).indexOf(val);
}

function whereIBelongLoop(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > val) return i;
  }
}
s;
