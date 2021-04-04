// 1.
function Add() {
  console.log(answer)
  var answer = 2
};
Add()
// The output is 'undefined' since the code will be interpreted by JavaScript in the following way:
function Add() {
  var answer
  console.log(answer)
  answer = 2
};
Add()

// Note: Only the declarations get hoisted to the top, not the initializations.

// 2.
var temp = 'hi';
function display() { 
  console.log(temp);
  var temp = 'bye';
};
display();
// The output is 'undefined' since the code will be interpreted by JavaScript in the following way:
var temp = "hi"
function display(){
  var temp
  console.log(temp)
  temp = "bye" 
}
display()