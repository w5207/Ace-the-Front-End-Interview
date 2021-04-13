// Problem statement:
// The example in the previous lesson used the constructor functions to implement the “constructor pattern”.
// Similarly, a constructor function for Shape is provided to you in the code widget below.
// In this challenge, your task is to convert it to the ES6 version.

// Input:
// The given code

// Output:
// ES6 version of classes implemented

class Shape {
  constructor(color, sides, name) {
    this.color = color;
    this.sides = sides;
    this.name = name;
  }
}
var shape = new Shape("blue", "4", "Square");
console.log(shape);
