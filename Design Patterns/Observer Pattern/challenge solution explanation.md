# Explanation

In this example, we have the subject class Auctioneer that stores the list of all bidders to whom it announces the bidding prices.

```javascript
class Auctioneer {
  constructor() {
    this.bidderList = [];
  }
  //code...
}
```

The constructor initializes the list bidderList that stores all the bidders participating in the auction.

It also defines the registerBidder function that registers a bidder for the auction.

```javascript
registerBidder(bidder);
{
  this.bidderList.push(bidder);
}
```

It also has the announceNewBidderPrice function:

```javascript
announceNewBidderPrice();
{
  this.notifyBidders();
}
```

When a bidder gives a price for the object being auctioned, the auctioneer invokes the announceNewBidderPrice function to notify all the bidders about the price. How are the bidders notified? They’re notified using the notifyBidders function.

```javascript
notifyBidders();
{
  this.bidderList.forEach((bidder) => bidder.update());
}
```

This function sends an announcement regarding the price given by each bidder in the list. It does so by calling the update function. We’ll take a look at it when we discuss the Bidder class.

Here’s what the Bidder class looks like:

```javascript
class Bidder {
  constructor(name) {
    this.name = name;
    this.bidPrice = null;
  }
  //code...
}
```

The constructor initializes the properties name and bidPrice for a bidder.

The bidPrice is set using the giveNewPrice function:

```javascript
giveNewPrice(price);
{
  this.bidPrice = price;
}
```

The Bidder also has the update function.

```javascript
update(){
  console.log(`${this.name} is offering ${this.bidPrice} dollars`);
  if (this.bidPrice > 500){
    console.log(`Sold to ${this.name}`);
  }
}
```

This function is invoked by the Auctioneer to notify the bidders about the new price given by a bidder. Hence, it displays a message announcing the name of the bidder and the bidPrice offered by them. It also checks if the bidder’s price is greater than 500. If it is, the object is sold to that bidder, and an announcement of the winner is made.
