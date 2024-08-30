$(document).ready(function() {
  $("h1").on( "click",function() {
    $("div").before("<p>new text</p>");
  });
});