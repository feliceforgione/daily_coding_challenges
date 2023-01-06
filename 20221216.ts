/* Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta" */

const removeConsecutiveDuplicates = (s: string): string => {
  return s
    .split(" ")
    .filter((word, i, arr) => word !== arr[i + 1])
    .join(" ");
};

console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
