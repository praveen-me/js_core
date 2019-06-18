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
const responses = {};

function getFile(file) {
	fakeAjax(file,function(text){
		// what do we do here?
		fileRecieved(file, text);
	});
}

function fileRecieved(file, responseText) {
	if(!responses[file]) {
		responses[file] = responseText;
	}

	var files = ["file1", "file2", "file3"];

	for (const file of files) {
		if(file in responses) {
			if(responses[file] !== true) {
				output(responses[file])
				responses[file] = true;
			}
		} else {
			return false
		}
	}
	console.log('Completed!!')
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
