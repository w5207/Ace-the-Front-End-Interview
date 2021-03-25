// Problem Statement:
// You have to implement the minStack class, which will have a min() function. Whenever min() is called, the minimum value of the stack is returned in O(1) time. The element is not popped from the stack; its value is simply returned.

// Output:
// Returns minimum number in O(1) time

// Sample Output:
// minStack = [9, 3, 1, 4, 2, 5]
// minStack.min()
// 1

// Solution: A Two Stack Class
"use strict";
const Stack = require('./Stack.js');
class minStack {
  constructor() {
    //We will use two stacks 
    //1.mainStack: to hold original values
    //2.minStack to hold minimum values. 
    //Top of minStack will always be the minimum value from mainStack
    this.mainStack = new Stack();
    this.minStack = new Stack();
  }

  //Removes and returns a value from newStack
  pop() {
    //1. Pop element from minStack to make it sync with mainStack,
    //2. Pop element from mainStack and return that value
    this.minStack.pop();
    return this.mainStack.pop();
  }

  //Pushes values into newStack
  push(value) {
    //1. Push value in mainStack and check that value with the top value of minStack
    //2. If the pushed value is greater than the value of top, then push top in minStack
    //   else push the value in minStack
    this.mainStack.push(value)

    if (value > this.minStack.getTop() && this.minStack.isEmpty() == false) {
      this.minStack.push(this.minStack.getTop());
    }
    else {
      this.minStack.push(value);
    }
  }

  min() {
    return this.minStack.getTop();
  }
}
// The time complexity is O(1).

// var stack = new minStack()
// stack.push(5)
// stack.push(2)
// stack.push(4)
// stack.push(1)
// stack.push(3)
// stack.push(9)

// console.log("minimum value: ",stack.min())

// stack.pop()
// stack.pop()
// stack.pop()

// console.log("minimum value: " ,stack.min())