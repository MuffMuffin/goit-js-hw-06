const valueField = document.querySelector("#value");
const counterField = document.querySelector("#counter");
let counterValue = 0;

counterField.addEventListener("click", (event) => {
  switch (event.target.dataset.action) {
    case "increment":
      counterValue += 1;
      valueField.textContent = counterValue;
      break;
    case "decrement":
      counterValue -= 1;
      valueField.textContent = counterValue;
      break;
  }
});
