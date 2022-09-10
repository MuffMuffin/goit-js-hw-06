function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function invertHex(hex) {
  return `#${(Number(`0x1${hex.substring(1)}`) ^ 0xffffff)
    .toString(16)
    .substring(1)
    .toUpperCase()}`;
}

const changeButton = document.querySelector(".change-color");
const colorDescription = document.querySelector(".color");
const widget = document.querySelector(".widget");

changeButton.addEventListener("click", () => {
  let pregenRandom = getRandomHexColor();
  document.body.style.backgroundColor = pregenRandom;
  widget.style.color = invertHex(pregenRandom);
  colorDescription.textContent = pregenRandom.toUpperCase();
});
