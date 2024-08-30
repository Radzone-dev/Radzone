$(document).ready(function() {
  $("h1").on( "click",function() {
    $("p").prev().css("background-color", "red");
  });
});