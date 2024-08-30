$(document).ready(function() {
  $("#testbutton").on( "click",function() {
    $("div > p:first-child").css("background-color","red");	
  });
});