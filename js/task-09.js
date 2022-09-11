function getRandomHexColor() {
  let color = "";
  do {
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } while (color.length < 7);
  return color;
}
//Ця функція була поламана: іноді видає 5 замість 6 значень hex.

function invertHex(hex) {
  return `#${(Number(`0x1${hex.substring(1)}`) ^ 0xffffff)
    .toString(16)
    .substring(1)
    .toUpperCase()}`;
}
//Ця функція дає "протележний" (інверсію) кольору.

document.styleSheets[0].insertRule(
  ".change-color {border: none; border-radius: 6px; font-weight: 800; mix-blend-mode: difference;}"
);
//Це міняє стилі кнопки.

const changeButton = document.querySelector(".change-color");
const colorDescription = document.querySelector(".color");
const widget = document.querySelector(".widget");

changeButton.addEventListener("click", () => {
  let pregenRandom = getRandomHexColor();
  document.body.style.backgroundColor = pregenRandom;
  widget.style.color = invertHex(pregenRandom);
  colorDescription.textContent = pregenRandom.toUpperCase();
});
