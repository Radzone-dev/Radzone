$(document).ready(function() {
  $("#testbutton").click(function() {
    $("div > p:last-child").css("background-color","red");	
  });
});