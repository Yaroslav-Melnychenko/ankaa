$(document).ready(function(){
	$('.common-background').mousemove(function(event){
		var pos = $(this).offset().top;
		var x = event.pageX / $(this).height();
		var y = 2 * (event.pageY - pos) / $(this).width();
		var bx = -15 * x;
		var by =  15 * y;

		$(this).css({
			'background-position-x': bx,
			'background-position-y': by
		});
		console.log(x, y);
	});
});