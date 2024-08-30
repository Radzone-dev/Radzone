$(document).ready(function() {
						   
  $("h1").on( "mousedown",function() {
    $(this).css("background-color","red");
  });
  $("h1").on( "mouseup",function() {
    $(this).css("background-color","yellow");
  });
  
});
