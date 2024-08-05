$(document).ready(function() {
  $("h1").click(function() {
    $("h1").next().css("background-color", "red");
  });
});