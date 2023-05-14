function add_fields() {
  document.getElementById("myTable").insertRow(-1).innerHTML =
    '<tr><td><input type="text"><div class="checkbox"></div></td></tr>';
}

  function remove_fields() {
    document.getElementById("myTable").deleteRow(-1);
  }

  function printFunction() {
    window.print();
  };;


function addInnerElement() {
  // Get the div element by its ID
  var div = document.getElementById("myDiv");
  
  // Create a new inner HTML element
  var element = document.createElement("table");
  
  // Set the inner HTML of the element
  element.innerHTML = '<table><tr><td><h3><input type="text"></h3></td></tr><tr><td><input type="text"><div class="checkbox"></div></td></tr></table><div class="set-form"><input type="button" id="more_fields" onclick="add_fields();" value="Add Row" class="btn btn-info" /><input type="button" id="less_field" onclick="remove_fields();" value="Remove Row" class="btn btn-info btn-remove"><button onclick="printFunction()" class="btn-info print--btn">Print</button></div>';
  
  // Add the element to the div
  div.appendChild(element);
}

function removeLastInnerElement() {
  // Get the div element by its ID
  var div = document.getElementById("myDiv");
  
  // Get the last child element of the div
  var lastChild = div.lastChild;
  
  // If the last child is not an element, get the previous sibling
  while (lastChild && lastChild.nodeType !== 1) {
    lastChild = lastChild.previousSibling;
  }
  
  // Remove the last child element from the div
  div.removeChild(lastChild);
}