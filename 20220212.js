/* If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep" */

function warnTheSheep(queue) {
  let wolfPosition = queue.indexOf("wolf");
  if (wolfPosition + 1 == queue.length)
    return "Pls go away and stop eating my sheep";
  let sheepPosition = queue.length - wolfPosition - 1;
  return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
}
