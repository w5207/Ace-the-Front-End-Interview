// JS
var parent = document.getElementById("Box");
parent.addEventListener(
  "click",
  function () {
    console.log("Box is clicked");
  },
  true
);
var child = document.getElementById("myButton");
child.addEventListener("click", function () {
  console.log("Button is clicked");
});

// HTML
<html>
  <head></head>
  <body>
    <h1> Event Capturing Example</h1>
    <div id="Box">
      <button id="myButton">Click Me!</button>
    </div>
  </body>
</html>;

/*
What will be the console output upon clicking the button?

Ans:
Box is clicked
Button is clicked

Explanation:
We use a third additional argument, true, in the addEventListener for the parent to enable event capturing.
In event capturing, when you click the button, the event passes from the parent down to the event target.
*/