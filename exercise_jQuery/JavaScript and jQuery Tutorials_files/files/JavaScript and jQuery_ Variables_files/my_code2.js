$(document).ready(function() {
  var hText = $("#head1").text();

  $("h1").on( "click",function() {
    $("p").text(hText);
  });
});