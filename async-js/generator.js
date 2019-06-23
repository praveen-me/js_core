// Utilty for generator function
const genUtilityFunc = (gn) => {
	const it = gn();

	return function() {
		return it.next(...arguments);
	}
};

const run = genUtilityFunc(function *() {
	const x = 1 + (yield);
	const y = 1 + (yield);
	yield( x + y );
});

run();
run(10);
console.log('The value is:',run(20).value);