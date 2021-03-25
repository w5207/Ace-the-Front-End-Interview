// Problem Statement:
// Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array.

// Note: The function should return null if no unique number is found.

// Input:
// An array of integers

// Output:
// The first unique element in the array

// Sample Input:
// [9,2,3,2,6,6]

// Sample Output:
// 9

// Solution #1: Brute Force/written by me
function findFirstUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if ((j != i) && (arr[j]!=arr[i])) {
        ++count;
      }
    }
    if (count == (arr.length - 1)) {
      return arr[i];
    }
  }
  return null;
}

// The time complexity of this solution is O(n^2) since the entire array is iterated for each element →n×n.

// Solution #2: 
function findFirstUnique(arr) {
  for (let i = 1; i <= arr.length; i++) {
    let temp = arr.slice();
    temp.splice(i,1);
    if (!temp.includes(arr[i])) {
      return arr[i];
    }
  }
  return null;
}

// Since the list is iterated over once and .includes is a linear search(https://tc39.es/ecma262/#sec-array.prototype.includes), the time complexity is O(n).

