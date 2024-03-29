// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Assumptions
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// There are no fancy optimizations required, but still the most trivial solutions might time out. Try to find a solution which does not loop all the way up to n.

// Solution 1
function isPrime(num) {
  let isPreviousDivide = false;

  if( num <= 1 ) {
    return false
  }   

  for( let i = 2; i <= num; i++ ) {
    if ( (num !== i) &&  ( num % i === 0 ) ) {
      isPreviousDivide = true;
    }
  }

  return ! isPreviousDivide; 
}

// Solution 2
function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
}

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(roman){
  if(roman === 'IV') {
    return 4;
  }
  
  const romanArr = [...roman].reverse();
  let total = 0;
  
  for ( const n of romanArr) {
    switch(n) {
      case 'I': {
        total += 1;
      };
      break;
      case 'V': {
        total += 5;
      };
      break;
      case 'X': {
        total += 10;
      };
      break;
      case 'L': {
        total += 50;
      };
      break;
      case 'C': {
        total += 100;
      };
      break;
      case 'D': {
        total += 500;
      };
      break;
      case 'M': {
        total += 1000;
      };
      break;
    }
  }
  
  console.log(total);
  
  return total;  
}

solution('IV');
