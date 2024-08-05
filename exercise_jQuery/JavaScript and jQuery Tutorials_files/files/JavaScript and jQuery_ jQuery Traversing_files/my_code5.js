$(document).ready(function() {
  $("h1").click(function() {
    $("h1").next("div").css("background-color", "red");
  });
});