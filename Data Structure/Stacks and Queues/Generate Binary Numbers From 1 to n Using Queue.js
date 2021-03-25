// Problem Statement:
// Implement a function findBin(n), which will generate binary numbers from 11 to nn in the form of a string using a queue. An illustration is also provided for your understanding.

// Input:
// A positive integer nn

// Output:
// Returns binary numbers in the form of strings from 1 up to n

// Sample Input:
// n = 3

// Sample Output:
// result = ["1","10","11"]

// Solution: Using a ​queue to generate new numbers from previous numbers
"use strict";
const Queue = require('./Queue.js');
function findBin(number) {
  let result = [];
  let myQueue = new Queue();
  let s1, s2;
  myQueue.enqueue("1");
  for (let i = 0; i < number; i++) {
    // We only need "1","10","100"... and append "0" or "1" to each of them to generate new binary numbers.
    result.push(myQueue.dequeue());

    s1 = result[i] + "0";
    s2 = result[i] + "1";

    myQueue.enqueue(s1);
    myQueue.enqueue(s2);
  }

  return result;
}

// The time complexity of this solution is in O(n)O(n) as constant-time operations are executed for n times.