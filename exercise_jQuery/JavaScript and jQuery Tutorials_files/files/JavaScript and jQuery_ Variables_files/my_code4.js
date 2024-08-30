$(document).ready(function() {
  var hText = "The heading text is " + $("#head1").text();

  $("h1").on( "click",function() {
    $("p").text(hText);
  });
});