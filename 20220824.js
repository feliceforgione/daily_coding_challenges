/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased. */

const camelize = (str) => {
  console.log(
    str
      .split("-")
      .map((item, ind) =>
        ind === 0 ? item : item[0].toUpperCase() + item.slice(1)
      )
      .join("")
  );
};

camelize("background-color"); // 'backgroundColor';
camelize("list-style-image"); // 'listStyleImage';
camelize("-webkit-transition"); // 'WebkitTransition';

/* Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array. */

const filterRange = (arr, a, b) => {
  return arr.filter((item) => item >= a && item <= b);
};
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

/* Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything. */

const filterRangeInPlace = (arr, a, b) => {
  arr.forEach((item, index, arr) => {
    if (!(item >= a && item <= b)) arr.splice(index, 1);
  });
};

/* We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy. */

const copySorted = (arr) => {
  const newArr = arr.slice();
  return newArr.sort();
};
