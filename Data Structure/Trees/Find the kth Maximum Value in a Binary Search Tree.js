// Problem Statement:
// Implement a function findKthMax(root,k) which will take a BST and any number “k” as an input and return kth maximum number from that tree. 
// Assume that “k” will always be less than or equal to the total number of nodes.

// Input:
// The root node for a binary search tree and any number k

// Output:
// Returns kth maximum value from the given tree

// Sample Input:
// bst = {
//     6 -> 4,9
//     4 -> 2,5
//     9 -> 8,12
//     12 -> 10,14
// }
// where parent -> leftChild,rightChild
// k = 3

// Sample Output:
// 10

// Solution #1: Sorting the tree in order
"use strict";
const BinarySearchTree = require('./BinarySearchTree.js');
const Node = require('./Node.js');

function findKthMax(rootNode, k) {
  let tree = [];
  tree = inOrderTraverse(rootNode, tree);
  console.log(tree);
  if (((tree.length) - k) >= 0 && k > 0) {
    return tree[tree.length - k];
  }
  return null;
}

// Helper recursive function to traverse the tree inorder
function inOrderTraverse(rootNode, tree) {
  if (rootNode) {
    tree = inOrderTraverse(rootNode.leftChild, tree);
    tree.push(rootNode.val);
    tree = inOrderTraverse(rootNode.rightChild, tree);
  }
  return tree;
}

// This solution is in O(n) where nn is the number of nodes in the tree!

// Solution #2: Using Reverse In-Order Traversal
"use strict";
const BinarySearchTree = require('./BinarySearchTree.js');
const Node = require('./Node.js');

let counter;

function findKthMax(rootNode, k) {
  counter = 0;
  return reverseInOrder(rootNode, k).val;
}

function reverseInOrder(rootNode, k) {
  if (rootNode) {
    let rightChild = reverseInOrder(rootNode.rightChild, k);

    if (rightChild) {
      if (counter == k) {
        return rightChild;
      }
    }
    else {
      counter++;
      if (k == counter) {
        return rootNode;
      }
      return reverseInOrder(rootNode.leftChild, k)
    }
  }
}

// The worst-case complexity of this solution is the same as the previous solution, i.e., O(n). 
// But for the best-case scenario, when k = 1 and the root node has no right child, then the complexity of this solution is O(1). 
// On the other hand, the best-case scenario for the previous solution had a time complexity of O(n)O(n). 
// Therefore, this solution is more efficient than the previous solution​.
// Note that both these given solutions would not work if the tree has duplicate values.

// var BST = new BinarySearchTree(6)
// BST.insertBST(1)
// BST.insertBST(133)
// BST.insertBST(12)
// console.log(findKthMax(BST.root, 3));