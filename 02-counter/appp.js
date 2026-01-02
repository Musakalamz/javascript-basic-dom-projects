const value = document.getElementById("value");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

increase.addEventListener("click", () => {
  let currentValue = parseInt(value.textContent, 10);
  currentValue += 1;
  value.textContent = currentValue;
  value.style.color = "red";
});

decrease.addEventListener("click", () => {
  let currentValue = parseInt(value.textContent, 10);
  currentValue -= 1;
  value.textContent = currentValue;
  value.style.color = "green";
});

reset.addEventListener("click", () => {
  value.textContent = "0";
  value.style.color = "black";
});
