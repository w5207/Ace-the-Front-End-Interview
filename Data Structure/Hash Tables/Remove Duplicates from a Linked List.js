// Problem Statement:
// You will now be implementing the removeDuplicates() function. 
// When a linked list is passed to this function, it removes any node that is a duplicate of an already existing node.

// Input:
// A linked list.

// Output:
// A list with all the duplicates removed.

// Sample Input:
// LinkedList = 1->2->2->2->3->4->4->5->6

// Sample Output:
// LinkedList = 1->2->3->4->5->6

// Solution: Using a Hash Table 
"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const HashEntry = require('./HashEntry.js');
const HashTable = require('./HashTable.js');

// Access HeadNode => list.getHead()
// Acess Length => list.length;
// Check if list is empty => list.isEmpty()
// Insert at head => list.insertAtHead(value)
// Delete at head => list.deleteAtHead()
// Insert at tail => list.insertAtTail(value)
// Search for element => list.search(value)
// Delete by value => list.deleteVal(value)
// Node class { data ; Node nextElement;}
function removeDuplicates(list) {
  let currentNode = list.getHead();
  let prevNode = list.getHead();
  let visitedNodes = new HashTable();

  if (!list.isEmpty() && currentNode.nextElement) {
    while (currentNode) {
      let value = currentNode.data;
      if (visitedNodes.search(value)) {
        prevNode.nextElement = currentNode.nextElement;
        currentNode = currentNode.nextElement;
        continue;
      }
      visitedNodes.insert(currentNode.data, 1);
      prevNode = currentNode;
      currentNode = currentNode.nextElement;
    }
  }
  return list;
}

// This is a linear algorithm, meaning, the time complexity is O(n).

// let list = new LinkedList();
// list.insertAtHead(7);
// list.insertAtHead(7);
// list.insertAtHead(7);
// list.insertAtHead(22);
// list.insertAtHead(14);
// list.insertAtHead(21);
// list.insertAtHead(14);
// list.insertAtHead(7);


// list.printList();
// removeDuplicates(list);
// list.printList();
