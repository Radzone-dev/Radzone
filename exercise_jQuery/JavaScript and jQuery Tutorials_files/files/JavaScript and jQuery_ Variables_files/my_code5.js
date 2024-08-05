$(document).ready(function() {
  var lineNum = 0;

  $("h1").click(function() {
    $("p").eq(lineNum).css("background-color", "red");
  });
});