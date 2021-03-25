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


// Solution #1: Brute Force
function findSum(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] == value) {
        return [arr[i], arr[j]];
      }
    }
  }
  return false;
}
// Since we iterate n times over the entire array of length n, the time complexity is O(n^2).

// Solution #2: One-pass Hash Table
function findSum(arr, value) {
  for (let i = 0; i < arr.length; i++) {
      const complement = value - arr[i];
      if (arr.includes(complement)) {
          return [arr[i], complement];
      }
  }
  return false;
};
// Complexity Analysis:

// Time complexity : O(n). 
// We traverse the list containing n elements only once. Each look up in the table costs only O(1) time.

// Space complexity : O(n). 
// The extra space required depends on the number of items stored in the hash table, which stores at most n elements.