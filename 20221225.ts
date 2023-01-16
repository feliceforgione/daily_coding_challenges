/* Can you create your own map() method implementation? */

function map(arr: any[], cb: (val: any, i: number, arr: any[]) => void): any[] {
  const mapArr: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    mapArr.push(cb(arr[i], i, arr));
  }
  return mapArr;
}

const numArr = [1, 2, 3, 4, 5];
console.log(map(numArr, (val) => val * 2));
