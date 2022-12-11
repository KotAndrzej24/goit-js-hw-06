function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const addBtn = document.querySelector("button[data-create]");
const removeBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const removeBox = document.querySelector("#boxes");

let initialSize = 30;
const initialData = 30;

function createBoxes(amount) {
 input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
 });

 addBtn.addEventListener("click", () => {
  for (let i = 0; i < amount; i++) {
   const newDiv = document.createElement("div");
   newDiv.style.width = `${initialSize}px`;
   newDiv.style.height = `${initialSize}px`;
   initialSize += 10;
   newDiv.style.backgroundColor = getRandomHexColor();
   boxes.appendChild(newDiv);
  }
 });
}

function destroyBoxes() {
 removeBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
  initialSize = initialData;
 });
}

createBoxes();
destroyBoxes();
