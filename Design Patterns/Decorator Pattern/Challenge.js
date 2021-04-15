// Problem statement:
// The code below implements the functionality that customizes superheroes for a game.
// If you study the code below, you’ll see that every superhero has a power.
// However, you can also create superheroes that have the following in addition to the power:
// a sword
// super speed
// a sword and super speed

// Run the code below to see its implementation:
class SuperHero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}

class SuperHeroWithSword extends SuperHero {
  constructor(name, power) {
    super(name, power);
    this.sword = true;
  }
  hasSword() {
    return `${this.name}'s power is ${this.power}, and he also has a sword now.`;
  }
}

class SuperHeroWithSuperSpeed extends SuperHero {
  constructor(name, power) {
    super(name, power);
    this.superSpeed = true;
  }
  hasSuperSpeed() {
    return `${this.name}'s power is ${this.power}, and he also has the super speed now.`;
  }
}

class SuperHeroWithSpeedandSword extends SuperHero {
  constructor(name, power) {
    super(name, power);
    this.speedAndSword = true;
  }
  hasSpeedAndSword() {
    return `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`;
  }
}

var superhero1 = new SuperHeroWithSword("Fire Man", "Fire");
console.log(superhero1.hasSword());

var superhero2 = new SuperHeroWithSuperSpeed("Fire Man", "Fire");
console.log(superhero2.hasSuperSpeed());

var superhero3 = new SuperHeroWithSpeedandSword("Ice Man", "Ice");
console.log(superhero3.hasSpeedAndSword());

// Your task is to modify the code, such that there is an option to add multiple customizations to a single superhero object.

// Input:
// A multiclass version code for making superheroes with different superpowers

// Output:
// Messages displaying multiple superpowers of a superhero

// Sample input:
// var superhero1 = new SuperHero("Fire Man", "Fire")
// SuperHeroWithSword(superhero1)
// SuperHeroWithSuperSpeed(superhero1)
// var superhero2 = new SuperHero("Ice Man", "Ice")
// SuperHeroWithSpeedandSword(superhero2)

// Sample output:
// `Fire Man's power is Fire, and he also has a sword now.`
// `Fire Man's power is Fire, and he also has the super speed now.`
// `Ice Man's power is Ice, and he also has both super speed and a sword now.`

class SuperHero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}

function SuperHeroWithSword(superhero) {
  superhero.sword = true;
  superhero.hasSword = function () {
    return `${this.name}'s power is ${this.power}, and he also has a sword now.`;
  };
  return superhero;
}

function SuperHeroWithSuperSpeed(superhero) {
  superhero.superSpeed = true;
  superhero.hasSuperSpeed = function () {
    return `${this.name}'s power is ${this.power}, and he also has the super speed now.`;
  };
  return superhero;
}

function SuperHeroWithSpeedandSword(superhero) {
  superhero.speedAndSword = true;
  superhero.hasSpeedAndSword = function () {
    return `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`;
  };
  return superhero;
}

var superhero1 = new SuperHero("Fire Man", "Fire");

SuperHeroWithSword(superhero1);
console.log(superhero1.hasSword());

SuperHeroWithSuperSpeed(superhero1);
console.log(superhero1.hasSuperSpeed());

var superhero2 = new SuperHero("Ice Man", "Ice");

SuperHeroWithSpeedandSword(superhero2);
console.log(superhero2.hasSpeedAndSword());
