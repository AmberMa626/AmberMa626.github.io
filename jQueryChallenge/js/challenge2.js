$("#useBilling").click(function(){
  if(this.checked){
    $("#home").prop("disabled", true);
    $("#home").val($("#billing").val())
  }
  else{
    $("#home").prop("disabled", false);
    $("#home").val("");
  }
});
