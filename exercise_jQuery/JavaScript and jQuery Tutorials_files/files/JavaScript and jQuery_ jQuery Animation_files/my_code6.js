$(document).ready(function() {
  $("h1").click(function() {
    $("h2").animate({
      "font-size": "toggle",
      "width": "50%",
      "left": "+=100px"
    }, 1000);
  });
});