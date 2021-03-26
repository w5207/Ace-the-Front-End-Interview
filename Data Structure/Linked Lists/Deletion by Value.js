// Problem Statement:
// In this lesson, you’ll be implementing the delete by value strategy. We’ll describe its functionality, which should give you a clearer idea of what you have to do.
// In this function, we can pass a particular value that we want to be deleted​ from the list. The node containing this value could be anywhere in the list. It is also possible that such a node may not exist at all.
// Therefore, we would have to traverse the whole list until we find the value which needs to be deleted. If the value doesn’t exist, we do not need to do anything.

// Input:
// A linked list and an integer to be deleted.

// Output:
// true if the value is deleted. Otherwise, false.

// Sample Input:
// LinkedList = 3->2->1->0
// integer = 2

// Sample Output:
// true

// Solution: Search and Delete
"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => this.head
//Check if list is empty => this.isEmpty()
//Delete at head => this.deleteAtHead()
//Search for element => this.search(value)
//Node class  { data ; Node nextElement;}

LinkedList.prototype.deleteVal = function (value) {
  // If list is empty return false
  if (this.isEmpty()) {
    return false;
  }

  // else get pointer to head
  let currentNode = this.head;
  // If the first Node is the Node we would like to delete
  if (currentNode == value) {
    this.head = currentNode.nextElement;
    return true;
  }

  // else traverse the list
  while (currentNode.nextElement) {
    if (currentNode.nextElement.data == value) {
      currentNode.nextElement = currentNode.nextElement.nextElement;
      return true;
    }
    currentNode = currentNode.nextElement;
  }
  return false;
}

// In the worst-case scenario, you would have to traverse until the end of the list. This means the time complexity will be O(n).

// let list = new LinkedList();
// list.insertAtHead(2);
// list.insertAtHead(4);
// list.insertAtHead(5);
// list.insertAtHead(7);
// list.insertAtHead(1);
// list.printList();
// list.deleteVal(5);
// list.printList();
