/*
      Name: Brendan Michaud
      Email: brendan_michaud@student.uml.edu
      Affiliation: Student at UMass Lowell in 91.461 GUI Programming I
      Date: 11/25/2020
      Description: First Javascript website
      Location: ~/bmichaud/public_html/HW7/tabs.js
      Github: https://bmichaud7.github.io/HW7/tabs.js
      91.461 Assignment: Creating an Interactive Dynamic Table
      Brendan Michaud, UMass Lowell Computer Science,
      Copyright (c) 2020 by Brendan Michaud. All rights reserved. May be
      freely copied or excerpted for educational purposes with credit to the author.
      -->
*/

var tabCounter = 0;
//title of tab vars
var numx0 = 0;
var numx1 = 0;
var numy0 = 0;
var numy1 = 0;

//https://infoheap.com/jquery-ui-slider-and-input-text-box-two-way-binding/
//this slide function calls submitauto when on of the sliders is changes. Also makes sure the textbox == slider value
function slider() {
  $("#slider_X_start").slider({
    min: -50,
    max: 50,
    step: 1,
    slide: function (event, ui) {
      $("#number1").val(ui.value);
      submitauto();
    },
  });
  var initialValue = $("#slider_X_start").slider("option", "value");
  $("#number1").val(initialValue);
  $("#number1").change(function () {
    var oldVal = $("#slider_X_start").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -51 || newVal > 51) {
      $("#number1").val(oldVal);
    } else {
      $("#slider_X_start").slider("option", "value", newVal);
    }
  });

  $("#slider_X_stop").slider({
    min: -50,
    max: 50,
    step: 1,
    slide: function (event, ui) {
      $("#number2").val(ui.value);
      submitauto();
    },
  });
  var initialValue = $("#slider_X_stop").slider("option", "value");
  $("#number2").val(initialValue);
  $("#number2").change(function () {
    var oldVal = $("#slider_X_stop").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -51 || newVal > 51) {
      $("#number2").val(oldVal);
    } else {
      $("#slider_X_stop").slider("option", "value", newVal);
    }
  });

  $("#slider_Y_start").slider({
    min: -50,
    max: 50,
    step: 1,
    slide: function (event, ui) {
      $("#number7").val(ui.value);
      submitauto();
    },
  });
  var initialValue = $("#slider_Y_start").slider("option", "value");
  $("#number7").val(initialValue);
  $("#number7").change(function () {
    var oldVal = $("#slider_Y_start").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -51 || newVal > 51) {
      $("#number7").val(oldVal);
    } else {
      $("#slider_Y_start").slider("option", "value", newVal);
    }
  });

  $("#slider_Y_stop").slider({
    min: -50,
    max: 50,
    step: 1,
    slide: function (event, ui) {
      $("#number6").val(ui.value);
      submitauto();
    },
  });
  var initialValue = $("#slider_Y_stop").slider("option", "value");
  $("#number6").val(initialValue);
  $("#number6").change(function () {
    var oldVal = $("#slider_Y_stop").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -51 || newVal > 51) {
      $("#number6").val(oldVal);
    } else {
      $("#slider_Y_stop").slider("option", "value", newVal);
    }
  });
}

//This function add sets up the tabs  https://jqueryui.com/tabs/#manipulation
function add() {
  var tabTitle = $("#tab_title"),
    tabContent = $("#tab_content"),
    tabTemplate =
      "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";

  var tabs = $("#tabs").tabs();

  // Modal dialog init: custom buttons and a "close" callback resetting the form inside
  var dialog = $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Add: function () {
        addTab();
        $(this).dialog("close");
      },
      Cancel: function () {
        $(this).dialog("close");
      },
    },
    close: function () {
      form[0].reset();
    },
  });

  // AddTab form: calls addTab function on add tab button
  var form = dialog.find("form").on("submit", function (event) {
    addTab();
    dialog.dialog("close");
    event.preventDefault();
  });

  //adds tab, name is based on list gererated i.e.numx0...numy1
  // data is the chart string from save_table
  this.innerfunc = function addTab(data) {
    var tabname = numx0 + " by " + numx1 + ", " + numy0 + " by " + numy1;
    var label = "Tab " + tabname,
      id = "tabs-" + tabCounter,
      li = $(
        tabTemplate
          .replace(/#\{href\}/g, "#" + id)
          .replace(/#\{label\}/g, label)
      ),
      tabContentHtml = data;

    tabs.find(".ui-tabs-nav").append(li);
    tabs.append("<div id='" + id + "'>" + tabContentHtml + "</div>");
    tabs.tabs("refresh");
    tabCounter++;
  };

  // Close icon: removing the tab on click
  tabs.on("click", "span.ui-icon-close", function () {
    var panelId = $(this).closest("li").remove().attr("aria-controls");
    $("#" + panelId).remove();
    tabs.tabs("refresh");
  });

  tabs.on("keyup", function (event) {
    if (event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE) {
      var panelId = tabs.find(".ui-tabs-active").remove().attr("aria-controls");
      $("#" + panelId).remove();
      tabs.tabs("refresh");
    }
  });
}
//This calls save_table from outside scope
function addNewtab() {
  console.log("CALLING ADD");
  var o = new add();
  console.log("ABOUT TO SAVE");
  o.innerfunc(save_table());
}
//this removes all tabs
function removeTab() {
  var i;
  for (i = 0; i < tabCounter; i++) {
    removeTabID(i);
  }
}
// this removes tab based on id
function removeTabID(tabId) {
  var tabIdStr = "#tabs-" + tabId;
  var e = new add();
  // Remove the panel
  $(tabIdStr).remove();
  // Refresh the tabs widget
  $("#tabs").tabs("refresh");

  // Remove the tab
  var hrefStr = "a[href='" + tabIdStr + "']";
  $(hrefStr).closest("li").remove();
}

//same as calc but doesnt insert output into html. Just returns the table string nad sets title of tab vars
function save_table() {
  console.log("save_table");
  //https://stackoverflow.com/questions/39291997/how-to-block-e-in-input-type-number Blocks e,+
  var XStart_inputBox = document.getElementById("number1");
  var XStop_inputBox = document.getElementById("number2");
  var YStart_inputBox = document.getElementById("number7");
  var YStop_inputBox = document.getElementById("number6");

  console.log(XStart_inputBox.value);
  console.log(XStop_inputBox.value);
  console.log(YStart_inputBox.value);
  console.log(YStop_inputBox.value);

  var error_format = "";
  var X_start = Number(XStart_inputBox.value);
  var X_stop = Number(XStop_inputBox.value);
  var Y_start = Number(YStart_inputBox.value);
  var Y_stop = Number(YStop_inputBox.value);
  var format = "";
  var swapped_X = false;
  var swapped_Y = false;
  var blank = false;
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
    error_format = "<p>Unsupported Number.</p>";
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
  for (var i = 0; i <= Y_length; i++) {
    var array_temp = [];
    for (var j = 0; j <= X_length; j++) {
      // Calcs value of x * y
      var calc = X_index * Y_index;
      array_temp[j] = calc;
      X_index++;
    }
    // Load edited array to 2d array row by row
    array_2d[i] = array_temp;
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
  for (var i = 0; i <= Y_length; i++) {
    format += "<tr><td>" + Y_index + "</td>";
    for (var j = 0; j <= X_length; j++) {
      format += "<td>" + array_2d[i][j] + "</td>";
    }
    Y_index++;
    // Close  the ith row.
    format += "</tr>";
  }
  // we do this Y_length number of times. For each row. This fills in the rest of the rows
  // End table and end of format var
  format += "</table>";
  var format = '<div style="overflow-x:auto">' + format;
  format += "</div>";
  numx0 = X_start;
  numx1 = X_stop;
  numy0 = Y_start;
  numy1 = Y_stop;
  return format;
}
