$(document).ready(function() {
  $("h1").click(function() {
    $("p").prev().css("background-color", "red");
  });
});