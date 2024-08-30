$(document).ready(function() {
  $("h1").on( "click",function() {
    $("p").eq(1).css("background-color", "red");
  });
});