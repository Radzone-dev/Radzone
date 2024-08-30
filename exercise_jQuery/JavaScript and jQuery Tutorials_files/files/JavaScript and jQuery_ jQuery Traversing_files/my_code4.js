$(document).ready(function() {
  $("h1").on( "click",function() {
    $("h1").next().css("background-color", "red");
  });
});