$(document).ready(function() {
  var imageName = ["basketbal.png", "baseball.png", "footbal.png"];
  var indexNum = 0;

  $("#picture").on( "click",function() {

    $("#picture").fadeOut(300, function() {
      $("#picture").attr("src", imageName[indexNum]);
      indexNum++;	
      if (indexNum > 2) {indexNum = 0;}
      $("#picture").fadeIn(500);
    });
	
  });
});