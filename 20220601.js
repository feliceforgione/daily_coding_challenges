/* Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (valuesArr) => {
  let dummyHead = new Node();
  let tail = dummyHead;
  for (let i = 0; i < valuesArr.length; i++) {
    const node = new Node(valuesArr[i]);
    tail.next = node;
    tail = node;
  }

  return dummyHead.next;
};
