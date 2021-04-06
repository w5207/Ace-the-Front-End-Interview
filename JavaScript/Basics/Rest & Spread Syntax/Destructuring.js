// Problem statement:
// Study the code on line 2 in the testing widget carefully.

// const exampleObject = {collection: [{name: "Kelly",}, {name: "Anna",}],}
// Your task is to use destructuring to extract and display the name of the second object in the array.

// Input:
// An array of objects

// Output:
// Name of the second object

// Sample input:
// [{name: "Kelly",}, {name: "Anna",}]

// Sample output:
// "Anna"

// Solution:
function display(){
  const exampleObject = {collection: [{name: "Kelly",}, {name: "Anna",}],}
  const { collection: [,{name: secondObject,}] } = exampleObject
  console.log(secondObject)
}
display()