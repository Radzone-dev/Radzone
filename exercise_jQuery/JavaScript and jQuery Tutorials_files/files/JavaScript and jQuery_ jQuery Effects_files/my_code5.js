$(document).ready(function() {
  $("h2").hide();
  
  $("h1").on( "click",function() {
    $("h2").slideDown(1000);
  });
});