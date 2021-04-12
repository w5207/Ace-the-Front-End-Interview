// Problem statement:
// In this challenge, you are given an object, person. The function, func, is doing the following:
// modifying the name property of the person
// adding the age property to the person object
// deleting the person.name property

// Your task is to modify the code so that none of the above changes are allowed. The code should throw an error if any of the changes mentioned above are made. For each error you catch you need to display the corresponding message on the console:

// "Cannot change name"
// "Cannot add property age"
// "Cannot delete person"

// Input:
// Performing an operation that is not allowed

// Output:
// The message corresponding to the error is displayed on the console

// Sample input:
// person.name = "xyz"
// person.age = 30
// delete person.name

// Sample output:
// "Cannot change name"
// "Cannot add property age"
// "Cannot delete person"

var person = {
  name: "Nishant",
};

function func() {
  person.name = "xyz";
  person.age = 30;
  delete person.name;
  console.log(person.name);
  console.log(person.age);
  console.log(person.name);
}

// Solution:
("use strict");

var person = {
  name: "Nishant",
};

Object.freeze(person);
Object.seal(person);
// One way is to freeze an object using the Object.freeze() method. 
// It prevents the existing properties from getting modified when all properties and methods become read-only.
// Similarly, we can seal the object using the Object.seal() method. 
// It prevents the addition and deletion of properties. 
// However, it does not stop properties from getting modified; that is done by Object.freeze().

function func() {
  try {
    person.name = "xyz";
    console.log(person.name);
  } catch (e) {
    console.log("Cannot change name");
  }
  try {
    person.age = 30;
    console.log(person.age);
  } catch (e) {
    console.log("Cannot add property age");
  }
  try {
    delete person.name;
    console.log(person.name);
  } catch (e) {
    console.log("Cannot delete person");
  }
}
func();
