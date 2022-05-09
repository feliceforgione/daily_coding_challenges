// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
function solution(nums){
 if(nums == null) return []
  if (nums.length === 0 ) return []
 return nums.sort( (a, b) => a - b)
}

// get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
function dontGiveMeFive(start, end)
{
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!String(i).split("").includes("5") ) {
      count++
    }
  }
  return count
}
