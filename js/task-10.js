function getRandomHexColor() {
  let color = "";
  do {
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } while (color.length < 7);
  return color;
}

function removeCSS(rule) {
  let ruleList = [...styles.cssRules].map((rule) => {
    return rule.selectorText;
  });
  let ruleIndex = ruleList.indexOf(rule);
  if (ruleIndex !== -1) {
    styles.deleteRule(ruleIndex);
  }
}

const inputField = document.querySelector("#controls > input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxesNest = document.getElementById("boxes");
const styles = document.styleSheets[0];

inputField.value = 1;

function createBoxes(amount) {
  if (inputField.value <= 0) {
    removeCSS("#boxes");
    boxesNest.innerHTML =
      "Please enter an amount greater than 0 or no box-obelisk for you! >[";
    inputField.value = 1;
    return;
  } else if (inputField.value > 100) {
    removeCSS("#boxes");
    boxesNest.innerHTML =
      "We are sorry, but we are not allowed to render obelisks made of more than 100 boxes... :'(";
    inputField.value = 1;
    return;
  }
  boxesNest.textContent = "";

  let color1 = "";
  let color2 = getRandomHexColor();

  for (let i = 0; i < amount; i += 1) {
    color1 = color2;
    color2 = getRandomHexColor();

    let box = document.createElement("div");
    boxesNest.append(box);

    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;

    if (i === amount - 1 && i !== 0) {
      box.style.background = `linear-gradient(to bottom, ${color1}, ${
        color2 + "00"
      })`;
    } else {
      box.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
    }

    if (i === 0) {
      box.style.clipPath = "polygon(50% 0, 50% 0, 100% 100%, 0% 100%)";
    } else {
      box.style.clipPath = `polygon(${0 + (5 / (30 + 10 * i)) * 100}% 0, ${
        100 - (5 / (30 + 10 * i)) * 100
      }% 0, 100% 100%, 0% 100%)`;
    }

    box.style.filter = "brightness(140%) saturate(145%)";
    box.style.margin = "0 auto";
  }

  styles.insertRule(
    "#boxes {background: radial-gradient(#ccccccd0 1%, #fafafa9f 70%, #fafafa00);}",
    styles.length
  );
}

function destroyBoxes() {
  removeCSS("#boxes");
  boxesNest.innerHTML = "";
  inputField.value = 1;
}

create.addEventListener("click", () => {
  createBoxes(inputField.value);
});

destroy.addEventListener("click", () => {
  destroyBoxes();
});
