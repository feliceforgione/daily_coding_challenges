// Power sum

const powerSum = (arr, n = 1) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (Array.isArray(arr[i])) {
      value = powerSum(arr[i], n + 1);
    }
    sum += value;
  }
  return Math.pow(sum, n);
};
