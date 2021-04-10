// JS
var parent = document.getElementById("Box");
parent.addEventListener("click", function() {
  console.log("Box is clicked");
});
var child = document.getElementById("myButton");
child.addEventListener("click", function() {
  console.log("Button is clicked");
});

// HTML
<html>
  <head></head>
  <body>
    <h1> Event Bubbling Example</h1>
    <div id="Box">
      <button id="myButton">Click Me!</button>
    </div>
  </body>
</html>

/*
What will be the console output upon clicking the button?

Ans:
Button is clicked
Box is clicked

Explanation:
In event bubbling, the handler first executes on the event attached to the target element, then on all its ancestors. 
It starts from the bottom (deepest layer) and goes to the top.
*/