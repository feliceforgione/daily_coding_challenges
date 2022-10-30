/* Given two or more arrays, write a function that combines their elements into one array without any repetition. */

function mergeArrays(...arrays) {
  // console.log(...arrays);
  //const totalArr = [...arrays];
  let distinctArr = [];
  arrays.forEach((arr) => (distinctArr = [...distinctArr, ...arr]));

  return distinctArr.filter((val, i) => distinctArr.indexOf(val) === i);
}

function mergeArraysReduce(...arrays) {
  let distinctArr = [];
  arrays.forEach((arr) => (distinctArr = [...distinctArr, ...arr]));
  return distinctArr.reduce((acc, i) => {
    if (acc.includes(i)) return acc;
    return [...acc, i];
  }, []);
}
