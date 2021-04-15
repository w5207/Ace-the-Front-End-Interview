// Problem statement:
// In this challenge, you have to implement a Ninja fighting game using the prototype pattern.
// You have already been given the Ninja constructor function, which will be used to create a ninja object.
// A ninja should have the following properties:
// name
// points

// The points are set to 100 by default upon the instantiation of a Ninja object.

// A ninja can pull the following moves in a fight:
// punch: ninjas points reduce by 20 if they get a punch
// kick: ninjas points reduce by 50 if they get a kick

// A ninja can only kick or punch the other ninja if the following conditions are met:
// The other ninja’s points are greater than 0.
// The points of the ninja himself are also greater than 0.

// If the two conditions above are met, you should return the points of the other ninja as follows:
// `{other ninja's "name"} points are {other ninja's "points"}`

// If the conditions are not met, you should return the following if a punch was attempted:
// `Can't punch {other ninja's name}`

// And the following if a kick was attempted:
// `Can't kick {other ninja's name}`

// Input:
// Two ninjas fighting

// Output:
// The points of the ninja after being hit or the “Can’t kick/punch” message

// Sample input:
// var ninja1 = new Ninja('Ninja1')
// var ninja2 = new Ninja('Ninja2')
// ninja1.kick(ninja2)
// ninja2.punch(ninja1)
// ninja1.kick(ninja2)
// ninja1.punch(ninja2)
// ninja2.kick(ninja1)

// Sample output:
// "Ninja2's points are 50"
// "Ninja1's points are 80"
// "Ninja2's points are 0"
// "Can't punch Ninja2"
// "Can't kick Ninja1"

const Ninja = function (name) {
  this.points = 100;
  this.name = name;
};

Ninja.prototype.punch = function (otherNinja) {
  if (otherNinja.points > 0 && this.points > 0) {
    otherNinja.points -= 20;
    return `${otherNinja.name}'s points are ${otherNinja.points}`;
  } else {
    return `can't punch ${otherNinja.name}`;
  }
};

Ninja.prototype.kick = function (otherNinja) {
  if (otherNinja.points > 0 && this.points > 0) {
    otherNinja.points -= 50;
    return `${otherNinja.name}'s points are ${otherNinja.points}`;
  } else {
    return `can't punch ${otherNinja.name}`;
  }
};

const ninja1 = new Ninja("Ninja1");
const ninja2 = new Ninja("Ninja2");
console.log(ninja1.kick(ninja2));
console.log(ninja2.punch(ninja1));
console.log(ninja1.kick(ninja2));
console.log(ninja1.punch(ninja2));
console.log(ninja2.kick(ninja1));
