/* Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims. */

function alphabetWar(fight: string): string {
  const leftSide = { w: 4, p: 3, b: 2, s: 1 };
  const rightSide = { m: 4, q: 3, d: 2, z: 1 };
  let leftSideTotal = 0;
  let rightSideTotal = 0;
  for (const char of fight) {
    if (char in leftSide) leftSideTotal += leftSide[char];
    else if (char in rightSide) rightSideTotal += rightSide[char];
  }
  if (leftSideTotal === rightSideTotal) return "Let's fight again!";
  return leftSideTotal > rightSideTotal
    ? "Left side wins!"
    : "Right side wins!";
}
