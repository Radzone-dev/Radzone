$(document).ready(function() {
  $("h1").click(function() {
    $("p").first().css("background-color", "red");
  });
});