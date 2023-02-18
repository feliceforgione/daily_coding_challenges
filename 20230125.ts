// Determine if any elements in an array contain a specific letter case insensitive

function containsLetter(array: string[], letter: string): boolean {
  return array.some((word) =>
    word.toLowerCase().includes(letter.toLowerCase())
  );
}

const names = ["Dom", "Amy", "Geoff", "Chris", "Maria"];

console.log(containsLetter(names, "z"));
