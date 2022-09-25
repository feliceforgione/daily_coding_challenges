/* 
The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"] */

function wave(str) {
  const output = [];
  const strArr = str.split("");
  let pointer = 0;
  while (pointer < strArr.length) {
    strArr[pointer] = strArr[pointer].toUpperCase();
    if (pointer > 0) strArr[pointer - 1] = strArr[pointer - 1].toLowerCase();
    if (strArr[pointer] != " ") output.push(strArr.join(""));
    pointer++;
  }
  return output;
}
