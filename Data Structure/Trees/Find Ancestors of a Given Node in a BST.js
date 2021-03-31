// Problem Statement:
// Implement the findAncestors(root, k) function which will find the ancestors of the node whose value is “k”. 
// Here root is the root node of a binary search tree and k is an integer value of a node whose ancestors you need to find. 
// An illustration is also given. Your code is evaluated on the tree given in the example.

// Input:
// The root node of a BST and any number k

// Output:
// Returns all the ancestors of k in the binary search tree in a JavaScript array. 
// Remember to turn it into a string before returning it!

// Sample Input:
// bst = {
//     6 -> 4,9
//     4 -> 2,5
//     9 -> 8,12
//     12 -> 10,14
// }
// where parent -> leftChild,rightChild
// k = 10

// Sample Output:
// str([12,9,6])

// Solution: Using a recursive helper function
"use strict";
const BinarySearchTree = require('./BinarySearchTree.js');
const Node = require('./Node.js');

function findAncestors(rootNode, k) {
  let result = [];
  recfindAncestors(rootNode, k, result);
  return result;
}

function recfindAncestors(rootNode, k, result) {
  if (rootNode == null) {
    return false;
  } 
  else if (rootNode.val == k) {
    return true;
  } 
  else if ((recfindAncestors(rootNode.leftChild, k, result)) || (recfindAncestors(rootNode.rightChild, k, result))) {
    result.push(rootNode.val)
    return true;
  }
  return false;
}

// This is an O(n) time function since it iterates over all of the nodes of the entire tree.

// var BST = new BinarySearchTree(6)
// BST.insertBST(1)
// BST.insertBST(133)
// BST.insertBST(12)
// console.log(findAncestors(BST.root, 12))