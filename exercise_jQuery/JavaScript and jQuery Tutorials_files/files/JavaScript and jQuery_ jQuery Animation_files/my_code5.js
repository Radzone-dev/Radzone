$(document).ready(function() {
  $("h1").on( "click",function() {
    $("h2").animate({
      "font-size": "hide",
      "width": "50%",
      "left": "+=100px"
    }, 1000);
  });
});