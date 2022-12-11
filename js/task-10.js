function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const addBtn = document.querySelector("button[data-create]");
const removeBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const removeBox = document.querySelector("#boxes");

function createBoxes(amount) {
 input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
 });

 addBtn.addEventListener("click", () => {
  for (let i = 0; i < amount; i++) {
   const newDiv = document.createElement("div");
   boxes.append(newDiv);
   newDiv.style.width = 30 + 10 * i + "px";
   newDiv.style.height = 30 + 10 * i + "px";
   newDiv.style.backgroundColor = getRandomHexColor();
  }
 });
}

function destroyBoxes() {
 removeBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
 });
}

createBoxes();
destroyBoxes();
