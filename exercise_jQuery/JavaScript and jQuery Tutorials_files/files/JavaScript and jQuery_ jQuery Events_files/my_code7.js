$(document).ready(function() {
						   
  $("h1").on( "mouseenter",function() {
    $(this).css("background-color","red");
  });
  $("h1").on( "mouseleave",function() {
    $(this).css("background-color","yellow");
    $("*").unbind("mouseleave");
  });
  
});
