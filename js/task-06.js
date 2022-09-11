const input = document.querySelector("#validation-input");
const inputLength = parseInt(input.dataset.length);

input.addEventListener("blur", () => {
  if (input.value.length === inputLength) {
    input.removeAttribute("class");
    input.classList.add("valid");
  } else if (input.value.length == 0) {
    input.removeAttribute("class");
  } else {
    input.removeAttribute("class");
    input.classList.add("invalid");
  }
});

//Тут 3 ітерації IF просто для стилістики: коли нічого не введено
//інпут бокс повертається до дефолтного стану.
