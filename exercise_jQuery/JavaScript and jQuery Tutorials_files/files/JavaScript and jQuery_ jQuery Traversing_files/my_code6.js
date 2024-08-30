$(document).ready(function() {
  $("h1").on( "click",function() {
    $(this).next().css("background-color", "red");
  });
});