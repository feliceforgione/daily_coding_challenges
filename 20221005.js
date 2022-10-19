/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str) {
  if (str == "") return "";
  let convertedArr = [];
  if (str.includes("-")) {
    convertedArr = str
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1));
  }
  if (str.includes("_")) {
    convertedArr = str
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1));
  }

  convertedArr[0] = str[0] + convertedArr[0].slice(1);
  return convertedArr.join("");
}
