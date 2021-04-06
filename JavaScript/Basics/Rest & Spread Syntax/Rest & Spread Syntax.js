/*
How is rest syntax different from spread syntax?

A) It expands the values in an array
Incorrect

B) It collects values in the form of an array
Correct

C) Works in function arguments
Correct

D) Does not work in arrays
*/

/*
Rest follows the same syntax as the spread syntax, i.e., placing three dots ... before what we choose to copy. 
However, the difference lies in the purpose. 
While spread is used to create copies of arrays/objects, rest is used to collect all the remaining values into an array. 
Hence, Option B is correct, and Option A is incorrect.

The rest syntax works in both function arguments and arrays. Hence, Option C, is correct but Option D is incorrect.
Let’s take a look at an example:
*/
function display(a, b, ...rest) {
  console.log(a, b, rest);
}

display(9,10,11,12,13,14,15,16);

/*
As you can see, the rest parameter is passed in a function where the exact number of arguments is unknown. 
The first two arguments are assigned to a and b, and the remaining are assigned to the rest parameter. 
In the output [11,12,13,14,15,16] displays values in rest.
*/

/*
What are the benefits of using spread syntax?

A) Easy to create copies of arrays
Correct

B) Packages all elements into an array
Incorrect

C) Easy to create copies of objects
Correct

D) Beneficial when working with data that should not be mutated
Correct
*/

/*
JavaScript ES6 offers the spread syntax, which is beneficial when it comes to functional programming because it allows us to create copies of arrays and objects easily. 
Let’s take a look at an example:
*/
//copying array
function display(arr) {
  return [...arr, 5,6,7];
}
const arr = [1,2,3,4];
console.log(display(arr)); 

//copying object
const obj = { name: 'Emily', age: 22 };
const newObj = { ...obj }
console.log(newObj)

/*
In the above example, the array arr is an argument to the display function. 
The spread syntax expands and copies the values of arr into the new array. 
We then add more values (5, 6 and 7), and return this new array. 
Hence, Options A and C, are correct but Option B is incorrect.

The spread syntax allows us to practice immutability. 
That is helpful when working with data that should not mutate. 
Let’s consider an example to make this clear:
*/

const employee = { name: "Emily", job: "Developer" }
const copyEmployee = {...employee}
console.log("Displaying employee")
console.log(employee)
console.log("Displaying copyEmployee")
console.log(copyEmployee)

//now let change the property values of copyEmployee
copyEmployee.name = "Anne"
copyEmployee.job = "Architect"
console.log("Displaying updated copyEmployee")
console.log(copyEmployee)
console.log("Displaying employee")
console.log(employee)

// As you can see, changing the copyEmployee object does not change the employee object. 
// This shows how you can achieve immutability using spread syntax.

// Note: JavaScript arrays and objects are reference data types hence their immutability is not ensured.

// From the above example, you can see that Option D is correct.