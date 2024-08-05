$(document).ready(function() {
  var imageName = ["floatingball.gif", "redball.gif", "eightball.gif"];
  var indexNum = 0;

  $("#picture").click(function() {

    $("#picture").fadeOut(300, function() {
      $("#picture").attr("src", imageName[indexNum]);
      indexNum++;	
      if (indexNum > 2) {indexNum = 0;}
      $("#picture").fadeIn(500);
    });
	
  });
});