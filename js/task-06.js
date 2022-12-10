const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (e) => {
 if (e.currentTarget.value.length === 6) {
  console.log(e.currentTarget.value);
  textInput.classList.add("valid");
  textInput.classList.remove("invalid");
 } else {
  console.log(e.currentTarget.value);
  textInput.classList.add("invalid");
  textInput.classList.remove("valid");
 }
});
