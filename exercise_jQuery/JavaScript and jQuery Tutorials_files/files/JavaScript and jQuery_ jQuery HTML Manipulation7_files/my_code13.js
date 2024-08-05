$(document).ready(function() {
  $("h1").click(function() {
    $("div").before("<p>new text</p>");
  });
});