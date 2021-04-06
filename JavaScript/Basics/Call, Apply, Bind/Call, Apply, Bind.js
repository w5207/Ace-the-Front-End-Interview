/*
What’s the notable difference between the Function.call and Function.apply methods?

A) call requires an array as its second argument whereas apply requires the parameters to be listed explicitly
Incorrect

B) apply requires an array as its second argument whereas call requires the parameters to be listed explicitly
Correct

C) call can only be called on other functions whereas apply cannot
Incorrect

D) apply can only be called on other functions whereas call cannot
Incorrect
*/

// Call
// The call method allows for a method that was defined for one object to be assigned and called on by another object. 
// This allows for a method to get defined once and then get inherited by other objects without having to re-write it for other objects.
var animal = {
  animalInfo: function () {
    return this.name + " is " + this.age + " years old"
  }
}

var cat = {
  name: "Tom",
  age: 5
}

console.log(animal.animalInfo.call(cat))

// Apply
// Apply serves the exact same purpose as call.
var animal = {
  animalInfo: function (sound, food) {
    return this.name + " is " + this.age + " years old" + " . He makes the sound " + sound + " and eats " + food
  }
}

var cat = {
  name: "Tom",
  age: 5
}

console.log(animal.animalInfo.apply(cat, ["meow", "fish"]))

/*
Coming back to the question; if both call and apply are used for the exact same purpose, what is the difference?

The only difference between the two is that call expects all parameters to be passed individually, 
whereas apply expects the second argument to be an array of all the parameters. 
Due to this, Option B is correct, whereas A is incorrect.

Both call and apply can only be called on other functions; hence, both Options C & D are incorrect.
*/

/*
What does Function.prototype.bind do?

A) Creates a new function from an existing function
Correct

B) Invokes a function immediately
Incorrect

C) Changes the value of this in a new function created from an existing function
Correct

D) Invokes a function later with a certain context
Correct
*/

// The bind function creates a new function whose this value can be set to the value provided during the function call, 
// enabling the calling of a function with a specified this value (the first parameter to bind function). 
// Due to this, both Options A and C are correct.

// Bind
var obj = {
  name: "Tom"
};

var info = function (a, b, c) {
  return this.name + " likes to eat " + a + " " + b + " and " + c;
};

// creates a bound function that has same body and parameters 
var bound = info.bind(obj, "Pasta");

console.log(bound("Donuts", "Chips", "Cake")); // calling the bound function later

// As seen above, a new function, bound, is created when bind is called on the function info. 
// This new function is not invoked instantly; instead, it is returned with the context which gets invoked later. 
// You can see this on line 11, where bound is invoked with the required arguments. Hence, Option D is correct whereas Option B is incorrect.

// An important thing to note in the above example is that the last argument, Cake, passed to the bound function is ignored. 
// This is because the parameters following the first parameter to bind precede the arguments provided to the new function when it is invoked.
// In our case, info requires three arguments. Pasta (the parameter following the first parameter to bind) will precede the three arguments passed to bound. 
// Hence, Donuts and Chips will be passed as the second and third arguments; whereas, Cake will get ignored.
