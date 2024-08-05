$(document).ready(function() {
  $("h1").click(function() {
    $(this).next().css("background-color", "red");
  });
});