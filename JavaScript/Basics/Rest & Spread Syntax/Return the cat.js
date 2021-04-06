// Problem statement:
// You’re given a function returnNthCat, which takes a variable n and has an object state defined in it.

// Carefully study the structuring of this object.

function returnNthCat(n) {
  const state = {
    cats: [
      { catId: 1, name: "tom" },
      { catId: 2, name: "tiggy" },
      { catId: 3, name: "leo" },
      { catId: 4, name: "nixie" },
    ],
    curpage: 3,
  };
}
// Your task is to return the name value of the nth cat object.

// This question tests your understanding of destructuring arrays/objects, so use this technique to solve the problem.

// Input:
// A value n

// Output:
// name value of the nth cat object

// A sample input/output for the state object is given below.

// Sample input:
// n = 0

// Sample output:
// tom
function returnNthCat(n) {
  const state = {
    cats: [
      { catId: 1, name: "tom" },
      { catId: 2, name: "tiggy" },
      { catId: 3, name: "leo" },
      { catId: 4, name: "tommy" },
    ],
    curpage: 3,
  };

  const {
    cats: {
      [n]: { name: thisCatName },
    },
  } = state;

  return thisCatName;
}
// console.log(returnNthCat(1))
// console.log(returnNthCat(0))
// console.log(returnNthCat(3))
// console.log(returnNthCat(2))
