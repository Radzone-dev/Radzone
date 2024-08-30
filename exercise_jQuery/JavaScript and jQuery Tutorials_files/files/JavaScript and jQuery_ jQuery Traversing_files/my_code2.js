$(document).ready(function() {
  $("h1").on( "click",function() {
    $("p").not("p.second").css("background-color", "red");
  });
});