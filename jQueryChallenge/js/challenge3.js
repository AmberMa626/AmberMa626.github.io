$("#ch3form").submit(function(){
  if ($('input[name="fruit"]:checked').val() && $('input[name="standing"]:checked').val())
  {
    return true;
  }
  if ($('input[name="fruit"]:checked').val() || $('input[name="standing"]:checked').val())
  {
    return true;
  }
  else
  {
    alert("You must pick a fruit and current class standing!")
    return false;
  };
});
