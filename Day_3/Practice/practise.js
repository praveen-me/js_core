//Making function expression
const power = function(base, exponent) {
	let result = 1;
	for(let i = 1; i <= exponent; i++) {
			result *= base;
	}
	return result;
}

console.log(`The result is ${power(2,10)}.`);