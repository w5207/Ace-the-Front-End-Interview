// Problem Statement:
// Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left, and all positive elements appear at the right.
// Note: While zero is NOT positive or negative, we consider zero to be a positive​ integer for this challenge!

// Input:
// An array containing positive and negative elements

// Output:
// A sorted array with negative elements at the left and positive elements at the right

// Sample Input:
// [10,-1,20,4,5,-9,-6]

// Sample Output:
// [-1,-9,-6,10,20,4,5]

// Solution written by me:
function reArrange(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
// The time complexity of this solution is O(n)

// Solution #1: Using Auxiliary Arrays 
function reArrange(arr){
  var neg = []
  var pos = []
  for(let ele of arr){
    if( ele < 0)
      neg.push(ele)
    else
      pos.push(ele)
  }
  return neg.concat(pos)
}
// Since the given array is only iterated over once, the time complexity of this solution is O(n)

// Solution #2: Rearranging in Place
function reArrange(arr) {
  var leftMostPosEle = 0,
      tmp;
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
          if (i != leftMostPosEle) {
              tmp = arr[i];
              arr[i] = arr[leftMostPosEle];
              arr[leftMostPosEle] = tmp;
          }
          leftMostPosEle += 1
      }
  }
  return arr;
}
// The time complexity of this algorithm is O(n)O(n), with no extra space used as the entire array is iterated over.