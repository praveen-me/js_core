// 1.Using math object write a JavaScript function to generate a random integer between min and max.
// Hint: Use Math.random() & Math.floor()
// Example:

function rand(max,min) {
		return Math.floor( Math.random() * (max-min) + min );
}

console.log('---------------Random Number-------------------');

console.log(rand(20,1)); //15
console.log(rand(1,10)); //8


// 2.Write a JavaScript function to format a number up to specified decimal places.
// Example:
console.log('\n------------------Decimals--------------------');
function decimals(number, value) {
	return number.toFixed(value);
}
console.log(decimals(2.100212, 2)); //2.10
console.log(decimals(2.100212, 3)); //2.100
console.log(decimals(2100, 2)); //2100.00


// 3. Write a JavaScript function to find the highest value in an array.
// Example:
console.log('\n---------------MAX Number---------------')
function maxNumber(number) {
	return Math.max(...number);
}
console.log(maxNumber([12,34,56,1])); //56
console.log(maxNumber([-12,-34,0,-56,-1])); //0

