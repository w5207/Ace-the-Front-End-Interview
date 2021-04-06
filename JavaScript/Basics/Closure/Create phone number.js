// Problem statement:
// In this challenge, you have to define a function, createPhoneNumber, that accepts an array of 10 integers (between 0 and 9). 
// It should return a string of those numbers in the form of a phone number.

// There are many solutions to this problem, but the aim of this exercise is to help you practice using the slice method of JavaScript. 
// Try to figure out an approach using slice.

// Input:
// An array containing 10 integers (0-9)

// Output:
// A string of those numbers returned in the form of a phone number

// Sample input:
// [1,2,3,4,5,6,7,8,9,0]

// Sample output:
// (123) 456-7890

function createPhoneNumber(arr) {
  return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
}
// .slice returns all the elements starting from the given start index excluding the element at the given end index.

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
// console.log(createPhoneNumber([3,5,7,1,2,0,9,8,6,4]))