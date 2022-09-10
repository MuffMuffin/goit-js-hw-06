const valueField = document.getElementById("value");
const counterField = document.getElementById("counter");
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
