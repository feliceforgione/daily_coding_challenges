//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  const arr = [...s1, ...s2];
  const distinct = [];
  for (let c of arr) {
    if (!distinct.includes(c)) distinct.push(c);
  }
  return distinct.sort().join("");
}
