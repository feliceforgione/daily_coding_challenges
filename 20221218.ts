/* Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/

function absentVowel(x) {
  const vowelCount = {};
  const vowels = ["a", "e", "i", "o", "u"];
  const str = x.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) vowelCount[char] = vowelCount[char] + 1 || 1;
  }

  const missingVowel = vowels.filter((vowel) => vowelCount[vowel] == null)[0];

  return vowels.indexOf(missingVowel);
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"));
