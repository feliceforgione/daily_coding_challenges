/* Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x */

function head(arr: any[]): any {
  return arr[0];
}

function tail(arr: any[]): any[] {
  return arr.slice(1);
}

function init(arr: any[]): any {
  return arr.slice(0, -1);
}

function last(arr: any[]): any {
  return arr[arr.length - 1];
}

const arr = [1, 2, 3, 4, 5];

console.log(head(arr));
console.log(tail(arr));
console.log(init(arr));
console.log(last(arr));
