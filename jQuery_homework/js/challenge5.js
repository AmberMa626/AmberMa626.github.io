var imgs = $("img");
var msg = "Hover over an image below."
$.each(imgs,function(i,img){
	  $(img).mouseover(function() {
	 	$('#image').css({"background-image":"url('"+$(img).attr('src')+"')"});
	 	$('#image').html($(img).attr('alt'));
	})

	 $(img).focus(function() {
	 	$('#image').css({"background-image":"url('"+$(img).attr('src')+"')"});
	 	$('#image').html($(img).attr('alt'));
	})

	  $(img).mouseleave(function() {
	 	$('#image').css({"background-image":"url('')"});
	 	$('#image').html(msg);
	})

	 $(img).blur(function() {
	 	$('#image').css({"background-image":"url('')"});
	 	$('#image').html(msg);
	})
})
