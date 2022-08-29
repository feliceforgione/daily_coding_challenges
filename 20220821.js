/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807. */

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToTail(value) {
    const newNode = new Node(value);
    if (this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  printLinkedList() {
    let currNode = this.head;
    const nodes = [];
    while (currNode) {
      nodes.push(currNode.val);
      currNode = currNode.next;
    }
    nodes.push("null");
    console.log(nodes.join(" --> "));
  }
}

const sL1 = new SingleLinkedList();
sL1.addToTail(0);
sL1.addToTail(4);
sL1.addToTail(5);

const sL2 = new SingleLinkedList();
sL2.addToTail(3);
sL2.addToTail(2);
sL2.addToTail(7);

sL1.printLinkedList();
sL2.printLinkedList();

const sumLinkedLists = (sL1, sL2) => {
  const sLTotal = new SingleLinkedList();
  let carryOver = 0;
  let result = 0;
  let sum = 0;
  sL1 = sL1.head;
  sL2 = sL2.head;
  while (sL1 != null || sL2 != null || carryOver != null) {
    let sL1Val = sL1 ? sL1.val : 0;
    let sL2Val = sL1 ? sL2.val : 0;
    sum = sL1Val + sL2Val + carryOver;
    result = sum % 10;
    carryOver = Math.floor(sum / 10) == 0 ? null : Math.floor(sum / 10);
    sLTotal.addToTail(result);
    sL1 = sL1 ? sL1.next : null;
    sL2 = sL2 ? sL2.next : null;
  }
  sLTotal.printLinkedList();
};
