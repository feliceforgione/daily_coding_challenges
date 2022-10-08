/* We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). See below for an example with an example set of key characters.



example key characters -> 'A','_','K','E','Y','!'

'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'

 implement key replacement function you could think this is hard to read before replacing the key characters' */

function replaceSpaces(str) {
  const keyChars = "Space";
  return str
    .split("")
    .map((char) => (keyChars.includes(char) ? " " : char))
    .join("");
}
