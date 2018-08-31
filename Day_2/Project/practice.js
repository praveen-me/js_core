// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”

// function validatePassword() {
//     var password = prompt('Enter Your Password');
//     var confirmPassword = prompt('Confirm Password');
//     if(password === confirmPassword) {
//         alert('Password Validated');
//     } else {
//         alert('Password do not match');
//     }
// }

// validatePassword();

// Find the output of the following
// Logical AND operation
// true  && true; -> true 
// true  && false; -> false
// false && true; -> fasle
// false && false; -> false

// Logical OR operation
// true  || true; -> true
// true  || false; -> true
// false || true; -> true
// false || false; -> false

// "foo" && "bar";  -> "bar"
// "bar" && "foo";  -> "foo"
// "foo" && "";     ->  ""
// ""    && "foo";  -> ""

// "foo" || "bar"; -> "foo"
// "bar" || "foo";  -> "bar"
// "foo" || ""; -> "foo"
// ""    || "foo"; -> "foo"






// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.

// function calculate(a,b) {
//     console.log('Sum:',a+b)
//     console.log('Difference:',a-b)
//     console.log('Product:',a*b)
//     console.log('Division:',a/b)
// }

// calculate(10,2);

// Function to display a number if user enters negative number

// function showNegativeAlert() {
//     var number = prompt("Enter a number");
//     if(number < 0) {
//         alert('Your number is negative.');
//     } else {
//         alert('Your number is postive');
//     }
// }

// showNegativeAlert();

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// var sum = 0;
// for(let i = 1; i < 1000; i++) {
//     if(i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//     }
// }

// console.log('Sum is',sum);

// If user enters positive number, that number won't be displayed

// function enterPositive() {
//     var number = prompt('Enter a number');
//     if(number > 0) {
//         alert(`Your number is ${number}.`);
//     }
// }

// enterPositive();

// Function to check whether an integer entered by the user is odd or even

// function checkEvenOdd() {
//     var number = prompt('Enter a number');
//     if(number % 2 === 0) {
//         alert(`${number} number is even.`);
//     } else {
//         alert(`${number} number is odd.`);
//     }
// }

// checkEvenOdd();


// Function to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12

// function checkRelation(a,b) {
//     console.log(`${a} == ${b} : ${a == b}`);
//     console.log(`${a} > ${b} : ${a > b}`);
//     console.log(`${a} < ${b} : ${a < b}`);
// }

// checkRelation(10, 20);

// Function to Check Whether a Character is Vowel or Consonant

// function checkAlphabet() {
//     var character = prompt('Enter an alphabet');
//     if((character == 'a') || (character == 'e') || (character == 'i') || (character == 'o') || (character == 'u')) {
//         alert(`${character} is vowel.`);
//     } else {
//         alert(`${character} is consonant.`);
//     }
// }

// checkAlphabet();


// Funnction to Find the Largest Number Among Three Numbers

// function findLargest(num1, num2, num3) {
    
//     // return Math.max(num1, num2, num3);

//     var max = 0;
//     if(num1 < num2 && num3 < num2) {
//         max = num2;
//     } else if(num3 < num1){
//         max = num1;
//     } else {
//         max = num3;    
//     }

//     return max;
// } 


// console.log(`Largest num be ${findLargest(3,2,1)}`);

//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to .
// - TWO, if num is equal to .
// - THREE, if num is equal to .
// - FOUR, if num is equal to .
// - FIVE, if num is equal to .
// - SIX, if num is equal to .
// - SEVEN, if num is equal to .
// - EIGHT, if num is equal to .
// - NINE, if num is equal to .
// - PLEASE TRY AGAIN, if  is none of the above.



// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30




// Function to generate Multiplication Table of a given number (use prompt for number input)
// function generateTable() {
//     var number = prompt('Enter a number');
//     var tableString = '';
//     for(var i = 1; i <= 10; i++) {
//         tableString += `\n ${number} X ${i} = ${number*1}`
//     }
//     alert(tableString);
// }

// generateTable();

// Function to calculate the Factorial of a Number

// function calcFactorial(x) {
//     if(x==0) {
//         return 1;
//      }
//      return x * calcFactorial(x-1);
// }

// console.log(`Factorial is ${calcFactorial(5)}`);

// Output: var x = 10 + "1"; console.log(x); typeof x;

// 'string'

//  Solve: 225 % 6 = ?

// 3


// Take two numbers and what to do with that number from user.
// Define an object with these function (add, sub, multiply, divide). Perform the operation
function calculator() {
    var val1 = prompt('Enter first number');
    var val2 = prompt("Enter second number");

    var calculateOperations = {
        add(num1, num2) {
            return val1+val2;
        }
    }

    alert(calculateOperations.add(val1,val2));

}

calculator();



// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

