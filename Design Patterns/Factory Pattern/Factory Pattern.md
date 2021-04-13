# What is the factory pattern?
The factory pattern is a creational pattern that provides a template that can be used to create objects. 
It is used in complex situations where the type of the object required varies and needs to be specified in each case.

It does not use the new keyword directly to instantiate objects. 
This means it does not explicitly require the use of a constructor to create objects. 
Instead, it provides a generic interface that delegates the object creation responsibility to the corresponding subclass.

# Example
```javascript
class IceCreamFactory {
  constructor() {
    this.createIcecream = function (flavor) {
      let iceCream;
      if (flavor === "chocolate") {
        iceCream = new Chocolate();
      } else if (flavor === "mint") {
        iceCream = new Mint();
      } else if (flavor === "strawberry") {
        iceCream = new Strawberry();
      }
      return iceCream;
    };
  }
}

class Chocolate {
  constructor() {
    this.icecreamFlavor = "chocolate";
    this.message = function () {
      return `You chose the ${this.icecreamFlavor} flavor.`;
    };
  }
}

class Mint {
  constructor() {
    this.icecreamFlavor = "mint";
    this.message = function () {
      return `You chose the ${this.icecreamFlavor} flavor.`;
    };
  }
}

class Strawberry {
  constructor() {
    this.icecreamFlavor = "strawberry";
    this.message = function () {
      return `You chose the ${this.icecreamFlavor} flavor.`;
    };
  }
}

// creating objects
const iceCreamfactory = new IceCreamFactory();

const chocolate = iceCreamfactory.createIcecream("chocolate");
const mint = iceCreamfactory.createIcecream("mint");
const strawberry = iceCreamfactory.createIcecream("strawberry");

console.log(chocolate.message());
console.log(mint.message());
console.log(strawberry.message());
```

# When to use the factory pattern?
1. When the type of objects required cannot be anticipated beforehand
2. When multiple objects that share similar characteristics need to be created
3. When you want to generalize the object instantiation process since the object set up is complex in nature