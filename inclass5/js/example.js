// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')[0];
var newEndList = document.createElement('li');
var newEndText = document.createTextNode('cream');
newEndList.appendChild(newEndText);
list.appendChild(newEndList);


// ADD NEW ITEM START OF LIST
var newFrontList = document.createElement('li');
var newFrontText = document.createTextNode('kale');
newFrontList.appendChild(newFrontText);
list.insertBefore(newFrontList, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var elCool = document.querySelectorAll('li');
var i;
for(i = 0; i < elCool.length; i++){
    elCool[i].className = 'cool';
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var addNumberHeading = document.querySelector('h2');
var headingText = addNumberHeading.firstChild.nodeValue;
var totalListItems = elCool.length;
var newHeading = headingText + '<span>' + totalListItems + '</span>';
addNumberHeading.innerHTML = newHeading;