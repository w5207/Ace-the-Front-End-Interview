// Closure, `setTimeout`, scopes

// setTimeout:
// It is a web API provided by the browser that takes a callback function as its first parameter and time in milliseconds as its second parameter.
// It executes the callback function after the specified number of milliseconds pass.

console.log("Before Function");
setTimeout(function () {
  console.log("Inside Function");
}, 3000);
console.log("After Function");

// Event table & queue:
// JavaScript is single-threaded, meaning it can only run one command at a time.
// The call stack stores all your running JavaScript code. 
// The interpreter reads the code line-by-line, pushes each statement into the call stack one-by-one, and pops them once they execute. 
// However, if the statement is asynchronous, it is removed from the call stack and forwarded to the event table. 
// This table is responsible for moving the asynchronous code to the event queue after a specified time. 
// The event loop is responsible for keeping check of both the call stack and the event queue. 
// It keeps checking if all the statements from the call stack have finished execution; 
// that is, if the call stack is empty. If so, it pops the statement from the event queue (if present) to the call stack to execute.

const array = [5, 11, 18, 25];
for (var i = 0; i < array.length; i++) {
  setTimeout(function() {
    console.log('Element: ' + array[i] + ', at index: ' + i);
  }, 3000);
}

/*
What will the code above output?
Ans:
Element: undefined, at index: 4
Element: undefined, at index: 4
Element: undefined, at index: 4
Element: undefined, at index: 4
*/

/*
In the code, setTimeout creates a function (closure) that has access to the variables outside its scope, meaning it has access to the iterator i in the loop outside.

In JavaScript, the for loop statements present in the call stack will execute first, meaning the loop will perform all its iterations: 0,1,2,3, up until 4, 
after which the condition, i<array.length, will become false, and only then will the setTimeout function callback be triggered. 

On each iteration of the loop, setTimeout is called; however, since it’s an asynchronous web API, the command enters the event queue, 
after which the next loop iteration occurs. 
Hence, the event queue waits for the loop commands to execute first and call stack to get empty, 
after which the four setTimeout commands move from the event queue to call stack and execute.

The first parameter to the setTimeout function is the function it will execute, and the second is the time (in milliseconds) before it executes. 
So, in the code above, every time the function executes, (it does so after 3 seconds have passed) it prints the value of i, which is 4. 
Since array[4] doesn’t exist, undefined is displayed in the output for each iteration.
*/

