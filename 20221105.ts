/* Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be alternatingSums(a) = [180, 105]. */

function alternatingSums(a: number[]): number[] {
  const teams: number[][] = [[], []];

  for (let i = 0; i < a.length; i++) {
    i % 2 === 0 ? teams[0].push(a[i]) : teams[1].push(a[i]);
  }
  return teams.map((team) => team.reduce((a, c) => a + c, 0));
}
