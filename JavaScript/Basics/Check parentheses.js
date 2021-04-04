// Problem statement:
// Let’s say your teammate is working on a JavaScript code that won’t run because the brackets (square, curly, round) are not properly nested. 
// You then decide to write a Parentheses Checker function, which efficiently checks whether or not the input string’s opening and closing brackets are correctly nested.

// Note: Two brackets are considered a matched pair if the opening bracket occurs to the left of the closing bracket of the exact same type.

// Input:
// A string containing opening and closing brackets

// Output:
// A boolean value-true or false

// Sample input:
// "{ [ ] ( ) }"
// "{ [ ( ] ) }"

// Sample output:
// true
// false

// Solution 1:
function balancedParentheses(str) {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < str.length; i++) {
    // If character is an opening brace add it to a stack
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    }
    // If closing brace, pop from stack
    else {
      let lastEle = stack.pop();
      // Return false if the element popped doesn’t match the corresponding closing brace in the map 
      if (str[i] !== map[lastEle]) {
        return false;
      }
    }
  }
  // If stack not empty at end, return false
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

// console.log(balancedParentheses("{[]()}" ));
// console.log(balancedParentheses("{[(])}"));
// console.log(balancedParentheses("{[}"));

// Solution 2:
function balancedParentheses(str) {

  let stack = [];

  let openers = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  let closers = {
    '}': true,
    ']': true,
    ')': true
  }

  for (let i = 0; i < str.length; i++) {
    //traversing and storing one character of the string at a time
    let bracket = str[i];

    //if the character found in the openers map, push the corresponding closing bracket into stack 
    if (openers[bracket]) {
      stack.push(bracket);
    }
    //character found in the closers map, pop from stack
    else if (closers[bracket]) {
      //return false if current character isn’t matching 
      //closed parenthesis for the last open parenthesis from the stack
      if (openers[stack.pop()] !== bracket) return false;
    }
  }
  //check if the stack is empty at the end
  return stack.length === 0;
}
