// Solve Fizzbuzz three ways. Use map. Use Reduce.

const fizzbuzz1 = (n: number): (number | string)[] => {
  const result: (number | string)[] = [];
  for (let i = 1; i <= n; i++) {
    let word = "";
    if (i % 3 === 0) word += "Fizz";
    if (i % 5 === 0) word += "Buzz";
    result.push(word || i);
  }
  return result;
};

const fizzbuzzMap = (n: number): (number | string)[] => {
  return Array.from({ length: n }).map((v, index) => {
    let word = "";
    const i = index + 1;
    if (i % 3 === 0) word += "Fizz";
    if (i % 5 === 0) word += "Buzz";
    return word || i;
  });
};

const fizzbuzzReduce = (n: number): (number | string)[] => {
  return Array.from({ length: n }).reduce((acc, num, index) => {
    let word = "";
    const i = index + 1;
    if (i % 3 === 0) word += "Fizz";
    if (i % 5 === 0) word += "Buzz";
    return [...acc, word || i];
  }, []) as (number | string)[];
};
console.log(fizzbuzz1(15));

console.log(fizzbuzzMap(15));
console.log(fizzbuzzReduce(15));
