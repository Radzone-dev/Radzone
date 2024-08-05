$(document).ready(function() {
  $("h1").click(function() {
    $("p").after("<p>new text</p>");
  });
});