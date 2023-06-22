/* Recreate a useState function. */

function createState<T>(
  initialState: T | null
): [() => T | null, (newState: T) => void] {
  let state = initialState;
  return [() => state, (newState: T) => (state = newState)];
}

const [username, setUsername] = createState("phil");

console.log(username());
setUsername("jim");
console.log(username());
