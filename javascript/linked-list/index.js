'use strict';

// creating a Node class (specific to Linked Lists)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// create a LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // traverse method (console log each value)
  traverse() {
    let current = this.head;
    let results = [];

    while (current) {
      results.push(current.value);
      current = current.next;
    }

    return (results);
  }


  // add method (add node to end of linked list)
  add(value) {
    let newNode = new Node(value);

    // if linked list has no head, we create one!
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    // assign head node to be value of current, and traverse linked list until we find the end
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    // we've reached the end of the linked list, and can add the new node - then return the list
    current.next = newNode;
    return this;
  }

  // insert method (prepend to linked list)
  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // includes method (check to see if linked list includes a value)
  includes(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

}

// manually add nodes to linked list
// let nodeA = new Node('a');
// let nodeB = new Node('b');
// let nodeC = new Node('c');
// let nodeD = new Node('d');
// let nodeE = new Node('e');

// let linkedList = new LinkedList();
// linkedList.head = nodeA;
// linkedList.head.next = nodeB;
// linkedList.head.next.next = nodeC;
// linkedList.head.next.next.next = nodeD;
// linkedList.head.next.next.next.next = nodeE;

// console.log(linkedList);
// console.log('traverse method: ', linkedList.traverse());

// use method in LinkedList class to add nodes to end of linked list
let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.insert('b');

console.log('traverse method: ', linkedList.traverse());
console.log('includes 8?', linkedList.includes(8));
console.log('includes 4?', linkedList.includes(4));


module.exports = LinkedList;
