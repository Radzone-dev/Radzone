$(document).ready(function() {
  $("h1").on( "click",function() {
    $("h1").next("div").css("background-color", "red");
  });
});