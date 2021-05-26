// Problem statement:
// In this challenge, you have to reverse iterate a simple hashmap and display its key values.

// You need to implement the reverseIterate function that accepts the hashmap, items, and displays the key values in reverse.
// To reverse iterate, make use of the ReverseIterator class. It contains the following functions:

// hasprevElement: checks if there is a previous element
// last: returns the last key value in the map
// previous: returns the previous key value in the map

// Apart from the functions mentioned above, you also need to define its constructor.

// Input:
// Calling reverseIterate function on a simple hashmap

// Output:
// Hashmap’s values displayed in reverse order

// Sample input:
reverseIterate({
  name: "Anne",
  age: "23",
  gender: "Female",
  Occupation: "Engineer",
});

// Sample output:
"Engineer"
"Female"
"23"
"Anne"

// Solution:
class ReverseIterator {
  constructor(elements) {
    this.keys = Object.keys(elements);
    this.index = this.keys.length - 1;
    this.elements = elements;
  }

  hasprevElement() {
    return this.index >= 0;
  }

  last() {
    this.index = this.keys.length - 1;
    return this.elements[this.keys[this.index]];
  }

  previous() {
    if (this.index >= 0) {
      return this.elements[this.keys[--this.index]];
    } else {
      return null;
    }
  }
}

function reverseIterate(items) {
  var iter = new ReverseIterator(items);

  for (var i = iter.last(); iter.hasprevElement(); i = iter.previous()) {
    console.log(i);
  }
}
reverseIterate({
  name: "Anne",
  age: "23",
  gender: "Female",
  Occupation: "Engineer",
});
