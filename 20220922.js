/* Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.


COPY
'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'
As an example, here is how a string looks before and after the characters are fixed:


COPY
"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// implement fix function -> 
"PRO-TIP #498: IT'S NICE TO SAY HELLO."
Please create a function that will fix a given string of this mistake before incalculable damage can be done! */

function decode(str) {
  const decoder = {
    0: "O",
    5: "S",
    1: "I",
    6: "G",
    2: "Z",
    7: "L",
    3: "E",
    8: "B",
    4: "h",
    9: "q",
    O: 0,
    S: 5,
    I: 1,
    G: 6,
    Z: 2,
    L: 7,
    E: 3,
    B: 8,
    h: 4,
    q: 9,
  };
  return str
    .split("")
    .map((char) => (char in decoder ? decoder[char] : char))
    .join("");
}
