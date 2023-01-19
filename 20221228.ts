/* Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
] */

function towerBuilder(nFloors: number): string[] {
  const tower: string[] = [];
  const baseLength = nFloors * 2 - 1;
  for (let i = 1; i <= nFloors; i++) {
    const currFloor: string = "*".repeat(i * 2 - 1);
    const padding: string = " ".repeat(
      Math.floor((baseLength - (i * 2 - 1)) / 2)
    );
    const level: string = padding + currFloor + padding;
    tower.push(level);
  }
  return tower;
}

console.log(towerBuilder(3));
