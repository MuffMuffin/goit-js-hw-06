const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsHTML = document.querySelector("#ingredients");

ingredientsHTML.append(
  ...ingredients.map((food) => {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    listItem.className = "item";
    return listItem;
  })
);

// Я ще не мав часу подивитися заняття (вибачте, багато роботи та домашніх
// питань на цьому тижні) але ось мій варіант з .map та однною операцією
// інсьорту, не знаю чи це правильно.
