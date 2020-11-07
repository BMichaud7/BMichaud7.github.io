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


// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')[0];
var newListEnd = document.createElement('li');
var newEndName = document.createTextNode('cream');
newListEnd.appendChild(newEndName);
list.appendChild(newListEnd);


// ADD NEW ITEM START OF LIST
var newListFirst = document.createElement('li');
var newFrontName = document.createTextNode('kale');
newListFirst.appendChild(newFrontName);
list.insertBefore(newListFirst, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var coolElement = document.querySelectorAll('li');
var i;
for(i = 0; i < coolElement.length; i++){
    coolElement[i].className = 'cool';
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var HeadingNumber = document.querySelector('h2');
var headingName = HeadingNumber.firstChild.nodeValue;
var total = coolElement.length;
var heading = headingName + '<span>' + total + '</span>';
HeadingNumber.innerHTML = heading;