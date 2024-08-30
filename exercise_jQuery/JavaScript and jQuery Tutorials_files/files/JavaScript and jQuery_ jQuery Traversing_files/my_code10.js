$(document).ready(function() {
  $("h1").on( "click",function() {
    $("p").first().css("background-color", "red");
  });
});