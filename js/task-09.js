function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const text = document.querySelector(".color");

const changeColor = (e) => {
 const randomColor = getRandomHexColor();
 body.style.backgroundColor = randomColor;
 text.textContent = randomColor;
};

btnColor.addEventListener("click", changeColor);
