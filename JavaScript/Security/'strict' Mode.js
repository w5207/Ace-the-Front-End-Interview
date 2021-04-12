"use strict";
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9;

// Which of the following is true when the code above executes?

// A) An error is thrown
// Correct

// B) The value obj1.x is set to 9
// Incorrect

// C) The value of obj1.x remains 42
// Correct

// D) The value of obj1.x becomes undefined
// Incorrect

/*
The value of obj1.x is 42; this means that the statement on line 3 fails. However, as you can see, no error is thrown.
The difference lies in the use of the strict keyword, which is excluded in the code above.
Using strict enforces strict mode, which means stricter parsing and error handling of the JavaScript code. 
It allows you to catch errors in an erroneous code, whereas in a normal case, JavaScript might not show an error for the same piece of code. 
Since the attempt to change obj1.x fails, the value of x remains 42;
*/

(function test() {
  "use strict";
  var fn = function () {
    return this * 2;
  };

  console.log(fn.apply(undefined));
  console.log(fn.apply(null));
  console.log(fn.apply(1));
})();

// What is the output of the code above?
// NaN
// 0
// 2

/*
use strict can either be used for an entire script or functions. 
It cannot be used for a block of code enclosed in {} alone. When used inside functions, it changes the value of this.

Originally, in a function call, the value of this was a global object, meaning an object that always exists in the global scope. 
window object is a global object in a browser.

However, when strict mode is used in a function, it changes the value of this from the global object window to undefined.
When we call a function with apply, the value of this is set to some custom value that is the first parameter to the apply method.
If this value is of a primitive type, it is boxed into an object, and set as the value of this.
*/