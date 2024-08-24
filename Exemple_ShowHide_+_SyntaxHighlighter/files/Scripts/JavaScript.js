/* Script de Rad Zone pour afficher les element */
var elements_array = new Array("video", "video2", "Image", "containerframe", "form", "MP3"); /* INSERER TOUTE LES ID DES ELEMENTS A TRAITER ET NE PAS INSERER DES ID INEXISTANTES !!! */
function displayElements(the_element) {
  if (document.getElementById(the_element).style.display == "") {
    document.getElementById(the_element).style.display = "none";
    return;
  }
  for (i = 0; i < elements_array.length; i++) {
    var my_element = document.getElementById(elements_array[i]);
    my_element.style.display = "none";
  }
  document.getElementById(the_element).style.display = "";
}
function play_video() {
  document.getElementById("video2").play();
}
function HideShow() {
  var x = document.getElementById("mouseevent");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}