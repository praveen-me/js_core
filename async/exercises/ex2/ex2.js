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

function getFile(file) {
	// what do we do here?
	var text;

	fakeAjax(file, (response) => {
		if(!text) text = response;
		else text(response);
	});

	return (cb) => {
		if(text) cb(text);
		else text = cb;
	}

}

var th1 = getFile("file1");
var th2 = getFile("file2");
var th3 = getFile("file3");

// request all files at once in "parallel"
th1((text) => {
	output(text);
	th2((text2) => {
		output(text2);
		th3((text3) => {
			output(text3);
			output("Complete!!");
		});
	});
});
