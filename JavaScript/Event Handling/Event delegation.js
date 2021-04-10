/*
Which of the following methods can prevent event bubbling?

A)
event.stop
Incorret

B)
event.stopPropagation()
Corret

C)
event.stopBubble
Incorret

D)
event.cancelBubble
Corret
*/

// JS
var tar = document.getElementById("RemoveCartItems");
tar.addEventListener("click", function (event) {
  var ele = event.target.parentNode;
  ele.parentNode.removeChild(ele);
  event.preventDefault();
});

// HTML
<html>
  <head></head>
  <body>
    <ul id="RemoveCartItems">
      <li>
        <a href="#">Item 1</a>
      </li>
      <li>
        <a href="#">Item 2</a>
      </li>
      <li>
        <a href="#">Item 3</a>
      </li>
      <li>
        <a href="#">Item 4</a>
      </li>
      <li>
        <a href="#">Item 5</a>
      </li>
    </ul>
  </body>
</html>;

/*
Which concept is the above code implementing?

Ans:
Event Delegation using Event bubbling

Explanation:
Event Delegation: Attach the event handler to the parent element.
*/