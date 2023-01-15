/* Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once. */

function twoSum(arr: number[], sum: number) {
  const compMap = {};
  const sumArr: number[][] = [];

  for (const num of arr) {
    const comp = sum - num;

    if (compMap[comp]) sumArr.push([num, comp]);
    else compMap[num] = true;
  }
  return sumArr;
}

console.log(twoSum([1, 2, 2, 3, 4], 4));
