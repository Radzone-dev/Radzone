$(document).ready(function() {
  $("h1").click(function() {
    $("p").last().css("background-color", "red");
  });
});