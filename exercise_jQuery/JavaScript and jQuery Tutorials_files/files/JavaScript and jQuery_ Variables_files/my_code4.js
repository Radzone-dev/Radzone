$(document).ready(function() {
  var hText = "The heading text is " + $("#head1").text();

  $("h1").click(function() {
    $("p").text(hText);
  });
});