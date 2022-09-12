const input = document.querySelector("#validation-input");
const inputLength = parseInt(input.dataset.length);

input.addEventListener("blur", () => {
  switch (input.value.length) {
    case inputLength:
      input.classList.remove("invalid");
      input.classList.add("valid");
      break;
    default:
      input.classList.remove("valid");
      input.classList.add("invalid");
      break;
  }
});
