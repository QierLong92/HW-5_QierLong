var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = this.document.querySelector("#player1");

	video.controls = true;
	this.document.getElementById("play").addEventListener("click", function () {
		video.play();
		console.log("Play Video");
	});

});


