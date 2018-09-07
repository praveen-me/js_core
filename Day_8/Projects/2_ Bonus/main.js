// Tasks // change the background color of box1 to 'orange'
let box1 = document.getElementById('box1');
box1.style.cssText = 'background-color : orange';


// set the font size in box1s to 44px
let box1s = document.getElementById('box1s');
box1s.style.fontSize = '44px';


// shrink box2 by half
let box2 = document.getElementById('box2');
box2.setAttribute('style', `height : ${box2.clientHeight / 2}px; width : ${box2.clientWidth / 2}px;`);


// double the size of box2s
let box2s = document.getElementById('box2s');
box2s.setAttribute('style', `height : ${box2s.clientHeight * 2}px; width : ${box2s.clientWidth * 2}px;`);

// put a circle in the middle of box3 use the class named 'circle' you need to add <div class="circle"></div> in the innerHTML of the box
// **using .innerHTML**
let box3 = document.getElementById('box3');

// box3.innerHTML +=  `<div class="circle"></div>`;



// **using .appendChild()**

let circle = document.createElement('div');
circle.classList.add('circle');
box3.appendChild(circle);

//remove the circle from box3s
// **using .innerHTML**
// box3.innerHTML = '';

// **using .removeChild()**
box3.removeChild(circle);

// write a function for #box5 called clearFinished that will remove all the chores in the list that have the class "done".
let box5 = document.getElementById('box5');

let box5s = document.getElementById('box5s');

let addDoneTask = function(doneTask) {
  let ul = document.querySelector('#box5s > ul');
  ul.appendChild(doneTask);
} 

let clearFinished = function(box) {
  let tasks = document.querySelectorAll(`ul > li`);

  tasks.forEach(task => {
    if(task.classList.contains('done')) {
      addDoneTask(task);
    }
  });

}

clearFinished(box5);

//write a function for #box5 that takes all the completed chores and moves them to #box5s

// write a function called addChore that adds a new item to the list of chores, giving it the class "undone."
function addTaskInUnDone(box, task) {

  let ul = document.querySelector('ul');
  // let li = document.createElement('li');
  // li.classList.add('chore', 'undone');

  let li = `<li class="chore undone">${task} (undone)</li>`
  // li.textContent = task;
  return ul.innerHTML += li;

}

addTaskInUnDone(box5, 'Im am hungry');

  //do this task using the .appendChild() or innerHTML


//reverse the text in #box6
var box6 = document.getElementById('box6');

let reverseStringInBox = function(box) {
  let p = document.querySelector(`#box6 > p`);
  let text = p.innerText;
  let textInArray = text.split(' ');
  return textInArray;
}

console.log(reverseStringInBox(box6));



// put <em></em> tags around the word "keep" in #box6s



