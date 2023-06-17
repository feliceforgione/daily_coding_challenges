/* Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.

everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.

Then pass the below theEnd function into an invocation of everyXsecsForYsecs with 2000 interval time an 5000 duration time.
What do you expect to happen? */

function everyXsecsForYsecs(func, interval: number, duration: number): void {
  const repeat = setInterval(() => func(), interval * 1000);
  setTimeout(() => clearInterval(repeat), duration * 1000);
}

function theEnd() {
  console.log("This is the end!");
}

everyXsecsForYsecs(theEnd, 2, 5); // should invoke theEnd function every 2 seconds, for 5 seconds): This is the end!
