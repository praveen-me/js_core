//Select the section with an id of container without using querySelector.
// var elm = document.getElementById('container');
//

//Select the section with an id of container using querySelector.
var elm = document.querySelector('#container');

console.log(elm,'using query');

//Select all of the list items with a class of "second".
let secondItems = document.querySelectorAll('.second');

//Select a list item with a class of third, but only the list item inside of the ol tag.
let thirdItemSecond = document.querySelector('ol > .second');



//Give the section with an id of container the text "Hello!".
elm.innerHTML += 'Hello';

//Add the class main to the div with a class of footer.
let footer = document.querySelector('.footer');
footer.classList.add('main');


//Remove the class main on the div with a class of footer.
footer.classList.remove('main');

//Create a new li element.
let newLi = document.createElement('li');


//Give the li the text "four".
newLi.appendChild(document.createTextNode('four'));


//Append the li to the ul element.
let unorderedList = document.querySelector('ul');
unorderedList.appendChild(newLi);


//Loop over all of the list inside the ol tag and give them a background color of "green".
let liInsideOL = document.querySelectorAll('ol > li');
liInsideOL.forEach( li => li.style.backgroundColor = 'green');



//Remove the div with a class of footer.
document.body.removeChild(footer);