const categoryArray = document.querySelectorAll("ul#categories > li.item > h2");

console.log("Number of categories: " + categoryArray.length);

categoryArray.forEach((element) => {
  const innerElements = element.nextElementSibling.children;

  let innerElementsText = Array.from(innerElements).map((subelement) => {
    return subelement.innerText;
  });

  console.log("\n");
  console.log("Category: " + element.innerText);
  console.log(
    `Elements: ${innerElements.length} (${innerElementsText.join(", ")})`
  );
});
