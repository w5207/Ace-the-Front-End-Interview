/*
What is the difference between call stack and task queue?

Ans:
Call stack keeps track of function calls whereas task queue handles the Web Apis callbacks

Explanation:
The purpose of a call stack is to keep track of all the function calls. 
Whenever we invoke a function, it is pushed into the call stack first. 
Once it finishes execution, it gets popped. 
However, if an asynchronous command enters the call stack, it is popped and added into the task queue, also known as the event queue. 
Such asynchronous commands include Web Apis callbacks. 
When the call stack encounters them, it pops them and they enter the task queue instead. 
The call stack processes these commands once all other commands finish execution, and it is empty.
*/ 

/*
The event loop pushes tasks from task queue to call stack once it is empty.

Ans:
True

Explanation:
The event loop has the task of checking both the call stack and the task queue continuously. 
When it sees that the call stack is done executing all the commands and is empty, 
it pops the commands from the task queue and pushes them into the call stack for execution.
*/