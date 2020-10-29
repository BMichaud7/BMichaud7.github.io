/*
      Name: Brendan Michaud
      Email: brendan_michaud@student.uml.edu
      Affiliation: Student at UMass Lowell in 91.461 GUI Programming I
      Date: 10/29/2020
      Description: First Javascript website
      Location: ~/bmichaud/public_html/HW5/script.js
      Github: https://bmichaud7.github.io/HW5/script.js
      91.461 Assignment: Creating an Interactive Dynamic Table
      Brendan Michaud, UMass Lowell Computer Science,
      Copyright (c) 2020 by Brendan Michaud. All rights reserved. May be
      freely copied or excerpted for educational purposes with credit to the author.
      -->
*/
//One function does everything
function calc() {
  //https://stackoverflow.com/questions/39291997/how-to-block-e-in-input-type-number Blocks e,+,-
  var XStart_inputBox = document.getElementById("X_start");
  var XStop_inputBox = document.getElementById("X_stop");
  var YStart_inputBox = document.getElementById("Y_start");
  var YStop_inputBox = document.getElementById("Y_stop");
  var invalidChars = ["+", "e"];

  XStart_inputBox.addEventListener("input", function () {
    this.value = this.value.replace(/[e\+]/gi, "");
  });

  XStart_inputBox.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
  XStop_inputBox.addEventListener("input", function () {
    this.value = this.value.replace(/[e\+]/gi, "");
  });

  XStop_inputBox.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
  YStart_inputBox.addEventListener("input", function () {
    this.value = this.value.replace(/[e\+]/gi, "");
  });

  YStart_inputBox.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
  YStop_inputBox.addEventListener("input", function () {
    this.value = this.value.replace(/[e\+]/gi, "");
  });

  YStop_inputBox.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });

  var X_start = Number(XStart_inputBox.value);
  var X_stop = Number(XStop_inputBox.value);
  var Y_start = Number(YStart_inputBox.value);
  var Y_stop = Number(YStop_inputBox.value);
  var format = "";
  var swapped_X = false;
  var swapped_Y = false;
  // https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript Check if var is string
  //////
  if (X_start % 1 != 0) {
    format += "<p>Number was rounded down.</p><br>";
    X_start = Math.floor(X_start);
    $("#multi").html(error_format);
    return;
  }
  if (X_stop % 1 != 0) {
    format += "<p>Number was rounded down.</p><br>";
    X_stop = Math.floor(X_stop);
    $("#multi").html(error_format);
    return;
  }
  if (Y_start % 1 != 0) {
    format += "<p>Number was rounded down.</p><br>";
    Y_start = Math.floor(Y_start);
    $("#multi").html(error_format);
    return;
  }
  if (Y_stop % 1 != 0) {
    format += "<p>Number was rounded down.</p><br>";
    Y_stop = Math.floor(Y_stop);
    $("#multi").html(error_format);
    return;
  }
  // swap X_start and X_stop if (X_start > X_stop)
  if (X_start > X_stop) {
    var temp_X = X_start;
    X_start = X_stop;
    X_stop = temp_X;
    swapped_X = true;
  }
  // Also swap Y
  if (Y_start > Y_stop) {
    var temp_Y = Y_start;
    Y_start = Y_stop;
    Y_stop = temp_Y;
    swapped_Y = true;
  }
  //Prints error message if numbers where switched in addition to table
  if (swapped_X) {
    format += "<p>Numbers of X were swapped.</p><br>";
  }
  if (swapped_Y) {
    format += "<p>Numbers of Y were swapped.</p><br>";
  }
  if (Y_start < -50 || Y_stop > 50 || X_start < -50 || X_stop > 50) {
    var error_format = "<p>Unsupported Number.</p>";
    $("#multi").html(error_format);
    return;
  }
  // 2d array
  var array_2d = {};
  // Indexes for the 2D array.
  var X_index = X_start;
  var Y_index = Y_start;
  var X_length = Math.abs(X_stop - X_start);
  var Y_length = Math.abs(Y_stop - Y_start);
  for (var x = 0; x <= Y_length; x++) {
    var array_temp = [];
    for (var y = 0; y <= X_length; y++) {
      // Calculate the given spot in the multiplication table.
      var calc = X_index * Y_index;
      array_temp[y] = calc;
      X_index++;
    }
    // Load edited array to 2d array row by row
    array_2d[x] = array_temp;
    X_index = X_start; // set to start at end of every loop/ row
    Y_index++; //inc row number
  }
  //prints table to console for debug
  console.log(array_2d);
  // Format the table
  // Formating source https://stackoverflow.com/questions/20748770/creating-html-table-from-multidimensional-javascript-array
  // Could use append or just create a string.
  // add to string the X's numbers x start to x stop
  // format is string that gets printed to multi class in html.
  format += "<table><tr><td>X --> </td>";

  // Now fill out the rest of the first row and only the first
  for (var X_num = X_start; X_num <= X_stop; X_num++) {
    format += "<td>" + X_num + "</td>";
  }
  // Closes row
  format += "</tr>";
  var Y_index = Y_start;
  // For each row add the Y num aka Y start to Y stop to the start.
  // Then we add the the number we calc to be the answer Ynumth and Xnumth. This is our result we at to the
  // <td> </td> i.e. the table cell.
  for (var Y_num = 0; Y_num <= Y_length; Y_num++) {
    format += "<tr><td>" + Y_index + "</td>";
    for (var y = 0; y <= X_length; y++) {
      format += "<td>" + array_2d[Y_num][y] + "</td>";
    }
    Y_index++;
    // Close  the ith row.
    format += "</tr>";
  }
  // we do this Y_length number of times. For each row. This fills in the rest of the rows
  // End table and end of format var
  format += "</table>";
  //https://stackoverflow.com/questions/54152944/how-to-print-a-string-with-html-tags-as-html
  // prints to file
  $("#multi").html(format);

  return false;
}
