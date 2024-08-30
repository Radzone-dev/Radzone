$(document).ready(function() {
  $("h1").on( "click",function() {
    $("div").after("<p>new text</p>");
  });
});