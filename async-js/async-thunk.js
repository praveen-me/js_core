// Acts as a wrapper and contains a state or desired output with it. To get that all you need just call it.
function makeThunk(fn) {
	const args = [].slice.call(arguments, 1);
	
	return (cb) => {
		args.push(cb);
		fn.apply(null, args);
	}
}

const addAsync = (x, y, cb) => {
	setTimeout(() => {
		cb( x + y );
	})
}

const thunk = makeThunk(addAsync, 10, 20);

thunk((sum) => {
	console.log("The thunk response is", sum);
});
