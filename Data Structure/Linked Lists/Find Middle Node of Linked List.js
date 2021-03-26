// Problem Statement:
// You have to implement the findMid() function, which will take a linked list as an input and return the middle node. 
// If the length of the list is even, the middle value will occur at length/2.
// For a list of odd length, the middle value will be length/2+1.

// Input:
// A singly linked list.

// Output:
// The middle node.

// Sample Input:
// LinkedList = 7->14->10->21

// Sample Output:
// 14

// Solution #1: Brute Force
"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

function findMid(list) {
  let length = 0;
  let tempNode = list.getHead();
  // count the length of the list
  while (tempNode) {
    tempNode = tempNode.nextElement;
    length++;
  }

  let midLength = Math.ceil(length / 2);

  let midNode = list.getHead();
  for (let i = 1; i < midLength; i++) {
    midNode = midNode.nextElement;
  }
  return midNode;
}

// The algorithm makes a linear traversal over the list. Hence, the time complexity is O(n). 
// But notice we need to make two traversals; one to find the length and other two find the middle node.

// Solution #2: Two Pointers
"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

function findMid(list) {
  let midNode = null;
  //Write your code here
  if (list.isEmpty()) {
    return null;
  }
  let slowerNode = list.getHead();
  let fasterNode = list.getHead();
  if (slowerNode.nextElement == null) {
    return slowerNode;
  }
  // The fast pointer moves two steps at a time until​ the end of the list
  // The slow pointer moves one step at a time
  // When the fast pointer reaches the end, the slow node will be at the middle
  while (slowerNode.nextElement != null && fasterNode.nextElement != null && fasterNode.nextElement.nextElement != null) {
    slowerNode = slowerNode.nextElement;
    fasterNode = fasterNode.nextElement.nextElement;
  }
  return slowerNode;
}

// We are traversing the linked list at twice the speed, so it is certainly faster. However, the bottleneck complexity is still O(n).

// let list = new LinkedList();

// list.insertAtHead(21);
// list.insertAtHead(14);
// list.insertAtHead(11);
// list.insertAtHead(7);

// list.printList();

// console.log(findMid(list).data);