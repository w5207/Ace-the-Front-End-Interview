// Problem statement:
// In this challenge, you have to implement a part of an online hair product ordering system.
// The available products are shampoo, conditioner, and hair serum.
// A customer who is shopping online can buy any of these.
// A product object has the following properties:
// productName: name of the product, that is, shampoo, conditioner, or hair serum
// amount: the number of bottles that the customer wants to buy

// This system will allow a customer to buy an amount of product.
// If that amount is available in the inventory, a BuyProduct class instance should be initiated.
// If the amount is not available, a PreOrderProduct class instance should be initiated.
// The inventory will look like:
// the amount of shampoo is: 20
// the amount of conditioner is: 20
// the amount of hair serum is: 1000

// In the end, the customers should get a message that lets them know if they can buy that amount of bottles or will have to pre-order.
// Here’s an example:
`2 bottles of shampoo are available. Click on "buy" to purchase them.`
`2000 bottles of hair serum are not available. You can Pre-order them on the next page.`;

// You need to implement the facade pattern to achieve this.
// You’ve already been given the Inventory, BuyingProduct, BuyProduct, and PreOrder classes.
// Write their definitions and link them such that the output mentioned above is shown to the customer.

// Input:
// buyProduct method invoked with some given arguments

// Output:
// The message displayed regarding whether the customer can buy the products or will have to pre-order them

// Sample input:
var customer = new BuyingProduct();
customer.buyProduct({ productName: "shampoo", amount: 2 });
customer.buyProduct({
  productName: "hair serum",
  amount: 2000,
})

// Sample output:
`2 bottles of shampoo are available. Click on "buy" to purchase them.`
`2000 bottles of hair serum are not available. You can Pre-order them on the next page.`;

// Solution:
class Inventory {
  constructor() {
    this.shampoosAmount = 20;
    this.conditionersAmount = 20;
    this.hairSerumsAmount = 1000;
  }
  checkInventory(product) {
    let available = true;
    if (
      product.productName == "shampoo" &&
      product.amount > this.shampoosAmount
    ) {
      available = false;
      return available;
    } else if (
      product.productName == "conditioner" &&
      product.amount > this.conditionersAmount
    ) {
      available = false;
      return available;
    } else if (
      product.productName == "hair serum" &&
      product.amount > this.hairSerumsAmount
    ) {
      available = false;
      return available;
    }
    return available;
  }
}

class BuyingProduct extends Inventory {
  buyProduct(product) {
    let order;
    if (this.checkInventory(product)) {
      order = new BuyProduct();
    } else {
      order = new PreOrderProduct();
    }
    return order.showDetails(product);
  }
}

class BuyProduct {
  showDetails(product) {
    console.log(
      `${product.amount} bottles of ${product.productName} are available. Click on "buy" to purchase them.`
    );
  }
}

class PreOrderProduct {
  showDetails(product) {
    console.log(
      `${product.amount} bottles of ${product.productName} are not available. You can Pre-order them on the next page.`
    );
  }
}

var customer = new BuyingProduct();
customer.buyProduct({ productName: "shampoo", amount: 2 });
customer.buyProduct({ productName: "hair serum", amount: 2000 });

// Explanation:
// Before we delve into the solution, let’s summarize what the challenge is. 
// Here, you have to provide a simple ordering interface for the customer. 
// The implementation should be such that when a customer wants to buy a product, they get a message that says the product is available for purchase or pre-order . 
// You have to use the facade pattern here to hide all the background processing that the customer doesn’t need to see.

// Now, let’s discuss what goes on behind the scenes. We need to implement the following when a purchase request is made:
// check whether the product is available or not
// if available, display a message conveying its availability to the customer
// if it is not available, display a corresponding message