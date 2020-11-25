/*
      Name: Brendan Michaud
      Email: brendan_michaud@student.uml.edu
      Affiliation: Student at UMass Lowell in 91.461 GUI Programming I
      Date: 10/29/2020
      Description: First Javascript website
      Location: ~/bmichaud/public_html/HW5/script.js
      Github: https://bmichaud7.github.io/HW6/script.js
      91.461 Assignment: Creating an Interactive Dynamic Table
      Brendan Michaud, UMass Lowell Computer Science,
      Copyright (c) 2020 by Brendan Michaud. All rights reserved. May be
      freely copied or excerpted for educational purposes with credit to the author.
      -->
*/


//These number1-6 function prevent the user from entering e , and +

function submitauto() {
  // If the form is valid
  if( $("#formmulti").valid() == true ) {
    calc();
  }
}


function number1 () {
  //called when key is pressed in textbox
  $("#number1").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && e.which != 45 && e.which != 46 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg1").html("Digits Only").show().fadeOut(5000);
               return false;
    }
   });
}
function number2 () {
  //called when key is pressed in textbox
  $("#number2").keypress(function (e) {
    // console.log(e.which)
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && e.which != 45 && e.which != 46 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg2").html("Digits Only").show().fadeOut(5000);
               return false;
    }
   });
}
function number5 () {
  //called when key is pressed in textbox
  $("#number7").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && e.which != 45 && e.which != 46 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg3").html("Digits Only").show().fadeOut(5000);
               return false;
    }
   });
}
function number6() {
  //called when key is pressed in textbox
  $("#number6").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && e.which != 45 && e.which != 46 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg4").html("Digits Only").show().fadeOut(5000);
               return false;
    }
   });

}


//This function uses jQuery Validation plugin was having a problem with e and + so used another method above
function check() {

 //https://jqueryvalidation.org/digits-method/?__cf_chl_jschl_tk__=dc5443ad1c221c5a343ee7f0e476cd3751f9c953-1605047934-0-AQpnZpmZxNt4uQHrnc1B7lnQK_tW1VTgkfrPBPfBWfur944on3dpy0OJsFx1MpcKrvmaU2lS94MxftXODFfcU41tYxnbR_Y4C4FSD64Mq7AbnA01NvLf5W6hClEpcFLOlbagU__LI-g1NBoWLA9pOlUb4gZQY1q4TiBStelFPMKkVBZaL8NR8YwrM5Bpz74O9RTemCU30OX7dLs8dx8Kh9a3EV6o19M9vIRCL7HqJSZo-NFzrk1_1-wXK0sx-zJZhfp1uv33ydzdqyOEGX--n6jyu8PWYo5WMEXY_5WygWcx

  $("#formmulti").validate({
    // Rules for validating the form.

    
    rules: {
      number1: {
          required: true,
          number: true,
          max: 50,
          min: -50
      },
      number2: {
          required: true,
          number: true,
          max: 50,
          min: -50
      },
      number3: {
          required: true,
          number: true,
          max: 50,
          min: -50
      },
      number6: {
          required: true,
          number: true,
          max: 50,
          min: -50
      },
      number7: {
        required: true,
        number: true,
        max: 50,
        min: -50
    }
  },

  // Messages if error shows up
  messages: {
      number1: {
          required: "Please enter a starting X",
          number: "Please only enter numbers",
          max: "Please enter a number less than 50",
          min: "Please enter a number greater than -50"
      },
      number2: {
          required: "Please enter an ending X",
          number: "Please only enter numbers",
          max: "Please enter a number less than 50",
          min: "Please enter a number greater than -50"
      },
      number6: {
          required: "Please enter an ending Y",
          number: "Please only enter numbers",
          max: "Please enter a number less than 50",
          min: "Please enter a number greater than -50"
      },
      number7: {
        required: "Please enter a starting Y",
        number: "Please only enter numbers",
        max: "Please enter a number less than 50",
        min: "Please enter a number greater than -50"
    },
  },

    // This gets called when valid.
    submitHandler: function() {
      calc();
      console.log("TRUE")
      return true;
    },
      //else this
    errorPlacement: function(error, element) {
      error.insertAfter(element);
    },
    onkeyup: function(element, event ) {
      // Call the auto submit function on keyup, so the user does not have to
      // press the enter button.
      submitauto();
    }
  });
  // console.log("END")


  

}



// This function calculates the multiplication table.
//One function does everything same a hw5
function calc() {
  console.log("CALC")
  //https://stackoverflow.com/questions/39291997/how-to-block-e-in-input-type-number Blocks e,+
  var XStart_inputBox = document.getElementById("number1");
  var XStop_inputBox = document.getElementById("number2");
  var YStart_inputBox = document.getElementById("number7");
  var YStop_inputBox = document.getElementById("number6");

  console.log(XStart_inputBox.value)
  console.log(XStop_inputBox.value)
  console.log(YStart_inputBox.value)
  console.log(YStop_inputBox.value)

  var error_format = "";
  var X_start = Number(XStart_inputBox.value);
  var X_stop = Number(XStop_inputBox.value);
  var Y_start = Number(YStart_inputBox.value);
  var Y_stop = Number(YStop_inputBox.value);
  var format = "";
  var swapped_X = false;
  var swapped_Y = false;
  var blank = false;
  //Checks if var is empty. This is incase of jquery failing
  if(typeof X_start == 'undefined')
  {
    error_format = "<p>Start Range X no number entered </p>";
    $("#multi").html(error_format);
    blank = true;
  }
  if(typeof X_stop == 'undefined')
  {
    error_format = "<p>End Range Y no number entered </p>";
    $("#multi").html(error_format);
    blank = true;
  }
  if(typeof Y_start == 'undefined')
  {
    error_format = "<p>Start Range Y no number entered .</p>";
    $("#multi").html(error_format);
    blank = true;
  }

  if(typeof Y_stop == 'undefined')
  {
    error_format = "<p>End Range Y no number entered .</p>";
    $("#multi").html(error_format);
    blank = true;
  }
  if(blank == true){
    $("#multi").html(error_format);
    return;
  }
  // https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript Check if var is string
  //////
  if (X_start % 1 != 0) {
    format += "<p>X_Start Number was rounded down.</p><br>";
    X_start = Math.floor(X_start);
    console.log("ROUND1");
    $("#multi").html(error_format);
    //return;
  }
  if (X_stop % 1 != 0) {
    format += "<p>X_stop Number was rounded down.</p><br>";
    X_stop = Math.floor(X_stop);
    console.log("ROUND2");
    $("#multi").html(error_format);
    //return;
  }
  if (Y_start % 1 != 0) {
    format += "<p>Y_start Number was rounded down.</p><br>";
    Y_start = Math.floor(Y_start);
    console.log("ROUND3");
    $("#multi").html(error_format);
    //return;
  }
  if (Y_stop % 1 != 0) {
    format += "<p>Y_stop Number was rounded down.</p><br>";
    Y_stop = Math.floor(Y_stop);
    console.log("ROUND4");
    $("#multi").html(error_format);
    //return;
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
  //https://stackoverflow.com/questions/54152944/how-to-print-a-string-with-html-tags-as-html
  // prints to file
  $("#multi").html(format);

  return false;
}