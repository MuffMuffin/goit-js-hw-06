const sizeSlider = document.getElementById("font-size-control");
const targetText = document.getElementById("text");

sizeSlider.addEventListener("input", () => {
  targetText.style.fontSize = `${sizeSlider.value}px`;
});
