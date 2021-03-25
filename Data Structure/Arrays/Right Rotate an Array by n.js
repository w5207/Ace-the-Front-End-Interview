// Problem Statement:
// Implement a function rightRotate(arr,n) that will rotate the given array by n.

// Input:
// An array and a number by which to rotate that array

// Output:
// The given array rotated by n elements

// Sample Input:
// arr = [1,2,3,4,5]
// n = 3

// Sample Output:
// arr = [3,4,5,1,2]

// Solution: Using splice() and concat()/written by me
function rightRotate(arr,n){
  let temp = arr.splice(0,n-1);
  return arr.concat(temp); 
}

// The complexity of the splice() function is O(n). 
// Since splice() add or remove elements in the original array. Therefore, in the worst-case, we have to shift n-1 elements.
// The overall time complexity of this solution is O(n).