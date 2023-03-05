/* The trick to counting kookaburras is to listen carefully

The males sound like HaHaHa...

The females sound like hahaha...

And they always alternate male/female

Examples
ha = female => 1
Ha = male => 1
Haha = male + female => 2
haHa = female + male => 2
hahahahaha = female => 1
hahahahahaHaHaHa = female + male => 2
HaHaHahahaHaHa = male + female + male => 3 */

const kookaCounter = (laughing: string): number => {
  let prev: string | null = null;
  let count = 0;
  for (let i = 0; i < laughing.length; i = i + 2) {
    const current = laughing[i] + laughing[i + 1];
    if (prev != current) {
      count++;
      prev = current;
    }
  }
  return count;
};

console.log(kookaCounter("HaHaHahahaHaHa"));
