$(document).ready(function() {
  $("h1").on( "click",function() {
    $(this).add("p").css("background-color", "red");
  });
});