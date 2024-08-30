$(document).ready(function() {
  $("h1").on( "click",function() {
    $("p").after("<p>new text</p>");
  });
});