$(document).ready(function() {
  $("h1").on( "click",function() {
    $("h2").animate({
      "font-size": "3em",
      "width": "50%",
      "left": "+=100px"
    }, 1000);
  });
});