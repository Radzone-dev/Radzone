$(document).ready(function() {
  $("h1").click(function() {
    $(this).parent().css("background-color", "red");
  });
});