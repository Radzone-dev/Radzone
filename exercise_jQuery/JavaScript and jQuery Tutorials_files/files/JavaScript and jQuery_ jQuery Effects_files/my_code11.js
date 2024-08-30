$(document).ready(function() {
  $("h1").on( "click",function() {
    $("h2").delay(2000).fadeToggle(1000);
  });
});