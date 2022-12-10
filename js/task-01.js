const numberOfCategories = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${numberOfCategories}`);

// What category and number of elements

const whatCategory = document.querySelectorAll("h2");
whatCategory.forEach((e) =>
 console.log(
  `Category: ${e.innerText}
Elements: ${e.nextElementSibling.children.length}`
 )
);
