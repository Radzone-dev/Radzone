$(document).ready(function() {
  $("h1").on( "click",function() {
    $(this).parent().css("background-color", "red");
  });
});