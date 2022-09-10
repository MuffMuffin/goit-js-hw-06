const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsHTML = document.getElementById("ingredients");

ingredients.forEach((food) => {
  let listItem = document.createElement("li");
  listItem.textContent = food;
  listItem.className = "item";
  ingredientsHTML.append(listItem);
});
