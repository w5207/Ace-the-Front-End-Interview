// Problem statement:
// Your task is to implement inheritance between the class Human and Man.
// In the end, the code should compile successfully and give the correct output.

function Human(name, age) {
  this.name = name;
  this.age = age;
}

function Man(name) {}

function check() {
  var obj = new Man("Tommy Tan");
  console.log(obj.name);
  console.log(obj instanceof Human);
}
check();

// Input:
// Incomplete Sample Code

// Output:
// Code implementing inheritance and giving the correct output

function Human(name, age) {
  this.name = name;
  this.age = age;
}

function Man(name, age) {
  Human.call(this, name, age);
}

Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;

function check() {
  var obj = new Man("Tommy Tan", 20);
  console.log(obj.name); //should print name
  console.log(obj instanceof Human); //should be true
}
