$(document).ready(function() {
  $("#testbutton").on( "click",function() {
    $("div > p:last-child").css("background-color","red");	
  });
});