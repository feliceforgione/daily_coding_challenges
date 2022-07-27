function sortedSquare(arr) {
  const squaredArr = new Array(arr.length).fill(0);
  let pointerLeft = 0;
  let pointerRight = arr.length - 1;
  let arrPointer = arr.length - 1;

  while (pointerLeft <= pointerRight) {
    const squareLeft = arr[pointerLeft] * arr[pointerLeft];
    const squareRight = arr[pointerRight] * arr[pointerRight];
    if (pointerLeft == pointerRight) {
      squaredArr[arrPointer] = squareLeft;
    }
    if (squareLeft >= squareRight) {
      squaredArr[arrPointer] = squareLeft;
      pointerLeft++;
    } else {
      squaredArr[arrPointer] = squareRight;
      pointerRight--;
    }
    arrPointer--;
  }

  return squaredArr;
}
