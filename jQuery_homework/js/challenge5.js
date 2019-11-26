console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < 	$("img").length;i++){
// alert($('img')[i].src)
$.each($("img"),function(i,im){
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
	 	$('#image').html("Hover over an image below.");
	})

	 $(im).blur(function() {
	 	$('#image').css({"background-image":"url('')"});
	 	$('#image').html("Hover over an image below.");
	})
})
