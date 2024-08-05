$(document).ready(function() {
  $("h1").click(function() {
    $(this).add("p").css("background-color", "red");
  });
});