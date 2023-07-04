/* Write a function called `diceGameSimulation` that simulates this dice game. The function should take one argument:

- `numSimulations`: The number of times to simulate the dice game.

The game rules are if a 7 or 11 are rolled, the player wins and they get a result of `win`. If a 2, 3 or 12 are rolled they lose and get a result of `lose`. Anything else and they get a result of `roll again`.

The function should return an array of objects, where each object represents a simulation result. Each object should contain the following properties:

- `dice1`: The value of the first dice (a random number between 1 and 6).
- `dice2`: The value of the second dice (a random number between 1 and 6).
- `sum`: The sum of the two dice values.
- `result`: The result of the roll, which can be "win", "lose", or "roll again".
 */

type TRoll = { dice1: number; dice2: number; sum: number; result: string };

function diceGameSimulation(rolls: number): TRoll[] {
  const results: TRoll[] = [];
  for (let i = 1; i <= rolls; i++) {
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const sum = dice1 + dice2;
    const result = getRollResult(sum);
    const rollResult: TRoll = { dice1, dice2, sum, result };
    results.push(rollResult);
  }
  return results;
}

function getRollResult(sum: number): string {
  switch (sum) {
    case 7:
    case 11:
      return "win";
      break;
    case 2:
    case 3:
    case 12:
      return "lose";
      break;

    default:
      return "roll again";
      break;
  }
}
