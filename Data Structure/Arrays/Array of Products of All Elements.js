// Problem Statement:
// Implement a function, findProduct(arr), which modifies an array so that each index has a product of all the numbers present in the array except the number stored at that index.

// Note: The size of an array should be greater than or equal to 2.

// Input:
// An array of numbers (can even be floats, integers, and negative!)

// Output:
// An array such that each index has a product of all the numbers in the array except the number stored at that index.

// Sample Input:
// arr = [1,2,3,4]

// Sample Output:
// arr = [24,12,8,6]

// Solution #1: Brute Force/written by me
function findProduct(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j != i) {
        product = product * arr[j];
      }
    }
    result.push(product);
  }

  return result;
}
// This algorithm is in O(n^2) because the array is iterated over n+n(n+1)/2n+n(n+1)/2 times.

// Solution #2: Optimizing the number of multiplications
function findProduct(arr) {
  let temp = 1, result = [];
  // Traverse the arr and store the product of all the numbers to the left side of the current element in result[i].
  for (let i = 0; i < arr.length; i++) {
    result[i] = temp;
    temp *= arr[i];
  }
  // Traverse the arr from the end and multiply the product of all the numbers to the right side of the current element with result[i].
  temp = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= temp;
    temp *= arr[i];
  }

  return result;
}

// Since this algorithm only traverses over the array twice so the complexity expression is n + n, and the final term becomes O(n).