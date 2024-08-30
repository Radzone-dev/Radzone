$(document).ready(function() {
  $("h2").hide();
  
  $("h1").on( "click",function() {
    $("h2").show(1000);
  });
});