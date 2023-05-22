document.getElementById("myText").addEventListener("input", updateText);
document.getElementById("logo-selection").addEventListener("click", logoSelection);
function updateText() {
  var text = document.getElementById("myText").value;
  var textOverlay = document.getElementById("textOverlay");
  textOverlay.innerHTML = text;
}

let etape = 1;

function fonctionEtape() {
  if (etape === 1) {
    document.getElementById("étape-txt").innerHTML = "Création du motif: dos";
    document.getElementById("étape-title").innerHTML = "Étape 2";
    document.querySelector(".img-two-bloc-two.sweat2").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat3").style.display = "none";
    document.querySelector(".img-two-bloc-two.sweat4").style.display = "none";
    document.querySelector(".img-two-bloc-two.sweat").style.display = "none";
    etape = 2;
  }
  
  else if (etape === 2) {
    document.getElementById("étape-txt").innerHTML = "Création du motif: Bras droit";
    document.getElementById("étape-title").innerHTML = "Étape 3";
    document.querySelector(".img-two-bloc-two.sweat3").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat2").style.display = "none";
    etape = 3;
  }

  else if (etape === 3) {
    document.getElementById("étape-txt").innerHTML = "Création du motif: Bras gauche";
    document.getElementById("étape-title").innerHTML = "Étape 4";
    document.querySelector(".img-two-bloc-two.sweat4").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat3").style.display = "none";
    etape = 4;
  }

  else if (etape === 4) {
    document.getElementById("étape-txt").innerHTML = "Création du texte : face";
    document.getElementById("étape-title").innerHTML = "Étape 5";
    document.querySelector(".img-two-bloc-two.sweat").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat4").style.display = "none";
    document.querySelector(".Bloc-threecontainer").style.display = "none";
    document.querySelector(".Bloc-2-threecontainer").style.display = "block";
    etape = 5;
  }

  else if (etape === 5) {
    document.getElementById("étape-txt").innerHTML = "Création du texte : face";
    document.getElementById("étape-title").innerHTML = "Étape 5-2";
    document.querySelector(".img-two-bloc-two.sweat").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat2").style.display = "none";
    document.querySelector(".Bloc-2-threecontainer").style.display = "none";
    document.querySelector(".Bloc-3-threecontainer").style.display = "block";
    etape = 6;
  }

  else if (etape === 6) {
    document.getElementById("étape-txt").innerHTML = "Création du texte : dos";
    document.getElementById("étape-title").innerHTML = "Étape 6";
    document.querySelector(".img-two-bloc-two.sweat2").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat").style.display = "none";
    document.querySelector(".Bloc-3-threecontainer").style.display = "none";
    document.querySelector(".Bloc-2-threecontainer").style.display = "block";
    etape = 7;
  }

  else if (etape === 7) {
    document.getElementById("étape-txt").innerHTML = "Création du texte : dos";
    document.getElementById("étape-title").innerHTML = "Étape 6-2";
    document.querySelector(".img-two-bloc-two.sweat2").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat").style.display = "none";
    document.querySelector(".Bloc-2-threecontainer").style.display = "none";
    document.querySelector(".Bloc-3-threecontainer").style.display = "block";
    etape = 8;
  }

}

function logoSelection(){
  etape = 0;

  if (etape === 0) {
    document.getElementById("étape-txt").innerHTML = "Création du motif: face";
    document.getElementById("étape-title").innerHTML = "Étape 1";
    document.querySelector(".img-two-bloc-two.sweat").style.display = "block";
    document.querySelector(".img-two-bloc-two.sweat2").style.display = "none";
    document.querySelector(".img-two-bloc-two.sweat3").style.display = "none";
    document.querySelector(".img-two-bloc-two.sweat4").style.display = "none";
  }
  fonctionEtape();
}
