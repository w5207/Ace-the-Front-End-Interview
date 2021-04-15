# What is the facade pattern?

In English, the word facade means a deceptive front or appearance.
Following this definition, a facade pattern provides a simpler interface that hides the complex functionalities of a system.
This is widely used in JavaScript libraries like jQuery.
The facade pattern allows you to hide all the messy logic from the client and only display the clear and easy-to-use interface to them.
This allows them to interact with an API easily in a less error-prone way and without accessing the inner workings directly.
![Facade Pattern](1.png)

# Example

```javascript
let orderNumber = 0;

class PlaceFoodOrder {
  placeOrder(orderDetails) {
    const orderId = PlaceFoodOrder.generateId();
    let chef;
    if (orderDetails.foodType === "Main Course") {
      chef = new MainCourseChef();
    } else if (orderDetails.foodType == "Dessert") {
      chef = new DessertChef();
    }
    return chef.addFoodOrder({ orderId, orderDetails });
  }
  static generateId() {
    return ++orderNumber;
  }
}

class FoodOrders {
  constructor() {
    this.orders = [];
  }
  addFoodOrder(order) {
    this.orders.push(order);
    return this.conveyOrder(order);
  }
  timetoMakeOrder() {}
  conveyOrder(order) {}
}

class MainCourseChef extends FoodOrders {
  constructor() {
    super();
    this.assigned = true;
    return this;
  }
  timetoMakeOrder() {
    return Math.floor(Math.random() * 50) + 10;
  }
  conveyOrder({ orderId, orderDetails }) {
    const time = this.timetoMakeOrder();
    console.log(
      `Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`
    );
  }
}

class DessertChef extends FoodOrders {
  constructor() {
    super();
    this.assigned = true;
    return this;
  }
  timetoMakeOrder() {
    return Math.floor(Math.random() * 30) + 10;
  }
  conveyOrder({ orderId, orderDetails }) {
    const time = this.timetoMakeOrder();
    console.log(
      `Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`
    );
  }
}

const customer = new PlaceFoodOrder();
const order1 = customer.placeOrder({
  foodType: "Main Course",
  foodDetails: "Pasta with Shrimps",
});
const order2 = customer.placeOrder({
  foodType: "Dessert",
  foodDetails: "Molten Lava Cake",
});
```
