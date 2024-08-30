$(document).ready(function() {
  $("h1").on( "click",function() {
    $("p").html('new <b style="color: red;">text</b>');
  });
});