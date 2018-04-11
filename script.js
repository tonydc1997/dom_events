var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
    
// Work on steps 2-3!
// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
  //Create delete button 

  // create delete feature
  // function removeLi() {
  //   ul.removeChild(li);
  // }

  function addDeleteButton() {
    const deleteButton = document.createElement("button");
    const li = ul.children;
    for (let i =0; i < li.length; i++) {
      li[i].appendChild(deleteButton);
      deleteButton.appendChild(document.createTextNode("Delete"));
      ul.appendChild(li[i]);
    }
   
  }

  addDeleteButton();
  // Append delete button to list item
  

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 
  // Append delete button to new list item


//////////////////////// Steal some ideas from this code   /////////////////////////////////////////////
// function createLi(text) {
//   function createElement(elementName, property, value) {
//     const element = document.createElement(elementName);
//     element[property] = value;
//     return element;
//   }

//   function appendToLi(elementName, property, value) {
//     const element = createElement(elementName, property, value);
//     li.appendChild(element);
//     return element;
//   }

//   const li = document.createElement('li');
//   appendToLi('span', 'textContent', text);
//   appendToLi('label', 'textContent', 'Confirmed')
//   .appendChild(createElement('input', 'type', 'checkbox'));
//   appendToLi('button', 'textContent', 'edit');
//   appendToLi('button', 'textContent', 'remove');
//   return li;
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////


function inputLength() {
	return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
	input.value = "";
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

// 1. If you click on a list item it toggles the class on and off 
function toggleLineThrough(event) {
  const li = event.target;
  li.classList.toggle("done");
}




button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleLineThrough);

ul.addEventListener("click", (event) => {
  if (event.target.tagName === 'BUTTON' && textContent === 'Delete') {
    const button = event.target;
    const li = event.target.parentNode;
    const ul = li.parentNode;
    function removeLi() {
      ul.removeChild(li);
    }
  }
});

// });
