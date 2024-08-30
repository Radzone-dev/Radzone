$(document).ready(function() {
  $("h1").on( "click",function() {
    $("div").find("p").css("background-color", "red");
  });
});