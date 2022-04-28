// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.
const pairSum = (numbers, targetSum) => {
    let hash = {}
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      const comp = targetSum - num;
      if (comp in hash) {
        return [hash[comp], i]
      }
      hash[num] = i;
    }
  }