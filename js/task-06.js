const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  if (input.value.length >= input.dataset.length) {
    input.removeAttribute("class");
    input.classList.add("valid");
  } else if (input.value.length == 0) {
    input.removeAttribute("class");
  } else if (input.value.length < input.dataset.length) {
    input.removeAttribute("class");
    input.classList.add("invalid");
  }
});
