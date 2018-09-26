// What's the error in the commented code below and what will be the error message

// for(var i = 0; i<20; i++ {
//   console.log(i);
// }

// The error for the above commented code be 'SyntaxError'


// What's the error in the code below and what will be the error message

var name = 'cat';
console.log(surName);
// The error in the code is that surName is not declared that this program can use. 
// 'ReferenceError' because surName is not defined and it can't get the value of that.

// What's the error in the code below and what will be the error message
var schoolName = "RSVP";
schoolName();
// The school name is not a function so the error message will be 'TypeError: schoolName is not a function'.


// What's the error in the code below and what will be the error message
function range(num) {
  console.log(num);
  range(num);
}
range(); // The error is that we make a recursion function but not set the value and the exit condition so the call stack exceded. That's why the error message be 'RangeError: Maximum call stack size exceeded'.


// What will be the output or if error what error will you get

function sayHello() {
  "use strict"
  for (i = 0; i < 3; i++) {
    console.log('Hello') // ReferenceError 'i' is not defined.
  }
}

sayHello();


// What will be the output or if error what error will you get

function Animal(name, doesEat, doesSleep) {
  this.name = name;
  this.eats = doesEat;
  this.sleeps = doesSleep;
}
var rabbit = Animal('Rabbit', true, true);
console.log(name) // Rabbit because we call "Animal" as a function so it sets name  as a global varibale.


// What will be the output or if error what error will you get

"use strict"
function Animal(name, doesEat, doesSleep) {
  this.name = name;
  this.eats = doesEat;
  this.sleeps = doesSleep;
}
var rabbit = Animal('Rabbit', true, true);
console.log(name) //'name' is not defined. Error is "RefreenceError". Because of using "use strict" the name is not declaread with the 'var' keyword.


// Solve This http://javascript.info/task/finally-or-code-after