function add_fields() {
  document.getElementById("myTable").insertRow(-1).innerHTML =
    '<tr><td><div class="tabledata"><input type="text"></div></td><td><div class="tabledata"><input type="text"><input type="text"></div></td><td><div class="tabledata"><input type="text"><input type="text"></div></td><td><div class="tabledata"><input type="text"><input type="text"></div></td><td><div class="tabledata"><input type="text"><input type="text"></div></td><td><div class="tabledata"><input type="text"><input type="text"></div></td><td><div class="tabledata"><input type="text"><input type="text"></div></td><td><div class="tabledata"><input type="text"><input type="text"></div></td></tr>';
}

  function remove_fields() {
    document.getElementById("myTable").deleteRow(-1);
  }

  function printFunction() {
    window.print();
  }