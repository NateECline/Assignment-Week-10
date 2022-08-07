function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById("form_name");
    cell2.innerHTML = document.getElementById("form_lastname");
    cell3.innerHTML = document.getElementById("form_tag");
    cell4.innerHTML = document.getElementById("form_role");
  }