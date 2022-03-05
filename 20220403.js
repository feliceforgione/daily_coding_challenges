// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase

// P: string
// R: string
// E:   altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// PC:  iterate thru string
//      map each character
//      check if current char is uppercase and if true set lowercase
//      join array to make string

String.prototype.toAlternatingCase = function () {
  return [...this]
    .map((c) => {
      return c.toUpperCase() == c ? c.toLowerCase() : c.toUpperCase();
    })
    .join("");
};
