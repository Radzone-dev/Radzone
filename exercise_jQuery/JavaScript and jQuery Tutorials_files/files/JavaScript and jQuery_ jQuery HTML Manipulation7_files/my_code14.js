$(document).ready(function() {
  $("h1").on( "click",function() {
    $("p").replaceWith("<h2>new text</h2>");
  });
});