// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
function tellFortune(childNum, partnerName, location, jobTitle) {
  return `Your care a ${jobTitle} in ${location}, and married to ${partnerName} with ${childNum} kids.`;
}

console.log(tellFortune(2, 'Sikha', 'Mumbai', 'Project Manager'));

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(puppyAge, mansAge) {
  if(mansAge !== undefined) {
    console.log(mansAge*1);
  }
  return `Your doggie is ${7*puppyAge} years old in dog years`;
}

console.log(calculateDogAge(5));


// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amount) {
  const MAX_AGE = 70;
  return `You will need ${Math.round(amount)} to last untill the ripe old age of ${age}.`
}

console.log(calculateSupply(54, 12365.02355));

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(celsius) {
  return `${celsius} C is ${((9/5)*celsius)+32} F.`
}
function fahrenheitToCelsius(fahrenhiet) {
  return `${fahrenhiet} F is ${((fahrenhiet-32)*.5556).toFixed(2)} C.`
}

console.log(celsiusToFahrenheit(36));
console.log(fahrenheitToCelsius(96.8));


//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }
// Will the function work differently if else is removed?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }
// Is there any difference in the behavior of these two variants?

// NO they work as same because in first one we just want to pass through the left statement from the else statement. 
// But in second variant if complier didn't enter in the if statemenet it will execute the rest of the statement. 





// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }

// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||

// function checkAge(age) {
//   return age > 18 ? true : 'Do you have your parents permission to access this page?';
// }

// function checkAge(age) {
//   return (age > 18) == true || 'Do you have your parents permission to access this page?'; 
// }

// console.log(checkAge(21));


// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.

// function pow(x,n) {
//   let result = 1;
//   for(let i = 1; i <= n; i++) {
//     result *= x;
//   }
//   return result;
// }

// console.log(pow(5,3));

// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
// First count the vowels and then count each vowel seperately

function countVowels(string) {
  let chars = string.split('');
  let count = 0;
  for(let i = 0; i < chars.length; i++) {
    if((chars[i] === 'a') || (chars[i] === 'e') || (chars[i] === 'i') || (chars[i] === 'o') || (chars === 'u')) {
      count += 1;
    }
  }
  console.log(chars);
  console.log(count);
}

countVowels('alphabet');

// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”

function  checkPalindrome(string) {
  let charInString = string.split('');
  let reverseString = '';
  for(let i = charInString.length - 1; i >= 0; i--) {
    reverseString += charInString[i];
  }

  if(string === reverseString) {
    console.log(`${string} is a palindrome.`);
  } else {
    console.log(`${string} is not a palindrome.`);
  }

}
checkPalindrome('wow');

// Counts the number of individual words in a string.

function countChars(string) {
  for(let i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
  }
}

countChars('apple');

// Show the following output using one loop.
    // 1, 2, 3, 4, 5
    // 6, 7, 8, 9, 10

for(let i = 1; i < 10; i++) {
  console.log(i);
}


// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.


// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

// Write a program that takes a number under (25) and prints the multiplication table for the number.


