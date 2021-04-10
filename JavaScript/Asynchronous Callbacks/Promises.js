var promise = func1();

promise

  .then(function (result1) {
    console.log(result1);
    return func2();
  })

  .then(function (result2) {
    console.log(result2);
    return result2 % 10;
  })

  .then(function (result3) {
    console.log(result3);
  });

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hello");
    }, 1000);
  });
}

function func2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(50);
    }, 1000);
  });
}

// What will be the output of the code above?
// Hello
// 50
// 0

function exam(arg) {
  return new Promise(function (resolve, reject) {
    if (arg > 50) {
      resolve("Pass");
    } else {
      reject("Fail");
    }
  });
}

let promise = exam(60);

promise
  .then(function (result) {
    console.log(result);
    return exam(20);
  })

  .catch(function (error) {
    console.log(error);
    return "Error";
  })

  .then(function (result) {
    console.log(result);
    return exam(80);
  })

  .catch(function (error) {
    console.log(error);
  });

// What is the output of the code above?
// Pass
// Fail
// Error
