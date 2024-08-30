$(document).ready(function() {
  $("#testbutton").on( "click",function() {
    $("p:odd").css("background-color","red");	
  });
});