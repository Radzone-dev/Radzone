$(document).ready(function() {
  $("h1").click(function() {
    $("div").prepend("<p>new text</p>");
  });
});