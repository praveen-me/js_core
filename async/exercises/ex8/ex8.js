$(document).ready(function(){
	var $btn = $("#btn"),
		$list = $("#list"),
		clicks = ASQ.react.of(),
		msgs = ASQ.react.of(),
		latest;

	$btn.click(function(evt){
		// TODO
		clicks.push(evt);
	});

	setInterval(function() {
		if(latest) {
			msgs.push('clicked');
			latest = null;
		}
	}, 1000);

	clicks.val(function(evt) {
		latest = evt;
	});

	// TODO: setup sampled sequence, populate $list
	msgs.val(function(msg) {
		$list.append(`<div>${msg}</div>`)
	})
});
