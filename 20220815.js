/* You are given the head of sorted singly linked list. Write a function that will take the given head as input, delete all nodes that have a balue that is already the value of another node so that each value appears 1 time only and return the linked list */

const removeDuplicates = (head) => {
  const hashMap = {};
  let prevNode = new Node(null);
  prevNode.next = head;
  let currentNode = head;
  while (currentNode != null) {
    let value = currentNode.val;
    if (value in hashMap) {
      prevNode.next = currentNode.next;
    } else {
      hashMap[value] = true;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  return head;
};
