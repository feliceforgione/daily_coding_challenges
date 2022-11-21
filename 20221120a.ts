/*  My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.  */

function predictAge(
  age1: number,
  age2: number,
  age3: number,
  age4: number,
  age5: number,
  age6: number,
  age7: number,
  age8: number
): number {
  return Math.floor(
    Math.sqrt([...arguments].reduce((sum, age) => sum + Math.pow(age, 2), 0)) /
      2
  );
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
