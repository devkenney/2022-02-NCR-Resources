let todoArea = document.getElementById("todo-area");
// gets the textarea and sets it to a variable

let submitButton = document.getElementById("submit-button");
// gets the submit button and sets it to a variable

let todoSpot = document.getElementById("todo-spot");
// gets the <ul> and sets it to a variable

let itemsList = document.getElementsByTagName("LI")
// gets all of the elements that are <li>s and adds them to an Array to be used later. This updates automatically when new <li>s are created!

let close = document.getElementsByClassName("close")
// gets all of the elements with the class name "close" and adds them to an Array to be used later. This also updates automatically when new elements are created!

let check = document.getElementsByClassName("check")
// gets all of the elements with the class name "check" and adds them to an Array to be used later. This also updates automatically when new elements are created!

// ------------------------------

submitButton.addEventListener("click", () => {
  // this adds an event listener, listening to the "click" event on our submit button.

  let li = document.createElement("li");
  // creates a new <li> element that we can add text and styling to later on

  // ------------------------

  let span1 = document.createElement("span")
  // creates a new <span> element that we can add styling to

  span1.className = "check"
  // adds a class name of "check" to our <span>

  let checkMark = document.createTextNode("✓")
  // creates a new "text node" with a check mark

  span1.appendChild(checkMark)
  // appends the check mark onto the <span>

  li.appendChild(span1)
  // appends the <span> onto the <li>


  // ------------------------

  let inputValue = todoArea.value;
  // adds the value of our textarea (what we type in) to a variable to be used later

  let text = document.createTextNode(inputValue);
  // creates a new "text node" (basically just text to be added to html) to be used when adding the <li> to our DOM.

  li.appendChild(text);
  // appends the inputValue to our <li> so that the data can be showed in the DOM

  // ---------------------------

  let span = document.createElement("span")
  // creates a new <span> to be used as a hide button

  let textValue = document.createTextNode("\u00D7")
  // creates a new "text node" with the value of our little "x"

  span.className = "close"
  // adds a class of "close" to our <span>

  span.appendChild(textValue)
  // appends our little "x" to the span we created

  li.appendChild(span)
  // appends our span to the end of our <li>

  todoSpot.appendChild(li)
  // appends our full <li> with our text added to the <ul> that we defined at the beginning.

  // ----------------------------

  for (let i = 0; i < close.length; i++) {
    // creates a for loop to iterate over the "close" Array

    close[i].onclick = () => {
      // gives the currently iterated <li> an onclick value of the following function

      let div = close[i].parentElement
      // assigns a variable to the parent element of the button that was clicked

      div.style.display = "none"
      // makes the display CSS property of the entire <li> "none"
    }
  }

  for (let i = 0; i < check.length; i++) {
    // creates a for loop to iterate over the "check" Array

    check[i].onclick = () => {
      // gives the currently iterated <li> an onclick value of the following function

      let div = check[i].parentElement
      // assigns a variable to the parent element of the button that was clicked

      div.classList.toggle("checked")
      // toggles the class "checked" on or off when the button is clicked

    }
  }
})