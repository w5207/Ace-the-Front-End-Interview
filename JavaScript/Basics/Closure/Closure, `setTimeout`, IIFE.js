// Closure, `setTimeout`, IIFE

// The code above displays the answer: Element: undefined, at index: 4 for all iterations. However, the correct output will be the following:

// Element: 5, at index: 0
// Element: 11, at index: 1
// Element: 18, at index: 2
// Element: 25, at index: 3

 
// From the codes given below, choose those that return the correct output.

// A)
const array = [5, 11, 18, 25];
  for (let i = 0; i < array.length; i++) {
  setTimeout(function() {
    console.log('Element: ' + array[i] + ', at index: ' + i);
  }, 3000);
}
/*
Correct.
The only modification you need to make is declaring the iterator i using the keyword let rather than var. 
This fix makes use of ES6. Changing var to let changes the implementation so that the value of i is “held” until after the timeout finishes. 
It creates a new binding (storage space) for each loop iteration; each i refers to the binding of one specific iteration and preserves the value that was current at that time. 
Previously, using var, a single binding was created for i, each loop iteration referred to the same binding hence returning the same value.
*/

// B)
const array = [5, 11, 18, 25];
for (const i = 0; i < array.length; i++) {
  setTimeout(function() {
    console.log('Element: ' + array[i] + ', at index: ' + i);
  }, 3000);
}
/*
Incorrect.
A const value, once it is set, cannot be changed. 
Initially, its value is set to zero. 
In the second iteration, when the loop tries to increment it the exception "i" is read-only is thrown since the value cannot be changed.
*/

// C)
const array = [5, 11, 18, 25];
for (var i = 0; i < array.length; i++) {
  setTimeout(function(local_i) {
    return function() {
      console.log('Element: ' + array[local_i] + ', at index: ' + local_i);
    }
  }(i), 3000);
}
/*
Correct.
First, the for loop will start executing. Each value of i will bind to the setTimeout function. 
That is, for values i=0,1,2,3 the binds: setTimeout(0,3000), setTimeout(1,3000), setTimeout(2,3000), and setTimeout(3,3000) are created. 
However, in each loop iteration, setTimeout is passed from the call stack to the event queue instead of getting executed because setTimeout is an asynchronous web API. 
After the setTimeout command enters the event queue, the next loop iteration occurs. 
Once the for loop is done executing, that is, the call stack is empty, the event queue passes the setTimeout commands to the call stack to execute them.
*/

// D)
const array = [5, 11, 18, 25];
for (var i = 0; i < array.length; i++) {
  setTimeout(function(local_i) {
    console.log('Element: ' + array[local_i] + ', at index: ' + local_i); 
  }(i), 3000);
}
/*
Incorrect.
The code above is similar to the code in Option C; only it’s missing the return function statement inside the setTimeout function. 
The reason it gives an error is that setTimeout expects a function object as its first parameter. 
However, in this case, the first parameter is an immediately invoked function call ((i) on line 5 invokes it), not a function object. 
This function call executes the console.log() statement immediately and returns undefined. 
Now, undefined is not a valid function object, so setTimeout throws an error.
*/

