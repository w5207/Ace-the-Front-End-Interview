function func1(num) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(num);
    }, 1000);
  });
}

async function multiply(num) {
  const x = func1(10);
  const y = func1(3);
  return num * (await x) * (await y);
}

multiply(10).then(function (result) {
  console.log(result);
});

// What is the output of the code above?
// 300

function func1(num) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(num);
    }, 2000);
  });
}

async function multiply1(num) {
  const x = await func1(10);
  const y = await func1(3);
  return num * x * y;
}
/*
In the code above, we execute the promises sequentially, using async/await. 
First, the function call func1(10,1) is started, then there is a wait of two seconds, and only after it is resolved does the second call start. 
This also takes two seconds and is then resolved.
*/

multiply1(5).then(function (result) {
  console.log(result);
});

async function multiply2(num) {
  const x = func1(10);
  const y = func1(3);
  return num * (await x) * (await y);
}
/*
In the code above, both the await calls start concurrently meaning they start and end at the same time. 
Both func1(10,1) and func1(10,2) resolve two seconds later. 
So, instead of taking four seconds, as in the above case, they each take two seconds to resolve.
*/

multiply2(5).then(function (result) {
  console.log(result);
});

/*
Which of the following options are true for the code above?

A)
multiply1 takes lesser time to execute than multiply2
Incorrect

B)
multiply2 takes lesser time to execute than multiply1
Correct

C)
Both multiply1 and multiply2 take equal amount of time to execute
Incorrect

D)
Both the await calls in multiply2 are concurrent
Correct

E)
Both the await calls in multiply1 are concurrent
Incorrect
*/ 