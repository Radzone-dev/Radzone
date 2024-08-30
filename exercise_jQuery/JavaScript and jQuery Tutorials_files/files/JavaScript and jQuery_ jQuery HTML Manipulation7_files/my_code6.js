$(document).ready(function() {
  $("h1").on( "click",function() {
    $("div").html('new <b style="color: red;">text</b>');
  });
});