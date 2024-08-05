$(document).ready(function() {
  var hText = "This is just some text.";

  $("h1").click(function() {
    $("p").text(hText);
  });
});