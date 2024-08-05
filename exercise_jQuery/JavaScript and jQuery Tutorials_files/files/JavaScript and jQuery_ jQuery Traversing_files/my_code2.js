$(document).ready(function() {
  $("h1").click(function() {
    $("p").not("p.second").css("background-color", "red");
  });
});