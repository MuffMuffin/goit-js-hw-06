const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsHTML = document.querySelector("#ingredients");

const ingredientsListItems = ingredients.map((food) => {
  let listItem = document.createElement("li");
  listItem.textContent = food;
  listItem.className = "item";
  return listItem;
});

ingredientsHTML.append(...ingredientsListItems);
