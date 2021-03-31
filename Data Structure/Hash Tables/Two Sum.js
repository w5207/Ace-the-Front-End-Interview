// Problem Statement:
// In this problem, you have to implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value.

// Note: In case there is more than one pair in the array containing numbers that add  up to value, you arerequired to return only one such pair. If no such pair found then simply return false.

// Input:
// An array and a number value

// Output:
// An array with two integers a and b ([a,b]) that add up to value

// Sample Input:
// arr = [1,21,3,14,5,60,7,6]
// value = 81

// Sample Output:
// arr = [21,60]

// Solution: Using a Hash Table
"use strict";
const HashEntry = require('./HashEntry.js');
const HashTable = require('./HashTable.js');

function findSum(arr, value) {
  let found_values = new HashTable();
  var results = [];
  for (let i in arr) {
    if (found_values.search(value - arr[i]) != null) {
      results.push(value - arr[i]);
      results.push(arr[i]);
      return results;
    }
    found_values.insert(arr[i], 1);
  }
  return false;
};

// As the array is always iterated once, the time complexity for this algorithm will be O(n).


console.log(findSum([1, 2, 4], 5))
console.log(findSum([1, 2, 3, 4], 10))