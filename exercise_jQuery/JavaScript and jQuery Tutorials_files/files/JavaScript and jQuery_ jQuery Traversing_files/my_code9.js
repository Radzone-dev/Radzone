$(document).ready(function() {
  $("h1").click(function() {
    $("div").find("p").css("background-color", "red");
  });
});