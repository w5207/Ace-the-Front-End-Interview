// Problem statement:
// Given an array, you have to remove the first two elements using array destructuring.

// This problem will help you in implementing basic array destructuring. Use it to solve the challenge.

// Input:
// An array list

// Output:
// list returned with the first two elements removed

// Sample input:
// [1,2,3,4,5,6,7,8]

// Sample output:
// [3,4,5,6,7,8]

// Solution:
function removeFirstTwo(list) {
  const [, , ...arr] = list; 
  return arr;
} 
var arrLiteral = [8,9,10,11,12]
console.log("arr contains: " + removeFirstTwo(arrLiteral))