$(document).ready(function() {

  $("p").hide();

  $("h1").on( "click",function() {
    $(this).next().slideToggle(300);
  });

});