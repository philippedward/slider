// var range = document.querySelector(".slider-range");
// var imageAfter = document.querySelector(".slider-image-after");
// var separator = document.querySelector(".slider-separator");

// var updatePosition = function () {
//   var position = range.value + "%";
//   imageAfter.style.width = position;
//   separator.style.left = position;
// };

// range.addEventListener("input", updatePosition);

var range = document.querySelector(".slider-range");
var imageAfter = document.querySelector(".slider-image-after");
var separator = document.querySelector(".slider-separator");
var handler = document.querySelector(".slider-handler");

var updatePosition = function () {
  var position = range.value + "%";
  var positionValue = parseInt(range.value);
  imageAfter.style.width = position;
  separator.style.left = position;

  // Mise à jour du fond du handler en fonction de la position
  if (positionValue <= 33) {
    // Position à gauche - ellipse-left
    handler.style.backgroundImage = "url(../img/ellipse-left.png)";
  } else if (positionValue >= 66) {
    // Position à droite - ellipse-right
    handler.style.backgroundImage = "url(../img/ellipse-right.png)";
  } else {
    // Position au milieu - ellipse-1
    handler.style.backgroundImage = "url(../img/ellipse-1.png)";
  }
};

// Initialisation de la position
updatePosition();

// Ajout de l'écouteur d'événement
range.addEventListener("input", updatePosition);
