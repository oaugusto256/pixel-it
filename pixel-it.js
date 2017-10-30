var currentColor = '#fff';
var lastColor = '#fff';
var currentTool = 'pencil';
var mouseDown = false;

$(document).ready(function() {
	$('.current-color-box').css('background-color', currentColor);
	$('.current-tool').append("<i class='fa fa-"+currentTool+" fa-2x' aria-hidden='true'></i>");
	
	$(".pixel-box").click(function(){
		if(currentTool === 'eyedropper') {
			currentColor = $(this).css('background-color');
			$('.current-color-box').css('background-color', currentColor);
		} else if(currentTool === 'square') {
			$('.pixel-box').css('background-color', currentColor);
		} else {
			$(this).css('background-color', currentColor);
			console.log('Currente tool is: ', currentTool);
		}
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

	$('.tool-box').hover(function() {
		var hoverTool = $(this).get(0).id;
		if(hoverTool === 'eraser') {
			$('.tool-info').empty();
			$('.tool-info').append('<p class="margin-5">Click and continue to erase specific pixel box.</p>');
		}
		if(hoverTool === 'pencil') {
			$('.tool-info').empty();
			$('.tool-info').append('<p class="margin-5">Click and continue to colorize specific pixel box with the current color.</p>');
		}
		if(hoverTool === 'eyedropper') {
			$('.tool-info').empty();
			$('.tool-info').append('<p class="margin-5">Pick specific pixel box color and use it as the current color.</p>');
		}
		if(hoverTool === 'square') {
			$('.tool-info').empty();
			$('.tool-info').append('<p class="margin-5">DANGER! Click a pixel box to colorize all the canvas with the current color.</p>');
		}
		if(hoverTool === 'paint-brush') {
			$('.tool-info').empty();
			$('.tool-info').append('<p class="margin-5">Pass the mouse over pixel boxes to colorize them.</p>');
		}
		if(hoverTool === 'trash') {
			$('.tool-info').empty();
			$('.tool-info').append('<p class="margin-5">DANGER! Click and clean all the canvas.</p>');
		}
	});

	$('.left-box').hover(function() {
		$('.tool-info').empty();
		$('.tool-info').append('<p class="margin-5">Pass the mouse at the tool box and see its functionality.</p>');
	})


	$('.tool-box').click(function() {
		mouseDown = false;
		currentTool = $(this).get(0).id;
		console.log("Tool chosen was: ", currentTool);

		$('.current-tool').empty();
		$('.current-tool').append("<i class='fa fa-"+currentTool+" fa-2x' aria-hidden='true'></i>");

		
		if(currentTool === 'eraser') { 
			currentColor = '#d8d8d8';
			$('.current-color-box').css('background-color', currentColor);
			$('.tool-info').empty();
			$('.tool-info').append('<p class="margin-5">Click and continue to erase especific pixel box.</p>');
		} else if (currentTool === 'pencil') {
			currentColor = lastColor;
			$('.current-color-box').css('background-color', lastColor);
		} else if (currentTool === 'trash') {
			$('.pixel-box').css('background-color', '#d8d8d8');
		} else if (currentTool === 'paint-brush') {
			mouseDown = true;
		}
	});
});

$(document).mousedown(function(){
	mouseDown = true; 
});

$(document).mouseup(function(event) {
     mouseDown = false;
});

function download() {
	var pixelBox = $("#canvas");
	
	html2canvas(pixelBox, {
	  onrendered: function(canvas) {
	  	var dataURL = canvas.toDataURL('image/png');
	  	var button = document.getElementById('download');
	  	button.href = dataURL;
	  }
	});
}

