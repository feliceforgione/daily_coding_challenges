// 5 ways to reduce a string

const reverseOne = (str: string): string => {
  return str.split("").reverse().join("");
};

const reverseTwo = (str: string): string => {
  const reversed: string[] = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join("");
};

const reverseThree = (str: string): string => {
  const strArray = str.split("");
  let pointerOne = 0;
  let pointerTwo = strArray.length - 1;
  while (pointerOne < pointerTwo) {
    const temp = strArray[pointerOne];
    strArray[pointerOne] = strArray[pointerTwo];
    strArray[pointerTwo] = temp;
    pointerOne++;
    pointerTwo--;
  }
  return strArray.join("");
};
const reverseFour = (str: string): string => {
  const strArray = str.split("");
  const reversed: string[] = [];
  while (strArray.length > 0) {
    reversed.push(strArray.pop()!);
  }
  return reversed.join("");
};

const reverseFive = (str: string): string => {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
};

const str = "Daily Programmer";
console.log(reverseOne(str));
console.log(reverseTwo(str));
console.log(reverseThree(str));
console.log(reverseFour(str));
console.log(reverseFive(str));
