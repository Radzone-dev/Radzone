$(document).ready(function() {
  var imageName = ["basketbal.png", "baseball.png", "footbal.png"];
  var indexNum = 0;

  $("#picture").on( "click",function() {
    $("#picture").attr("src", imageName[indexNum]);
    indexNum++;	
    if (indexNum > 2) {indexNum = 0;}
  });
});