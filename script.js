var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// var li = document.querySelectorAll("li");

// 1. If you click on a list item it toggles the class on and off 
  // target/cache list items
  // add 'toggle' class to all list items (even new ones)
  // add 'click' event listener to li

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
  //Create delete button 
  // create delete feature
  function remove() {
    ul.removeChild(li);
  }
  // Append delete button to list item
  

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 
  // Append delete button to new list item

function inputLength() {
	return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
	input.value = "";
}

function createDeleteButton() {
  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  ul.appendChild(deleteButton);
}

//////////////////////// Steal some ideas from this code   /////////////////////////////////////////////
function createLi(text) {
  function createElement(elementName, property, value) {
    const element = document.createElement(elementName);
    element[property] = value;
    return element;
  }

  function appendToLi(elementName, property, value) {
    const element = createElement(elementName, property, value);
    li.appendChild(element);
    return element;
  }

  const li = document.createElement('li');
  appendToLi('span', 'textContent', text);
  appendToLi('label', 'textContent', 'Confirmed')
  .appendChild(createElement('input', 'type', 'checkbox'));
  appendToLi('button', 'textContent', 'edit');
  appendToLi('button', 'textContent', 'remove');
  return li;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

// function toggleLineThrough() {
 
// }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// li.addEventListener("click", function() {

// });
