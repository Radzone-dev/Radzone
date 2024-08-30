$(document).ready(function() {
  $("h1").on( "click",function() {
    $("h2").animate({
      "font-size": "3em"
    }, 1000);
  });
});