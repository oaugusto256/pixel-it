var currentColor = '#fff';
var mouseDown = false;

$(document).ready(function() {
	$('.current-color-box').css('background-color', currentColor);	

	$(".pixel-box").click(function(){
		$(this).css('background-color', currentColor);
	});


	$('.pixel-box').hover(function(){
		if(mouseDown) {
			$(this).css('background-color', currentColor);	
		}
	});

	$('.color-box').click(function() {
		var colorClicked = $(this).css('background-color');
		currentColor = colorClicked;

		$('.current-color-box').css('background-color', currentColor);	

		console.log("Color chosen was: ", colorClicked);
	});

});

$(document).mousedown(function(){
	mouseDown = true; 
});

$(document).mouseup(function(event) {
     mouseDown = false;
});


