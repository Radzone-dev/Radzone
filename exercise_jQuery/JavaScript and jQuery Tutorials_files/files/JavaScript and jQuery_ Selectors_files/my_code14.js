$(document).ready(function() {
  $("#testbutton, strong").on( "click",function() {
    $("strong.multiple").css("background-color","red");	
  });
});