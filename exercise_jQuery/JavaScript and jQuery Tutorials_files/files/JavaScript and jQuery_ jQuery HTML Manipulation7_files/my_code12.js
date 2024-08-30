$(document).ready(function() {
  $("h1").on( "click",function() {
    $("div").prepend("<p>new text</p>");
  });
});