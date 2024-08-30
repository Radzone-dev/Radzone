$(document).ready(function() {
  $("#testbutton").on( "click",function() {
    $("div, strong, #testbutton").css("background-color","red");	
  });
});