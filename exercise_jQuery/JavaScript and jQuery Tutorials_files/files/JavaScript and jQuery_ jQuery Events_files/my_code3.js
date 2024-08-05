$(document).ready(function() {
						   
  $("h1").mousedown(function() {
    $(this).css("background-color","red");
  });
  $("h1").mouseup(function() {
    $(this).css("background-color","yellow");
  });
  
});
