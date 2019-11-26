$("#subscribe").click(function(){
  console.log("here");
  if (this.checked){
    console.log("Selected");
    $("#emailField").css("display","block");
  }
  else{
    console.log("Not selected");
    $("#emailField").css("display","none");
  }
});

//advanced option...
//x.style.display=='block'?
//x.style.display='block':
//x.style.display='none';
