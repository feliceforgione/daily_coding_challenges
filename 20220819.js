/* Detect whether a cycle exists in a linked list using a set */

const cycleDetetionUsingSet = (head) => {
  const seenNodes = new Set();
  let currNode = head;
  while (currNode) {
    if (seenNodes.has(currNode)) {
      return true;
    } else {
      seenNodes.add(currNode);
    }
    currNode = currNode.next;
  }
  return false;
};
