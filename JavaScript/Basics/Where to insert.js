// Problem statement #
// Given an unsorted array of numbers and another number, you are required to find the index at which the number would be placed 
// if it were to be inserted in a sorted version of the array of numbers.

// Note: The purpose of this exercise is to help you practice arrow functions.

// The function getIndex has already been defined for you. 
// However, for this exercise, re-write the declaration of getIndex using arrow functions and use them in its implementation as well.

// Input:
// An array and a number to be inserted

// Output:
// Lowest index at which the number should be inserted

// Sample input:
// ([5,4,1,3],2)

// Sample output:
// 1
const getIndex = (arr, number) =>
    arr.reduce((counter, curr) => (number > curr ? ++counter : counter), 0);

var inputsA = [[10,5,1,3],[16,4,5]];
var inputsB = [2,13]
console.log(getIndex(inputsA[0],inputsB[0]))