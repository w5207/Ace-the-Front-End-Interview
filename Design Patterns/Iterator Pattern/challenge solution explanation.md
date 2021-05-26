# Explanation

In the code above, we defined a ReverseIterator class that initializes the following properties:

- keys: all the keys of the hashmap are accessed using Object.keys and stored in this property
- index: keeps track of keys in the hashmap
- elements: stores the hashmap object

Next, we define the three functions given in the class. Let’s look at each one by one.

```javascript
hasprevElement() {
    return this.index >=0
}
```

hasprevElement checks whether the previous element exists or not. It will return true as long as the index is greater than zero, that is, until the first element has been iterated.

```javascript
last(){
   this.index = this.keys.length - 1
   return this.elements[this.keys[this.index]]
}
```

last returns the last key value in the hash. For that, it first points the index to the last key and then returns the value corresponding to that key.

```javascript
previous(){
    if(this.index >= 0){
      return  this.elements[this.keys[--this.index]]
    }else{
      return null
   }
}
```

previous returns the value of the previous key if the index is greater than or equal to zero. Otherwise, it returns null.

Now, let’s see how we can use the functions mentioned above to display the key values in reverse. We make use of the reverseIterate function for this purpose.

```javascript
function reverseIterate(items) {
  var iter = new ReverseIterator(items);

  for (var i = iter.last(); iter.hasprevElement(); i = iter.previous()) {
    console.log(i);
  }
}
```

First, we create a ReverseIterator object, iter, for the hash items. Next, we implement a for loop that uses the functions in iter to traverse the hash in reverse.

It starts from the last item that it gets using iter.last. From there, it keeps accessing the previous value in each iteration using iter.previous, as long as there exists a previous element. It checks for that using iter.hasprevElement. In each iteration, it displays the value corresponding to the key using the console.log statement.
