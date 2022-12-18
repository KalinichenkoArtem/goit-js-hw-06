const btnOne = document.querySelector("button[data-action='decrement']");
const btnTwo = document.querySelector("button[data-action='increment']");
const counterValue = document.querySelector("span");

counterValue.innerHTML = 0;


btnOne.addEventListener("click", () => {
    counterValue.innerHTML -= 1;
});

btnTwo.addEventListener("click", () => {
    counterValue.innerHTML = +counterValue.innerHTML + 1;
});