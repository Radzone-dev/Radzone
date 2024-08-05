$(document).ready(function() {
  $("h1").click(function() {
    $("h2").animate({
      "font-size": "3em",
      "width": "50%"
    }, 1000);
  });
});