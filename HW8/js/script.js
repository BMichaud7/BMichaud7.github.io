/*    <!--
      Name: Brendan Michaud
      Email: brendan_michaud@student.uml.edu
      Affiliation: Student at UMass Lowell in 91.461 GUI Programming I
      Date: 12/17/2020
       Location: ~/bmichaud/public_html/HW8/index.html
      Github: https://bmichaud7.github.io/HW8/script.js
      91.461 Assignment: Scrabble
      Brendan Michaud, UMass Lowell Computer Science,
      Copyright (c) 2020 by Brendan Michaud. All rights reserved. May be
      freely copied or excerpted for educational purposes with credit to the author.
      -->
*/
function Setup() {
  //code from Jesse Heines Scrabble_Pieces_AssociativeArray_Jesse.js
  ScrabbleTiles["A"] = {
    value: 1,
    original_distribution: 9,
    number_remaining: 9,
  };
  ScrabbleTiles["B"] = {
    value: 3,
    original_distribution: 2,
    number_remaining: 2,
  };
  ScrabbleTiles["C"] = {
    value: 3,
    original_distribution: 2,
    number_remaining: 2,
  };
  ScrabbleTiles["D"] = {
    value: 2,
    original_distribution: 4,
    number_remaining: 4,
  };
  ScrabbleTiles["E"] = {
    value: 1,
    original_distribution: 12,
    number_remaining: 12,
  };
  ScrabbleTiles["F"] = {
    value: 4,
    original_distribution: 2,
    number_remaining: 2,
  };
  ScrabbleTiles["G"] = {
    value: 2,
    original_distribution: 3,
    number_remaining: 3,
  };
  ScrabbleTiles["H"] = {
    value: 4,
    original_distribution: 2,
    number_remaining: 2,
  };
  ScrabbleTiles["I"] = {
    value: 1,
    original_distribution: 9,
    number_remaining: 9,
  };
  ScrabbleTiles["J"] = {
    value: 8,
    original_distribution: 1,
    number_remaining: 1,
  };
  ScrabbleTiles["K"] = {
    value: 5,
    original_distribution: 1,
    number_remaining: 1,
  };
  ScrabbleTiles["L"] = {
    value: 1,
    original_distribution: 4,
    number_remaining: 4,
  };
  ScrabbleTiles["M"] = {
    value: 3,
    original_distribution: 2,
    number_remaining: 2,
  };
  ScrabbleTiles["N"] = {
    value: 1,
    original_distribution: 6,
    number_remaining: 6,
  };
  ScrabbleTiles["O"] = {
    value: 1,
    original_distribution: 8,
    number_remaining: 8,
  };
  ScrabbleTiles["P"] = {
    value: 3,
    original_distribution: 2,
    number_remaining: 2,
  };
  ScrabbleTiles["Q"] = {
    value: 10,
    original_distribution: 1,
    number_remaining: 1,
  };
  ScrabbleTiles["R"] = {
    value: 1,
    original_distribution: 6,
    number_remaining: 6,
  };
  ScrabbleTiles["S"] = {
    value: 1,
    original_distribution: 4,
    number_remaining: 4,
  };
  ScrabbleTiles["T"] = {
    value: 1,
    original_distribution: 6,
    number_remaining: 6,
  };
  ScrabbleTiles["U"] = {
    value: 1,
    original_distribution: 4,
    number_remaining: 4,
  };
  ScrabbleTiles["V"] = {
    value: 4,
    original_distribution: 2,
    number_remaining: 2,
  };
  ScrabbleTiles["W"] = {
    value: 4,
    original_distribution: 2,
    number_remaining: 2,
  };
  ScrabbleTiles["X"] = {
    value: 8,
    original_distribution: 1,
    number_remaining: 1,
  };
  ScrabbleTiles["Y"] = {
    value: 4,
    original_distribution: 2,
    number_remaining: 2,
  };
  ScrabbleTiles["Z"] = {
    value: 10,
    original_distribution: 1,
    number_remaining: 1,
  };
  ScrabbleTiles["_"] = {
    value: 0,
    original_distribution: 2,
    number_remaining: 2,
  };
  //Fills users hand/hand
  GetTiles();
}

var ScrabbleTiles = [];
//holds info of scrabble tiles
var IMAGES = {
  A: "Scrabble_Tile_A.jpg",
  B: "Scrabble_Tile_B.jpg",
  C: "Scrabble_Tile_C.jpg",
  D: "Scrabble_Tile_D.jpg",
  E: "Scrabble_Tile_E.jpg",
  F: "Scrabble_Tile_F.jpg",
  G: "Scrabble_Tile_G.jpg",
  H: "Scrabble_Tile_H.jpg",
  I: "Scrabble_Tile_I.jpg",
  J: "Scrabble_Tile_J.jpg",
  K: "Scrabble_Tile_K.jpg",
  L: "Scrabble_Tile_L.jpg",
  M: "Scrabble_Tile_M.jpg",
  N: "Scrabble_Tile_N.jpg",
  O: "Scrabble_Tile_O.jpg",
  P: "Scrabble_Tile_P.jpg",
  Q: "Scrabble_Tile_Q.jpg",
  R: "Scrabble_Tile_R.jpg",
  S: "Scrabble_Tile_S.jpg",
  T: "Scrabble_Tile_T.jpg",
  U: "Scrabble_Tile_U.jpg",
  V: "Scrabble_Tile_V.jpg",
  W: "Scrabble_Tile_W.jpg",
  X: "Scrabble_Tile_X.jpg",
  Y: "Scrabble_Tile_Y.jpg",
  Z: "Scrabble_Tile_Z.jpg",
  _: "Scrabble_Tile_Blank.jpg",
};

// dictionary
var dictarray = {};

$(function () {
  ButtonListeners();

  //adding event listener for buttons
  Setup();

  //setting up scrabble the game
  DragAndDrop();

  //setting up drag and drop
  Dictionary();

  //setting up the dictonary for checking if current word is a word
});

// sets up the event listeners for buttons

function ButtonListeners() {
  //event listeners for the buttons
  $("#submitButton").click(function () {
    SubmitClick();
  });

  $("#resetButton").click(function () {
    ResetAllLetters();
  });

  $("#newGame").click(function () {
    ResetNewGame();
  });
}

//  dictionary to array


//https://johnresig.com/blog/dictionary-lookups-in-javascript/
function Dictionary() {
  //request the text dictionary
  $.get(
    "https:raw.githubusercontent.com/BMichaud7/BMichaud7.github.io/master/dict.txt",
    function (txt, status) {
      if (status == "success") {
        // Get an array of all the words
        var words = txt.split("\n");

        //add word to dict
        for (var i = 0; i < words.length; i++) {
          dictarray[words[i]] = true;
        }
      }
    }
  );
}

// sets up drag and drop 
//https://api.jqueryui.com/droppable/#event-drop
function DragAndDrop() {
  $(".selector").draggable({
    delay: 100,
    containment: "body",
    revert: "invalid",

    //reverts to hand if not placed on board
    stack: ".selector",

    //keeps draggable on top of all of the elements
    drag: function (event, ui) {
      if (
        $(this).parent().attr("name") == "_" &&
        $(this).parent().parent().attr("id") == "board"
      ) {
        $(this).parent().removeAttr("name");
        $(this).attr("id", "_");
        $(this).attr("src", "Scrabble_Tiles/" + GetImage("_"));
      }
    },
  });
//https://api.jqueryui.com/droppable/#event-drop
  $(".spot").droppable({
    //droppable event for the spots on board
    tolerance: "intersect",
    drop: function (event, ui) {
      //drop event
      $(ui.draggable)
        .detach()
        .css({ top: 0, left: 0 })
        .appendTo("#" + this.id);
      $("#" + this.id).droppable("disable");
      MakespotsDroppable();
      //resets spots on board that have no tiles and are no longer droppable
      if (ui.draggable.attr("id") == "_") {
        PromptFor_(ui.draggable);
      }
    },
  });
//https://api.jqueryui.com/droppable/#event-drop
  $("#hand").droppable({
    //making hand droppable
    drop: function (event, ui) {
      $(ui.draggable)
        .detach()
        .css({ top: 0, left: 0 })
        .appendTo("#" + ui.draggable.attr("name"));
      //code from Barry Pitman on stackoverflow.
      MakespotsDroppable();
    },
  });
}

// Prompts the user letter thay want to use for a _ tile. Keeps asking until user enters A-Z
function PromptFor_(tile) {
  do {
    tileRequested = prompt("Enter a letter for the _ Title");

    if (
      tileRequested != null &&
      tileRequested.length == 1 &&
      tileRequested.match(/[a-zA-Z]+/g)
    ) {
      tileRequested = tileRequested.toUpperCase();
      $(tile).parent().attr("name", "_");
      //used for resetting tiles
      $(tile).attr("src", "Scrabble_Tiles/" + GetImage(tileRequested.trim()));
      $(tile).attr("id", tileRequested);
      //changing _ tile to requested tile
    }
  } while (
    tileRequested == null ||
    tileRequested.length > 1 ||
    tileRequested.match(/[a-zA-Z]+/g) == null
  );

  //looping while user does not enter a valid response. This means the user needs to enter just A-Z
}

// removes _ tile from board
function Remove_() {
  $("#board div").each(function (index) {
    //looping through each div in #board div
    if ($(this).attr("name")) {
      //checking if div has a name attribute
      $(this).removeAttr("name");
      //removing attribute from div
    }
  });
}

// Sets up ScrabbleTiles object and gets tles to add to the hand

//This gets images of the inputed letter
function GetImage(letter) {
  if (letter == "A") {
    return IMAGES.A;
  } else if (letter == "B") {
    return IMAGES.B;
  } else if (letter == "C") {
    return IMAGES.C;
  } else if (letter == "D") {
    return IMAGES.D;
  } else if (letter == "E") {
    return IMAGES.E;
  } else if (letter == "F") {
    return IMAGES.F;
  } else if (letter == "G") {
    return IMAGES.G;
  } else if (letter == "H") {
    return IMAGES.H;
  } else if (letter == "I") {
    return IMAGES.I;
  } else if (letter == "J") {
    return IMAGES.J;
  } else if (letter == "K") {
    return IMAGES.K;
  } else if (letter == "L") {
    return IMAGES.L;
  } else if (letter == "M") {
    return IMAGES.M;
  } else if (letter == "N") {
    return IMAGES.N;
  } else if (letter == "O") {
    return IMAGES.O;
  } else if (letter == "P") {
    return IMAGES.P;
  } else if (letter == "Q") {
    return IMAGES.Q;
  } else if (letter == "R") {
    return IMAGES.R;
  } else if (letter == "S") {
    return IMAGES.S;
  } else if (letter == "T") {
    return IMAGES.T;
  } else if (letter == "U") {
    return IMAGES.U;
  } else if (letter == "V") {
    return IMAGES.V;
  } else if (letter == "W") {
    return IMAGES.W;
  } else if (letter == "X") {
    return IMAGES.X;
  } else if (letter == "Y") {
    return IMAGES.Y;
  } else if (letter == "Z") {
    return IMAGES.Z;
  } else if (letter == "_") {
    return IMAGES._;
  }
}

// gets the tiles to add to the player hand for every valid word played it fills the players hand
function GetTiles() {
  for (var i = 1; i <= 7; i++) {
    //looping 7 times
    if ($("#tilespawn" + i).has("img").length == 0) {
      TileTohand("#tilespawn" + i);
      //adding tile
    }
  }
}

function TileTohand(div) {
  var tile = GetRandom();
  //getting a random tile based on total remaining tiles
  var num = GetDigitFromString(div);
  //gets the digit in the string for tilespawnNum

  if (tile != null) {
    img = $(
      "<img id='" + tile + "' class='selector' name='tilespawn" + num + "'>"
    );
    //creating img tag
    img.attr("src", "Scrabble_Tiles/" + GetImage(tile));
    //adding img src
    img.appendTo($(div));
    //appending to div
  }
}

// gets the digits from a string
function GetDigitFromString(word) {
  return word.match(/\d+/);
}

//gets a random tile based on total remaining tiles left.
function GetRandom() {
  var remaining = GetNumTiles();
  //gets the remaining tiles

  if (remaining == 0 && $("#hand div img").length == 0) {
    //if there are no more tiles game over
    GameOver();
  }

  var tileNumber = Math.floor(Math.random() * remaining) + 1;
  //random num between 1 and remaining number of tiles

  for (var letter in ScrabbleTiles) {
    tileNumber = tileNumber - ScrabbleTiles[letter].number_remaining;

    if (tileNumber <= 0 && letter != null) {
      ScrabbleTiles[letter].number_remaining -= 1;
      //subtract the tile used from number_remaining
      return letter;
    }
  }
}

// calculates the number of remaining tiles based on the total remaining tiles
function GetNumTiles() {
  var tileCount = 0;

  for (var key in ScrabbleTiles) {
    tileCount += ScrabbleTiles[key].number_remaining;
  }

  return tileCount;
}

// calculates scores of valid words.
function SubmitClick() {
  var scoreTotalDiv = +$("#scoreTotalDiv").text();
  var word = GetWord();
  var scoreofWord = 0;

  if (!validWord(word)) {
    //resets letters if invalid word
    ResetAllLetters();
    $("#scoreofWord").text(0);
  } else {
    //calculating all scores and updating the html
    scoreofWord = calcscore();
    $("#scoreofWord").text(scoreofWord);
    scoreTotalDiv = +$("#scoreTotalDiv").text();
    scoreTotalDiv += scoreofWord;
    $("#scoreTotalDiv").text(scoreTotalDiv);
    $("#board img").remove();
    //removing used tiles
    GetTiles();
    //getting new tiles
    DragAndDrop();
    MakespotsDroppable();
    //making spots droppable
    Remove_();
    //removes name  _ if any
  }
}

//https://johnresig.com/blog/dictionary-lookups-in-javascript/

// Gets the word on the board for dictionary 
function GetWord() {
  var word = "";

  for (var i = 1; i <= $("#board div").length; i++) {
    //looping through spots on board

    $("#spot" + i).has("img").length
      ? (word += $("#spot" + i + " img").attr("id"))
      : (word += " ");
    //if there is an image add the letter to the word else add white space
  }

  return word.trim();
}

// checks the dictionary if word is valid
function validWord(word) {
  return dictarray[word] ? true : false;
}

// resets all the letters on the board done after every turn.
function ResetAllLetters() {
  for (var i = 1; i <= $("#board div").length; i++) {
    //loop through spots on board

    if ($("#spot" + i).has("img").length) {
      if ($("#spot" + i).attr("name") == "_") {
        //checking for _ letter
        $("#spot" + i).removeAttr("name");
        //removing name attr _
        $("#spot" + i)
          .children("img")
          .attr("id", "_");
        //setting img id to _
        $("#spot" + i)
          .children("img")
          .attr("src", "Scrabble_Tiles/" + GetImage("_"));
        //setting src to _ tile
      }
      ResetLetter($("#spot" + i + " img"));
      //reset letter
      $("#spot" + i).droppable("enable");
      //make sure droppable is enabled
    }
  }
}

// detaches from spot div puts on the board
function ResetLetter(img) {
  var handLetterId = "#" + img.attr("name");
  img.detach().css({ top: 0, left: 0 }).appendTo(handLetterId);
}

// checks if spots have had droppable if not it enables it.
function MakespotsDroppable() {
  var disabled = "disabled";

  for (var i = 1; i <= $("#board div").length; i++) {
    if (
      $("#spot" + i)
        .attr("class")
        .search(disabled) > 0 &&
      $("#spot" + i).has("img").length == 0
    ) {
      $("#spot" + i).droppable("enable");
    }
  }
}

//calculates the word score using bonus spaces
function calcscore() {
  var id;
  var scoreofWord = 0;
  var isDoublescoreofWord = false;

  $("#board div img").each(function (index) {
    //loops through each tile on board
    id = this.id;

    if ($(this).parent().attr("id") == "spot2") {
      //spot2 is a double word score
      scoreofWord += ScrabbleTiles[id].value;
      isDoublescoreofWord = true;
    } else if ($(this).parent().attr("id") == "spot6") {
      //spot6 is a triple letter score
      scoreofWord += ScrabbleTiles[id].value * 3;
    } else {
      scoreofWord += ScrabbleTiles[id].value;
    }
  });
  //double word tile
  if (isDoublescoreofWord) {
    scoreofWord = scoreofWord * 2;
  }

  return scoreofWord;
}

// starts a new game and resets current game
function ResetNewGame() {
  if ($("#gameOver")) {
    $("#gameOver").remove();
  }

  $("#submitButton").prop("disabled", false);
  //disabling submit button
  $("#resetButton").prop("disabled", false);
  //disabling reset button

  //resetting fields in html
 
  $("#scoreofWord").text(0);
  $("#scoreTotalDiv").text(0);

  for (var i = 1; i <= $("#board div").length; i++) {
    //removing tiles from board
    $("#board div img").remove();
  }

  for (var i = 1; i <= 7; i++) {
    //removing tiles from hand
    $("#hand div img").remove();
  }

  Setup();
  //setting up scrabble
  DragAndDrop();
  //setting up drag and drop
  MakespotsDroppable();
  //re-enabling droppable spots
}

// Game over
function GameOver() {
  $("body").prepend("<p id='gameOver'><b>Game is Now Over. You WON!<b><p>");
  $("#submitButton").prop("disabled", true);
  //disable submit button
  $("#resetButton").prop("disabled", true);
  //disable reset button
}
