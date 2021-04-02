// Problem Statement:
// Let’s revisit the definition of Set Union.

// Union:
// Given two lists A and B; the union is the list that contains elements or objects that belong to either A, or to B, or to both.
// The union function will take two linked lists and return their union.
// Remember that you have attempted this challenge in Chapter 2. Here you will write a more efficient implementation that uses Hash Table.

// Input:
// Two linked lists.

// Output:
// A list containing the union of the two lists.

// Sample Input:
// list1 = 10->20->80->60
// list2 = 15->20->30->60->45

// Sample Output:
// union = 45->30->15->10->20->80->60

// Solution: Union using Hash Table
"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const HashEntry = require('./HashEntry.js');
const HashTable = require('./HashTable.js');

// Access HeadNode => list.getHead()
// Check if list is empty => list.isEmpty()
// Insert at head => list.insertAtHead(value)
// Delete at head => list.deleteAtHead()
// Insert at tail => list.insertAtTail(value)
// Search for element => list.search(value)
// Delete by value => list.deleteVal(value)
// Create List => list = LinkedList()
// Node class { data ; Node nextElement;}
// Create Hash Table => let hashtable =  new HashTable()
// insert in hashtable => hashtable.insert(key, value)
// search in hashtable => hashtable.search(key)
// delete in hashtable => hashtable.delete(key)

// Returns a list containing the union of list1 and list2  
function union(list1, list2) {
  let hashtable = new HashTable();
  let list1Iter = list1.getHead();
  while (list1Iter) {
    hashtable.insert(list1Iter.data, 1);
    list1Iter = list1Iter.nextElement;
  }
  let list2Iter = list2.getHead();
  while (list2Iter) {
    if (hashtable.search(list2Iter.data) == null) {
      list1.insertAtHead(list2Iter.data);
    }
    list2Iter = list2Iter.nextElement;
  }
  return list1;
}

// The time complexity of inserting n elements of the first list in the hash table is O(n), 
// while time complexity of checking second list’s m element in the hash table and then inserting them at the head would incur a time complexity of O(m). 
// Thus overall time complexity would be O(m+n).

// let list1  = new LinkedList();
// let list2  = new LinkedList();
// list1.insertAtHead(1);
// list1.insertAtHead(2);
// list1.insertAtHead(3);
// list1.insertAtHead(4);

// list2.insertAtHead(3);
// list2.insertAtHead(4);
// list2.insertAtHead(5);
// list2.insertAtHead(6);

// let list3 = union(list1, list2)
// list3.printList()