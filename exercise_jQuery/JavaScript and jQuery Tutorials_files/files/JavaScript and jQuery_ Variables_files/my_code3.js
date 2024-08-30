$(document).ready(function() {
  var hText = $("#head1").text();
  var text1 = "The heading text is ";
  var text2 = text1 + hText;

  $("h1").on( "click",function() {
    $("p").text(text2);
  });
});