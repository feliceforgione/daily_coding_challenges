/* Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });

it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint in in", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
 });
}); */

function ransomNote(note: string, magazine: string): boolean {
  const magazineWordMap = {};
  const punctuation = [",", "."];
  const formattedMagazine = magazine.toLowerCase().split(" ");
  const formattedNote = note.toLowerCase().split(" ");

  for (const word of formattedMagazine) {
    let formattedWord = punctuation.includes(word[word.length - 1])
      ? word.slice(-1)
      : word;
    magazineWordMap[formattedWord] = magazineWordMap[formattedWord] + 1 || 1;
  }

  for (const word of formattedNote) {
    if (!magazineWordMap[word] || magazineWordMap[word] < 1) return false;
    magazineWordMap[word] = magazineWordMap[word] - 1;
  }
  return true;
}

const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(ransomNote("sit ad est sint in in in in", magazine));
