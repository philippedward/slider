var range = document.querySelector(".slider-range");
var imageAfter = document.querySelector(".slider-image-after");
var separator = document.querySelector(".slider-separator");

var updatePosition = function () {
  var rawValue = parseInt(range.value);

  var sliderWidth = document.querySelector(".slider").offsetWidth;
  var minLimit = (250 / sliderWidth) * 100;
  var maxLimit = 100 - minLimit;

  var limitedValue = Math.max(minLimit, Math.min(rawValue, maxLimit));

  if (limitedValue !== rawValue) {
    range.value = limitedValue;
  }

  var position = limitedValue + "%";
  imageAfter.style.width = position;
  separator.style.left = position;
};

updatePosition();

range.addEventListener("input", updatePosition);
