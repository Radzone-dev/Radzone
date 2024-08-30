$(document).ready(function() {
  var lineNum = 0;
  var aNumber = 5;
  lineNum = aNumber - 4;

  $("h1").on( "click",function() {
    $("p").eq(lineNum).css("background-color", "red");
  });
});