/* Given an array, remove all falsy values from the array and return an array of only truthy values */
function falsyBouncer(arr) {
  return arr.filter((val) => !!val);
}
