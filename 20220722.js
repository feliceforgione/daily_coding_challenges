/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces. */

function capitalize(s) {
  let arr1 = [];
  let arr2 = [];
  s.split("").forEach((c, i) => {
    if (i % 2 == 0) {
      arr1[i] = c.toUpperCase();
      arr2[i] = c;
    } else {
      arr1[i] = c;
      arr2[i] = c.toUpperCase();
    }
  });
  return [arr1.join(""), arr2.join("")];
}

console.log(capitalize("abcdef"));
