$(document).ready(function() {
  $("#testbutton").click(function() {
    $("div > p:first-child").css("background-color","red");	
  });
});