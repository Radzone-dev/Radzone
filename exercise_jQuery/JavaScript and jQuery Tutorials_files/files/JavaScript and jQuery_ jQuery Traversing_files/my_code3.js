$(document).ready(function() {
  $("h1").on( "click",function() {
    $("div").next().css("background-color", "red");
  });
});