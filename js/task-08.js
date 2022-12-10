const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
 e.preventDefault();
 const {
  elements: { email, password },
 } = e.currentTarget;

 if (email.value === "" || password.value === "") {
  return alert("Pola powinny być wypełnione");
 }

 const obj = { email: email.value, password: password.value };

 console.log(obj);
 e.currentTarget.reset();
}
