/*
Closure gives access to an outer function’s scope from an inner function.
Ture.
*/

// Option A is correct since, in JavaScript, a closure is a function that can access the variables from another function’s scope. 
// This is possible by creating nested functions. The enclosing/outer function will, however, not have access to the inner scope.

/*
Which of the following are common uses of closure?

A) For Object Data Privacy

B) In Event Handlers

C) In Callback Functions

D) Currying

E) All of the above
*/

// In JavaScript, closures are used to enable data privacy. 
// The enclosed variables are only in scope within the outer function. 
// The data cannot be accessed through an outside scope except through the use of privileged methods. 
// Similarly, they are also used in event handlers and callback functions, as well as currying. 
// Hence, all the options mentioned above are correct, so Option E is the right answer.

