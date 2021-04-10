// Problem statement:
// Study and run the code given below. It will give the error Cannot read property 'text' of undefined.
// Your task is to modify the code so that it displays the correct output, Complete Code Example, when run.

// Input:
// Sample code

// Output:
// The correct output: Complete Code Example

const getTodo = () => {
  setTimeout(() => {
    return { text: "Complete Code Example" };
  }, 2000);
};
function display() {
  const todo = getTodo();
  console.log(todo.text);
}

display();

// Solution:
const getTodo = (callback) => {
  setTimeout(() => {
    callback({ text: "Complete Code Example" });
  }, 2000);
};
function display() {
  getTodo((todo) => {
    console.log(todo.text);
  });
}
display();

// Here, we pass the callback function as an argument to getTodo.
// In our modified code, this is the callback function we are passing into getTodo:F
todo => {
  console.log(todo.text)
}
// todo is an anonymous function which executes after a delay of 2000 milliseconds (specified in the setTimeout function).
// Basically, the callback in setTimeout and todo are the same. This function displays the todo.text value. 
// This time the console.log statement for displaying text is inside the callback function; 
// hence, you see its value on the console once 2000 milliseconds pass, and it executes.