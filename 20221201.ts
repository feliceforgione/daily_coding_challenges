/* Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ] */

function parse(data: string) {
  let numValue = 0;
  const outputArr: number[] = [];

  for (let command of data) {
    switch (command) {
      case "i":
        numValue++;
        break;
      case "d":
        numValue--;
        break;
      case "s":
        numValue = Math.pow(numValue, 2);
        break;
      case "o":
        outputArr.push(numValue);
        break;
      default:
    }
  }
  return outputArr;
}

console.log(parse("iiisdoso"));
