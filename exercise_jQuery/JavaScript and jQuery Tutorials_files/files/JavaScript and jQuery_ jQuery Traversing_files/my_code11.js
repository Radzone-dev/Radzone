$(document).ready(function() {
  $("h1").on( "click",function() {
    $("p").last().css("background-color", "red");
  });
});