let counterValue = 0;
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
let value = document.querySelector("#value");

const increment = () => {
 counterValue += 1;
 value.innerHTML = counterValue;
};
plusBtn.addEventListener("click", increment);

const decrement = () => {
 counterValue -= 1;
 value.innerHTML = counterValue;
};
minusBtn.addEventListener("click", decrement);

// console.log(counterValue);
