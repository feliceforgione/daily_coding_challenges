// Define a function that removes duplicates from an array of numbers and returns it as a result.

function distinct(a) {
  const newSet = new Set(a);
  return [...newSet];
}
