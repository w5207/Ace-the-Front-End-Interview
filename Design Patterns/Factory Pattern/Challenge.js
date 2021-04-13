// Problem statement:
// In this problem, you need to implement a factory ToyFactory that can create a toy duck and a toy car object using either the ToyDuck or ToyCar function constructor.

// A ToyDuck object should have the following properties:
// color
// price

// A ToyCar object should have the following properties:
// color
// price
// name

// Your task is to create a function, createToy. It should decide which toy to create depending on the parameter passed to it.

// Input:
// createToy function called with different parameters

// Output:
// Toy duck or car object created depending on the inputs

// Sample input:
var toyFactory = new ToyFactory();
var car = toyFactory.createToy({
  toyType: "car",
  color: "blue",
  price: 12,
  name: "honda",
});

// Sample output:
// ToyCar { color: 'blue', price: 12, name: 'honda' }

function ToyFactory() {
  this.toy = ToyDuck;
  this.createToy = function (toyChosen) {
    if (toyChosen.toyType == "duck") {
      this.toy = ToyDuck;
    } else if (toyChosen.toyType == "car") {
      this.toy = ToyCar;
    }
    return new this.toy(toyChosen);
  };
}

function ToyDuck(toyObj) {
  this.color = toyObj.color;
  this.price = toyObj.price;
}

function ToyCar(toyObj) {
  this.color = toyObj.color;
  this.price = toyObj.price;
  this.name = toyObj.name;
}

var toyFactory = new ToyFactory();

var car = toyFactory.createToy({
  toyType: "car",
  color: "blue",
  price: 12,
  name: "honda",
});

console.log(car);
console.log(car instanceof ToyCar);

var duck = toyFactory.createToy({
  toyType: "duck",
  color: "yellow",
  price: 5,
});

console.log(duck);
console.log(duck instanceof ToyDuck);
