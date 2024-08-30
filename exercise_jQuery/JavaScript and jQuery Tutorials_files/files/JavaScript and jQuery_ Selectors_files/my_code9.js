$(document).ready(function() {
  $("#testbutton").on( "click",function() {
    $("p:even").css("background-color","red");	
  });
});