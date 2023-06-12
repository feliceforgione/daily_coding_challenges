/* Create a function roulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'spin' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'win'. On every invocation after that, the returned function returns the string 'pick a number to play again'. */

type StringFunction = () => string;

function roulette(num: number): StringFunction {
  let n = 1;
  function spin() {
    let action = "pick a number to play again";
    if (n < num) {
      action = "spin";
    } else if (n === num) {
      action = "win";
    }
    n++;
    return action;
  }
  return spin;
}

const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'
