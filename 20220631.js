/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */
/*
P: String
R: Number
E: cat -> 1
P: loop thru the String. 
check if each character is in vowel array. if so increase count */

function getCount(str) {
  let count = 0;
  const vowels = "aeiou".split("");
  str.split("").forEach((c) => {
    if (vowels.includes(c)) count++;
  });
  return count;
}
