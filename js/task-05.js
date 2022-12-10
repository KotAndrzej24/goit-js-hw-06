const inputName = document.querySelector("#name-input");
const showName = document.querySelector("#name-output");

inputName.addEventListener("input", (e) => {
 if (e.currentTarget.value === "") {
  showName.textContent = "Anonymous";
 } else {
  showName.textContent = e.currentTarget.value;
 }
});
