var imgs = $("img");
var msg = "Hover over an image below."
$.each(imgs,function(i,im){
	  $(im).mouseover(function() {
	 	$('#image').css({"background-image":"url('"+$(im).attr('src')+"')"});
	 	$('#image').html($(im).attr('alt'));
	})

	 $(im).focus(function() {
	 	$('#image').css({"background-image":"url('"+$(im).attr('src')+"')"});
	 	$('#image').html($(im).attr('alt'));
	})

	  $(im).mouseleave(function() {
	 	$('#image').css({"background-image":"url('')"});
	 	$('#image').html(msg);
	})

	 $(im).blur(function() {
	 	$('#image').css({"background-image":"url('')"});
	 	$('#image').html(msg);
	})
})
