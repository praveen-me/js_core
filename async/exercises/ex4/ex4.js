function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	return new Promise(function(resolve){
		fakeAjax(file,resolve);
	});
}

// TODO:
// 1 - First make the array of the the files
var files = ["file1", "file2", "file3"];

// 2 - Make over them and get a promise from them and then reduce over them for the chaining promises
files
.map(getFile)
.reduce(async (chain, filePromise) => {
	return chain
	.then(() => filePromise)
	.then(output)
}, Promise.resolve())
.then(() => output("Completed!!"));
