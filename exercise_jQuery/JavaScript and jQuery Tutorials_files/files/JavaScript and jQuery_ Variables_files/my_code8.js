$(document).ready(function() {
  var imageName = ["floatingball.gif", "redball.gif", "eightball.gif"];
  var indexNum = 0;

  $("#picture").on( "click",function() {
    $("#picture").attr("src", imageName[indexNum]);
    indexNum++;	
    if (indexNum > 2) {indexNum = 0;}
  });
});