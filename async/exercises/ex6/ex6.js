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
	return ASQ(function(done){
		fakeAjax(file,done);
	});
}

var files = ["file1", "file2", "file3"];

var filePromises = files.map(v => getFile(v))
ASQ()
.all(...filePromises)
.val((msg1, msg2, msg3) => {
	output(msg1);
	output(msg2);
	output(msg3);
	output("Completed!!");
})

// ASQ
// .all()

// Request all files at once in
// "parallel" via `getFile(..)`.
//
// Render as each one finishes,
// but only once previous rendering
// is done.

// ???
