// Write a JavaScript program to calculate the factorial of a number. Go to the editor
function factotrial(num) {
    if(num === 1 || num === 0 ) {
        return 1;
    }
    return num * factotrial(num-1);
}

console.log(factotrial(5)); 

// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.



//Write a JavaScript program to get the integers in range (x, y)
function countDown(x, y) {
    if(x < y) return ;
    console.log(x);
	countDown(x - 1);
}
countDown(10, 5);