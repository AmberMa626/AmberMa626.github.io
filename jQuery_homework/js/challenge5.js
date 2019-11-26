console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < 	$("img").length;i++){
// alert($('img')[i].src)
$.each($("img"),function(i,img){
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
	 	$('#image').html("Hover over an image below.");
	})

	 $(img).blur(function() {
	 	$('#image').css({"background-image":"url('')"});
	 	$('#image').html("Hover over an image below.");
	})
})
