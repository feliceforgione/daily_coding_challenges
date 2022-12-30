/* Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins. */

class Fighter {
  name: string;
  health: number;
  damagePerAttack: number;
  constructor(name: string, health: number, damagePerAttack: number) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }
}

function declareWinner(
  fighter1: Fighter,
  fighter2: Fighter,
  firstAttacker: string
) {
  let first = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let second = firstAttacker === fighter1.name ? fighter2 : fighter1;
  while (first.health >= 0 && second.health >= 0) {
    second.health = second.health - first.damagePerAttack;
    if (second.health <= 0) return first.name;
    first.health = first.health - second.damagePerAttack;
    if (first.health <= 0) return second.name;
  }
}

console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
);
