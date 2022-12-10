const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", (e) => {
 const fontSize = e.currentTarget.value + "px";
 text.style.fontSize = fontSize;
});
