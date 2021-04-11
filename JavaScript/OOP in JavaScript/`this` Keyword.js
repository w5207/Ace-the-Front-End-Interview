// Question 1
length = 10;
function func() {
  console.log(this.length);
}

var obj = {
  length: 5,
  thisFunc: function (func) {
    func();
    arguments[0]();
  },
};

obj.thisFunc(func, 3);

// What will be the output of the code above?
// 10
// 2

// Explanation:
// 10: 
// Since we declare length at a global level (i.e., at window level), we can access it using this.length or window.length.
// When func is invoked, this will access length = 10 (declared globally) instead of length = 5, defined inside obj.

// 2:
// Next, thisFunc uses arguments[] to access the arguments we are passing into thisFunc. 
// So arguments[0] returns the func function whereas arguments[1] returns 3.
// Then we invoke it by appending () to arguments[0]. 
// However, now inside func, this will refer to the arguments array. 
// So, this.length will return the length of the arguments array, 2.

// Question 2
var MyDate = function (date) {
  this.date = date;
};

var obj4 = {};
obj4.foo = new Date();
obj4.bar = new MyDate(obj4.foo);
console.log(obj4.bar);

// What will be the output of the code above?
// A date object where date is equal to current date

// Explanation:
// bar stores the object instance of MyDate. 
// Now, this will refer to the new object we are creating and this.date will set the date for this object instance. 
// Since MyDate takes a date as a parameter, we pass the foo property of obj4 as the argument to it.