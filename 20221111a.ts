/*
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.

*/

function rowWeights(array: number[]): number[] {
  let team1Weight = 0;
  let team2Weight = 0;

  for (let i = 0; i < array.length; i++) {
    i % 2 === 0 ? (team1Weight += array[i]) : (team2Weight += array[i]);
  }
  return [team1Weight, team2Weight];
}
