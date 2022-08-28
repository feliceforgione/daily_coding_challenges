/* Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null. */

const cycleDetetion = (head) => {
  let turtle = head;
  let hare = head;
  let cycle = false;
  while (hare && hare.next) {
    turtle = turtle.next;
    hare = hare.next.next;
    if (turtle == hare) {
      cycle = true;
      break;
    }
  }
  if (cycle) {
    hare = head;
    while (hare != turtle) {
      hare = hare.next;
      turtle = turtle.next;
    }
  }
  return cycle ? hare.val : null;
};
