$(document).ready(function() {
  var hText = $("#head1").text();

  $("h1").click(function() {
    $("p").text(hText);
  });
});