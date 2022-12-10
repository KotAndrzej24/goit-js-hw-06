const ingredients = [
 "Potatoes",
 "Mushrooms",
 "Garlic",
 "Tomatos",
 "Herbs",
 "Condiments",
];

const listOfIngredients = document.querySelector("ul");

ingredients.forEach((el, i) => {
 const li = document.createElement("li");
 listOfIngredients.append(li);
 li.textContent = ingredients[i];
 li.classList.add("item");
});

console.log(ingredients);
