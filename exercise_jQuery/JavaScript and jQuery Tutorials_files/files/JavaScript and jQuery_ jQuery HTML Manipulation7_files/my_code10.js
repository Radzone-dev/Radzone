$(document).ready(function() {
  $("h1").click(function() {
    $("div").after("<p>new text</p>");
  });
});