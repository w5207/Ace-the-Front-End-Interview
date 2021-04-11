// Currying transforms a function into a sequence of nesting functions.

// Example:
function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(2, 3, 4));

// convert it into a currying function:
function multiply(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}
console.log(multiply(2)(3)(4));

// We can break the above function to understand this in more detail.
function multiply(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}
var value1 = multiply(2);
var value2 = value1(3);
var value3 = value2(4);
console.log(value3);

// Problem statement:
// Write a wrapper function currying which accepts a function, say func, and returns the curried version of func.

// Input:
// Function to be transformed to the currying function

// Output:
// Curried Function

// Sample input:
function multiply(a, b, c) {
  return a * b * c;
}
// Sample output:
let curried = currying(multiply);
curried(2)(3)(4); //24
curried(2, 3)(4); //24

function currying(func) {
  function curriedfunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedfunc(...args, ...next);
      };
    }
  }
  return curriedfunc;
}

function multiply(a, b, c) {
  return a * b * c;
}

let curried = currying(multiply);
console.log(curried(2)(3)(4));
console.log(curried(2, 3)(4));
console.log(curried(2, 3, 4));
console.log(curried(5)(6, 7));
