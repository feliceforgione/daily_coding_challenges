/* Can you create your own filter() method implementation? */

function filter(
  arr: any[],
  cb: (val: any, i: number, arr: any[]) => boolean
): any[] {
  const mapArr: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) mapArr.push(arr[i]);
  }
  return mapArr;
}

const numArr = [1, 2, 3, 4, 5];

console.log(filter(numArr, (val) => val % 2 === 0));
