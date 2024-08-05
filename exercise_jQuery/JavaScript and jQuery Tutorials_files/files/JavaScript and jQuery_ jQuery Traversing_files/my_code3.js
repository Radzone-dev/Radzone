$(document).ready(function() {
  $("h1").click(function() {
    $("div").next().css("background-color", "red");
  });
});