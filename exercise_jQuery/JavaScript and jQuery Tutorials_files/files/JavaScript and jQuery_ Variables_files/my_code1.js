$(document).ready(function() {
  var hText = "This is just some text.";

  $("h1").on( "click",function() {
    $("p").text(hText);
  });
});