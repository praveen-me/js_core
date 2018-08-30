// Variables
var name = prompt("Your Name");
var age = 18;
var isInCollege = true;

if(name === '') {
    name = 'unknown';
}

//Output Statement
alert(`Hello ${name}
 Age: ${age}
College: ${isInCollege}`);


// Else If Ladder
// var operator;

// if(operator === '+') {
// 	console.log('sum');
// } else if(operator === '-') {
// 	console.log('diffrence');
// } else if(operator === '*') {
// 	console.log('multiplication');
// } else {
// 	console.log('division')
// }

// For Lopp
// for(let i = 1; i <= 20; i++) {
// 	console.log(i);
// }


// Funtion
function add(a, b) {
    return a+b;
}

function multiply(a, b) {
    return a*b;
}

add(2,5);

multiply(2,5);