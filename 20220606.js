// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// P: two nmbers
// R: string
// E: 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
// PC: Use toString(2)

function addBinary(a, b) {
  return (a + b).toString(2);
}
