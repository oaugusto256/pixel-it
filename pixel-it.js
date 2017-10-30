var currentColor = '#fff';
var lastColor = '#fff';
var currentTool = null;
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
		lastColor = currentColor;

		$('.current-color-box').css('background-color', currentColor);	

		console.log("Color chosen was: ", colorClicked);
	});


	$('.tool-box').click(function() {
		currentTool = $(this).get(0).id;
		console.log("Tool chosen was: ", currentTool);

		$('.current-tool').empty();
		$('.current-tool').append("<i class='fa fa-"+currentTool+" fa-2x' aria-hidden='true'></i>");

		if(currentTool === 'eraser') {
			currentColor = '#d8d8d8';
			$('.current-color-box').css('background-color', currentColor);
		} else if (currentTool === 'pencil') {
			currentColor = lastColor;
			$('.current-color-box').css('background-color', lastColor);
		}


	});

});

$(document).mousedown(function(){
	mouseDown = true; 
});

$(document).mouseup(function(event) {
     mouseDown = false;
});


