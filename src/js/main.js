var range = document.querySelector(".slider-range");
var imageAfter = document.querySelector(".slider-image-after");
var separator = document.querySelector(".slider-separator");
var textBefore = document.querySelector(".slider-text-before");
var textAfter = document.querySelector(".slider-text-after");

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

  var normalizedPosition = (limitedValue - minLimit) / (maxLimit - minLimit);

  var beforeOpacity, afterOpacity;

  if (normalizedPosition <= 0.5) {
    beforeOpacity = 1 - normalizedPosition;
    afterOpacity = normalizedPosition;
  } else {
    beforeOpacity = 0.5 - (normalizedPosition - 0.5);
    afterOpacity = 0.5 + (normalizedPosition - 0.5);
  }

  textBefore.style.opacity = beforeOpacity;
  textAfter.style.opacity = afterOpacity;
};

updatePosition();

range.addEventListener("input", updatePosition);
