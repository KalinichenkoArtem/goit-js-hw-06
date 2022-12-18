const input = document.querySelector("input");
const text = document.querySelector("span");

console.log(input.value);
console.log(text.style.fontSize);

input.addEventListener('input', (event) => {
    const fontSize = event.currentTarget.value;
    text.style.fontSize = `${fontSize}px`;
})