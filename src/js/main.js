var range = document.querySelector(".slider-range");
var imageAfter = document.querySelector(".slider-image-after");
var separator = document.querySelector(".slider-separator");

// Conserver votre fonction d'origine mais ajouter les limites
var updatePosition = function () {
  // Obtenir la valeur actuelle du range
  var rawValue = parseInt(range.value);

  // Calculer les limites (30px de chaque côté)
  var sliderWidth = document.querySelector(".slider").offsetWidth;
  var minLimit = (250 / sliderWidth) * 100;
  var maxLimit = 100 - minLimit;

  // Appliquer les limites
  var limitedValue = Math.max(minLimit, Math.min(rawValue, maxLimit));

  // Si la valeur a été limitée, mettre à jour le range
  if (limitedValue !== rawValue) {
    range.value = limitedValue;
  }

  // Continuer avec votre logique existante
  var position = limitedValue + "%";
  imageAfter.style.width = position;
  separator.style.left = position;
};

// Initialiser la position
updatePosition();

// Conserver votre écouteur d'événement original
range.addEventListener("input", updatePosition);
