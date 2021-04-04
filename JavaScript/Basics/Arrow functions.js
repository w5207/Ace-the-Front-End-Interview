// Basic Syntax:
// Function with no parameter
const identifierName = () => {codeForFunction}
// Function with single parameter
const identifierName = singleParameter => {codeForFunction}
// Function with multiple parameters
const identifierName = (functionParameters) => {codeForFunction}
// Single-line function
const identifierName = (functionParameters) => oneLineCode

// Examples:
// Function with no parameter
const multiply = () => console.log(2 * 2)
// Function with single parameter
const multiplyX = x => x * x
// Function with multiple parameters
const multiplyXY = (x,y) => x * y

/*
How does the arrow function differ from other functions?

A. Can be used as a constructor
Incorrect. 
An arrow function does not have its own new.target property so it cannot be used as a constructor function. 
It cannot be called by new as there is no internal method [[Construct]] that allows it. 
They don’t have any prototype property either.

B. Implicitly returns values
Correct. 
Arrow functions implicitly return values; hence, the use of the return keyword can also be avoided.

C. Is anonymous
Correct. 
There is no need for a name or the function keyword in an arrow function.

D. Inherits the value of this from its enclosing scope
Correct. 
Arrow functions bind this lexically; meaning since they don’t have their own context in which they execute, 
this gets inherited from the parent function. Hence, they don’t have their own this value.
*/

/*
Which of the following are an arrow function’s uses cases?

A. Dynamic binding of this
Incorrect. 
Arrow functions bind the context statically hence, they should not be used if this is bound dynamically.

B. Managing asynchronous code
Correct. 
Using arrow functions in codes using promises or asynchronous callbacks makes the code easier to read and more concise. 
This is because such codes tend to have a lot of function and return keywords, and with promises, these function expressions can be used for chaining too. 
Hence, using arrow functions, the code is simplified.

C. Creating methods on an object
Incorrect. 
Arrow functions should not be used to create object methods since they would create problems if you attempt to subclass/use this object as a prototype.

D. Array manipulation
Correct. 
One of the common operations you might need to perform on an array is to map or reduce them. 
Doing this using arrow functions makes the code more concise and easier to read.
*/

// Given the following codes:
const button = document.querySelector('#pushy');
button.addEventListener('click', () => {
    this.classList.toggle('on');
});

/*
What will be the result of clicking on the button?
Ans:
TypeError, cannot read property 'toggle' of undefined.
*/

// Explanation:
// In JavaScript, arrow functions do not bind their own this, meaning they inherit the one from the parent scope; this is also known as lexical scoping.
// Hence, in the code above, if you display the value of this you’ll see that the result will be window:
const button = document.querySelector('#pushy');
button.addEventListener('click', () => {
    console.log(this); //`this` refers to window
    this.classList.toggle('on');
});
// this refers to window here and is not bound to the element clicked (the button). 
// However, if you were to use a regular function instead of an arrow function, this would bind to the element clicked (the button):
const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
    console.log(this); //`this` refers to the button
    this.classList.toggle('on');
});
// The this keyword works differently in arrow functions. 
// None of the functions call, bind, or apply can change its value, so it remains the same as when the function was first called.