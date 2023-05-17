// return the number of permutations for a give string recursively

const numPermutations = (str: string): number => {
  const len = str.length;
  if (len === 1) return 1;

  return len * numPermutations(str.substring(0, len - 1));
};

const str = "hello";
console.log(numPermutations(str));
