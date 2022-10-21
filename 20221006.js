/* Reverse a string using FOUR different way */

function methodReverse(str) {
  return [...str].reverse().join("");
}

function reduceReverse(str) {
  return [...str].reduce((acc, c) => c + acc, "");
}

function forLoopReverse(str) {
  let reveresedStr = "";
  for (c of str) {
    reveresedStr = c + reveresedStr;
  }
  return reveresedStr;
}

function recursionReverse(str) {
  if (str === "") return "";
  return recursionReverse(str.slice(1)) + str[0];
}

const str = "Hello World";

console.log(methodReverse(str));
console.log(reduceReverse(str));
console.log(forLoopReverse(str));
console.log(recursionReverse(str));
