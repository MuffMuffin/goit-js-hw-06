const categoryArray = document.querySelectorAll(".item");

console.log("Number of categories: " + categoryArray.length);

categoryArray.forEach((element) => {
  let subelements = element.querySelectorAll("li");
  let subelementsText = [...subelements].map((subelement) => {
    return subelement.textContent;
  });

  console.log("\n");
  console.log("Category: " + element.querySelector("h2").textContent);
  console.log(
    `Elements: ${subelements.length} (${subelementsText.join(", ")})`
  );
});
