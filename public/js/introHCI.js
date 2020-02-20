'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(liked);
}

function liked(e){
	e.preventDefault();
	console.log("clicked")
	ga('create', 'UA-158825803-1', 'auto');
	ga('send', 'event', 'like', 'click');
}

