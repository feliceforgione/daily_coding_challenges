/* Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6 */

function add(n: number) {
  return (x: number): number => x + n;
}

var addThree = add(3);
console.log(addThree(3));
