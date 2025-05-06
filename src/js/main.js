var range = document.querySelector(".slider-range");
var imageAfter = document.querySelector(".slider-image-after");
var separator = document.querySelector(".slider-separator");

var updatePosition = function () {
  var position = range.value + "%";
  imageAfter.style.width = position;
  separator.style.left = position;
};

range.addEventListener("input", updatePosition);
