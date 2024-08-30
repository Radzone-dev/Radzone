$(document).ready(function() {
  var lineNum = 0;

  $("h1").on( "click",function() {
    $("p").eq(lineNum).css("background-color", "red");
  });
});