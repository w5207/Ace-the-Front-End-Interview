// Problem Statement:
// Implement a function that merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).

// Input:
// Problem Statement:
// Implement a function that merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).

// Two sorted arrays.

// Output:
// A merged sorted array consisting of all elements of both input arrays.

// Sample Input:
// arr1 = [1,3,4,5];  
// arr2 = [2,6,7,8];

// Sample Output:
// arr = [1,2,3,4,5,6,7,8]

// Solution #1: Using the spread operator
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
// The time complexity for this solution will be O(n log n )O(nlogn) since we are using the sort() function.

// Solution #2: Creating a new array 
function mergeArrays(arr1, arr2) {
  let merged = [];
  let i = 0, j = 0;

  // Given two arrays with length a and b, and a>=b, this part is to compare postion 0 to b-1 of the two arrays 
  while ((i < arr1.length) && (j < arr2.length)) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // This part is to compare position b to a-1 of the longer array
  if (i <= (arr1.length-1)) {
    arr1.splice(0,i);
    merged = merged.concat(arr1);
  } else if (j <= (arr2.length-1)) {
    arr2.splice(0,j);
    merged = merged.concat(arr2);
  }
  
  return merged;
}
// The time complexity for this algorithm is O(n+m), where n and m are the lengths of arr1 and arr2, respectively. 
// This is because both the arrays are iterated over once.
