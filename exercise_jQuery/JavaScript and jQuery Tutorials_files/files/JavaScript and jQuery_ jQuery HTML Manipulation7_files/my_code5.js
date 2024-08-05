$(document).ready(function() {
  $("h1").click(function() {
    $("p").html('new <b style="color: red;">text</b>');
  });
});