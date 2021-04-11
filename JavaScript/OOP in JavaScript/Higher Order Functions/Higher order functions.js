//  Question 1
const func1 = function (num) {
  return function () {
    if (typeof num == "NaN") {
      return "Not a number";
    } else {
      return typeof num;
    }
  };
};

// Is func1 a higher order function?
// Yes
// Explanation:
// Higher-Order functions accept functions as parameters or return a function as an output.

/*
Which of the following are higher order functions?
A) setTimeout
Correct

B) map
Correct

C) instanceof
Incorrect

D) reduce
Correct

E) split
Incorrect
*/

// Explanation:
// A) setTimeout takes a callback function as one of its parameters. Hence, it is a higher-order function.
setTimeout(() => console.log("Hello"), 1000);

// B) map takes a function as its parameter. It runs this function for each element of the array (the function is called on this array).
var values = [2, 4, 6, 8];
function double(num) {
  return num * 2;
}
var doubledValues = values.map(double);
console.log(doubledValues);

// C) instanceof is not a method, it is an operator; hence, it is not a higher-order function.

// D) reduce method executes the provided function (passed as a parameter) for each value of the array.
//    It reduces the array to a single value.
var values = [2, 4, 6, 8];

function theSum(output, num) {
  return output + Math.round(num);
}
console.log(values.reduce(theSum, 0));

// E) split takes two parameters: a separator (character to use for splitting), and a limit to specify the number of splits of the string it is called on. 
//    Hence, it is not a higher-order function.