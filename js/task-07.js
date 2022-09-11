const sizeSlider = document.querySelector("#font-size-control");
const targetText = document.querySelector("#text");

sizeSlider.addEventListener("input", () => {
  targetText.style.fontSize = `${sizeSlider.value}px`;
});
