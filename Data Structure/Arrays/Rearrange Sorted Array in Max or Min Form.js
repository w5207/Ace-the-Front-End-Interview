// Problem Statement:
// Implement a function called maxMin(arr), which will rearrange the elements of a sorted array so that the first position will have the largest number, the second will have the smallest, and the third will have the second-largest and so on. In other words, all the odd-numbered indices will have the largest numbers in the array in descending order, and the even-numbered indices will have the smallest numbers in ascending order.
// Note: The given array is sorted in ascending order.

// Input:
// A sorted array

// Output:
// An array with elements stored in max/min form

// Sample Input:
// arr = [1,2,3,4,5]

// Sample Output:
// arr = [5,1,4,2,3]

// Solution #1: Creating a new array/written by me
function maxMin(arr){
  let result = [];
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    result.push(arr[arr.length-1-i]);
    result.push(arr[i]);
  }
  if (arr.length%2) {
    result.push(arr[Math.floor(arr.length/2)]);
  }
  return result;
}
// The time complexity of this problem is O(n)O(n) as the array is iterated over once.

// Solution #2: Using O(1) Extra Space/won’t work for the negative values of an array.
function maxMin(arr) {
  var maxIdx = arr.length-1
  var minIdx = 0
  var maxElem = arr[maxIdx] + 1; // store any element that is greater than the maximum element in the array 
  for( var i = 0; i < (arr.length); i++) {
    // at even indices we will store maximum elements
    if (i % 2 == 0){  
      arr[i] += Math.floor((arr[maxIdx] % maxElem ) * maxElem)
      maxIdx -= 1
    }
    else { // at odd indices we will store minimum elements
      arr[i] += Math.floor((arr[minIdx] % maxElem ) * maxElem)
      minIdx += 1
    }
  }
  // dividing with maxElem to get original values.
  for( var i = 0; i < (arr.length); i++) {
    arr[i] = Math.floor(arr[i] / maxElem)
  }
  return arr
}

// The time complexity of this solution is in O(n)O(n). The space complexity is constant.

