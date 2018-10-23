$(document).ready(function(){
	$('.common-background').mousemove(function(event){
		var pos = $(this).offset().top;
		var x = -8 * event.pageX / ($(this).height());
		var y = -8 * (event.pageY - pos) / $(this).width();
		var bx = x;
		var by = y;

		$(this).css({
			'background-position-x': bx,
			'background-position-y': by
		});
	});
});