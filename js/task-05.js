const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value == 0) {
    output.textContent = "Anonymous";
  }
});
