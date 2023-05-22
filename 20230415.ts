/* return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore. */

function pairs(arr: number[]): number {
  let count = 0;
  let i = 1;
  while (i < arr.length) {
    if (Math.abs(arr[i - 1] - arr[i]) === 1) count++;
    i += 2;
  }
  return count;
}

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));
