$("#ch3form").submit(function(){
  if (($('input[name="fruit"]:checked').val() == null) && ($('input[name="standing"]:checked').val()==null))
  {
    alert("You must pick a standing and a fruit!");
    return false;
  }
 if (($('input[name = "fruit"]:checked').val() == null) && ($('input[name="standing"]:checked').val() != null)) {
            alert("You must pick a fruit as well!");
            return false;
        } 
        if (($('input[name = "fruit"]:checked').val() != null) && ($('input[name="standing"]:checked').val() == null)) {
            alert("You must pick a standing as well!");
            return false;
        }
  else
  {
    return true;
  };
});
