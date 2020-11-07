//  File: example.js
//  GUI 1
//  Brendan Michaud, UMass Lowell Computer Science, bmichaud@cs.uml.edu
//  Copyright (c) 2020 by Jesse M. Heines. All rights reserved. May be
// freely
//  copied or excerpted for educational purposes with credit to the
// author.
//  updated by BM on 11-05-2020 at 4:30 pm
    // Github: https://bmichaud7.github.io/Inclass5/example.html
// -->


var list = document.getElementsByTagName("ul")[0]; //make var that is list i.e. getElementsByTagName("ul")[0]
// ADD NEW ITEM TO END OF LIST
var newLast = document.createElement("li");
var newLastName = document.createTextNode("cream");
newLast.appendChild(newLastName);
list.appendChild(newLast);

// ADD NEW ITEM START OF LIST
var newFirst = document.createElement("li");
var newFirstName = document.createTextNode("kale");
newFirst.appendChild(newFirstName);
list.insertBefore(newFirst, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var itemsInList = document.querySelectorAll("li");
var i;
for (i = 0; i < itemsInList.length; i++) {
  itemsInList[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var heading = document.querySelector("h2"); 
var headingName = heading.firstChild.nodeValue;
var total = itemsInList.length; 

var headingNew = headingName + "<span>" + total + "</span>";
heading.innerHTML = headingNew;
