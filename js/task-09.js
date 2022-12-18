function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.body;
const span = document.querySelector("span");
const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
});